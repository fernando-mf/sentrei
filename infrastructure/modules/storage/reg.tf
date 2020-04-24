resource "google_storage_bucket" "ui" {
  count    = var.environment == "master" ? 1 : 0
  name     = "sentrei-${var.environment}-reg-ui"
  location = "US"
}

resource "google_storage_bucket" "web" {
  count    = var.environment == "master" ? 1 : 0
  name     = "sentrei-${var.environment}-reg-web"
  location = "US"
}
