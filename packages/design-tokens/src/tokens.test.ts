import { describe, it, expect } from 'vitest';
import { colors, fonts } from './tokens.js';

describe('Design Tokens', () => {
  it('exports primary brand color correctly', () => {
    expect(colors.brand.primary).toBe('#418FDE');
    expect(colors.brand.secondary).toBe('#2D69B3');
  });

  it('exports font stacks', () => {
    expect(fonts.sans).toContain('Harmonia Sans W1G');
  });
});
