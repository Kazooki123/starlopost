use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use std::sync::Mutex;

struct AppState {
    view_count: Mutex<u64>,
}

#[get("/views")]
pub fn get_views(data: web::Data<AppState>) -> impl Responder {
    let views = data.view_count.lock().unwrap();
    HttpResponse::Ok().body(format!("Total views: {}", *views))
}

#[post("/increment")]
pub fn increment_views(data: web::Data<AppState>) -> impl Responder {
    let mut views = data.view_count.lock().unwrap();
    *views += 1;
    HttpResponse::Ok().body(format!("Incremented. New Count: {}", *views))
}

#[actix_web::main]
pub fn main() -> std::io::Result<()> {
    let app_state = web::Data::new(AppState {
        view_count: Mutex::new(0),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .service(get_views)
            .service(increment_views)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
