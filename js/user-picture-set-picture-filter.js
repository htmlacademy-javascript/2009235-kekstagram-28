const FILTERS = [
  {
    filterName: 'none',
    filterValue: '',
    filterUnit: '',
    min: 0,
    max: 0,
    start: 0,
    step: 0,
  },
  {
    filterName: 'chrome',
    filterValue: 'grayscale',
    filterUnit: '',
    min: 0,
    max: 1,
    start: 0.7,
    step: 0.1,
  },
  {
    filterName: 'sepia',
    filterValue: 'sepia',
    filterUnit: '',
    min: 0,
    max: 1,
    start: 0.7,
    step: 0.1,
  },
  {
    filterName: 'marvin',
    filterValue: 'invert',
    filterUnit: '%',
    min: 0,
    max: 100,
    start: 70,
    step: 1,
  },
  {
    filterName: 'phobos',
    filterValue: 'blur',
    filterUnit: 'px',
    min: 0,
    max: 3,
    start: 2.1,
    step: 0.1,
  },
  {
    filterName: 'heat',
    filterValue: 'brightness',
    filterUnit: '',
    min: 0,
    max: 3,
    start: 2.1,
    step: 0.1,
  },
];

const uploadImageForm = document.querySelector('#upload-select-image');
const sliderElement = uploadImageForm.querySelector('.effect-level__slider');
const valueElement = uploadImageForm.querySelector('.effect-level__value');
const filters = uploadImageForm.querySelectorAll('.effects__radio');
const sliderContainer = uploadImageForm.querySelector('.img-upload__effect-level');
const picturePreview = uploadImageForm.querySelector('.img-upload__preview');

let elementData = '';
let oldElementData = '';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  step: 0,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const onCheckedOrigin = () => sliderContainer.classList.add('hidden');
const noCheckedOrigin = () => sliderContainer.classList.remove('hidden');

const addFilter = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  const cretedFilter = `${elementData.filterValue }(${ sliderValue }${elementData.filterUnit })`;
  picturePreview.style.filter = cretedFilter;
  picturePreview.classList.add(`effects__preview--${ elementData.filterName}`);
};

const deleteFilter = () => {
  picturePreview.style.filter = '';
  picturePreview.classList.remove(`effects__preview--${ oldElementData.filterName}`);
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  addFilter();
});


const listenFilterElement = (filter) => {
  filter.addEventListener('change', (evt) => {
    elementData = FILTERS.find((element) => element.filterName === evt.target.value);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: elementData.min,
        max: elementData.max
      },
      start: elementData.start,
      step: elementData.step
    });

    deleteFilter();
    if (elementData.filterName === FILTERS[0].filterName) {
      onCheckedOrigin();
    } else {
      noCheckedOrigin();
    }

    addFilter();
    oldElementData = elementData;
  });
};

for (let i = 0; i <= filters.length - 1; i++) {
  listenFilterElement(filters[i]);

  if (filters[i].checked && filters[i].value === FILTERS[0].filterName) {
    onCheckedOrigin();
  }
}

const defaultFilter = () => {
  deleteFilter();
  onCheckedOrigin();
};

export {defaultFilter};
