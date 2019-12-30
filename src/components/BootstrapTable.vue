<template>
  <div>
    <b-table sticky-header="650px" hover :items="items"></b-table>
  </div>
</template>

<script>
import getTable from "../calculator.js";

export default {
  name: "BootstrapTable",
  props: {
    pv: Number,
    interest: Number,
    years: Number
  },
  data() {
    return {
      items: getTable(this.pv, this.interest, this.years)
    };
  }
};
</script>
