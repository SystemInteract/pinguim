export interface Option {
  text: string;
  haveSubOption: boolean;
  path?: string;
  SubOptions?: SubOptions[];
}

export interface SubOptions {
  text: string;
  path: string;
}
