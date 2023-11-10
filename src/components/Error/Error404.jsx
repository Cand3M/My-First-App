import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from './error.module.css';
function Error404(){
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=> navigate('/'), 3000)
    },[])

    return <div className={styles.error}>
        <img src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1684371895/Error_404_m6fj3t.gif" alt="error404" />
    </div>
}

export default Error404;