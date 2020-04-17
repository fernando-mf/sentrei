resource "google_service_account" "terraform" {
  account_id   = "terraform"
  display_name = "terraform"
}

data "google_iam_policy" "terraform_service_account_user" {
  binding {
    role    = "roles/iam.serviceAccountUser"
    members = ["serviceAccount:${google_service_account.terraform.email}"]
  }
}

resource "google_service_account_iam_policy" "terraform_service_account_user" {
  service_account_id = google_service_account.terraform.name
  policy_data        = data.google_iam_policy.terraform_service_account_user.policy_data
}

data "google_iam_policy" "terraform_project_iam_admin" {
  binding {
    role    = "roles/resourcemanager.projectIamAdmin"
    members = ["serviceAccount:${google_service_account.terraform.email}"]
  }
}

resource "google_service_account_iam_policy" "terraform_project_iam_admin" {
  service_account_id = google_service_account.terraform.name
  policy_data        = data.google_iam_policy.terraform_project_iam_admin.policy_data
}

data "google_iam_policy" "terraform_dns_admin" {
  binding {
    role    = "roles/dns.admin"
    members = ["serviceAccount:${google_service_account.terraform.email}"]
  }
}

resource "google_service_account_iam_policy" "terraform_dns_admin" {
  service_account_id = google_service_account.terraform.name
  policy_data        = data.google_iam_policy.terraform_dns_admin.policy_data
}
