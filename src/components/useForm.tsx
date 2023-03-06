import { useState } from 'react';

export const useForm = <T extends Object> (form: T) => {

    const [state, setState] = useState(form);

    // "keyof T" says: an element of the form (form is of type T (T takes its type from the argument of useForm))
    const onChange = (value: string, field: keyof T) => {
        setState({
            ...state, //To change only the specified fields (setForm alters the entire object)
            [field]: value //Create a field on the fly dynamically
        })
    }

    return{
        form: state, // Return the complete form object (with the name "form").
        ...state, // And, also return independent fields from form object.
        onChange,
    }
}
