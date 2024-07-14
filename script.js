// Agrega un evento clic a cada valor
var valores = document.querySelectorAll('.valor');
valores.forEach(function(valor) {
  valor.addEventListener('click', function() {
    // Muestra la descripción del valor al hacer clic en él
    var descripcion = valor.querySelector('.descripcion').textContent;
    alert(descripcion);
  });
});



function carrito(){
  var form = document.getElementById("form");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click");
  var boton = document.getElementById("boton");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}

function carrito1(){
  var form = document.getElementById("form1");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click1");
  var boton = document.getElementById("boton1");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}

function carrito2(){
  var form = document.getElementById("form2");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click2");
  var boton = document.getElementById("boton2");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}

function carrito3(){
  var form = document.getElementById("form3");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click3");
  var boton = document.getElementById("boton3");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}

function carrito4(){
  var form = document.getElementById("form4");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click4");
  var boton = document.getElementById("boton4");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}

function carrito5(){
  var form = document.getElementById("form5");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click5");
  var boton = document.getElementById("boton5");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}

function carrito6(){
  var form = document.getElementById("form6");
  var inputNuevo = document.createElement("input");
  var click = document.getElementById("click6");
  var boton = document.getElementById("boton6");
  click.value = "_cart";
  inputNuevo.id = "cart";
  inputNuevo.type = "hidden"
  inputNuevo.name = "add";
  inputNuevo.value = "1";
  form.appendChild(inputNuevo);
  boton.removeAttribute("onclick");
  boton.type = "submit";

}




//<input type="hidden" name="add" value="1">