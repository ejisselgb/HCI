const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&query="
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
const INDEX_URL = 'https://api.themoviedb.org/3/movie/'
const CATEGORIES_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US'
const POSTER_URL = 'https://image.tmdb.org/t/p/w500'
const API_KEY = '?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
const INDEX_CATEGORIES_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&with_genres='
var data = []
const dataCat = []
var data_pannel = document.getElementById('data-panel')
var data_categories = document.getElementById('listCategories')

$(function(){

  loadData(BASE_URL)


  axios.get(CATEGORIES_URL)
    .then(
      (response) => {
        dataCat.push(...response.data.genres)
        data_categories.addEventListener('click',(event) =>{
          if (event.target.matches('.dropdown-item')){
            $('#data-panel').empty();
            console.log(event.target.dataset.id)
            loadData(INDEX_CATEGORIES_URL + event.target.dataset.id)
          }
        })
        displayCategories(dataCat)

      }
    ).catch()
})


$('#buscarButton').click(function(e){
    e.preventDefault();
    var name = document.getElementById("inputSearch").value
    loadData(SEARCH_URL + name)
    return false
});


function loadData(BASE){
  axios.get(BASE).then( response => {
    data = []
    $('#data-panel').empty();
    data.push(...response.data.results)
    data_pannel.addEventListener('click', (event) => {
      if (event.target.matches('.btn-show-movie')) {
        console.log(event.target) 
        console.log(event.target.dataset.id)  
        showMovie(event.target.dataset.id) 
      }
    })
    displayDataList(data)
  }
  ).catch()
}

function displayDataList(data) {
  let htmlContent = ''
  data.forEach(function (item, index) { 
    htmlContent += `
          <div class="col-sm-3">
          <div class="card mb-2"> 
          <img class="card-img-top" src="${POSTER_URL}${item.poster_path}" alt="card image cap">
            
          <div class="card-body movie-item-body">
          <h6>${item.title}</h6>
          </div>
          <div>
          <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" data-id="${item.id}" >Informacion</button>
          </div>

          </div>
          </div>
          `
  })
  data_pannel.innerHTML = htmlContent

}

function showMovie(id) {

  const modalTitle = document.getElementById('show-movie-title')
  const modalImage = document.getElementById('show-movie-image')
  const modalDate = document.getElementById('show-movie-date')
  const modalDescription = document.getElementById('show-movie-description')

  const url = INDEX_URL + id + API_KEY
  console.log(url)

  axios.get(url).then(response => {
    const data = response.data
    console.log(data)

    modalTitle.innerHTML = data.title
    modalImage.innerHTML = `<img src="${POSTER_URL}${data.poster_path}" class="img-fluid" alt="Responsive image">`
    modalDate.innerHTML = `release at : ${data.release_date}`
    modalDescription.innerHTML = `${data.overview}`
  })
}



function displayCategories(data){
  let htmlContent = ''
  data.forEach(function(item,index){
    htmlContent += `
          <a class="dropdown-item" data-id="${item.id}" href="#">${item.name}</a>
          `
  })
  data_categories.innerHTML = htmlContent
}