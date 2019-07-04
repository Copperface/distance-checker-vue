<template>
  <div class="check-block">
    <div class="check-block__wrapper">
      <button
        class="check-block__add-item"
        v-if="showCheckBlockAddItem"
        @click="handleClickCheckBlockAddItem"
      >
        Добавить еще
      </button>
      <CheckBlockItem v-for="n in itemsCount" :key="n" />
    </div>
  </div>
</template>

<script>
import CheckBlockItem from "@/components/CheckBlockItem.vue";

export default {
  name: "CheckBlock",
  components: {
    CheckBlockItem
  },
  data() {
    return {
      itemsCount: 1
    };
  },
  computed: {
    showCheckBlockAddItem() {
      return this.itemsCount < 10;
    }
  },
  methods: {
    handleClickCheckBlockAddItem() {
      this.itemsCount += 1;
    }
  }
};
</script>

<style lang="scss">
.check-block {
  &__add-item {
    background: #079bcf;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    height: 40px;
    width: 20%;
    margin-bottom: 10px;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    outline: none;

    @media screen and (max-width: 765px) {
      width: 150px;
    }

    &:hover {
      background: #007ba5;
    }
  }
}
</style>
