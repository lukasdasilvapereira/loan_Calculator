function pay() {
    let loan = parseFloat(document.getElementById("loan").value)
    let interest = parseFloat(document.getElementById("interest").value)
    let months = parseFloat(document.getElementById("months").value)
    let result = document.querySelector('.result')
    if(isNaN(loan) || isNaN(interest) || isNaN(months === 0)) {
        alert= "Please write something"
    }

    let juros = loan + (loan * (interest / 100))
    let monthly = Math.floor(juros / months)
    result.innerHTML = `${monthly}`
}

loan.addEventListener("input", pay)
interest.addEventListener("input", pay)
months.addEventListener("input", pay)

