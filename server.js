'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send({}))

app.post('/addresses', (req, res) => res.status(201).send({_id: 'abc'}))

app.delete('/addresses/:id', (req, res) => res.sendStatus(204))

module.exports = app

// {
