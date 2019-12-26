const Finance = require('financejs');
const finance = new Finance();

function getTable(pv, ir, durationInYears) {
    var nper = durationInYears * 12;
    var annualInterest = ir / 100;
    var ipmt = 0, ppmt = 0, totalInterest = 0, i = 0;
    var pmt = finance.AM(pv, ir, nper, 1, 0);

    var array = [];
    while (pv > 0) {
        ipmt = (annualInterest * pv) / 12;
        if (pmt > pv) {
            pmt = pv + ipmt;
        }
        ppmt = pmt - ipmt;
        pv -= ppmt;
        totalInterest += ipmt;
        i++;
        array.push(
            [
                i,
                `$${ipmt.toLocaleString()}`,
                `$${ppmt.toLocaleString()}`,
                `$${pmt.toLocaleString()}`,
                `$${totalInterest.toLocaleString()}`,
                `$${pv.toLocaleString()}`
            ]
        )

    }
    return array;
}

export default getTable;