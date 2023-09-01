let trolly = parseInt(prompt("Enter the amount of trollyh sir??"));


let totalAmount = 800 * trolly;
let driverAmount = 150 * trolly;
let deiselAmount = 200 * trolly;
let taxAmount = totalAmount * 0.1 ;
let profit = totalAmount - (deiselAmount+ deiselAmount+ taxAmount);

let table = document.getElementById("table")
table.innerHTML = `
    <tr>
        <td> Total Trolly </td>
        <td> ${trolly} </td>

    </tr>
        
    <tr>
        <td> Total Amount </td>
        <td> ${totalAmount} </td>

    </tr>

    <tr>
        <td> driver Amount </td>
        <td> ${driverAmount} </td>

    </tr>

    <tr>
        <td> deisel Amount </td>
        <td> ${deiselAmount} </td>

    </tr>

    <tr>
        <td> TAX Amount </td>
        <td> ${ taxAmount} </td>

    </tr>
    <tr>
        <td> profit </td>
        <td> ${profit} </td>

    </tr>


`