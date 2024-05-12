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
  if (imageIndex > 9) {
      productId.innerHTML = `White Mug<br>Product-ID: ${imageIndex}#`;
  } else if (imageIndex <= 9) {
      productId.innerHTML = `White Mug<br>Product-ID: ${imageIndex}#`;
  }
  
  switch (imageIndex) {
    case 9:
      document.querySelector('.product-select-con').value = 'ThankingTeatcherTB';
      break;
    case 10:
      document.querySelector('.product-select-con').value = 'HBDTeatcherTB';
      break;
    case 11:
      document.querySelector('.product-select-con').value = 'SunWithQuote';
      break;
    case 12:
      document.querySelector('.product-select-con').value = 'c-GWP';
      break;
  }
  const selectedItem = document.querySelector('.product-select-con').value;
  if (imageIndex === 10) {
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
    case 'ThankingTeatcherTB':
      changeImg(9);
      break;
    case 'HBDTeatcherTB':
      changeImg(10);
      break;
    case 'SunWithQuote':
      changeImg(11);
      break;
    case 'c-GWP':
      changeImg(12);
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