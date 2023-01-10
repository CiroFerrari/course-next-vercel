import Link from 'next/link'
import styles from './NavBar.module.css'
import ActiveLink from './ActiveLink';

type menuItemsType = {
  text: string,
  href: string,
}[]

const menuItems: menuItemsType = [
  {
    text: 'Home',
    href: "/"
  },
  {
    text: 'About',
    href: "/about"
  },
  {
    text: 'Contact',
    href: "/contact"
  },
  {
    text: 'Pricing',
    href: "/pricing"
  }
]

export default function NavBar() {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(item => <ActiveLink key={item.text} text={item.text} href={item.href} />)
      }
    </nav>
  );
}