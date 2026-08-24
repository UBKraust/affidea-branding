import { describe, expect, it } from 'vitest';
import { CLINICILE_APPLICATIONS, CLINICILE_COLOURS, CLINICILE_DONTS, CLINICILE_DOS, CLINICILE_SOURCES, CLINICILE_TOC } from './clinicileAffideaBrandbook';

describe('Clinicile Affidea digital brandbook', () => {
  it('covers the complete landing-page structure', () => {
    expect(CLINICILE_TOC).toHaveLength(10);
    expect(CLINICILE_APPLICATIONS).toHaveLength(6);
  });

  it('uses the canonical clinical palette', () => {
    expect(CLINICILE_COLOURS.map(colour => colour.hex)).toEqual(expect.arrayContaining(['#418FDE', '#04B64F', '#2D69B3', '#98BFE6', '#353A40']));
    expect(CLINICILE_COLOURS[0].name).toBe('Affidea Blue');
  });

  it('documents approved-use and misuse rules', () => {
    expect(CLINICILE_DOS.length).toBeGreaterThanOrEqual(5);
    expect(CLINICILE_DONTS.length).toBeGreaterThanOrEqual(5);
  });

  it('links to the canonical guideline and Clinicile artwork folder', () => {
    expect(CLINICILE_SOURCES.core).toContain('11Ltz9O7HhrlqMw29zdQMojibzylW5TU_');
    expect(CLINICILE_SOURCES.folder).toContain('1eW1pWhc7mX18SiIqL3Xna7wQbHnKW82N');
  });
});
