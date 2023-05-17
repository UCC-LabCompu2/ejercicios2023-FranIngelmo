
/**
 * Permite convertir unidades entre metros, pies, pulgadas, yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {
    let met, pul, pie, yar;

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

    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;


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
 * Permite sumar, restar, multiplicar y dividir numeros
 * @method calcularSuma, calcularResta
 */
function calcularSuma(){
    let num1, num2, res;
    if (isNaN(num1||num2)) { /*Falta completar*/
        num1 = "";
        num2 = "";
        alert("El valor ingresado no es correcto, verifique de poner numeros como valores");
    }else{
        num1 = Number(document.getElementById("nums1").value);
        num2 = document.getElementById("nums2").value;
        res= Number(num1)+ Number(num2);
        document.getElementById("totalS").value= res;
    }
}

function calcularResta(){
    let num1, num2, res;

    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementById("nums2").value;
    res= Number(num1)+ Number(num2);
    document.getElementById("totalR").value= res;
}