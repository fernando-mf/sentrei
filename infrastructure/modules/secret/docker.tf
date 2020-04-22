resource "google_secret_manager_secret" "docker" {
  provider  = google-beta
  secret_id = "docker"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker.project
  secret_id = google_secret_manager_secret.docker.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}
