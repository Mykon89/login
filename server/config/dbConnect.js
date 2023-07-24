import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://helvis89:123@cluster0.wgbk6co.mongodb.net/alura-node?'
);

let db = mongoose.connection;

export default db;
