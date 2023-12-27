import React, {useEffect, useState} from 'react'
import { List } from 'semantic-ui-react'
import UserService from '../services/UserService'

export default function Users()
{
    const [ users , setUsers ] = useState ([])
    useEffect(() => {
        let userService = new UserService()
        userService.getUsers().then(result=>setUsers(result.data))
       })
       return (
        <div>
            <div>
              <List>
                { 
                    users.map(user=>(
                        <List.Item>{user.name + " " + user.username}</List.Item>
                    ))
                }
        
      </List>
      </div>
        </div>
      )
}