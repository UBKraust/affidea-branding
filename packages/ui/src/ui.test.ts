import { describe, it, expect } from 'vitest';
import { Button, Badge } from './index.js';

describe('UI Package Exports', () => {
  it('exports Button and Badge components', () => {
    expect(Button).toBeDefined();
    expect(Badge).toBeDefined();
  });
});
