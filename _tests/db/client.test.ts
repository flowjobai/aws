import { expect, test } from "bun:test";
import { execute } from "../../src/db";

test("select", async () => {
    const data = await execute("SELECT now() as time");
    console.log("Data:", data);
    expect(data.rows.length).toBe(1);
});

