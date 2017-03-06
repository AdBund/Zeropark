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

var campaignDetails = function (_Base) {
  _inherits(campaignDetails, _Base);

  function campaignDetails() {
    _classCallCheck(this, campaignDetails);

    return _possibleConstructorReturn(this, (campaignDetails.__proto__ || Object.getPrototypeOf(campaignDetails)).apply(this, arguments));
  }

  _createClass(campaignDetails, [{
    key: 'getBid',
    value: function getBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/bid';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getcities',
    value: function getcities(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/cities';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'postcities',
    value: function postcities(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/cities';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getcopies',
    value: function getcopies(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/copies';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'postcopies',
    value: function postcopies(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/copies';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getDetails',
    value: function getDetails(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/details';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'postDetails',
    value: function postDetails(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/details';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getkeywords',
    value: function getkeywords(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/keywords';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'postkeywords',
    value: function postkeywords(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/keywords';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getNegativeKeywords',
    value: function getNegativeKeywords(campaignId) {
      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/negative/keywords';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getregions',
    value: function getregions(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/regions';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'postregions',
    value: function postregions(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/regions';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getsources',
    value: function getsources(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/sources';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'postsources',
    value: function postsources(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/sources';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'gettargets',
    value: function gettargets(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/targets';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'posttargets',
    value: function posttargets(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/' + campaignId + '/targets';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }]);

  return campaignDetails;
}(_base2.default);

exports.default = campaignDetails;