'use strict';

var utils = require('../utils/writer.js');
var GuestController = require('../service/GuestControllerService');

module.exports.createGuest = function createGuest (req, res, next, body) {
  GuestController.createGuest(body)
    .then(GuestController.retrieveGuest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGuest = function deleteGuest (req, res, next, id) {
  GuestController.deleteGuest(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveGuest = function retrieveGuest (req, res, next, id) {
  GuestController.retrieveGuest(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveGuests = function retrieveGuests (req, res, next) {
  GuestController.retrieveGuests()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGuest = function updateGuest (req, res, next, body, id) {
  GuestController.updateGuest(body, id)
    .then(GuestController.retrieveGuest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
