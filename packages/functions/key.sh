#!/bin/bash
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/functions-admin-alpha.json key/functions-admin-alpha.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/functions-admin-beta.json key/functions-admin-beta.json.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$APP_SIGN_PWD" \
    --output key/functions-admin-master.json key/functions-admin-master.json.gpg
