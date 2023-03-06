import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Users = () => {

    // REQ|RES API: https://reqres.in/
    // AXIOS package for making HTTP requests: https://www.npmjs.com/package/axios

    useEffect(() => {
        reqResApi.get('/users')
            .then( response => {
                console.log(response.data.data);
            })
            // Same as: .catch(error => console.log(error))
            .catch(console.log);
    }, [])
    
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

            </tbody>
        </table>
    </>
  )
}