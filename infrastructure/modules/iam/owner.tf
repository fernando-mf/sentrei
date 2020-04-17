data "google_iam_policy" "owner" {
  binding {
    role = "roles/owner"

    members = [
      "user:shunkakinoki@gmail.com",
      "user:shunkakinoki@sentrei.com",
    ]
  }
}
resource "google_project_iam_policy" "owner" {
  project     = "sentrei-${var.environment}"
  policy_data = data.google_iam_policy.owner.policy_data
}
