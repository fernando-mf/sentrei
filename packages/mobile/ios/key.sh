#!/bin/bash

git clone "https://$GITHUB_ACCESS_TOKEN@github.com/$SECRET_REPO.git"
echo "::set-output name=secret::$(cat ios-certificates/cookie.txt)"
rm -rf ios-certificates
