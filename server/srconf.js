const express = require('express')
const morgan = require('morgan')
const api = require('./api')

const init = (app) => {
  app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(morgan('dev'))
    .use('/api', api)
}

module.exports = init