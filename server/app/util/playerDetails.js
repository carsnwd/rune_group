var request = require('request');
var sanitize = require('mongo-sanitize');

var myLocal = {
  getAndVerifyPlayerDetails: function(rsn, callback){
    var that = this;
    var rsnSanitized = sanitize(rsn);
    var url = 'https://apps.runescape.com/runemetrics/profile/profile?user='+rsnSanitized;
    request(url, function(err, res, body){
      if(!err && res.statusCode == 200){
        return callback(JSON.parse(body));
      }else{
        throw new Error('RsnNotFound');
      }
    });
  }
};

module.exports = {
  isPlayerMaxed: function(rsn, callback){
    myLocal.getAndVerifyPlayerDetails(rsn, function(playerDetails){
      var skills = playerDetails.skillvalues;
      skills.forEach(function(skill){
        var playerLevel = parseInt(skill.level);
        console.log("? " + playerLevel + " < " + "99");
        if(playerLevel < 99){
          callback(false);
        }
      });
      callback(true);
    });
  },

  getPlayerAvatar: function(rsn, callback){
    myLocal.getAndVerifyPlayerDetails(rsn, function(playerDetails){
      callback("http://secure.runescape.com/m=avatar-rs/"+playerDetails.name+"/chat.png");
    });
  }
};
