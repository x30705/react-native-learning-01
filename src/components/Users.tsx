import { useEffect, useState } from 'react';
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from '../interfaces/reqResp';

export const Users = () => {

    // REQ|RES API: https://reqres.in/
    // AXIOS package for making HTTP requests: https://www.npmjs.com/package/axios

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        reqResApi.get<ReqResList>('/users')
            .then( response => {
                setUsers(response.data.data);
            })
            // Same as: .catch(error => console.log(error))
            .catch(console.log);
    }, [])

    // With {field} you can take only the filds you need.
    const renderItem = ({id, avatar, first_name, email}: User) => {
        return(
            // Add key to let React know when an element is removed. ReactNative will need it to be a string.
            // In img: first { means "Java Scritp Expresssion", second { means "Expression Itself" (style object).
        <tr key={id.toString()}>
            <td>
                <img
                    src={avatar}
                    alt={first_name}
                    style={{
                        width: 50,
                        borderRadius: 100
                    }}
                />
            </td>
            <td>{first_name}</td>
            <td>{email}</td>
        </tr>
        )
    }

  return (
    <>
        <h3>Users</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Same as: users.map((user: User) => renderItem(user))
                    users.map(renderItem)
                }
            </tbody>
        </table>
    </>
  )
}