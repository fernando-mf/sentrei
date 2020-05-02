resource "google_secret_manager_secret" "firebase_alpha_env" {
  provider  = google-beta
  secret_id = "firebase_alpha_env"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "firebase_alpha_env" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_username.project
  secret_id = google_secret_manager_secret.docker_username.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}
