<template>
  <div class="container_child">
    <div class="introduce"><span>简介：</span>进行组件添加、测试时的基本模板</div>
    <h1 :style="{color: `rgba(${themeColor.color})`}">Test
      <hr>
    </h1>
    <h3>测试一类模板</h3>
    <div class="button_text">
      <component :is="componentsSwitch" :themeColor="themeColor"></component>
    </div>
  </div>
</template>

<script>
import TestOne from '@/components/TestOne.vue'
export default {
  data () {
    return {
      componentsSwitch: 'TestOne'
    }
  },
  components: {
    TestOne
  },
  props: ['themeColor']
}
</script>

<style lang="less" scoped>
.container_child {
  width: 800px;
  margin: 0 auto;
  h3 {
    padding: 30px 50px 0 50px;
    user-select: none;
  }
  .introduce {
    color: rgb(122, 122, 122);
  }
  h1 {
    font-weight: 700;
    user-select: none;
    padding-bottom: 60px;
    hr {
      display: block;
      height: 2px;
      margin-top: 5px;
      background-color: black;
    }
  }
  .button_browse {
    display: inline-block;
    margin: 0 50px;
    padding: 20px 0 20px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid black;
    button {
      width: 100px;
      height: 40px;
      border: 0;
      color: white;
      font-weight: 700;
      opacity: .7;
      margin-right: 20px;
    }
  }
  .button_text {
    padding: 0 50px;
    padding-top: 40px;
  }
}
</style>
