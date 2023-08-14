// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

import "forge-std/Test.sol";

import {HypNativeScaled} from "../extensions/HypNativeScaled.sol";
import {HypERC20} from "../HypERC20.sol";
import {TypeCasts} from "@hyperlane-xyz/core/contracts/libs/TypeCasts.sol";
import {MockHyperlaneEnvironment} from "@hyperlane-xyz/core/contracts/mock/MockHyperlaneEnvironment.sol";

contract HypNativeScaledTest is Test {
    uint32 nativeDomain = 1;
    uint32 synthDomain = 2;

    uint256 synthSupply = 123456789;
    uint256 scale = 10**9;

    HypNativeScaled native;
    HypERC20 synth;

    MockHyperlaneEnvironment environment;

    function setUp() public {
        environment = new MockHyperlaneEnvironment(synthDomain, nativeDomain);

        synth = new HypERC20();
        synth.initialize(
            address(environment.mailboxes(synthDomain)),
            address(environment.igps(synthDomain)),
            synthSupply,
            "Zebec BSC Token",
            "ZBC"
        );

        native = new HypNativeScaled(scale);
        native.initialize(
            address(environment.mailboxes(nativeDomain)),
            address(environment.igps(nativeDomain))
        );

        native.enrollRemoteRouter(
            synthDomain,
            TypeCasts.addressToBytes32(address(synth))
        );
        synth.enrollRemoteRouter(
            nativeDomain,
            TypeCasts.addressToBytes32(address(native))
        );
    }

    uint256 receivedValue;

    receive() external payable {
        receivedValue = msg.value;
    }

    function test_handle(uint256 amount) public {
        vm.assume(amount < synthSupply);

        bytes32 recipient = TypeCasts.addressToBytes32(address(this));
        synth.transferRemote(nativeDomain, recipient, amount);

        uint256 nativeValue = amount * scale;
        vm.deal(address(native), nativeValue);

        environment.processNextPendingMessage();
        assertEq(receivedValue, nativeValue);
    }

    function test_tranferRemote(uint256 nativeValue) public {
        vm.assume(nativeValue < address(this).balance);

        address recipient = address(0xdeadbeef);
        bytes32 bRecipient = TypeCasts.addressToBytes32(recipient);
        native.transferRemote{value: nativeValue}(
            synthDomain,
            bRecipient,
            nativeValue
        );

        uint256 synthValue = nativeValue / scale;
        environment.processNextPendingMessageFromDestination();
        assertEq(synth.balanceOf(recipient), synthValue);
    }
}