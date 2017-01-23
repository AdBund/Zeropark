import userDetails from './lib/user_account_details';
import timeAggregatedCampaigns from './lib/time_aggregated_campaigns';
import Campaigns from './lib/campaigns';
import CampaignsDetials from './lib/campaign_details';
import campaignActions from './lib/campaign_actions';
import countryActions from './lib/country-actions';
import keywordActions from './lib/keyword_actions';
import pausedTargets from './lib/paused_targets';
import sourceActions from './lib/source_actions';
import locationActions from './lib/location_actions';
import campaignBulkActions from './lib/campaign_bulk_actions';
import targetActions from './lib/target_actions';




const baseUrl = 'https://panel.zeropark.com/api';

export default class Zeropark {
  constructor(apiKey) {
    this.userDetails = new userDetails(apiKey);

    this.timeAggregatedCampaigns = new timeAggregatedCampaigns(apiKey);

    this.campaigns = new Campaigns(apiKey);

    this.campaignsDetails=new CampaignsDetials(apiKey);

    this.campaignActions=new campaignActions(apiKey);

    this.countryActions=new countryActions(apiKey);

    this.keywordActions=new keywordActions(apiKey);

    this.pausedTargets=new pausedTargets(apiKey);

    this.sourceActions=new sourceActions(apiKey);

    this.locationActions=new locationActions(apiKey);

    this.campaignBulkActions=new campaignBulkActions(apiKey);

    this.targetActions=new targetActions(apiKey);
  }
}
