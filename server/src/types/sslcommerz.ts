export interface SSLCommerzInitRequest {
  total_amount: number;
  currency: string;
  tran_id: string;
  success_url: string;
  fail_url: string;
  cancel_url: string;
  ipn_url?: string;
  multi_card_name?: string;
  allowed_bin?: string;
  emi_option?: number;
  emi_max_inst_option?: number;
  emi_selected_inst?: number;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  cus_add1?: string;
  cus_add2?: string;
  cus_city?: string;
  cus_state?: string;
  cus_postcode?: string;
  cus_country?: string;
  shipping_method?: string;
  num_of_item?: number;
  product_name?: string;
  product_category?: string;
  product_profile?: string;
  value_a?: string;
  value_b?: string;
  value_c?: string;
  value_d?: string;
}

export interface SSLCommerzInitResponse {
  GatewayPageURL: string;
  status: string;
  sessionkey: string;
  gw?: {
    visa: string;
    master: string;
    amex: string;
    othercards: string;
    internetbanking: string;
    mobilebanking: string;
  };
  redirectGatewayURL: string;
  redirectGatewayURLFailed: string;
  storeBanner: string;
  storeLogo: string;
  desc: string;
  is_direct_pay_enable: string;
}

export interface SSLCommerzValidationResponse {
  // status: string;
  status: "VALID" | "VALIDATED" | "INVALID" | "FAILED";
  tran_date: string;
  tran_id: string;
  val_id: string;
  amount: string;
  store_amount: string;
  currency: string;
  failedreason?: string; // Optional field
  [key: string]: any; // Allow other properties
  bank_tran_id: string;
  card_type: string;
  card_no: string;
  card_issuer: string;
  card_brand: string;
  card_issuer_country: string;
  card_issuer_country_code: string;
  currency_type: string;
  currency_amount: string;
  currency_rate: string;
  base_fair: string;
  value_a: string;
  value_b: string;
  value_c: string;
  value_d: string;
  risk_title: string;
  risk_level: string;
  APIConnect: string;
  validated_on: string;
  gw_version: string;
}
