import $ from 'jquery';
import token from './githubtoken';

$.ajaxSetup({
  headers: {
    Authorization: "token " + token
  }
});

var url = 'https://api.github.com/users/thomasweld';

$.getJSON(url, function ( res ){
  console.log(res.name);
});
