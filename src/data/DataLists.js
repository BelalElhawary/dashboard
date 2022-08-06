import {AiFillHome} from 'react-icons/ai'
import {RiAdminFill} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'home',
                icon: <AiFillHome className='mt-1'/>
            }
        ]
    },
    {
        title: 'Pages',
        links: [
            {
                name: 'admins',
                icon: <RiAdminFill className='mt-1'/>
            },
            {
                name: 'students',
                icon: <FaUserFriends className='mt-1'/>
            }
        ]
    }
]