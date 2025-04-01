proto_files=$(find ./proto -type f -name '*.proto' ! -name 'tx.proto' -print0 | xargs -0 -n1 | sort | uniq)

for file in $proto_files; do
    buf generate --template buf.gen.pulsar.yaml "$file"
done
