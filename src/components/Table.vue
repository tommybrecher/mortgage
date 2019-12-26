<template>
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
                    <tr v-for="i in getTable(100,interest,30)" v-bind:key="i">
                        <td class="table-row" v-for="j in i" v-bind:key="j">{{ j }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: AmortizationTable,
        props: {
            pv: Number,
            interest: Number,
            years: Number,
        },
    }
</script>