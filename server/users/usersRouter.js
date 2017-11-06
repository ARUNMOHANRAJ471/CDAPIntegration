'use strict';
const router = require('express').Router();
var bcrypt   = require('bcrypt-nodejs');
let driver = require('../config/neo4j');
let session = driver.session();
router.post('/checkUser', function(req, res) {
  let query = 'match(n:user{username:"'+req.body.username+'"}) return n';
  session.run(query).then(function(result){
    if(result.records.length != 0) {
      let dbPwd = result.records[0]._fields[0].properties.password;
      if(bcrypt.compareSync(req.body.password, dbPwd)) {
      res.send('success');
    } else {
      res.send('failure');
    }
    } else {
      res.send('failure');
    }
  })
});
router.post('/signup', function(req, res) {
  let pwd = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  let query = 'merge(n:user{username:"'+req.body.username+'",password:"'+pwd+'"}) return n';
  session.run(query).then(function(result){
    if(result.records.length != 0) {
      res.send('success');
    } else {
      res.send('failure');
    }
  })
});
module.exports = router;
