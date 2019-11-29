/* Magic Mirror
 * Module: MMM-EndOfOil
 *
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-EndOfOil",{

	defaults: {
		  size: "",
			textColor: "",
	},

	getStyles: function() {
        return ["MMM-EndOfOil.css"];
    },


	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none"
		iframe.scrolling = "no";

		if (this.config.size === "large") {
			iframe.height = "110px";
			iframe.width = "325px";
		  type="text/javascript";
      iframe.src="https://www.theworldcounts.com/counters/interesting_facts_on_energy/life_after_oil_crash/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=26&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";


			// <iframe height='100' src='https://www.theworldcounts.com/counters/interesting_facts_on_energy/life_after_oil_crash/embed?background_color=black&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=26&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc' style='border: none' width='300'></iframe>


  } else if (this.config.size === "medium") {
		iframe.height = "95px";
		iframe.width = "265px";
		type="text/javascript";
		iframe.src="https://www.theworldcounts.com/counters/interesting_facts_on_energy/life_after_oil_crash/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=22&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";

	} else if (this.config.size === "small") {
		iframe.height = "90px";
		iframe.width = "225px";
		type="text/javascript";
		iframe.src="https://www.theworldcounts.com/counters/interesting_facts_on_energy/life_after_oil_crash/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=18&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";
  }

		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_EXTINCTIONS') {
            this.hide(1000);
        }  else if (notification === 'SHOW_EXTINCTIONS') {
            this.show(1000);
        }

    },

});
