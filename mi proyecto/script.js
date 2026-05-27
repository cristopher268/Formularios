// 1. Función clásica: Se usa para realizar una validación básica de las horas
function validarHoras(regulares, extras) {
    if (regulares < 0 || extras < 0) {
        return "Error: Las horas trabajadas no pueden ser números negativos.";
    }
    // Una semana tiene 168 horas en total. Es imposible trabajar más que eso.
    if ((regulares + extras) > 168) {
        return "Error: El total de horas excede las horas totales de una semana (168). Revisa los datos.";
    }
    return "valido";
}

// 2. Función de flecha: Se usa para calcular la suma total de horas
const calcularSumaHoras = (regulares, extras) => regulares + extras;

// Capturar el formulario y el contenedor de resultados
const formulario = document.getElementById('formularioHoras');
const divResultado = document.getElementById('resultado');

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(evento) {
    
    // 3. Uso de preventDefault() para evitar que la página se recargue al enviar
    evento.preventDefault();

    // Obtener los dos datos de entrada
    const horasRegularesIngresadas = parseFloat(document.getElementById('horasRegulares').value);
    const horasExtrasIngresadas = parseFloat(document.getElementById('horasExtras').value);

    // 4. Validación básica ejecutando la función clásica
    const estadoValidacion = validarHoras(horasRegularesIngresadas, horasExtrasIngresadas);

    if (estadoValidacion !== "valido") {
        // Mostramos el error usando alert()
        alert(estadoValidacion);
        divResultado.innerHTML = ""; // Limpiamos resultados anteriores si hay error
        return; 
    }

    // Calcular el resultado usando la función de flecha
    const totalHoras = calcularSumaHoras(horasRegularesIngresadas, horasExtrasIngresadas);

    // 5. Resultado mostrado con innerHTML
    divResultado.innerHTML = `
        <p>Horas regulares: <strong>${horasRegularesIngresadas} hrs</strong></p>
        <p>Horas extras: <strong>${horasExtrasIngresadas} hrs</strong></p>
        <hr>
        <p style="color: #007bff; font-size: 1.2em;">Total Trabajado: <br><strong>${totalHoras} hrs</strong></p>
    `;
});