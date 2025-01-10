'use strict';

var utils = require('../utils/writer.js');
var RoomController = require('../service/RoomControllerService');

module.exports.createRoom = function createRoom (req, res, next, body) {
  RoomController.createRoom(body)
    .then(RoomController.retrieveRoom)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRoom = function deleteRoom (req, res, next, id) {
  RoomController.deleteRoom(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveRoom = function retrieveRoom (req, res, next, id) {
  RoomController.retrieveRoom(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveRooms = function retrieveRooms (req, res, next) {
  RoomController.retrieveRooms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRoom = function updateRoom (req, res, next, body, id) {
  RoomController.updateRoom(body, id)
    .then(RoomController.retrieveRoom)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
