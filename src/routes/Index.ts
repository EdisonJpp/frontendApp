
import React from "react" ; 

// const LazyButton = React.lazy(() => import("../components/buttons/sale-button/SaleButton"));
const LazyViewHeaderUser = React.lazy(()=> import("../components/profile/profile-header-opctions/RightHeaderView"));

const Routes = [
    // {
    //     path : "/" ,
    //     component : LazyButton , 
    //     exact : true , 
    //     name : "Header"
    // },
    {
        path : "/hola" , 
        component : LazyViewHeaderUser , 
        exact : true , 
        name : "category" 
    }
]; 

export default Routes ; 