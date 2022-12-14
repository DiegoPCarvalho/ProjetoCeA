import React from "react";
import './Login.css';



const HeaderProps = {
    icon: "sign-out",
    title: "Login"
}
export default function Login() {
    return (
        <div>
            <section className="login text-light">
                <div className="login_box sombra">
                    <div className="left">
                        <div class="contact">
                            <form action="">
                                <h3>LOGIN</h3>
                                <input type="text" className="text-light" placeholder="USUARIO" />
                                    <input type="password" className="text-light" placeholder="SENHA" />
                                        <a href="/Dashboard" className="btn btn-light submit">Entrar</a>
                                    </form>
                                </div>
                        </div>
                        <div className="right bg-light">
                            <div className="right-text">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



