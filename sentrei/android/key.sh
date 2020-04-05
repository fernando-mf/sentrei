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
--output key/master/sentrei-master.json key/master/sentrei-master.json.gpg

echo "storePassword=$APP_SIGN_PWD" >> key.properties
echo "keyPassword=$APP_SIGN_PWD" >> key.properties
echo "keyAlias=key" >> key.properties

rm -f fastlane/Appfile
echo "json_key_file \"key/api.json\"" >> fastlane/Appfile
echo "package_name \"com.sentrei.sentrei\"" >> fastlane/Appfile
