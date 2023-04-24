const curencySelectNode = document.querySelector('.input_valute');
const resultOverPay = document.querySelector('.item_over_pay');
const resultCurency = document.querySelectorAll('.item_curency');
const resultMinPay = document.querySelector('.item_min_pay');
const resultSum = document.querySelector('.item_sum');
const resultYearPercent = document.querySelector('.item_year_percent');
const nodeSumeReal = document.querySelector('.input_sum_real');
const nodeSumeResult = document.querySelector('.input_sum_result');
const nodeTermReal = document.querySelector('.input_term_real');
const nodeTermResult = document.querySelector('.input_term_result');
const inputTerm=document.querySelector('.has-value_term');
const inputSum=document.querySelector('.has-value_sum');



    inputSum.min=500;
    inputSum.max=5000;
    inputSum.step=500;
curencySelectNode.addEventListener('change',(e)=>{
    if (curencySelectNode.value==='$'){

        inputSum.min=500;
        inputSum.max=5000;
        inputSum.step=500;

    }else if(curencySelectNode.value==='€'){
        inputSum.min=800;
        inputSum.max=8000;
        inputSum.step=800;
        
    }else{
        inputSum.min=10000;
        inputSum.max=100000;
        inputSum.step=10000;

    };

    for (let i = 0; i < resultCurency.length; i++) {
        resultCurency[i].textContent = curencySelectNode.value;
      }

});
    inputSum.oninput=(()=>{
        nodeSumeReal.textContent=inputSum.value+' '+curencySelectNode.value;
    
    });
    inputTerm.oninput=(()=>{
        nodeTermReal.textContent=inputTerm.value;
    });


