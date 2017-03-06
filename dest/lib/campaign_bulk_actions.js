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

var sourceActions = function (_Base) {
  _inherits(sourceActions, _Base);

  function sourceActions() {
    _classCallCheck(this, sourceActions);

    return _possibleConstructorReturn(this, (sourceActions.__proto__ || Object.getPrototypeOf(sourceActions)).apply(this, arguments));
  }

  _createClass(sourceActions, [{
    key: 'Bid',
    value: function Bid(campaignIds, bid) {
      return this.request({
        path: '/campaigns/bid',
        query: {
          campaignIds: campaignIds,
          bid: bid
        }
      });
    }
  }, {
    key: 'Delete',
    value: function Delete(campaignIds) {
      return this.request({
        path: '/campaigns/delete',
        query: {
          campaignIds: campaignIds
        }
      });
    }
  }, {
    key: 'Pause',
    value: function Pause(campaignIds) {
      return this.request({
        path: '/campaigns/pause',
        query: {
          campaignIds: campaignIds
        }
      });
    }
  }, {
    key: 'BudgetDaily',
    value: function BudgetDaily(campaignIds) {
      return this.request({
        path: '/campaigns/reset/budget/daily',
        query: {
          campaignIds: campaignIds
        }
      });
    }
  }, {
    key: 'BudgetTotal',
    value: function BudgetTotal(campaignIds) {
      return this.request({
        path: '/campaigns/reset/budget/total',
        query: {
          campaignIds: campaignIds
        }
      });
    }
  }, {
    key: 'Restore',
    value: function Restore(campaignIds) {
      return this.request({
        path: '/campaigns/restore',
        query: {
          campaignIds: campaignIds
        }
      });
    }
  }, {
    key: 'Resume',
    value: function Resume(campaignIds) {
      return this.request({
        path: '/campaigns/resume',
        query: {
          campaignIds: campaignIds
        }
      });
    }
  }]);

  return sourceActions;
}(_base2.default);

exports.default = sourceActions;