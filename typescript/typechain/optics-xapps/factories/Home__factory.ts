/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Home, HomeInterface } from "../Home";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Commit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "committedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "commit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCommitment",
    outputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "improperUpdate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516127413803806127418339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff166126d361006e6000398061067052806107d0528061114452506126d36000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80639df6c8e1116100ee578063ebf0c71711610097578063fa31de0111610071578063fa31de011461047a578063fd54b22814610532578063fdab463d1461053a578063ffa1ad7414610542576101a3565b8063ebf0c7171461041e578063f2fde38b14610426578063f522ad1114610459576101a3565b8063c4d66de8116100c8578063c4d66de81461031d578063df034cd014610350578063e350320814610358576101a3565b80639df6c8e1146102c9578063b95a2001146102d1578063c19d93fb146102f4576101a3565b8063715018a6116101505780638da5cb5b1161012a5780638da5cb5b146102325780639776120e146102635780639d54f41914610296576101a3565b8063715018a6146101ec578063839df945146101f45780638d3638f414610211576101a3565b806345630b1a1161018157806345630b1a146101d4578063522ae002146101dc57806367a6771d146101e4576101a3565b806306661abd146101a857806326987b60146101c25780633c7a3aff146101ca575b600080fd5b6101b0610560565b60408051918252519081900360200190f35b6101b0610566565b6101d2610578565b005b6101b0610669565b6101b0610699565b6101b061069f565b6101d26106a5565b6101b06004803603602081101561020a57600080fd5b50356107bc565b6102196107ce565b6040805163ffffffff9092168252519081900360200190f35b61023a6107f2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101d26004803603602081101561027957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661080e565b6101d2600480360360208110156102ac57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108c2565b61023a610951565b610219600480360360208110156102e757600080fd5b503563ffffffff1661096d565b6102fc610985565b6040518082600281111561030c57fe5b815260200191505060405180910390f35b6101d26004803603602081101561033357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109a8565b61023a610bba565b61040a6004803603606081101561036e57600080fd5b81359160208101359181019060608101604082013564010000000081111561039557600080fd5b8201836020820111156103a757600080fd5b803590602001918460018302840111640100000000831117156103c957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bdc945050505050565b604080519115158252519081900360200190f35b6101b0610e26565b6101d26004803603602081101561043c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e32565b610461610fd4565b6040805192835260208301919091528051918290030190f35b6101d26004803603606081101561049057600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156104bd57600080fd5b8201836020820111156104cf57600080fd5b803590602001918460018302840111640100000000831117156104f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fea945050505050565b6101b061124d565b6101b0611253565b61054a61125d565b6040805160ff9092168252519081900360200190f35b60205490565b60006001610572610560565b03905090565b6002605254760100000000000000000000000000000000000000000000900460ff1660028111156105a557fe5b141561061257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b600061061c611253565b90506000610628610566565b600083815260e6602052604080822083905551919250829184917f799ef6227daddeafcc6d7ef3c17b1bdc92ea0936ac02d7d87767eee08e76d4f091a35050565b60006106947f0000000000000000000000000000000000000000000000000000000000000000611262565b905090565b61080081565b60e95481565b6106ad6112d7565b73ffffffffffffffffffffffffffffffffffffffff166106cb6107f2565b73ffffffffffffffffffffffffffffffffffffffff161461074d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60b45460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360b480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60e66020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60b45473ffffffffffffffffffffffffffffffffffffffff1690565b6108166112d7565b73ffffffffffffffffffffffffffffffffffffffff166108346107f2565b73ffffffffffffffffffffffffffffffffffffffff16146108b657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6108bf816112db565b50565b60e85473ffffffffffffffffffffffffffffffffffffffff16331461094857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f21757064617465724d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b6108bf816113c8565b60e85473ffffffffffffffffffffffffffffffffffffffff1681565b60e76020526000908152604090205463ffffffff1681565b605254760100000000000000000000000000000000000000000000900460ff1681565b605254610100900460ff16806109c157506109c1611449565b806109cf575060525460ff16155b610a24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061264e602e913960400191505060405180910390fd5b605254610100900460ff16158015610a8a57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610a9261145a565b610a9b826112db565b60e854604080517fdf034cd0000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163df034cd0916004808301926020929190829003018186803b158015610b0657600080fd5b505afa158015610b1a573d6000803e3d6000fd5b505050506040513d6020811015610b3057600080fd5b50519050610b3d8161157d565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a1508015610bb657605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60525462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002605254760100000000000000000000000000000000000000000000900460ff166002811115610c0b57fe5b1415610c7857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610c83848484611711565b610cee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b600084815260e66020526040902054831415610d6b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f21696d70726f7065720000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610d736117a9565b7f882c1a04062ec61e31b72568d9de0acf8abe4bea08bc1e15c8f35ffdf27892118484846040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610de0578181015183820152602001610dc8565b50505050905090810190601f168015610e0d5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15060019392505050565b60006106946000611889565b610e3a6112d7565b73ffffffffffffffffffffffffffffffffffffffff16610e586107f2565b73ffffffffffffffffffffffffffffffffffffffff1614610eda57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610f46576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126066026913960400191505060405180910390fd5b60b45460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360b480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60e954600081815260e660205260409020549091565b6002605254760100000000000000000000000000000000000000000000900460ff16600281111561101757fe5b141561108457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610800815111156110f657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d736720746f6f206c6f6e670000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808416600090815260e7602052604081208054808416600181019094167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090911617905561116d7f000000000000000000000000000000000000000000000000000000000000000033848888886118a2565b80516020820120909150611182600082611978565b61118c8684611a80565b67ffffffffffffffff1660016111a0610560565b03827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a60e954866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561120a5781810151838201526020016111f2565b50505050905090810190601f1680156112375780820380516001836020036101000a031916815260200191505b50935050505060405180910390a4505050505050565b60205481565b6000610694610e26565b600081565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b3390565b6112e481611a9a565b61134f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b60e8805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b6052805473ffffffffffffffffffffffffffffffffffffffff83166201000081027fffffffffffffffffffff0000000000000000000000000000000000000000ffff9092169190911790915560408051918252517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150565b600061145430611a9a565b15905090565b605254610100900460ff16806114735750611473611449565b80611481575060525460ff16155b6114d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061264e602e913960400191505060405180910390fd5b605254610100900460ff1615801561153c57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611544611aa0565b61154c611bb2565b80156108bf57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff16806115965750611596611449565b806115a4575060525460ff16155b6115f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061264e602e913960400191505060405180910390fd5b605254610100900460ff1615801561165f57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b605280547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602177fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff167601000000000000000000000000000000000000000000001790558015610bb657605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b60008061171c610669565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061175d81611d42565b60525490915062010000900473ffffffffffffffffffffffffffffffffffffffff166117898285611d93565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b6117b1611e2d565b60e854604080517f5b3c2cbf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691635b3c2cbf9160248082019260009290919082900301818387803b15801561182357600080fd5b505af1158015611837573d6000803e3d6000fd5b50506052546040513393506201000090910473ffffffffffffffffffffffffffffffffffffffff1691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b600061189c82611897611e70565b612331565b92915050565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b6020831061193357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016118f6565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff116119ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b6020811015611a7d578160011660011415611a2a5782848260208110611a2057fe5b015550610bb69050565b838160208110611a3657fe5b015483604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120925060028281611a7257fe5b0491506001016119fe565b50fe5b63ffffffff1660209190911b67ffffffff00000000161790565b3b151590565b605254610100900460ff1680611ab95750611ab9611449565b80611ac7575060525460ff16155b611b1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061264e602e913960400191505060405180910390fd5b605254610100900460ff1615801561154c57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff9091166101001716600117905580156108bf57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff1680611bcb5750611bcb611449565b80611bd9575060525460ff16155b611c2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061264e602e913960400191505060405180910390fd5b605254610100900460ff16158015611c9457605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000611c9e6112d7565b60b480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156108bf57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b60008151604114611e0557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a611e23868285856123ef565b9695505050505050565b605280547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b611e786125e6565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b60208110156123e757600182821c16600086836020811061235857fe5b01549050816001141561239b57808560405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094506123dd565b848684602081106123a857fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b505060010161233b565b505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561246a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061262c6022913960400191505060405180910390fd5b8360ff16601b148061247f57508360ff16601c145b6124d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061267c6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612530573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166125dd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b604051806104000160405280602090602082028036833750919291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565a2646970667358221220bd4246db711b299670351312c7142fd53bf41ed7e383fff6647a7c54d439e79164736f6c63430007060033";

export class Home__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Home> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Home>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Home {
    return super.attach(address) as Home;
  }
  connect(signer: Signer): Home__factory {
    return super.connect(signer) as Home__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HomeInterface {
    return new utils.Interface(_abi) as HomeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Home {
    return new Contract(address, _abi, signerOrProvider) as Home;
  }
}
