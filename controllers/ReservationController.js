'use strict';

var utils = require('../utils/writer.js');
var ReservationController = require('../service/ReservationControllerService');

module.exports.createReservation = function createReservation (req, res, next, body) {
  ReservationController.createReservation(body)
    .then(ReservationController.retrieveReservation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteReservation = function deleteReservation (req, res, next, id) {
  ReservationController.deleteReservation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveReservation = function retrieveReservation (req, res, next, id) {
  ReservationController.retrieveReservation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveReservations = function retrieveReservations (req, res, next) {
  ReservationController.retrieveReservations()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateReservation = function updateReservation (req, res, next, body, id) {
  ReservationController.updateReservation(body, id)
    .then(ReservationController.retrieveReservation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
