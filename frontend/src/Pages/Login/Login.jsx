import styles from './Login.module.css'
function Login(){

    return(
        <>
         <h1>create your new account</h1>
        <form action="" className={styles.f}>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />

        <button>click</button>
       </form>
        </>
      

    )
}

export default Login