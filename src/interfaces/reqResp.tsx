// Paste JSON as Code Extension:
// https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype
// Copy JSON
// Command Pallet (SHIFT + COMMAND + P)
// Search Command (Paste JSON as Code)
// Select Languag (TypeScript)
// Name root element
// Paste JSON

export interface ReqResList {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        User[];
    support:     Support;
}

// fn + F2 to rename everywhere in the file.
export interface User {
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
