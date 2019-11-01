export const ERC20Interface = {
  contractName: 'ERC20Interface',
  abi: [
     {
        constant: false,
        inputs: [
           {
              name: 'to',
              type: 'address',
           },
           {
              name: 'value',
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
        constant: false,
        inputs: [
           {
              name: 'from',
              type: 'address',
           },
           {
              name: 'to',
              type: 'address',
           },
           {
              name: 'value',
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
  ],
  bytecode: '0x',
};
