auth:
	keytool -list -v -alias key -keystore sentrei/android/key/key.jks

delete:
	keytool --delete -v -keystore sentrei/android/key/key.jks -alias key

encrypt:
	keytool -genkey -v -keystore sentrei/android/key/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/api.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/key.jks
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/sentrei-alpha.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/sentrei-beta.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/sentrei-master.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/firebase/sentrei-alpha.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/firebase/sentrei-beta.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/firebase/sentrei-master.json

export:
	keytool -exportcert -alias key -keystore sentrei/android/key/key.jks | openssl sha1 -binary | openssl base64

format:
	flutter format lib

upgrade:
	flutter pub upgrade
