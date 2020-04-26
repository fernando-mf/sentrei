resource "google_cloud_scheduler_job" "cleaner" {
  name             = "cleaner"
  schedule         = "*/8 * * * *"
  attempt_deadline = "300s"

  http_target {
    http_method = "POST"
    uri         = "https://cleaner.sentrei.com/http"
    body        = "{\"repo\":\"gcr.io/sentrei-${var.environment}/sentrei\"}"
  }
}
