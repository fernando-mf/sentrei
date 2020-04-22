resource "google_secret_manager_secret" "github_email_alpha" {
  provider  = google-beta
  secret_id = "github_email_alpha"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github_email_alpha" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_username.project
  secret_id = google_secret_manager_secret.docker_username.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}

resource "google_secret_manager_secret" "github_key_alpha" {
  provider  = google-beta
  secret_id = "github_key_alpha"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github_key_alpha" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_password.project
  secret_id = google_secret_manager_secret.docker_password.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}
