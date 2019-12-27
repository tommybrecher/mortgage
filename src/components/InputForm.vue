<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <img src="../assets/logo.png" class="center" />
          <h1 class="title">Amortization Schedule Generator</h1>
          <div class="field">
            <label class="label">Principal:</label>
            <div class="control">
              <input class="input" v-model="principalValue" placeholder="100,000" />
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

          <button
            class="button"
            id="submitButton"
            v-on:click="submitButton();"
            v-if="submitted == false"
          >Submit</button>
          <button class="button" id="submitButton" v-on:click="submitButton();" v-else>Clear</button>
        </div>
        <div class="box">
          <AmortizationTable
            v-bind:pv="principalValue"
            v-bind:interest="interestRate"
            v-bind:years="loanYears"
            v-if="submitted == true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AmortizationTable from "./Table.vue";

export default {
  name: "InputForm",
  data() {
    return {
      principalValue: "",
      interestRate: "",
      loanYears: "",
      submitted: false
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
    submitButton() {
      this.submitted = !this.submitted;
    }
  },
  components: {
    AmortizationTable
  },
  created: () => {
    this.submitted = false;
  }
};
</script>

<style scoped>
input {
  text-align: right;
}

.right-aligned {
  text-align: right;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 330px;
  height: 150px;
}
h1 {
  text-align: center;
}
</style>
