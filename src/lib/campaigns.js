import request from '../utils/request';
import Base from './base';

export default class Campaigns extends Base{

  getAll(options={}){
    let url = `${this.baseUrl}/stats/campaign/all`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }


  getdomain(options={}){
    let url = `${this.baseUrl}/stats/campaign/domain`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }

  getpopup(options={}){
    let url = `${this.baseUrl}/stats/campaign/popup`;
    let promise=request.get(url).set('api-token',this.apiKey).query(options).end();
    return promise.then(res=>res.body);
  }


}
