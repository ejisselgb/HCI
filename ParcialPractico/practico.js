let myAmazon = JSON.parse(amazon);

function buildArrays(){
    let most_sold = new Array;
    let news = new Array;
    let disccounts = new Array;
    for(var i in myAmazon[0].Store){
        if(myAmazon[0].Store[i].categoria == "mas_vendidos"){
            most_sold = myAmazon[0].Store[i].Productos; 
        }
        else if(myAmazon[0].Store[i].categoria == "novedades"){
            news =  myAmazon[0].Store[i].Productos;
        }
        else{
            disccounts = myAmazon[0].Store[i].Productos;
        }
    }

    var create_most_sold = function(){
        var nodeParent = document.getElementById("most-sold");
        var leftBorder = document.createElement('div');
        leftBorder.className = "col-md-2";
        nodeParent.appendChild(leftBorder);
        for(var i in most_sold){
            var newDiv = document.createElement('div');
            newDiv.className = "card col-md-2"
            var image = document.createElement('img');
            image.setAttribute("src", most_sold[i].Image);
            image.className = "card-img-top"
            var bodyDiv = document.createElement('div');
            bodyDiv.className = "card-body";
            var name = document.createElement('h5');
            name.className = "card-title";
            name.innerHTML = most_sold[i].nombre;
            var description = document.createElement('p');
            description.className = "card-text";
            description.innerHTML = most_sold[i].Descripcion;
            
            newDiv.appendChild(image);
            bodyDiv.appendChild(name);
            bodyDiv.appendChild(description);
            newDiv.appendChild(bodyDiv)
            nodeParent.appendChild(newDiv);
        }
        var rightBorder = document.createElement('div');
        rightBorder.className = "col-md-2";
        nodeParent.appendChild(rightBorder);
    }

    var create_news = function(){
        var nodeParent = document.getElementById("new");
        var leftBorder = document.createElement('div');
        leftBorder.className = "col-md-2";
        nodeParent.appendChild(leftBorder);
        for(var i in news){
            var newDiv = document.createElement('div');
            newDiv.className = "card col-md-2"
            var image = document.createElement('img');
            image.setAttribute("src", news[i].Image);
            image.className = "card-img-top"
            var bodyDiv = document.createElement('div');
            bodyDiv.className = "card-body";
            var name = document.createElement('h5');
            name.className = "card-title";
            name.innerHTML = news[i].nombre;
            var description = document.createElement('p');
            description.className = "card-text";
            description.innerHTML = news[i].Descripcion;
            
            newDiv.appendChild(image);
            bodyDiv.appendChild(name);
            bodyDiv.appendChild(description);
            newDiv.appendChild(bodyDiv)
            nodeParent.appendChild(newDiv);
        }
        var rightBorder = document.createElement('div');
        rightBorder.className = "col-md-2";
        nodeParent.appendChild(rightBorder);
    }

    var create_disccounts = function(){
        var nodeParent = document.getElementById("off");
        var leftBorder = document.createElement('div');
        leftBorder.className = "col-md-2";
        nodeParent.appendChild(leftBorder);
        for(var i in disccounts){
            var newDiv = document.createElement('div');
            newDiv.className = "card col-md-2"
            var image = document.createElement('img');
            image.setAttribute("src", disccounts[i].Image);
            image.className = "card-img-top"
            var bodyDiv = document.createElement('div');
            bodyDiv.className = "card-body";
            var name = document.createElement('h5');
            name.className = "card-title";
            name.innerHTML = disccounts[i].nombre;
            var description = document.createElement('p');
            description.className = "card-text";
            description.innerHTML = disccounts[i].Descripcion;
            
            newDiv.appendChild(image);
            bodyDiv.appendChild(name);
            bodyDiv.appendChild(description);
            newDiv.appendChild(bodyDiv)
            nodeParent.appendChild(newDiv);
        }
        var rightBorder = document.createElement('div');
        rightBorder.className = "col-md-2";
        nodeParent.appendChild(rightBorder);
    }

    create_most_sold();
    create_news();
    create_disccounts();
}

buildArrays();