'use strict';
var sql = require('../utils/db.js');

/**
 * Create a room
 *
 * body Quarto 
 * no response value expected for this operation
 **/
exports.createRoom = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO quarto (numero, preco, id_hotel) values (?, ?, ?)", [body.numero, body.preco, body.id_hotel], function (err, res) {
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
 * Delete a room by ID
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteRoom = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM quarto WHERE id = ?", [id], function (err, res) {
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
 * Retrieve a room by ID
 *
 * id Integer 
 * returns Quarto
 **/
exports.retrieveRoom = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM quarto WHERE id = ?", [id], function (err, res) {
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
 * Retrieve rooms
 *
 * returns List
 **/
exports.retrieveRooms = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM quarto", function (err, res) {
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
 * Update a room by ID
 *
 * body Quarto 
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateRoom = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE quarto set numero = ?, preco = ?, id_hotel = ? WHERE id = ?", [body.numero, body.preco, body.id_hotel, id], function (err, res) {
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

