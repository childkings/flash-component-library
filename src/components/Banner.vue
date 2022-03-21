<template>
  <div class="container_child">
    <div class="introduce"><span>简介：</span>借由theme的切换来快速获取自定义的组件，实现快速开发</div>
    <h1 :style="{color: `rgba(${themeColor.color})`}">Button
      <hr>
    </h1>
    <div class="button_browse">
      <button :style="{backgroundColor: `rgba(${themeColor.color})`}" @click="componentsSwitch='ButtonOne'">主题按钮1</button>
      <button :style="{backgroundColor: `rgba(${themeColor.color})`,borderRadius: '5px'}" @click="componentsSwitch='ButtonTwo'">主题按钮2</button>
    </div>
    <div class="button_text">
      <component :is="componentsSwitch" :themeColor="themeColor"></component>
    </div>
  </div>
</template>

<script>
import ButtonOne from '@/components/ButtonOne.vue'
import ButtonTwo from '@/components/ButtonTwo.vue'
export default {
  data () {
    return {
      componentsSwitch: 'ButtonOne'
    }
  },
  components: {
    ButtonOne,
    ButtonTwo
  },
  props: ['themeColor']
}
</script>

<style lang="less" scoped>
.container_child {
  width: 800px;
  margin: 0 auto;
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
