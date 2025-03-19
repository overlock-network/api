#!/bin/bash

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

rm -p ../../.cache/swagger

buf generate \
  --error-format=json \
  --log-format=json \
  --template=buf.gen.swagger.yaml \
  --output ../../.cache/swagger

cp -rv go/github.com/web-seven/overlock-api/. ./
rm -rf go/github.com
