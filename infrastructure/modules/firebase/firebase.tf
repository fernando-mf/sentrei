resource "google_firebase_project" "sentrei" {
  provider = google-beta
  project  = google_project.default.project_id
}
