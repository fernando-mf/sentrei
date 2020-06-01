resource "google_monitoring_uptime_check_config" "sentrei" {
  display_name = "sentrei-uptime-check"
  period       = "60s"
  timeout      = "60s"

  http_check {
    path         = "/"
    port         = "443"
    use_ssl      = true
    validate_ssl = true
  }

  monitored_resource {
    type = "uptime_url"
    labels = {
      project_id = "sentrei-master"
      host       = "sentrei.com"
    }
  }
}
