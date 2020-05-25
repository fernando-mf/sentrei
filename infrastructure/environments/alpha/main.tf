provider "google" {
  region = "us-central1"
}

module "iam" {
  source      = "../../modules/iam"
  environment = var.environment
}

module "run" {
  source                = "../../modules/run"
  environment           = var.environment
  firebase_client_email = var.firebase_client_email
  firebase_private_key  = var.firebase_private_key
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
