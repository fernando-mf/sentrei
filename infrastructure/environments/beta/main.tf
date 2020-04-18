provider "google" {
  region = "us-central1"
}

module "iam" {
  source      = "../../modules/iam"
  environment = var.environment
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
