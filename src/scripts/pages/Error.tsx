import Header from "@components/Header";
import {AppRoute} from "@app/constants";
import {Component, ReactNode} from "react";
import {NavLink} from "react-router-dom";

class Error extends Component {
    render(): ReactNode {
        return (
            <div className="fix-content">
                <Header/>
                <div className="container">
                    <section className="error-page">
                        <h3>Ошибка 404</h3>
                        <div className="error-page_text">Что-то пошло не так. Перейдите на <NavLink to={AppRoute.ROOT}>главную
                            страницу</NavLink></div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Error;