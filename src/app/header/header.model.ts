export interface MenuOption {
  id?: number;
  name: string;
  haveSubMenu: boolean;
  path?: string;
  subOpt?: MenuSubOptions[];
}

export interface MenuSubOptions {
  id?: number;
  name: string;
  path: string;
}
