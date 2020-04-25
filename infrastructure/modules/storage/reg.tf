resource "google_storage_bucket" "reg" {
  count         = var.environment == "master" ? 1 : 0
  name          = "sentrei-${var.environment}-reg"
  location      = "US"
  force_destroy = true

  lifecycle_rule {
    condition {
      age = "3"
    }
    action {
      type = "Delete"
    }
  }
}
