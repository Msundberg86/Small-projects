'use strict';

//Regler för barnomsorgen.

//Avgift för barn 1-3 år är.
// Barn1: 3 % av inkomsten dock högst 1510kr.
// barn2: 2 % av inkomsten dock högst 1007kr.
// barn3: 1 % av inkomsten dock högst 503kr.
// barn4: ingen avgift.

//Avgfiter för barn 3-5 år för barn i förskola och fritidshem.
//Barn1: 2% av inkomsten dock högst 1007kr.
//Barn2: 1% av inkomsten dock högst 503kr
//Barn3: 1% av inkomsten dock högst 503kr
//Barn4: ingen avgift

//Den 1 augusti det år barnet fyller tre år ändras avgiften, oavsett vilket datum barnet fyller år.
//Om totala inkomsten överskrider 50340kr så betalar man alltid maxtaxa.

//BarnDatum innehåller födelseåret för barnen i en array.
let barnDatum = [];
const today = new Date();
const Year = today.getFullYear();

const calculate = document.querySelector('.calculate');
const avgBarn1 = document.getElementById('txtFees1');
const avgBarn2 = document.getElementById('txtFees2');
const avgBarn3 = document.getElementById('txtFees3');
const TotalFee = document.getElementById('totalFee');

//Knapp för att räkna

calculate.addEventListener('click', function() {
  const inkomst = Number(document.querySelector('.income').value);
  const barnDate1 = Number(document.querySelector('.txtFee1').value);
  const barnDate2 = Number(document.querySelector('.txtFee2').value);
  const barnDate3 = Number(document.querySelector('.txtFee3').value);

  console.log(document.querySelector('.income').value);

  barnDate1 >= 0
    ? (barnDatum[0] = barnDate1)
    : console.log('Inget datum inmatat');
  barnDate2 > 0
    ? (barnDatum[1] = barnDate2)
    : console.log('Inget datum inmatat');
  barnDate3 > 0
    ? (barnDatum[2] = barnDate3)
    : console.log('Inget datum inmatat');
  avgiftSumma(inkomst, barnDatum, Year);
});

//Funktion för att räkna ut avgiften för familjem.
function avgiftSumma(inkomst, barnDatum, Year) {
  barnDatum.sort();
  barnDatum.reverse();

  console.log(barnDatum);

  let totaltAvgift = 0;
  let avgift = 0;
  if (inkomst >= 50340) {
    console.log('Ni kommer att få betala maxtaxa.');
    TotalFee.textContent = ` Ni kommer att få betala maxtaxan`;
    return;
  }
  if (inkomst === 0) {
    TotalFee.textContent = ` Ange en inkomst innan du beräknar.`;
    return;
  }
  if (barnDatum[0] <= 0) {
    TotalFee.textContent = ` Du måste ange födelseår på minst ett barn`;
    return;
  }

  for (let i = 0; i < barnDatum.length; i++) {
    if (i === 0) {
      Year - barnDatum[i] >= 3
        ? (avgift = inkomst * 0.02)
        : (avgift = inkomst * 0.03);
      totaltAvgift += avgift;
      console.log(`Avgiften för barn1 är ${avgift}kr `);
      avgBarn1.textContent = ` Avgiften för barn 1 är ${avgift} kr`;
    }
    if (i === 1) {
      Year - barnDatum[i] >= 3
        ? (avgift = inkomst * 0.01)
        : (avgift = inkomst * 0.02);
      totaltAvgift += avgift;
      console.log(`Avgiften för barn2 är ${avgift}kr `);
      avgBarn2.textContent = ` Avgiften för barn 2 är ${avgift} kr`;
    }
    if (i === 2) {
      Year - barnDatum[i] >= 3
        ? (avgift = inkomst * 0.01)
        : (avgift = inkomst * 0.01);
      totaltAvgift += avgift;
      console.log(`Avgiften för barn3 är ${avgift}kr `);
      avgBarn3.textContent = ` Avgiften för barn 3 är ${avgift} kr`;
    }
    if (i === 3) {
      console.log(`avgiften för barn4 är 0kr.`);
    }
  }
  console.log(`Den totala avgiften för er familj blir ${totaltAvgift} kr`);
  TotalFee.textContent = ` Den totala avgiften för familjen blir ${totaltAvgift}kr`;
  return totaltAvgift;
}

// avgiftSumma(inkomst, barnDatum, Year);
