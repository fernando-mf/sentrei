resource "google_cloud_run_service" "sentrei_web" {
  provider = google-beta
  name     = "sentrei-${var.environment}-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/sentrei/sentrei:${var.environment}"
      }
    }
  }
}

resource "google_cloud_run_service" "sentrei_staging_web" {
  provider = google-beta
  name     = "sentrei-staging-${var.environment}-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/sentrei/sentrei:staging-${var.environment}"
      }
    }
  }
}
