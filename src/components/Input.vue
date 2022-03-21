<template>
  <div class="container_child">
    <div class="introduce"><span>简介：</span>借由theme的切换来快速获取自定义的Input组件，实现快速开发</div>
    <h1 :style="{color: `rgba(${themeColor.color})`}">Input
      <hr>
    </h1>
    <div class="Input_browse">
      <input type="text" @focus="inputFocus($event)" @blur="blurFocus($event)" @click="componentsSwitch='InputOne'" placeholder="请输入" :style="{color: `rgb(${themeColor.color})`,border: 'none'}">
      <input type="text" @focus="inputFocus($event)" @blur="blurFocus($event)" @click="componentsSwitch='InputTwo'" placeholder="请输入" :style="{color: `rgb(${themeColor.color})`}">
      <input type="text" @focus="inputFocus($event)" @blur="blurFocus($event)" @click="componentsSwitch='InputThree'" placeholder="请输入" :style="{color: `rgb(${themeColor.color})`,borderRadius: '10px',border: '1px rgb(159, 159, 159) solid'}">
      <input type="text" @focus="inputFocus($event)" @blur="blurFocus($event)" @click="componentsSwitch='InputFour'" placeholder="请输入" :style="{color: `rgb(${themeColor.color})`,backgroundColor: `rgba(${themeColor.color},.2)`,border: '1px rgb(159, 159, 159) solid'}">
    </div>
    <h3 v-show="componentsSwitch === 'InputOne'">极简输入框</h3>
    <h3 v-show="componentsSwitch === 'InputTwo'">标准输入框</h3>
    <h3 v-show="componentsSwitch === 'InputThree'">圆角输入框</h3>
    <h3 v-show="componentsSwitch === 'InputFour'">背景色输入框</h3>
    <div class="button_text">
      <component :is="componentsSwitch" :themeColor="themeColor"></component>
    </div>
  </div>
</template>

<script>
import InputOne from '@/components/InputOne.vue'
import InputTwo from '@/components/InputTwo.vue'
import InputThree from '@/components/InputThree.vue'
import InputFour from '@/components/InputFour.vue'
export default {
  data () {
    return {
      componentsSwitch: 'InputFour'
    }
  },
  components: {
    InputOne,
    InputTwo,
    InputThree,
    InputFour
  },
  props: ['themeColor'],
  methods: {
    inputFocus (e) {
      e.target.style.outline = `rgba(${this.themeColor.color},.7) solid 1px`
    },
    blurFocus (e) {
      e.target.style.outline = 'none'
    }
  }
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
  .Input_browse {
    display: inline-block;
    margin: 0 50px;
    padding: 20px 0 20px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid black;
    input {
      width: 100px;
      padding: 5px;
      margin-right: 20px;
      opacity: .7;
      text-indent: .5em;
      outline: none;
    }
  }
  .button_text {
    padding:40px 0 50px 50px;
  }
}
</style>
