async function getResponse() {
    let response = await fetch("../data/shop.json"); 
    console.log("Response:\n", response);
    let content = await response.json(); 
    console.log("Content from JSON:\n", content);
    content = content.slice(0, 9);
    let nodeForInsert = document.getElementById("node_for_insert");
    content.forEach(item => {
        nodeForInsert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
            <img style="width: 180px" class="align-self-center" src="${item.img}" alt="${item.title}">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}. Цена ${item.price} р.</p>
            <input type="hidden" name="vendor_code" value="${item.vendor_code}">
            <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
        `;
    });
}
const prices = {
    1: 116000, 
    2: 138745,
    3: 36094,  
    4: 67856,  
    5: 7906,   
    6: 11437  
};

function calculateTotal() {
    let total = 0;
    
    for (let i = 1; i <= 6; i++) {
        const quantity = document.getElementById(`quantity_${i}`).value || 0;
        const totalPrice = prices[i] * quantity;
        document.getElementById(`total_${i}`).innerText = `Итого: ${totalPrice.toLocaleString()} руб`;
        total += totalPrice;
    }

    document.getElementById("final-total").innerText = `Итоговая сумма: ${total.toLocaleString()} руб`;
}


getResponse();