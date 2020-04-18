resource "google_service_account" "test_lab" {
  project      = "sentrei-${var.environment}"
  account_id   = "test-lab-${var.environment}"
  display_name = "test-lab-${var.environment}"
}

resource "google_project_iam_member" "test_lab_service_account_user" {
  project = "sentrei-${var.environment}"
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.test_lab.email}"
}

resource "google_project_iam_member" "test_lab_cloud_test_admin" {
  project = "sentrei-${var.environment}"
  role    = "roles/cloudtestservice.testAdmin"
  member  = "serviceAccount:${google_service_account.test_lab.email}"
}
