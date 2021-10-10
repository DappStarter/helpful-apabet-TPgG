require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth magic around give close army general'; 
let testAccounts = [
"0x9c8ac33bcd5a71d4ecae9e565782991fe87890902a6143a73eaffcea8430b98d",
"0xba1602e807ce7fe622627d1858db6ba5cec6ad2658ece0f6ebc52ccec6164250",
"0x526b349e011062b683c65c04632b42f31a069162d0d12023fc43317fce4d0c8c",
"0x197c96227047d617d492c3fea4622cba01876fe3023eb8ffc9e22ccac2f12a90",
"0x8f69a0e0a436d0eabef0cbfec78c10f89a9f974856b1c22d5673c4b0f6597070",
"0x1734a95064e82ffba209b2f489b5962964f0ccabcdc15c544cff2f6098647c01",
"0x3fea7bee75c2d061a77b2cd2db0d3e5f2e6303168052023ece64161b33ef6054",
"0x662a0a6850ec5e59c6ccce23522bf43c452a506dd2ed58e9b604daa0bc2fe394",
"0x9b4ba397193c8187267969bb8ef4dad95eccf39317be6dcb57be9dccb060ffc9",
"0x53b0e4c661a9fc57d5f92c14e919cb7424a0016d6315e657fb1205ba80b97816"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


