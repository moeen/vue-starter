<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: Vazir;
  src: url('./assets/fonts/Vazir.eot');
  src: url('./assets/fonts/Vazir.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Vazir.woff') format('woff'),
       url('./assets/fonts/Vazir.ttf') format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: Vazir;
  src: url('./assets/fonts/Vazir-Bold.eot');
  src: url('./assets/fonts/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Vazir-Bold.woff') format('woff'),
       url('./assets/fonts/Vazir-Bold.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
  font-family: Vazir;
  src: url('./assets/fonts/Vazir-Light.eot');
  src: url('./assets/fonts/Vazir-Light.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Vazir-Light.woff') format('woff'),
       url('./assets/fonts/Vazir-Light.ttf') format('truetype');
  font-weight: 300;
}
#app {
  font-family: Vazir;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
