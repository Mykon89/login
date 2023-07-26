import users from '../models/Usuario.js';

class UserController {
  static listarUsers = async (req, res) => {
    try {
      const usersResultado = await users.find();
      res.status(200).json(usersResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarUserPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const userResultado = await users.findById(id);
      res.status(200).json(userResultado);
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - id do user não localizada.` });
      console.log(err);
    }
  };

  static cadastrarUser = async (req, res) => {
    try {
      let user = new users(req.body);
      await user.save();
      res.status(201).send(user.toJSON());
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} - falha ao cadastrar usuário.` });
    }
  };

  static atualizarUser = async (req, res) => {
    try {
      const { id } = req.params;
      await users.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Usuário atualizado com sucesso.' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static excluirUser = async (req, res) => {
    try {
      const { id } = req.params;
      await users.findByIdAndDelete(id);
      res.status(200).send({ message: 'User excluído com sucesso' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default UserController;
