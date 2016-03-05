exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return new Promise(function(resolve, reject) {
  		resolve(value);
  	});
  },

  manipulateRemoteData : function(url) {
  	var promise = new Promise(function (resolve, reject) {
  		var client = new XMLHttpRequest();
  		client.open('GET', url);
  		client.send();
  		client.onload = function() {
  			if (this.status >= 200 && this.status <= 300) {
  				var people = JSON.parse(this.response).people;
  				return resolve(Array.from(people, x => x.name).sort());
  			} else {
  				reject(this.statusText);
  			}
  		};
  		client.onerror = function() {
  			reject(this.statusText);
  		};
  	});
  	return promise;
  }
};
