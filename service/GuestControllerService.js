'use strict';
var sql = require('../utils/db.js');

/**
 * Create a guest
 *
 * body Hospede 
 * no response value expected for this operation
 **/
exports.createGuest = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO hospede (nome, nif, telefone, endereco) values (?, ?, ?, ?)", [body.nome, body.nif, body.telefone, body.endereco], function (err, res) {
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
 * Delete a guest by ID
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteGuest = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM hospede WHERE id = ?", [id], function (err, res) {
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
 * Retrieve a guest by ID
 *
 * id Integer 
 * returns Hospede
 **/
exports.retrieveGuest = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM hospede WHERE id = ?", [id], function (err, res) {
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
 * Retrieve guests
 *
 * returns List
 **/
exports.retrieveGuests = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM hospede", function (err, res) {
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
 * Update a guest by ID
 *
 * body Hospede 
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateGuest = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE hospede set nome = ?, telefone = ?, endereco = ? WHERE id = ?", [body.nome, body.telefone, body.endereco, id], function (err, res) {
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

