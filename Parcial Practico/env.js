$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }

  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 4; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});

let datos = JSON.parse(data);
console.log(datos);

let rows = [0, 0, 0];
let cols = [0, 0, 0];
let tipos = ['masvendido', 'novedades', 'descuentos'];

function addrow(tipo) {
  let item = document.createElement('div');
  item.classList.add('carousel-item');
  item.id = 'car' + tipo;
  let row = document.createElement('div');
  row.classList.add('row');
  rows[tipo] += 1;
  row.id = 'row' + tipos[tipo] + rows[tipo];
  item.appendChild(row);
  let tmp = document.getElementById('addrow' + tipo).appendChild(item);
}

var addcol = function (tipo) {
  let col = document.createElement('div');
  let itemblog = document.createElement('div');
  let itemblogimg = document.createElement('div');
  let fig = document.createElement('figure');
  let img = document.createElement('img');
  let itemheading = document.createElement('div');
  let tmph = document.createElement('h5');
  let itemtext = document.createElement('div');
  let text =  document.createElement('p');

  col.classList.add('col-md-4');
  itemblog.classList.add('item-box-blog');
  itemblog.classList.add('item-box-blog-image');
  itemtext.classList.add('item-box-blog-text');
  itemheading.classList.add('item-box-blog-heading');

  img.src = datos[tipo][tipos[tipo]][0].img;
  img.src = './test.jpg';
  tmph.innerHTML = datos[tipo][tipos[tipo]][0].nombre;
  text.innerHTML = datos[tipo][tipos[tipo]][0].descripcion;

  itemheading.appendChild(document.createElement('a').appendChild(tmph));
  itemtext.appendChild(text);
  fig.appendChild(img);
  itemblogimg.appendChild(fig);
  itemblog.appendChild(itemblogimg);
  col.appendChild(itemblog);
  col.appendChild(itemheading);
  col.appendChild(itemtext);
  row = document.getElementById('row' + tipos[tipo] + rows[tipo]);
  row.appendChild(col);
  cols[tipo] += 1;
};

for (var i = 0; i < datos.length; i++) {
  addrow(i);
  for (j in datos[i][tipos[i]]) {
    if (cols[i] >= 3) {
      cols[i] = 0;
      addrow(i);
    }

    addcol(i);
  }

  document.getElementById('car' + i).classList.add('active');

}
