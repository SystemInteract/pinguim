export interface Option {
  text: string;
  haveSubOption: boolean;
  path?: string;
  SubOption?: SubOption[];
}

interface SubOption {
  text: string;
  path: string;
}
