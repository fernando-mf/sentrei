#!/bin/bash

brew install imagemagick
brew install graphicsmagick
brew install librsvg
brew unlink pango
brew install https://raw.githubusercontent.com/Homebrew/homebrew-core/7cf3b63be191cb2ce4cd86f4406915128ec97432/Formula/pango.rb
brew switch pango 1.42.4_1
