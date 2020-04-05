#!/bin/bash

gpg --quiet --batch --yes --decrypt --passphrase="$ANDROID_SIGN_PWD" \
--output firebase/sentrei-alpha.json firebase/sentrei-alpha.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$ANDROID_SIGN_PWD" \
--output firebase/sentrei-beta.json firebase/sentrei-beta.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$ANDROID_SIGN_PWD" \
--output firebase/sentrei-master.json firebase/sentrei-master.json.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$ANDROID_SIGN_PWD" \
--output key/api.json key/api.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$ANDROID_SIGN_PWD" \
--output key/key.jks key/key.jks.gpg

echo "storePassword=$ANDROID_SIGN_PWD" >> key.properties
echo "keyPassword=$ANDROID_SIGN_PWD" >> key.properties
echo "keyAlias=key" >> key.properties
