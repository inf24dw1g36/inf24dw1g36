'use strict';
var sql = require('../utils/db.js');

/**
 * Create a hotel
 *
 * body Hotel 
 * no response value expected for this operation
 **/
exports.createHotel = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO hotel (nome, estrelas, endereco) values (?, ?, ?)", [body.nome, body.estrelas, body.endereco], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete a hotel by ID
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteHotel = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM hotel WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


/**
 * Retrieve a hotel by ID
 *
 * id Integer 
 * returns Hotel
 **/
exports.retrieveHotel = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM hotel WHERE id = ?", [id], function (err, res) {
      if(err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 * Retrieve hotels
 *
 * returns List
 **/
exports.retrieveHotels = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM hotel", function (err, res) {
      if(err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Update a hotel by ID
 *
 * body Hotel 
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateHotel = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE hotel set nome = ?, estrelas = ?, endereco = ? WHERE id = ?", [body.nome, body.estrelas, body.endereco, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    });
  });
}

