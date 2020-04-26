resource "google_dns_record_set" "cleaner_sentrei_com_CNAME" {
  name         = "cleaner.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "CNAME"
  ttl          = 300

  rrdatas = ["ghs.googlehosted.com."]
}

resource "google_dns_record_set" "cleaner_sentrei_com_TXT" {
  name         = google_dns_managed_zone.sentrei.dns_name
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "TXT"
  ttl          = 300

  rrdatas = ["google-site-verification=aH-byqvvPX0QqQoPWEs7d8YVAt997VqwtF9x7D3kpkQ"]
}
