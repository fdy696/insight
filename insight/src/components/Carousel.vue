<template>
 <div class='swiper'>
   <van-swipe :autoplay='2000'>
     <van-swipe-item v-for='item in bannerPicArray' :key="item.id">
       <img v-lazy="item.imgUrl" :src="item.imgUrl" width='100%'/>
     </van-swipe-item>
   </van-swipe>
 </div>
</template>

<script>
//import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex'
import swiper1 from '@/assets/images/swiper/carousel01.jpg'
import swiper2 from '@/assets/images/swiper/carousel02.jpg'
import swiper3 from '@/assets/images/swiper/carousel03.jpg'
 export default {
   data () {
     return {
        bannerPicArray:[
          {id:1,imgUrl:swiper1},
          {id:2,imgUrl:swiper2},
          {id:3,imgUrl:swiper3},
        ]
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>
  .swiper {
    max-height: 9rem;
    clear: both;
    img {
      height: 7rem;
    }


  }

</style>
