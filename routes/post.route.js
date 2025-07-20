import express from 'express';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{ model: User, attributes: ['id', 'name', 'email'] }],
        });
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['id', 'name', 'email'] }],
        });

        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const post = await Post.create({ title, content, userId });
        res.status(201).json(post);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findByPk(req.params.id);

        if (!post) return res.status(404).json({ error: 'Post not found' });

        post.title = title ?? post.title;
        post.content = content ?? post.content;
        await post.save();

        res.json(post);
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);

        if (!post) return res.status(404).json({ error: 'Post not found' });

        await post.destroy();
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
