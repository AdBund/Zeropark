import request from '../utils/request';
import Base from './base';

export default class countryActions extends Base {

  AutoBid(campaignId, options={}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/countries/autobid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  Bid(campaignId, options={}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/countries/bid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  Pause(campaignId, options={}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/countries/pause`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  Resume(campaignId, options={}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/countries/resume`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  CountryAutoBid(campaignId, countryCode) {
    let url = `${this.baseUrl}/campaign/${campaignId}/country/autobid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(countryCode).end();
    return promise.then(res => res.body);
  }

  CountryBid(campaignId, options={}) {
    let url = `${this.baseUrl}/campaign/${campaignId}/country/bid`;
    let promise = request.post(url).set('api-token', this.apiKey).query(options).end();
    return promise.then(res => res.body);
  }

  CountryPause(campaignId, countryCode) {
    let url = `${this.baseUrl}/campaign/${campaignId}/country/pause`;
    let promise = request.post(url).set('api-token', this.apiKey).query(countryCode).end();
    return promise.then(res => res.body);
  }

  CountryResume(campaignId, countryCode) {
    let url = `${this.baseUrl}/campaign/${campaignId}/country/resume`;
    let promise = request.post(url).set('api-token', this.apiKey).query(countryCode).end();
    return promise.then(res => res.body);
  }



}
