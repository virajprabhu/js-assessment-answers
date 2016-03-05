exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
  	if (arr.length === 1) {
  		return arr;
  	}
  	var curr = arr.pop();
  	var curr_perms = arguments.callee(arr);
  	var len = curr_perms.length;
  	for (var i = 0; i<=len; i++) {
  		// console.log(len);
  		curr_perms.splice(i, 0, curr);
  		// console.log(curr_perms);
  	}
  	return curr_perms;
  },

  fibonacci: function(n) {
  	if (n === 1 || n === 2) {
  		return 1;
  	}
  	return arguments.callee(n-1) + arguments.callee(n-2);
  },

  validParentheses: function(n) {
  	if (n === 1) {
  		return ['()'];
  	} else {
  		var newArr = [];
  		arguments.callee(n-1).forEach(function(grouping, index, array) {
  			newArr.push('(' + grouping + ')');
  			newArr.push('()' + grouping);
  			newArr.push(grouping + '()');
  			newArr = _.uniq(newArr);
  		});
  		return newArr;
  	}
  }
};
