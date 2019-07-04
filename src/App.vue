<template>
  <div class="distance-checker">
    <div class="distance-checker__wrapper">
      <h1 class="distance-checker__title">Узнай дистанцию</h1>
      <CheckBlock />
      <CheckResults />
    </div>
  </div>
</template>

<script>
import CheckBlock from "@/components/CheckBlock.vue";
import CheckResults from "@/components/CheckResults.vue";

import ymapsInit from "@/utils/ymapsInit.js";
import "reset-css";

export default {
  name: "app",
  components: {
    CheckBlock,
    CheckResults
  },
  mounted() {
    ymapsInit();
  }
};
</script>

<style lang="scss">
.distance-checker {
  &__wrapper {
    min-width: 768px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #6ed0f6;

    @media screen and (max-width: 765px) {
      min-width: 320px;
    }
  }

  &__title {
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    padding: 20px 0;
  }
}
</style>
