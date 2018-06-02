const chalk = require('chalk')
const http = require('../plugins/http')
const Table = require('cli-table')

exports.command = 'getSingleUser'
exports.describe = 'Provides publicly available information about someone with a GitHub account.'
exports.builder = {
  username: {
    demandOption: true,
    describe: 'Name required to perform the search',
    alias: 'u'
  }
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
  else {
    console.log(chalk.red('Enter a username'))
  }
}