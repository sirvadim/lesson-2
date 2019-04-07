const path = require('path')

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    '@ui': path.resolve(__dirname, '../src/ui'),
  }
  return config
}
