import { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import Button from "./Button"



export default function SideNav(props) {
    const [screen, setScreen] = useState('Production')

    function handleScreen(v) {
        // e.preventDefault()
        setScreen(v)
        props.setTitle(v)
    }

    return (
        <div className="grid grid-cols-2 gap-2 px-2">
            <Button onClick={() => handleScreen('Administration')} title='Administration'>
                <FeatherIcon icon='users' size='50' strokeWidth='1' className={screen === 'Administration' ? 'mx-auto text-red-500' : 'mx-auto text-gray-600'} />
                ADMIN
            </Button>
            <Button onClick={() => handleScreen('Production')} title='Production'>
              <FeatherIcon icon='book-open' size='50' strokeWidth='1' className={screen === 'Production' ? 'mx-auto text-red-500' : 'mx-auto text-gray-600'} />
              PRODUCTION
            </Button>
            <Button onClick={() => handleScreen('Engineering')} title='Engineering'>
              <FeatherIcon icon='tool' size='50' strokeWidth='1' className={screen === 'Engineering' ? 'mx-auto text-red-500' : 'mx-auto text-gray-600'} />
              ENGINEERING
            </Button>
            <Button onClick={() => handleScreen('Finance')} title='Finance'>
              <FeatherIcon icon='dollar-sign' size='50' strokeWidth='1' className={screen === 'Finance' ? 'mx-auto text-red-500' : 'mx-auto text-gray-600'} />
              FINANCE
            </Button>
        </div>
    )
}