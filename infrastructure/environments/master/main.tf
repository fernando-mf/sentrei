provider "google" {
  region = "us-central1"
}

provider "google-beta" {
  region = "us-central1"
}

module "dns" {
  source = "../../modules/dns"
}

module "firebase" {
  source = "../../modules/firebase"
}

module "github" {
  source = "../../modules/github"
}

module "iam" {
  source      = "../../modules/iam"
  environment = var.environment
}

module "monitoring" {
  source = "../../modules/monitoring"
}

module "pubsub" {
  source      = "../../modules/pubsub"
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

module "secret" {
  source = "../../modules/secret"
  email  = module.iam.google_service_account_github_email
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
