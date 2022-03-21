<template>
 <div class="container_child" style="width: 100%">
      <div>HTML
        <hr>
      </div>
      <div :style="{backgroundColor: `rgba(${themeColor.color},.2)`}" ref="buttonTextHTML"></div>
      <div style="width: 100%">CSS
        <hr style="width: 100%">
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
    this.componentText(this.$refs.buttonTextHTML, `
    <span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>&lt;div class="banner" ref="banner">
    <br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>&lt;div class="banner_box" :style="{width: bannerWidth}" ref="bannerBox">
    <br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&lt;div class="banner_individual" v-for="item in list" :key="item.id"><a :href="item.href" :style="{width: bannerIndividualWidth}">{{item.id}}</a>&lt;/div>
    <br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>&lt;/div>
    <br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>&lt;div class="banner_before" :style="{backgroundColor: \`rgba(${this.themeColor.color},.5)\`}" @click="prevBanner">&lt;/div>
    <br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>&lt;div class="banner_after" :style="{backgroundColor: \`rgba(${this.themeColor.color},.5)\`}" @click="nextBanner">&lt;/div>
    <br><span style="user-select: none">7&nbsp;&nbsp;&nbsp;</span>&lt;/div>
    `)
    this.componentText(this.$refs.buttonTextCSS, `
    <span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>.banner {
    <br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>position: relative;
    <br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>width: 100%;
    <br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>height: 100%;
    <br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>overflow: hidden;
    <br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>.banner_before {
    <br><span style="user-select: none;">7&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>left: 0;
    <br><span style="user-select: none;">8&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">9&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>.banner_before,.banner_after {
    <br><span style="user-select: none;">10&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>content: "";
    <br><span style="user-select: none;">11&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>width: 25px;
    <br><span style="user-select: none;">12&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>height: 40px;
    <br><span style="user-select: none;">13&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>background-color: black;
    <br><span style="user-select: none;">14&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>position: absolute;
    <br><span style="user-select: none;">15&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>top: 50%;
    <br><span style="user-select: none;">16&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>transform: translateY(-50%);
    <br><span style="user-select: none;">17&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>cursor: pointer;
    <br><span style="user-select: none;">18&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">19&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>.banner_box {
    <br><span style="user-select: none;">20&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>position:absolute;
    <br><span style="user-select: none;">21&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>top: 0;
    <br><span style="user-select: none;">22&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>left: 0;
    <br><span style="user-select: none;">23&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>width: 100%;
    <br><span style="user-select: none;">24&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>height: 100%;
    <br><span style="user-select: none;">25&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>.banner_individual {
    <br><span style="user-select: none;">26&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>float: left;
    <br><span style="user-select: none;">27&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>height: 100%;
    <br><span style="user-select: none;">28&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>a {
    <br><span style="user-select: none;">29&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>display: flex;
    <br><span style="user-select: none;">30&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>justify-content: center;
    <br><span style="user-select: none;">31&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>align-items: center;
    <br><span style="user-select: none;">32&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>width: 100%;
    <br><span style="user-select: none;">33&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>height: 100%;
    <br><span style="user-select: none;">34&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>font-size: 100px;
    <br><span style="user-select: none;">35&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>color: black;
    <br><span style="user-select: none;">36&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">37&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">38&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">39&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>.banner_after {
    <br><span style="user-select: none;">40&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>right: 0;
    <br><span style="user-select: none;">41&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none">42&nbsp;</span>}`)
    this.componentText(this.$refs.buttonTextJS, `
    <span style="user-select: none">1&nbsp;&nbsp;&nbsp;</span>data () {
    <br><span style="user-select: none;">2&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>return {
    <br><span style="user-select: none;">3&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>componentsSwitch: 'BannerOne',
    <br><span style="user-select: none;">4&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>list: [
    <br><span style="user-select: none;">5&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{ id: 1, href: 'javascript:;' },
    <br><span style="user-select: none;">6&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{ id: 2, href: 'javascript:;' },
    <br><span style="user-select: none;">7&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{ id: 3, href: 'javascript:;' },
    <br><span style="user-select: none;">8&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{ id: 4, href: 'javascript:;' }
    <br><span style="user-select: none;">9&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>],
    <br><span style="user-select: none;">11&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>bannerWidth: null,
    <br><span style="user-select: none;">12&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>bannerIndividualWidth: null,
    <br><span style="user-select: none;">13&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>showPosition: 0,
    <br><span style="user-select: none;">14&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>timer: null
    <br><span style="user-select: none;">15&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none">16&nbsp;</span>},
    <br><span style="user-select: none">17&nbsp;</span>methods: {
    <br><span style="user-select: none;">18&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>nextBanner () {
    <br><span style="user-select: none;">19&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showPosition += 1
    <br><span style="user-select: none;">20&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (this.showPosition === this.list.length) {
    <br><span style="user-select: none;">21&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showPosition = 0
    <br><span style="user-select: none;">22&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.$refs.bannerBox.style.left = 0 + 'px'
    <br><span style="user-select: none;">23&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {
    <br><span style="user-select: none;">24&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.bannerAnimation('add')
    <br><span style="user-select: none;">25&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">26&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>},
    <br><span style="user-select: none;">27&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>prevBanner () {
    <br><span style="user-select: none;">28&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showPosition -= 1
    <br><span style="user-select: none;">29&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (this.showPosition < 0) {
    <br><span style="user-select: none;">30&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.showPosition = this.list.length - 1
    <br><span style="user-select: none;">31&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.$refs.bannerBox.style.left = (0 - this.showPosition * this.$refs.banner.offsetWidth) + 'px'
    <br><span style="user-select: none;">32&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {
    <br><span style="user-select: none;">33&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.bannerAnimation('reduce')
    <br><span style="user-select: none;">34&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">35&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>},
    <br><span style="user-select: none;">36&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>bannerAnimation (state) {
    <br><span style="user-select: none;">37&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)
    <br><span style="user-select: none;">38&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.timer = setInterval(() => {
    <br><span style="user-select: none;">39&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (Math.abs(this.$refs.bannerBox.offsetLeft) === this.showPosition * this.$refs.banner.offsetWidth) {
    <br><span style="user-select: none;">40&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>clearInterval(this.timer)
    <br><span style="user-select: none;">41&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {
    <br><span style="user-select: none;">42&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>if (state === 'add') {
    <br><span style="user-select: none;">43&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>const step = this.$refs.banner.offsetWidth / 10
    <br><span style="user-select: none;">44&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.$refs.bannerBox.style.left = this.$refs.bannerBox.offsetLeft - step + 'px'
    <br><span style="user-select: none;">45&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>} else {
    <br><span style="user-select: none;">46&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>const step = this.$refs.banner.offsetWidth / 10
    <br><span style="user-select: none;">47&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>this.$refs.bannerBox.style.left = this.$refs.bannerBox.offsetLeft + step + 'px'
    <br><span style="user-select: none;">48&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">49&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none;">50&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}, 15)
    <br><span style="user-select: none;">51&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>}
    <br><span style="user-select: none">52&nbsp;</span>},
    <br><span style="user-select: none">53&nbsp;</span>mounted () {
    <br><span style="user-select: none;">54&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>this.bannerIndividualWidth = this.$refs.banner.offsetWidth + 'px'
    <br><span style="user-select: none;">55&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span>this.bannerWidth = this.$refs.banner.offsetWidth * this.list.length + 'px'
    <br><span style="user-select: none">56&nbsp;</span>}
    `)
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
