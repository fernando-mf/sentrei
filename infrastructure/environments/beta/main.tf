provider "google" {
  region = "us-central1"
}

module "iam" {
  source      = "../../modules/iam"
  environment = var.environment
}

module "run" {
  source                  = "../../modules/run"
  environment             = var.environment
  firebase_client_email   = var.firebase_client_email
  firebase_private_key    = var.firebase_private_key
  session_secret_current  = var.session_secret_current
  session_secret_previous = var.session_secret_previous
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
