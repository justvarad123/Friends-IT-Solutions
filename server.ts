import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API health endpoint for Render health checks and uptime monitoring
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'Friends IT Solutions Platform',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
});

// Production static assets from Vite build
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Single Page Application (SPA) fallback to index.html for all frontend routes
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Friends IT Solutions] Production server running on port ${PORT}`);
});
