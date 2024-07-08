import {useEffect} from "react";
import axios from "axios";

const NovaPoshtaPage = () => {

    useEffect(()=>{
        const key = "63aa362a44e812e38243bd8fb803b606";
        const model =
            {
                apiKey: key,
                modelName: "Address",
                calledMethod: "getSettlementAreas",
                methodProperties:
                    {
                        page: 1,
                        ref: ""
                    }
            };
        axios.post("https://api.novaposhta.ua/v2.0/json/", model)
            .then(resp => {
                console.log("result ", resp);
            });
        console.log("User Effect");
    },[]);

    return (
        <>
            <h1>Отримання даних із нової пошти</h1>
        </>
    )
}

export default NovaPoshtaPage;