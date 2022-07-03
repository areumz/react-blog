import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import PostView1 from './PostView1';
import PostView2 from './PostView2';
import PostView3 from './PostView3';
import PostView4 from './PostView4';
import PostView5 from './PostView5';
import PostView6 from './PostView6';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const HomePage = () => {

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Main} />
                
                <Route path="/post/1" component={PostView1} />
                <Route path="/post/2" component={PostView2} />
                <Route path="/post/3" component={PostView3} />
                <Route path="/post/4" component={PostView4} />
                <Route path="/post/5" component={PostView5} />
                <Route path="/post/6" component={PostView6} />
            </Switch>

            <Footer />
        </BrowserRouter>
    )
}

export default HomePage;