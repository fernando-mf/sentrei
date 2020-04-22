resource "google_cloud_run_service" "sentrei_web" {
  name     = "sentrei-${var.environment}-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "docker.io/sentrei/sentrei:${var.environment}"
      }
    }
  }
}

resource "google_cloud_run_service" "sentrei_staging_web" {
  name     = "sentrei-staging-${var.environment}-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "docker.io/sentrei/sentrei:staging-${var.environment}"
      }
    }
  }
}
