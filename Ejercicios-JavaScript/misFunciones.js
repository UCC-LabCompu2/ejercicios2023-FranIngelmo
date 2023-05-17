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

    } else if (id == "metro") {
        met= valor;
        pul = 39.3701 * valor;
        pie = 3.28084 * valor;
        yar = 1.09361 * valor;
    } else if (id == "pie") {
        met = 0.3048 * valor;
        pul = 12 * valor;
        pie= valor;
        yar = 0.333333 * valor;
    } else if (id == "pulgada") {
        met= 0.0254 * valor;
        pul=valor;
        pie = 0.0833333 * valor;
        yar= 0.0277778 * valor;
    } else if (id == "yarda") {
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
 */
function convertirGR(id){
    if(id=="grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    }else if(id=="radianes") {
        let rad = document.getElementById("radianes").value;
        document.getElementById("grados").value = (rad * 180) / Math.PI;
    }
}

function mostrar_ocultar(valorMo){
    if(valorMo=="val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if(valorMo=="val_ocultar"){
        document.getElementById("divMo").style.display= 'none';
    }
}
