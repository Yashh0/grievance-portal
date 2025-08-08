import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route for grievance submission
app.post('/api/grievances', async (req, res) => {
    const { title, message, mood } = req.body;

    if (!title || !message) {
        return res.status(400).json({ error: 'Title and message are required' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"Grievance Portal" <${process.env.EMAIL_USER}>`,
            to: process.env.NOTIFY_EMAIL,
            subject: `New Grievance: ${title}`,
            text: `Mood: ${mood}\n\n${message}`
        });

        res.json({ success: true, message: 'Grievance submitted successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ error: 'Failed to send grievance' });
    }
});

app.get('/', (req, res) => {
    res.send('Grievance Portal Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
