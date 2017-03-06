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
    key: 'CitiesPause',
    value: function CitiesPause(campaignId, city) {
      return this.request({
        path: '/campaign/' + campaignId + '/cities/pause',
        query: city
      });
    }
  }, {
    key: 'CitiesResume',
    value: function CitiesResume(campaignId, city) {
      return this.request({
        path: '/campaign/' + campaignId + '/cities/resume',
        query: city
      });
    }
  }, {
    key: 'CityPause',
    value: function CityPause(campaignId, city) {
      return this.request({
        path: '/campaign/' + campaignId + '/city/pause',
        query: city
      });
    }
  }, {
    key: 'CityResume',
    value: function CityResume(campaignId, city) {
      return this.request({
        path: '/campaign/' + campaignId + '/city/resume',
        query: city
      });
    }
  }, {
    key: 'RegionPause',
    value: function RegionPause(campaignId, region) {
      return this.request({
        path: '/campaign/' + campaignId + '/region/pause',
        query: region
      });
    }
  }, {
    key: 'RegionResume',
    value: function RegionResume(campaignId, region) {
      return this.request({
        path: '/campaign/' + campaignId + '/region/resume',
        query: region
      });
    }
  }, {
    key: 'RegionsPause',
    value: function RegionsPause(campaignId, region) {
      return this.request({
        path: '/campaign/' + campaignId + '/regions/pause',
        query: region
      });
    }
  }, {
    key: 'RegionsResume',
    value: function RegionsResume(campaignId, region) {
      return this.request({
        path: '/campaign/' + campaignId + '/regions/resume',
        query: region
      });
    }
  }]);

  return sourceActions;
}(_base2.default);

exports.default = sourceActions;