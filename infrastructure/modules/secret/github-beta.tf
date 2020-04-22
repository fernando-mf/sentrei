resource "google_secret_manager_secret" "github_beta_email" {
  provider  = google-beta
  secret_id = "github_beta_email"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github_beta_email" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_username.project
  secret_id = google_secret_manager_secret.docker_username.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}

resource "google_secret_manager_secret" "github_beta_key" {
  provider  = google-beta
  secret_id = "github_beta_key"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github_beta_key" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_password.project
  secret_id = google_secret_manager_secret.docker_password.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}