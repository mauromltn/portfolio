import styles from './Header.module.css';
import Menu from '../ui/Menu';

export default function Header() {
   return (
      <header className="fixed w-full p-4 z-20 backdrop-blur-sm lg:backdrop-blur-none  select-none">
         <button className={`${styles.brand} text-xl font-medium leading-none`}>
            <span>M</span>
            <span>a</span>
            <span>u</span>
            <span>r</span>
            <span>o</span>
            <span> </span>
            <span>M</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>n</span>
            <span>e</span>
         </button>

         <Menu />
      </header>
   )
}
