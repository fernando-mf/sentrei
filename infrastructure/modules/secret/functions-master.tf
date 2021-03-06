resource "google_secret_manager_secret" "functions_master_env" {
  provider  = google-beta
  secret_id = "functions_master_env"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "functions_master_env" {
  provider  = google-beta
  project   = google_secret_manager_secret.functions_master_env.project
  secret_id = google_secret_manager_secret.functions_master_env.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}
