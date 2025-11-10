/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import type { ReactElement } from 'react';

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  href: string;
  icon: ReactElement;
  label: string;
  desc: string;
};

export type { MenuItem };
