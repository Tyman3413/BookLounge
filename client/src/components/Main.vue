<template>
  <nav class="navbar">
    <div class="navbar-menu-left">
      <a href="#/" class="navbar-menu-logo">
        <img
          src="../assets/img/navbar/logo.png"
          alt="BOOKLOUNGE"
          class="navbar-logo"
        />
      </a>
      <div class="navbar-menu-left-bottom">
        <ul class="navbar-lists">
          <li class="navbar-list">
            <a href="#/stocks" class="navbar-list-title">Акции</a>
          </li>
          <li class="navbar-list">
            <a href="#/newbooks" class="navbar-list-title">Новинки</a>
          </li>
          <li class="navbar-list">
            <a href="#/sales" class="navbar-list-title">Скидки</a>
          </li>
          <li class="navbar-list">
            <a href="#/books" class="navbar-list-title">Все книги</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-menu-center">
      <ul class="navbar-menu-center-items">
        <li class="navbar-menu-center-item">
          <a href="" class="catalog-btn">
            <img
              src="../assets/img/navbar/catalog.png"
              alt=""
              class="catalog-img"
            />
          </a>
        </li>
        <li class="navbar-menu-center-item">
          <div class="search-box">
            <input
              type="text"
              class="search"
              name=""
              placeholder="Поиск по книге, автору, жанру и издательству"
            />
          </div>
        </li>
        <li class="navbar-menu-center-item">
          <a href="#" class="search-btn"
            ><img
              src="../assets/img/navbar/search.png"
              alt=""
              class="search-img"
          /></a>
        </li>
      </ul>
    </div>
    <div class="navbar-menu-right">
      <ul>
        <div class="fav-icon">
          <a href="#/favorite"
            ><img src="../assets/img/navbar/user.png" alt=""
          /></a>
        </div>
        <div class="fav-icon">
          <a href="#/favorite"
            ><img src="../assets/img/navbar/favorite.png" alt=""
          /></a>
        </div>
      </ul>
    </div>
  </nav>

  <section class="container">
    <span class="title">Акции</span>
    <!-- <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>  -->

    <div class="slider-wrapper">
      <div class="slider">
        <img data-id="slide-1" src="../assets/img/slider/1.png" alt="" />
        <img data-id="slide-2" src="../assets/img/slider/2.png" alt="" />
        <img data-id="slide-3" src="../assets/img/slider/3.png" alt="" />
        <img data-id="slide-4" src="../assets/img/slider/4.png" alt="" />
        <img data-id="slide-5" src="../assets/img/slider/5.png" alt="" />
      </div>
      <div class="slider-nav">
        <a data-id="slide-1" href="#"></a>
        <a data-id="slide-2" href="#"></a>
        <a data-id="slide-3" href="#"></a>
        <a data-id="slide-4" href="#"></a>
        <a data-id="slide-5" href="#"></a>
      </div>
    </div>
  </section>

  <!-- <div class="container">
         <div class="slider">
            <div class="slider-line">
                <img id="slide-1" src="../assets/img/slider/1.png" alt="">
                <img id="slide-2" src="../assets/img/slider/2.png" alt="">
                <img id="slide-3" src="../assets/img/slider/3.png" alt="">
                <img id="slide-4" src="../assets/img/slider/4.png" alt="">
                <img id="slide-5" src="../assets/img/slider/5.png" alt="">
            </div>
            <button class="slider-next">Дальше</button>
        </div>
    </div>
        -->

  <!-- <img  src="../assets/img/slider/arrows/right.png" alt=""> -->

  <section class="container-sales">
    <div class="sales-header">
      <div>
        <ul>
          <li v-for="book in books" :key="book.id">
            {{ book.title }}
          </li>
        </ul>
      </div>
      <div class="header-title">
        <a href="#">Скидки</a>
      </div>
      <a class="header-more-link" href="#">
        <div class="header-more">
          <span>Все скидки</span>
          <img src="../assets/img/sales/icons/more_arrow.png" alt="" />
        </div>
      </a>
    </div>
    <div class="boxes">
      <div class="box">
        <a href="#/details"
          ><img class="box-img" src="../assets/img/sales/6.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 642₽</span
            ><small class="small-price">700₽</small>
          </div>
          <div class="box-title three_point">
            <a href="#/details">Совершенно замечательная вещь</a>
          </div>
          <span class="box-details-author">Грин Хэнк</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/sales/1.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 276₽</span
            ><small class="small-price">339₽</small>
          </div>
          <div class="box-title three_point">
            <a href="#">Ваш покорный слуга кот</a>
          </div>
          <span class="box-details-author">Сосэки Нацумэ</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/sales/2.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 642₽</span
            ><small class="small-price">779₽</small>
          </div>
          <div class="box-title three_point"><a href="#">Реки Лондона</a></div>
          <span class="box-details-author">Ааронович Бен</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/sales/3.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 248₽</span
            ><small class="small-price">309₽</small>
          </div>
          <div class="box-title three_point">
            <a href="#">Убийство в "Восточном экспрессе"</a>
          </div>
          <span class="box-details-author">Агата Кристи</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/sales/4.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 210₽</span
            ><small class="small-price">269₽</small>
          </div>
          <div class="box-title three_point">
            <a href="#">Великий Гэтсби</a>
          </div>
          <span class="box-details-author">Френсис Скотт Фицджеральд</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/sales/5.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 175₽</span
            ><small class="small-price">229₽</small>
          </div>
          <div class="box-title three_point">
            <a href="#">Дом с приведениями</a>
          </div>
          <span class="box-details-author">Вирджиния Вулф</span>
        </div>
      </div>
    </div>
  </section>

  <section class="container-sales">
    <div class="sales-header">
      <div class="header-title">
        <a href="#">Новинки</a>
      </div>
      <a class="header-more-link" href="#">
        <div class="header-more">
          <span>Все новинки</span>
          <img src="../assets/img/sales/icons/more_arrow.png" alt="" />
        </div>
      </a>
    </div>
    <div class="boxes">
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/newbooks/1.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 1050₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Маленький принц и Цитадель</a>
          </div>
          <span class="box-details-author">Антуан де Сент-Экзюпери</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/newbooks/2.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 570₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Белая рыба.Сказания о Бай и Ю. Семена сожаления</a>
          </div>
          <span class="box-details-author">Шу Гу</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/newbooks/3.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 1104₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#"
              >Как убить дракона: Путеводитель героя фэнтези по реальному
              средневековью</a
            >
          </div>
          <span class="box-details-author">Кейт Стивенсон</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/newbooks/4.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 959₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Восхождение фениксов</a>
          </div>
          <span class="box-details-author">Гуйюань Тянься</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/newbooks/5.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 959₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Восстание клана Чан</a>
          </div>
          <span class="box-details-author">Гуйюань Тянься</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/newbooks/6.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 516₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Требуется няня</a>
          </div>
          <span class="box-details-author">Джорджина Кросс</span>
        </div>
      </div>
    </div>
  </section>

  <section class="container-sales">
    <div class="sales-header">
      <div class="header-title">
        <a href="#">Все книги</a>
      </div>
      <a class="header-more-link" href="#">
        <div class="header-more">
          <span>Больше книг</span>
          <img src="../assets/img/sales/icons/more_arrow.png" alt="" />
        </div>
      </a>
    </div>
    <div class="boxes">
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/allbooks/1.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 1602₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Властелин колец</a>
          </div>
          <span class="box-details-author">Толкин Джон Рональд Руэл</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/allbooks/2.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 740₽</span>
          </div>
          <div class="box-title three_point"><a href="#">Дюна</a></div>
          <span class="box-details-author">Фрэнк Герберт</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/allbooks/3.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 779₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Приключение Шерлока Холмса</a>
          </div>
          <span class="box-details-author">Дойль Артур Конан</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/allbooks/4.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 642₽</span>
          </div>
          <div class="box-title three_point">
            <a href="#">Звёздные войны: Расцвет Республики</a>
          </div>
          <span class="box-details-author">Клаудия Грей</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/allbooks/5.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 607₽</span>
          </div>
          <div class="box-title three_point"><a href="#">Три мушкетёра</a></div>
          <span class="box-details-author">Дюма Александр</span>
        </div>
      </div>
      <div class="box">
        <a href=""
          ><img class="box-img" src="../assets/img/allbooks/6.png" alt=""
        /></a>
        <div class="box-fav">
          <a href="#"><img src="../assets/img/sales/icons/fav.png" alt="" /></a>
        </div>
        <div class="box-details">
          <div class="box-details-price">
            <span class="big-price">От 834₽</span>
          </div>
          <div class="box-title three_point"><a href="#">Сумерки</a></div>
          <span class="box-details-author">Стефани Майер</span>
        </div>
      </div>
    </div>
  </section>
  <!-- 
    <section class="container-brands">
        <div class="brands">
            <div class="brand">
                <a href="#"><img src="../assets/img/brands/Book24.png" alt=""></a>
            </div>
            <div class="brand">
                <a href="#"><img src="../assets/img/brands/Labirint.png" alt=""></a>
            </div>
            <div class="brand">
                <a href="#"><img src="../assets/img/brands/Chitai.png" alt=""></a>
            </div>
        </div>
    </section> -->

  <footer class="footer">
    <div class="container-footer">
      <div class="footer-content">
        <div class="footer-left">
          <img src="../assets/img/navbar/logo.png" alt="" class="footer-logo" />
          <p>
            BOOKLOUNGE - это ваш онлайн-каталог хужожественной литературы. Мы
            предоставляем огромный список книг ведущих магазинов. У нас вы легко
            и быстро найдете книгу, сравните цены, выберите магазин и купите
            книгу по выгодной цене!
          </p>
        </div>
        <div class="footer-middle">
          <p>Категории</p>
          <div class="middle">
            <div class="footer-middle1">
              <div><a href="#">Боевики и триллеры</a></div>
              <div><a href="#">Детективы</a></div>
              <div><a href="#">Драматургия</a></div>
              <div><a href="#">Кино и книги</a></div>
            </div>
            <div class="footer-middle2">
              <div><a href="#">Книги на иностранных языках</a></div>
              <div><a href="#">Книги о приключениях</a></div>
              <div class="footer-more">
                <a href="#">Смотреть больше </a
                ><img src="../assets/img/sales/icons/more_arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="footer-right">
          <p>О нас</p>
          <div><a href="#">О проекте</a></div>
          <div><a href="#">Вопросы и ответы</a></div>
          <div><a href="#">Контакты</a></div>
        </div>
        <div class="footer-right-contacts">
          <div class="footer-contacts1">
            <img
              src="../assets/img/footer/email.png"
              alt=""
            />support@booklounge.com
          </div>
          <div class="footer-contacts2">
            <img src="../assets/img/footer/node.png" alt="" />Обратная связь
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div style="border-bottom: solid 1px #e9e9e9; margin-top: 80px"></div>
  <div class="footer-agreement">
    <div>©2023 BOOKLOUNGE Пользовательское соглашение</div>
    <div>
      <a href="#"><img src="../assets/img/footer/link.png" alt="" /></a>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('/booksdb');
        this.books = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
  },
};
</script>
