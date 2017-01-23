import request from '../utils/request';
import Base from './base';

export default class adCopyAction extends Base{

  CopyDelete(campaignId,adCopyId){
    let url = `${this.baseUrl}/campaign/${campaignId}/copy/delete`;
    let promise=request.post(url).set('api-token',this.apiKey).query(adCopyId).end();
    return promise.then(res=>res.body);
  }

  CopyEdit(campaignId,adCopyModel){
    let url = `${this.baseUrl}/campaign/${campaignId}/copy/edit`;
    let promise=request.post(url).set('api-token',this.apiKey).send(adCopyModel).end();
    return promise.then(res=>res.body);
  }

  CopyPause(campaignId,adCopyId){
    let url = `${this.baseUrl}/campaign/${campaignId}/copy/pause`;
    let promise=request.post(url).set('api-token',this.apiKey).query(adCopyId).end();
    return promise.then(res=>res.body);
  }

  CopyRestore(campaignId,adCopyId){
    let url = `${this.baseUrl}/campaign/${campaignId}/copy/restore`;
    let promise=request.post(url).set('api-token',this.apiKey).query(adCopyId).end();
    return promise.then(res=>res.body);
  }

  CopyResume(campaignId,adCopyId){
    let url = `${this.baseUrl}/campaign/${campaignId}/copy/resume`;
    let promise=request.post(url).set('api-token',this.apiKey).query(adCopyId).end();
    return promise.then(res=>res.body);
  }



}
