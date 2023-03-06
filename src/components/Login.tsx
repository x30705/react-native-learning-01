import {useReducer, useEffect} from 'react';

// useState is similiar to the Redux concept
// useful for handling more elaborated states


// Number 1: Define object initial state.

interface AuthState{
    validating: boolean;
    token: string | null,
    userAlias: string;
    userName: string;
}

const initialState: AuthState = {
        validating: true,
        token: '' ,
        userAlias: '',
        userName: ''
}

// Number 2: Create reducer.

type LoginPayload = {
    userAlias: string;
    userName: string;
}

type AuthAction =
    | {type: 'logout'}
    | {type: 'login', payload: LoginPayload};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return{
                validating: false,
                token: null,
                userAlias: '',
                userName: ''
            }

        case 'login':
            const {userAlias, userName} = action.payload;
            return{
                validating: false,
                token: 'ABC123',
                userAlias,
                userName
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    // Number 3.1: Implement reducer.

    // reducer: Function to return a new state.
    // initialState: Object initialization.
    // state: Object current state.
    // Dispatch: Function to trigger an action.

    const [{ validating, token, userName }, dispatch] = useReducer(authReducer, initialState);

    // SetUp: First Loading.

    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: 'logout'});
      }, 1500);
      // If you place the state inside this array, useEffect will be triggered each time the state changes.
    }, [])

    if(validating){
        return(
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    // 3.2: Create functions to use reducer.

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                userAlias: 'Gerardo',
                userName: 'random-green'
        }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    // 3.3: Call functions to user reducer.
    
  return (
    <>
        <h3>Login</h3>
        {
            (token)
                ? <div className="alert alert-success">Authenticated as: {userName}</div>
                : <div className="alert alert-danger">Not Autenticated</div>
        }
        { 
            (token)
            ? <button className="btn btn-danger" onClick={ logout }>Logout</button>
            : <button className="btn btn-primary" onClick={ login }>Login</button>
        }
    </>
  )
}
