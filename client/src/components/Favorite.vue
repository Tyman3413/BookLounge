<template>
    <nav class="navbar">
        <div class="navbar-menu-left">
        <a href="#" class="navbar-menu-logo">
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
            <a href="/favorite"><img src="../assets/img/navbar/favorite.png" alt=""></a>
            </div>
        </ul>
        </div>
    </nav>

    <div class="routes">
        <a href="#/"><div class="main">Главная </div></a> 
        <img src="../assets/img/favorite/arrow.png" alt="">
        <a href="#/favorite"><div class="cur">Закладки</div></a> 
    </div>

    <div class="title">Закладки</div>

    <div class="middle-content">
        <div class="content-top">
            <div class="text">У вас пока нет закладок</div>
            <img src="../assets/img/favorite/smile.png" alt="">
        </div>
        <div class="content-bottom">Воспользуйтесь поиском или перейдите в каталог, чтобы найти книгу</div>
    </div>

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