<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <img src="../assets/logo.png" class="center" />
          <h1 class="title">Amortization Schedule</h1>
          <field v-model="principalValue" label="Principal Value: " format="currency"></field>
          <field v-model="interestRate" label="Interest Rate: " format="percent"></field>
          <field v-model="loanYears" label="Amortization (In Years): "></field>
          <button class="button" v-on:click="submitButton();" v-if="submitted == false">Submit</button>
          <button class="button" v-on:click="submitButton();" v-else>Clear</button>
        </div>

        <div class="box">
          <amortization-table
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
import Field from "./Field.vue";

export default {
  name: "InputForm",
  data() {
    return {
      principalValue: 0,
      interestRate: 0,
      loanYears: 0,
      submitted: false
    };
  },
  methods: {
    submitButton() {
      this.submitted = !this.submitted;
    }
  },
  components: {
    AmortizationTable,
    Field
  },
  created: () => {
    this.submitted = false;
  }
};
</script>

<style scoped>
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
