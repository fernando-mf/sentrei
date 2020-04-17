provider "google" {
  region = "us-central1"
}

module "dns" {
  source = "../../modules/dns"
}

module "github" {
  source = "../../modules/github"
}

module "iam" {
  source       = "../../modules/iam"
  environments = ["master"]
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
