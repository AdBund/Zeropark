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

var keywordActions = function (_Base) {
  _inherits(keywordActions, _Base);

  function keywordActions() {
    _classCallCheck(this, keywordActions);

    return _possibleConstructorReturn(this, (keywordActions.__proto__ || Object.getPrototypeOf(keywordActions)).apply(this, arguments));
  }

  _createClass(keywordActions, [{
    key: 'KeywordAdd',
    value: function KeywordAdd(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keyword/add';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordAutoBid',
    value: function KeywordAutoBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keyword/autonbid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordBid',
    value: function KeywordBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keyword/bid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordDelete',
    value: function KeywordDelete(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keyword/delete';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'NegativeAdd',
    value: function NegativeAdd(campaignId, keyword) {
      var url = this.baseUrl + '/campaign/' + campaignId + '/negative/add';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(keyword).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'NegativeDelete',
    value: function NegativeDelete(campaignId, keyword) {
      var url = this.baseUrl + '/campaign/' + campaignId + '/negative/delete';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(keyword).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordPause',
    value: function KeywordPause(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keyword/pause';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordResume',
    value: function KeywordResume(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keyword/resume';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordsAdd',
    value: function KeywordsAdd(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/add';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordsAutoBid',
    value: function KeywordsAutoBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/autonbid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordsBid',
    value: function KeywordsBid(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/bid';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordsDelete',
    value: function KeywordsDelete(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/delete';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordsNegativeAdd',
    value: function KeywordsNegativeAdd(campaignId, keyword) {
      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/negative/add';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(keyword).end();
      return promise.then(function (res) {
        return res.body;
      });
    }

    // KeywordsNegativeDelete(campaignId, keyword) {
    //   let url = `${this.baseUrl}/campaign/${campaignId}/keywords/negative/delete`;
    //   let promise = request.post(url).set('api-token', this.apiKey).query(keyword).end();
    //   return promise.then(res => res.body);
    // }

  }, {
    key: 'KeywordsPause',
    value: function KeywordsPause(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/pause';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'KeywordsResume',
    value: function KeywordsResume(campaignId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var url = this.baseUrl + '/campaign/' + campaignId + '/keywords/resume';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }]);

  return keywordActions;
}(_base2.default);

exports.default = keywordActions;