<template>
 <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from '../src/components/FooterGuide/FooterGuide'
 export default {

    async mounted(){
      //通知actions异步获取address并保存到state
      this.$store.dispatch('getAddress')
    },


       components:{
         FooterGuide
       }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
