NODE_ENV_VERSION = 14.2.0

cleaner-alpha:
	gcloud container images list-tags gcr.io/sentrei-alpha/sentrei --filter='-tags:*' --format='get(digest)' --limit=unlimited | \
	xargs -I {arg} gcloud container images delete "gcr.io/sentrei-alpha/sentrei@{arg}" --quiet

cleaner-beta:
	gcloud container images list-tags gcr.io/sentrei-beta/sentrei --filter='-tags:*' --format='get(digest)' --limit=unlimited | \
	xargs -I {arg} gcloud container images delete "gcr.io/sentrei-beta/sentrei@{arg}" --quiet

cleaner-master:
	gcloud container images list-tags gcr.io/sentrei-master/sentrei --filter='-tags:*' --format='get(digest)' --limit=unlimited | \
	xargs -I {arg} gcloud container images delete "gcr.io/sentrei-master/sentrei@{arg}" --quiet

git-ls-files-mod:
	git ls-files --stage

git-ls-files-755:
	git ls-files --stage | grep 100755

git-ls-files-120:
	git ls-files --stage | grep 120000

pixelmator:
	pipenv run dvc add design/pixelmator

pipenv:
	pipenv install --dev
	. .venv/bin/activate

nodeenv:
	nodeenv --node=$(NODE_ENV_VERSION) -p

yarn:
	yarn install --dev --upgrade latest
	yarn bootstrap
