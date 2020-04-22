resource "google_cloud_run_service" "sentrei_alpha_web" {
  name     = "sentrei-alpha-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "sentrei/sentrei:alpha"
      }
    }
  }
}

resource "google_cloud_run_service" "sentrei_staging_alpha_web" {
  name     = "sentrei-staging-alpha-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "sentrei/sentrei:staging-alpha"
      }
    }
  }
}
