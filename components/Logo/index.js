import Image from 'next/image'
import logo from './img/TBS_logo.svg'
import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <Image src={logo} width="200" height="100" alt="Trop Beau Site logo" />
    </div>
  );
}
