<template>
  <div class="container_child">
    <keep-alive>
      <router-view :bgiState="bgiState" :bgiBlurState="bgiBlurOutput" :themeColor="themeColorOutput"></router-view>
    </keep-alive>
    <div class="nav" @click="navAppear" ref="nav">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="nav_val" ref="navVal" style="left: -300px;">
      <div class="nav_head">
        <div class="nav_bgi_switch">
          <div class="nav_bgi">
            <span>动态背景</span>
            <div class="bgi_open" v-if="bgiState" @click="bgiState=!bgiState"></div>
            <div class="bgi_close" v-else @click="bgiState=!bgiState"><div :style="{backgroundColor: `rgb(${themeColorOutput.color})`}"></div></div>
          </div>
          <div class="nav_bgi_blur">
            <span>背景模糊</span>
            <div class="bgi_open" v-if="bgiBlurState" @click="bgiBlurState=!bgiBlurState"></div>
            <div class="bgi_close" v-else @click="bgiBlurState=!bgiBlurState"><div :style="{backgroundColor: `rgb(${themeColorOutput.color})`}"></div></div>
          </div>
        </div>
        <div class="navLogo" @click="navDisappear">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="nav_theme">
        <span>theme</span>
        <div class="nav_theme_box">
          <div v-for="val in themeColor" :key="val.id" :style="{backgroundColor: `rgba(${val.color},.7`,borderWidth:selectBorder(val.state) }" @click="selectTheme(val.id)"></div>
        </div>
      </div>
    </div>
    <audio src="https://music.163.com/song/media/outer/url?id=557812549.mp3" ref="audioPlay" autoplay loop></audio>
    <div class="music_message">
      <div class="music_control">
        <span class="glyphicon glyphicon-pause" v-if="musicState" @click="musicSwitch"></span>
        <span class="glyphicon glyphicon-play" v-else @click="musicSwitch"></span>
      </div>
      <div class="music_name"><span ref="musicName">Without You × A Sky Full Of Stars × Pizza (Mashup)</span></div>
    </div>
    <div class="tips" @click="tipsSwitch" ref="tips">
      <div class="tips_one" v-if="tipsState === 0">点此加载音乐</div>
      <div class="tips_two" v-if="tipsState === 1">点此选择页面样式</div>
      <div class="tips_three" v-if="tipsState === 2">点此进入组件库</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      musicState: false,
      tipsState: 0,
      bgiState: true,
      bgiBlurState: true,
      themeColor: [
        { id: 1, color: '10,100,100', state: false },
        { id: 2, color: '0,0,0', state: false },
        { id: 3, color: '5,22,100', state: false },
        { id: 4, color: '20,50,70', state: false },
        { id: 5, color: '100,78,100', state: false },
        { id: 6, color: '50,78,100', state: false },
        { id: 7, color: '20,21,50', state: false },
        { id: 8, color: '40,82,100', state: false },
        { id: 9, color: '90,81,130', state: false },
        { id: 10, color: '87,30,20', state: false },
        { id: 11, color: '0,20,20', state: true },
        { id: 12, color: '180,80,50', state: false },
        { id: 13, color: '90,74,70', state: false },
        { id: 14, color: '40,80,50', state: false },
        { id: 15, color: '80,120,100', state: false }
      ]
    }
  },
  methods: {
    playAudio () {
      document.querySelector('audio').volume = 0.1
    },
    musicSwitch () {
      this.musicState = !this.musicState
      if (this.musicState) {
        this.$refs.audioPlay.play()
      } else {
        this.$refs.audioPlay.pause()
      }
    },
    tipsSwitch () {
      this.tipsState++
      if (this.tipsState === 3) {
        this.$refs.tips.style.display = 'none'
      }
    },
    navAppear () {
      this.$refs.nav.style.display = 'none'
      this.navAnimation(this.$refs.navVal, 0)
    },
    navDisappear () {
      this.navAnimation(this.$refs.navVal, -300)
      setTimeout(() => {
        this.$refs.nav.style.display = 'flex'
      }, 88)
    },
    navAnimation (obj, target) {
      clearInterval(obj.timer)
      let steep = null
      if (target >= 0) {
        steep = 50
      } else {
        steep = -50
      }
      obj.timer = setInterval(() => {
        obj.style.left = obj.offsetLeft + steep + 'px'
        if (obj.offsetLeft === target) {
          clearInterval(obj.timer)
        }
      }, 20)
    },
    selectBorder (val) {
      if (val) {
        return '6px'
      } else {
        return '2px'
      }
    },
    selectTheme (inputId) {
      this.themeColor.forEach((val) => {
        if (val.id === inputId) {
          val.state = true
        } else {
          val.state = false
        }
      })
    }
  },
  computed: {
    themeColorOutput () {
      return this.themeColor.find((val) => {
        return val.state
      })
    },
    bgiBlurOutput () {
      return this.bgiBlurState
    }
  },
  mounted () {
    this.playAudio()
  }
}
</script>

