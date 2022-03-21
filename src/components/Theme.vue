<template>
  <div class="container_child">
    <div class="nav_theme_box">
      <div v-for="val in themeColor" :key="val.id" :style="{backgroundColor: `rgba(${val.color},.7`,borderWidth:selectBorderWidth(val.state),borderColor: selectBorderColor(val.state) }" @click="$emit('selectTheme',val.id)"></div>
    </div>
    <div class="add_model">
      <div class="input_box">
        <input type="text" class="inputVal" @change="fromTest($event)" value="0"><span>,</span><input type="text" class="inputVal" @change="fromTest($event)" value="0"><span>,</span><input type="text" class="inputVal" @change="fromTest($event)" value="0">
      </div>
      <div class="theme_add" @click="themeAdd()">add</div>
      <div class="browse" ref="browse" style="backgroundColor: white" @mouseover="enlarge($event)" @mouseout="narrow($event)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showRGB: '0,0,0'
    }
  },
  props: ['themeColor'],
  methods: {
    selectBorderWidth (val) {
      if (val) {
        return '6px'
      } else {
        return '2px'
      }
    },
    selectBorderColor (val) {
      if (val) {
        return 'rgb(255, 200, 61)'
      } else {
        return 'white'
      }
    },
    showThemeChange () {
      let temp = ''
      for (let i = 0; i < document.querySelectorAll('.inputVal').length; i++) {
        if (i === document.querySelectorAll('.inputVal').length - 1) {
          temp += document.querySelectorAll('.inputVal')[i].value
        } else {
          temp += document.querySelectorAll('.inputVal')[i].value + ','
        }
      }
      this.showRGB = temp
      return temp
    },
    fromTest (e) {
      const testStandard = /^[1-9]{1}/
      if (testStandard.test(e.target.value) && e.target.value <= 256) {
      } else {
        e.target.value = 0
      }
      this.showThemeChange()
    },
    themeAdd () {
      const temp = this.showThemeChange()
      this.$emit('themeAdd', temp)
    },
    showBrowse () {
      this.showThemeChange()
    },
    showBrowseBgc () {
      this.$refs.browse.style.backgroundColor = `rgba(${this.showRGB},.7)`
    },
    enlarge (e) {
      e.target.style.transform = 'scale(1.5)'
    },
    narrow (e) {
      e.target.style.transform = 'scale(1)'
    }
  },
  watch: {
    showRGB (newVal) {
      this.showBrowseBgc()
    }
  },
  mounted () {
    this.showBrowseBgc()
  }
}
</script>

<style lang="less" scoped>
.container_child {
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
  .add_model {
    display: flex;
    justify-content: right;
    align-items: flex-end;
    margin: 5px 6px 0 0;
    .theme_add {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 24px;
      padding: 2px 0;
      margin:0 10px 0 0;
      background-color: rgb(255, 200, 61);
      color: white;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      cursor: pointer;
    }
    .input_box {
      display: flex;
      align-items: flex-end;
      background-color: #fff;
      border: 2px solid rgb(255, 200, 61);
      input {
        width: 30px;
        border: none;
        text-align: center;
        outline: none;
      }
    }
    .browse {
      height: 30px;
      width: 30px;
      border: 2px solid rgb(255, 200, 61);
    }
  }
}
</style>
