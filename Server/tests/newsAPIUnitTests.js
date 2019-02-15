'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const server = require('../server');
const baseURL = '/newsAPI/';

describe('News API Endpoint: topCryptoCoinsNewsHeadlines', function(){
    it('should return top articles from the crypto-coins-news source', function(){
        checkForJsonWithArticles("topCryptoCoinsNewsHeadlines", null);
    });
});

describe('News API Endpoint: allCryptoCoinsNewsHeadlines', function(){
    it('should return all recent articles from the crypto-coins-news source', function () {
       checkForJsonWithArticles("allCryptoCoinsNewsHeadlines", null);
    });
});

describe('News API Endpoint: allArticlesWithQuery', function(){
    it('should return articles that contain the given query', function () {
        checkForJsonWithArticles("allArticlesWithQuery", {query: "bitcoin"});
    });
});

describe('News API Endpoint: allSources', function(){
    it('should return all named english sources in the News API', function(){
       chai.request(server)
           .get(`${baseURL}/allSources`)
           .then(function(res){
              expect(res).to.be.json;
              expect(res.sources).to.be.an('array');
           })
           .catch(function(err){
               expect(err).to.have.status(500);
           });
    });
});

describe('News API Endpoint: allArticlesWithQueryFromSpecificSources', function(){
    it('should return articles that contain the given query, from the specified sources', function () {
        checkForJsonWithArticles("allArticlesWithQuery", {query: "bitcoin"});
    });
});

function checkForJsonWithArticles(endpoint, sendInfo){
    if(sendInfo != null){
        chai.request(server)
            .get(`${baseURL}/${endpoint}`)
            .send(sendInfo)
            .then(function(res){
                expect(res).to.be.json;
                expect(res.articles).to.be.an('array');
            })
            .catch(function(err){
                expect(err).to.have.status(500);
            });
    }
    chai.request(server)
        .get(`${baseURL}/${endpoint}`)
        .then(function(res){
            expect(res).to.be.json;
            expect(res.articles).to.be.an('array');
        })
        .catch(function(err){
            expect(err).to.have.status(500);
        });
}