resource "google_cloud_run_service" "sentrei_master_web" {
  name     = "sentrei-master-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "sentrei/sentrei:master"
      }
    }
  }
}

resource "google_cloud_run_service" "sentrei_staging_master_web" {
  name     = "sentrei-staging-master-web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "sentrei/sentrei:staging-master"
      }
    }
  }
}
