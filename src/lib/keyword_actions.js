import request from '../utils/request';
import Base from './base';

export default class keywordActions extends Base {

  KeywordAdd(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keyword/add`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordAutoBid(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keyword/autonbid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordBid(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keyword/bid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordDelete(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keyword/delete`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  NegativeAdd(campaignId, keyword) {
    let url = `${this.baseUrl}/campaign/${campaignId}/negative/add`;
    let promise = request.post(url).set('api-token', this.apiKey).query(keyword).end();
    return promise.then(res => res.body);
  }

  NegativeDelete(campaignId, keyword) {
    let url = `${this.baseUrl}/campaign/${campaignId}/negative/delete`;
    let promise = request.post(url).set('api-token', this.apiKey).query(keyword).end();
    return promise.then(res => res.body);
  }

  KeywordPause(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keyword/pause`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordResume(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keyword/resume`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordsAdd(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/add`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordsAutoBid(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/autonbid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordsBid(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/bid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordsDelete(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/delete`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordsNegativeAdd(campaignId, keyword) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/negative/add`;
    let promise = request.post(url).set('api-token', this.apiKey).query(keyword).end();
    return promise.then(res => res.body);
  }

  // KeywordsNegativeDelete(campaignId, keyword) {
  //   let url = `${this.baseUrl}/campaign/${campaignId}/keywords/negative/delete`;
  //   let promise = request.post(url).set('api-token', this.apiKey).query(keyword).end();
  //   return promise.then(res => res.body);
  // }

  KeywordsPause(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/pause`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  KeywordsResume(campaignId, options = {}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/keywords/resume`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

}
