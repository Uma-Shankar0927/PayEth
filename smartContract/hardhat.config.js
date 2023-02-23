require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/4g7OXOxq03EjzbUKsR7wKPutKwiYOqNQ',
      accounts: [ '529c9625729e22bfa514d6a0247806a9e3d9c83235366e46e7d579f35e673073' ]
    }
  }
}