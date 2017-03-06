'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var countryActions = function (_Base) {
  _inherits(countryActions, _Base);

  function countryActions() {
    _classCallCheck(this, countryActions);

    return _possibleConstructorReturn(this, (countryActions.__proto__ || Object.getPrototypeOf(countryActions)).apply(this, arguments));
  }

  _createClass(countryActions, [{
    key: 'AutoBid',
    value: function AutoBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/countries/autobid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'Bid',
    value: function Bid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/countries/bid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'Pause',
    value: function Pause(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/countries/pause';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'Resume',
    value: function Resume(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/countries/resume';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'CountryAutoBid',
    value: function CountryAutoBid(campaignId, countryCode) {
      var url = this.baseUrl + '/campaign/' + campaignId + '/country/autobid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(countryCode).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'CountryBid',
    value: function CountryBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/country/bid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'CountryPause',
    value: function CountryPause(campaignId, countryCode) {
      var url = this.baseUrl + '/campaign/' + campaignId + '/country/pause';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(countryCode).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'CountryResume',
    value: function CountryResume(campaignId, countryCode) {
      var url = this.baseUrl + '/campaign/' + campaignId + '/country/resume';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(countryCode).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }]);

  return countryActions;
}(_base2.default);

exports.default = countryActions;