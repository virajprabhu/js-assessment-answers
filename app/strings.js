exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var arr = str.split('');
  	var curr = '', cl = 0;;
  	function reduceDuplicates(ch) {
  		if (ch !== curr) {
  			curr = ch;
  			cl = 0;
  		} else {
  			cl += 1;
  		}
  		return cl < amount;
  	}
  	return arr.filter(reduceDuplicates).join('');

  },
  wordWrap: function(str, cols) {
    var count = 0;
    str += ' ';
    for (var i = 0; i<str.length-1; i++) {
      count += 1;
      if (str[i] === ' ') {
        if (str.substring(i+1).indexOf(' ') + count > cols) {
          count = 0;
          str = str.substring(0, i) + '\n' + str.substring(i+1);
        } 
      }
    }
    return str.substring(0, str.length-1);
  },
  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
