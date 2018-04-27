var log = function(value) {
    console.log("%c" + value, 'background: #bdc3c7; color: black; font-size:10px;');
};
import VueRouter from 'vue-router';
import Vue from 'vue';
import store from './store/store';

Vue.use(VueRouter);
const Index = () => import(/* webpackChunkName: "index" */'../component/Index.vue');

const About = {
    Index : () => import(/* webpackChunkName: "aboutIndex" */'../component/About/About.template.vue'),
    Origin : () => import(/* webpackChunkName: "aboutOrigin" */'../component/About/Origin.vue'),
    Idea : () => import(/* webpackChunkName: "aboutIdea" */'../component/About/Idea.vue'),   
    Future : () => import(/* webpackChunkName: "aboutFuture" */'../component/About/Future.vue'),   
    Catalog : () => import(/* webpackChunkName: "aboutCatalog" */'../component/About/Catalog.vue'),   
    QA : () => import(/* webpackChunkName: "aboutQA" */'../component/About/QA.vue'),   
};

const Event = {
    List : () => import(/* webpackChunkName: "eventList" */'../component/Event/eventList.vue'),
    Post : () => import(/* webpackChunkName: "eventPost" */'../component/Event/eventPost.vue'),
}

const Review = {
    List : () => import(/* webpackChunkName: "reviewList" */'../component/Review/reviewList.vue'),
    Post : () => import(/* webpackChunkName: "reviewPost" */'../component/Review/reviewPost.vue'),
}

const Artist = {
    List : () => import(/* webpackChunkName: "artistList" */'../component/Artist/artistList.vue'), 
    Post : () => import(/* webpackChunkName: "artistPost" */'../component/Artist/artistPost.vue'),
}

const Reference = {
    List : () => import(/* webpackChunkName: "referenceList" */'../component/Reference/referenceList.vue'), 
}

const Activity = {
    List : () => import(/* webpackChunkName: "activityList" */'../component/News/activityList.vue'),
    Post : () => import(/* webpackChunkName: "activityPost" */'../component/News/activityPost.vue'),
}

const News = {
    List : () => import(/* webpackChunkName: "newsList" */'../component/News/newsList.vue'),
    Post : () => import(/* webpackChunkName: "newsPost" */'../component/News/newsPost.vue'),
}

const Recommend = () => import(/* webpackChunkName: "recommend" */'../component/Recommend.vue');


const router = new VueRouter( {
    // mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '/index', component: Index },
        { path: '/about', component: About.Index ,
            children : [
                { path: '', redirect: 'feature'  },
                { path: 'feature', component: About.QA  },
                { path: 'origin', component: About.Origin },
                { path: 'concept', component: About.Idea  },
                { path: 'rise', component: About.Future  },
                { path: 'reference', component: Reference.List  },
            ]
        },
        { path: '/catalog', component: About.Catalog  },
        { path: '/event', component: Event.List  },
        { path: '/event/:id', component: Event.Post  },
        { path: '/review', component: Review.List  },
        { path: '/review/:id', component: Review.Post  },
        { path: '/artist', component: Artist.List  },
        { path: '/artist/:id', component: Artist.Post  },
        { path: '/news', component: News.List },
        { path: '/news/:id', component: News.Post },
        { path: '/activity', component: Activity.List },
        { path: '/activity/:id', component: Activity.Post },
        { path: '/recommend', component: Recommend  },
    ]
});

router.beforeEach(( to, from, next ) => {
    log( `Router beforeEach to: ${to.path} from: ${from.path}` );

    if ( to.matched.some( function ( record ) {
        return record.meta.authorization || false;
    }) ) {
        var isLogin = store.state.isLogin;
        if ( isLogin ) {
            next();
        } else {
            next( { path: "/login", query: { redirect: to.fullPath } });
        }
    } else {
        next();
    }
});

router.afterEach( route => {
    log( "Router afterEach " + route.path );
    store.commit('menuShowMob', false);
    setTimeout(()=>{window.scrollTo(0,0)},500)
});
export default router;
