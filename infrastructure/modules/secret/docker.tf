resource "google_secret_manager_secret" "docker_username" {
  provider  = google-beta
  secret_id = "docker_username"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "docker_username" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_username.project
  secret_id = google_secret_manager_secret.docker_username.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}

resource "google_secret_manager_secret" "docker_password" {
  provider  = google-beta
  secret_id = "docker_password"

  replication {
    user_managed {
      replicas {
        location = "us-central1"
      }
    }
  }
}

resource "google_secret_manager_secret_iam_member" "docker_password" {
  provider  = google-beta
  project   = google_secret_manager_secret.docker_password.project
  secret_id = google_secret_manager_secret.docker_password.secret_id
  role      = "roles/viewer"
  member    = "serviceAccount:${var.email}"
}
