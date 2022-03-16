<template>
  <div class="container_child" :style="{backgroundColor: `rgba(${themeColor.color},.7)`}">
    <div class="into" ref="into">
      <div class="into_top">
        <div class="into_block"></div>
        <div class="into_top_middle">
          <div></div>
          <div></div>
        </div>
        <div class="into_block"></div>
      </div>
      <div class="into_text">⚡Component</div>
      <div class="into_bottom">
        <div class="into_block"></div>
        <div class="into_bottom_middle">
          <div></div>
          <div></div>
        </div>
        <div class="into_block"></div>
      </div>
    </div>
    <div class="video_box" v-show="bgiState===true">
      <video src="../assets/【4K大片】这，就是北欧！ - 1.4KNORDIC(Av63722873,P1).mp4" muted loop @loadstart="videoStart($event)"></video>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      intoAnimationState: false
    }
  },
  methods: {
    videoStart (e) {
      e.target.currentTime = 8
      e.target.playbackRate = 3
      e.target.play()
    }
  },
  props: ['bgiState', 'themeColor']
}
</script>

<style lang="less" scoped>
@keyframes approach_one {
  from {
    transform: translateX(1200px);
  }
  to {
    transform: translateX(60px);
  }
}
@keyframes approach_two {
  from {
    transform: translateX(-1200px);
  }
  to {
    transform: translateX(-60px);
  }
}
@keyframes shake {
  from {
    transform: translate(-49%,-49%);
  }
  to {
    transform: translate(-51%,-51%);
  }
}
@keyframes shake_text {
  from {
    transform:skew(-35deg) translate(10px,10px);
  }
  to {
    transform:skew(-35deg) translate(-10px,-10px);
  }
}
.container_child {
  position: relative;
  height: 100vh;
  min-height: 900px;
  .into {
    display: flex;
    flex-direction: column;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    animation: .3s alternate infinite;
    animation-name: shake;
    cursor: pointer;
    .into_block {
      width: 305px;
      background-color: #fff;
    }
    .into_top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 15px;
      transform: translateX(60px);
      animation: approach_one 1s;
    }
    .into_top::before,.into_top::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7.5px;
    }
    .into_top::before {
      border-right-color: white;
      border-bottom-color: white;
      border-left-color: transparent;
      border-top-color: transparent;
    }
    .into_top::after {
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: white;
      border-top-color: white;
    }
    .into_bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 15px;
      transform: translateX(-60px);
      animation: approach_two 1s;
    }
    .into_bottom::before,.into_bottom::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7.5px;
    }
    .into_bottom::before {
      border-right-color: white;
      border-bottom-color: white;
      border-left-color: transparent;
      border-top-color: transparent;

    }
    .into_bottom::after {
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: white;
      border-top-color: white;
    }
    .into_text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: white;
      font-size: 70px;
      font-weight: 700;
      transform: skew(-35deg);
      letter-spacing: .1em;
      animation: shake_text .3s alternate infinite;
    }
    .into_top_middle,.into_bottom_middle {
      display: flex;
      div {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 15px;
      }
      div:first-child {
        border-top-color: white;
        border-left-color: white;
        border-bottom-color: transparent;
        border-right-color: transparent;
      }
      div:last-child {
        border-bottom-color: white;
        border-right-color: white;
        border-top-color: transparent;
        border-left-color: transparent;
      }
    }
    .into_bottom_middle {
      transform: rotate(180deg);
    }
  }
  .video_box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100vh;
    transform: translate(-50%,-50%);
    opacity: .2;
    video {
      width: 100%;
    }
  }
  // .into:hover {
  //   animation: shake 0 alternate;
  //   .into_text {
  //     animation: shake_text 0 alternate;
  //   }
  // }
}
</style>
