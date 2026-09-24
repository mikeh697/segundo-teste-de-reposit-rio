const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/dados', (req, res) => {
  res.json({ mensagem: "Conexão entre React e Node.js estabelecida!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

document.writeln("fazendo aqui o primeiro teste de digitação para ver se essa porra realmente vai funcionar!");