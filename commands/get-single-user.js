const chalk = require('chalk')
const http = require('../plugins/http')
const Table = require('cli-table')

exports.command = 'getSingleUser <username>'
exports.aliases = ['getSingleUser', 'gsu']
exports.desc = 'Provides publicly available information about someone with a GitHub account.'
exports.builder = yargs => {
  return yargs
  .positional(
    'username', {
      desc: 'Username in github', 
      type: 'string'
    }
  )
  .help()
}
exports.handler = function (argv) {
  // do something with argv.
  if(argv.username.length > 0) {
    http(`/users/${argv.username}`)
    .then( data => {
      const tableUser = new Table()
      const user = data.data
      for(key in user) {
        if(user[key] != null && user[key] != false) {
          tableUser.push({[chalk.blue(key)] : `${user[key]}`})
        }
      }
      console.log(tableUser.toString())
    })
    .catch( err => console.log('No user with this name was found.'))
  }
}