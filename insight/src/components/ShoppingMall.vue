<template>
 <div class='shopping-mall'>
   <search-bar></search-bar>
   <carousel></carousel>
   <div class="type-bar">
     <div v-for="item in category" :key='item.mallCategoryId'>
       <img v-lazy="item.image" alt="" :img='item.image'>
       <span>{{item.mallCategoryName}}</span>
     </div>
   </div>
   <div class="add-baner">
     <img v-lazy='adBanner' width='100%'>
   </div>
   <!-- recommend goods area -->
   <div class="recommend-area">
     <span class="recommend-title">商品推荐</span>
     <div class="recommend-items">
       <swiper :options="swiperOption" ref="swiperOption">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" v-if="false"  slot="pagination"></div>
       </swiper>
      </div>
       <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
        <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
        <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
        <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">

            </div>
        </div>
   </div>
 </div>
</template>

<script>
import searchBar from '@/components/Searchbar';
import carousel from '@/components/Carousel';
import Index from '@/apis/index';
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import floorComponent from '@/components/floorComponent'


window.Index = Index;
//import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex'
 export default {
   data () {
     return {
       msg: 'Shopping Mall',
       category: [],
       adBanner: null,
       recommendGoods : null,
       floor1:[],
       floor2:[],
       floor3:[],
       floorName:{},
       hotGoods:[],
       swiperOption: {
         slidesPerView: 3,
         loop: true,
         pagination: {
          el: '.swiper-pagination'
         },

       }
     }
   },
   created() {
     Index.getInfo().then(res=>{
       this.category = res.data.category;
       this.adBanner = res.data.advertesPicture.PICTURE_ADDRESS;
       this.recommendGoods = res.data.recommend;
       this.floor1 = res.data.floor1;
       this.floor2 = res.data.floor2;
       this.floor3 = res.data.floor3;
       this.floorName = res.data.floorName;
       this.hotGoods = res.data.hotGoods;
     })
   },
   components: {
     searchBar,
     carousel,
     swiper,
     swiperSlide,
     floorComponent
   }
 }
</script>

<style lang='less' scoped>
  .type-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    text-align: center;
    margin-top: .3rem;
    max-height: 7rem;
    overflow: hidden;
    div {
      padding: .15rem
    }
    div:first-child {
      display: none;
    }
    img {
      width: 80%;
      margin-bottom: .1rem
    }
    span {
      font-size: 14px;
      margin-bottom: .3rem
    }

  }

  .add-baner {
    height: 3rem;
    background: #F0F0F0;
    padding: .2rem 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .recommend-area {
    span {
      display: block;
      height: 2rem;
      line-height: 2rem;
      padding-left: .5rem;
      color: #E11985;
      border-bottom: 1px solid #ccc;
    };
    .recommend-items {
      border-bottom: 1px solid #eee;
      background-color: #fff;
      color: #000;
      .recommend-item{
        width:99%;
        border-right: 1px solid #eee;
        font-size: 12px;
        text-align: center;
        font-size: 14px;
      }
    }

  }
</style>
