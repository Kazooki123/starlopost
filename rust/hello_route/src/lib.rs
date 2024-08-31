use wasm_bindgen::prelude::*;
use std::time::{SystemTime, UNIX_EPOCH};

#[wasm_bindgen]
pub fn hello_response() -> String {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_millis();

    format!("{{\"message\": \"Hello from Rust!\", \"timestamp\": {}}}", timestamp)
}
