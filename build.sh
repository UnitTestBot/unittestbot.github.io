#!/usr/bin/env sh

MODE=build
# shellcheck disable=SC2236
if [ ! -z "$1" ]; then
  MODE=$1
fi

# shellcheck disable=SC2039
# shellcheck disable=SC2154
# shellcheck disable=SC2252
if [[ "$MODE" -ne "build" ]] || [[ "$MODE" -ne "develop" ]]; then
  echo "Either [build] or [develop] mode as parameter is expected, but [$MODE] is being passed"
  exit 1
fi

echo "Starting gatsby build with mode [$MODE]"

#internet proxy server
export HTTP_PROXY=http://10.198.126.162:3128
export HTTPS_PROXY=http://10.198.126.162:3128
export https_proxy=http://10.198.126.162:3128
export http_proxy=http://10.198.126.162:3128

#npm settings
export NODE_TLS_REJECT_UNAUTHORIZED=0
npm config set registry http://10.198.126.224:8081/repository/utbot-js-group/
npm config set strict-ssl false

#yarn settings
yarn config set npmRegistryServer http://10.198.126.224:8081/repository/utbot-js-group/
yarn config set unsafeHttpWhitelist '10.198.126.224','github.com','nodejs.org'
yarn config set enableStrictSsl false

#build
yarn set version berry --only-if-needed
yarn
gatsby "$MODE"