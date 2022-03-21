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
  data () {
    return {
      target: 'target'
    }
  },
  methods: {
    componentText (obj, text) {
      obj.innerHTML = text
    }
  },
  props: ['themeColor'],
  mounted () {
    this.componentText(this.$refs.buttonTextHTML, `<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>&lt;button<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>:style="{backgroundColor: rgba(${this.themeColor.color}),transform: 'scale(1)'}"<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@mousedown="animationButtonSmall($event,.9)"<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@mouseup="animationButtonBig($event,1)"><br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>动态按钮<br><span style="user-select: none">6&nbsp;&nbsp;&nbsp;</span>&lt;/button>`)
    this.componentText(this.$refs.buttonTextCSS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>button {<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>width: 100px;<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>height: 40px;<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>border: 0;<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>color: white;<br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>font-weight: 700;<br><span style="user-select: none;">7&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>opacity: .7;<br><span style="user-select: none">8&nbsp;&nbsp;&nbsp;</span>}')
    this.componentText(this.$refs.buttonTextJS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>data () {<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>return {<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>timer: null,<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>showDistance: null<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span>},<br><span style="user-select: none">7&nbsp;&nbsp;&nbsp;</span>methods: {<br><span style="user-select: none;">9&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>animationButtonSmall (e, target) {<br><span style="user-select: none;">10&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.componentsSwitch = "ButtonThree"<br><span style="user-select: none;">11&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance = 1<br><span style="user-select: none;">12&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">13&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.timer = setInterval(() => {<br><span style="user-select: none;">14&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (e.target.style.transform === `scale(${target})`) {<br><span style="user-select: none;">15&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">16&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {<br><span style="user-select: none;">17&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance -= 0.01<br><span style="user-select: none;">18&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>e.target.style.transform = `scale(${this.showDistance})`<br><span style="user-select: none;">19&nbsp;</span>&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">20&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}, 10)<br><span style="user-select: none;">21&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>},<br><span style="user-select: none;">22&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>animationButtonBig (e, target) {<br><span style="user-select: none;">23&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance = 0.9<br><span style="user-select: none;">24&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">25&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.timer = setInterval(() => {<br><span style="user-select: none;">26&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (e.target.style.transform === `scale(${target})`) {<br><span style="user-select: none;">27&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">28&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {<br><span style="user-select: none;">29&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance += 0.01<br><span style="user-select: none;">30&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>e.target.style.transform = `scale(${this.showDistance})`<br><span style="user-select: none;">31&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">32&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}, 10)<br><span style="user-select: none;">33&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">34&nbsp;</span>}')
  },
  updated () {
    this.componentText(this.$refs.buttonTextHTML, `<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>&lt;button<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>:style="{backgroundColor: rgba(${this.themeColor.color}),transform: 'scale(1)'}"<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@mousedown="animationButtonSmall($event,.9)"<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>@mouseup="animationButtonBig($event,1)"><br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>动态按钮<br><span style="user-select: none">6&nbsp;&nbsp;&nbsp;</span>&lt;/button>`)
    this.componentText(this.$refs.buttonTextCSS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>button {<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>width: 100px;<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>height: 40px;<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>border: 0;<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>color: white;<br><span style="user-select: none;">7&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>font-weight: 700;<br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>opacity: .7;<br><span style="user-select: none">8&nbsp;&nbsp;&nbsp;</span>}')
    this.componentText(this.$refs.buttonTextJS, '<span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>data () {<br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>return {<br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>timer: null,<br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>showDistance: null<br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span>},<br><span style="user-select: none">7&nbsp;&nbsp;&nbsp;</span>methods: {<br><span style="user-select: none;">9&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>animationButtonSmall (e, target) {<br><span style="user-select: none;">10&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.componentsSwitch = "ButtonThree"<br><span style="user-select: none;">11&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance = 1<br><span style="user-select: none;">12&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">13&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.timer = setInterval(() => {<br><span style="user-select: none;">14&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (e.target.style.transform === "scale($ {target})") {<br><span style="user-select: none;">15&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">16&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {<br><span style="user-select: none;">17&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance -= 0.01<br><span style="user-select: none;">18&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>e.target.style.transform = "scale($ {this.showDistance})"<br><span style="user-select: none;">19&nbsp;</span>&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">20&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}, 10)<br><span style="user-select: none;">21&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>},<br><span style="user-select: none;">22&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>animationButtonBig (e, target) {<br><span style="user-select: none;">23&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance = 0.9<br><span style="user-select: none;">24&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">25&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.timer = setInterval(() => {<br><span style="user-select: none;">26&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (e.target.style.transform === "scale($ {target})") {<br><span style="user-select: none;">27&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)<br><span style="user-select: none;">28&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {<br><span style="user-select: none;">29&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showDistance += 0.01<br><span style="user-select: none;">30&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>e.target.style.transform = "scale($ {this.showDistance})"<br><span style="user-select: none;">31&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">32&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}, 10)<br><span style="user-select: none;">33&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}<br><span style="user-select: none;">34&nbsp;</span>}')
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
