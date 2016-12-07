




var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
var YOUTUBE_LINK_URL = 'https://www.youtube.com/watch?v='

// REQUEST DATA FROM API
// https://developers.google.com/youtube/v3/docs/search/list
// https://developers.google.com/youtube/v3/sample_requests
function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: YOUTUBE_BASE_URL,
    data: {
      part: 'snippet',
      key: 'AIzaSyA6GeIpjHP3s746fL5Ee9L6P7iLVMfvEfQ',
      q: searchTerm,
      maxResults: 25
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}



// SHOW SEARCH RESULTS

function displayYouTubeSearchData(data) {
	console.log(data.items[3].id.videoId);
//  TITLE	
//	console.log(data.items[0].snippet.title);
// THUMBNAIL
//	console.log(data.items[0].snippet.thumbnails.default.url);
  var resultElement = '';
  if (data.items.length > 0) {
//    data.items.forEach(function(snippet) {
	for (var i = 0; i < data.items.length; i++) {
     resultElement += "<span  id='" + data.items[i].id.videoId + "'> <p>" + data.items[i].snippet.title + '</p>' +
     				  "<img src='" + data.items[i].snippet.thumbnails.default.url + "' alt='thumbnail of video'></span>";
    };
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

// create a div around both the <p> and the <img>
// 
//
// create event listener that goes to the source for the div that you clicked


// EVENT LISTENER

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $('.js-search-form').find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(function(){watchSubmit();});


/*$('.js-search-results').on('click', 'span', function (e) {
    alert(e.this.id);
});*/

$('span').on('click', function () {
    console.log(this.id);
});