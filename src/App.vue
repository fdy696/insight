<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import '//at.alicdn.com/t/font_854342_9vycsnvn2ft.css';
* {
  box-sizing: border-box;
}
html,body,#app {
  height: 100%;
}
#app {
  background: #FAFAFA;
  color: #9B9B9B;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
