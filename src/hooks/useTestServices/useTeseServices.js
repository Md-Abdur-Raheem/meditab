import { useEffect, useState } from "react"

const useTestServices = () => {
    const [test, setTest] = useState([]);
    useEffect(() => {
        fetch('./testData.json')
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])
    return [test]
}

export default useTestServices;