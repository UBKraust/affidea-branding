import { z } from 'zod';

export const UserRoleSchema = z.enum(['user', 'admin']);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: UserRoleSchema,
  name: z.string().optional(),
  createdAt: z.string(),
});
export type UserProfile = z.infer<typeof UserProfileSchema>;

export const BrandStatusSchema = z.enum(['draft', 'active', 'archived']);
export type BrandStatus = z.infer<typeof BrandStatusSchema>;

export const AssetStatusSchema = z.enum(['pending', 'approved', 'rejected', 'archived', 'source_missing']);
export type AssetStatus = z.infer<typeof AssetStatusSchema>;

export const GuidelineStatusSchema = z.enum(['canonical', 'approved', 'working', 'archive']);
export type GuidelineStatus = z.infer<typeof GuidelineStatusSchema>;

export const SyncJobStatusSchema = z.enum(['queued', 'running', 'partial', 'succeeded', 'failed']);
export type SyncJobStatus = z.infer<typeof SyncJobStatusSchema>;

export const HealthCheckResponseSchema = z.object({
  status: z.literal('ok'),
  version: z.string(),
  environment: z.string(),
  timestamp: z.string(),
});
export type HealthCheckResponse = z.infer<typeof HealthCheckResponseSchema>;
