const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'web/templates'));

// Servir archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'web/static')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.render('index', {
    static: function(path) {
      return '/static/' + path;
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor SantiagoRP ejecutándose en http://localhost:${port}`);
});