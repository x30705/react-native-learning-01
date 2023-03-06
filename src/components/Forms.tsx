import { useState } from 'react';

export const Forms = () => {

    const [form, setForm] = useState({
        email: 'test@test.com',
        password: '123456'
    })

    const onChange = (value: string, field: string) => {
        setForm({
            ...form, //To change only the specified fields (setForm alters the entire object)
            [field]: value //Create a field on the fly dynamically
        })
    }


    return (
        <>
            <h3>Forms</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={form.email}
                /* target comes from the catched event */
                onChange={({target}) => onChange(target.value, 'email')}
            />
            
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={form.password}
                onChange={({target}) => onChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>
            </code>

        </>
    )
}
