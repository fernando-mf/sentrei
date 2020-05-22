resource "google_secret_manager_secret" "github_master_email" {
  provider  = google-beta
  secret_id = "github_master_email"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github_master_email" {
  provider  = google-beta
  project   = google_secret_manager_secret.github_master_email.project
  secret_id = google_secret_manager_secret.github_master_email.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}

resource "google_secret_manager_secret" "github_master_key" {
  provider  = google-beta
  secret_id = "github_master_key"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "github_master_key" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_password.project
  secret_id = google_secret_manager_secret.docker_password.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}
