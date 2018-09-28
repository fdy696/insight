<template>
 <div class='search-bar'>
   <van-row>
     <van-col span='3'><i class='iconfont icon-location1'></i></van-col>
     <van-col span='16'>
       <input type="text" placeholder="上万种商品等你来挑">
     </van-col>
     <van-col span='5'>
         <button>查找</button>
     </van-col>
   </van-row>
 </div>
</template>

<script>
//import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex'
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>
  .search-bar {
    height: 2.4rem;
    background: #e5017d;
    line-height: 2.4rem;
    text-align: center;
    padding-right: 12px;
    overflow: hidden;
    i.icon-location1 {
      color: #fff;
      font-size: 1.3rem;
    };
    button {
      width: 3.8rem;
      height: 1.5rem;
      background: #CFD1CE;
      border: 0;
      margin-top: 2px;
      border-radius: 5px;
    }
    input {
      width: 100%;
      background-color: #Fff;
      border-radius: 1rem;
      height: 1.8rem;
      line-height: 1.8rem;
      border: none;
      padding-left: 13px;
      margin-left: -10px;
    }
  }

</style>
