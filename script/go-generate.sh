#!/bin/bash

EXCLUDE_PATHS=$(find proto -type f -name "module.proto" | sed 's/^/--exclude-path=/')

buf generate proto \
  --error-format=json \
  --log-format=json \
  --template=proto/buf.gen.gogo.yaml \
  $EXCLUDE_PATHS

buf generate proto \
  --error-format=json \
  --log-format=json \
  --template=proto/buf.gen.pulsar.yaml
