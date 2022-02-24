export interface IPayrollItems {
    approved?: boolean | null;
    canceled?: boolean | null;
    company_id?: string | undefined;
    confirmed?: boolean | null;
    currency?: string | undefined;
    date_canceled?: any | null;
    date_confirmed?: string | undefined;
    date_fulfilled?: any | null;
    date_matched?: string | undefined;
    date_processed?: string | undefined;
    date_received?: string | undefined;
    date_released?: any | null;
    fees?: number | null;
    fulfilled?: boolean | null;
    is_premium?: boolean | null;
    matched?: boolean | null;
    number_of_recipients?: number | null;
    payment_type?: string | undefined;
    payroll_id?: string | undefined;
    received?: boolean | null;
    released?: boolean | null;
    subpayroll_ids?: string[];
    time_created?: string | undefined;
    volume_input_in_input_currency?: number | null;
}