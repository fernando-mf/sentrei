output "reg_self_link" {
  value = google_compute_backend_bucket.reg[count.index].self_link
}
