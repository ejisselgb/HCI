var NovedadesJson = '{ "novedades" : [' +
'{ "nombre":"novedad1" , "descripcion":"Descripción 1", "categoria":"Categoria 1", "image":"jsonimages/portatil.jpg" },' +
'{ "nombre":"novedad2" , "descripcion":"Descripción 2", "categoria":"Categoria 2", "image":"jsonimages/portatil.png" },' +
'{ "nombre":"novedad3" , "descripcion":"Descripción 3", "categoria":"Categoria 3", "image":"jsonimages/portatil.png" },'+
'{ "nombre":"novedad4" , "descripcion":"Descripción 4", "categoria":"Categoria 4", "image":"jsonimages/portatil.jpg"}]}';

var MasVendidosJson = '{ "vendidos" : [' +
'{ "nombre":"+vendido1" , "descripcion":"Descripción 1", "categoria":"Categoria 1", "image":"jsonimages/portatil.png" },' +
'{ "nombre":"+vendido2" , "descripcion":"Descripción 2", "categoria":"Categoria 2", "image":"jsonimages/portatil.jpg" },' +
'{ "nombre":"+vendido3" , "descripcion":"Descripción 3", "categoria":"Categoria 3", "image":"jsonimages/portatil.jpg" },'+
'{ "nombre":"+vendido4" , "descripcion":"Descripción 4", "categoria":"Categoria 4", "image":"jsonimages/portatil.png"}]}';

//variables
var novedadesDiv;
var vendidosDiv;


function loadnov(inputjson,htmldiv){
  data = JSON.parse(inputjson);
  var cantidad = data.novedades.length;
  var slides=Math.ceil(cantidad/2);
  for(var i=0;i<slides;i++){
    if(i==0){

      var caractive = document.createElement("div");
      caractive.className = "carousel-item active";

      var carcontainer = document.createElement("div");
      carcontainer.className = "container";

      var carrow = document.createElement("div");
      carrow.className = "row";


      var car1col = document.createElement("div");
      car1col.className = "col-sm-6";

      var center1col = document.createElement("center");

      var card = document.createElement("div");
      card.className = "card";

      var car1img = document.createElement("img");
      car1img.className = "img-fluid";
      car1img.src = data.novedades[i*2].image;

      var car1body = document.createElement("div");
      car1body.className = "card-body";

      var car1p = document.createElement("p");
      car1p.className = "card-text";
      var car1b = document.createElement("b");
      car1b.innerHTML=data.novedades[i*2].nombre;
      var car1pp = document.createElement("p");
      car1pp.className = "card-text"; 
      car1pp.innerHTML=data.novedades[i*2].descripcion;

      var span1car = document.createElement("span");
      span1car.className = "badge badge-success";
      span1car.innerHTML=data.novedades[i*2].categoria;

      car1p.appendChild(car1b);
      car1body.appendChild(car1p);
      car1body.appendChild(car1pp);
      car1body.appendChild(span1car);

      card.appendChild(car1img);
      card.appendChild(car1body);

      center1col.appendChild(card);

      car1col.appendChild(center1col);
      

      



      var car2col = document.createElement("div");
      car2col.className = "col-sm-6";

      var center2col = document.createElement("center");

      var car2d = document.createElement("div");
      car2d.className = "card";

      var car2img = document.createElement("img");
      car2img.className = "img-fluid";
      car2img.src = data.novedades[i*2+1].image;

      var car2body = document.createElement("div");
      car2body.className = "card-body";

      var car2p = document.createElement("p");
      car2p.className = "card-text";
      var car2b = document.createElement("b");
      car2b.innerHTML=data.novedades[i*2+1].nombre;
      var car2pp = document.createElement("p");
      car2pp.className = "card-text";
      car2pp.innerHTML=data.novedades[i*2+1].descripcion;

      var span2car = document.createElement("span");
      span2car.className = "badge badge-danger";
      span2car.innerHTML=data.novedades[i*2+1].categoria;

      car2p.appendChild(car2b);
      car2body.appendChild(car2p);
      car2body.appendChild(car2pp);
      car2body.appendChild(span2car);

      car2d.appendChild(car2img);
      car2d.appendChild(car2body);

      center2col.appendChild(car2d);

      car2col.appendChild(center2col);

      carrow.appendChild(car1col);
      carrow.appendChild(car2col);
      
      
      carcontainer.appendChild(carrow);
      caractive.appendChild(carcontainer);
      htmldiv.appendChild(caractive);


    }
    else{
      var car2 = document.createElement("div");
      car2.className = "carousel-item";

      var carcontainer2 = document.createElement("div");
      carcontainer2.className = "container";

      var carrow2 = document.createElement("div");
      carrow2.className = "row";


      var car1col2 = document.createElement("div");
      car1col2.className = "col-sm-6";

      var center1col2 = document.createElement("center");

      var card2 = document.createElement("div");
      card2.className = "card";

      var car1img2 = document.createElement("img");
      car1img2.className = "img-fluid";
      car1img2.src = data.novedades[i*2].image;

      var car1body2 = document.createElement("div");
      car1body2.className = "card-body";

      var car1p2 = document.createElement("p");
      car1p2.className = "card-text";
      var car1b2 = document.createElement("b");
      car1b2.innerHTML=data.novedades[i*2].nombre;
      var car1pp2 = document.createElement("p");
      car1pp2.className = "card-text";
      car1pp2.innerHTML=data.novedades[i*2].descripcion;

      var span1car2 = document.createElement("span");
      span1car2.className = "badge badge-danger";
      span1car2.innerHTML=data.novedades[i*2].categoria;

      car1p2.appendChild(car1b2);
      car1body2.appendChild(car1p2);
      car1body2.appendChild(car1pp2);
      car1body2.appendChild(span1car2);

      card2.appendChild(car1img2);
      card2.appendChild(car1body2);

      center1col2.appendChild(card2);

      car1col2.appendChild(center1col2);




      var car2col2 = document.createElement("div");
      car2col2.className = "col-sm-6";

      var center2col2 = document.createElement("center");

      var car2d2 = document.createElement("div");
      car2d2.className = "card";

      var car2img2 = document.createElement("img");
      car2img2.className = "img-fluid";
      car2img2.src = data.novedades[i*2+1].image;

      var car2body2 = document.createElement("div");
      car2body2.className = "card-body";

      var car2p2 = document.createElement("p");
      car2p2.className = "card-text";
      var car2b2 = document.createElement("b");
      car2b2.innerHTML=data.novedades[i*2+1].nombre;
      var car2pp2 = document.createElement("p");
      car2pp2.className = "card-text";
      car2pp2.innerHTML=data.novedades[i*2+1].descripcion;

      var span2car2 = document.createElement("span");
      span2car2.className = "badge badge-warning";
      span2car2.innerHTML=data.novedades[i*2+1].categoria;

      car2p2.appendChild(car2b2);
      car2body2.appendChild(car2p2);
      car2body2.appendChild(car2pp2);
      car2body2.appendChild(span2car2);

      car2d2.appendChild(car2img2);
      car2d2.appendChild(car2body2);

      center2col2.appendChild(car2d2);

      car2col2.appendChild(center2col2);

      carrow2.appendChild(car1col2);
      carrow2.appendChild(car2col2);
      

      
      carcontainer2.appendChild(carrow2);
      car2.appendChild(carcontainer2);
      htmldiv.appendChild(car2);
    }
    
  }
}

