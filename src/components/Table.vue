<template>
  <div class="table-container">
    <table class="table is-hoverable is-fullwidth is-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Interest</th>
          <th>Principal</th>
          <th>Payment</th>
          <th>Total Interest</th>
          <th>Remaining Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in output" v-bind:key="i">
          <td class="table-row" v-for="j in i" v-bind:key="j">{{ j }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import getTable from "../calculator.js";

export default {
  name: "AmortizationTable",
  props: {
    pv: Number,
    interest: Number,
    years: Number
  },
  data() {
    return {
      output: getTable(this.pv, this.interest, this.years)
    };
  },
  created: {}
};
</script>

<style scoped>
.table th:not([align]),
.table-row {
  text-align: center;
}
</style>