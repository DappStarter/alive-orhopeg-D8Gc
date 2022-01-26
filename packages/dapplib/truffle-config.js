require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski street rice payment unlock grace define army ghost'; 
let testAccounts = [
"0xedb0e84f87f30c545b22c995988416090a4f19387a95144ddf975ffa3ad322d1",
"0x8606133730fdd218bc9b5a9b4cfbe350da93120bfde25bf64e220209c3f2382d",
"0x4f873629ff1e3fd51a2f81c8c962191a28f0041230fe612ab2ea276a3f253387",
"0x3386a1f5ac07b6e4e364631aa83e12308d96c90dc06fa178a4b118e0b148ab0f",
"0xbc51f929651435064e8e73a665689f94fe3cbbfd3829ee26c2e5b5639b18ade0",
"0x935dc2590422c33e72c7d8deb38f59e81a671930b440a0a8602bdf36a994bd0f",
"0x5738023ee7c440ae58fafa07caeaac8b6093857e72c59c1170c9f31019e164d0",
"0xb24de57f78fc141f060e08f5256a9375d588ca189ff1b2ec63fa8f365f00aba8",
"0x28b6fd6504566c4321fb0997958def478b93bb1c120e99837795de765d52f1e3",
"0x9f060c8ee60af1747abf80dc99d8e7eb82a6911417e530eb4c834afe80937797"
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


