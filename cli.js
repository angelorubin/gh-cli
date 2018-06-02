#!/usr/bin/env node

const http = require('./plugins/http')
const yargs = require('yargs')

yargs
  .command(require('./commands/get-single-user'))
  .help()
  .argv