FROM gitpod/workspace-full:latest

ENV FLUTTER_VERSION="v1.12.13+hotfix.9-stable"

RUN mkdir -p /home/gitpod/development

WORKDIR /home/gitpod/development

RUN wget https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}.tar.xz &&
    tar -xf ./flutter_linux_${FLUTTER_VERSION}.tar.xz &&
    echo "export PATH=\"\$PATH:/home/gitpod/development/flutter/bin\"" >>~/.bashrc &&
    echo "export PATH=\"\$PATH:/home/gitpod/development/flutter/bin/cache/dart-sdk/bin/\"" >>~/.bashrc &&
    echo "export PATH=\"\$PATH:/home/gitpod/.pub-cache/bin\"" >>~/.bashrc
