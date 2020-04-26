provider "google" {
  region = "us-central1"
}

provider "google-beta" {
  region = "us-central1"
}

module "dns" {
  source = "../../modules/dns"
}

module "github" {
  source = "../../modules/github"
}

module "iam" {
  source      = "../../modules/iam"
  environment = var.environment
}

module "run" {
  source      = "../../modules/run"
  environment = var.environment
}

module "scheduler" {
  source      = "../../modules/scheduler"
  environment = var.environment
}

module "secret" {
  source = "../../modules/secret"
  email  = module.iam.google_service_account_github_email
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
