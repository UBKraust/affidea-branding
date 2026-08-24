PRAGMA foreign_keys = ON;

CREATE TABLE app_users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  access_user_uuid TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin')),
  locale TEXT NOT NULL DEFAULT 'ro' CHECK (locale IN ('ro','en')),
  first_seen_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE brands (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_ro TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_ro TEXT,
  description_en TEXT,
  architecture_type TEXT CHECK (architecture_type IN ('parent','clinical','specialised','acquisition_transitional','partnership','associated')),
  category TEXT,
  lifecycle_status TEXT NOT NULL DEFAULT 'draft' CHECK (lifecycle_status IN ('draft','active','archived')),
  is_active INTEGER NOT NULL DEFAULT 0 CHECK (is_active IN (0,1)),
  affi_enabled INTEGER NOT NULL DEFAULT 0 CHECK (affi_enabled IN (0,1)),
  canonical_logo_asset_id TEXT,
  canonical_guideline_id TEXT,
  drive_folder_id TEXT UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (canonical_logo_asset_id) REFERENCES assets(id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (canonical_guideline_id) REFERENCES guidelines(id) DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE assets (
  id TEXT PRIMARY KEY,
  drive_file_id TEXT NOT NULL UNIQUE,
  drive_id TEXT,
  brand_id TEXT,
  parent_drive_folder_id TEXT,
  source_path TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  extension TEXT,
  category TEXT NOT NULL DEFAULT 'other',
  variant TEXT,
  byte_size INTEGER,
  width INTEGER,
  height INTEGER,
  checksum TEXT,
  drive_revision TEXT,
  drive_created_at TEXT,
  drive_modified_at TEXT,
  can_download INTEGER NOT NULL DEFAULT 1 CHECK (can_download IN (0,1)),
  approval_status TEXT NOT NULL DEFAULT 'pending' CHECK (approval_status IN ('pending','approved','rejected','archived','source_missing')),
  is_canonical INTEGER NOT NULL DEFAULT 0 CHECK (is_canonical IN (0,1)),
  include_in_pack INTEGER NOT NULL DEFAULT 0 CHECK (include_in_pack IN (0,1)),
  needs_review INTEGER NOT NULL DEFAULT 0 CHECK (needs_review IN (0,1)),
  preview_status TEXT NOT NULL DEFAULT 'pending' CHECK (preview_status IN ('pending','ready','unsupported','failed','stale')),
  preview_r2_key TEXT,
  rejection_reason TEXT,
  approved_by_user_id TEXT,
  approved_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL,
  FOREIGN KEY (approved_by_user_id) REFERENCES app_users(id) ON DELETE SET NULL
);

CREATE TABLE guidelines (
  id TEXT PRIMARY KEY,
  asset_id TEXT NOT NULL UNIQUE,
  brand_id TEXT,
  authority_status TEXT NOT NULL CHECK (authority_status IN ('canonical','approved','working','archive')),
  version_label TEXT,
  title_ro TEXT,
  title_en TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL
);

CREATE TABLE brand_exceptions (
  id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL,
  rule_key TEXT NOT NULL,
  canonical_value TEXT,
  exception_value TEXT NOT NULL,
  justification TEXT NOT NULL,
  source_asset_id TEXT,
  approved_by_user_id TEXT NOT NULL,
  effective_at TEXT NOT NULL,
  expires_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE,
  FOREIGN KEY (source_asset_id) REFERENCES assets(id) ON DELETE SET NULL,
  FOREIGN KEY (approved_by_user_id) REFERENCES app_users(id)
);

CREATE TABLE asset_tags (
  asset_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  PRIMARY KEY (asset_id, tag),
  FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

CREATE TABLE data_centres (
  id TEXT PRIMARY KEY,
  source_asset_id TEXT NOT NULL,
  source_sheet TEXT,
  source_row INTEGER,
  centre_number TEXT,
  centre_name TEXT NOT NULL,
  region TEXT,
  city TEXT,
  county TEXT,
  address TEXT,
  contact_person TEXT,
  phone TEXT,
  legal_entity TEXT,
  extra_json TEXT NOT NULL DEFAULT '{}',
  search_text TEXT,
  source_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (source_asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

CREATE TABLE sync_jobs (
  id TEXT PRIMARY KEY,
  trigger_type TEXT NOT NULL CHECK (trigger_type IN ('initial','webhook','cron','manual','watch_renewal')),
  status TEXT NOT NULL CHECK (status IN ('queued','running','partial','succeeded','failed')),
  start_cursor TEXT,
  end_cursor TEXT,
  scanned_count INTEGER NOT NULL DEFAULT 0,
  created_count INTEGER NOT NULL DEFAULT 0,
  updated_count INTEGER NOT NULL DEFAULT 0,
  missing_count INTEGER NOT NULL DEFAULT 0,
  error_count INTEGER NOT NULL DEFAULT 0,
  error_summary TEXT,
  started_at TEXT,
  completed_at TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE drive_channels (
  id TEXT PRIMARY KEY,
  channel_id TEXT NOT NULL UNIQUE,
  resource_id TEXT,
  token_hash TEXT NOT NULL,
  expiration_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active','renewing','expired','stopped','failed')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE zip_packs (
  id TEXT PRIMARY KEY,
  brand_id TEXT NOT NULL,
  manifest_hash TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('queued','building','ready','failed','stale')),
  r2_key TEXT,
  byte_size INTEGER,
  file_count INTEGER NOT NULL DEFAULT 0,
  error_summary TEXT,
  built_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE (brand_id, manifest_hash),
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
);

CREATE TABLE audit_events (
  id TEXT PRIMARY KEY,
  actor_user_id TEXT,
  actor_email TEXT,
  actor_type TEXT NOT NULL CHECK (actor_type IN ('user','system','service')),
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  reason TEXT,
  before_json TEXT,
  after_json TEXT,
  correlation_id TEXT,
  ip_hash TEXT,
  country_code TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (actor_user_id) REFERENCES app_users(id) ON DELETE SET NULL
);

CREATE TABLE app_settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_by_user_id TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (updated_by_user_id) REFERENCES app_users(id) ON DELETE SET NULL
);

CREATE INDEX idx_assets_brand_status ON assets(brand_id, approval_status);
CREATE INDEX idx_assets_category_format ON assets(category, extension);
CREATE INDEX idx_assets_modified ON assets(drive_modified_at DESC);
CREATE INDEX idx_assets_path ON assets(source_path);
CREATE INDEX idx_brands_active ON brands(is_active, lifecycle_status);
CREATE INDEX idx_centres_name ON data_centres(centre_name);
CREATE INDEX idx_centres_region ON data_centres(region, city);
CREATE INDEX idx_centres_legal_entity ON data_centres(legal_entity);
CREATE INDEX idx_sync_jobs_created ON sync_jobs(created_at DESC);
CREATE INDEX idx_audit_created ON audit_events(created_at DESC);
CREATE INDEX idx_audit_target ON audit_events(target_type, target_id, created_at DESC);

