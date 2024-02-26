import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <>
        <h1>Welcome to Employee Management Tool</h1>

        <Link to='viewEmployees'>View all employees</Link>
    </>
  )
}
