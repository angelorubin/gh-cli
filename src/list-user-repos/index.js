const chalk = require('chalk')
const http = require('../../plugins/http')

exports.builder = yargs => {
   return yargs.option(
        'username', {
            alias: 'u',
            demandOption: true,
            describe: 'Username'
        }
    )
}
exports.handler = function (argv) {
    // do something with argv.
    if(argv.username.length > 0) {
        http(`/users/${argv.username}/repos`)
        .then( data => {
            data.data.map((value, index) => {
                console.log(chalk.blue(`description : ${value.description}`))
                console.log(`link : ${value.html_url}`)
            })
        })
        .catch( err => console.log('No user with this name was found.'))
    }
    else {
        console.log(chalk.red('Enter a username'))
    }
}