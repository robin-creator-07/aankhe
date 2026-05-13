/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useMemo } from "react";
import { ManualState } from "../lib/schemaTypes";
import { PROTOCOL_MANIFEST } from "../lib/protocolManifest";
import { composeManual } from "../lib/manualComposer";
import { generateSharedUrl } from "../lib/stateCompression";
import { toPng } from "html-to-image";
import { SoftButton } from "./SoftButton";
import { ManualPreview } from "./ManualPreview";
import { Download, Printer, Share2, Copy, Check, QrCode, AlertCircle } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

interface ArtifactStudioProps {
  state: ManualState;
  url: string;
  storageMode: string;
}

export function ArtifactStudio({ state, url, storageMode }: ArtifactStudioProps) {
  const artifactRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  
  const [viewMode, setViewMode] = useState<"public" | "private">("public");
  const [excludedSections, setExcludedSections] = useState<string[]>([]);

  const manual = useMemo(() => composeManual(state, { viewMode, excludedSections }), [state, viewMode, excludedSections]);
  const mode = state.mode;
  const config = PROTOCOL_MANIFEST[mode];
  const secureSharedUrl = useMemo(() => {
    return generateSharedUrl(state);
  }, [state]);

  const toggleSection = (sectionId: string) => {
    setExcludedSections(prev => 
      prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
    );
  };

  const exportAsImage = async () => {
    if (!artifactRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(artifactRef.current, {
        cacheBust: true,
        backgroundColor: "#F8F1EA",
        pixelRatio: 2
      });
      const link = document.createElement("a");
      link.download = `ankahe-manual-${mode}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Oops, something went wrong!", err);
    } finally {
      setIsExporting(false);
    }
  };

  const printManual = () => {
    window.print();
  };

  const copyLink = () => {
    navigator.clipboard.writeText(secureSharedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 pb-24">
      <div aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
        {isExporting ? "Exporting image..." : ""}
      </div>
      <header className="space-y-4 text-center md:text-left">
        <h2 className="text-4xl font-display font-medium text-ankahe-text">Artifact Studio</h2>
        <p className="text-ankahe-muted">Transform your manual into a shareable asset.</p>
      </header>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
        {/* Preview Container */}
        <div className="space-y-8">
          <div className="bg-ankahe-surface p-4 md:p-12 rounded-sm border border-ankahe-border overflow-hidden">
            <div ref={artifactRef} className="bg-ankahe-bg shadow-lg rounded-sm overflow-hidden w-full max-w-2xl mx-auto origin-top">
              <ManualPreview manual={manual} mode={mode} className="border-none shadow-none max-h-none" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <SoftButton onClick={exportAsImage} disabled={isExporting} className="gap-2 bg-ankahe-accent text-white border-none py-3">
              <Download size={18} />
              {isExporting ? "Exporting..." : "Save Image"}
            </SoftButton>
            <SoftButton variant="secondary" onClick={printManual} className="gap-2 bg-ankahe-surface text-ankahe-text py-3">
              <Printer size={18} />
              Print / PDF
            </SoftButton>
          </div>
        </div>

        {/* Sharing Side */}
        <div className="space-y-8 sticky top-8">
          <div className="bg-ankahe-surface p-8 space-y-8 rounded-sm border border-ankahe-border shadow-sm">
            <div>
              <h3 className="font-medium font-display text-ankahe-text mb-4">Export Settings</h3>
              <div className="flex bg-ankahe-surface-soft p-1 rounded-sm w-fit border border-ankahe-border">
                <button
                  onClick={() => setViewMode("public")}
                  className={cn("px-4 py-1.5 rounded-sm text-sm font-medium transition-all", viewMode === "public" ? "bg-ankahe-surface text-ankahe-text shadow-sm" : "text-ankahe-muted hover:text-ankahe-text")}
                >
                  Share Version
                </button>
                <button
                  onClick={() => setViewMode("private")}
                  className={cn("px-4 py-1.5 rounded-sm text-sm font-medium transition-all", viewMode === "private" ? "bg-ankahe-surface text-ankahe-text shadow-sm" : "text-ankahe-muted hover:text-ankahe-text")}
                >
                  Private Version
                </button>
              </div>
              <p className="text-xs text-ankahe-muted mt-3 leading-relaxed">
                {viewMode === "public" 
                  ? "Currently previewing what others will see. Private fields are hidden." 
                  : "Currently previewing everything, including private fields for your own viewing."}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium font-display text-ankahe-text">Include Sections</h4>
              <div className="flex flex-wrap gap-2">
                {config.sections.map(sec => {
                  const isExcluded = excludedSections.includes(sec.id);
                  return (
                    <button
                      key={sec.id}
                      onClick={() => toggleSection(sec.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-sm text-xs font-medium border transition-colors",
                        isExcluded 
                          ? "bg-ankahe-surface-soft border-ankahe-border text-ankahe-muted" 
                          : "bg-ankahe-accent/10 border-ankahe-accent text-ankahe-accent-dark"
                      )}
                    >
                      {sec.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-ankahe-surface p-8 space-y-8 rounded-sm border border-ankahe-border shadow-sm">
            <h3 className="font-medium font-display text-ankahe-text flex items-center gap-2">
              <Share2 size={18} className="text-ankahe-accent" />
              Share Link
            </h3>

            {storageMode === "url" ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2 p-2 bg-ankahe-bg rounded-sm border border-ankahe-border">
                  <div className="flex-1 truncate text-xs text-ankahe-muted font-mono pl-2">
                    {secureSharedUrl}
                  </div>
                  <button 
                    onClick={copyLink}
                    className="p-2 bg-ankahe-surface rounded-sm shadow-sm hover:bg-ankahe-surface-soft transition-colors text-ankahe-text"
                  >
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </button>
                </div>

                {secureSharedUrl.length > 2000 && (
                  <div className="p-3 bg-amber-50 rounded-sm border border-amber-100 flex gap-3 text-xs text-amber-800 leading-relaxed">
                    <AlertCircle size={16} className="shrink-0 text-amber-500" />
                    <p>
                      This URL is very long. Some older apps or browsers might struggle to open it. Saving it as an image or PDF is recommended.
                    </p>
                  </div>
                )}

                <div className="pt-4 space-y-4">
                  <SoftButton 
                    variant="secondary" 
                    className="w-full gap-2 bg-ankahe-surface-soft text-ankahe-text border-ankahe-border"
                    onClick={() => setShowQR(!showQR)}
                  >
                    <QrCode size={18} />
                    {showQR ? "Hide QR Code" : "Show QR Code"}
                  </SoftButton>

                  {showQR && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white p-6 rounded-sm border border-ankahe-border flex flex-col items-center gap-4 shadow-sm"
                    >
                      <QRCodeSVG value={secureSharedUrl} size={200} level="M" />
                      <p className="text-xs text-ankahe-muted font-medium text-center">
                        Scan to open this manual on another device.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 bg-ankahe-bg rounded-sm border border-ankahe-border space-y-4 text-center">
                <p className="text-sm text-ankahe-text leading-relaxed">
                  You are in <strong>Memory Only</strong> mode. Your link does not contain your answers.
                </p>
                <p className="text-xs text-ankahe-muted">
                  Switch to <strong>Save in Link</strong> to generate a shareable QR or URL.
                </p>
              </div>
            )}
          </div>

          <div className="bg-ankahe-surface p-8 space-y-4 rounded-sm border border-ankahe-border shadow-sm">
            <h3 className="font-medium font-display text-ankahe-text">Visibility Note</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-ankahe-muted">Shared Entries</span>
                <span className="text-ankahe-text">{manual.shareableCount}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-ankahe-muted">Private Only</span>
                <span className="text-ankahe-accent-dark">{manual.privateCount}</span>
              </div>
            </div>
            <p className="text-xs text-ankahe-muted leading-relaxed pt-2">
              Private entries appear in your live preview but are excluded from exports and shared links unless explicitly trusted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
