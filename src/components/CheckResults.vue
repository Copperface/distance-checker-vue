<template>
  <div class="check-results">
    <div class="check-results__wrapper">
      <CheckResultsRow
        v-for="(result, index) in results"
        :key="index"
        v-bind="{ ...result }"
      />
    </div>
  </div>
</template>

<script>
import CheckResultsRow from "@/components/CheckResultsRow.vue";

import EventBus from "@/utils/EventBus.js";

export default {
  name: "CheckResults",
  components: {
    CheckResultsRow
  },
  data() {
    return {
      results: []
    };
  },
  created() {
    EventBus.$on("showCheckResult", result => {
      this.results.push(result);
    });
  }
};
</script>

<style lang="scss">
.check-results {
  padding: 20px;
  &__wrapper {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
    background: #fff;
    border: none;
    border-radius: 8px;
  }
}
</style>
