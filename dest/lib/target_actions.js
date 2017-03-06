'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var targetActions = function (_Base) {
  _inherits(targetActions, _Base);

  function targetActions() {
    _classCallCheck(this, targetActions);

    return _possibleConstructorReturn(this, (targetActions.__proto__ || Object.getPrototypeOf(targetActions)).apply(this, arguments));
  }

  _createClass(targetActions, [{
    key: 'targetAdd',
    value: function targetAdd(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/target/add',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetAutoBid',
    value: function targetAutoBid(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/target/autobid',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetBid',
    value: function targetBid(campaignId, hash, bid) {
      return this.request({
        path: '/campaign/' + campaignId + '/target/bid',
        query: {
          campaignId: campaignId,
          hash: hash,
          bid: bid
        }
      });
    }
  }, {
    key: 'targetDelete',
    value: function targetDelete(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/target/delete',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetPause',
    value: function targetPause(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/target/pause',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetResume',
    value: function targetResume(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/target/resume',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetsAdd',
    value: function targetsAdd(campaignId, hashOrAddress) {
      return this.request({
        path: '/campaign/' + campaignId + '/targets/add',
        query: {
          campaignId: campaignId,
          hashOrAddress: hashOrAddress
        }
      });
    }
  }, {
    key: 'targetsAutoBid',
    value: function targetsAutoBid(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/targets/autobid',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetsBid',
    value: function targetsBid(campaignId, hash, bid) {
      return this.request({
        path: '/campaign/' + campaignId + '/targets/bid',
        query: {
          campaignId: campaignId,
          hash: hash,
          bid: bid
        }
      });
    }
  }, {
    key: 'targetsDelete',
    value: function targetsDelete(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/targets/delete',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetsPause',
    value: function targetsPause(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/targets/pause',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }, {
    key: 'targetsResume',
    value: function targetsResume(campaignId, hash) {
      return this.request({
        path: '/campaign/' + campaignId + '/targets/resume',
        query: {
          campaignId: campaignId,
          hash: hash
        }
      });
    }
  }]);

  return targetActions;
}(_base2.default);

exports.default = targetActions;