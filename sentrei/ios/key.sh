#!/bin/bash

gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output Firebase/alpha/GoogleService-Info.plist Firebase/alpha/GoogleService-Info.plist.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output Firebase/beta/GoogleService-Info.plist Firebase/beta/GoogleService-Info.plist.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output Firebase/master/GoogleService-Info.plist Firebase/master/GoogleService-Info.plist.gpg
