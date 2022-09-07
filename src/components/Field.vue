<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        :value="value"
        @input="$emit('update:Value', $event.target.value)"
        onclick="select();"
      />

      <p class="aligned-r" v-if="format === 'currency'">
        {{
          Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2,
          }).format(value)
        }}
      </p>

      <p class="aligned-r" v-else-if="format === 'percent'">
        {{
          Intl.NumberFormat("en-US", {
            style: "percent",
            maximumFractionDigits: 5,
          }).format(value / 100)
        }}
      </p>

      <p class="aligned-r" v-else>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    label: String,
    format: String,
    value: Number,
  },
  emits: ["update:Value"],
};
</script>

<style scoped>
.aligned-r,
.input {
  text-align: right;
}
</style>
