/* hamburger menu */
const hamburgerMenuCheckbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
const bootstrap2Links = document.querySelectorAll('.bootstrap2 a');

bootstrap2Links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenuCheckbox.checked = false;
  });
});

var imageIndex;
const changeImg = (imageIndex) => {
  const img = document.querySelector(`.img-${imageIndex}`);
  document.querySelector('.potato').src = img.src;
  const productId = document.querySelector('.h7-con h7');
  productId.innerHTML = `White Mug<br>Product-ID: 0${imageIndex}#`;
  
  switch (imageIndex) {
    case 1:
      document.querySelector('.product-select-con').value = 't-Y-G';
      break;
    case 2:
      document.querySelector('.product-select-con').value = 't-Y-G-2';
      break;
    case 3:
      document.querySelector('.product-select-con').value = 't-GWF';
      break;
    case 4:
      document.querySelector('.product-select-con').value = 'c-GWP';
      break;
  }
  const selectedItem = document.querySelector('.product-select-con').value;

  if (imageIndex === 3) {
    document.querySelector('.product-img-upload-con').style.display = 'unset';
  } else {
  document.querySelector('.product-img-upload-con').style.display = 'none'
  }
  if (selectedItem === 'nothing') {
    document.querySelector('.product-textbox-name').style.display = 'none';
  }
  else {
    document.querySelector('.product-textbox-name').style.display = 'unset';
    document.querySelector('.product-select-con :first-child').style.display = 'none'

  }
}

const changeToSlectedItem = () => {
  const selectedItem = document.querySelector('.product-select-con').value;

  let selectItemIndex = selectedItem;

  switch (selectItemIndex) {
    case 't-Y-G':
      changeImg(1);
      break;
    case 't-Y-G-2':
      changeImg(2);
      break;
    case 't-GWF':
      changeImg(3);
      break;
    case 'c-GWP':
      changeImg(4);
      break;
  }

  if (selectedItem === 't-GWF') {
      document.querySelector('.product-img-upload-con').style.display = 'unset';
  }
  else {
    document.querySelector('.product-img-upload-con').style.display = 'none'
  }
  if (selectedItem === 'nothing') {
    document.querySelector('.product-textbox-name').style.display = 'none';
  }
  else {
    document.querySelector('.product-textbox-name').style.display = 'unset';
    document.querySelector('.product-select-con :first-child').style.display = 'none'
  }
}

const textbox = document.querySelector('.product-textbox-name');
const deleteInside = () => {
  textbox.value = '';
} 
textbox.addEventListener('focusout', function() {
  textbox.value = '"Type name"';
});