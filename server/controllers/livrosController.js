import livros from '../models/Livro.js';

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find().populate('autor').exec();
      res.status(200).json(livrosResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarLivroPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const livroResultado = await livros
        .findById(id)
        .populate('autor', 'nome')
        .exec();
      res.status(200).json(livroResultado);
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - id do livro não localizada.` });
      console.log(err);
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} - falha ao cadastrar livro.` });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const { id } = req.params;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Livro atualizado com sucesso.' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static excluirLivro = async (req, res) => {
    try {
      const { id } = req.params;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: 'Livro excluído com sucesso' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const editoraResultado = await livros.find({ editora: editora }, {});
      res.status(200).json(editoraResultado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default LivroController;
