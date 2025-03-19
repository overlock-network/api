.PHONY: proto-gen-go
proto-gen-go: 
	./script/protoc-gen-go.sh

.PHONY: proto-gen-swagger
proto-gen-swagger: 
	./script/protoc-gen-swagger.sh

.PHONY: proto-gen-pulsar
proto-gen-pulsar: 
	./script/protoc-gen-pulsar.sh

.PHONY: codegen
codegen: proto-gen-go proto-gen-swagger proto-gen-pulsar

