/* eslint-disable camelcase */

import init, { hello_response as rustHelloResponse } from "../../rust/hello_route/pkg/hello_route";

let initialized = false;

export async function initializeWasm() {
    if (!initialized) {
        await init();
        initialized = true;
    }
}

export async function hello_response(): Promise<string> {
    if (!initialized) {
        throw new Error('WebAssembly module not initialized. Call initializedWasm() first.')
    }
    return rustHelloResponse();
}