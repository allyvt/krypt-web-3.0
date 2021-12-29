//https://eth-ropsten.alchemyapi.io/v2/T1I0XhFHOyhR1pBup1aBJx6gySThxG4n

// require('@nomiclabs/hardhat-waffle');

// module.exports ={
//   solidity: '0.8.0',
//   network: {
//     ropsten: {
//       url: 'https://eth-ropsten.alchemyapi.io/v2/T1I0XhFHOyhR1pBup1aBJx6gySThxG4n',
//       accounts: ['b6994216f1e701470bf53b96b29563a8edb73dab530bea20753a29217489db6c'],
//     },
//   },
// };
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/T1I0XhFHOyhR1pBup1aBJx6gySThxG4n',
      accounts: ['b6994216f1e701470bf53b96b29563a8edb73dab530bea20753a29217489db6c'],
    },
  },
};