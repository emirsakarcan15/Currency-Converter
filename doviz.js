let input_tag = document.getElementById("input");
let error = document.getElementById("error");
let keys_1 = document.getElementById("currency-1");
let keys_2 = document.getElementById("currency-2");
let output_tag = document.getElementById("output");

events();

function events(){
    input_tag.addEventListener("input", convert)
    
}


async function convert(){
    input = parseFloat(input_tag.value.trim());

    let selection_1 = selected_key(keys_1)
    let selection_2 = selected_key(keys_2)

    if (isNaN(input)){
        danger_alert()
        clear_alert()
    }

    let currency = new Currency()
    
    let output = await currency.convert(selection_1, selection_2, input)
    addtoUX(output);
}

function danger_alert(){
    let div = document.createElement("div");
    div.id = "danger";
    div.className = "alert alert-danger";
    div.role = "alert"

    let p = document.createElement("p");
    p.id = "uyarı";
    p.textContent = "Please Enter a Number";

    div.append(p);
    error.append(div);
}

function clear_alert(){
    let div = document.getElementById("error").children[0]
    setTimeout(()=> {
        div.remove();
    }, 2000)
   
}

function selected_key(list){
    return list.options[list.selectedIndex].textContent;
    
}

function addtoUX(output){
    if (isNaN(output)){
        output_tag.value = "";
    }
    else {
        output_tag.value = output.toFixed(2);
    }
}