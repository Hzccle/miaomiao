<template>
   <div class="Header">
       {{title}}
   </div>
</template>    
<script>
export default{
    props:{
        title:{
            type:String,
            default:'喵喵影院'
        }
    },
   name:'Header',
   data() {
       return {

       }
   }
}
</script>
<style lang="less" scoped>
  .Header{
      width: 100%;
      height:40px;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: crimson;
      color: #fff;
      font-size: 18px;   
  }
</style>