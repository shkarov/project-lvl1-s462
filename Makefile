install:
	    npm install
build:
	    rm -rf dist
	    npm run build
publish:
	    npm publish
lint:
	    npx eslint .

