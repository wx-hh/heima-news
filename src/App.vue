<template>
  <div class="app">
    我是根组件
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <br>
    <div class="box"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style>
.box {
 width: 300px;
 height: 300px;
 font-size: 75px;
 background-color: #f60;
}
</style>
