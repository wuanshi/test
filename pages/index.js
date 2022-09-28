import Head from 'next/head'
import { useEffect, useRef } from 'react'
import styles from './index.module.scss'

const Card = ({children}) => {
  return (
    <div className={styles.test}>
      {children}
    </div>
  )
}

export default function Home() {
  const ref = useRef()
  useEffect(() => {
    const listen = () => {
      let h = document.documentElement.scrollTop
      console.log(h);
      if(h > 380) {
        window.requestAnimationFrame(() => {
          ref.current?.classList.add(styles.withAnimation);
        })
      }
    }
    window.addEventListener('scroll', listen)
  }, [])
  return (
    <div ref={ref} className={styles.wrapper}>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <Card>
          测试1
        </Card>
        <Card>
          测试2
        </Card>
        <Card>
          测试3
        </Card>
        <Card>
          测试4
        </Card>
        {/* <div className={styles.test}>
          测试1
        </div>
        <div className={styles.test}>
          测试2
        </div>
        <div className={styles.test}>
          测试3
        </div>
        <div className={styles.test}>
          测试4
        </div> */}
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  )
}
