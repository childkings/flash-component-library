<template>
 <div class="container_child"  style="width: 100%">
      <div>HTML
        <hr>
      </div>
      <div :style="{backgroundColor: `rgba(${themeColor.color},.2)`}" ref="buttonTextHTML"></div>
      <div  style="width: 100%">CSS
        <hr  style="width: 100%">
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
    this.componentText(this.$refs.buttonTextHTML, `<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>&lt;input type="text"<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@focus="inputFocus($event)"<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@blur="blurFocus($event)"<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>placeholder="请输入"<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>:style="{color: \`rgb(${this.themeColor.color})\`}"<br><span style="user-select: none">6&nbsp;&nbsp;&nbsp;</span>>`)
    this.componentText(this.$refs.buttonTextCSS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>input {<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>width: 100px;<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>padding: 5px;<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>margin-right: 20px;<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>border: none;<br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>opacity: .7;<br><span style="user-select: none;">7&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>text-indent: .5em;<br><span style="user-select: none">8&nbsp;&nbsp;&nbsp;</span>}')
    this.componentText(this.$refs.buttonTextJS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>inputFocus (e) {<br><span style="user-select: none;">1&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>e.target.style.outline = `rgba(${this.themeColor.color},.7) solid 1px`<br><span style="user-select: none">2&nbsp;&nbsp;&nbsp;</span>},<br><span style="user-select: none">3&nbsp;&nbsp;&nbsp;</span>blurFocus (e) {<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>e.target.style.outline = "none"<br><span style="user-select: none">5&nbsp;&nbsp;&nbsp;</span>}')
  },
  updated () {
    this.componentText(this.$refs.buttonTextHTML, `<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>&lt;input type="text"<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@focus="inputFocus($event)"<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@blur="blurFocus($event)"<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>placeholder="请输入"<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>:style="{color: \`rgb(${this.themeColor.color})\`}"<br><span style="user-select: none">6&nbsp;&nbsp;&nbsp;</span>>`)
    this.componentText(this.$refs.buttonTextCSS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>input {<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>width: 100px;<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>padding: 5px;<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>margin-right: 20px;<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>border: none;<br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>opacity: .7;<br><span style="user-select: none;">7&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>text-indent: .5em;<br><span style="user-select: none">8&nbsp;&nbsp;&nbsp;</span>}')
    this.componentText(this.$refs.buttonTextJS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>inputFocus (e) {<br><span style="user-select: none;">1&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>e.target.style.outline = `rgba(${this.themeColor.color},.7) solid 1px`<br><span style="user-select: none">2&nbsp;&nbsp;&nbsp;</span>},<br><span style="user-select: none">3&nbsp;&nbsp;&nbsp;</span>blurFocus (e) {<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>e.target.style.outline = "none"<br><span style="user-select: none">5&nbsp;&nbsp;&nbsp;</span>}')
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
