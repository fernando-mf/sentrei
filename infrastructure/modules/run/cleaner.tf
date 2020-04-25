resource "google_cloud_run_service" "cleaner" {
  provider = google-beta
  name     = "gcr-${var.environment}-cleaner"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/gcr-cleaner/gcr-cleaner"
        resources {
          limits = { "memory" : "256Mi" }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true
}
