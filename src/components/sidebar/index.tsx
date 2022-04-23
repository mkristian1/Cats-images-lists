import cn from "classnames";
import { useEffect } from "react";
import { defaultLimit } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit";
import { fetchCategories, setCategoryId, setLimit } from "../../toolkit/slices/cats";
import Button from "../button";
import styles from "./styles/index.module.scss"

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const { categories, categoryId } = useAppSelector(state => state.cats)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const handleChangeCategory = (id: number) => {
        return () => {
            dispatch(setCategoryId(id));
            dispatch(setLimit(defaultLimit));
        }
    }

    return (
        <nav className={styles['sidebar']}>
            <ul className={styles['menu']}>
                {categories && categories.map(category => {
                    return (
                        <li key={category.id} className={styles['menu__item']}>
                            <Button
                                className={cn(styles['btn'], { [styles['btn__active']]: categoryId === category.id })}
                                onClick={handleChangeCategory(category.id)} key={category.id}
                            >
                                {category.name}
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar;