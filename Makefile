git-ls-files-mod:
	git ls-files --stage

git-ls-files-755:
	git ls-files --stage | grep 100755

pixelmator:
	pipenv run dvc add design/pixelmator
