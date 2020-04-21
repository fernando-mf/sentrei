resource "google_project_iam_member" "cloud_functions_service_account_user" {
  project = "sentrei-${var.environment}"
  role    = "roles/cloudfunctions.serviceAgent"
  member  = "serviceAccount:service-${data.google_project.project.number}@gcf-admin-robot.iam.gserviceaccount.com"
}
