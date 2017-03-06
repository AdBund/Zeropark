import request from '../utils/request';
import Base from './base';

export default class Campaign extends Base{

  pause({campaign_id}){
    let url = `${this.baseUrl}/campaign/${campaign_id}/pause`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

  start({campaign_id}){
    let url = `${this.baseUrl}/campaign/${campaign_id}/resume`;
    let promise=request.post(url).set('api-token',this.apiKey).end();
    return promise.then(res=>res.body);
  }

}
