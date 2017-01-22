

import request from '../utils/request';
import Base from './base';

export default class campaignDetails extends Base{

  getBid(campaignId,options={}) {
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/bid`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getcities(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/cities`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  postcities(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/cities`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getcopies(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/copies`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  postcopies(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/copies`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getDetails(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/details`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  postDetails(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/details`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getkeywords(campaignId, options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/keywords`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  postkeywords(campaignId, options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/keywords`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getNegativeKeywords(campaignId){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/negative/keywords`;
    let promise=request.get(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  getregions(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/regions`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  postregions(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/regions`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getsources (campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/sources`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  postsources(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/sources`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  gettargets  (campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/targets`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  posttargets(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/${campaignId}/targets`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

}
