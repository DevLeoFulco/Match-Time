const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
//Preciso pensar na lógica para definir essas rotas de API

app.get('/candidatos', (req, res) => {
    // Buscar todos os candidatos no banco de dados
    const candidatos = [
      { id: 1, nome: 'Leandresson', cpf: '123.456.789-10' },
      { id: 2, nome: 'João',cpf: '456.789.101-20' },
      { id: 3, nome: 'Eduardo', cpf: '789.101.234-30' },
    ];
  
    // Retornar a lista de candidatos
    res.json(candidatos);
  });

  app.post('/candidatos', (req, res) => {
    // Validar as informações do novo candidato com base num requisito único
    const { cpf } = req.body;
  
    if (!cpf) {
      return res.status(400).json({ erro: 'cpf é obrigatório' });
    }
  
    // Salvar o novo candidato no banco de dados
    const novoCandidato = {
      id: 3,
      nome,
      cpf,
      chave,
    };
  
    // Retornar o candidato criado
    res.json(novoCandidato);
  });

app.get("/", (req, res) => {
  res.send("Estou Ativo!");
});

app.listen(3000, () => {
  console.log("Servidor escutando a porta 3000");
});
