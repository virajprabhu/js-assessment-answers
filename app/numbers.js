exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return (num >> bit-1) & 1; 
  },

  base10: function(str) {
    var arr = str.split('');  // How does it treat it like a number?
    return arr.reduce(function(prev, curr, curr_index, array) {
      return prev + parseInt(curr, 10) * Math.pow(2, arr.length-curr_index-1);
    }, 0);
  },

  convertToBinary: function(num) {
    var bin = num.toString(2);
    if (bin.length < 8) {
      bin = Array(9-bin.length).join('0') + bin;
    } // Note: Join puts the arguments between the elements
    return bin;
  },

  multiply: function(a, b) {
    function resolve(num) {
      return (num < 1) ? (1 + resolve(num*10)) : 0;
    } // takeaway: strictly use integers if you need precision
    var a_dec = resolve(a);
    var b_dec = resolve(b);
    return ((a * Math.pow(10, a_dec)) * (b * Math.pow(10, b_dec))) / Math.pow(10, a_dec + b_dec);
  }
};
