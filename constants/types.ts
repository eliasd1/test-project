export interface DataResponse {
  data: {
    number_of_modems: number;
    number_of_sims: number;
    analytics: Analytics[];
  };
}
export interface Analytics {
  server: string;
  rows_count: string;
  ram_usage: string[];
  cpu_usage: string[];
  time_entries: Date[];
  modem_details: ModemDetail[];
  sims_details: SimsDetail[];
}

export interface ModemDetail {
  on_prem_id: string;
  server_id: string;
  time_entries: Date[];
  packets_sent: string[];
  download_data_usage_bytes: string[];
}

export interface SimsDetail {
  on_prem_id: string;
  server_id: string;
  time_entries: Date[];
  messages_sent: string[];
}

export interface MultiAxisLineDataSet {
  label: string;
  data: string[];
  yAxisID: string;
  fill?: boolean;
  borderColor: string;
  tension?: number;
}
