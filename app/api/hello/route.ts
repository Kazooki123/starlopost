/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from "next";
import {
  initializeWasm,
  hello_response,
} from "../../../lib/rust_wasm/hello_module";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Initialize the WebAssembly module
    await initializeWasm();

    // Get the response from the Rust function
    const response = await hello_response();

    // Send the response back to the client
    res.status(200).json(JSON.parse(response));
  } catch (error) {
    // Handle errors and send a 500 status code with the error message
    res.status(500).json({ error });
  }
}
