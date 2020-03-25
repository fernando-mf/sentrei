# fastlane documentation

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using

```
[sudo] gem install fastlane -NV
```

or alternatively using `brew cask install fastlane`

# Available Actions

## iOS

### ios setup_match

```
fastlane ios setup_match
```

Build & sign iOS app

### ios beta

```
fastlane ios beta
```

Submit a new beta build to firebase

### ios master

```
fastlane ios master
```

Submit a new master build to firebase

---

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run. More information about fastlane can be found on [fastlane.tools](https://fastlane.tools). The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).