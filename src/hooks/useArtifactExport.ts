/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { toPng } from "html-to-image";

export function useArtifactExport(artifactRef: React.RefObject<HTMLElement | null>, mode: string, secureSharedUrl: string) {
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(secureSharedUrl);
      setCopyError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  };

  return {
    isExporting,
    copied,
    copyError,
    exportAsImage,
    printManual,
    copyLink
  };
}
