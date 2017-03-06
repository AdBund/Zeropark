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

var timeAggregatedCampaigns = function (_Base) {
  _inherits(timeAggregatedCampaigns, _Base);

  function timeAggregatedCampaigns() {
    _classCallCheck(this, timeAggregatedCampaigns);

    return _possibleConstructorReturn(this, (timeAggregatedCampaigns.__proto__ || Object.getPrototypeOf(timeAggregatedCampaigns)).apply(this, arguments));
  }

  _createClass(timeAggregatedCampaigns, [{
    key: 'getInterval',
    value: function getInterval() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = this.baseUrl + '/stats/campaign/interval/all';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getDomain',
    value: function getDomain() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = this.baseUrl + '/stats/campaign/interval/domain';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getPopup',
    value: function getPopup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = this.baseUrl + '/stats/campaign/interval/popup';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getDatails',
    value: function getDatails(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/stats/campaign/interval/' + campaignId;
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }]);

  return timeAggregatedCampaigns;
}(_base2.default);

exports.default = timeAggregatedCampaigns;