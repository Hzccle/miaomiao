<template>
  <div class="alertCom" v-show="isShow">
    <div class="model"></div>
    <div class="alert-cont">
      <header class="title">{{ title }}</header>
      <div class="content">{{ content }}</div>
      <footer class="footer">
        <div class="confirm" @click="confirmFn">{{ confirm }}</div>
        <div class="cancel" @click="cancelFn">{{ cancel }}</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
   
    }
  },
  methods:{
     
  }
};
</script>

<style lang="less" scoped>
.alertCom {
  width: 100%;
  height: 100%;
  .alert-cont {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    z-index: 999;
    .content {
      margin: 20px 0;
    }
    .footer{
        display: flex;
        // justify-content:center;
        & > div{
          flex: 1 1 80px;
        }
    }
  }
}
.model {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
  z-index: 88;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
