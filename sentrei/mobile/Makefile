.PHONY : i18n-arb i18n-dart

auth:
	keytool -list -v -alias key -keystore android/key/key.jks

delete:
	keytool --delete -v -alias key -keystore android/key/key.jks

encrypt:
	keytool -genkey -v -keystore android/key/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
	gpg --symmetric --cipher-algo AES256 android/key/api.json
	gpg --symmetric --cipher-algo AES256 android/key/key.jks
	gpg --symmetric --cipher-algo AES256 android/key/alpha/sentrei-alpha.json
	gpg --symmetric --cipher-algo AES256 android/key/beta/sentrei-beta.json
	gpg --symmetric --cipher-algo AES256 android/key/master/sentrei-master.json

export:
	keytool -exportcert -alias key -keystore android/key/key.jks | openssl sha1 -binary | openssl base64

i18n: i18n-arb i18n-dart

i18n-arb:
	flutter pub pub run intl_translation:extract_to_arb --output-dir=lib/i18n lib/i18n/sentrei_localizations.dart

i18n-dart:
	flutter pub pub run intl_translation:generate_from_arb --output-dir=lib/i18n --no-use-deferred-loading lib/i18n/sentrei_localizations.dart lib/i18n/intl_*.arb

format:
	flutter format lib

upgrade:
	flutter pub upgrade
