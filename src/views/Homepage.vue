<template>
  <div class="container_child">
    <keep-alive>
      <router-view :bgiState="bgiState" :themeColor="themeColorInput"></router-view>
    </keep-alive>
    <div class="nav" @click="navAppear" ref="nav">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="nav_val" ref="navVal" style="left: -300px;">
      <div class="nav_head">
        <div class="nav_bgi">
          <span>动态背景</span>
          <div class="bgi_open" v-if="bgiState" @click="bgiState=!bgiState"></div>
          <div class="bgi_close" v-else @click="bgiState=!bgiState"><div :style="{backgroundColor: `rgba(${themeColorInput.color},.7)`}"></div></div>
        </div>
        <div class="navLogo" @click="navDisappear">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="nav_theme">
        <span>theme</span>
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
      themeColor: [
        { id: 1, color: '10,144,100', state: true }
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
    }
  },
  computed: {
    themeColorInput () {
      return this.themeColor.find((val) => {
        return val.state
      })
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
    background-color: rgba(246, 246, 246, 0.6);
    z-index: 2;
    box-shadow:2px 2px 10px rgb(117, 117, 117) inset;
    padding: 20px;
    .nav_head {
      display: flex;
      justify-content: space-between;
      height: 70px;
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
      .nav_bgi {
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
          height: 20px;
          border-radius: 10px;
          padding: 2px;
          background-color: white;
          cursor: pointer;
        }
        .bgi_open::after {
          content: "";
          float: right;
          height: 16px;
          width: 16px;
          border-radius: 10px;
          background-color: rgb(255, 200, 61);
        }
        .bgi_close {
          div {
            float: left;
            height: 16px;
            width: 16px;
            border-radius: 10px;
          }
        }
      }
    }
    .nav_theme {
      margin-top: 20px;
      span {
        font-weight: 700;
        user-select: none;
        font-size: 18px;
      }
    }
  }
  .music_message {
    position:fixed;
    top: 20px;
    right: 170px;
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
      right: 315px;
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
