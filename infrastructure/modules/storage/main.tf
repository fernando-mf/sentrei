resource "google_storage_bucket" "test_lab_results" {
  name          = "sentrei-${var.environment}-test-lab-results"
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

resource "google_storage_bucket" "dvc" {
  count    = var.environment == "master" ? 1 : 0
  name     = "sentrei-${var.environment}-dvc"
  location = "US"
}
