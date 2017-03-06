import request from '../utils/request';
import Base from './base';

export default class Campaign extends Base{

  pause(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/pause`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  start(campaignId){
    let url = `${this.baseUrl}/campaign/${campaignId}/resume`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

}
