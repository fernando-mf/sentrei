resource "google_secret_manager_secret" "sentrei" {
  provider  = google-beta
  secret_id = "sentrei"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github" {
  project   = google_secret_manager_secret.sentrei.project
  secret_id = google_secret_manager_secret.sentrei.secret_id
  role      = "roles/viewer"
  member    = "user:shunkakinoki@gmail.com"
}
