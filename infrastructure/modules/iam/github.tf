resource "google_service_account" "github" {
  project      = "sentrei-${var.environment}"
  account_id   = "github"
  display_name = "github"
}

resource "google_project_iam_member" "github_service_account_user" {
  project = "sentrei-${var.environment}"
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.github.email}"
}

resource "google_project_iam_member" "github_project_run_admin" {
  project = "sentrei-${var.environment}"
  role    = "roles/run.admin"
  member  = "serviceAccount:${google_service_account.github.email}"
}

output "google_service_account_github_email" {
  value = google_service_account.github.email
}

resource "google_service_account" "github_admin" {
  count        = var.environment == "master" ? 1 : 0
  project      = "sentrei-${var.environment}"
  account_id   = "github-admin"
  display_name = "github-admin"
}

resource "google_project_iam_member" "github_admin_service_account_user" {
  count   = var.environment == "master" ? 1 : 0
  project = "sentrei-${var.environment}"
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.github_admin.email}"
}

resource "google_project_iam_member" "github_admin_secret_manager_admin" {
  count   = var.environment == "master" ? 1 : 0
  project = "sentrei-${var.environment}"
  role    = "roles/secretmanager.admin"
  member  = "serviceAccount:${google_service_account.github_admin.email}"
}
