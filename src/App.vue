<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/balmostory">balmostory</router-link> |
    <router-link to="/Inputv">inputv</router-link> |
    <router-link to="/Todos">Todos</router-link> |
    <router-link to="/Board">Board</router-link> |
    <button @click="this.$router.push({ name: 'about', params: {productId: 'P0001'} })">about $router.push</button>
    <router-link to="/about">About</router-link> |
    <router-link to="/AboutViewCopy">AboutViewCopy</router-link>
  </nav>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
