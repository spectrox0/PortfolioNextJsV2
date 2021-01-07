
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineAppstore,
} from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiContactsLine, RiEqualizerLine } from 'react-icons/ri'

interface Item {
  icon: React.ReactElement,
  name: string,
  link: string
}
const items: Item[] = [
  {
    icon: <AiOutlineHome size="2.2em" />,
    name: 'Home',
    link: '/',
  },
  {
    icon: <RiContactsLine size="2em" />,
    name: 'About me',
    link: '/about',
  },
  {
    icon: <RiEqualizerLine size="2em" />,
    name: 'Skills',
    link: '/skills',
  },
  {
    icon: <AiOutlineAppstore size="2.2em" />,
    name: 'Works',
    link: '/works',
  },
  {
    icon: <AiOutlineContacts size="2.2em" />,
    name: 'Contact',
    link: '/contact',
  },
]
interface Props {
  callback: () => void
}
export default function Menu({ callback }: Props) {
  const router = useRouter()

  return (
    <ul>
      {items.map(({ link, icon, name }, i) => (
        <li key={i}>
          <Link passHref href={link}>
            <div
              className={`item ${router.pathname == link ? 'active' : ''}`}
              onClick={() => {
                callback()
              }}
            >
              {icon}
              <div className="container-name">
                <span> {name}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
