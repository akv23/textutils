import React from 'react'

function Alert(props) {
    const Capitalize=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
  )
}

export default Alert
