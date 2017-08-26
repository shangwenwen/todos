import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const FilterLink = ({ filter, children, match }) => {
  return (
    <Link
      to={ filter === 'all' ? '' : filter }
      className={
      (filter === 'all' && match.params.filter === undefined)
      ? 'active'
      : filter === match.params.filter
      ? 'active'
      : ''
      }
    >
      {children}
    </Link>
  )
}

export default FilterLink
