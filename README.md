# iQVizyon Interview Case

## Project setup

If you don't have dockerDesktop, firstly install docker from https://www.docker.com/products/docker-desktop/ link. After installation please follow the steps below.

To run the docker image, you'll either need to pull the image from gitlab registry or you can fetch the git repository and build it yourself.

You can fetch or build the

    docker pull registry.gitlab.com/iqvizyon/iqv-front-challenge:latest

or

    docker build -t registry.gitlab.com/iqvizyon/iqv-front-challenge .

The docker image exposes port 5000, you'll need to bind it. Also you must define the command `web`

    docker run -i -p 5000:5000 registry.gitlab.com/iqvizyon/iqv-front-challenge:latest web

**Or simply use the provided docker-compose file.**

    docker-compose up

This will build the image and run it appropriately.

### After backend server is running please follow the steps below.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Descriptions

I buit with;

- Vue.js
- Vuex
- vou-router
- axios
- Web Socket
- Docker
- ApexChart

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
