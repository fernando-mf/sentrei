resource "google_cloud_run_service" "cleaner" {
  provider = google-beta
  name     = "gcr-${var.environment}-cleaner"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/gcr-cleaner/gcr-cleaner"
        resources {
          limits = { "cpu" : "1000m", "memory" : "512Mi" }
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

resource "google_cloud_run_service_iam_binding" "cleaner" {
  location = google_cloud_run_service.cleaner.location
  project  = google_cloud_run_service.cleaner.project
  service  = google_cloud_run_service.cleaner.name
  role     = "roles/run.invoker"
  members = [
    "serviceAccount:${var.email}",
  ]
}

resource "google_cloud_run_domain_mapping" "cleaner" {
  location = "us-central1"
  name     = "cleaner.sentrei.com."

  metadata {
    namespace = "sentrei-${var.environment}"
  }

  spec {
    route_name = google_cloud_run_service.cleaner.name
  }
}
