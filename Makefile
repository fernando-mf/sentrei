CLEANER_RUNNER_URL = https://gcr-master-cleaner-pk2gjf6ada-uc.a.run.app
GCLOUD_AUTH_TOKEN= $(shell gcloud auth print-identity-token)

cleaner:
	curl -XPOST \
	-H "Authorization: Bearer $(GCLOUD_AUTH_TOKEN)" \
	-d "{\"repo\":\"gcr.io/sentrei-master/sentrei\"}" \
	$(CLEANER_RUNNER_URL)/http

git-ls-files-mod:
	git ls-files --stage

git-ls-files-755:
	git ls-files --stage | grep 100755

git-ls-files-120:
	git ls-files --stage | grep 120000

pixelmator:
	pipenv run dvc add design/pixelmator
