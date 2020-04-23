resource "google_storage_bucket" "reg" {
  count    = var.environment == "master" ? 1 : 0
  name     = "sentrei-${var.environment}-reg-web"
  location = "US"
}
