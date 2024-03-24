import { useParams } from "react-router-dom"

export const Room = () => {
    const params = useParams();
    const {name} = params;
    return (
        <div>Hii, {name}</div>
    )
}