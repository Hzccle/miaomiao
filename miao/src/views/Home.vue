<template>
  <div class="home">    
   首页
  </div>
</template>

<script>

import alert from '@/components/alertComponent/index.js'
export default {
  name: 'Home',
  created () {
    console.log(1113);
    alert({
      title: '提示',
      content: '时代峰峻回款客户开开会是',
      confirm: '确定',
      cancel: '取消',
      confirmFn: function () {
        console.log(1111)
        this.isShow = false
      },
      cancelFn: function () {
        console.log(2222)
      }
    })
  }
}
</script>
<style lang="less" scoped>
 .home{
   width: 100%;
   height: 100%;
   background: cornsilk;
   font-size: 16px;
 }
</style>
