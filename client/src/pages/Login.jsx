import React, { useState } from 'react';
import api from '../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { username, password });
      console.log(response.data); // Aqui você pode tratar a resposta da API conforme necessário
      window.location.href = '/home';
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
