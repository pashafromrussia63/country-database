import { Currency, Language } from "../types";

function formatNumber(number : number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  
function getNativeName(nativeName : {[langCode : string]: { common: string }}) : string {
    return Object.values(nativeName).map(name => name.common).join(', ');
}

function getCurrencies(currencies : Currency) : string {
    return Object.values(currencies).map(currency => currency.name).join(', ');
}

function getLanguages(languages : Language) : string {
    return Object.values(languages).join(', ');
}

export {
    formatNumber,
    getNativeName,
    getCurrencies,
    getLanguages
}