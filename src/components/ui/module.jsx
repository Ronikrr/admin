import React, { useState } from "react";
import Input from "./input";
import Primary from "./primary";
import Seconduray from "./seconduray";

const FormModule = ({ fields, onSubmit }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        let isValid = true;

        fields.forEach((field) => {
            const value = event.target[field.name].value;
            if (field.required && !value) {
                isValid = false;
                alert(`${field.label} is required`);
            }
            formData[field.name] = value;
        });

        if (isValid) onSubmit(formData);
    };

    const handleClose = () => {
        setIsVisible(false); // Hide the form
    };

    if (!isVisible) return null; // If not visible, return nothing

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    <Input
                        type={field.type}
                        name={field.name}
                        defaultValue={field.defaultValue || ""}
                        placeholder={field.placeholder || ""}
                    />
                </div>
            ))}
            <Primary type="submit">Submit</Primary>
            <Seconduray type="button" onClick={handleClose} style={{ marginLeft: "10px" }}>
                Close
            </Seconduray>
        </form>
    );
};

export default FormModule;
