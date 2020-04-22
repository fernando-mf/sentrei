resource "google_cloud_run_service" "sentrei_beta_web" {
  name     = "sentrei-beta-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "sentrei/sentrei:beta"
      }
    }
  }
}

resource "google_cloud_run_service" "sentrei_staging_beta_web" {
  name     = "sentrei-staging-beta-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "sentrei/sentrei:staging-beta"
      }
    }
  }
}
