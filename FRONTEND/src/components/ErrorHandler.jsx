import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { removeError } from '../store/reducers/errorSlice'


const ErrorHandler = () => {

    const { message } = useSelector((state) => state.error)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(message){
            toast.error(message);
            dispatch(removeError())

        }
    },[message, dispatch])

    return null
}

export default ErrorHandler
