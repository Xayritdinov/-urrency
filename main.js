let first_currency = document.querySelector("#first_currency");
let first_currency_input = document.querySelector("#first_currency_input");
let second_currency_input = document.querySelector("#second_currency_input");

first_currency.addEventListener("input", currency);
first_currency_input.addEventListener("input", currency);

function currency(){
    let first_currencyValue = first_currency.value;
    let usd_currency=12750;
    let eur_currency=14400;
    let rub_currency=141;
    let kzt_currency=27;
    let selected_currency;
    if(first_currencyValue == "us"){
        selected_currency = usd_currency
    } else if(first_currencyValue == "eu"){
        selected_currency = eur_currency
    } else if(first_currencyValue == "ru"){
        selected_currency = rub_currency
    } else if(first_currencyValue == "kz"){
        selected_currency = kzt_currency
    }
    let first_currency_inputValue = first_currency_input.value;    
    let cost = selected_currency * first_currency_inputValue;
    second_currency_input.value = cost;
}