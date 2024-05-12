/* hamburger menu */
const hamburgerMenuCheckbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
const bootstrap2Links = document.querySelectorAll('.bootstrap2 a');

bootstrap2Links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenuCheckbox.checked = false;
  });
});

// var givingIndex;
// const uploadImageShower = (givingIndex) => {
//   if (givingIndex === Int32Array) {
//     if (imageIndex === givingIndex) {
//           document.querySelector('.product-img-upload-con').style.display = 'unset';
//         } else {
//         document.querySelector('.product-img-upload-con').style.display = 'none';

//     }
//   } else if (givingIndex === String){
//       const selectedItem = document.querySelector('.product-select-con').value;    
//       if (selectedItem === 'hbdTshirt') {
//           document.querySelector('.product-img-upload-con').style.display = 'unset';
//       }
//       else {
//         document.querySelector('.product-img-upload-con').style.display = 'none';
//       }

//   }
// }

var imageIndex;
const changeImg = (imageIndex) => {
  const img = document.querySelector(`.img-${imageIndex}`);
  document.querySelector('.Product-main-img').src = img.src;
  const productId = document.querySelector('.h7-con h7');
  productId.innerHTML = `White Mug<br>Product-ID: 0${imageIndex}#`;
  
  switch (imageIndex) {
    case 5:
      document.querySelector('.product-select-con').value = 'hbdTshirt';
      break;
    case 6:
      document.querySelector('.product-select-con').value = 'hbdTshirt2';
      break;
    case 7:
      document.querySelector('.product-select-con').value = 'tshirtWithPhoto';
      break;
    case 8:
      document.querySelector('.product-select-con').value = 'c-GWP';
      break;
  }
  const selectedItem = document.querySelector('.product-select-con').value;
  if (imageIndex === 6) {
    document.querySelector('.product-img-upload-con').style.display = 'unset';
  } else {
  document.querySelector('.product-img-upload-con').style.display = 'none';
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
    case 'hbdTshirt':
      changeImg(5);
      break;
    case 'hbdTshirt2':
      changeImg(6);
      break;
    case 'tshirtWithPhotoF':
      changeImg(7);
      break;
    case 'c-GWP':
      changeImg(8);
      break;
  }
  if (selectedItem === 'hbdTshirt') {
    document.querySelector('.product-img-upload-con').style.display = 'unset';
  }
  else {
    document.querySelector('.product-img-upload-con').style.display = 'none';
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