import React, { useState } from 'react';
import { MOCK_ASSETS, MOCK_BRANDS, MOCK_AUDIT_LOGS, MockAsset } from '../fixtures/mockData';
import { useI18n } from '../i18n/i18nContext';
import { Badge } from '@affidea/ui';

export const AdminPage: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'approvals' | 'brands' | 'sync' | 'audit'>('approvals');
  const [pendingList, setPendingList] = useState<MockAsset[]>(MOCK_ASSETS.filter(a => a.approval_status === 'pending' || a.filename.includes('Transition')));
  const [rejectingAsset, setRejectingAsset] = useState<MockAsset | null>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);

  const handleApprove = (id: string) => {
    setPendingList(list => list.filter(a => a.id !== id));
    alert('Asset aprobat cu succes și marcat ca vizibil utilizatorilor!');
  };

  const handleRejectConfirm = () => {
    if (!rejectingAsset) return;
    setPendingList(list => list.filter(a => a.id !== rejectingAsset.id));
    setRejectingAsset(null);
    setRejectReason('');
    alert(`Asset respins cu succes. Motiv inregistrat în audit log.`);
  };

  const handleTriggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      alert('Sincronizarea cu Google Drive s-a încheiat cu succes! (0 fișiere noi, 142 verificate).');
    }, 2500);
  };

  return (
    <div className="aff-admin-page">
      <div className="aff-page-header aff-page-header-editorial">
        <div>
          <span className="aff-eyebrow">Governance</span>
          <h1>{t('admin.title')}</h1>
          <p>{t('admin.subtitle')}</p>
        </div>
      </div>

      {/* Admin Sub-navigation Tabs */}
      <div className="aff-admin-tabs">
        <button
          className={`aff-admin-tab ${activeTab === 'approvals' ? 'active' : ''}`}
          onClick={() => setActiveTab('approvals')}
        >
          Inbox Aprobări ({pendingList.length})
        </button>
        <button
          className={`aff-admin-tab ${activeTab === 'brands' ? 'active' : ''}`}
          onClick={() => setActiveTab('brands')}
        >
          Gestionare Branduri ({MOCK_BRANDS.length})
        </button>
        <button
          className={`aff-admin-tab ${activeTab === 'sync' ? 'active' : ''}`}
          onClick={() => setActiveTab('sync')}
        >
          Sincronizare Google Drive
        </button>
        <button
          className={`aff-admin-tab ${activeTab === 'audit' ? 'active' : ''}`}
          onClick={() => setActiveTab('audit')}
        >
          Jurnal Audit
        </button>
      </div>

      {/* Tab Content 1: Approval Inbox */}
      {activeTab === 'approvals' && (
        <div className="aff-admin-content">
          <h3>Asset-uri în Așteptarea Aprobării Admin</h3>
          <p>Orice fișier nou adăugat în Google Drive începe în starea "pending" până la aprobare umană.</p>

          {pendingList.length === 0 ? (
            <div className="aff-empty-state">
              <h3>Toate cererile au fost procesate</h3>
              <p>Nu există fișiere în așteptarea aprobării.</p>
            </div>
          ) : (
            <div className="aff-approval-list">
              {pendingList.map(asset => (
                <div key={asset.id} className="aff-approval-card">
                  <div className="aff-approval-info">
                    <span className="aff-format-tag">{asset.extension.toUpperCase()}</span>
                    <div>
                      <strong>{asset.filename}</strong>
                      <div className="aff-approval-sub">Sursă: {asset.source_path}</div>
                      <div className="aff-approval-sub">Brand detectat: <em>{asset.brand_slug}</em></div>
                    </div>
                  </div>

                  <div className="aff-approval-actions">
                    <button className="aff-btn aff-btn-primary" onClick={() => handleApprove(asset.id)}>
                      Aprobă asset
                    </button>
                    <button className="aff-btn aff-btn-secondary danger" onClick={() => setRejectingAsset(asset)}>
                      Respinge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab Content 2: Brand Activation */}
      {activeTab === 'brands' && (
        <div className="aff-admin-content">
          <h3>Activare și Configurare Branduri</h3>
          <table className="aff-data-table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Arhitectură</th>
                <th>Status Activ</th>
                <th>Suport Mascotă Affi</th>
                <th>Acțiuni Guvernanță</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_BRANDS.map(b => (
                <tr key={b.id}>
                  <td><strong>{b.name_ro}</strong></td>
                  <td>{b.architecture_type}</td>
                  <td>
                    <Badge status={b.is_active ? 'approved' : 'pending'}>
                      {b.is_active ? 'ACTIV' : 'INACTIV'}
                    </Badge>
                  </td>
                  <td>{b.affi_enabled ? 'Activat (Kids)' : 'Dezactivat'}</td>
                  <td>
                    <button className="aff-btn aff-btn-sm" onClick={() => alert(`Modificare stare pentru ${b.name_ro}`)}>
                      {b.is_active ? 'Dezactivează' : 'Activează Brand'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab Content 3: Sync Dashboard */}
      {activeTab === 'sync' && (
        <div className="aff-admin-content">
          <div className="aff-sync-dashboard">
            <div className="aff-panel">
              <h3>Stare Sincronizare Google Drive</h3>
              <p>Crawl-ul recursiv sincronizează automat modificările din dosarul rădăcină confugurat.</p>

              <div className="aff-sync-metrics">
                <div className="aff-sync-metric">
                  <span className="label">Ultimul Job</span>
                  <span className="value green">REUȘIT</span>
                </div>
                <div className="aff-sync-metric">
                  <span className="label">Fișiere Monitorizate</span>
                  <span className="value">142</span>
                </div>
                <div className="aff-sync-metric">
                  <span className="label">Cron Fallback</span>
                  <span className="value">la fiecare 5 min</span>
                </div>
              </div>

              <div className="aff-sync-action-box">
                <button
                  className={`aff-btn aff-btn-primary ${isSyncing ? 'loading' : ''}`}
                  onClick={handleTriggerSync}
                  disabled={isSyncing}
                >
                  {isSyncing ? 'Sincronizare în curs...' : 'Declanșează sincronizare manuală'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 4: Audit Logs */}
      {activeTab === 'audit' && (
        <div className="aff-admin-content">
          <h3>Jurnal Evenimente Audit</h3>
          <table className="aff-data-table">
            <thead>
              <tr>
                <th>Data & Ora</th>
                <th>Actor / Email</th>
                <th>Acțiune Audit</th>
                <th>Tip Țintă</th>
                <th>Nume Obiect</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_AUDIT_LOGS.map(log => (
                <tr key={log.id}>
                  <td><code>{log.created_at}</code></td>
                  <td>{log.actor_email}</td>
                  <td><Badge status="canonical">{log.action}</Badge></td>
                  <td>{log.target_type}</td>
                  <td>{log.target_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Rejection Modal */}
      {rejectingAsset && (
        <div className="aff-modal-backdrop" onClick={() => setRejectingAsset(null)}>
          <div className="aff-modal" onClick={e => e.stopPropagation()}>
            <h3>Respingere Asset: {rejectingAsset.filename}</h3>
            <p>Precizează motivul respingerii pentru înregistrarea în jurnalul de audit.</p>

            <textarea
              className="aff-textarea"
              placeholder="Ex: Rezoluție insuficientă / Fișierul nu respectă ghidul de brand..."
              value={rejectReason}
              onChange={e => setRejectReason(e.target.value)}
            />

            <div className="aff-modal-actions">
              <button className="aff-btn aff-btn-secondary" onClick={() => setRejectingAsset(null)}>
                Anulează
              </button>
              <button className="aff-btn aff-btn-primary danger" onClick={handleRejectConfirm}>
                Confirmă Respingerea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
