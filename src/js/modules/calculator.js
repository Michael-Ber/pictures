const calculator = (sizeSelector, materialSelector, optionsSelector, promoSelector, resultSelector, obj) => {

    const size = document.querySelector(sizeSelector),
          material = document.querySelector(materialSelector),
          options = document.querySelector(optionsSelector),
          promo = document.querySelector(promoSelector),
          result = document.querySelector(resultSelector);
    
    let price = {
        'Холст из волокна': 1000,
        'Льняной холст': 1500,
        'Холст из натурального хлопка': 2500,
        '40x50': 7000,
        '50x70': 9000,
        '70x70': 10000,
        '70x100': 12000,
        'Покрытие арт-гелем': 4000,
        'Экспресс-изготовление': 5000,
        'Доставка готовых работ': 500
    };
    let res = 0;

    function calcRes() {
        let res = price[size.value] + price[material.value];
        if(size.value !== 'Выберите размер картины' && material.value !== 'Выберите материал картины') {
            if(promo.value !== 'IWANTPOPART') {
                if(options.value !== 'Дополнительные услуги') {
                    res += price[options.value];
                }
            }else {
                if(options.value !== 'Дополнительные услуги') {
                    res = (res + price[options.value]) * 0.7;
                }else {
                    res *= 0.7;
                }
            }
            result.textContent = res + ' RUB';
        }else {
            result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        }
        obj.size = size.value;
        obj.material = material.value;
        obj.options = options.value;
        obj.promo = promo.value;
        obj.sum = result.textContent;  
    }

    size.addEventListener('change', () => {
        calcRes();
    });
    material.addEventListener('change', () => {
        calcRes();
    });
    options.addEventListener('change', () => {
        calcRes();
    });
    promo.addEventListener('input', () => {
        calcRes();
    });
};

export default calculator;