'use strict';

var utils = require('../utils/writer.js');
var HotelController = require('../service/HotelControllerService');

module.exports.createHotel = function createHotel (req, res, next, body) {
  HotelController.createHotel(body)
    .then(HotelController.retrieveHotel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteHotel = function deleteHotel (req, res, next, id) {
  HotelController.deleteHotel(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveHotel = function retrieveHotel (req, res, next, id) {
  HotelController.retrieveHotel(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveHotels = function retrieveHotels (req, res, next) {
  HotelController.retrieveHotels()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateHotel = function updateHotel (req, res, next, body, id) {
  HotelController.updateHotel(body, id)
    .then(HotelController.retrieveHotel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
