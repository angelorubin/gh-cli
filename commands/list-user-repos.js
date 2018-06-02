/*
const chalk = require('chalk')
const http = require('../../plugins/http')
const log = console.log

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
        .then(data => {
            data.data.map(value => {
                log(chalk.green('repo link : ') + value.html_url)
                log(chalk.green('description : ') + value.description)
                log('==========================================================')
            })
        })
        .catch( err => log('No user with this name was found.'))
    }
    else {
        log(chalk.red('Enter a username'))
    }
}
*/