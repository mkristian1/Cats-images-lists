import { useEffect } from "react"
import { defaultLimit } from "../../api"
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit"
import { fetchImages, setLimit } from "../../toolkit/slices/cats"
import Button from "../button"
import styles from "./styles/index.module.scss"

const Main = () => {
    const dispatch = useAppDispatch()
    const { images, categoryId, limit } = useAppSelector(state => state.cats)

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchImages({ page: 1, limit, category_ids: categoryId }))
        } else {
            dispatch(fetchImages({ page: 1, limit }))
        }
    }, [categoryId, limit])

    const handleShowMore = () => {
        dispatch(setLimit(limit + defaultLimit))
    }

    return (
        <main>
            <div className={styles['wrap']}>
                <div className={styles['wrap__images']}>
                    {images.map(image => {
                        return (
                            <div key={image.id}>
                                <img className={styles['image']} src={image.url} />
                            </div>
                        )
                    })}
                </div>
                <Button variant='more' onClick={handleShowMore}>
                    more
                </Button>
            </div>
        </main>
    )
}

export default Main;