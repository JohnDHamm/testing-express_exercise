'use strict'

const { property } =require('chai').assert
const request = require('supertest')
const app = require('../server')

describe('express', () => {
	it(`GET '/' should respond with a JSON`, (done) => {
		request(app)
			.get('/')
			.expect(200)
			// .expect('Hello World')
			.expect('Content-Type', /json/)
			.end(done) //let mocha know the asynch process is done
	}) //should be JSON


	// POST /addresses 201 JSON and _id field

	it(`POST '/addresses' should respond with 201, JSON, and _id field`, (done) => {
		request(app)
			.post('/addresses')
			.expect(201)
			.expect('Content-Type', /json/)
			.expect(res => property(res.body, '_id'))
			.end(done)
	})

	// DELETE /addresses/:id 204
	it(`DELETE '/addresses/123' should respond with 204`, (done) => {
		request(app)
			.delete('/addresses/123')
			.expect(204)
			.end(done)
	})



})
