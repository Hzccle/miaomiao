<template>
   <nav class="Foot">
       <div class="homePage">首页</div>
       <div class="catagory">分类</div>
       <div class="mine">个人中心</div>
   </nav>
</template>    
<script>
export default{  
   name:'Foot',
   data() {
       return {

       }
   }
}
</script>
<style lang="less" scoped>
  .Foot{
      width: 100%;
      height:40px;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: crimson;
      color: #fff;
      font-size: 18px;      
  }
</style>