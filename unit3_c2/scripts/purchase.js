let wallet = document.getElementById("wallet_balance");

let data = JSON.parse(localStorage.getItem("user"));
let a = +(data[0].wallet);

wallet.innerText =a;

let Data = JSON.parse(localStorage.getItem("purchase"));
appendData(Data);
function appendData(Data) {
    let container = document.getElementById("purchased_vouchers");
    
Data.forEach((el) => {
    
    let div = document.createElement("div");
    div.setAttribute("class","voucher");

    let image = document.createElement("img");
    image.src=el.image;

    let name = document.createElement("p");
    name.innerText=el.name;

    let price = document.createElement("h4");
    price.innerText = el.price;

    div.append(image,name,price);

    container.append(div);

});
}