import React from 'react'
import FilterLink from './FilterLink'

const Footer = ({match}) => (
  <p>
    Show:
    {" "}
    <FilterLink filter="all" match={match}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter="active" match={match}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="completed" match={match}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
