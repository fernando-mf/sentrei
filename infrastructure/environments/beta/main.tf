provider "google" {
  region = "us-central1"
}

module "iam" {
  source      = "../../modules/iam"
  environment = var.environment
}

module "run" {
  source      = "../../modules/run"
  environment = var.environment

module "scheduler" {
  source      = "../../modules/scheduler"
  environment = var.environment
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
