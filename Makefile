include ./make/codegen.mk

.PHONY: clean
clean:
	rm -rf ./.cache
	rm -rf ./node_modules
	rm -rf ./dist
	rm -rf go/github.com