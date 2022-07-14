import {ChangeEvent, Component, FormEvent} from "react";
import Header from "@components/Header";
import {store} from "@app/store";
import {loginAction} from "@store/api-actions";

interface LoginPageState {
    email: string,
    password: string
}

interface LoginPageProps {

}

class Login extends Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        //@ts-ignore
        this.setState({
            [name]: value
        })
    }

    handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        store.dispatch(loginAction(this.state));
    }


    render() {
        return (
            <div className="fix-content">
                <Header/>

                <div className="container">
                    <section className="login">
                        <form onSubmit={((e) => this.handleSubmitForm(e))} className="login_form" action="" method="POST">
                            <fieldset className="login_fieldset">
                                <legend className="login_legend">Пожалуйста авторизуйтесь</legend>
                                <label className="login_label">
                                    <span className="login_label-caption">Почта</span>
                                    <input
                                        onChange={((e) => this.handleChangeValue(e))}
                                        type="email" className="login_input"
                                        placeholder="Введите вашу корпоративную почту"
                                        name="email"
                                        required
                                    />
                                </label>
                                <label className="login_label">
                                    <span className="login_label-caption">Пароль</span>
                                    <input
                                        onChange={((e) => this.handleChangeValue(e))}
                                        type="password"
                                        className="login_input"
                                        placeholder="Введите пароль"
                                        name="password"
                                        required
                                    />
                                </label>
                            </fieldset>
                            <button className="login_button">Войти</button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default Login