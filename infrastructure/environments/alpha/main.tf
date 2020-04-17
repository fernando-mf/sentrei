provider "google" {
  region = "us-central1"
}

module "storage" {
  source      = "../../modules/storage"
  environment = var.environment
}
