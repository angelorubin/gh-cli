#!/usr/bin/env node

const http = require('./plugins/http')
const yargs = require('yargs')

yargs
  .commandDir('./commands')
  .argv