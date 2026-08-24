import { describe, expect, it } from 'vitest';
import { MOCK_BRANDS } from './mockData';
import { BRAND_DRIVE_FOLDER_BY_SLUG, BRAND_FAMILY_BY_SLUG } from './brandTaxonomy';

describe('brand taxonomy', () => {
  it('classifies every published brand', () => {
    expect(MOCK_BRANDS.filter(brand => !BRAND_FAMILY_BY_SLUG[brand.slug])).toEqual([]);
  });

  it('links every published brand to its canonical Drive folder', () => {
    expect(MOCK_BRANDS.filter(brand => !BRAND_DRIVE_FOLDER_BY_SLUG[brand.slug])).toEqual([]);
  });
});
