// http://www.omdbapi.com/

function setup() {
  var apiKey = '4bc0d23c';
  var url = 'http://www.omdbapi.com/?';
  return url + 'apikey=' + apiKey + '&';
}

function loadJSON(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {

      var status = xhr.status;

      if (status == 200) {
        callback(xhr.response);
      } else {
        callback(status);
      }
    };

  xhr.send();
}

function searchUpdate(data) {
  document.getElementById('searchResult').innerHTML  = data.Title;
  document.getElementById('movieImage').src  = data.Poster;
  console.log(data);
}

function search() {
  movie = document.getElementById('searchBar').value;
  loadJSON(apiUrl + 't=' +  movie, searchUpdate);
}

var apiUrl = setup();
