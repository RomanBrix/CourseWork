import $  from 'jquery';
import {
    accessKey,
    currData,
    baseCurrency
} from './Global';

module.exports = (callback) => {
    // $.getJSON('http://api.fixer.io/latest?base='+ baseCurrency, (fxRates)=>{
    //     callback(fxRates);
    // })
    $.getJSON(`http://www.apilayer.net/api/live?access_key=${accessKey}&currencies=${currData}&source=${baseCurrency}`,
        (fxRates) => {
            callback(fxRates);
    })
   // fetch('http://www.apilayer.net/api/live?access_key=' + accessKey + '&currencies=' + currData + '&source=' + baseCurrency).then((fxRates) => {
   //      callback(fxRates);
   //  })
//    нужно почитать
};