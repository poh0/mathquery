# Mathquery

Simple question and answer forum for mathematicians.
- Built with the MEAN stack (MongoDB, Express, Angular and Nodejs)
- [Link to showcase video](https://www.youtube.com/watch?v=NoA77StMr9Q) (Youtube)

## Run locally:

Install Angular CLI if you don't have it

```sh
$ npm install -g @angular/cli
```

Clone this repository:

```sh
$ git clone https://github.com/poh0/mathquery.git
```

Go to the project folder

```sh
$ cd mathquery
```

Fill in your environment variables:
```sh
$ cp .env.example .env
```

```sh
PORT = <Port number>
MONGO_URI = <Connection string to your mongodb server>
JWT_SECRET = <secret random string>
NODE_ENV = <production/development>
```

Install dependencies for both backend and frontend
```sh
$ npm install && cd angular-src && npm install
```

### Run development

Start the frontend and backend in a concurrent shell
```sh
$ npm run dev
```
Then locate to `http://localhost:4200`

### Run production build

In the root of the project run the build script to create a production build

```sh
$ npm run build
```
Start production build:

```sh
$ npm start
```
Then locate to `http://localhost:3000`