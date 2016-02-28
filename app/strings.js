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

  },
  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
