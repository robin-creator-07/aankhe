/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { cn } from "../lib/utils";

export function SkeletonShimmer({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse bg-ankahe-border rounded-md", className)} />
  );
}

export function ManualSkeleton() {
  return (
    <div className="space-y-8 p-8">
      <SkeletonShimmer className="h-10 w-3/4" />
      <SkeletonShimmer className="h-4 w-1/2" />
      <div className="space-y-4 pt-12">
        <SkeletonShimmer className="h-32 w-full" />
        <SkeletonShimmer className="h-32 w-full" />
        <SkeletonShimmer className="h-32 w-full" />
      </div>
    </div>
  );
}
