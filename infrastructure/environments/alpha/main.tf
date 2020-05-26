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
  session_secret_current  = var.session_secret_current
  session_secret_previous = var.session_secret_previous
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