function loadven(inputjson,htmldiv){
  data = JSON.parse(inputjson);
  var cantidad = data.vendidos.length;
  var slides=Math.ceil(cantidad/2);
  for(var i=0;i<slides;i++){
    if(i==0){

      var caractive = document.createElement("div");
      caractive.className = "carousel-item active";

      var carcontainer = document.createElement("div");
      carcontainer.className = "container";

      var carrow = document.createElement("div");
      carrow.className = "row";


      var car1col = document.createElement("div");
      car1col.className = "col-sm-6";

      var center1col = document.createElement("center");

      var card = document.createElement("div");
      card.className = "card";

      var car1img = document.createElement("img");
      car1img.className = "img-fluid";
      car1img.src = data.vendidos[i*2].image;

      var car1body = document.createElement("div");
      car1body.className = "card-body";

      var car1p = document.createElement("p");
      car1p.className = "card-text";
      var car1b = document.createElement("b");
      car1b.innerHTML=data.vendidos[i*2].nombre;
      var car1pp = document.createElement("p");
      car1pp.className = "card-text"; 
      car1pp.innerHTML=data.vendidos[i*2].descripcion;

      var span1car = document.createElement("span");
      span1car.className = "badge badge-danger";
      span1car.innerHTML=data.vendidos[i*2].categoria;

      car1p.appendChild(car1b);
      car1body.appendChild(car1p);
      car1body.appendChild(car1pp);
      car1body.appendChild(span1car);

      card.appendChild(car1img);
      card.appendChild(car1body);

      center1col.appendChild(card);

      car1col.appendChild(center1col);
      

      



      var car2col = document.createElement("div");
      car2col.className = "col-sm-6";

      var center2col = document.createElement("center");

      var car2d = document.createElement("div");
      car2d.className = "card";

      var car2img = document.createElement("img");
      car2img.className = "img-fluid";
      car2img.src = data.vendidos[i*2+1].image;

      var car2body = document.createElement("div");
      car2body.className = "card-body";

      var car2p = document.createElement("p");
      car2p.className = "card-text";
      var car2b = document.createElement("b");
      car2b.innerHTML=data.vendidos[i*2+1].nombre;
      var car2pp = document.createElement("p");
      car2pp.className = "card-text";
      car2pp.innerHTML=data.vendidos[i*2+1].descripcion;

      var span2car = document.createElement("span");
      span2car.className = "badge badge-info";
      span2car.innerHTML=data.vendidos[i*2+1].categoria;

      car2p.appendChild(car2b);
      car2body.appendChild(car2p);
      car2body.appendChild(car2pp);
      car2body.appendChild(span2car);

      car2d.appendChild(car2img);
      car2d.appendChild(car2body);

      center2col.appendChild(car2d);

      car2col.appendChild(center2col);

      carrow.appendChild(car1col);
      carrow.appendChild(car2col);
      
      
      carcontainer.appendChild(carrow);
      caractive.appendChild(carcontainer);
      htmldiv.appendChild(caractive);


    }
    else{
      var car2 = document.createElement("div");
      car2.className = "carousel-item";

      var carcontainer2 = document.createElement("div");
      carcontainer2.className = "container";

      var carrow2 = document.createElement("div");
      carrow2.className = "row";


      var car1col2 = document.createElement("div");
      car1col2.className = "col-sm-6";

      var center1col2 = document.createElement("center");

      var card2 = document.createElement("div");
      card2.className = "card";

      var car1img2 = document.createElement("img");
      car1img2.className = "img-fluid";
      car1img2.src = data.vendidos[i*2].image;

      var car1body2 = document.createElement("div");
      car1body2.className = "card-body";

      var car1p2 = document.createElement("p");
      car1p2.className = "card-text";
      var car1b2 = document.createElement("b");
      car1b2.innerHTML=data.vendidos[i*2].nombre;
      var car1pp2 = document.createElement("p");
      car1pp2.className = "card-text";
      car1pp2.innerHTML=data.vendidos[i*2].descripcion;

      var span1car2 = document.createElement("span");
      span1car2.className = "badge badge-danger";
      span1car2.innerHTML=data.vendidos[i*2].categoria;

      car1p2.appendChild(car1b2);
      car1body2.appendChild(car1p2);
      car1body2.appendChild(car1pp2);
      car1body2.appendChild(span1car2);

      card2.appendChild(car1img2);
      card2.appendChild(car1body2);

      center1col2.appendChild(card2);

      car1col2.appendChild(center1col2);




      var car2col2 = document.createElement("div");
      car2col2.className = "col-sm-6";

      var center2col2 = document.createElement("center");

      var car2d2 = document.createElement("div");
      car2d2.className = "card";

      var car2img2 = document.createElement("img");
      car2img2.className = "img-fluid";
      car2img2.src = data.vendidos[i*2+1].image;

      var car2body2 = document.createElement("div");
      car2body2.className = "card-body";

      var car2p2 = document.createElement("p");
      car2p2.className = "card-text";
      var car2b2 = document.createElement("b");
      car2b2.innerHTML=data.vendidos[i*2+1].nombre;
      var car2pp2 = document.createElement("p");
      car2pp2.className = "card-text";
      car2pp2.innerHTML=data.vendidos[i*2+1].descripcion;

      var span2car2 = document.createElement("span");
      span2car2.className = "badge badge-warning";
      span2car2.innerHTML=data.vendidos[i*2+1].categoria;

      car2p2.appendChild(car2b2);
      car2body2.appendChild(car2p2);
      car2body2.appendChild(car2pp2);
      car2body2.appendChild(span2car2);

      car2d2.appendChild(car2img2);
      car2d2.appendChild(car2body2);

      center2col2.appendChild(car2d2);

      car2col2.appendChild(center2col2);

      carrow2.appendChild(car1col2);
      carrow2.appendChild(car2col2);
      

      
      carcontainer2.appendChild(carrow2);
      car2.appendChild(carcontainer2);
      htmldiv.appendChild(car2);
    }
    
  }
}

function getDivs(){
  novedadesDiv = document.getElementById("novcar");
  vendidosDiv = document.getElementById("vendicar");
  loadnov(NovedadesJson,novedadesDiv);
  loadven(MasVendidosJson,vendidosDiv)
}

window.onload=getDivs;
