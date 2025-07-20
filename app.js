import express from 'express';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
