import TextInput from "../../common/textInput";
import {useState} from "react";
import FileInput from "../../common/fileInput";
import * as yup from "yup";
import {useFormik} from "formik";

const RegisterPage = () => {

    const initValue = {
        firstName: "Вова",
        lastName: "",
        phone: "",
        image: null
    };

    const registerSchema = yup.object({
        lastName: yup.string()
            .required("Вкажіть прізвище")
    });

    const [data, setData] = useState(initValue);

    const handleFormikSubmit = (values) => {
        //e.preventDefault();
        console.log("Submit form ", values);
    }

    const formik = useFormik({
       initialValues: initValue,
        onSubmit: handleFormikSubmit,
        validationSchema: registerSchema
    });

    const {values, touched, errors,
        handleSubmit, handleChange} = formik;

    const onChangeHandler = (e) => {
        // console.log("onChange", e.target);
        // console.log("onChange", e.target.name);
        // console.log("onChange", e.target.value);
        setData({...data, [e.target.name]: e.target.value});
    }

    const onChangeFileHandler = (e) => {
        console.log("onChange", e.target.files);
        const file = e.target.files[0];
        if (file) {
            setData({...data, [e.target.name]: file});
        }
        else {
            setData({...data, [e.target.name]: null});
            alert("Оберіть фото");
        }
    }

    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>
                <TextInput label={"Прізвище"} field={"lastName"} type={"text"}
                           value={values.lastName}
                           error={errors.lastName}
                           onChange={handleChange}/>

                <TextInput label={"Ім'я"} field={"firstName"} type={"text"}
                           value={data.firstName}
                           onChange={onChangeHandler}/>

                <TextInput label={"Телефон"} field={"phone"} type={"text"}
                           value={data.phone}
                           onChange={onChangeHandler}/>

                <FileInput label={"Фото"} field={"image"}
                           value={data.image}
                           onChange={onChangeFileHandler}/>

                <button type="submit" className="btn btn-primary">Реєструватися</button>

            </form>
        </>
    )
}

export default RegisterPage;