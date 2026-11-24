const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const turnosRoutes = require('./routes/turnosRoutes');
app.use('/api/turnos', turnosRoutes);

// ESTA ES LA LÍNEA CLAVE PARA LA PÁGINA WEB
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});