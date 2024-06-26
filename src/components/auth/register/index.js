import TextInput from "../../common/input";

const RegisterPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit form ");
    }
    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>

                <TextInput label={"Прізвище"} field={"firstName"} type={"text"} />
                <TextInput label={"Ім'я"} field={"name"} type={"text"} />
                <TextInput label={"Телефон"} field={"phone"} type={"text"} />
                <button type="submit" className="btn btn-primary">Реєструватися</button>

            </form>
        </>
    )
}

export default RegisterPage;