function formatK(amount) {
    return "K " + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {

    let basic = parseFloat(document.getElementById("basic").value) || 0;
    let allowances = parseFloat(document.getElementById("allowances").value) || 0;

    let gross = basic + allowances;

    let napsa = gross * 0.05;
    let nhima = gross * 0.01;

    let taxableIncome = gross - napsa;

    let band1 = 0, band2 = 0, band3 = 0, band4 = 0;
    let due1 = 0, due2 = 0, due3 = 0, due4 = 0;

    if (taxableIncome > 0) {
        band1 = Math.min(taxableIncome, 5100);
        due1 = 0;
    }
    if (taxableIncome > 5100) {
        band2 = Math.min(taxableIncome - 5100, 2000);
        due2 = band2 * 0.20;
    }
    if (taxableIncome > 7100) {
        band3 = Math.min(taxableIncome - 7100, 2100);
        due3 = band3 * 0.30;
    }
    if (taxableIncome > 9200) {
        band4 = taxableIncome - 9200;
        due4 = band4 * 0.37;
    }

    let paye = due1 + due2 + due3 + due4;

    let contributions = napsa + nhima;
    let totalDeductions = contributions + paye;
    let net = gross - totalDeductions;

    document.getElementById("gross").innerText = formatK(gross);
    document.getElementById("napsa").innerText = formatK(napsa);
    document.getElementById("nhima").innerText = formatK(nhima);
    document.getElementById("contributions").innerText = formatK(contributions);
    document.getElementById("taxDeductions").innerText = formatK(paye);
    document.getElementById("totalDeductions").innerText = formatK(totalDeductions);
    document.getElementById("net").innerText = formatK(net);

    document.getElementById("band1").innerText = formatK(band1);
    document.getElementById("band2").innerText = formatK(band2);
    document.getElementById("band3").innerText = formatK(band3);
    document.getElementById("band4").innerText = formatK(band4);

    document.getElementById("due1").innerText = formatK(due1);
    document.getElementById("due2").innerText = formatK(due2);
    document.getElementById("due3").innerText = formatK(due3);
    document.getElementById("due4").innerText = formatK(due4);
}

function clearFields() {

    document.getElementById("basic").value = "";
    document.getElementById("allowances").value = "";

    const outputIds = ["gross", "napsa", "nhima", "contributions", "taxDeductions", "totalDeductions", "net"];
    outputIds.forEach(id => document.getElementById(id).innerText = "K 0");

    const bandIds = ["band1", "band2", "band3", "band4", "due1", "due2", "due3", "due4"];
    bandIds.forEach(id => document.getElementById(id).innerText = "0");
}