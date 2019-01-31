var request = require('supertest');
var app = require('../index.js');
describe('GET /', function () {
    it('respond with hello india', function (done) {
        request(app).get('/').expect('hello india', done);
    });
});