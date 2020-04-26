resource "google_cloud_scheduler_job" "cleaner" {
  name             = "cleaner"
  schedule         = "0 0 * * *"
  time_zone        = "Etc/UTC"
  attempt_deadline = "300s"

  http_target {
    http_method = "POST"
    uri         = "https://cleaner.sentrei.com/http"
    body        = base64encode("{\"repo\":\"gcr.io/sentrei-${var.environment}/sentrei\"}")

    oidc_token {
      service_account_email = var.email
    }
  }
}
