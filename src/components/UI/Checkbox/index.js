import React from 'react'
import "./styles.css"

export const Checkbox = () => {
  const [checked, setChecked] = React.useState(false)

  return <div className="checkbox" onClick={() => setChecked(!checked)} >{checked ? 'yes' : 'no'}</div>
}
