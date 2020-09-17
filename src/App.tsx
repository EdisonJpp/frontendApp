import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./views/home/header/Header";
import Routes from "./routes/Index";

function App() {

    const [backgroundSinUp , setbackgroundSinUp]  = React.useState(false); 

    React.useEffect(()=>{
        let location = window.location.pathname ; 
        if(location === '/sign-up'){
            setbackgroundSinUp(true);
        }
    }, []);

    return (
        <main className="App">
            {
                !backgroundSinUp && <Header /> 
            }
            
            <React.Suspense fallback={<div> Loading...</div>}>
                    <Switch>
                            {
                                Routes.map((routes, index) => {
                                    return (
                                        <Route exact={routes.exact} path={routes.path} component={routes.component} key={index} />

                                    );
                                })
                            }
                    </Switch>
            </React.Suspense>
        </main>
    );
}

export default App;
