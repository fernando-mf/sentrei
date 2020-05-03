resource "google_compute_url_map" "reg" {
  name            = "reg-url-map"
  default_service = var.reg_self_link
}

resource "google_compute_managed_ssl_certificate" "reg" {
  provider = google-beta

  managed {
    domains = ["reg.${google_dns_managed_zone.sentrei.dns_name}"]
  }
}

resource "google_compute_target_https_proxy" "reg" {
  name             = "reg-https-proxy"
  url_map          = google_compute_url_map.reg.self_link
  ssl_certificates = [google_compute_managed_ssl_certificate.reg.self_link]
}

resource "google_compute_global_address" "reg" {
  name         = "reg-public-address"
  ip_version   = "IPV4"
  address_type = "EXTERNAL"
}

resource "google_compute_global_forwarding_rule" "reg" {
  target     = google_compute_target_https_proxy.reg.self_link
  ip_address = google_compute_global_address.reg.address
  port_range = "443"
}

resource "google_dns_record_set" "reg_sentrei_com_A" {
  name         = "reg.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = [google_compute_global_address.reg.address]
}
