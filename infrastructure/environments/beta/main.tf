provider "google" {
  region = "us-central1"
}

module "iam" {
  source = "../../modules/iam"
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
