// Получение всех элементов из DOM
const controller = document.querySelector('input[type=number]');
const radialProgress = document.querySelector('.progress__circle');
const toggles = document.querySelectorAll('.progress__toggle');

// Переключатели
const animate = toggles[0];
const hide = toggles[1];

// Отрисовка значения прогресса
const setProgress = (progress) => {
    const value = progress ? `${progress}%` : '0%';
    radialProgress.style.setProperty('--progress', value);
    radialProgress.setAttribute('aria-valuenow', value);
};

// Начальное значение
setProgress(controller.value);

// Поле ввода "Value"
controller.oninput = () => {
    let value = parseInt(controller.value);

    if (isNaN(value) || value < 0) value = 0;
    if (value > 100) value = 100;

    controller.value = value.toString();
    setProgress(value);
};

// Переключатель "Animate"
animate.addEventListener('change', () => {
    animate.checked
        ? radialProgress.classList.add('progress__circle--spin')
        : radialProgress.classList.remove('progress__circle--spin');
});

// Переключатель "Hide"
hide.addEventListener('change', () => {
    radialProgress.style.display = hide.checked ? 'none' : '';
});