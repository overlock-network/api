#!/bin/bash
proto_dirs=$(find ./proto -path -prune -o -name '*.proto' ! -name "module.proto" -print0  | xargs -0 -n1 dirname | sort | uniq)

for dir in $proto_dirs; do
    while IFS= read -r -d '' file; do
        buf generate --template buf.gen.gogo.yaml "$file"
    done <  <(find "${dir}" -maxdepth 1 -name '*.proto' -print0)
done

cp -r go/github.com/overlock-network/api/* ./
rm -r go/github.com

