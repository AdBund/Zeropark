import request from '../utils/request';
import Base from './base';

export default class sourceActions extends Base {

  SourceAdd(campaignId, hash) {
    let url = `${this.baseUrl}/campaign/${campaignId}source/add`;
    let promise = request.post(url).set('api-token', this.apiKey).query(hash).end();
    return promise.then(res => res.body);
  }

  SourceDelete(campaignId, hash) {
    let url = `${this.baseUrl}/campaign/${campaignId}source/delete`;
    let promise = request.post(url).set('api-token', this.apiKey).query(hash).end();
    return promise.then(res => res.body);
  }

  SourcesAdd(campaignId, hash) {
    let url = `${this.baseUrl}/campaign/${campaignId}sources/add`;
    let promise = request.post(url).set('api-token', this.apiKey).query(hash).end();
    return promise.then(res => res.body);
  }

  // SourcesDelete(campaignId, hash) {
  //   let url = `${this.baseUrl}/campaign/${campaignId}sources/delete`;
  //   let promise = request.post(url).set('api-token', this.apiKey).query(hash).end();
  //   return promise.then(res => res.body);
  // }


  SourcesDelete(campaignId, hash) {
    return this.request({
      method: 'post',
      path: `/campaign/${campaignId}/sources/delete`,
      query: hash,
    })
  }
}
