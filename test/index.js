import {expect} from 'chai';
import util from 'util';

import Zeropark from '../src';

let {apiKey}=process.env;
let campaignId='';

describe('Zeropark',()=>{

  xit('apiKey should exist',()=>{
    expect(apiKey).to.be.a('string');
  })

  let zeropark=new Zeropark(apiKey);

  xit('should initialize successfully',()=>{
    expect(zeropark.userDetails).to.be.an('object');
  })



  describe('user details',()=>{

    xit('get user details',(done)=>{
      zeropark.userDetails.getDetails().then((data)=>{
          console.log(data);
          done();
      })
    })
  })


  describe('time Aggregated Campaigns',()=>{

    xit('get interval Of All Campaign Type',(done)=>{
      zeropark.timeAggregatedCampaigns.getInterval({interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('get interval for domain campaigns',(done)=>{
      zeropark.timeAggregatedCampaigns.getDomain({interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })


    xit('get interval for pop-up campaigns',(done)=>{
      zeropark.timeAggregatedCampaigns.getPopup({interval:'THIS_MONTH',showDeleted:'false'}).then((data)=>{
        console.log(data);
        done();
      })
    })


    xit('get details',(done)=>{
      zeropark.timeAggregatedCampaigns.getDatails(campaignId='2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })



  })


  describe('campaigns',()=>{
    xit('get all',(done)=>{
      zeropark.campaigns.getAll({interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })


    xit('get domain',(done)=>{
      zeropark.campaigns.getdomain({interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })


    xit('get popup',(done)=>{
      zeropark.campaigns.getpopup({interval:'THIS_MONTH'}).then((data)=>{
        console.log(util.inspect(data, {depth: null}));
        done();
      })
    })

  })


  describe('campaignDetails',()=>{
    xit('get campaign bid',(done)=>{
      zeropark.campaignsDetails.getBid('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(JSON.stringify(data));
        done();
      })
    })

    xit('get campaign cities',(done)=>{
      zeropark.campaignsDetails.getcities('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(JSON.stringify(data));
        done();
      })
    })

    xit('post campaign cities',(done)=>{
      zeropark.campaignsDetails.getcities('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(JSON.stringify(data));
        done();
      })
    })

    //todo:  error:Only search campaigns have ad copies. Please provide an ID of search campaign
    xit('get campaign copies',(done)=>{
      zeropark.campaignsDetails.getcopies('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        // console.log(util.inspect(data, {depth: null}));
        console.log(data);
        done();
      })
    })

    //todo:  error:Only search campaigns have ad copies. Please provide an ID of search campaign
    xit('post campaign copies',(done)=>{
      zeropark.campaignsDetails.postcopies('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        // console.log(util.inspect(data, {depth: null}));
        console.log(data);
        done();
      })
    })

    xit('get campaign details',(done)=>{
      zeropark.campaignsDetails.getDetails('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        // console.log(util.inspect(data, {depth: null}));
        console.log(data);
        done();
      })
    })

    xit('post campaign details',(done)=>{
      zeropark.campaignsDetails.getDetails('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        // console.log(util.inspect(data, {depth: null}));
        console.log(data);
        done();
      })
    })

    xit('get campaign NegativeKeywords',(done)=>{
      zeropark.campaignsDetails.getNegativeKeywords('2c5d5e70-b2da-11e6-b64b-0e855f2e0669').then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('get campaign regions',(done)=>{
      zeropark.campaignsDetails.getregions('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('post campaign regions',(done)=>{
      zeropark.campaignsDetails.postregions('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('get campaign sources',(done)=>{
      zeropark.campaignsDetails.getsources('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('post campaign sources',(done)=>{
      zeropark.campaignsDetails.postsources('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('get campaign targets ',(done)=>{
      zeropark.campaignsDetails.gettargets('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })

    xit('post campaign targets',(done)=>{
      zeropark.campaignsDetails.posttargets('2c5d5e70-b2da-11e6-b64b-0e855f2e0669',{interval:'THIS_MONTH'}).then((data)=>{
        console.log(data);
        done();
      })
    })


  })

})
