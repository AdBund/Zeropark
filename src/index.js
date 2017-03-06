import Campaign from './lib/campaign';

export default class Zeropark {
  constructor(apiKey) {
    this.campaign=new Campaign(apiKey);
  }
}
