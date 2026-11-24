// ==========================================
// ¡ATENCIÓN! REGLA DE NEGOCIO (Parámetro N)
// Cambia este número por el que te toque según la lista oficial.
// Ejemplo: N = 10 (Recargo del 20%)
// ==========================================
const N = 10; 
const porcentajeRecargo = (N * 2) / 100; 

// Almacenamiento en memoria
let turnos = [];
let idContador = 1;

const obtenerTodos = () => {
    return turnos;
};

const obtenerPorId = (id) => {
    return turnos.find(t => t.id === id);
};

const crearTurno = (datos) => {
    let totalPagar = datos.precioBase;

    // Regla de negocio: Si es prioritario, se aplica el recargo
    if (datos.prioritario === true) {
        totalPagar = datos.precioBase + (datos.precioBase * porcentajeRecargo);
    }

    const nuevoTurno = {
        id: idContador++,
        nombreCliente: datos.nombreCliente,
        tipoEquipo: datos.tipoEquipo,
        fallaReportada: datos.fallaReportada,
        precioBase: datos.precioBase,
        prioritario: datos.prioritario,
        totalPagar: totalPagar
    };

    turnos.push(nuevoTurno);
    return nuevoTurno;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearTurno
};