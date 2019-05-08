// http://www.omdbapi.com/

class Handler {
  constructor(_apiUrl, _apiKey) {
    this.lastData;
    this.lastUrl;
    this.apiUrl = _apiUrl;
    this.apiKey = _apiKey;
    this.mostViewed;
  }

  getData(ref, _params, callback = 'this.setData', error = 'this.error',
  _responseType = 'json', _reqType = 'GET') {

    let req = new XMLHttpRequest();
    let tmpUrl = ref.apiUrl + '?' + 'apikey=' + ref.apiKey + _params;
    req.open(_reqType, tmpUrl, true);
    req.responseType = _responseType;
    req.onload = function () {
        let status = req.status;
        if (status == 200) {
          if (callback) {
            callback(req.response);
          }
        } else {
          if (error) {
            error(status);
          }
        }
      };

    req.send();
  }

  // TODO: getData2 not working yet
  getData2(ref, _params, callback = 'this.setData', error = 'this.error',
  _responseType = 'json', _reqType = 'GET') {
    let tmpUrl = ref.apiUrl + '?' + 'apikey=' + ref.apiKey + _params;
    fetch(tmpUrl)
    .then(response => response.json())
    .then(data => callback);
  }

  fetchMovieListByGender(_gender) {
    let popo = JSON.parse(data);
    for (var i in popo[0].movies) {
      if (popo[0].movies[i].gender == _gender) {
        return popo[0].movies[i].movies;
      }
    }

    return;
  }

  setData(_data) {
    this.lastData = _data;

  }

  error(_status) {
    console.log(_status);
  }

  searchUpdate(data) {
    console.log(data);
    if (data) {
      document.getElementById('searchResult').innerHTML  = data.Title;
      document.getElementById('movieDescription').innerText = data.Plot;
      document.getElementById('movieImage').src  = data.Poster;
    }
  }

  search(ref) {
    //console.log(ref);
    let movie = document.getElementById('searchBar').value;
    ref.getData(ref, '&t=' + movie, ref.searchUpdate);
  }

  genSearch(ref, gender) {
    let tmp = document.getElementById('moviesByGender');

    //Remove every child so we can add new movies
    while (tmp.firstChild) {
      tmp.removeChild(tmp.firstChild);
    }

    let gen = ref.fetchMovieListByGender(gender);
    for (let i in gen) {
      let movie = gen[i].nameMovie;
      ref.getData(ref, '&t=' + movie, (data) => {
        var title = document.createElement('P');
        var poster = document.createElement('img');
        var plot = document.createElement('P');
        title.innerHTML = data.Title;
        poster.src = data.Poster;
        plot.innerText = data.Plot;
        tmp.appendChild(title);
        tmp.appendChild(poster);
        tmp.appendChild(plot);
      });
    }
  }

  __init__() {
    //console.log(this);
    document.getElementById('searchBar')
    .addEventListener('keyup', () => {this.search(this);}, false);

    document.getElementById('comedyButton')
    .addEventListener('click', () => {this.genSearch(this, 'comedy');}, false);

    document.getElementById('romanceButton')
    .addEventListener('click', () => {this.genSearch(this, 'romance');}, false);

    document.getElementById('scaryButton')
    .addEventListener('click', () => {this.genSearch(this, 'scary');}, false);

    document.getElementById('animatedButton')
    .addEventListener('click', () => {this.genSearch(this, 'animated');}, false);

    console.log('INITIALIZED');
  }

}

function setup() {
  var apiKey = '4bc0d23c';
  var url = 'http://www.omdbapi.com/?';
  return url + 'apikey=' + apiKey + '&';
}

var a = new Handler('http://www.omdbapi.com/', '4bc0d23c');
a.__init__();
