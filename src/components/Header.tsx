import * as React from 'react';
import styles from './Header.module.css'

const Header = () =>{
    return (
    <div>
    <header className={styles.header}>
        <h1>Todo react</h1>
    </header>
    </div>
    );
}

export default Header