const State = {
      catalog: {
        items: [
          {
            name: 'Urban Kit 1',
            price: 300,
            img: 'UK1.jpg',
            icon: 'battery-quarter',
            info: {
              text: null,
              parts: [
                {name: 'Маска-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Пленка-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Перчатки', quantity: 2, unit: 'пары'},
                {name: 'Спасательное одеяло', quantity: 1, unit: 'шт.'}
              ]
            },
            descr: 'Человек потерял сознание и не дышит, вы вызвали скорую и начинаете реанимацию. Откажетесь от вдохов или будете рисковать здоровьем, вдыхая без барьера?\nUrban Kit 1 создан, чтобы исключить подобный выбор. Маска-клапан и перчатки надежно защитят вас от возможного заражения инфекцией пострадавшего, а пленка-клапан всегда будет с вами на брелоке ключей. '},
          {
            name: 'Urban Kit 2',
            price: 450,
            img: 'UK1.jpg',
            icon: 'battery-half',
            info: {
              text: null,
              parts: [
                {name: 'Маска-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Пленка-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Перчатки', quantity: 2, unit: 'пары'},
                {name: 'Спасательное одеяло', quantity: 1, unit: 'шт.'},
                {name: 'Турникет «СІЧ»', quantity: 1, unit: 'шт.'},
                {name: 'Маркер', quantity: 1, unit: 'шт.'},
                {name: 'Пластырь', quantity: 1, unit: 'уп.'},
                {name: 'Чехол (вакуумная упаковка)', quantity: 1, unit: 'шт.'},
                {name: 'Набор карточек', quantity: 1, unit: 'уп.'},
              ]
            },
            descr: 'Urban Kit 2 незаменим в ситуациях, когда счет идет на минуты. Его содержимое позволяет безопасно проводить реанимацию и остановить критическое кровотечение конечности.\nНабор отвечает требованиям современного горожанина — благодаря вакуумной упаковке он не занимает много места и не изнашивается.\nОтличием Urban Kit 2 от Urban Kit 1 служит наличие в комплекте турникета.'},
          {
            name: 'Urban Kit 2+',
            price: 550,
            img: 'UK1.jpg',
            icon: 'battery-three-quarters',
            info: {
              text: null,
              parts: [
                {name: 'Маска-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Пленка-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Перчатки', quantity: 2, unit: 'пары'},
                {name: 'Спасательное одеяло', quantity: 1, unit: 'шт.'},
                {name: 'Турникет «CAT G7»', quantity: 1, unit: 'шт.'},
                {name: 'Маркер', quantity: 1, unit: 'шт.'},
                {name: 'Пластырь', quantity: 1, unit: 'уп.'},
                {name: 'Чехол', quantity: 1, unit: 'шт.'},
                {name: 'Набор карточек', quantity: 1, unit: 'уп.'},
              ]
            },
            descr: 'Назначение Urban Kit 2+, как и Urban Kit 2 — спасти жизнь при остановке сердца и критическом кровотечении конечности. Их отличие — в модели турникета и чехле набора.\nВ состав Urban Kit 2+ входит CAT G7 (Combat Application Tourniquet 7, последнего поколения). Вооруженные Силы США используют CAT G7 потому, что результаты исследований подтверждают его высокую эффективность, практичность и надежность.'},
          {
            name: 'Urban Full',
            price: 1500,
            img: 'UK1.jpg',
            icon: 'battery-full',
            info: {
              text: null,
              parts: [
                {name: 'Маска-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Пленка-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Перчатки', quantity: 2, unit: 'пары'},
                {name: 'Спасательное одеяло', quantity: 1, unit: 'шт.'},
                {name: 'Турникет «CAT G7»', quantity: 1, unit: 'шт.'},
                {name: 'Израильский бандаж 6” (1 подушечка)', quantity: 1, unit: 'шт.'},
                {name: 'Гемостатический бинт QuikClot', quantity: 1, unit: 'шт.'},
                {name: 'Компрессионный бинт H&H', quantity: 2, unit: 'шт.'},
                {name: 'Маркер', quantity: 1, unit: 'шт.'},
                {name: 'Безопасные ножницы', quantity: 1, unit: 'шт.'},
                {name: 'Армированный скотч', quantity: 1, unit: 'шт.'},
                {name: 'Пластырь', quantity: 1, unit: 'уп.'},
                {name: 'Чехол', quantity: 1, unit: 'шт.'},
                {name: 'Набор карточек', quantity: 1, unit: 'уп.'},
              ]
            },
            descr: 'Full Urban Kit — ваш ответ на комплексные вызовы городской среды. Содержимое набора позволяет своевременно и безопасно оказать помощь при различных видах травм и неотложных состояний: остановке сердца, кровотечениях, ранениях груди, переохлаждении.\nОснова набора — современное американское и израильское снаряжение. При его разработке, главным приоритетом было качество комплектующих, а не низкая цена.\nВ набор входит снаряжение, необходимое для комфорта спасателя — чехол, набор карточек с рекомендациями.'},
          {
            name: 'MVA Kit',
            price: 990,
            img: 'UK1.jpg',
            icon: 'battery-full',
            info: {
              text: null,
              parts: [
                {name: 'Маска-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Пленка-клапан для реанимации', quantity: 1, unit: 'шт.'},
                {name: 'Перчатки', quantity: 4, unit: 'пары'},
                {name: 'Спасательное одеяло', quantity: 2, unit: 'шт.'},
                {name: 'Термопакеты', quantity: 4, unit: 'шт.'},
                {name: 'Турникет «СІЧ»', quantity: 2, unit: 'шт.'},
                {name: 'Израильский бандаж 6” (1 подушечка)', quantity: 2, unit: 'шт.'},
                {name: 'Компрессионный бинт H&H', quantity: 3, unit: 'шт.'},
                {name: 'Стирильный бинт', quantity: 10, unit: 'шт.'},
                {name: 'Эластичный бинт', quantity: 2, unit: 'шт.'},
                {name: 'Холодовый пакет', quantity: 2, unit: 'шт.'},
                {name: 'Безопасные ножницы', quantity: 1, unit: 'шт.'},
                {name: 'Косынка медицинская', quantity: 2, unit: 'шт.'},
                {name: 'Маркер', quantity: 1, unit: 'шт.'},
                {name: 'Армированный скотч', quantity: 1, unit: 'шт.'},
                {name: 'Пластырь', quantity: 1, unit: 'уп.'},
                {name: 'Чехол', quantity: 1, unit: 'шт.'},
                {name: 'Набор карточек', quantity: 1, unit: 'уп.'},
                {name: 'Сигнальный жилет', quantity: 1, unit: 'уп.'},
                {name: 'Треугольник ДТП', quantity: 1, unit: 'уп.'},
              ]
            },
            descr: 'В Украине порядка 4000 человек ежегодно гибнет в ДТП. Спасти их жизнь и снизить вред здоровью возможно, своевременно и верно оказав им первую помощь. Набор MVA включает в себя снаряжение, необходимое для спасения жизни пострадавшего водителя, пассажиров, сбитого пешехода.\nНабор MVA содержит средства оказания помощи при кровотечениях, переломах, вывихах, ушибах. В него включены средства для проведения реанимации, а также мер безопасности спасателя: треугольник оповестит водителей о препятствии, а светоотражающих желет сделает спасателя заметным в темное время суток и плохую погоду.'}
        ],
        currentIndex: 0,
        infoOpened: false
      },
      cart: {
        items: []
      },
      test: {
        queue: {questionText: 'Я выбираю аптечку ...', answers: [
            {answerText: 'себе', questionText: 'Я хочу чтобы ...', answers: [
              {answerText: 'аптечка была со мной в рюкзаке', questionText: 'По городу или в горы?', answers: [
                {answerText: 'По городу', questionText: 'Умеешь пользоваться турникетом/жгутом?', answers: [
                  {answerText: 'Да', questionText: 'Аптечка должна быть экономной?', answers: [
                    {answerText: 'Да', resultIndex: 1},
                    {answerText: 'Нет', resultIndex: 2}
                  ]},
                  {answerText: 'Нет', resultIndex: 0}
                ]},
                {answerText: 'В горы', resultIndex: 6},
              ]},
              {answerText: 'аптечка ездила со мной в машине', questionText: 'В ней должно быть все самое лучшее, верно?', answers: [
                {answerText: 'Конечно', resultIndex: 5},
                {answerText: 'Главное, чтобы работало', resultIndex: 4}
              ]},
              {answerText: 'аптечка находилась дома/в офисе', questionText: 'Полный комплект или попроще?', answers: [
                {answerText: 'Полный', resultIndex: 7},
                {answerText: 'Попроще', resultIndex: 3}
              ]}
            ]}, 
            {answerText: 'другу', questionText: 'Я рассчитываю потратить до ...', answers: [
              {answerText: '100 грн.', resultIndex: 8},
              {answerText: 'меньше 1500 грн.', questionText: 'Для меня важно ...', answers: [
                {answerText: 'внимание', resultIndex: 0},
                {answerText: 'чтобы просто, функционально и недорого', resultIndex: 2},
                {answerText: 'чтобы просто, функционально и очень качественно', resultIndex: 3}
              ]},
              {answerText: 'больше 1500 грн.', questionText: 'Друг водит машину?', answers: [
                {answerText: 'Да', questionText: 'У нас есть аптечка за ХХХХ гривен', answers: [
                  {answerText: 'Давайте поскромнее', resultIndex: 4},
                  {answerText: 'Для друга не жалко', resultIndex: 5}
                ]},
                {answerText: 'Нет', questionText: 'А в походы ходит?', answers: [
                  {answerText: 'Да', resultIndex: 6},
                  {answerText: 'Нет', questionText: 'Он городской супергерой?', answers: [
                    {answerText: 'Да', resultIndex: 3},
                    {answerText: 'Нет, он домашний супергерой', resultIndex: 7}
                  ]}
                ]}
              ]}
            ]}, 
            {answerText: 'в компанию', questionText: 'Аптечка нужна для ...', answers: [
              {answerText: 'Для безопасности, конечно', questionText: 'Безопасности чего?', answers: [
                {answerText: 'Безопасности на дороге', questionText: 'Как у вас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 4},
                  {answerText: 'Нормально', resultIndex: 5},
                ]},
                {answerText: 'Безопасности офиса', resultIndex: 7},
                {answerText: 'Безопасности производства', resultIndex: 7}
              ]},
              {answerText: 'Для эмоций, конечно', questionText: 'У кого и какие эмоции должна вызывать?', answers: [
                {answerText: 'У многих коллег, подарим небольшие наборы', questionText: 'Как у нас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 0},
                  {answerText: 'Нормально', resultIndex: 1},
                  {answerText: 'Фантастика!', resultIndex: 2}
                ]},
                {answerText: 'Гордость у топ-менеджмента', resultIndex: 7},
                {answerText: 'Спокойствие и безопасности у босса', questionText: 'Как у нас с бюджетом?', answers: [
                  {answerText: 'Как всегда...', resultIndex: 3},
                  {answerText: 'Нормально!', resultIndex: 7}
                ]}
              ]}
            ]}
        ]},
        results: [
          {name: 'Urban Kit 1', itemIndex: 0},
          {name: 'Urban Kit 2', itemIndex: 1},
          {name: 'Urban Kit 2+', itemIndex: 2},
          {name: 'Urban Full', itemIndex: 3},
          {name: 'MVA Kit', itemIndex: 4},
          {name: 'MVA+'},
          {name: 'Mountain kit'},
          {name: 'Any mission'},
          {name: '¯_(ツ)_/¯ Лучше купить шоколадку'}
        ],
        winnerIndex: null,
        finished: false
      },
      mobileMenuOpened: false
    }

export default State