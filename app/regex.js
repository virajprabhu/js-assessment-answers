exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var re = /\d+/;
    return re.test(str);
  },

  containsRepeatingLetter : function(str) {
    var re = /([a-zA-Z])(\1)/g;
    return re.test(str);
  },

  endsWithVowel : function(str) {
    var re = /[a|e|i|o|u]$/i;
    return re.test(str);
  },

  captureThreeNumbers : function(str) {
    var re = /\d{3}/;
    var match = re.exec(str);
    return match ? match[0] : false;
  },

  matchesPattern : function(str) {
    var re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(str);
  },
  isUSD : function(str) {
    var re =/^\$\d{1,3}(\,\d{3})*(\.\d\d)?$/;
    return re.test(str);
  }
};
