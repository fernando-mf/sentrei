resource "google_service_account" "terraform" {
  for_each     = toset(var.environments)
  project      = "sentrei-${each.value}"
  account_id   = "terraform"
  display_name = "terraform"
}

resource "google_project_iam_member" "terraform_service_account_user" {
  for_each = toset(var.environments)
  project  = "sentrei-${each.value}"
  role     = "roles/iam.serviceAccountUser"
  member   = "serviceAccount:${google_service_account.terraform[each.value].email}"
}

resource "google_project_iam_member" "terraform_project_iam_admin" {
  for_each = toset(var.environments)
  project  = "sentrei-${each.value}"
  role     = "roles/resourcemanager.projectIamAdmin"
  member   = "serviceAccount:${google_service_account.terraform[each.value].email}"
}

resource "google_project_iam_member" "terraform_dns_admin" {
  for_each = toset(var.environments)
  project  = "sentrei-${each.value}"
  role     = "roles/dns.admin"
  member   = "serviceAccount:${google_service_account.terraform[each.value].email}"
}

resource "google_project_iam_member" "terraform_storage_admin" {
  for_each = toset(var.environments)
  project  = "sentrei-${each.value}"
  role     = "roles/storage.admin"
  member   = "serviceAccount:${google_service_account.terraform[each.value].email}"
}
