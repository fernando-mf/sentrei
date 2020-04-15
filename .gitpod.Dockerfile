FROM gitpod/workspace-full:commit-e8585e862e3ac6cb8ed842b22bd5948e6f5a8e94

ENV FLUTTER_VERSION="v1.12.13+hotfix.9-stable"

RUN mkdir -p /home/gitpod/development

WORKDIR /home/gitpod/development

RUN wget https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}.tar.xz && \
    tar -xf ./flutter_linux_${FLUTTER_VERSION}.tar.xz && \
    echo "export PATH=\"\$PATH:/home/gitpod/development/flutter/bin\"" >>~/.bashrc && \
    echo "export PATH=\"\$PATH:/home/gitpod/development/flutter/bin/cache/dart-sdk/bin/\"" >>~/.bashrc && \
    echo "export PATH=\"\$PATH:/home/gitpod/.pub-cache/bin\"" >>~/.bashrc
