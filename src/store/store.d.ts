
export type TypeGarbage = 'plastic' | 'paper' | 'glass' | 'metal' | 'mixed'
export type TypeBinStatus = 'disabled' | 'enabled'

export interface StateRoot {
  drawerState: boolean;
  activeBinId: string;
  binStatusValues: TypeBinStatus[];
  binTypeValues: TypeGarbage[];
}

export interface BinDetail {
  binId?: string;
  status?: TypeBinStatus;
  connectionString?: string;
  lon: number;
  lat: number;
  type: TypeGarbage;
  district?: string[];
}

export interface GenericOptionItem {
  label: string;
  value: any;
}
