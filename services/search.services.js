const Q = require('q')
var request = require('request');
var dummyData = require('../models/dummyData');
// this function will be called when the Search
function individualsSearch(params) {

    let defered = Q.defer();
    var options = {
        method: 'POST',
        url: 'kdsjahfjkdasfskd',
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            Connection: 'keep-alive',
            Accept: 'application/json',
            Authorization: 'Basic afdhkfsadfjkhdksfhdskjfdsfdsfdsfsfddaf=,Bearer jhjghhggjhgjgjhjhghdggfddfdddgfddgd'
        },
        form:
        {
            q: 'business_card.indiv_name_first:"siva" OR company_profile.dom_comp_name:"siva" OR business_card.email_adr:"siva"',
            sort_order: 'asc',
            sort_by: 'business_card.indiv_name_last',
            contact_period: 'C,D',
            contact_mth_avail: 'Y',
            userid: 'yogi@gmail.com'
        }
    };

    request(options, function (error, response, body) {
        if (error) {
            defered.resolve({ data: dummyData, success: true, message: 'successfully connect' })
        } else {
            defered.resolve({ data: response, success: true, message: 'successfully connect' })
        }
    });
    return defered.promise
};

module.exports = { individualsSearch }