#!/usr/bin/env node

'use strict'

const http = require('./plugins/http')
const yargs = require('yargs')

const argv = yargs

argv
    .usage('Usage : gh-cli getSingleUser <username>')
    .command(
        'getSingleUser',
        "Search public data of a user by name",
        require('./src/get-single-user')
    )
    .usage('Usage : gh-cli listUserRepos <username>')
    .command(
        'listUserRepos', 
        'List repositories by username',
        require('./src/list-user-repos')
    )
    .help('help', 'Show help')
    .alias('help','h')
    .version()
    .alias('version','v')
    .argv