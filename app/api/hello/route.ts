/* eslint-disable camelcase */
import { NextRequest, NextResponse } from 'next/server';
import {
  initializeWasm,
  hello_response,
} from "../../../lib/rust_wasm/hello_module";

export async function GET(req: NextRequest) {
  try {
    // Initialize the WebAssembly module
    await initializeWasm();

    // Get the response from the Rust function
    const response = await hello_response();

    // Return the response as a JSON object
    return NextResponse.json(JSON.parse(response));
  } catch (error) {
    // Handle errors and return a 500 status code with the error message
    return NextResponse.json({ error }, { status: 500 });
  }
}
