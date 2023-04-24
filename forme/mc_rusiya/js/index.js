const curencySelectNode = document.querySelector('.input_valute');
const resultOverPay = document.querySelector('.item_over_pay');
const resultCurency = document.querySelector('.item_curency');
const resultMinPay = document.querySelector('.item_min_pay');
const resultSum = document.querySelector('.item_sum');
const resultYearPercent = document.querySelector('.item_year_percent');
const nodeSumeReal = document.querySelector('.input_sum_real');
const nodeSumeResult = document.querySelector('.input_sum_result');
const nodeTermReal = document.querySelector('.input_term_real');
const nodeTermResult = document.querySelector('.input_term_result');
const inputTerm=document.querySelector('.has-value_term');

inputTerm.oninput=(()=>{
    nodeTermReal.textContent=inputTerm.value;
});
