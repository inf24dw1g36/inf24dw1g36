'use strict';
var sql = require('../utils/db.js');

/**
 * Create a reservation
 *
 * body Reserva 
 * no response value expected for this operation
 **/
exports.createReservation = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO reserva (data_inic, data_fim, id_quarto, nif_hospede) values (?, ?, ?, ?)", [body.data_inic, body.data_fim, body.id_quarto, body.nif_hospede], function (err, res) {
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
 * Delete a reservation by ID
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteReservation = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM reserva WHERE id = ?", [id], function (err, res) {
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
 * Retrieve a reservation by ID
 *
 * id Integer 
 * returns Reserva
 **/
exports.retrieveReservation = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM reserva WHERE id = ?", [id], function (err, res) {
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
 * Retrieve reservations
 *
 * returns List
 **/
exports.retrieveReservations = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM reserva", function (err, res) {
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
 * Update a reservation by ID
 *
 * body Reserva 
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateReservation = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE reserva set data_inic = ?, data_fim = ?, id_quarto = ?, nif_hospede = ? WHERE id = ?", [body.data_inic, body.data_fim, body.id_quarto, body.nif_hospede, id], function (err, res) {
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

