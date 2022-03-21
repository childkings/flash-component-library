<template>
  <div class="container_child">
    <div class="introduce"><span>简介：</span>借由theme的切换来快速获取自定义的Banner组件，实现快速开发</div>
    <h1 :style="{color: `rgba(${themeColor.color})`}">Banner
      <hr>
    </h1>
    <div class="button_browse">
      <div class="banner" ref="banner">
        <div class="banner_box" :style="{width: bannerWidth}" ref="bannerBox">
          <div class="banner_individual" v-for="item in list" :key="item.id"><a :href="item.href" :style="{width: bannerIndividualWidth}">{{item.id}}</a></div>
        </div>
        <div class="banner_before" :style="{backgroundColor: `rgba(${themeColor.color},.5)`}" @click="prevBanner"></div>
        <div class="banner_after" :style="{backgroundColor: `rgba(${themeColor.color},.5)`}" @click="nextBanner"></div>
      </div>
    </div>
    <h3>基本Banner</h3>
    <div class="button_text">
      <component :is="componentsSwitch" :themeColor="themeColor"></component>
    </div>
  </div>
</template>

<script>
import BannerOne from '@/components/BannerOne.vue'
export default {
  data () {
    return {
      componentsSwitch: 'BannerOne',
      list: [
        { id: 1, href: 'javascript:;' },
        { id: 2, href: 'javascript:;' },
        { id: 3, href: 'javascript:;' },
        { id: 4, href: 'javascript:;' }
      ],
      bannerWidth: null,
      bannerIndividualWidth: null,
      showPosition: 0,
      timer: null
    }
  },
  components: {
    BannerOne
  },
  props: ['themeColor'],
  methods: {
    nextBanner () {
      this.showPosition += 1
      if (this.showPosition === this.list.length) {
        this.showPosition = 0
        this.$refs.bannerBox.style.left = 0 + 'px'
      } else {
        this.bannerAnimation('add')
      }
    },
    prevBanner () {
      this.showPosition -= 1
      if (this.showPosition < 0) {
        this.showPosition = this.list.length - 1
        this.$refs.bannerBox.style.left = (0 - this.showPosition * this.$refs.banner.offsetWidth) + 'px'
      } else {
        this.bannerAnimation('reduce')
      }
    },
    bannerAnimation (state) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (Math.abs(this.$refs.bannerBox.offsetLeft) === this.showPosition * this.$refs.banner.offsetWidth) {
          clearInterval(this.timer)
        } else {
          if (state === 'add') {
            const step = this.$refs.banner.offsetWidth / 10
            this.$refs.bannerBox.style.left = this.$refs.bannerBox.offsetLeft - step + 'px'
          } else {
            const step = this.$refs.banner.offsetWidth / 10
            this.$refs.bannerBox.style.left = this.$refs.bannerBox.offsetLeft + step + 'px'
          }
        }
      }, 15)
    }
  },
  mounted () {
    this.bannerIndividualWidth = this.$refs.banner.offsetWidth + 'px'
    this.bannerWidth = this.$refs.banner.offsetWidth * this.list.length + 'px'
  }
}
</script>

<style lang="less" scoped>
.container_child {
  display: flex;
  flex-direction: column;
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
    padding: 30px 50px 0px 50px;
    user-select: none;
  }
  .button_browse {
    display: inline-block;
    width: 702px;
    height: 400px;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 1px solid black;
    .banner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .banner_before {
        left: 0;
      }
      .banner_before,.banner_after {
        content: "";
        width: 25px;
        height: 40px;
        background-color: black;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .banner_box {
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .banner_individual {
          float: left;
          height: 100%;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font-size: 100px;
            color: black;
          }
          a:hover {
            text-decoration: none;
          }
        }
      }
      .banner_after {
        right: 0;
      }
    }
  }
  .button_text {
    padding:40px 0 50px 50px;
  }
}
</style>
