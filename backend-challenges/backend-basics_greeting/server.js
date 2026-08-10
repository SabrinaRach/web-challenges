import { createServer } from "node:http";

// export const server = …
export const server = createServer((req, res) => {
    res.end("Hello, Sabrina!");
})