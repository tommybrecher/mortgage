<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <h1 class="title">Amortization Schedule Generator</h1>

          <div class="field">
            <label class="label">Principal:</label>

            <div class="control">
              <input class="input" v-model="principalValue" placeholder="1000000" />
              <p class="right-aligned">{{ principalValue | toUSD }}</p>
            </div>
          </div>

          <div class="field">
            <label class="label">Interest Rate:</label>
            <div class="control">
              <input
                class="input"
                v-model="interestRate"
                v-on:click="updateInterest"
                placeholder="3.75"
              />
              <p class="right-aligned">{{ (interestRate / 100) | toPercent }}</p>
            </div>
          </div>
          <div class="field">
            <label class="label">Amortization (In Years):</label>
            <div class="control">
              <input class="input" v-model="loanYears" placeholder="30" />
              <p class="right-aligned">{{ loanYears || 0 }}</p>
            </div>
          </div>
          <button class="button" id="submitButton" v-on:click="renderTable()">Submit</button>
        </div>
        <div class="box">
          <div class="table-container">
            <table class="table is-hoverable is-fullwidth is-striped">
              <thead class="thead">
                <tr class="table-head">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getTable from "../calculator.js";
export default {
  name: "InputForm",
  data() {
    return {
      principalValue: 0,
      interestRate: 0,
      loanYears: 0,
      output: [],
      clicked: false
    };
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
  },
  methods: {
    updateInterest() {
      this.interestRate = this.interestRate / 100;
    },
    renderTable() {
      this.output = getTable(
        this.principalValue,
        this.interestRate,
        this.loanYears
      );
    }
  }
};
</script>

<style scoped>
input {
  text-align: right;
}

.table-row {
  text-align: left;
}

.right-aligned {
  text-align: right;
}
</style>
