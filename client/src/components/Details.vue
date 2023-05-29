<template>
    <nav class="navbar">
        <div class="navbar-menu-left">
        <a href="#/" class="navbar-menu-logo">
            <img src="../assets/img/navbar/logo.png" alt="BOOKLOUNGE" class="navbar-logo">
        </a>
        <div class="navbar-menu-left-bottom">
            <ul class="navbar-lists">
            <li class="navbar-list"><a href="#/stocks" class="navbar-list-title">Акции</a></li>
            <li class="navbar-list"><a href="#" class="navbar-list-title">Новинки</a></li>
            <li class="navbar-list"><a href="#" class="navbar-list-title">Скидки</a></li>
            <li class="navbar-list"><a href="#" class="navbar-list-title">Все книги</a></li>
            <li class="navbar-list"><a href="#" class="navbar-list-title">Магазины</a></li>
            </ul>
        </div>
        </div>
        <div class="navbar-menu-center">
        <ul class="navbar-menu-center-items">
            <li class="navbar-menu-center-item">
            <a href="" class="catalog-btn">
                <img src="../assets/img/navbar/catalog.png" alt="" class="catalog-img">
            </a>
            </li>
            <li class="navbar-menu-center-item">
            <div class="search-box">
                <input type="text" class="search" name="" placeholder="Поиск по магазину, книге, автору, жанру и издательству">
            </div>
            </li>
            <li class="navbar-menu-center-item"><a href="#" class="search-btn"><img src="../assets/img/navbar/search.png" alt="" class="search-img"></a>
            </li>
        </ul>
        </div>
        <div class="navbar-menu-right">
        <ul>
            <div class="fav-icon">
            <a href="#/favorite"><img src="../assets/img/navbar/user.png" alt=""></a>
            </div>
            <div class="fav-icon">
            <a href="#/favorite"><img src="../assets/img/navbar/favorite.png" alt=""></a>
            </div>
        </ul>
        </div>
    </nav>

    <div class="routes">
        <a href="#/"><div class="main">Главная </div></a> 
        <img src="../assets/img/favorite/arrow.png" alt="">
        <a href="#/details"><div class="cur">Дюна</div></a> 
    </div>


    <section class="container-details">
        <div class="top-content">
            <div class="content-img">
                <img src="../assets/img/details/1.png" alt="">
                <a class="fav" href="#">
                    <img src="../assets/img/navbar/favorite.png" alt="">
                </a>
            </div>
            <div class="content-params">
                <div class="params-title">Дюна</div>
                <div class="params-author">Фрэнк Герберт</div>
                <div class="params">
                    <table>
                        <tr>
                            <td>ID товара</td>
                            <td>2861045</td>
                        </tr>
                        <tr>
                            <td>Издательство</td>
                            <td>АСТ</td>
                        </tr>
                        <tr>
                            <td>Серия</td>
                            <td>Хиты экрана: Дюна</td>
                        </tr>
                        <tr>
                            <td>Год издания</td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td>ISBN</td>
                            <td>978-5-17-134272-2</td>
                        </tr>
                        <tr>
                            <td>Количество страниц</td>
                            <td>704</td>
                        </tr>
                        <tr>
                            <td>Размер</td>
                            <td>20.6х13.5х3.2</td>
                        </tr>
                        <tr>
                            <td>Тип обложки</td>
                            <td>Твердый переплет</td>
                        </tr>
                        <tr>
                            <td>Тираж</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>Вес, г</td>
                            <td>560</td>
                        </tr>
                        <tr>
                            <td>Возрастные ограничения</td>
                            <td>16+</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="content-purchase">
                <div class="shop">
                    <div class="shop-img"><img src="../assets/img/brands/Chitai.png" alt=""></div>
                    <div class="shop-prices">
                        <div class="shop-small-price">849₽</div>
                        <div class="shop-big-price">645₽</div>
                    </div>
                    <div class="buy-btn">
                        <a href="#">Купить</a>
                    </div>
                </div>
                 <div class="shop">
                    <div class="shop-img"><img src="../assets/img/brands/Labirint.png" alt=""></div>
                    <div class="shop-prices">
                        <div class="shop-small-price">849₽</div>
                        <div class="shop-big-price">702₽</div>
                    </div>
                    <div class="buy-btn">
                        <a href="#">Купить</a>
                    </div>
                </div>
                 <div class="shop">
                    <div class="shop-img"><img src="../assets/img/brands/Book24.png" alt=""></div>
                    <div class="shop-prices">
                        <div class="shop-small-price">1014₽</div>
                        <div class="shop-big-price">740₽</div>
                    </div>
                    <div class="buy-btn">
                        <a href="#">Купить</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-content">
            Роман "Дюна", первая книга прославленной саги, знакомит читателя с Арракисом – миром суровых пустынь, исполинских песчаных червей, отважных фрименов и таинственной специи. Безграничная фантазия автора создала яркую, почти осязаемую вселенную, в которой есть враждующие Великие Дома, могущественная Космическая Гильдия, загадочный Орден Бинэ Гессерит и неуловимые ассасины. По мотивам "Дюны" снял свой гениальный фильм Дэвид Линч, а в 2021 году вышла новая экранизация Дени Вильнёва, главные роли в которой исполнили Тимоти Шаламе, Зендая, Стеллан Скарсгард, Джейсон Момоа и другие.
        </div>
    </section>

    <footer class="footer">
        <div class="container-footer">
            <div class="footer-content">
                <div class="footer-left">
                    <img src="../assets/img/navbar/logo.png" alt="" class="footer-logo">
                    <p>BOOKLOUNGE - это ваш онлайн-каталог хужожественной литературы. Мы предоставляем огромный список книг ведущих магазинов. У нас вы легко и быстро найдете книгу, сравните цены, выберите магазин и купите книгу по выгодной цене!</p>
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
                            <div class="footer-more"><a href="#">Смотреть больше </a><img src="../assets/img/sales/icons/more_arrow.png" alt=""></div>
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
                    <div class="footer-contacts1"><img src="../assets/img/footer/email.png" alt="">support@booklounge.com</div>
                    <div class="footer-contacts2"><img src="../assets/img/footer/node.png" alt="">Обратная связь</div>
                </div>
            </div>
            
        </div>
    </footer>
    <div style="border-bottom: solid 1px #e9e9e9; margin-top: 80px;"></div>
    <div class="footer-agreement">
       <div>©2023 BOOKLOUNGE Пользовательское соглашение</div> 
       <div><a href="#"><img src="../assets/img/footer/link.png" alt=""></a></div>
    </div>
</template>