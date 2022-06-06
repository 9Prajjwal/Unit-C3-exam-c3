function userdata(n,e,a,p) {
    this.name = n;
    this.email = e;
    this.address = a;
    this.wallet = p;
}

let data = [];


function store(data) {

    event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let wallet = document.getElementById("amount").value;

    let s1 = new userdata (name,email,address,wallet);

    

   data.push(s1);
    
    
   localStorage.setItem("user",JSON.stringify(data));

document.getElementById("form").reset();
}

