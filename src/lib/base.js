import request from '../utils/request';

export default class Base {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://panel.zeropark.com/api';
  }

  request(options) {
    let {method = 'post', query = {}, body = {}, path} = options;
    // query.api_key = this.apiKey;
    let promise = request[method](`${this.baseUrl}${path}`)
      .query(query)
      .send(body)
      .set('api-token', this.apiKey)
      .end();
    return promise.then((res) => {
      return res.body;
    });



  }
}
