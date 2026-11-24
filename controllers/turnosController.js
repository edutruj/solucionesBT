const turnosService = require('../services/turnosService');

const obtenerTurnos = (req, res) => {
    const turnos = turnosService.obtenerTodos();
    // Retorna la lista completa con código 200 OK
    res.status(200).json(turnos);
};

const obtenerTurnoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const turno = turnosService.obtenerPorId(id);

    if (!turno) {
        // Código 404 Not Found
        return res.status(404).json({ error: "Turno no encontrado. Verifique el ID." });
    }
    // Código 200 OK
    res.status(200).json(turno);
};

const crearTurno = (req, res) => {
    const { nombreCliente, tipoEquipo, fallaReportada, precioBase, prioritario } = req.body;

    // Validaciones de campos obligatorios (Código 400 Bad Request)
    if (!nombreCliente || !tipoEquipo || !fallaReportada || precioBase === undefined) {
        return res.status(400).json({ error: "Faltan campos obligatorios (nombreCliente, tipoEquipo, fallaReportada, precioBase)." });
    }

    // Validación numérica (Código 400 Bad Request)
    if (typeof precioBase !== 'number' || precioBase <= 0) {
        return res.status(400).json({ error: "El precioBase debe ser un número mayor a cero." });
    }

    // Llamado al servicio
    const nuevoTurno = turnosService.crearTurno({
        nombreCliente,
        tipoEquipo,
        fallaReportada,
        precioBase,
        prioritario: prioritario === true
    });

    // Código 201 Created
    res.status(201).json(nuevoTurno);
};

module.exports = {
    obtenerTurnos,
    obtenerTurnoPorId,
    crearTurno
};