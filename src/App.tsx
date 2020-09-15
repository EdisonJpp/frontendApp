import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./views/home/header/Header";
import Routes from "./routes/Index";
import Container from '@material-ui/core/Container';


function App() {
    return (
        <main className="App">
            <Header />
            <React.Suspense fallback={<div> Loading...</div>}>
                <body>
                    <Switch>
                        <Container>
                            {
                                Routes.map((routes, index) => {
                                    return (
                                        <Route exact={routes.exact} path={routes.path} component={routes.component} key={index} />

                                    );
                                })
                            }
                        </Container>
                    </Switch>
                </body>
            </React.Suspense>
            {/* footer  */}
        </main>
    );
}

export default App;
