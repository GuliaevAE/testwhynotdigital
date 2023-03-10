

<template>
  <div class="App">
    <Menu />
  </div>
</template>
<script lang="ts">
import Menu from "./components/menu.vue";
export default {
  components: { Menu }
};
</script>

<style lang="scss">
@font-face {
  font-family: tele2;
  src: url(./assets/tele2_textsans-regular.woff);
}
.App{
  font-family: tele2;
  font-size: 14px;
  font-weight: 400;
}
</style>
