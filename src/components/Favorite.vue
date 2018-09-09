<template>
<div>
<b-container>
    <div  class="box">
        <div v-if=" checkImg() == 0 ">
            <h1>brak ulubionych</h1>
        </div>
    <div v-for="(items, index) in groupedImg" :key="index" class="row">
        <div v-for="(item, i) in items"  class="col-md-3 col-sm-6" :key="i">
            <div class="panel">
                <img  class="picture" :src="item" alt="">
                <button type="button" class="btn btn-danger" @click="delImg(index)">usuń</button>
            </div>
        </div>
    </div>
    </div>
</b-container>
</div>
</template>

<script>
import _ from 'lodash'
import DataStory from './DataStory.js'
export default {
name: 'Favorite',
data() {
   return {
        imgs: DataStory.data.img
   }    
    },

    methods: {
        delImg(index) {
         DataStory.data.img.splice(index, 1);
        },
        checkImg(){
            return  DataStory.data.img.length;
        }
        },
    computed: {
       groupedImg() {
        return _.chunk(this.imgs, 4)
       }

      
    }
}



</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/bootstrap.scss';
.box{
    margin: 0;
     margin-top: 70px;
}
.panel {
    
    width: 200px;
    height: 200px;
    margin: 0;
}

.picture {
width: 80%;
height: 80%;
   border-radius: 5px 5px;
}

button {
    width: 80%;
}
</style>
