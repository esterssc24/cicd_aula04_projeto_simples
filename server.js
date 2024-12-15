const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ACABAAAAAAAAAA LOGO PELO AMOR DE DEUS ! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});