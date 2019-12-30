<template>
  <div>
    <img src="../assets/logo.png" class="center" />
    <h1 class="title">Amortization Schedule</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Principal Value:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.principal"
          required
          type="number"
          placeholder="Enter Principal Amount"
          min="0"
          step="1"
          max="100000000"
          text-align="right"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Interest Rate:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.interest"
          required
          type="number"
          min="0"
          max="100"
          step="0.01"
          placeholder="Enter Interest Rate"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Amortization (In Years):" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.duration"
          type="number"
          required
          placeholder="Enter Amortization In Years"
          min="0"
          step="1"
          max="50"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Result">
      <amortization-table
        :pv="form.principal"
        :interest="form.interest"
        :years="form.duration"
        v-if="submitted"
      />
    </b-card>
  </div>

  <!-- <field v-model="principalValue" label="Principal Value: " format="currency" /> -->
  <!-- <field v-model="interestRate" label="Interest Rate: " format="percent" /> -->
  <!-- <field v-model="loanYears" label="Amortization (In Years): " /> -->
</template>

<script>
import AmortizationTable from "./BootstrapTable.vue";
// import Field from "./Field.vue";

export default {
  name: "BootstrapForm",
  data() {
    return {
      form: {
        principal: 0,
        interest: 0,
        duration: 0
      },
      show: true,
      submitted: true
    };
  },
  methods: {
    currencyFormatter(v) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
      }).format(v);
    },
    percentFormatter(v) {
      return new Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 5
      }).format(v / 100);
    },
    onSubmit(evt) {
      this.submitted = true;
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      this.submitted = false;
      evt.preventDefault();
      // Reset our form values
      this.form.principal = "";
      this.form.interest = "";
      this.form.duration = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  components: {
    AmortizationTable
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
