<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        v-bind:value="value"
        @input="$emit('input', $event.target.value)"
        onclick="select();"
      />
      <p class="aligned-r" v-if="format === 'currency'">{{ value | toUSD }}</p>
      <p class="aligned-r" v-else-if="format === 'percent'">{{ value/100 | toPercent }}</p>
      <p class="aligned-r" v-else>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    label: String,
    value: Number,
    format: String
  },
  filters: {
    toUSD(v) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
      }).format(v);
    },
    toPercent(v) {
      return new Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 5
      }).format(v);
    }
  }
};
</script>

<style scoped>
.aligned-r,
.input {
  text-align: right;
}
</style>