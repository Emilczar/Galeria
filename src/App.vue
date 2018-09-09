<template>
<b-container>
  <div >
  
  <b-navbar toggleable="md" variant="info" fixed="top"  > 
    <b-navbar-brand   > <router-link class="item"  to="/">Home</router-link></b-navbar-brand >
    <b-navbar-brand  ><router-link class="item"  to="/ulubione">Ulubione</router-link> </b-navbar-brand>
  </b-navbar>
  
    <router-view/>

  </div>
  </b-container>
</template>

<script>
import Favorite from './components/Favorite.vue'
import ListImg from './components/ListImg'
export default {
  name: 'app',
  components: {
    Favorite,
    ListImg
  }
}
</script>

<style  lang="scss">
@import './node_modules/bootstrap/scss/bootstrap.scss';

.item {
  color: white;
  margin-left: 30px;
}
#menu {
  //position: fixed;
  z-index: 10;
  top: 0;
  background: #2c3e50;
  
}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 // text-align: center;
  color: #2c3e50;
  
}
</style>
