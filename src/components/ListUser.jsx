import React from 'react'

const ListUser = () => {
    const {users} = useSelector(state => state.userList)
  return (
    <div>ListUser</div>
  )
}

export default ListUser;