export default {

    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '@/modules/portfolio/layouts/PortfolioLayout.vue'),
    children: [
        {
            path: '/',
            name: 'work',
            component: () => import(/* webpackChunkName: "work" */ '@/modules/portfolio/views/WorkView.vue')
        },
        {
            path: 'about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@/modules/portfolio/views/AboutView.vue')
            // props: (route) => {
            //     return {
            //         id: route.params.id
            //     }
            // }
        },
        {
            path: 'contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ '@/modules/portfolio/views/ContactView.vue')
        },
        {
            path: 'notes',
            name: 'notes',
            component: () => import(/* webpackChunkName: "notes" */ '@/modules/portfolio/views/NotesView.vue')
        },
        // {
        //     path: 'list',
        //     name: 'impossible-list',
        //     component: () => import(/* webpackChunkName: "impossible-list" */ '@/modules/portfolio/views/ListView.vue')
        // }
    ]
}
