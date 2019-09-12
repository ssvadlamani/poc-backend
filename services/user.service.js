const Q = require('q')
const userSchema = require('../models/User.Schema');

async function searchUser(params) {
  let defered = Q.defer();
  console.log("------------------------------------------" + params.q);
  await userSchema.find({
    "$or": [
      { firstname: { $regex: params.q, $options: 'i' } },
      { emailid: { $regex: params.q, $options: 'i' } },
      { company: { $regex: params.q, $options: 'i' } },
    ]
  }).limit(10).exec(async function (err, searchedResults) {
    if (err) {
      defered.reject(err);
    }
    defered.resolve(searchedResults);
  });
  return defered.promise;
}

function findOne(params) {
  let defered = Q.defer();
  userSchema.find(params, function (err, results) {
    if (err) {
      defered.reject(err);
    }
    defered.resolve(results);
  });
  return defered.promise;
}
module.exports = { searchUser, findOne };