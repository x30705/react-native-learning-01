import { useEffect, useRef, useState } from 'react';
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from '../interfaces/reqResp';

export const useUsers = () => {
    
    // REQ|RES API: https://reqres.in/
    // AXIOS package for making HTTP requests: https://www.npmjs.com/package/axios

    const [users, setUsers] = useState<User[]>([]);

    const pageNumber = useRef(1);

    useEffect(() => {
        loadUsers();
    }, [])

    // Refactoring using async
    const loadUsers = async() => {
        const response = await reqResApi.get<ReqResList>('/users', {
            params:{
                page: pageNumber.current
            }
        })
        if(response.data.data.length > 0){
            setUsers(response.data.data);
            pageNumber.current++;
            console.log(pageNumber.current)
        }else{
            alert('No more records');
        }
        
    }

    return{
        users,
        loadUsers
    }
    
}
