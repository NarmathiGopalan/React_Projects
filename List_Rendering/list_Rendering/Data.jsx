import React from 'react'

export default function Data({Profile}) {
  return (
    <div>
      <h1>My name is {Profile.uname} and i am {Profile.job}</h1>
    </div>
  )
}
