import {createRouter, createWebHashHistory} from 'vue-router';
import Main from "./components/Main.vue";
import Favorite from "./components/Favorite.vue"
import Stocks from "./components/Stocks.vue"
import Details from "./components/Details.vue"
import Books from "./components/Books.vue"
import Sales from "./components/Sales.vue"
import NewBooks from "./components/NewBooks.vue"
import BookCategory from "./components/BookCategory.vue"
import BookGanre from "./components/BookGanre.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', component: Main
        },
        {
            path: '/favorite', component: Favorite
        },
        {
            path: '/stocks', component: Stocks
        },
        {
            path: '/details', component: Details
        },
        {
            path: '/books', component: Books
        },
        {
            path: '/sales', component: Sales
        },
        {
            path: '/newbooks', component: NewBooks
        },
        {
            path: "/name_category", component: BookCategory
        },
        {
            path: '/books/name_category/name_ganre', component: BookGanre
        }
    ]
})

