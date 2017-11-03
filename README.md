MonProjet
=====================

#### Install
```
$ cp .env.dist .env
$ npm install
$ apt install mongodb
```

#### Run

```
$ npm start
```
dev:
```
$ npm install -g nodemon
$ nodemon
```

#### MongoDB
```
$ mongo
$ show dbs
$ use [DATABASE NAME]
$ show collections
$ db.users.find()
```

#### ApiDoc
```
$ npm run apidoc
```
Custom
```
$ node_modules/apidoc/bin/apidoc -i routes/ -o doc/
```