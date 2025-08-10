import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedAdmin({isAdmin, children}) {

    if(isAdmin){
        return children
    }else{
        return <Navigate to='/admin/login'/>
    }
}

export default ProtectedAdmin