import Base from './base';

export default class sourceActions extends Base {

  Bid(campaignIds, bid) {
    return this.request({
      path: `/campaigns/bid`,
      query: {
        campaignIds,
        bid
      }
    })
  }

  Delete(campaignIds) {
    return this.request({
      path: `/campaigns/delete`,
      query: {
        campaignIds,
      }
    })
  }

  Pause(campaignIds) {
    return this.request({
      path: `/campaigns/pause`,
      query: {
        campaignIds,
      }
    })
  }

  BudgetDaily(campaignIds) {
    return this.request({
      path: `/campaigns/reset/budget/daily`,
      query: {
        campaignIds,
      }
    })
  }

  BudgetTotal(campaignIds) {
    return this.request({
      path: `/campaigns/reset/budget/total`,
      query: {
        campaignIds,
      }
    })
  }

  Restore(campaignIds) {
    return this.request({
      path: `/campaigns/restore`,
      query: {
        campaignIds,
      }
    })
  }

  Resume(campaignIds) {
    return this.request({
      path: `/campaigns/resume`,
      query: {
        campaignIds,
      }
    })
  }


}
