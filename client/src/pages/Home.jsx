import React from 'react';
import api from '../api';
// import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Função para fazer a requisição à API
    const getLivros = async () => {
      try {
        const response = await api.get('/livros'); // Substitua a URL pela rota da sua API
        setLivros(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    getLivros();
  }, []);
  return (
    <div>
      <ul>
        {livros.map(livro => (
          <li key={livro._id}>{livro.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
