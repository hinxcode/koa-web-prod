deploy:
	rm -rf /dist
	cp -r ../vuekoa/dist .
	npm start
