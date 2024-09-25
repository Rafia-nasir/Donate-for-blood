document.getElementById('donation').addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
})







const historyTab = document.getElementById('history').addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')

   


})



