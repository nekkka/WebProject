export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  images: string[];
  rating: number;
  categoryName: string;
  likes: number
}

export const products = [
  {
    id: 1,
    name: '51 красная роза в оформлении (50 см)',
    price: 50000,
    description: 'Букет из 51 красной розы 50 см. В красивом оформлении.',
    link: 'https://probukety.com/goods/Buket-iz-51-krasnoj-rozy-50-sm?mod_id=268639101#show_tab_1',
    image: 'https://i4.stat01.com/2/8688/186875379/afacdb/51-krasnaya-roza-import-50-sm.jpg',
    images: ['https://i4.stat01.com/2/8688/186875379/afacdb/51-krasnaya-roza-import-50-sm.jpg', 'https://i3.stat01.com/2/8688/186875383/afacdb/51-krasnaya-roza-import-50-sm.jpg','https://i4.stat01.com/2/8688/186875381/afacdb/51-krasnaya-roza-import-50-sm.jpg' ],
    rating: 5,
    categoryName: 'Готовые букеты',
    likes: 0
  },
  {
    id: 2,
    name: 'Гавайский коктейль',
    price: 18000,
    description: 'Дуобукет - это букет из двух сортов цветов, иногда дополненный зеленью или сухоцветами. В составе букета диантусы, эрингиум и эвкалипт.',
    link: 'https://probukety.com/goods/Buket-Gavajskij-koktejl?mod_id=302137991',
    image: 'https://i1.stat01.com/2/8688/186874995/075a3e/29c7d360-b8e6-4d3f-9ba3-7127ce603110-jpeg.jpg',
    images: ['https://i1.stat01.com/2/8688/186874995/075a3e/29c7d360-b8e6-4d3f-9ba3-7127ce603110-jpeg.jpg','https://i4.stat01.com/2/8688/186874992/afacdb/b38a617d-0417-4813-9d63-424aa314b435-jpeg.jpg', 'https://i4.stat01.com/2/8688/186874993/afacdb/4265323d-eacb-4bda-97d6-e32c70785ba0-jpeg.jpg'],
    rating: 4,
    categoryName: 'Готовые букеты',
    likes: 0
  },
  {
    id: 3,
    name: 'Нежные чувства',
    price: 25000,
    description: 'В составе: цимбидиум, диантусы, эустома, эвкалипт, гиперикум, ваксфлауер.`',
    link: 'https://probukety.com/goods/Nezhnye-chuvstva?mod_id=302743476',
    image: 'https://i2.stat01.com/2/8744/187438903/075a3e/nezhnye-chuvstva.jpg',
    images: ['https://i2.stat01.com/2/8744/187438903/075a3e/nezhnye-chuvstva.jpg', 'https://i2.stat01.com/2/8744/187438812/afacdb/nezhnye-chuvstva.jpg', 'https://i4.stat01.com/2/8744/187438813/afacdb/nezhnye-chuvstva.jpg'],
    rating : 3,
    categoryName: 'Готовые букеты',
    likes: 0
  },
  {
    id: 4,
    name: 'Букет "Искушение"',
    price: 23500,
    description: 'В составе яркие розы, гортензия, ароматная маттиола, эустома, зелень.',
    link: 'https://probukety.com/goods/Buket-quot-Iskushenie-quot?from=Mjc3&mod_id=309463379',
    image: 'https://i2.stat01.com/2/9915/199144384/075a3e/photo21-1-jpg.jpg',
    images: ['https://i2.stat01.com/2/9915/199144384/075a3e/photo21-1-jpg.jpg', 'https://i2.stat01.com/2/9915/199144377/afacdb/photo5-2-jpg.jpg', 'https://i2.stat01.com/2/9915/199144385/afacdb/photo4-2-1-jpg.jpg'],
    rating: 4,
    categoryName: 'Готовые букеты',
    likes: 0
  },
  {
    id: 5,
    name: 'Букет пионовидных розовых тюльпанов',
    price: 30000,
    description: 'Пионовидные голландские тюльпаны в оформлении, модификация на выбор. ',
    link: 'https://probukety.com/goods/Buket-pionovyh-rozovyh-tyulpanov?from=MTM4&mod_id=309766458',
    image: 'https://i4.stat01.com/2/10000/199992945/afacdb/img1626-jpeg.jpg',
    images: ['https://i4.stat01.com/2/10000/199992945/afacdb/img1626-jpeg.jpg'],
    rating: 4,
    categoryName: 'Готовые букеты',
    likes: 0
  },
  {
    id: 6,
    name: 'Букет невесты № 1',
    price: 40000,
    description: 'Крепкую свежесть базилика и томатов дополняют ноты лавра, орегано и тимьяна.',
    link: 'https://probukety.com/goods/Buket-nevesty?mod_id=288277944',
    image: 'https://i2.stat01.com/2/6927/169263767/075a3e/813c0e69-5093-4ca9-a31e-4519e05f2561-jpeg.jpg',
    images: ['https://i2.stat01.com/2/6927/169263767/075a3e/813c0e69-5093-4ca9-a31e-4519e05f2561-jpeg.jpg', 'https://i2.stat01.com/2/6927/169263767/afacdb/813c0e69-5093-4ca9-a31e-4519e05f2561-jpeg.jpg', 'https://i1.stat01.com/2/6927/169263768/afacdb/e0dadada-c20c-4401-967d-2d05144e506b-jpeg.jpg'],
    rating: 5,
    categoryName: 'Свадебные букеты',
    likes: 0
  },
  {
    id: 7,
    name: 'NAJ OLEARI lasting embrace',
    price: 15000,
    description: 'Стойкая жидкая помада для губ с матовым финишем.',
    link: 'https://goldapple.kz/19000137708-lasting-embrace',
    image: 'https://pcdn.goldapple.ru/p/p/19000137708/web/696d6167654d6f64656c8db669ef8eb9e20fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000137708/web/696d6167654d6f64656c8db669ef8eb9e20fullhd.webp', 'https://pcdn.goldapple.ru/p/p/19000137673/imgmain.jpg', 'https://beauty.thewom.it/content/uploads/sites/3/2022/01/Naj-Oleari-VIP-BEAUTY-BOX-MINI-1000x750.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 8,
    name: 'EVELINE variete gel',
    price: 5499,
    description: 'Идеальный карандаш для губ из серии Variété позволит вам наслаждаться идеальным макияжем.',
    link: 'https://goldapple.kz/19000199765-variete-gel',
    image: 'https://pcdn.goldapple.ru/p/p/19000199765/web/696d674d61696e8db9fea54e7aaedfullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000199765/web/696d674d61696e8db9fea54e7aaedfullhd.webp', 'https://sun9-6.userapi.com/impg/UEMYzTpHzKv33G4Bc1t-Dqxv0BzsT4XRRK2dFg/l5Zcvjqx7H0.jpg?size=1280x960&quality=96&sign=00b953918947f1c702a8d9fa5ceef444&c_uniq_tag=zshTt8Fo7ENta0sRoTADxWHM9Xxp_UNZl64bMsU9puE&type=album', 
  'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1677245/KvMscXbs9A3scgDjTbDIA.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 9,
    name: 'NAJ OLEARI forever matte',
    price: 14499,
    description: 'Невероятно комфортная, бархатистая текстура помады для губ оставляет матовый финиш без сухости.',
    link: 'https://goldapple.kz/19000137697-forever-matte',
    image: 'https://pcdn.goldapple.ru/p/p/19000137697/web/696d6167654d6f64656c8db70ba3086a167fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000137697/web/696d6167654d6f64656c8db70ba3086a167fullhd.webp', 'https://d22lm4ubcq7uiw.cloudfront.net/catalog/product/cache/d508b3271d9238d8c9edd6147da9cc6e/8/2/82c66ec16217e577e8a79293dcd6362e06e0ee36c5435ba58b178ff07862e62f.jpeg', 'https://www.jasmin.rs/media/posebne-strane/3_ruzevi_mob.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 10,
    name: '3INA the longwear lipstick',
    price: 9793,
    description: 'Наполните свой день цветом! Жидкая помада 3INA с впечатляющей стойкостью и безупречным матовым финишем дарит губам насыщенный оттенок.',
    link: 'https://goldapple.kz/19000112336-the-longwear-lipstick',
    image: 'https://pcdn.goldapple.ru/p/p/19000112336/web/696d6167654d6f64656c8dae1f77dc8b58ffullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000112336/web/696d6167654d6f64656c8dae1f77dc8b58ffullhd.webp', 'https://cdn1.ozone.ru/s3/multimedia-m/6549242194.jpg', 'https://cdn1.ozone.ru/s3/multimedia-s/6549242164.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 11,
    name: 'ANASTASIA BEVERLY HILLS cosmos eye shadow palette',
    price: 21993,
    description: 'Палетка ANASTASIA BEVERLY HILLS, на создание которой вдохновили завораживающая красота галактик и сияние звезд, включает нейтральные и яркие тени для век с разными видами финиша.',
    link: 'https://goldapple.kz/19000191233-cosmos-eye-shadow-palette',
    image: 'https://pcdn.goldapple.ru/p/p/19000191233/web/696d67416464338dc3783f211e7b2fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000191233/web/696d67416464338dc3783f211e7b2fullhd.webp', 'https://static.thcdn.com/productimg/960/960/14546667-1995058134142666.jpg', 'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw2db78b8e/products/ANASTASIA/UK200034667_ANASTASIA_2.jpg'],
    rating: 3,
    categoryName: 'Eye Shadows',
    likes: 0
  },
];

