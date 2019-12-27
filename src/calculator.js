const Finance = require('financejs');
const finance = new Finance();

function toUSD(v) {
return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
    }).format(v);
}
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
                toUSD(ipmt),
                toUSD(ppmt),
                toUSD(pmt),
                toUSD(totalInterest),
                toUSD(pv)
            ]
        )

    }
    return array;
}

export default getTable;