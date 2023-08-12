import { useRouteError } from "react-router-dom";

import React from 'react'




const Error = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='Error'>
      <h1>Oopss!</h1>
      <p>Sorry, an unexpected error has ocurred. 😒</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Error