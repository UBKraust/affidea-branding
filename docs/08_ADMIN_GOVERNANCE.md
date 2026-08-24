# 08. Administration and brand governance

## 1. Ownership

Affidea and OUTOFSPACE share Admin capability. Technical access does not decide brand authority; approvals are attributed to a named verified email and recorded in the audit log.

## 2. Authority precedence

1. Affidea Brand Guidelines v1.6 (2026), canonical.
2. Canonical 2026 sub-brand rules.
3. Approved brand-specific guideline as an explicit exception.
4. Approved local operating guide.
5. Working documents.
6. Archive/historical documents.

If a lower level conflicts with a higher level, the portal shows the higher-level value and records the lower value as a warning until an admin creates an approved exception.

## 3. Approval rules

- New Drive file: `pending`.
- Existing approved Drive file updated: remains `approved` automatically.
- Existing approved file moved to a different detected brand: remains approved but `needs_review = true`.
- Rejected file updated: remains rejected unless an admin reopens it.
- Deleted/unreachable file: `source_missing`, immediately removed from User results.
- Activating a brand requires a canonical logo or documented exception.

## 4. Brand activation checklist

- Confirm official display name and slug.
- Confirm architecture type and category.
- Add RO and EN description.
- Select canonical blue/full-colour logo.
- Select white/dark-background variant when available.
- Select canonical guideline/brand book.
- Confirm primary/support colours.
- Confirm typography and font-file availability/licensing.
- Select downloadable variants and ZIP manifest.
- Resolve critical source conflicts.
- Confirm related brands/lockups.
- Confirm whether Affi applies.
- Mark active.

## 5. Canonical asset selection

Canonical means recommended default, not the only downloadable file. There may be one canonical asset per brand/category/variant context. Updating the source revision preserves canonical selection by Drive ID.

## 6. Exceptions

An exception record includes:

- brand;
- affected rule/token;
- canonical value;
- approved exception value;
- justification;
- approver;
- effective and optional expiry date;
- source document.

Example: Affidea Kids blue differs from parent Affidea Blue. Until explicitly approved as an exception, the portal global UI and authoritative rule use `#418FDE`.

## 7. Content governance

- Do not expose archive/history to Users unless specifically approved.
- Do not show raw working/export folders as curated assets.
- Do not treat filename `final` as approval.
- Do not infer active status from Drive presence.
- Do not auto-translate proper names, filenames, legal entities or addresses.
- Never overwrite or reorganize Drive from this portal in v1.

## 8. Audit event minimums

Record login first-seen/last-seen summaries, downloads, approvals, rejection, brand activation/archive, canonical selections, exception changes, role changes, manual sync, settings changes, ZIP generation and source-missing transitions.

Before/after snapshots must omit tokens and large/personal row payloads. For centre changes, record row ID and changed field names, not full phone/address payloads.

## 9. Initial curation requirement

The Drive inventory contains candidate folders, not an authoritative list of active brands. At first deployment, an admin must review `brand-registry.seed.json`. Ordinary users see no unapproved candidate merely because it exists in Drive.

