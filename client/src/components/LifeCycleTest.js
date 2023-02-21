import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap";

export default function LifeCycleTest() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log("Kompo İlk yüklendiğinde çalışır")

        return () => {
            console.log("Component Destroyed")
        }
    }, []) // ikinci parametreyi böyle bırakırsam, bu komponent İlk yüklendiğinde çalışacaktır demek.
    // Bunun içinde bir fonksiyon return edersem, o zmn unmount işleminde çalışacak bir şeyim de olmuş olur.
    // Ama unutmamak gerekli -> Bir komponent kullanmalısın bunun için!!! (html tag değil)


    // useEffect(() => {
    //     console.log("Kompo render oldu")
    // }) // ikinci parametreyi boş bırakırsam, bu komponent her render olduğunda çalışacaktır demek.


    return (
        <div className="container my-5">
            <p>Our Test Component</p>
            <button className="btn btn-secondary my-2" onClick={() => setShow(show => !show)}> {show ? 'Gizle' : 'Göster'} </button>
            {show && <LifeCycleExample/>}


        </div>
    )
}


function LifeCycleExample() {
    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState(false);

    useEffect(() => {
        //console.log("Kompo İlk yüklendiğinde çalışır")
        fetch(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(response => response.json())
            .then(json => console.log(json))
        let interval = setInterval(()=> console.log('İnterval Değişti'), 1000)
        return () => {
            console.log("Example Component Destroyed") // sadece içinde kullanıldığı komponentin destroy durumunda çalışıyor.!!
            clearInterval(interval);
        }
    }, [])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    },[postId])

    return (
        <div>
            {[
                'primary',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                   <h3> {postId} </h3>
                </Alert>
            ))}
                <p> {post && JSON.stringify(post)} </p>
                <button className="btn btn-warning mb-2" onClick={()=> setPostId(postId+1)}>Sonraki Konu</button>
        </div>
    );
}