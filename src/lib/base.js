import Promise from 'bluebird';
import request from '../utils/request';

export default class Base {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://panel.zeropark.com/api';
  }

}
