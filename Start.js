document.write('<h1>The Shop of Chicken</h1>')
var a = prompt('How much Chicken per KG')
var b = prompt("Enter the requird chicken in gram")
var amount = (parseInt(a) / 1000) * (parseInt(b))
line(amount)


function line(){
    document.write("Rupees of Chicken you received : ",amount)
}