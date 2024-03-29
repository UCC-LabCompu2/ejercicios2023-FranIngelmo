
/**
 * Permite convertir unidades entre metros, pies, pulgadas, yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){ //Para poder poner 23,456 lo cabia a 23.456
        valor=valor.replace(",", ".")
    }
    console.log("Semejecuto conversorUnidades") //Para verificar si se pusieron numeros en los segmentos
    if (isNaN(valor)) {
        met= "";
        pul= "";
        pie= "";
        yar= "";
        alert("El valor ingresado no es correcto, verifique de poner numeros como valores");

    } else if (id === "metro") {
        met= valor;
        pul = 39.3701 * valor;
        pie = 3.28084 * valor;
        yar = 1.09361 * valor;
    } else if (id === "pie") {
        met = 0.3048 * valor;
        pul = 12 * valor;
        pie= valor;
        yar = 0.333333 * valor;
    } else if (id === "pulgada") {
        met= 0.0254 * valor;
        pul=valor;
        pie = 0.0833333 * valor;
        yar= 0.0277778 * valor;
    } else if (id === "yarda") {
        met = 0.9144 * valor;
        pul = 36 * valor;
        pie = 3 * valor;
        yar= valor;
    }

    document.lasUnidades.unid_metro.value = Math.round(met*100)/100; //Corta los valores
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2); //Buscando el numero
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;

}

/**
 * Permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */
let convertirGR=(id, valor) =>{
    let gr, rad;
    if (isNaN(valor)) {
        gr = "";
        rad = "";
        alert("El valor ingresado no es correcto, verifique de poner numeros como valores");

    }else if(id==="grados"){
        gr = document.getElementById("grados").value;
        rad = (gr*Math.PI)/180;
    }else if(id==="radianes") {
        rad = document.getElementById("radianes").value;
        gr = (rad * 180) / Math.PI;
    }

    document.getElementById("radianes").value=rad;
    document.getElementById("grados").value=gr;
}

/**
 * Permite esconder el div
 * @method convertirGR
 * @param {string} valor - Valor que va a apretar el usuario
 */
let mostrar_ocultar = (valor) =>{
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display= 'none';
    }
}


/**
 * Permite sumar, restar, multiplicar y dividir numeros. Aparte el verLetra es para controlar todos los valores con una sola funcion
 * @method calcularSuma, calcularResta, calcularMult, calcularDiv
 * @param {string} id - Id del input del formulario
 * @param {number} value - Valor ingresado por el usuario
 */


let verLetra= (id, value)=>{
    let num1, num2;
    if(isNaN(value)) {
        num1 = "";
        num2 = "";
        alert("El valor ingresado no es correcto, verifique de poner numeros como valores");
    }

}

function calcularSuma(){
    let num1, num2, res;

    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementById("nums2").value;
    res= Number(num1)+ Number(num2);
    document.getElementById("totalS").innerHTML= res; //Inner es para cambiar el valor al resultado final, es para el span cuando no se usa el input
}

function calcularResta(){
    let num1, num2, res;

    num1 = Number(document.getElementById("numr1").value);
    num2 = document.getElementById("numr2").value;
    res= Number(num1)- Number(num2);
    document.getElementById("totalR").innerHTML= res;
}

function calcularMult(){
    let num1, num2, res;

    num1 = Number(document.getElementById("numm1").value);
    num2 = document.getElementById("numm2").value;
    res= Number(num1)* Number(num2);
    document.getElementById("totalM").innerHTML= res;
}

function calcularDiv(){
    let num1, num2, res;

    num1 = Number(document.getElementById("numd1").value);
    num2 = document.getElementById("numd2").value;
    res= Number(num1)/ Number(num2);
    document.getElementById("totalD").innerHTML= res;
}


/**
 * Permite generar un url que calcule la distancia y su unidad para despues llamar otra pagina web y mostrar esos resultados
 * @method generarUrl, cargarValores
 */

let generarUrl = () =>{
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    const urlComp = `segundaWeb.html#${dist}#${unid}`; //Para llamar una segundaweb, para "cantener cosas"
    //const urlComp = "segundaWeb.html#"+dist+"#"+unid; //Para llamar una segundaweb de otra forma
    window.open(urlComp, "_self"); //Abrir una segunda pagina web
}

