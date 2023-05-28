<template>
    <nav class="navbar">
        <div class="navbar-menu-left">
        <a href="#/" class="navbar-menu-logo">
            <img src="../assets/img/navbar/logo.png" alt="BOOKLOUNGE" class="navbar-logo">
        </a>
        <div class="navbar-menu-left-bottom">
            <ul class="navbar-lists">
            <li class="navbar-list"><a href="#/stocks" class="navbar-list-title">Акции</a></li>
            <li class="navbar-list"><a href="#/newbooks" class="navbar-list-title">Новинки</a></li>
            <li class="navbar-list"><a href="#/sales" class="navbar-list-title">Скидки</a></li>
            <li class="navbar-list"><a href="#/books" class="navbar-list-title">Все книги</a></li>
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
                <input type="text" class="search" name="" placeholder="Поиск по книге, автору, жанру и издательству">
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
        <a href="#/books"><div class="cur">Все книги</div></a> 
    </div>

    <div class="top-title">
        <div class="title">
            <div class="title-text">Все книги</div>
            <div class="count-books">Найдено 10 000 книг</div>
        </div>
        <div class="accardeon">
            <div class="accardeon-item">
                <input type="checkbox" class="accardeon-input" id="accardeon-1">
                <label for="accardeon-1" class="accardeon-title">Сначала новые</label>
                <div class="accardeon-content">
                    <div> <a href="#">По возрастанию цены</a></div>
                    <div> <a href="#">По убыванию цены</a></div>
                   
                </div>
            </div>
        </div>
    </div>


    <section class="container-books">
        <div class="content-books">
            <div class="accardeon-column">
                <div class="accardeon">
                    <div class="accardeon-item">
                        <input type="checkbox" class="accardeon-input" id="accardeon-2">
                        <label for="accardeon-2" class="accardeon-title">Все книги</label>
                        <div class="accardeon-content">
                            <div> <a href="#/name_category">Боевики и триллеры</a></div>
                            <div> <a href="#/name_category">Детективы</a></div>
                            <div> <a href="#/name_category">Драматургия</a></div>
                            <div> <a href="#/name_category">Кино и книги</a></div>
                            <div> <a href="#/name_category">Книги на иностранных языках</a></div>
                            <div> <a href="#/name_category">Книги о приключениях</a></div>
                            <div> <a href="#">Комиксы.Манга.Артбуки</a></div>
                            <div> <a href="#">Литературные премии</a></div>
                            <div> <a href="#">Любовный роман</a></div>
                            <div> <a href="#">Поэзия</a></div>
                            <div> <a href="#">Проза</a></div>
                            <div> <a href="#">Ужасы.Мистика</a></div>
                            <div> <a href="#">Фантастика</a></div>
                            <div> <a href="#">Фэнтези</a></div>
                            <div> <a href="#">Эпос и фольклор</a></div>
                            <div> <a href="#">Юмор и сатира</a></div>
                        </div>
                    </div>
                </div>
                <div class="filter">
                    <div><a href="#/newbooks">Новинки</a> </div>
                    <div><a href="#/sales">Скидки</a></div>
                </div>
               
                <div class="accardeon">
                    <div class="accardeon-item">
                        <input type="checkbox" class="accardeon-input" id="accardeon-3">
                        <label for="accardeon-3" class="accardeon-title">Фильтры</label>
                        <div class="accardeon-content">
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter1">
                                <label for="filter1" class="filter-title">Новинки</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter2">
                                <label for="filter2" class="filter-title">Скидки</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter3">
                                <label for="filter3" class="filter-title">Боевики и триллеры</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter4">
                                <label for="filter4" class="filter-title">Детективы</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter5">
                                <label for="filter5" class="filter-title">Кино и книги</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter6">
                                <label for="filter6" class="filter-title">Книги на иностранных языках</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter7">
                                <label for="filter7" class="filter-title">Книги о приключениях</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter8">
                                <label for="filter8" class="filter-title">Комиксы.Манга.Артбуки</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter9">
                                <label for="filter9" class="filter-title">Литературыне премии</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter10">
                                <label for="filter10" class="filter-title">Любовный роман</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter11">
                                <label for="filter11" class="filter-title">Поэзия</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter12">
                                <label for="filter12" class="filter-title">Ужасы.Мистика</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter13">
                                <label for="filter13" class="filter-title">Фантастика</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter14">
                                <label for="filter14" class="filter-title">Фэнтези</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter15">
                                <label for="filter15" class="filter-title">Эпос и фольклор</label>
                            </div>
                            <div> 
                                <input type="checkbox" class="filter-input" id="filter16">
                                <label for="filter16" class="filter-title">Юмор и сатира</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="form">
                    <div class="bar">
                        <div class="label">Цена, ₽</div>
                        <div class="slider-styled" id="r-slider"></div>
                    </div>
                    <!-- <div class="bar">
                        <div class="label">Discount</div>
                        <div id="m-slider"></div>
                    </div> -->
                    <!-- <div class="bar flex">
                        <div id="reset" class="button">Reset</div>
                    </div> -->
                </div>
            </div>
            <div class="boxes">
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/allbooks/1.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 1602₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Властелин колец</a></div>
                        <span class="box-details-author">Толкин Джон Рональд Руэл</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/allbooks/2.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
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
                    <a href=""><img class="box-img" src="../assets/img/allbooks/3.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 779₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Приключение Шерлока Холмса</a></div>
                        <span class="box-details-author">Дойль Артур Конан</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/allbooks/4.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 642₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Звёздные войны: Расцвет Республики</a></div>
                        <span class="box-details-author">Клаудия Грей</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/allbooks/5.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
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
                    <a href=""><img class="box-img" src="../assets/img/allbooks/6.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 834₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Сумерки</a></div>
                        <span class="box-details-author">Стефани Майер</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/newbooks/1.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 1050₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Маленький принц и Цитадель</a></div>
                        <span class="box-details-author">Антуан де Сент-Экзюпери</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/newbooks/2.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 570₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Белая рыба.Сказания о Бай и Ю. Семена сожаления</a></div>
                        <span class="box-details-author">Шу Гу</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/newbooks/3.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 1104₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Как убить дракона: Путеводитель героя фэнтези по реальному средневековью</a></div>
                        <span class="box-details-author">Кейт Стивенсон</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/newbooks/4.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 959₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Восхождение фениксов</a></div>
                        <span class="box-details-author">Гуйюань Тянься</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/newbooks/5.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 959₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Восстание клана Чан</a></div>
                        <span class="box-details-author">Гуйюань Тянься</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/newbooks/6.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 516₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Требуется няня</a></div>
                        <span class="box-details-author">Джорджина Кросс</span>
                    </div>
                </div> 
                 <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/sales/4.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 210₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Великий Гэтсби</a></div>
                        <span class="box-details-author">Френсис Скотт Фицджеральд</span>
                    </div>
                </div>  
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/sales/5.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 175₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Дом с приведениями</a></div>
                        <span class="box-details-author">Вирджиния Вулф</span>
                    </div>
                </div>   
                <div class="box">
                    <a href=""><img class="box-img" src="../assets/img/sales/3.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 248₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#">Убийство в "Восточном экспрессе"</a></div>
                        <span class="box-details-author">Агата Кристи</span>
                    </div>
                </div>  
                <div class="box">
                    <a href="#/details"><img class="box-img" src="../assets/img/sales/6.png" alt=""></a>
                    <div class="box-fav">
                        <a href="#"><img src="../assets/img/sales/icons/fav.png" alt=""></a>
                    </div>
                    <div class="box-details">
                        <div class="box-details-price">
                            <span class="big-price">От 642₽</span>
                        </div>
                        <div class="box-title three_point"><a href="#/details">Совершенно замечательная вещь</a></div>
                        <span class="box-details-author">Грин Хэнк</span>
                    </div>
                </div>  
               
            </div>
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