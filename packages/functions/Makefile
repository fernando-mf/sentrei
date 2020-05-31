encrypt:
	gpg --symmetric --cipher-algo AES256 key/functions-admin-alpha.json
	gpg --symmetric --cipher-algo AES256 key/functions-admin-beta.json
	gpg --symmetric --cipher-algo AES256 key/functions-admin-master.json

secrets: secrets-alpha secrets-beta secrets-master

secrets-alpha:
	gcloud secrets versions add "functions_alpha_env" --data-file="alpha.env.json"

secrets-beta:
	gcloud secrets versions add "functions_beta_env" --data-file="beta.env.json"

secrets-master:
	gcloud secrets versions add "functions_master_env" --data-file="master.env.json"
