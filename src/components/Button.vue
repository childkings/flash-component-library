<template>
  <div class="container_child">
    <div class="introduce"><span>简介：</span>借由theme的切换来快速获取自定义的Button组件，实现快速开发</div>
    <h1 :style="{color: `rgba(${themeColor.color})`}">Button
      <hr>
    </h1>
    <div class="button_browse">
      <button :style="{backgroundColor: `rgba(${themeColor.color})`}" @click="componentsSwitch='ButtonOne'">简约按钮</button>
      <button :style="{backgroundColor: `rgba(${themeColor.color})`,borderRadius: '5px'}" @click="componentsSwitch='ButtonTwo'">圆角按钮</button>
      <button
        :style="{backgroundColor: `rgba(${themeColor.color})`,transform: 'scale(1)'}"
        @mousedown="animationButtonSmall($event,.9)"
        @mouseup="animationButtonBig($event,1)">
        动态按钮
      </button>
    </div>
    <h3 v-show="componentsSwitch==='ButtonOne'">简约按钮
    </h3>
    <h3 v-show="componentsSwitch==='ButtonTwo'">圆角按钮
    </h3>
    <h3 v-show="componentsSwitch==='ButtonThree'">动态按钮
    </h3>
    <div class="button_text">
      <component :is="componentsSwitch" :themeColor="themeColor"></component>
    </div>
  </div>
</template>

<script>
import ButtonOne from '@/components/ButtonOne.vue'
import ButtonTwo from '@/components/ButtonTwo.vue'
import ButtonThree from '@/components/ButtonThree.vue'
export default {
  data () {
    return {
      componentsSwitch: 'ButtonThree',
      timer: null,
      showDistance: null
    }
  },
  components: {
    ButtonOne,
    ButtonTwo,
    ButtonThree
  },
  props: ['themeColor'],
  methods: {
    animationButtonSmall (e, target) {
      this.componentsSwitch = 'ButtonThree'
      this.showDistance = 1
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (e.target.style.transform === `scale(${target})`) {
          clearInterval(this.timer)
        } else {
          this.showDistance -= 0.01
          e.target.style.transform = `scale(${this.showDistance})`
        }
      }, 10)
    },
    animationButtonBig (e, target) {
      this.showDistance = 0.9
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (e.target.style.transform === `scale(${target})`) {
          clearInterval(this.timer)
        } else {
          this.showDistance += 0.01
          e.target.style.transform = `scale(${this.showDistance})`
        }
      }, 10)
    }
  }
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
  h3 {
    padding: 30px 50px 0 50px;
    user-select: none;
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
    padding:40px 0 50px 50px;
  }
}
</style>
