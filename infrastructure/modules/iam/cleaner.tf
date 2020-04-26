resource "google_service_account" "cleaner" {
  project      = "sentrei-${var.environment}"
  account_id   = "cleaner"
  display_name = "cleaner"
}

resource "google_project_iam_member" "cleaner_service_account_user" {
  project = "sentrei-${var.environment}"
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.cleaner.email}"
}

resource "google_project_iam_member" "cleaner_project_run_invoker" {
  project = "sentrei-${var.environment}"
  role    = "roles/run.invoker"
  member  = "serviceAccount:${google_service_account.cleaner.email}"
}

resource "google_project_iam_member" "cleaner_project_storage_admin" {
  project = "sentrei-${var.environment}"
  role    = "roles/storage.admin"
  member  = "serviceAccount:${google_service_account.cleaner.email}"
}

output "google_service_account_cleaner_email" {
  value = google_service_account.cleaner.email
}
