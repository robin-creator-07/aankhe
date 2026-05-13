/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import { Switchboard } from './components/Switchboard';
import { StorageMode, ModeId } from './lib/schemaTypes';
import { useManualState } from './hooks/useManualState';
import { FormRenderer } from './components/FormRenderer';
import { ArtifactStudio } from './components/ArtifactStudio';
import { AnimatePresence, motion } from 'motion/react';
import { SoftButton } from './components/SoftButton';
import { PROTOCOL_MANIFEST } from './lib/protocolManifest';
import { THEME_ENGINE } from './lib/themeEngine';
import { ManualPreview } from './components/ManualPreview';
import { composeManual } from './lib/manualComposer';
import { PrivacyMeter } from './components/PrivacyMeter';
import { cn } from './lib/utils';
import { ChevronLeft, LayoutDashboard, Sparkles, User, Briefcase, FileText } from 'lucide-react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

function AppContent() {
  const {
    state,
    isInitialized,
    hashError,
    clearHashError,
    setMode,
    updateAnswer,
    updateVisibility,
    setStorageMode,
    resetState,
  } = useManualState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleStart = (mode: ModeId) => {
    setMode(mode);
    navigate(`/manual/${mode}`);
  };

  const handleTrySample = (sample: any) => {
    resetState(sample);
    navigate(`/manual/${sample.mode}`);
  };

  if (!isInitialized) return null;

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-ankahe-accent-soft selection:text-ankahe-text">
      <SiteHeader onStart={handleStart} />
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full">
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-ankahe-bg">
                  {hashError && (
                    <div className="max-w-4xl mx-auto px-6 pt-6">
                      <div className="bg-ankahe-surface-soft border border-ankahe-border text-ankahe-text p-4 rounded-lg flex items-start gap-4 shadow-sm">
                        <div className="flex-1 space-y-1">
                          <h4 className="font-semibold text-ankahe-accent-dark">
                            Link could not be restored
                          </h4>
                          <p className="text-sm">
                            The manual link appears to be corrupted or
                            incomplete. You can start fresh or try another link.
                          </p>
                        </div>
                        <SoftButton
                          size="sm"
                          variant="secondary"
                          onClick={clearHashError}
                          className="bg-ankahe-surface text-ankahe-text border-ankahe-border"
                        >
                          Dismiss
                        </SoftButton>
                      </div>
                    </div>
                  )}
                  <Switchboard
                    storageMode={state.storageMode}
                    onStorageModeChange={setStorageMode}
                    onStart={handleStart}
                    onTrySample={handleTrySample}
                  />
                </div>
              }
            />
            <Route
              path="/manual/:mode"
              element={
                <ManualBuilder
                  state={state}
                  updateAnswer={updateAnswer}
                  updateVisibility={updateVisibility}
                  setStorageMode={setStorageMode}
                  onBack={() => navigate("/")}
                />
              }
            />
          </Routes>
        </div>
      </main>
      <SiteFooter onStart={handleStart} />
    </div>
  );
}

function ManualBuilder({
  state,
  updateAnswer,
  updateVisibility,
  setStorageMode,
  onBack,
}: any) {
  const { mode } = useParams<{ mode: ModeId }>();
  const config = PROTOCOL_MANIFEST[mode || "me"];
  const [view, setView] = useState<"build" | "artifact">("build");
  const composed = useMemo(() => composeManual(state), [state]);

  if (!mode || (mode !== "me" && mode !== "work")) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full font-sans transition-colors duration-700 bg-ankahe-bg text-ankahe-text relative">
      {/* Top Nav */}
      <nav aria-label="Manual builder" className="sticky top-16 z-40 bg-ankahe-bg/80 backdrop-blur-md border-b border-ankahe-border/50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="min-h-11 min-w-11 flex items-center justify-center gap-2 text-ankahe-muted hover:text-ankahe-text transition-colors font-medium text-sm"
            aria-label="Back to Hub"
          >
            <ChevronLeft size={18} />
            <span className="hidden md:inline">Back to Hub</span>
          </button>

          <div className="flex bg-ankahe-border/30 p-1 rounded-sm" aria-label="Manual view selector">
            <button
              onClick={() => setView('build')}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-bold transition-all",
                view === 'build' ? "bg-ankahe-surface text-ankahe-text shadow-sm" : "text-ankahe-muted hover:text-ankahe-text"
              )}
            >
              <FileText size={14} />
              Draft
            </button>
            <button
              onClick={() => setView('artifact')}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-bold transition-all",
                view === 'artifact' ? "bg-ankahe-surface text-ankahe-text shadow-sm" : "text-ankahe-muted hover:text-ankahe-text"
              )}
            >
              <Sparkles size={14} />
              Artifact
            </button>
          </div>

          <div className="hidden md:block">
            <PrivacyMeter state={state} compact />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {view === "build" ? (
            <motion.div
              key="build"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid lg:grid-cols-[1fr_450px] gap-12"
            >
              {/* Form Side */}
              <div className="space-y-12">
                <FormRenderer
                  config={config}
                  state={state}
                  updateAnswer={updateAnswer}
                  updateVisibility={updateVisibility}
                  onFinish={() => setView("artifact")}
                />
              </div>

              {/* Preview Side (Desktop only) */}
              <div className="hidden lg:block space-y-8 sticky top-28">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-ankahe-muted uppercase tracking-widest px-1">
                    Live Manual Preview
                  </h3>
                  <ManualPreview
                    manual={composed}
                    mode={state.mode}
                    className="h-[600px] shadow-sm border-ankahe-border"
                  />
                </div>
                <PrivacyMeter state={state} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="artifact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ArtifactStudio 
                state={state}
                url={window.location.href} 
                storageMode={state.storageMode} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
