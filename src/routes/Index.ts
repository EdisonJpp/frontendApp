
import React from "react" ; 

const LazyViewHeaderUser = React.lazy(()=> import("../components/profile/profile-header-opctions/RightHeaderView"));
const LazySignUpView = React.lazy(()=> import("../views/sign-up")); 
const LazyHomeView = React.lazy(()=> import('../views/home'));


const Routes = [
    {
        name : 'Home',
        path : '/',
        exact : true , 
        component : LazyHomeView
        
    },
    {
        name : "Categorias", 
        path : "/hola" , 
        exact : true , 
        component : LazyViewHeaderUser , 
    },
    {
        name : "Iniciar Session",
        path : "/sign-up",
        exact : true ,
        component : LazySignUpView
    }
]; 

export default Routes ; 