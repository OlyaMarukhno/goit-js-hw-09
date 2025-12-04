// src/js/images.js

// const images = [

//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
//     description: "Flower Blooms",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
//     description: "Alpine Mountains",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
//     description: "Mountain Lake Sailing",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     description: "Alpine Spring Meadows",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     description: "Nature Landscape",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     description: "Lighthouse Coast",
//   },
// ];

// // Используйте именованный экспорт, чтобы импортировать массив в 1-gallery.js
// export { images };

// src/js/images.js

// --------------------------------------------------------------------------
// Шаг 1: ИМПОРТИРУЕМ ВСЕ 18 ЛОКАЛЬНЫХ ФАЙЛОВ ИЗОБРАЖЕНИЙ
//
// ВНИМАНИЕ: Замените 'preview-1.jpg', 'original-1.jpg' и т.д.
// на ТОЧНЫЕ ИМЕНА ваших файлов, которые лежат в папке src/img
// --------------------------------------------------------------------------

// Картинка 1:
import preview1 from '../img/1-small.png'; 
import original1 from '../img/1.png';

// Картинка 2:
import preview2 from '../img/2-small.png';
import original2 from '../img/2.png';

// Картинка 3:
import preview3 from '../img/3-small.png';
import original3 from '../img/3.png';

// Картинка 4:
import preview4 from '../img/4-small.png';
import original4 from '../img/4.png';

// Картинка 5:
import preview5 from '../img/5-small.png';
import original5 from '../img/5.png';

// Картинка 6:
import preview6 from '../img/6-small.png';
import original6 from '../img/6.png';

// Картинка 7:
import preview7 from '../img/7-small.png';
import original7 from '../img/7.png';

// Картинка 8:
import preview8 from '../img/8-small.png';
import original8 from '../img/8.png';

// Картинка 9:
import preview9 from '../img/9-small.png';
import original9 from '../img/9.png';


// --------------------------------------------------------------------------
// Шаг 2: СОЗДАЕМ МАССИВ images, используя импортированные переменные
// --------------------------------------------------------------------------

const images = [
  {
    preview: preview1,
    original: original1,
    description: "Название первой картинки", // Описание из макета Figma
  },
  {
    preview: preview2,
    original: original2,
    description: "Название второй картинки",
  },
  {
    preview: preview3,
    original: original3,
    description: "Название третьей картинки",
  },
  {
    preview: preview4,
    original: original4,
    description: "Название четвертой картинки",
  },
  {
    preview: preview5,
    original: original5,
    description: "Название пятой картинки",
  },
  {
    preview: preview6,
    original: original6,
    description: "Название шестой картинки",
  },
  {
    preview: preview7,
    original: original7,
    description: "Название седьмой картинки",
  },
  {
    preview: preview8,
    original: original8,
    description: "Название восьмой картинки",
  },
  {
    preview: preview9,
    original: original9,
    description: "Название девятой картинки",
  },
];


// --------------------------------------------------------------------------
// Шаг 3: ИМЕНОВАННЫЙ ЭКСПОРТ (необходим для 1-gallery.js)
// --------------------------------------------------------------------------

export { images };