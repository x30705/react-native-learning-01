export interface ReqResList {

    // https://app.quicktype.io/
    // Interfaces Only & Verify JSON.parse at runtime
    
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Datum[];
    support:     Support;
}

export interface Datum {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
