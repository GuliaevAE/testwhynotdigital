<template>
  <div class="menu">
    <img class="menu_logo" src="../assets/logo.svg" alt="logo" />
    <div class="menu_info">
      <div class="menu_info_location">
        <img src="../assets/location.svg" alt="location" />
        <span>Москва и область</span>
      </div>

      <div class="notification-box">
        <span class="notification-count"></span>
        <div class="notification-bell">
          <span class="bell-top"></span>
          <span class="bell-middle"></span>
          <span class="bell-bottom"></span>
          <span class="bell-rad"></span>
        </div>
      </div>

      <img
        class="menu_info_button"
        @click="isOpen=!isOpen"
        v-if="!isOpen"
        src="../assets/hamburger.svg"
        alt="hamburger"
      />
      <img
        class="menu_info_button"
        @click="isOpen=!isOpen"
        v-if="isOpen"
        src="../assets/close.svg"
        alt="close"
      />
    </div>
    <MenuList v-if="isOpen" />
  </div>
</template>

<script lang="ts">
import MenuList from "./menuList.vue";
export default {
  name: "menu",
  components: { MenuList },
  data() {
    return {
      isOpen: true
    };
  },
  created() {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 600) this.isOpen = true;
    });
  }
};
</script>

<style lang="scss">
.menu {
  background: rgb(0, 0, 0);
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10vw;
  .menu_logo {
    height: 25px;
  }
  .menu_info {
    display: flex;
    align-items: center;
    gap: 10px;

    .menu_info_location {
      display: flex;
      gap: 15px;
      span {
        white-space: nowrap;
        color: #7c8792;
      }
    }

    .menu_info_button {
      display: none;
    }
  }

  .notification-box {
    position: relative;
    width: 50px;
    height: fit-content;
    text-align: center;
    .notification-bell {
      animation: bell 1s 1s both infinite;
    }
    .notification-bell * {
      display: block;
      margin: 0 auto;
      background-color: #fff;
    }
    .bell-top {
      width: 6px;
      height: 6px;
      border-radius: 3px 3px 0 0;
      background: transparent;
      box-shadow: inset 0 0 0 1px white;
    }
    .bell-middle {
      width: 15px;
      height: 15px;
      margin-top: -1px;
      border-radius: 12.5px 12.5px 0 0;
      background: black;
      box-shadow: inset 0 0 0 1px white;
      position: relative;
      z-index: 2;
    }
    .bell-bottom {
      position: relative;
      z-index: 0;
      bottom: 1px;
      width: 19px;
      height: 1px;
    }
    .bell-bottom::before,
    .bell-bottom::after {
      content: "";
      position: absolute;
      top: -4px;
      z-index: 0;
    }
    .bell-bottom::before {
      left: 1px;
      border-bottom: 4px solid #fff;
      border-right: 0 solid transparent;
      border-left: 4px solid transparent;
    }
    .bell-bottom::after {
      right: 1px;
      border-bottom: 4px solid #fff;
      border-right: 4px solid transparent;
      border-left: 0 solid transparent;
    }
    .bell-rad {
      width: 8px;
      height: 4px;
      margin-top: 1px;
      border-radius: 0 0 4px 4px;
      background: transparent;
      box-shadow: inset 0 0 0 1px white;
      animation: rad 1s 2s both infinite;
    }
    .notification-count {
      position: absolute;
      z-index: 1;
      top: 7px;
      right: 13px;
      width: 7px;
      height: 7px;

      font-size: 12px;
      border-radius: 50%;
      background-color: #3fcbff;
      box-shadow: 0 0 0 1px black;
      color: #fff;

      animation: zoom 3s 3s both infinite;
    }
  }

  @keyframes bell {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(30deg);
    }
    20% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(0);
    }
    90% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes rad {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(6px);
    }
    20% {
      transform: translateX(0);
    }
    80% {
      transform: translateX(0);
    }
    90% {
      transform: translateX(-6px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes zoom {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    10% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    51% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
}

@media (max-width: 600px) {
  .menu {
    padding: 10px 5vw;
    .menu_info_location {
      display: none !important;
    }
    .menu_info_button {
      display: block !important;
    }
  }
}
</style>