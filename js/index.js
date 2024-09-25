


document.getElementById('donate-button').addEventListener('click', function (event) {
  event.preventDefault();

  const donateNoakhali = document.getElementById('noakhali-amount').value;
  const noakhaliDeposit = document.getElementById('noakhali-deposit').innerText;
  const donateNoakhaliNumber = parseFloat(donateNoakhali);
  const noakhaliDepositNumber = parseFloat(noakhaliDeposit);
  const totalDeposit = document.getElementById('total-deposit').innerText;
  const totalDepositNumber = parseFloat(totalDeposit)

  if (donateNoakhaliNumber <= 0 || isNaN(donateNoakhaliNumber) || totalDepositNumber < donateNoakhaliNumber) {
    alert('invalid input')
    return
  }



  const newNoakhaliDeposit = donateNoakhaliNumber + noakhaliDepositNumber;
  document.getElementById('noakhali-deposit').innerText = newNoakhaliDeposit;




  const finalRemainingBalance = totalDepositNumber - donateNoakhaliNumber;
  document.getElementById('total-deposit').innerText = finalRemainingBalance;

  document.getElementById('my_modal_1').showModal()




  // history tab
  const historyRecord = document.createElement('div');
  historyRecord.className = "bg-white p-2  w-64 border-4  rounded"

  historyRecord.innerHTML = `
      <p class="text-gray-200 text-lg">Date:${new Date().toLocaleString()}</p>
      <p>${donateNoakhaliNumber}  taka donate for Flood at Noakhali, Bangladesh</p>
    
    `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyRecord, historyContainer.firstChild)



})


document.getElementById('feni-donate-button').addEventListener('click', function (event) {
  event.preventDefault();

  const donateFeni = document.getElementById('feni-amount').value;
  const feniDeposit = document.getElementById('feni-deposit').innerText;
  const donateFeniiNumber = parseFloat(donateFeni);
  const feniiDepositNumber = parseFloat(feniDeposit);

  const totalDeposit = document.getElementById('total-deposit').innerText;
  const totalDepositNumber = parseFloat(totalDeposit)

 



  const newFeniDeposit = donateFeniiNumber + feniiDepositNumber;
  document.getElementById('feni-deposit').innerText = newFeniDeposit;




  const finalRemainingBalance = totalDepositNumber - donateFeniiNumber;
  document.getElementById('total-deposit').innerText = finalRemainingBalance;

    document.getElementById('my_modal_1').showModal()




  // history tab
  const historyRecord = document.createElement('div');
  historyRecord.className = "bg-white p-2  w-64 border-4  rounded"

  historyRecord.innerHTML = `
      <p class="text-gray-200 text-lg">Date:${new Date().toLocaleString()}</p>
      <p>${donateFeniiNumber}  Donate for Flood relief in Feni, Bangladesh
    
    `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyRecord, historyContainer.firstChild)



})





document.getElementById('quata-donate-button').addEventListener('click', function (event) {
  event.preventDefault();

  const donateQuata = document.getElementById('quata-amount').value;
  const quataDeposit = document.getElementById('quata-deposit').innerText;
  const donateQuataNumber = parseFloat(donateQuata);
  const quataDepositNumber = parseFloat(quataDeposit);
  const totalDeposit = document.getElementById('total-deposit').innerText;
  const totalDepositNumber = parseFloat(totalDeposit)

  if (donateQuataNumber <= 0 || isNaN(donateQuataNumber) || totalDepositNumber < donateQuataNumber ) {
    alert('invalid input')
    return
  }

  
  const newQuataDeposit = donateQuataNumber + quataDepositNumber;
  document.getElementById('quata-deposit').innerText = newQuataDeposit;
 
  const finalRemainingBalance = totalDepositNumber - donateQuataNumber;
  document.getElementById('total-deposit').innerText = finalRemainingBalance;

  document.getElementById('my_modal_1').showModal()


  // history div
  const historyRecord = document.createElement('div');
  historyRecord.className = "bg-white   border-4  "

  historyRecord.innerHTML = `
    <p class="text-gray-200 text-lg">Date:${new Date().toLocaleString()}</p>
    <p>${donateQuataNumber} Aids for injur for Quata movement</p>
  
  `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyRecord, historyContainer.third)
})


