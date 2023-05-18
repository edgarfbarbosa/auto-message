import styles from './Header.module.css'

import { MagnifyingGlass } from "@phosphor-icons/react"

export function Header() {
  return (
    <header className={styles.header}>

      <div>
        <h1>auto-message</h1>
      </div>

      <div>
        <label for="name"></label>
        <input id="name" type="text" placeholder="Buscar" />
      </div>

      <div>
        <button className={styles.button} title="Buscar">
          <MagnifyingGlass size={24} />
        </button>
      </div>

    </header >
  )
}