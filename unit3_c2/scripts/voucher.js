
let wallet = document.getElementById("wallet_balance");

let data = JSON.parse(localStorage.getItem("user"));
let a = +(data[0].wallet);
console.log(a);

wallet.innerText =a;


showData();


async function showData() {
   
        let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

        let res = await fetch(url);

        let data = await res.json();
        
        let Data = data[0].vouchers;
        console.log(Data);
        appendData(Data);
  
}

function appendData(Data) {

    let container = document.getElementById("voucher_list");

    Data.forEach((el) => {

        let div = document.createElement("div");
        div.setAttribute("class","voucher");

        let image = document.createElement("img");
        image.src=el.image;

        let name = document.createElement("p");
        name.innerText=el.name;

        let price = document.createElement("h4");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.setAttribute("class","buy_voucher");
        btn.innerText = "BUY"
        btn.addEventListener("click", function() {
            addtopurchase(el);
        })
        
        div.append(image,name,price,btn);

        container.append(div);

    });
}

function addtopurchase (el) {

    

    
    let data = JSON.parse(localStorage.getItem("user"));
    let a = +(data[0].wallet);

    let totalprice = +(el.price);

    if(totalprice>a) {
        alert("Sorry! insufficient balance")
    } else {
        a = a - totalprice;
        wallet.innerText = a;
        data[0].wallet = a;
        localStorage.setItem("user",JSON.stringify(data))
        alert("Hurray! purchase successful")


        let data1 = JSON.parse(localStorage.getItem("purchase")) || [];

    data1.push(el);

    localStorage.setItem("purchase",JSON.stringify(data1));
    }
}

