const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta web/static
app.use(express.static(path.join(__dirname, 'web/static')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/templates/index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor SantiagoRP ejecutándose en http://localhost:${port}`);
});