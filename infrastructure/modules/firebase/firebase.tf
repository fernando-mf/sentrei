resource "google_firebase_project" "sentrei" {
  provider = google-beta
  project  = data.google_project.project.id
}
