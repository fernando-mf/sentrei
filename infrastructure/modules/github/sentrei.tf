resource "github_repository" "sentrei" {
  name         = "sentrei"
  description  = "Official sentrei app"
  homepage_url = "https://sentrei.com"
  private      = false
  has_issues   = true
  has_projects = true
  has_wiki     = false

  topics = ["ios", "android", "webapp", "flutter", "flutter-app", "flutter-ui"]
}

resource "github_branch_protection" "alpha" {
  repository = github_repository.sentrei.name
  branch     = "alpha"

  required_pull_request_reviews {
    dismiss_stale_reviews           = true
    require_code_owner_reviews      = true
    required_approving_review_count = 1
  }

  required_status_checks {
    strict   = true
    contexts = ["auto-approve", "context", "flutter", "ready", "terraform (alpha)", "terraform (beta)", "terraform (master)", "yarn", "atlas/sentrei/sentrei-alpha", "Semantic Pull Request", "WIP"]
  }
}

resource "github_branch_protection" "beta" {
  repository = github_repository.sentrei.name
  branch     = "beta"

  required_pull_request_reviews {
    dismiss_stale_reviews           = true
    require_code_owner_reviews      = true
    required_approving_review_count = 1
  }

  required_status_checks {
    strict   = true
    contexts = ["auto-approve", "context", "flutter", "ready", "terraform (alpha)", "terraform (beta)", "terraform (master)", "yarn", "atlas/sentrei/sentrei-beta", "Semantic Pull Request", "WIP"]
  }
}

resource "github_branch_protection" "master" {
  repository     = github_repository.sentrei.name
  branch         = "master"
  enforce_admins = true

  required_pull_request_reviews {
    dismiss_stale_reviews           = true
    require_code_owner_reviews      = true
    required_approving_review_count = 1
  }

  required_status_checks {
    strict   = true
    contexts = ["auto-approve", "context", "flutter", "ready", "terraform (alpha)", "terraform (beta)", "terraform (master)", "yarn", "atlas/sentrei/sentrei-master", "Semantic Pull Request", "WIP"]
  }
}
