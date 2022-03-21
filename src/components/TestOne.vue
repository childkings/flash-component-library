<template>
 <div class="container_child">
      <div>HTML
        <hr>
      </div>
      <div :style="{backgroundColor: `rgba(${themeColor.color},.2)`}" ref="buttonTextHTML"></div>
      <div>CSS
        <hr>
      </div>
      <div :style="{backgroundColor: `rgba(${themeColor.color},.2)`}" ref="buttonTextCSS"></div>
      <div>JS
        <hr>
      </div>
      <div :style="{backgroundColor: `rgba(${themeColor.color},.2)`}" ref="buttonTextJS"></div>
 </div>
</template>

<script>
export default {
  methods: {
    componentText (obj, text) {
      obj.innerHTML = text
    }
  },
  props: ['themeColor'],
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="less" scoped>
.container_child {
  div:nth-child(odd) {
    font-size: 20px;
    user-select: none;
    hr {
      display: block;
      height: 1px;
      margin-top: 5px;
      background-color: black;
    }
  }
  div:nth-child(even) {
    display: inline-block;
    border: 2px solid rgb(193, 193, 193);
    padding: 5px 20px 5px 5px;
    margin-bottom: 20px;
    user-select:text;
    font-size: 15px;
  }
}
</style>
