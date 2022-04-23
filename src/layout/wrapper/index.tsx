import styles from './styles/index.module.scss'

const Wrapper = ({ children }: any) => {
    return (
        <div className={styles['wrapper']}>
            {children}
        </div>
    )
}

export default Wrapper;