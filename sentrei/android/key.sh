#!/bin/bash

gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output app/google-services.json firebase/alpha/google-services.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output app/google-services.json firebase/beta/google-services.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output app/google-services.json firebase/master/google-services.json.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output key/api.json key/api.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output key/key.jks key/key.jks.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output key/alpha/sentrei-alpha.json key/alpha/sentrei-alpha.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output key/beta/sentrei-beta.json key/beta/sentrei-beta.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
--output key/master/sentrei-beta.json key/master/sentrei-beta.json.gpg

echo "storePassword=$APP_SIGN_PWD" >> key.properties
echo "keyPassword=$APP_SIGN_PWD" >> key.properties
echo "keyAlias=key" >> key.properties
