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

function dec(index) {
    let items = globalArray.indexOf(ConvertData[index]);
    if (items !== -1) {
        globalArray[items].quantity -= 1; 
        if (globalArray[items].quantity <= 0) {

            globalArray.splice(items, 1);
        }
    }
    console.log(globalArray); 
}
    function showItem() {
        rederValue.innerHTML = ""; 
        
        let total = 0;
    
        globalArray = globalArray.filter(item => item.quantity > 0); 
    
        globalArray.map((item) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
                rederValue.innerHTML += `<div class="reder-card">
                    <div>
                        <p>Brand: ${item.brand}</p>
                        <p class="card-price">$${itemTotal}</p>
                    </div> </div>`;
            
        });
        rederValue.innerHTML += `
            <div class="total-display">
                <h3>Total: $${total}</h3>
            </div>`;
    }
    
    
    

