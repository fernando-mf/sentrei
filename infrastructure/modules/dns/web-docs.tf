resource "google_dns_record_set" "web_docs_sentrei_com_A" {
  name         = "docs.web.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "staging_web_docs_sentrei_com_A" {
  name         = "staging.docs.web.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}
