export const contractAddress = '0xDa9E6eBdef3cD3713E44a4aB9Ad38EC90F3acd04';

export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "link",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "owner",
                "type": "string"
            }
        ],
        "name": "NftCreated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "nftCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "nfts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "link",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "owner",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_link",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_owner",
                "type": "string"
            }
        ],
        "name": "createNft",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];