export const colors = {
  brand: {
    primary: '#418FDE',
    secondary: '#2D69B3',
    accent: '#04B64F',
    dark: '#294074',
    light: '#F1EFED',
  },
  status: {
    approved: '#059669',    // Green
    pending: '#D97706',     // Amber
    rejected: '#DC2626',    // Red
    canonical: '#2563EB',   // Blue
    archived: '#6B7280',    // Gray
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  }
} as const;

export const fonts = {
  sans: '"Harmonia Sans W1G", "Avenir Next", Avenir, "Segoe UI", Arial, sans-serif',
  display: '"Harmonia Sans W1G", "Avenir Next", Avenir, "Segoe UI", Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;
