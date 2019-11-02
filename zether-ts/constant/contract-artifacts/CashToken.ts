export const CashToken = {
   contractName: 'CashToken',
   abi: [
     {
       constant: false,
       inputs: [
         {
           name: 'spender',
           type: 'address',
         },
         {
           name: 'value',
           type: 'uint256',
         },
       ],
       name: 'approve',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: true,
       inputs: [],
       name: 'totalSupply',
       outputs: [
         {
           name: '',
           type: 'uint256',
         },
       ],
       payable: false,
       stateMutability: 'view',
       type: 'function',
     },
     {
       constant: false,
       inputs: [
         {
           name: 'sender',
           type: 'address',
         },
         {
           name: 'recipient',
           type: 'address',
         },
         {
           name: 'amount',
           type: 'uint256',
         },
       ],
       name: 'transferFrom',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: false,
       inputs: [
         {
           name: 'spender',
           type: 'address',
         },
         {
           name: 'addedValue',
           type: 'uint256',
         },
       ],
       name: 'increaseAllowance',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: false,
       inputs: [
         {
           name: 'account',
           type: 'address',
         },
         {
           name: 'amount',
           type: 'uint256',
         },
       ],
       name: 'mint',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: true,
       inputs: [
         {
           name: 'account',
           type: 'address',
         },
       ],
       name: 'balanceOf',
       outputs: [
         {
           name: '',
           type: 'uint256',
         },
       ],
       payable: false,
       stateMutability: 'view',
       type: 'function',
     },
     {
       constant: false,
       inputs: [
         {
           name: 'account',
           type: 'address',
         },
       ],
       name: 'addMinter',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: false,
       inputs: [],
       name: 'renounceMinter',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: false,
       inputs: [
         {
           name: 'spender',
           type: 'address',
         },
         {
           name: 'subtractedValue',
           type: 'uint256',
         },
       ],
       name: 'decreaseAllowance',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: false,
       inputs: [
         {
           name: 'recipient',
           type: 'address',
         },
         {
           name: 'amount',
           type: 'uint256',
         },
       ],
       name: 'transfer',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
     },
     {
       constant: true,
       inputs: [
         {
           name: 'account',
           type: 'address',
         },
       ],
       name: 'isMinter',
       outputs: [
         {
           name: '',
           type: 'bool',
         },
       ],
       payable: false,
       stateMutability: 'view',
       type: 'function',
     },
     {
       constant: true,
       inputs: [
         {
           name: 'owner',
           type: 'address',
         },
         {
           name: 'spender',
           type: 'address',
         },
       ],
       name: 'allowance',
       outputs: [
         {
           name: '',
           type: 'uint256',
         },
       ],
       payable: false,
       stateMutability: 'view',
       type: 'function',
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: true,
           name: 'account',
           type: 'address',
         },
       ],
       name: 'MinterAdded',
       type: 'event',
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: true,
           name: 'account',
           type: 'address',
         },
       ],
       name: 'MinterRemoved',
       type: 'event',
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: true,
           name: 'from',
           type: 'address',
         },
         {
           indexed: true,
           name: 'to',
           type: 'address',
         },
         {
           indexed: false,
           name: 'value',
           type: 'uint256',
         },
       ],
       name: 'Transfer',
       type: 'event',
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: true,
           name: 'owner',
           type: 'address',
         },
         {
           indexed: true,
           name: 'spender',
           type: 'address',
         },
         {
           indexed: false,
           name: 'value',
           type: 'uint256',
         },
       ],
       name: 'Approval',
       type: 'event',
     },
   ],
   // tslint:disable-next-line:max-line-length
   bytecode: '0x608060405261001c33610021640100000000026401000000009004565b610254565b610042816003610088640100000000026111ff179091906401000000009004565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6100a18282610174640100000000026401000000009004565b151515610116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156101fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061172b6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6114c8806102636000396000f3fe608060405234801561001057600080fd5b50600436106100d1576000357c010000000000000000000000000000000000000000000000000000000090048063983b2d561161008e578063983b2d56146103045780639865027514610348578063a457c2d714610352578063a9059cbb146103b8578063aa271e1a1461041e578063dd62ed3e1461047a576100d1565b8063095ea7b3146100d657806318160ddd1461013c57806323b872dd1461015a57806339509351146101e057806340c10f191461024657806370a08231146102ac575b600080fd5b610122600480360360408110156100ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104f2565b604051808215151515815260200191505060405180910390f35b610144610509565b6040518082815260200191505060405180910390f35b6101c66004803603606081101561017057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610513565b604051808215151515815260200191505060405180910390f35b61022c600480360360408110156101f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105c4565b604051808215151515815260200191505060405180910390f35b6102926004803603604081101561025c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610669565b604051808215151515815260200191505060405180910390f35b6102ee600480360360208110156102c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106df565b6040518082815260200191505060405180910390f35b6103466004803603602081101561031a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610727565b005b610350610793565b005b61039e6004803603604081101561036857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061079e565b604051808215151515815260200191505060405180910390f35b610404600480360360408110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610843565b604051808215151515815260200191505060405180910390f35b6104606004803603602081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061085a565b604051808215151515815260200191505060405180910390f35b6104dc6004803603604081101561049057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610877565b6040518082815260200191505060405180910390f35b60006104ff3384846108fe565b6001905092915050565b6000600254905090565b6000610520848484610af9565b6105b984336105b485600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d9990919063ffffffff16565b6108fe565b600190509392505050565b600061065f338461065a85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2490919063ffffffff16565b6108fe565b6001905092915050565b60006106743361085a565b15156106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806113e16030913960400191505060405180910390fd5b6106d58383610eae565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107303361085a565b1515610787576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806113e16030913960400191505060405180910390fd5b6107908161106b565b50565b61079c336110c5565b565b6000610839338461083485600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d9990919063ffffffff16565b6108fe565b6001905092915050565b6000610850338484610af9565b6001905092915050565b600061087082600361111f90919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610986576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806114796024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610a0e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806113bf6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b81576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806114546025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610c09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061139c6023913960400191505060405180910390fd5b610c5a816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d9990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ced816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2490919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211151515610e13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b6000808284019050838110151515610ea4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b610f6881600254610e2490919063ffffffff16565b600281905550610fbf816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2490919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b61107f8160036111ff90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6110d98160036112dc90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156111a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114326022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611209828261111f565b15151561127e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6112e6828261111f565b151561133d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806114116021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a7230582078be80508f94b2901271182d2b93b598d6d6f0137beed2bb59195eb73c2c037a0029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373',
 };
