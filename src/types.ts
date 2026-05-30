/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Episode {
  id: string;
  title: string;
  episodeNumber: number;
  size: string;
  duration: string;
  resolution: string;
  downloadLink: string;
  image: string;
  fileSizeKB: number;
  dimensionsWidth: number;
  dimensionsHeight: number;
  description: string;
  tags: string[];
}

export type ViewMode = 'list' | 'download';
