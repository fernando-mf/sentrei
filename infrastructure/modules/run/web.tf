data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service" "sentrei_web" {
  provider = google-beta
  name     = "sentrei-${var.environment}-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/sentrei-${var.environment}/sentrei:${var.environment}"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_policy" "sentrei_web" {
  location = google_cloud_run_service.sentrei_web.location
  project  = google_cloud_run_service.sentrei_web.project
  service  = google_cloud_run_service.sentrei_web.name

  policy_data = data.google_iam_policy.noauth.policy_data
}

resource "google_cloud_run_service" "sentrei_staging_web" {
  provider = google-beta
  name     = "sentrei-staging-${var.environment}-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/sentrei-${var.environment}/sentrei:staging-${var.environment}"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_policy" "sentrei_staging_web" {
  location = google_cloud_run_service.sentrei_staging_web.location
  project  = google_cloud_run_service.sentrei_staging_web.project
  service  = google_cloud_run_service.sentrei_staging_web.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
