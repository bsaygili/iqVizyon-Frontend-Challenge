# iQVizyon Interview Case

## Screenshots

![1](https://user-images.githubusercontent.com/25987727/186392889-d711a3d5-1fed-4442-85b6-c04a49229a50.png)

![2](https://user-images.githubusercontent.com/25987727/186392945-21b4f51b-f8d9-41c8-b64d-81e862d4928f.png)

![4](https://user-images.githubusercontent.com/25987727/186392995-7aa9eb34-f4dc-4a39-818d-d92a895c2eb4.png)

![5](https://user-images.githubusercontent.com/25987727/186393082-86313e09-5b05-4155-84fe-41f1c51fd9f9.png)

![6](https://user-images.githubusercontent.com/25987727/186393091-37206553-1166-402d-a52e-7166039c9f31.png)

![7](https://user-images.githubusercontent.com/25987727/186393100-0fc456ff-1505-4e42-ae4a-961e94f56e96.png)

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
