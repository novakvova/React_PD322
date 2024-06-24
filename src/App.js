import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MainHeader from "./components/containers/header";

function App() {

    //маємо таблицю із користувача
    //має бути інтупи куди вносимо інформацію
    //При насткиу кнопки додати користувач появляється у таблиці. Вкиористать useState


    return (
        <>
            <MainHeader/>
            <div className="container">
                <h1 className={"text-center"}>Користувачів</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Фото</th>
                        <th scope="col">ПІБ</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Пошта</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                            <div className={"d-flex justify-content-center"}>
                                <img
                                    src="https://www.earth.com/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2023%2F08%2F26042949%2FNational-Dog-Day--960x640.jpg&w=3840&q=75"
                                    alt="Користувач"
                                    style={{maxWidth: "75px", maxHeight: "50px"}}/>
                            </div>

                        </th>
                        <td>Марко Іван Васильович</td>
                        <td>098 45 78 127</td>
                        <td>ivan@gmail.com</td>
                    </tr>

                    <tr>
                        <th scope="row">
                            <div className={"d-flex justify-content-center"}>
                                <img
                                    src="https://people.com/thmb/Nm5TRrGO050Au3O7PSiHdt424vk=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(576x0:578x2)/Dog-Bitsy-050224-1-0717aedc49ba405aa2a1a8315cb57c51.jpg"
                                    alt="Інь Янь"
                                    style={{maxWidth: "75px", maxHeight: "50px"}}/>
                            </div>
                        </th>
                        <td>Інь Янь</td>
                        <td>098 45 70 127</td>
                        <td>iniy@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default App;
