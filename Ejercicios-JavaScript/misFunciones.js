
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
