<template>
  <div class="check-block-item">
    <form
      class="check-block-item__form"
      @submit.prevent="handleSubmitCheckBlockItemForm"
    >
      <input
        class="check-block-item__form-input check-block-item__form-input-start"
        type="text"
        placeholder="Город отправления"
        required
        v-model="startCity"
      />
      <input
        class="check-block-item__form-input check-block-item__form-input-finish"
        type="text"
        placeholder="Город прибытия"
        required
        v-model="finishCity"
      />
      <input
        class="check-block-item__form-button check-block-item__form-submit"
        type="submit"
        :disabled="disableFormSubmit"
      />
      <button
        class="check-block-item__form-button check-block-item__form-clear"
        @click.prevent="handleClickCheckBlockItemFormClear"
      >
        Очистить
      </button>
    </form>
  </div>
</template>

<script>
import EventBus from "@/utils/EventBus.js";

export default {
  name: "CheckBlockItem",
  data() {
    return {
      startCity: "",
      finishCity: "",
      requestState: "none"
    };
  },
  computed: {
    disableFormSubmit() {
      return this.requestState === "loading";
    }
  },
  methods: {
    handleSubmitCheckBlockItemForm() {
      let resultData = { date: new Date() };
      this.requestState = "loading";

      window.ymaps
        .route([this.startCity, this.finishCity])
        .then(route => {
          resultData = {
            ...resultData,
            distance: route.getHumanLength().replace("&#160;", " "),
            startCity: this.startCity,
            finishCity: this.finishCity
          };
        })
        .catch(({ message }) => {
          resultData = {
            ...resultData,
            error: message
          };
        })
        .done(() => {
          EventBus.$emit("showCheckResult", resultData);
          this.requestState = "done";
        });
    },
    handleClickCheckBlockItemFormClear() {
      this.startCity = "";
      this.finishCity = "";
    }
  }
};
</script>

<style lang="scss">
.check-block-item {
  &__form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 20px;
  }

  &__form-input {
    width: 33%;
    background: #fff;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-family: "Raleway", sans-serif;
    height: 40px;
    text-indent: 20px;
    outline: none;

    @media screen and (max-width: 765px) {
      width: 100%;
      margin: 5px 0;
    }
  }

  &__form-button {
    background: #079bcf;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    height: 40px;
    width: 15%;
    margin-bottom: 10px;
    overflow: hidden;
    outline: none;

    @media screen and (max-width: 765px) {
      width: 45%;
      margin: 5px 0;
    }

    &:hover {
      background: #007ba5;
    }
  }
}
</style>
