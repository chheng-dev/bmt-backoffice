import React from "react";
import Loading from "./components/Screen/Pages/Loading";
import Input, { usePlacesWidget } from "react-google-autocomplete";
import { useNavigate } from "react-router-dom";
// import Input from "antd/es/input/Input";

export const Test = () => {
    const { ref } = usePlacesWidget({
        apiKey: `AIzaSyCN1jgYgkuvHq5hET1b0_UF4BCv7zdub0E`,

    })

    return (
        // <h1>Hello world</h1>


        <Input
            // types={["address"]}
            componentRestrictions={{ country: "US" }}
            ref={ref}
            placeholder="Enter Location...."
            onPlaceSelected={(selected) => console.log(selected)}
            language="en"
        />
    )

}
