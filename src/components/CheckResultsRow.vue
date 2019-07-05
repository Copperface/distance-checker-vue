<template>
  <div class="check-result-row">
    <div v-if="isCheckSuccess" class="check-result-row__data success">
      {{ formatedDate }} {{ startCity }} - {{ finishCity }} = {{ distance }}
    </div>
    <div v-else class="check-result-row__data error">
      {{ formatedDate }} {{ error }}
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";

export default {
  name: "CheckResultsRow",
  props: {
    date: {
      type: Date,
      default: new Date()
    },
    distance: { type: String, default: "" },
    startCity: { type: String, default: "" },
    finishCity: { type: String, default: "" },
    error: { type: String, default: "" }
  },
  computed: {
    isCheckSuccess() {
      return !this.error;
    },
    formatedDate() {
      return dateFormat(this.date, "dd/mm в hh:mm");
    }
  }
};
</script>

<style lang="scss">
.check-result-row {
  width: 97%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  background: #6ed0f6;

  &__data {
    font-size: 18px;

    &.error {
      color: #f00;
    }
  }
}
</style>
