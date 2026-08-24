import { describe, it, expect } from 'vitest';
import { HealthCheckResponseSchema, UserRoleSchema } from './schemas.js';

describe('Contracts Schema Validation', () => {
  it('validates health check schema correctly', () => {
    const valid = HealthCheckResponseSchema.parse({
      status: 'ok',
      version: '0.1.0',
      environment: 'test',
      timestamp: new Date().toISOString(),
    });
    expect(valid.status).toBe('ok');
  });

  it('validates user role schema', () => {
    expect(UserRoleSchema.parse('admin')).toBe('admin');
    expect(UserRoleSchema.parse('user')).toBe('user');
    expect(() => UserRoleSchema.parse('superadmin')).toThrow();
  });
});
