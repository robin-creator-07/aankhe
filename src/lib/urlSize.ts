/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type URLSizeCategory = "safe" | "long" | "excessive";

export function getURLSizeCategory(length: number): URLSizeCategory {
  if (length < 1800) return "safe";
  if (length < 3500) return "long";
  return "excessive";
}

export function getCurrentURLSize(): { length: number; category: URLSizeCategory } {
  const length = window.location.href.length;
  return {
    length,
    category: getURLSizeCategory(length)
  };
}
