resource "google_dns_record_set" "mobile_sentrei_com_A" {
  name         = "mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "alpha_mobile_sentrei_com_A" {
  name         = "alpha.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "beta_mobile_sentrei_com_A" {
  name         = "beta.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "master_mobile_sentrei_com_A" {
  name         = "master.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "staging_mobile_sentrei_com_A" {
  name         = "staging.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "staging_alpha_mobile_sentrei_com_A" {
  name         = "staging.alpha.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "staging_beta_mobile_sentrei_com_A" {
  name         = "staging.beta.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}

resource "google_dns_record_set" "staging_master_mobile_sentrei_com_A" {
  name         = "staging.master.mobile.${google_dns_managed_zone.sentrei.dns_name}"
  managed_zone = google_dns_managed_zone.sentrei.name
  type         = "A"
  ttl          = 300

  rrdatas = ["151.101.1.195", "151.101.65.195"]
}
