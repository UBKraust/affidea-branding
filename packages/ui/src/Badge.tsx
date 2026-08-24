import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  status?: 'approved' | 'pending' | 'rejected' | 'canonical' | 'archived' | 'working' | 'archive' | 'source_missing';
}

export const Badge: React.FC<BadgeProps> = ({ children, status = 'approved' }) => {
  return <span className={`aff-badge aff-badge--${status}`}>{children}</span>;
};
