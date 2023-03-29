// 1 - Importar o express
const express = require('express');
const path = require('path');
const router = requirek('./router');

// 2 - Criar o servidor
const servidor = express();

// Define a pasta public como sendo a pasta arquivos estáticos(dirname=pasta atual)
servidor.use(express.static(path.join(__dirname, 'public')))

// 3 - Definir router a ser utilizado
servidor.use(router);

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);