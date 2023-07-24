import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.get('/login/:user', (req, res) => {
  let index = buscaLivro(req.params.user);
  res.json(login[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id);
}

export default app;