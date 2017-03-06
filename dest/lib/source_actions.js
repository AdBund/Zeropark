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

var sourceActions = function (_Base) {
  _inherits(sourceActions, _Base);

  function sourceActions() {
    _classCallCheck(this, sourceActions);

    return _possibleConstructorReturn(this, (sourceActions.__proto__ || Object.getPrototypeOf(sourceActions)).apply(this, arguments));
  }

  _createClass(sourceActions, [{
    key: 'SourceAdd',
    value: function SourceAdd(campaignId, hash) {
      var url = this.baseUrl + '/campaign/' + campaignId + 'source/add';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(hash).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'SourceDelete',
    value: function SourceDelete(campaignId, hash) {
      var url = this.baseUrl + '/campaign/' + campaignId + 'source/delete';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(hash).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'SourcesAdd',
    value: function SourcesAdd(campaignId, hash) {
      var url = this.baseUrl + '/campaign/' + campaignId + 'sources/add';
      var promise = _request2.default.post(url).set('api-token', this.apiKey).query(hash).end();
      return promise.then(function (res) {
        return res.body;
      });
    }

    // SourcesDelete(campaignId, hash) {
    //   let url = `${this.baseUrl}/campaign/${campaignId}sources/delete`;
    //   let promise = request.post(url).set('api-token', this.apiKey).query(hash).end();
    //   return promise.then(res => res.body);
    // }


  }, {
    key: 'SourcesDelete',
    value: function SourcesDelete(campaignId, hash) {
      return this.request({
        method: 'post',
        path: '/campaign/' + campaignId + '/sources/delete',
        query: hash
      });
    }
  }]);

  return sourceActions;
}(_base2.default);

exports.default = sourceActions;