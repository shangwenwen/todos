import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, receiveTodos } from '../actions'
import {getVisibleTodos} from '../reducers'
import TodoList from '../components/TodoList'
import { fetchTodos } from '../api'

class VisibleTodoList extends Component {

  componentDidMount(){
    this._fetchData()
  }

  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter) {
      this._fetchData()
    }
  }

  _fetchData() {
    const { filter, receiveTodos } = this.props
    fetchTodos(filter).then((todos) => {
      receiveTodos(filter, todos)
    })
  }

  render(){
    return (
      <TodoList {...this.props} />
    )
  }
}

// redux
export default connect(
  (state, {match}) => ({
    todos: getVisibleTodos(state, match.params.filter || 'all'),
    filter: match.params.filter || 'all'
  }),
  { toggleTodo, receiveTodos }
)(VisibleTodoList)
