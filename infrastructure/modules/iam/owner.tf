resource "google_project_iam_member" "owner" {
  project = "sentrei-master"
  role    = "roles/owner"
  member  = "user:shunkakinoki@gmail.com"
}
