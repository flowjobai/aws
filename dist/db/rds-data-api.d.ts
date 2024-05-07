export interface Field {
    type: "string" | "number" | "boolean" | "json" | "date";
    value: any;
    fmt: string;
}
declare class ExecuteResult {
    rows: Record<string, Field>[];
    updated: number;
    constructor(rows: Record<string, Field>[], updated: number);
    single(): Record<string, Field>;
    singleValues(): {
        [k: string]: any;
    };
    formatted(): {
        [k: string]: string;
    }[];
    values(): {
        [k: string]: any;
    }[];
}
export declare function execute(sql: string, params?: Record<string, any>): Promise<ExecuteResult>;
export declare function formatted(rows: Record<string, Field>[]): Record<string, string>[];
export declare function batch(sql: string, params: Record<string, any>[]): Promise<void>;
export declare function homogeniseFields(sql: string, rows: Record<string, any>[]): void;
export {};
