<template>
  <div class="container_child">
    <h1 :style="{color: `rgba(${themeColor.color})`}">Test</h1>
    <div class="button_browse"></div>
  </div>
</template>

<script>
export default {
  props: ['themeColor']
}
</script>

<style lang="less" scoped>
.container_child {
  h1 {
    font-weight: 700;
  }
}
</style>
