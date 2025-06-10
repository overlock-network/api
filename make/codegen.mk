.PHONY: proto-gen-go
proto-gen-go: 
	./script/protoc-gen-go.sh

.PHONY: proto-gen-swagger
proto-gen-swagger: 
	./script/protoc-gen-swagger.sh

.PHONY: proto-gen-pulsar
proto-gen-pulsar: 
	./script/protoc-gen-pulsar.sh

.PHONY: proto-gen-ts
proto-gen-ts: 
	./script/protoc-gen-ts.sh
.PHONY: proto-gen-rust
proto-gen-rust:
	./script/protoc-gen-rust.sh

.PHONY: codegen
codegen: proto-gen-go proto-gen-swagger proto-gen-pulsar proto-gen-ts proto-gen-rust

