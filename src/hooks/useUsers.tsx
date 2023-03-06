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
        }else{
            pageNumber.current--;
        }
        
    }

    const nextPage = () => {
        pageNumber.current ++;
        loadUsers();
    }

    const previousPage = () => {
        if(pageNumber.current > 1){
            pageNumber.current --;
            loadUsers();
        }
    }

    return{
        users,
        nextPage,
        previousPage,
    }

}
