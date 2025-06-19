import React from "react";
import style from './Sign_in.module.css'
import { Outlet, Link } from "react-router-dom";



function SigninPage() {

return(

<div className={style.SigninPage}>


<h1>quốc gay</h1>
<a href="/">quay về trang chủ</a>

</div>


);
}
export default SigninPage;