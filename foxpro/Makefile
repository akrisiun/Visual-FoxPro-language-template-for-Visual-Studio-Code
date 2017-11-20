
all: vsix
	@echo "vsix created"

npm:
	npm i

vsix:
	./node_modules/.bin/vsce package

publish:
	./node_modules/.bin/vsce publish

clean:
	git clean -xfd
