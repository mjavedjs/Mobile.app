let globalArray;
let ConvertData=JSON.parse(localStorage.getItem('cart'));
if(ConvertData === null){
 globalArray=[];
}
else{
  globalArray = [...ConvertData];
}

let container =document.querySelector(".container");
let rederValue=document.querySelector(".showItem");

ConvertData.map((item , index)=>{
    container.innerHTML +=`<div class="card-content card">
<h3 class="card-title">${item.name}</h3>
<p >Brand:${item.brand} </p>
<p class="card-price">$${item.price}</p>

<button class="card-button" onclick="incrse(${index})">+</button>
<button class="card-button" onclick="dec(${index})">-</button>
<button class="card-button" onclick="delet(${index})">Deleted</button>
</div>`
});

function incrse(index){
let items= globalArray.indexOf(ConvertData[index]);
if(items === -1){
    globalArray.push(ConvertData[index]);
    console.log(globalArray);
}
else{
    globalArray[items].quantity +=1
}
}

function incrse(index) {
    let items = globalArray.indexOf(ConvertData[index]);
    if (items === -1) {
        globalArray.push({...ConvertData[index], quantity: 1}); 
        console.log(globalArray);
    } else {
        globalArray[items].quantity += 1;
    }
    showItem();
}

function dec(index) {
    let items = globalArray.indexOf(ConvertData[index]);
    if (items !== -1 && globalArray[items].quantity > 0) { 
        globalArray[items].quantity -= 1;
    }
    console.log(globalArray);
    showItem(); // Update display
}

function showItem() {
    rederValue.innerHTML = "";
    let total = 0;
    globalArray.forEach((item) => {
        const itemTotal = item.price * item.quantity 
        total += itemTotal;
    });
    rederValue.innerHTML = `
        <div class="total-display">
            <h3>Total: $${total}</h3>
        </div>`;
}

function delet(index) {
    console.log("Deleting index:", index);
    
    ConvertData.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(ConvertData));
    globalArray = [...ConvertData];
    
    container.innerHTML = "";
    ConvertData.map((item, newIndex) => {
        container.innerHTML += `
            <div class="card-content card">
                <h3 class="card-title">${item.name}</h3>
                <p>Brand: ${item.brand}</p>
                <p class="card-price">$${item.price}</p>
                <button class="card-button" onclick="incrse(${newIndex})">+</button>
                <button class="card-button" onclick="dec(${newIndex})">-</button>
                <button class="card-button" onclick="delet(${newIndex})">Delete</button>
            </div>`;
    });

    console.log("Updated globalArray:", globalArray);
    
    showItem();
}

    


    
    