let cargarValores = () =>{
    let urlCompleta = window.location.href; //Copia la url de arriba y la estoy pasando a la variable urlCompleta
    urlCompleta = urlCompleta.split("#"); //Split pasa un string a un array

    const distancia = urlCompleta[1];
    const unidad= urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

/**
 * Permite generar un url que calcule la distancia y su unidad para despues llamar otra pagina web y mostrar esos resultados y guardarlos en una variablee storage
 * @method generarUrl, cargarValores
 */
let guardarDatosLS = () => {
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist); //Para guardar los datos en un localstorage
    localStorage.setItem("unidadLS", unid);
    window.open("web2.html");
}

let tomarDatosLS = () => {
    const cant = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadLS");

    document.getElementById("dist").value= `${cant} ${unid}`;
}

/**
 * Permite dibujar un circulo y un cuadrado en un canvas
 * @method dibujarCirculoCuadrado
 */

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    //Se usa el ancho y altura max para que cuanco uno quiera hacer el canvas mas grande, siempre este centrado
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    ctx.beginPath();
    ctx.fillStyle = "#851414"
    //Arco del circulo: (x, y, radio, anguloinicial, angulofiala)
    ctx.arc(anchoMax/2, alturaMax/2, 100, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    const margen = 8; //Sirve para que el cuadrado se separe del borde del canvas 8px por ejemplo
    ctx.beginPath();
    ctx.fillStyle = "#36b2c2"
    //Cuadrado: (x, y, ancho, largo)
    ctx.fillRect(margen, alturaMax-100-margen, 150, 100); //Se pone alturaMax-100 para que aparezca correctamente el cuadrado dentro del canvas
    ctx.fill();
    ctx.closePath();
}


/**
 * Permite dibujar en un canvas y luego limpiarlo cuand queramos
 * @method limpiarcanvas, dibujar
 */

let limpiarcanvas = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

var bandera;
let dibujar = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX; //Traia las coordenadas del mouse y los guarda
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function () {bandera=false};

    if(bandera) {
        ctx.fillRect(posX - 10, posY - 121, 5, 5);  //Esto es para que se pueda pintar de un tamanio de 5px
        ctx.fill();
    }

}

/**
 * Permite dibujar un canvas cuadriculado marcando el medio del canvas
 * @method dibujarCuadriculado
 */

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso=20; //Movimiento del i=20
    let ejeX=-24;
    let ejeY=-14

    //Lineas verticales
    for(let i=paso; i<anchoMax; i+=paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#333";
        ctx.stroke();

        ctx.font="10pt Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText( ejeX, i, alturaMax/2);
        ctx.closePath();
        ejeX++;
    }

    //Lineas horizontales
    for(let i=paso; i<alturaMax; i+=paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#333";
        ctx.stroke();

        ctx.font="10pt Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText( ejeY, anchoMax/2, i);
        ctx.closePath();
        ejeY++;
        ctx.closePath();
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#720202";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#720202";
    ctx.stroke();
    ctx.closePath();

}

/**
 * Permite dibujar una imagen en un canvas poniendo su posicion en el canvas y si no esta dar error
 * @method dibujarImagen, abrirDialog, cerrarDialog
 */

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width; //Para resetear el canvas
    console.log(posX, posY);
    if(posX<0 || posY<0 || posX>canvas.width || posY>canvas.height){
        abrirDialog();
    }else {

        let img;
        img = new Image();
        img.src = "images/auto.png";


        img.onload = function () {
            ctx.drawImage(img, posX, posY);
        }
    }

}

let abrirDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();

}

let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();

}

/**
 * Permite animar un auto en un canvas
 * @method animarAuto
 */

var x= 0;
var y = 100;
var dx= 2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, y);
    }
    x+=dx;
    if(x>=canvas.width){
        x=0;
        y=y+50;
    }


}

/**
 * Permite animar un auto en un canvas usando un callback
 * @method animarAuto2, animarNuevo
 */

var x2=0;
var dx2=2;
let animarAuto2 = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x2, 100);
        requestAnimationFrame(animarAuto2);
    }

    if(x2>canvas.width){
        x2=0;
    }
    x2+=dx2;
}

let animarNuevo = () => {
    requestAnimationFrame(animarAuto2);
}