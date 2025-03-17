#!/bin/bash

CURRENT_DIR=$(pwd)

cd proto/node || exit 1

EXCLUDE_PATHS=$(find . -type f -name "module.proto" | sed 's/^/--exclude-path=/' | tr '\n' ' ')

buf generate \
  --error-format=json \
  --log-format=json \
  --template=buf.gen.gogo.yaml \
  $EXCLUDE_PATHS

buf generate \
  --error-format=json \
  --log-format=json \
  --template=buf.gen.pulsar.yaml

cd "$CURRENT_DIR" || exit 1

cp -rv go/github.com/web-seven/overlock-api/. ./
rm -rf go/github.com
