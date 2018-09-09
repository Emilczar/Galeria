<template>
<div class="box"> 
    <div v-for="(items, index) in groupedImg" :key="index" class="row ">
  <div v-for="(item, i) in items" class="col-md-3 col-sm-6  boxrow " :key="i">
        <div class="panel">
          <img  class="picture" :src="item" alt="">
      <button type="button" class="btn btn-success" @click="setData(item)"> Dodaj do ulubionych </button>
     </div>
  </div>
</div>
</div>
</template>
<script>
import _ from 'lodash'
import DataStory from './DataStory.js'
import axios from 'axios'
export default {
 name: 'ListImg',
   data() {
       return {
           imgs: []
       }
   },
 
   methods: {
    getImg(imgs) {
           axios.get('https://shibe.online/api/shibes?count=16')
           .then( (res) =>  res.data)
             .then(data => data.map((value)=>{
                imgs.push(value)
            }))
              // eslint-disable-next-line
           .catch( error => console.log('getImg error'))
    },

    scroll(imgs) {
           window.onscroll = () => {
              let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                axios.get('https://shibe.online/api/shibes?count=6')
            .then( (res) =>  res.data)
            .then(data => data.map((value)=>{
                imgs.push(value)
            }))
             // eslint-disable-next-line
            .catch(error => console.log('scroll error'))
        }}
    },
    setData(item) {
       DataStory.data.img.push(item)
    }
   },

    computed: {
       groupedImg() {
        return _.chunk(this.imgs, 4)
       }
   },

    mounted() {
            this.scroll(this.imgs);
            this.preloader();
        },

    beforeMount() {
        this.getImg(this.imgs);
        }



     
}
</script>

<style lang="scss" scoped>
@import './node_modules/bootstrap/scss/bootstrap.scss';
.box{
    position: relative;
    border-radius: 5px 5px;
    padding: 0;
    margin: 0;
    margin-top: 70px;
}
.boxrow {
      position: relative;
     padding: 0;
     margin: 0;
}
   
.panel {
  position: relative;
    width: 100%;
    height: 200px;
    margin: 0;
    padding: 0;
    padding-left: 10%;
  
}

.picture {
width: 80%;
height: 80%;
}



</style>
