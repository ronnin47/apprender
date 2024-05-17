import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath para convertir __filename a ruta de archivo
import { dirname, join } from 'path'; // Importa dirname y join para trabajar con rutas de archivos

// Obtiene la ruta del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors()); // Permitir CORS para todas las rutas

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(join(__dirname, 'dist')));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Cambia esto según sea necesario
  },
});

io.on('connection', (socket) => {
  console.log('un usuario se conecto');

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('un usuario se desconecto');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server levantado en el puerto http://localhost:${PORT}`);
});

// Ruta para manejar todas las solicitudes y devolver el archivo HTML principal

app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});