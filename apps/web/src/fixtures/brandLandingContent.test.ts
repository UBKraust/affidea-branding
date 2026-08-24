import { describe, expect, it } from 'vitest';
import { MOCK_BRANDS } from './mockData';
import { getBrandLandingContent } from './brandLandingContent';
import { getBrandbooks } from './brandResources';

describe('brand landing page content', () => {
  it('builds a complete landing page for every published brand', () => {
    for (const brand of MOCK_BRANDS) {
      const content = getBrandLandingContent(brand);

      expect(content.headline, brand.slug).toBeTruthy();
      expect(content.sourceLabel, brand.slug).toBeTruthy();
      expect(content.principles, brand.slug).toHaveLength(5);
      expect(content.voice, brand.slug).toHaveLength(4);
      expect(content.applications, brand.slug).toHaveLength(3);
      expect(content.dos.length, brand.slug).toBeGreaterThanOrEqual(4);
      expect(content.donts.length, brand.slug).toBeGreaterThanOrEqual(4);
    }
  });

  it('links every page to at least one canonical guideline', () => {
    for (const brand of MOCK_BRANDS) {
      expect(getBrandbooks(brand.slug).length, brand.slug).toBeGreaterThan(0);
    }
  });

  it('keeps brands without dedicated manuals explicitly inherited', () => {
    const clinics = MOCK_BRANDS.find(brand => brand.slug === 'clinicile-affidea');
    const kids = MOCK_BRANDS.find(brand => brand.slug === 'affidea-kids');

    expect(clinics && getBrandLandingContent(clinics).sourceMode).toBe('inherited');
    expect(kids && getBrandLandingContent(kids).sourceMode).toBe('dedicated');
  });
});
