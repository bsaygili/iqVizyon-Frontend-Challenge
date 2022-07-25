<template>
  <nav>
    <router-link to="/">Machine List</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  background-color: #f6f6f6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #26a9e0;
}
</style>
