<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <img src="../assets/logo.png" class="center" />
          <h1 class="title">Amortization Schedule</h1>
          <field
            v-model:value="principal"
            label="Principal"
            format="currency"
          />
          <field
            v-model:value="interest"
            label="Interest Rate"
            format="percent"
          />
          <field v-model:value="years" label="Amortization (In Years)" />
          <button
            class="button"
            @click="submitButton()"
            v-if="submitted == false"
          >
            Submit
          </button>
          <button class="button" @click="submitButton()" v-else>Clear</button>
        </div>

        <div class="box">
          <AmortizationTable
            :pv="principal"
            :interest="interest"
            :years="years"
            v-if="submitted"
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
      principal: 0,
      interest: 0,
      years: 0,
      submitted: false,
    };
  },
  methods: {
    submitButton() {
      this.submitted = !this.submitted;
    },
  },
  components: {
    AmortizationTable,
    Field,
  },
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
