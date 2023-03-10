<template>
  <div class="menuList">
    <div
      v-for="listItem in menuList"
      :key="listItem"
      class="menuList_item"
      :class="[store.Page===listItem?'active': '']"
      @click="store.selectPage(listItem)"
    >
      <span>{{listItem}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { useMenuStore } from "../store/menuStore";

export default {
  data() {
    return {
      store: useMenuStore(),
      menuList: [
        "Преимущества Tele2",
        "Тарифы",
        "Акции и спецпредложения",
        "Промотариф Tele2",
        "Технология eSIM",
        "Подключение нового абонента"
      ],
      selectedpage: "Преимущества Tele2"
    };
    
  },
 

};
</script>

<style lang="scss">
.menuList {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  padding-left:  10vw;
  
  display: flex;
  background: white;
  color: black;
  gap: 10px;
  box-sizing: border-box;

  .menuList_item {
    opacity: 0.5;
    box-sizing:border-box;
    padding: 10px 0;
    display: flex;
    justify-content: baseline;
    align-items: center;
    
    &.active {
      opacity: 1;
      border-bottom:  3px solid  black;
    }
  }
}

@media (max-width: 600px) {
    .menuList{
        flex-direction: column;
        padding: 10px 5vw;
        gap: 5px;
        height: 100vh;
        .menuList_item{
           
            border-bottom:  1px solid  black;
        }
    }
}
</style>