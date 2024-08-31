/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next';
import {
  initializeWasm,
  hello_response,
} from "../../../lib/rust_wasm/hello_module";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await initializeWasm();
    await hello_response();
}