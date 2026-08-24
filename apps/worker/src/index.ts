import { Hono } from 'hono';

export interface Env {
  DB?: D1Database;
  CACHE?: KVNamespace;
  PRIVATE_ASSETS?: R2Bucket;
  APP_ENV?: string;
}

const app = new Hono<{ Bindings: Env }>();

app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    version: '0.1.0',
    environment: c.env.APP_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

export default app;
