import React from 'react';
import {Switch, Route} from "react-router-dom";

const LazyHeader = React.lazy(() => import("./views/home/header/Header"));

function App() {

    return (
        <React.Suspense fallback={<div> Loading...</div>}>
            <div className="App">
                <Switch>
                    <Route path="/" component={LazyHeader}/>
                </Switch>
            </div>
        </React.Suspense>

    );
}

export default App;
