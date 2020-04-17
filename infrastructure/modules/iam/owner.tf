resource "google_project_iam_member" "owner" {
  for_each = toset(var.environments)
  project  = "sentrei-${each.value}"
  role     = "roles/owner"
  member   = "user:shunkakinoki@gmail.com"
}
