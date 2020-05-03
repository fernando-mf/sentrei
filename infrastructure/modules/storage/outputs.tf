output "reg_self_link" {
  value = google_compute_backend_bucket.reg.*.self_link[0]
}
