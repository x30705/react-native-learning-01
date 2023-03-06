import { User } from '../interfaces/reqResp';
import { useUsers } from '../hooks/useUsers';

export const Users = () => {

    const {users, nextPage, previousPage} = useUsers();

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
        <button className='btn btn-primary' onClick={previousPage}>
            Previous
        </button>

        &nbsp;
        
        <button className='btn btn-primary' onClick={nextPage}>
            Next
        </button>
    </>
  )
}