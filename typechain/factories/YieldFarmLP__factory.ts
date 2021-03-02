/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { YieldFarmLP } from "../YieldFarmLP";

export class YieldFarmLP__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bondTokenAddress: string,
    uniLP: string,
    stakeContract: string,
    communityVault: string,
    overrides?: Overrides
  ): Promise<YieldFarmLP> {
    return super.deploy(
      bondTokenAddress,
      uniLP,
      stakeContract,
      communityVault,
      overrides || {}
    ) as Promise<YieldFarmLP>;
  }
  getDeployTransaction(
    bondTokenAddress: string,
    uniLP: string,
    stakeContract: string,
    communityVault: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      bondTokenAddress,
      uniLP,
      stakeContract,
      communityVault,
      overrides || {}
    );
  }
  attach(address: string): YieldFarmLP {
    return super.attach(address) as YieldFarmLP;
  }
  connect(signer: Signer): YieldFarmLP__factory {
    return super.connect(signer) as YieldFarmLP__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldFarmLP {
    return new Contract(address, _abi, signerOrProvider) as YieldFarmLP;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bondTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniLP",
        type: "address",
      },
      {
        internalType: "address",
        name: "stakeContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "communityVault",
        type: "address",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "epochId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epochsHarvested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalValue",
        type: "uint256",
      },
    ],
    name: "MassHarvest",
    type: "event",
  },
  {
    inputs: [],
    name: "NR_OF_EPOCHS",
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
    name: "TOTAL_DISTRIBUTED_AMOUNT",
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
    name: "epochDuration",
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
    name: "epochStart",
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
    name: "getCurrentEpoch",
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
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "epochId",
        type: "uint128",
      },
    ],
    name: "getEpochStake",
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
    inputs: [
      {
        internalType: "uint128",
        name: "epochId",
        type: "uint128",
      },
    ],
    name: "getPoolSize",
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
    inputs: [
      {
        internalType: "uint128",
        name: "epochId",
        type: "uint128",
      },
    ],
    name: "harvest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastInitializedEpoch",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "massHarvest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userLastEpochIdHarvested",
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
];

