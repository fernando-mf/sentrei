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

module "secret" {
  provider = google-beta
  source   = "../../modules/secret"
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
