#!/bin/bash
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/api.json key/api.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/key.jks key/key.jks.gpg

echo "storePassword=$APP_SIGN_PWD" >> key.properties
echo "keyPassword=$APP_SIGN_PWD" >> key.properties
echo "keyAlias=key" >> key.properties
