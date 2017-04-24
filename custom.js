$(document).ready(function() {
  var quoteText = "";
  var quoteAuthor = "";

	function getQuote() {
    console.log("in function");
	  var cb = Math.round(new Date().getTime() / 1000);
	  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function(a) {
      console.log("a" + a);
      console.log(a);
      // 4 below lines used to get proper encoding of result string (for twitter btn)
      var x = $("<div>").html(a[0].content);
      var y = $("<div>").html(a[0].title);
      // console.dir(x[0].textContent);
      quoteText = x[0].textContent;
      quoteAuthor = y[0].textContent;

      console.log(" 333 " + (a[0].content) + " 1 " + a[0].title);
      var responseString = '<p id="quote-text"><i class="fa fa-quote-left" aria-hidden="true"></i> ' + quoteText + '<p id="quote-author">— ' + quoteAuthor + '</p>';
	    $("#qoute-box").html(responseString);
	  });
	}

	getQuote();

	$("#twitter-button").click(function() {
		var URL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    URL += "\"" + encodeURIComponent(quoteText) + "\" " + encodeURIComponent(quoteAuthor);
    // console.log(URL);
		window.open(URL);
	});

	$("#button-new-quote").click(function() {
    console.log("New Post button clicked");
		getQuote();
	});


});
