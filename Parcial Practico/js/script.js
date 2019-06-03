var dataJsonVendidos = '{ "mas_vendidos" : [' +
'{ "nombre":"articulo1" , "descripcion":"Este es el articulo 1", "categoria":"Tecnologia", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },' +
'{ "nombre":"articulo2" , "descripcion":"Este es el articulo 2", "categoria":"Moda", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },' +
'{ "nombre":"articulo3" , "descripcion":"Este es el articulo 3", "categoria":"Libros", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },'+
'{ "nombre":"articulo4" , "descripcion":"Este es el articulo 4", "categoria":"Juguetes", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},'+
'{ "nombre":"articulo5" , "descripcion":"Este es el articulo 5", "categoria":"Musica", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},' +
'{ "nombre":"articulo6" , "descripcion":"Este es el articulo 6", "categoria":"Joyas", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}]}';


var dataJsonNovedades = '{ "novedades" : [' +
'{ "nombre":"articulo1" , "descripcion":"Este es el articulo 1", "categoria":"Tecnologia", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },' +
'{ "nombre":"articulo2" , "descripcion":"Este es el articulo 2", "categoria":"Moda", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },' +
'{ "nombre":"articulo3" , "descripcion":"Este es el articulo 3", "categoria":"Libros", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },'+
'{ "nombre":"articulo4" , "descripcion":"Este es el articulo 4", "categoria":"Juguetes", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},' +
'{ "nombre":"articulo5" , "descripcion":"Este es el articulo 5", "categoria":"Musica", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},' +
'{ "nombre":"articulo6" , "descripcion":"Este es el articulo 6", "categoria":"Joyas", "imagen":"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}]}';

var divVendidos = null;
var divNovedades = null;

window.onload=cargarInfo;


function cargarVendidos(){
    obj = JSON.parse(dataJsonVendidos);

    for(var i = 0; i < obj.mas_vendidos.length; i++){
        if(i%3 == 0){
            if(i != 0){
                createDiv1Vendidos.appendChild(createDiv2Vendidos);
                divVendidos.appendChild(createDiv1Vendidos);
            }
            if(i == 0){
                var createDiv1Vendidos = document.createElement("div");
                createDiv1Vendidos.className = "carousel-item active";
            }else{
                var createDiv1Vendidos = document.createElement("div");
                createDiv1Vendidos.className = "carousel-item";
            }
            
            var createDiv2Vendidos = document.createElement("div");
            createDiv2Vendidos.className = "row";
        }

        
        var createDiv3Vendidos = document.createElement("div");
        createDiv3Vendidos.className = "col-sm";
        var createDiv4Vendidos = document.createElement("div");
        createDiv4Vendidos.className = "card";
        createDiv4Vendidos.style.cssText = 'width:18rem;';
        var createimgVendidos = document.createElement("img");
        createimgVendidos.className = "d-block w-100";
        createimgVendidos.src = obj.mas_vendidos[i].imagen; //LLENAR CON LA IMAGEN
        var createDiv5Vendidos = document.createElement("div");
        createDiv5Vendidos.className = "card-body";
        var createButtonVendidos = document.createElement("button");
        createButtonVendidos.type = "button";
        createButtonVendidos.className = "btn btn-success btn-block";
        createButtonVendidos.innerHTML = obj.mas_vendidos[i].categoria; //LLENAR CON LA CATEGORIA

        var createDescripcionVendidos = document.createElement("p");
        createDescripcionVendidos.className = "card-text";
        createDescripcionVendidos.innerHTML = obj.mas_vendidos[i].descripcion;

        var createTitleVendidos = document.createElement("h5");
        createTitleVendidos.className = "card-title";
        createTitleVendidos.innerHTML = obj.mas_vendidos[i].nombre;

        createDiv5Vendidos.appendChild(createTitleVendidos);
        createDiv5Vendidos.appendChild(createDescripcionVendidos);
        createDiv5Vendidos.appendChild(createButtonVendidos);
        createDiv4Vendidos.appendChild(createimgVendidos);
        createDiv4Vendidos.appendChild(createDiv5Vendidos);
        createDiv3Vendidos.appendChild(createDiv4Vendidos);
        createDiv2Vendidos.appendChild(createDiv3Vendidos);
        
    }
    createDiv1Vendidos.appendChild(createDiv2Vendidos);
    divVendidos.appendChild(createDiv1Vendidos);
}

function cargarNovedades(){
    obj = JSON.parse(dataJsonNovedades);
    for(var i = 0; i < obj.novedades.length; i++){
        if(i%3 == 0){
            if(i != 0){
                createDiv1Vendidos.appendChild(createDiv2Vendidos);
                divNovedades.appendChild(createDiv1Vendidos);
            }
            if(i == 0){
                var createDiv1Vendidos = document.createElement("div");
                createDiv1Vendidos.className = "carousel-item active";
            }else{
                var createDiv1Vendidos = document.createElement("div");
                createDiv1Vendidos.className = "carousel-item";
            }
            
            var createDiv2Vendidos = document.createElement("div");
            createDiv2Vendidos.className = "row";
        }
        
        var createDiv3Vendidos = document.createElement("div");
        createDiv3Vendidos.className = "col-sm";
        var createDiv4Vendidos = document.createElement("div");
        createDiv4Vendidos.className = "card";
        createDiv4Vendidos.style.cssText = 'width:18rem;';
        var createimgVendidos = document.createElement("img");
        createimgVendidos.className = "d-block w-100";
        createimgVendidos.src = obj.novedades[i].imagen; //LLENAR CON LA IMAGEN
        var createDiv5Vendidos = document.createElement("div");
        createDiv5Vendidos.className = "card-body";
        var createButtonVendidos = document.createElement("button");
        createButtonVendidos.type = "button";
        createButtonVendidos.className = "btn btn-primary btn-block";
        createButtonVendidos.innerHTML = obj.novedades[i].categoria; //LLENAR CON LA CATEGORIA

        var createDescripcionVendidos = document.createElement("p");
        createDescripcionVendidos.className = "card-text";
        createDescripcionVendidos.innerHTML = obj.novedades[i].descripcion;

        var createTitleVendidos = document.createElement("h5");
        createTitleVendidos.className = "card-title";
        createTitleVendidos.innerHTML = obj.novedades[i].nombre;

        createDiv5Vendidos.appendChild(createTitleVendidos);
        createDiv5Vendidos.appendChild(createDescripcionVendidos);

        createDiv5Vendidos.appendChild(createButtonVendidos);
        createDiv4Vendidos.appendChild(createimgVendidos);
        createDiv4Vendidos.appendChild(createDiv5Vendidos);
        createDiv3Vendidos.appendChild(createDiv4Vendidos);
        createDiv2Vendidos.appendChild(createDiv3Vendidos);
        
    }
    createDiv1Vendidos.appendChild(createDiv2Vendidos);
    divNovedades.appendChild(createDiv1Vendidos);
}

function cargarInfo() {
    //alert("HOLA");
    divVendidos = document.getElementById("mas_vendidos");
    divNovedades = document.getElementById("novedades_data_item");
    cargarVendidos();
    cargarNovedades();
}