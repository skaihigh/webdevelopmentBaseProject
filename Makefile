REPORTER = spec

build:
	@./node_modules/.bin/grunt

watch:
	@./node_modules/.bin/grunt watch

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require test/support/setup \
		--reporter $(REPORTER) \
		--ui bdd \
		test/server/*.js test/server/lib/*.js

install:
	npm install
	./node_modules/.bin/bower --allow-root install

.PHONY: build watch test install