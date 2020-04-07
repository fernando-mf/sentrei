#!/bin/bash

git clone "https://$GITHUB_ACCESS_TOKEN@github.com/shunkakinoki/ios-certificates.git"
echo "::set-env name=FASTLANE_SESSION::$(cat ios-certificates/cookie.txt)"
rm -rf ios-certificates
