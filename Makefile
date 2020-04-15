auth:
	keytool -list -v -alias key -keystore sentrei/mobile/android/key/key.jks

delete:
	keytool --delete -v -alias key -keystore sentrei/mobile/android/key/key.jks

encrypt:
	keytool -genkey -v -keystore sentrei/mobile/android/key/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
	gpg --symmetric --cipher-algo AES256 sentrei/mobile/android/key/api.json
	gpg --symmetric --cipher-algo AES256 sentrei/mobile/android/key/key.jks
	gpg --symmetric --cipher-algo AES256 sentrei/mobile/android/key/alpha/sentrei-alpha.json
	gpg --symmetric --cipher-algo AES256 sentrei/mobile/android/key/beta/sentrei-beta.json
	gpg --symmetric --cipher-algo AES256 sentrei/mobile/android/key/master/sentrei-master.json

export:
	keytool -exportcert -alias key -keystore sentrei/mobile/android/key/key.jks | openssl sha1 -binary | openssl base64

format:
	flutter format lib

pixelmator:
	pipenv run dvc add design/pixelmator

upgrade:
	flutter pub upgrade
