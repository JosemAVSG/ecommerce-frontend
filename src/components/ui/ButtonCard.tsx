'use client'
import styles from '@/styles/card.module.scss'
const ButtonCard = ({children}: {children: React.ReactNode}) => {

    const handleClick = () => {
        console.log('Button clicked!');
    }

  return (
    <>
    <button className={styles.button} onClick={handleClick}>
    {children}
    </button>
    </>
  )
}

export default ButtonCard
