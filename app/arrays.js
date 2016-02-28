exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i<arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    return arr.reduce( (prev, curr) => prev + curr );
  },

  remove : function(arr, item) {
    return _.without(arr, item);

    function equalsTarget(value) {
      return value !== item;
    }
    return arr.filter(equalsTarget);
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length-1; i>=0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
;  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    return arr.reduce(function(prev, curr, curr_index, arr) {
        return (curr === item) ? (prev+1) : prev;
    }, 0);
  },

  duplicates : function(arr) {
    function isDuplicate(item) {
      return (exports.arraysAnswers.count(arr, item) !== 1);
    }
    return _.uniq(arr.filter(isDuplicate));
  },

  square : function(arr) {
    return arr.map(function(curr, index, arr) {
      return Math.pow(curr, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    var resultArr = [];
    for (var i = 0; i<arr.length; i++) {
      if (arr[i] === target) {
        resultArr.push(i);  
      }
    }
    return resultArr;
  }
};
