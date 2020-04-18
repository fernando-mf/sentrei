resource "google_service_account" "terraform" {
  project      = "sentrei-${var.environment}"
  account_id   = "terraform"
  display_name = "terraform"
}

resource "google_project_iam_member" "terraform_service_account_user" {
  project = "sentrei-${var.environment}"
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.terraform.email}"
}

resource "google_project_iam_member" "terraform_project_iam_admin" {
  project = "sentrei-${var.environment}"
  role    = "roles/resourcemanager.projectIamAdmin"
  member  = "serviceAccount:${google_service_account.terraform.email}"
}

resource "google_project_iam_member" "terraform_dns_admin" {
  count   = var.environment == "master" ? 1 : 0
  project = "sentrei-${var.environment}"
  role    = "roles/dns.admin"
  member  = "serviceAccount:${google_service_account.terraform.email}"
}

resource "google_project_iam_member" "terraform_storage_admin" {
  project = "sentrei-${var.environment}"
  role    = "roles/storage.admin"
  member  = "serviceAccount:${google_service_account.terraform.email}"
}
