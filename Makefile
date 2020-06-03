NODE_ENV_VERSION = 14.4.0

gcr-clean-alpha:
	gcloud container images list-tags gcr.io/sentrei-alpha/sentrei --filter='-tags:*' --format='get(digest)' --limit=unlimited | \
	xargs -I {arg} gcloud container images delete "gcr.io/sentrei-alpha/sentrei@{arg}" --quiet

gcr-clean-beta:
	gcloud container images list-tags gcr.io/sentrei-beta/sentrei --filter='-tags:*' --format='get(digest)' --limit=unlimited | \
	xargs -I {arg} gcloud container images delete "gcr.io/sentrei-beta/sentrei@{arg}" --quiet

gcr-clean-master:
	gcloud container images list-tags gcr.io/sentrei-master/sentrei --filter='-tags:*' --format='get(digest)' --limit=unlimited | \
	xargs -I {arg} gcloud container images delete "gcr.io/sentrei-master/sentrei@{arg}" --quiet

git-ls-files-mod:
	git ls-files --stage

git-ls-files-755:
	git ls-files --stage | grep 100755

git-ls-files-120:
	git ls-files --stage | grep 120000

pixelmator-add:
	pipenv run dvc add design/pixelmator

pixelmator-fetch:
	pipenv run dvc fetch

pixelmator-pull:
	pipenv run dvc pull

pixelmator-push:
	pipenv run dvc push

pixelmator-status:
	pipenv run dvc status

pipenv:
	pipenv install --dev
	. .venv/bin/activate

nodeenv:
	nodeenv --node=$(NODE_ENV_VERSION) -p

yarn-eslint:
	yarn add -D -W eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-prettier

yarn-husky:
	yarn add -D -W git-cz husky

yarn-upgrade:
	yarn install --dev --upgrade latest
	yarn run bootstrap
