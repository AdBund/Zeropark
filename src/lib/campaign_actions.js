import request from '../utils/request';
import Base from './base';

export default class Actions extends Base{

  Bid(campaignId, options={}){
    let url = `${this.baseUrl}/campaign/${campaignId}/bid`;
    let promise=request.post(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  Delete(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/delete`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  Pause(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/pause`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  DailyBudget(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/reset/budget/daily`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  TotalBudget(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/reset/budget/total`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  Restore(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/restore`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  Resume(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/resume`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }




}
