import { useEffect, useState } from "react";

export const useAsync = (asyncFun, dependencies = []) => {
const [data, setData] = useState()
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true)

        asyncFun().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, dependencies)

    return {
        data,
        isLoading,
        error
    }
}