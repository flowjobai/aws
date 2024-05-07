import { execute } from "./db/rds-data-api";
declare const db: {
    execute: typeof execute;
};
export { db };
