#!/bin/bash
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/api.json key/api.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/key.jks key/key.jks.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/test-lab-alpha.json key/test-lab-alpha.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/test-lab-beta.json key/test-lab-beta.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/test-lab-master.json key/test-lab-master.json.gpg

echo "storePassword=$APP_SIGN_PWD" >> key.properties
echo "keyPassword=$APP_SIGN_PWD" >> key.properties
echo "keyAlias=key" >> key.properties
