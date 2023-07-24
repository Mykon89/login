import livros from '../models/Livro.js';

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find();
      res.status(200).json(livrosResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

export default LivroController;
