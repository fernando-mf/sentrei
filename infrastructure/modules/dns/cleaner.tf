resource "google_dns_record_set" "cleaner_sentrei_com_CNAME" {
  name         = "cleaner.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "CNAME"
  ttl          = 300

  rrdatas = ["ghs.googlehosted.com."]
}
