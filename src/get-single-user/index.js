const chalk = require('chalk')
const http = require('../../plugins/http')

exports.builder = yargs => {
    return yargs.option('username',{
        alias: 'u',
        describe: 'Username',
        demandOption: true
    })
}

exports.handler = function (argv) {
    // do something with argv.
    if(argv.username.length > 0) {
        http(`/users/${argv.username}`)
        .then( data => {
            console.log(chalk.blue('Owner: ') + data.data.name)
            console.log(chalk.blue('Biograph: ') + data.data.bio)
            console.log(chalk.blue('Location: ') + data.data.location)
            console.log(chalk.green('Url: ') + data.data.html_url)
            console.log(chalk.yellow('Repositories: ') + data.data.repos_url)
        })
        .catch( err => console.log('No user with this name was found.'))
    }
    else {
        console.log(chalk.red('Enter a username'))
    }
}