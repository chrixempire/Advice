const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    document.getElementById("Heady").innerHTML = `Advice #${data.slip.id}`;
    document.getElementById("text").innerText = `" ${data.slip.advice} "`
}
fetchAdvice()

