output "reg_self_link" {
  count = var.environment == "master" ? 1 : 0
  value = google_compute_backend_bucket.reg[count.index].self_link
}
