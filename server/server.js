import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();
const PORT = 5000;

// using node v14.16, body-parser is deprecated
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// whitelisting to aviod CORS domaining blocking
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
)

// ('default path', callback)
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Server')
});

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