const _bytecode =
  "0x60656080818152610d406040529060a0610ca080368337505081516200002d9260049250602001906200034a565b503480156200003b57600080fd5b5060405162000f5638038062000f56833981810160405260808110156200006157600080fd5b508051602080830151604080850151606090950151600280546001600160a01b03199081166001600160a01b0380891691909117909255600080548216838716179055600380548216838a161790819055600180549092168385161790915583516327f843b560e11b815293519697949694959294911692634ff0876a926004808301939192829003018186803b158015620000fc57600080fd5b505afa15801562000111573d6000803e3d6000fd5b505050506040513d60208110156200012857600080fd5b505160088190556003546040805163f4a4341d60e01b815290516001600160a01b039092169163f4a4341d91600480820192602092909190829003018186803b1580156200017557600080fd5b505afa1580156200018a573d6000803e3d6000fd5b505050506040513d6020811015620001a157600080fd5b505101600955620001e46064620001d0621e8480670de0b6b3a7640000620001f2602090811b620005cb17901c565b6200025960201b620006241790919060201c565b60055550620003b192505050565b600082620002035750600062000253565b828202828482816200021157fe5b0414620002505760405162461bcd60e51b815260040180806020018281038252602181526020018062000f356021913960400191505060405180910390fd5b90505b92915050565b60006200025083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620002a360201b60201c565b60008183620003335760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002f7578181015183820152602001620002dd565b50505050905090810190601f168015620003255780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200034057fe5b0495945050505050565b82805482825590600052602060002090810192821562000388579160200282015b82811115620003885782518255916020019190600101906200036b565b50620003969291506200039a565b5090565b5b808211156200039657600081556001016200039b565b610b7480620003c16000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063674247d611610081578063a43564eb1161005b578063a43564eb14610169578063b97dd9e21461018f578063f7e251f814610197576100c9565b8063674247d6146101355780639c7ec8811461013d578063a1c130d414610161576100c9565b8063290e4544116100b2578063290e4544146100f057806343312451146100f85780634ff0876a1461012d576100c9565b806305917ac0146100ce57806315e5a1e5146100e8575b600080fd5b6100d66101bd565b60408051918252519081900360200190f35b6100d66101c2565b6100d66101c8565b6100d66004803603604081101561010e57600080fd5b5080356001600160a01b031690602001356001600160801b031661032c565b6100d6610341565b6100d6610347565b61014561034e565b604080516001600160801b039092168252519081900360200190f35b6100d661035d565b6100d66004803603602081101561017f57600080fd5b50356001600160801b0316610379565b6100d66105a8565b6100d6600480360360208110156101ad57600080fd5b50356001600160801b03166105c0565b606481565b60095481565b60008060006101e960016101da610666565b6001600160801b0316906106ab565b905060648111156101f8575060645b336000908152600760205260409020546001600160801b03166001015b81816001600160801b03161161023a5761022e816106ed565b90920191600101610215565b50336000818152600760209081526040918290205482516001600160801b039091168503815290810185905281517fb68dafc1da13dc868096d0b87347c831d0bda92d178317eb1dec7f788444485c929181900390910190a2811561032557600254600154604080516323b872dd60e01b81526001600160a01b03928316600482015233602482015260448101869052905191909216916323b872dd9160648083019260209291908290030181600087803b1580156102f857600080fd5b505af115801561030c573d6000803e3d6000fd5b505050506040513d602081101561032257600080fd5b50505b5090505b90565b600061033883836107a7565b90505b92915050565b60085481565b621e848081565b6006546001600160801b031681565b336000908152600760205260409020546001600160801b031690565b6000816001600160801b031661038d610666565b6001600160801b0316116103e8576040805162461bcd60e51b815260206004820152601b60248201527f546869732065706f636820697320696e20746865206675747572650000000000604482015290519081900360640190fd5b6064826001600160801b03161115610447576040805162461bcd60e51b815260206004820152601f60248201527f4d6178696d756d206e756d626572206f662065706f6368732069732031303000604482015290519081900360640190fd5b336000908152600760205260409020546001600160801b038084169161046f9116600161085e565b146104c1576040805162461bcd60e51b815260206004820152601060248201527f4861727665737420696e206f7264657200000000000000000000000000000000604482015290519081900360640190fd5b60006104cc836106ed565b9050801561056057600254600154604080516323b872dd60e01b81526001600160a01b03928316600482015233602482015260448101859052905191909216916323b872dd9160648083019260209291908290030181600087803b15801561053357600080fd5b505af1158015610547573d6000803e3d6000fd5b505050506040513d602081101561055d57600080fd5b50505b6040805182815290516001600160801b0385169133917f04ad45a69eeed9c390c3a678fed2d4b90bde98e742de9936d5e0915bf3d0ea4e9181900360200190a390505b919050565b60006105b2610666565b6001600160801b0316905090565b600061033b826108b8565b6000826105da5750600061033b565b828202828482816105e757fe5b04146103385760405162461bcd60e51b8152600401808060200182810382526021815260200180610b1e6021913960400191505060405180910390fd5b600061033883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061095c565b600060095442101561067a57506000610329565b6106a660016106a060085461069a600954426106ab90919063ffffffff16565b90610624565b9061085e565b905090565b600061033883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506109fe565b6006546000906001600160801b038084169116101561070f5761070f82610a58565b33600090815260076020526040902080546fffffffffffffffffffffffffffffffff19166001600160801b03841690811790915560048054909190811061075257fe5b90600052602060002001546000141561076d575060006105a3565b61033b6004836001600160801b03168154811061078657fe5b906000526020600020015461069a61079e33866107a7565b600554906105cb565b6003546000805490916001600160a01b0390811691638c028dd0918691166107ce86610b17565b6040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b03168152602001826001600160801b03168152602001935050505060206040518083038186803b15801561082b57600080fd5b505afa15801561083f573d6000803e3d6000fd5b505050506040513d602081101561085557600080fd5b50519392505050565b600082820183811015610338576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6003546000805490916001600160a01b0390811691632ca32d7e91166108dd85610b17565b6040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160801b031681526020019250505060206040518083038186803b15801561092a57600080fd5b505afa15801561093e573d6000803e3d6000fd5b505050506040513d602081101561095457600080fd5b505192915050565b600081836109e85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156109ad578181015183820152602001610995565b50505050905090810190601f1680156109da5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816109f457fe5b0495945050505050565b60008184841115610a505760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156109ad578181015183820152602001610995565b505050900390565b6006546001600160801b0380831691610a739116600161085e565b14610ac5576040805162461bcd60e51b815260206004820152601f60248201527f45706f63682063616e20626520696e6974206f6e6c7920696e206f7264657200604482015290519081900360640190fd5b600680546fffffffffffffffffffffffffffffffff19166001600160801b038316179055610af2816108b8565b6004826001600160801b031681548110610b0857fe5b60009182526020909120015550565b6001019056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220996b9acd28ac1e4dabdb71687558557a7da2b4574fdbc674e9c291d6528efc8364736f6c634300060c0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77";
