resource "google_monitoring_uptime_check_config" "https" {
  display_name = "sentrei-uptime-check"
  timeout      = "60s"

  http_check {
    path         = "/"
    port         = "443"
    use_ssl      = true
    validate_ssl = true
  }
}
