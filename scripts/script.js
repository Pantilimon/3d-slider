document.addEventListener('DOMContentLoaded', () => {
  // Находим все элементы с классом 'character-card' и элементы, которые нужно изменить
  const buttons = document.querySelectorAll('.character-card');
  const characterInfo = document.getElementById('character-info');
  const headDescription = document.getElementById('head-description');
  const characterDescription = document.getElementById('character-description');
  const characterImage = document.getElementById('character-image');
  const but = document.querySelector('.diamond-btn')

  
  let selectedCard = null; // Переменная для хранения ссылки на текущую выбранную карточк

  // Определяем объекты, содержащие данные для каждого персонажа
  // Оказывается, можно менять цвет у вектора, а не скачивать новое изображение... и тогда код на строчки 7 корчое и правильнее будет, но менять мне лень)
  const characterData = {
    character1: {
      description: 'Мастера клинка, способные ранить вас в самое сердечко. Они создают захватывающий и увлекательный визуал, наполняя игровые миры яркими красками, динамикой и адреналином. ',
      head: 'Огонь - геймдизайнеры ', 
      image: '/UGF2024/img/fireman.png',
      useBut: '/UGF2024/img/But/ButFire.svg',
      But: '/UGF2024/img/But/fire.svg',
      vec: 'btn1',
    },
    character2: {
      description: 'Маги и волшебники, создающие уникальные звуковые ландшафты. Они подбирают и накладывают звуковые эффекты, работают с музыкальными композициями и обеспечивают качественное звуковое сопровождение проектов.',
      head: 'Вода - саунд-дизайнеры',
      image: '/UGF2024/img/waterman.png',
      useBut: '/UGF2024/img/But/ButWater.svg',
      But: '/UGF2024/img/But/water.svg',
      vec: 'btn4',
      
    },
    character3: {
      description: 'Творческие профессионалы, громилы своего дела, которые создают фундамент всех видеоигр. Они используют разнообразные инструменты и технологии, чтобы воплотить все безумные идеи в жизнь.', 
      head: 'Земля - разработчики',
      image: '/UGF2024/img/earthman.png',
      useBut: '/UGF2024/img/But/ButEarth.svg',
      But: '/UGF2024/img/But/earth.svg',
      vec: 'btn2',
    },
    character4: {
      description: 'Гении пера и боевого лука, создающие захватывающие истории и сюжеты для видеоигр. Своими текстами они метят в самое сердечко, выбирая оригинальные и актуальные темы.',
      head: 'Воздух - сценаристы',
      image: '/UGF2024/img/wingman.png',
      useBut: '/UGF2024/img/But/ButWind.svg',
      But: '/UGF2024/img/But/wind.svg',
      vec: 'btn3',
    },
  };

  // Добавляем обработчик события 'click' к каждому элементу 'character-card'
  buttons.forEach(card => {
    card.addEventListener('click', () => {
      const selectedCharacter = card.dataset.character;

      if (selectedCard === card) {
        // Если уже выбран, снимаем выбор
        selectedCard.querySelector('.button-img').src = characterData[selectedCharacter].But;
        selectedCard.querySelector('.button-img').classList.toggle('shadow')
        selectedCard.classList.remove('selected');
        headDescription.textContent = '';   //Общая информация
        characterDescription.textContent = 'В команде может быть от одного до четырёх человек. Каждый из участников отвечает за определённую стихию, с которой можно ознакомиться здесь. Скорее делайте свой выбор, он повлияет на ваш дальнейший путь.';
        characterInfo.className = 'character-info';
        characterDescription.className = 'character-description';
        selectedCard = null;

        document.querySelector(`.${characterData[selectedCharacter].vec}`).classList.toggle('active')


        // Добавляем класс для анимации исчезания изображения
        characterImage.classList.add('image-animate-out'); 
        characterImage.addEventListener('animationend', () => {
          if (characterImage.classList.contains('image-animate-out')) {
            characterImage.src = '';
            characterImage.classList.remove('image-animate-out');
          }
        }, { once: true });
      } else {
        // Снимаем выбор (тень, цвет, меняем розу) с предыдущей карточки, если она была выбрана
        if (selectedCard) {
          document.querySelector(`.${characterData[selectedCard.dataset.character].vec}`).classList.toggle('active')
          selectedCard.querySelector('.button-img').classList.toggle('shadow')
          selectedCard.querySelector('.button-img').src = characterData[selectedCard.dataset.character].But;
          selectedCard.classList.remove('selected');
        }

        // Устанавливаем выбор на текущую карточку
        card.classList.add('selected');
        selectedCard = card;
        // Обновляем информацию о персонаже


        document.querySelector(`.${characterData[selectedCharacter].vec}`).classList.toggle('active')
        // but.classList.toggle('active')

        headDescription.textContent = characterData[selectedCharacter].head;
        characterDescription.textContent = characterData[selectedCharacter].description;
        // Меняем картинки персонажей и элементов
        characterImage.src = characterData[selectedCharacter].image;
        // Меняем кнопку на нажатую !!!!!!!!!!!!!!!!!!!!!!!!!!
        card.querySelector('.button-img').src = characterData[selectedCharacter].useBut;
        // Анимация выезжания тени у кнопки
        card.querySelector('.button-img').classList.toggle('shadow')
        // Добавляем анимацию к изображению
        characterImage.classList.remove('image-animate'); // Убираем предыдущую анимацию
        void characterImage.offsetWidth; // Перезапускаем анимацию
        characterImage.classList.add('image-animate');
        // Добавляем анимацию к элементу
        // Добавляем класс, чтобы применить стили css
        characterInfo.className = selectedCharacter;
      }
    });
  });
});
