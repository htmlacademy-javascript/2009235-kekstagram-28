const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const userModalForm = document.querySelector('.img-upload__form');
const preview = userModalForm.querySelector('.img-upload__preview img');
const filtersPreview = userModalForm.querySelectorAll('.effects__preview');

const changePicturePreview = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const previewFile = URL.createObjectURL(file);
    preview.src = previewFile;
    for (let i = 0; i < filtersPreview.length; i++) {
      filtersPreview[i].style.backgroundImage = `url("${ previewFile }")`;
    }
  }
};

export{changePicturePreview};
