import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {app} from './Firebase'

const auth = getAuth(app);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}   

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const logout = () => {
    return signOut(auth)
}

const checkUser = () => {
    return auth.currentUser ? true : false
}

export {registerUser, loginUser, logout, checkUser, auth}