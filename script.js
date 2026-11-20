const formulario = document.getElementById("formulario");
const inputCelsius = document.getElementById("celsius");
const salidaF = document.getElementById("fahrenheit");
const salidaK = document.getElementById("kelvin");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    const c = Number(inputCelsius.value);

    const f = c * 9 / 5 + 32;
    const k = c + 273.15;

    salidaF.textContent = f.toFixed(2) + " °F";
    salidaK.textContent = k.toFixed(2) + " K";
});