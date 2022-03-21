<template>
 <div class="container_child">
   <div class="header" :style="{backgroundColor: `rgba(${themeColor.color},.7)`,borderColor: `rgba(${themeColor.color},.7)`}"></div>
   <div class="components">
     <div class="component_switch">
       <div class="component_father" v-for="val in components" :key="val.id">
         <span>{{val.name}}</span>
         <div class="component_son">
           <div v-for="item in val.children" :key="item.id" @click="componentSelect(val.id,item.id,item.src)"><a :style="{color: selectFontColor(item.state),fontWeight: selectFontWeight(item.state)}">{{item.name}}</a></div>
         </div>
       </div>
     </div>
     <div class="component_container">
       <router-view :themeColor="showTheme"></router-view>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      components: [
        {
          id: 1,
          name: '常规组件',
          children: [
            { id: 1, name: 'button', state: true, src: '/homepage/componentSubject/button' }
          ],
          state: true
        },
        {
          id: 2,
          name: '动画组件',
          children: [
            { id: 1, name: 'banner', state: false, src: '/homepage/componentSubject/banner' }
          ],
          state: true
        },
        {
          id: 3,
          name: '测试模块',
          children: [
            { id: 1, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 2, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 3, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 4, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 5, name: 'test', state: false, src: '/homepage/componentSubject/test' }
          ],
          state: true
        },
        {
          id: 4,
          name: '测试模块',
          children: [
            { id: 1, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 2, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 3, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 4, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 5, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 6, name: 'test', state: false, src: '/homepage/componentSubject/test' }
          ],
          state: true
        },
        {
          id: 5,
          name: '测试模块',
          children: [
            { id: 1, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 2, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 3, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 4, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 5, name: 'test', state: false, src: '/homepage/componentSubject/test' },
            { id: 6, name: 'test', state: false, src: '/homepage/componentSubject/test' }
          ],
          state: true
        }
      ]
    }
  },
  props: ['themeColor'],
  methods: {
    selectFontColor (val) {
      if (val) {
        return `rgb(${this.themeColor.color})`
      } else {
        return 'black'
      }
    },
    selectFontWeight (val) {
      if (val) {
        return 700
      } else {
        return 400
      }
    },
    componentSelect (outputVal, outputItem, src) {
      this.components.forEach((val) => {
        if (val.id === outputVal) {
          val.children.forEach((item) => {
            if (item.id === outputItem) {
              item.state = true
            } else {
              item.state = false
            }
          })
        } else {
          val.children.forEach((item) => {
            item.state = false
          })
        }
      })
      this.$router.push(src)
    }
  },
  computed: {
    showTheme () {
      return this.themeColor
    }
  }
}
</script>

<style lang="less" scoped>
.container_child {
  .header {
    height: 90px;
    background-color: rgb(200, 200, 200);
    border-bottom: 10px solid;
  }
  .components {
    display: flex;
    .component_switch {
      width: 16%;
      height: 92vh;
      padding: 20px 15px;
      overflow: scroll;
      .component_father {
        margin-bottom: 20px;
        user-select: none;
        >span {
          display: block;
          margin: 5px 0;
          font-size: 20px;
          font-weight: 700;
        }
        .component_son {
          >div {
            margin-top: 10px;
            font-size: 17px;
            text-indent: 1em;
            cursor: pointer;
            a {
              width: 100%;
              height: 100%;
            }
          }
          >div:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .component_container {
      height: 92vh;
      overflow: scroll;
      width: 100%;
      padding: 20px;
      background-color: rgb(248, 248, 248);
    }
  }
}
</style>
