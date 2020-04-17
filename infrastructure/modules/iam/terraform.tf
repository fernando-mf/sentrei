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
