import userDetails from './lib/userAccountDetails';
import timeAggregatedCampaigns from './lib/time_aggregated_campaigns';
import Campaigns from './lib/campaigns';
import CampaignsDetials from './lib/campaign_details';

const baseUrl = 'https://panel.zeropark.com/api';

export default class Zeropark {
  constructor(apiKey) {
    this.userDetails = new userDetails(apiKey);

    this.timeAggregatedCampaigns = new timeAggregatedCampaigns(apiKey);

    this.campaigns = new Campaigns(apiKey);

    this.campaignsDetails=new CampaignsDetials(apiKey);
  }
}
