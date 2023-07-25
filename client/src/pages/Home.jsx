import React from 'react';
import api from '../api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Faz a chamada à API quando o componente é montado
    api
      .get('/livros')
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {livros.map(livro => (
          <li key={livro.id}>{livro.titulo}</li>
        ))}
      </ul>
      <h1>oi</h1>
    </div>
  );
};

export default Home;
