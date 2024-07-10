import {useEffect, useState} from "react";
import axios from "axios";
import Select from 'react-select';

const NovaPoshtaPage = () => {
    const apiKey = "63aa362a44e812e38243bd8fb803b606";
    const [areas, setAreas] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const fetchAreas = async () => {
            const areasData = await getAreas();
            const options  = [];
            areasData.forEach(item => {
               options.push({
                   value: item.Ref, label: item.Description
               });
            });

            setAreas(options);
        }
        fetchAreas();
    }, []);

    useEffect(() => {
        if (selectedArea) {
            const fetchCities = async () => {
                const citiesData = await getCities(selectedArea);

                console.log("Cities Data", citiesData);

                const options  = [];
                citiesData.forEach(item => {
                    options.push({
                        value: item.Ref, label: item.Description
                    });
                });
                setCities(options);
            }
            fetchCities();
        }
    }, [selectedArea]);

    const getAreas = async () => {
        try {
            const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
                apiKey: apiKey,
                modelName: "Address",
                calledMethod: "getAreas"
            });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching areas:", error);
        }
    }

    const getCities = async (areaRef) => {
        try {
            const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
                apiKey: apiKey,
                modelName: "Address",
                calledMethod: "getCities",
                methodProperties: {
                    AreaRef: areaRef
                }
            });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    }


    return (
        <>
            <h1>Отримання даних із нової пошти</h1>

            <div className="primary-button mt-4">
                <em>Select Area:</em>
                <Select
                    //value={selectedOption}
                    onChange={(selectedOption) => {
                        setSelectedArea(selectedOption.value);
                        console.log("Select options", selectedOption);
                    }}
                    options={areas}
                />

                {selectedArea && (
                    <div style={{marginLeft: '20px'}}>
                        <em>Select City:</em>
                        <Select
                            //value={selectedOption}
                            // onChange={(selectedOption) => {
                            //     setSelectedArea(selectedOption);
                            //     console.log("Select options", selectedOption);
                            // }}
                            options={cities}
                        />
                    </div>
                )}

            </div>

        </>
    )
}

export default NovaPoshtaPage;