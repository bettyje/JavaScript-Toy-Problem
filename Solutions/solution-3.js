const readline = require('readline');

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325; // 32.5% 500,001 - 800,000
    } else {
        payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // 35% above 800,000
    }

    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    let nssf = 0;
    if (grossSalary <= 7000) {
        nssf = grossSalary * 0.06;
    } else {
        nssf = 7000 * 0.06 + (grossSalary - 7000) * 0.06;
    }

    const housingLevy = grossSalary * 0.015;

    const netSalary = grossSalary - payee - nhif - nssf - housingLevy;

    console.log(`
    Salary Breakdown:
    Gross Salary: KES ${grossSalary.toFixed(2)}
    PAYE Tax: KES ${payee.toFixed(2)}
    NHIF Deductions: KES ${nhif}
    NSSF Deductions: KES ${nssf.toFixed(2)}
    Housing Levy: KES ${housingLevy.toFixed(2)}
    Net Salary: KES ${netSalary.toFixed(2)}
    `);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Basic Salary (KES): ', (basicSalaryInput) => {
    rl.question('Enter Benefits (KES): ', (benefitsInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        const benefits = parseFloat(benefitsInput);

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log('Invalid input. Please enter valid numbers.');
        } else {
            calculateNetSalary(basicSalary, benefits);
        }

        rl.close();
    });
});
