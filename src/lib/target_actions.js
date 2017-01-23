import Base from './base';

export default class targetActions extends Base {

  targetAdd(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/target/add`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetAutoBid(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/target/autobid`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetBid(campaignId, hash,bid) {
    return this.request({
      path: `/campaign/${campaignId}/target/bid`,
      query: {
        campaignId,
        hash,
        bid,
      }
    })
  }

  targetDelete(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/target/delete`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetPause(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/target/pause`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetResume(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/target/resume`,
      query: {
        campaignId,
        hash,
      }
    })
  }



  targetsAdd(campaignId, hashOrAddress) {
    return this.request({
      path: `/campaign/${campaignId}/targets/add`,
      query: {
        campaignId,
        hashOrAddress,
      }
    })
  }

  targetsAutoBid(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/targets/autobid`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetsBid(campaignId, hash,bid) {
    return this.request({
      path: `/campaign/${campaignId}/targets/bid`,
      query: {
        campaignId,
        hash,
        bid,
      }
    })
  }

  targetsDelete(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/targets/delete`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetsPause(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/targets/pause`,
      query: {
        campaignId,
        hash,
      }
    })
  }

  targetsResume(campaignId, hash) {
    return this.request({
      path: `/campaign/${campaignId}/targets/resume`,
      query: {
        campaignId,
        hash,
      }
    })
  }






}
