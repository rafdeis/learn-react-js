import React from "react"

const Welcome = (props) => {
    console.log(props.name)
    return <div>Hallo {props.name} Apa Kabar</div>
  }

export default Welcome