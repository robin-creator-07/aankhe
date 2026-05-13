/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import { ManualState, ModeId, StorageMode, Visibility } from "../lib/schemaTypes";
import { readStateFromHash, writeStateToHash, clearStateFromHash } from "../lib/stateCompression";

const DEFAULT_STATE: ManualState = {
  mode: "me",
  answers: {},
  visibilityByQuestion: {},
  storageMode: "memory",
  updatedAt: new Date().toISOString()
};

export function useManualState() {
  const [state, setState] = useState<ManualState>(DEFAULT_STATE);
  const [isInitialized, setIsInitialized] = useState(false);
  const [hashError, setHashError] = useState(false);

  // Initialize from hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#s=")) {
      const saved = readStateFromHash();
      if (saved) {
        setState(saved);
      } else {
        setHashError(true);
      }
    }
    setIsInitialized(true);
  }, []);

  // Sync with hash if storage mode is URL
  useEffect(() => {
    if (!isInitialized) return;

    if (state.storageMode === "url") {
      writeStateToHash(state);
    } else {
      clearStateFromHash();
    }
  }, [state, isInitialized]);

  const setMode = useCallback((mode: ModeId) => {
    setState(prev => ({
      ...prev,
      mode,
      answers: {}, // Clear answers when switching major modes
      visibilityByQuestion: {},
      updatedAt: new Date().toISOString()
    }));
  }, []);

  const updateAnswer = useCallback((questionId: string, value: string | string[] | number) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
      updatedAt: new Date().toISOString()
    }));
  }, []);

  const updateVisibility = useCallback((questionId: string, visibility: Visibility) => {
    setState(prev => ({
      ...prev,
      visibilityByQuestion: { ...prev.visibilityByQuestion, [questionId]: visibility },
      updatedAt: new Date().toISOString()
    }));
  }, []);

  const setStorageMode = useCallback((storageMode: StorageMode) => {
    setState(prev => ({ ...prev, storageMode }));
  }, []);

  const resetState = useCallback((newState?: ManualState) => {
    setState(newState || DEFAULT_STATE);
  }, []);

  const clearHashError = useCallback(() => {
    setHashError(false);
    clearStateFromHash();
  }, []);

  return {
    state,
    isInitialized,
    hashError,
    clearHashError,
    setMode,
    updateAnswer,
    updateVisibility,
    setStorageMode,
    resetState
  };
}
