import { describe, it, expect } from 'vitest';
import app from './index.js';

describe('Worker API Health Endpoint', () => {
  it('returns status ok on /api/health', async () => {
    const res = await app.request('/api/health', {}, { APP_ENV: 'test' });
    expect(res.status).toBe(200);

    const body = await res.json() as { status: string; environment: string };
    expect(body.status).toBe('ok');
    expect(body.environment).toBe('test');
  });
});
