import request from '../utils/request';
import Base from './base';

export default class pausedTargets extends Base {

  Pause(campaignId) {
    let url = `${this.baseUrl}/campaign/${campaignId}/paused-targets`;
    let promise = request.get(url).set('api-token', this.apiKey).end();
    return promise.then(res => res.body);
  }
}
