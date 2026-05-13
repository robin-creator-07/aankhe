/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ManualState } from "./schemaTypes";

export const SAMPLE_PERSONAL_STATE: ManualState = {
  mode: "me",
  storageMode: "memory",
  updatedAt: new Date().toISOString(),
  answers: {
    "M_01": "Alex",
    "M_03": "If I seem quiet, it may not mean what people assume. I'm usually just processing.",
    "M_07": "I need time alone first",
    "M_10": ["Space", "Quiet company"],
    "M_16": "When I wear headphones, please send a message instead of tapping my shoulder.",
    "M_20": "Acknowledging the tension and sharing a small bit of vulnerability."
  },
  visibilityByQuestion: {
    "M_01": "share",
    "M_03": "share",
    "M_07": "share",
    "M_10": "share",
    "M_16": "share",
    "M_20": "private"
  }
};

export const SAMPLE_WORK_STATE: ManualState = {
  mode: "work",
  storageMode: "memory",
  updatedAt: new Date().toISOString(),
  answers: {
    "W_01": ["Morning", "Long quiet blocks"],
    "W_08": "Slack/Chat",
    "W_09": "I need context on the problem before I can suggest a solution.",
    "W_04": "Unexpected rapid-fire messages when I am head-down.",
    "W_16": "Written",
    "W_13": "Team input"
  },
  visibilityByQuestion: {
    "W_01": "share",
    "W_08": "share",
    "W_09": "share",
    "W_04": "share",
    "W_16": "share",
    "W_13": "share"
  }
};