<style lang="less" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes scrollText {
  to {
    left: -201px;
  }
}
.container_child {
  .nav {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 50px;
    cursor: pointer;
    z-index: 2;
    div {
      width: 100%;
      height: 10px;
      border-radius: 4px;
      background-color: #fff;
    }
  }
  .nav_val {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 300px;
    z-index: 2;
    box-shadow: 2px 2px 10px rgb(117, 117, 117) inset;
    .nav_head {
      display: flex;
      justify-content: space-between;
      height: 90px;
      padding: 20px;
      padding-bottom: 40px;
      background-color: rgba(246, 246, 246, .7);
      .navLogo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40px;
        height: 50px;
        padding: 5px 0;
        border-radius: 4px;
        cursor: pointer;
        div {
          width: 100%;
          height: 10px;
          border-radius: 4px;
          background-color: white;
        }
      }
      .nav_bgi,.nav_bgi_blur {
        display: flex;
        margin-top: 5px;
        span {
          user-select: none;
          white-space: nowrap;
          font-weight: 700;
          margin-right: 5px;
        }
        .bgi_open,.bgi_close {
          width: 35px;
          height: 18px;
          border-radius: 10px;
          padding: 2px;
          background-color: white;
          cursor: pointer;
        }
        .bgi_open::after {
          content: "";
          float: right;
          height: 14px;
          width: 14px;
          border-radius: 10px;
          background-color: rgb(255, 200, 61);
        }
        .bgi_close {
          div {
            float: left;
            height: 14px;
            width: 14px;
            border-radius: 10px;
            opacity: .4;
          }
        }
      }
      .nav_bgi_blur {
        margin-top:5px;
      }
    }
    .nav_theme {
      padding:10px 20px 20px 20px;
      background-color: rgba(246, 246, 246, 1);
      span {
        display: block;
        font-weight: 700;
        user-select: none;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .nav_theme_box {
        display: flex;
        flex-wrap: wrap;
        div {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin:0 6px 5px;
          border: 4px solid white;
          cursor: pointer;
        }
      }
    }
  }
  .music_message {
    position:fixed;
    top: 20px;
    right: 10%;
    display: flex;
    align-items: center;
    .music_control {
      width: 40px;
      height: 40px;
      cursor: pointer;
      span {
        display: flex;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: 3px solid white;
        border-radius: 20px;
        color: rgb(255, 200, 61);
        font-size: 18px;
        line-height: 34px;
        text-align: center;
      }
      span::before {
        display: flex;
        transform: translate(1px);
      }
      .glyphicon-pause {
        animation: rotate 5s infinite linear;
      }
    }
    .music_name {
      position: relative;
      width: 120px;
      height: 20px;
      margin-left: 10px;
      overflow: hidden;
      color: white;
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        white-space: nowrap;
        user-select: none;
        animation: scrollText 15s infinite linear;
      }
    }
  }
  .tips {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    min-height: 900px;
    z-index: 2;
    background-color: rgba(0,0,0, .7);
    font-size: 18px;
    div {
      user-select: none;
    }
    .tips_one {
      position: fixed;
      top: 70px;
      right: 17.5%;
      height: 50px;
      padding: 0 15px;
      background-color: #fff;
      opacity: 1;
      font-weight: 700;
      text-align: center;
      line-height: 50px;
    }
    .tips_one::after {
      content: "";
      position: absolute;
      top: -10px;
      right: 0;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: transparent transparent white transparent;
    }
    .tips_two {
      position: fixed;
      top: 75px;
      left: 40px;
      padding: 0 15px;
      height: 50px;
      background-color: #fff;
      opacity: 1;
      font-weight: 700;
      text-align: center;
      line-height: 50px;
    }
    .tips_two::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 0;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: transparent transparent white transparent;
    }
    .tips_three {
      position: fixed;
      top: 25%;
      left: 53%;
      padding: 0 15px;
      height: 50px;
      background-color: #fff;
      opacity: 1;
      font-weight: 700;
      text-align: center;
      line-height: 50px;
    }
    .tips_three::before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: white transparent transparent transparent;
    }
  }
}
</style>
