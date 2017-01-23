import Base from './base';

export default class sourceActions extends Base {

  CitiesPause(campaignId, city) {
    return this.request({
      path: `/campaign/${campaignId}/cities/pause`,
      query: city,
    })
  }

  CitiesResume(campaignId, city) {
    return this.request({
      path: `/campaign/${campaignId}/cities/resume`,
      query: city,
    })
  }

  CityPause(campaignId, city) {
    return this.request({
      path: `/campaign/${campaignId}/city/pause`,
      query: city,
    })
  }

  CityResume(campaignId, city) {
    return this.request({
      path: `/campaign/${campaignId}/city/resume`,
      query: city,
    })
  }

  RegionPause(campaignId, region) {
    return this.request({
      path: `/campaign/${campaignId}/region/pause`,
      query: region,
    })
  }

  RegionResume(campaignId, region) {
    return this.request({
      path: `/campaign/${campaignId}/region/resume`,
      query: region,
    })
  }

  RegionsPause(campaignId, region) {
    return this.request({
      path: `/campaign/${campaignId}/regions/pause`,
      query: region,
    })
  }

  RegionsResume(campaignId, region) {
    return this.request({
      path: `/campaign/${campaignId}/regions/resume`,
      query: region,
    })
  }

}
