import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit"
import { fetchImages, setPage } from "../../toolkit/slices/cats"
import Button from "../button"
import styles from "./styles/index.module.scss"

const Main: FC = () => {
    const dispatch = useAppDispatch()
    const { images, categoryId, page } = useAppSelector(state => state.cats)

    useEffect(() => {
        dispatch(fetchImages(
            { page, ...(categoryId && { category_ids: categoryId }) }))
    }, [categoryId, page])

    const handleShowMore = () => {
        dispatch(setPage(page + 1))
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