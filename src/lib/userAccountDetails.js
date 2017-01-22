import request from '../utils/request';
import Base from './base'
export  default class getUserAccountDetails extends Base{

  getDetails(){
    let url=`${this.baseUrl}/user/details`;

    let promise=request.get(url).set('api-token', this.apiKey).end();
    return promise.then(res=>res.body);

  }
  

}
