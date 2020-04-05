auth:
	keytool -list -v -alias key -keystore sentrei/android/key/key.jks

delete:
	keytool --delete -v -keystore sentrei/android/key/key.jks -alias key
	rm -rf sentrei/android/key/key.jks

encrypt:
	keytool -genkey -v -keystore sentrei/android/key/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/api.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/key.jks
	gpg --symmetric --cipher-algo AES256 sentrei/android/firebase/alpha/google-services.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/firebase/beta/google-services.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/firebase/master/google-services.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/alpha/sentrei-alpha.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/beta/sentrei-beta.json
	gpg --symmetric --cipher-algo AES256 sentrei/android/key/master/sentrei-master.json
	gpg --symmetric --cipher-algo AES256 sentrei/ios/Firebase/alpha/GoogleService-Info.plist
	gpg --symmetric --cipher-algo AES256 sentrei/ios/Firebase/beta/GoogleService-Info.plist
	gpg --symmetric --cipher-algo AES256 sentrei/ios/Firebase/master/GoogleService-Info.plist

export:
	keytool -exportcert -alias key -keystore sentrei/android/key/key.jks | openssl sha1 -binary | openssl base64

format:
	flutter format lib

upgrade:
	flutter pub upgrade
