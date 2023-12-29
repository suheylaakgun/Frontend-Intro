import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://media.licdn.com/dms/image/C5603AQEmj4nHLw3zPQ/profile-displayphoto-shrink_800_800/0/1549548868426?e=2147483647&v=beta&t=tMvuxu-szjKZt9j9HcRn7wycXOSA6TteB6HIjhrLZ6M"/>
            <Dropdown pointing="top-left" inline text='Süheyla'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}