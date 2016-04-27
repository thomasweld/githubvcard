import $ from 'jquery';
import token from './githubtoken';


// import template function that builds basics html from API data
import basicshtml from './templates/basics'

// import template function that builds image html from API data
import imagehtml from './templates/image'

// ajax setup for handling Authorization token
$.ajaxSetup({
  headers: {
    Authorization: "token " + token
  }
});

// api url
var url = 'https://api.github.com/users/thomasweld';

// accessing divs to drop html into later
var basics_area = $('#basics');
var story_area = $('#story');
var image_area = $('#picture');


$.getJSON(url, function ( res ){

  console.log(res);

  var basics_content = basicshtml( res );
  basics_area.append(basics_content);

  var image_content = imagehtml( res );
  image_area.append(image_content);

});
