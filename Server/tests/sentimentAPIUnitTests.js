'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const server = require('../server');
const baseURL = '/sentimentAPI/';

describe('Sentiment API endpoint: /sentiments', function() {
    this.timeout(5000);

    it('should return sentiments', function(){
        return chai.request(server)
            .get(`${baseURL}/sentiments`)
            .then(function(res) {
                expect(res).to.be.json;
            })
            .catch(function(err){
                expect(err).to.have.status(500);
            });
    });
});