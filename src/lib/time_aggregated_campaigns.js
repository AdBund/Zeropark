import request from '../utils/request';
import Base from './base';

export default class timeAggregatedCampaigns extends Base{


  getInterval(options={}) {
    let url = `${this.baseUrl}/stats/campaign/interval/all`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getDomain(options={}) {
    let url = `${this.baseUrl}/stats/campaign/interval/domain`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getPopup(options={}){
    let url = `${this.baseUrl}/stats/campaign/interval/popup`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getDatails(campaignId,options={}){
    let url = `${this.baseUrl}/stats/campaign/interval/${campaignId}`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

}
