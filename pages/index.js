import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage(props) {
    console.log("1 props", props);
    const [news, setNews] = useState([]);
    const [posts, setPosts] = useState(props.posts);

    useEffect(() => {
        console.log();
    }, []);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/api/news"
        }).then((res) => {
            console.log("res", res.data)
            setNews(res.data);
        }).catch((err) => {
            console.log("error", err)
        })

    }, []);

    console.log("render", props);
    return <div>
        <p>This is my application v2</p>
        {JSON.stringify(posts)}
    </div >
}


export const getStaticProps = async () => {
    const res = await axios('http://localhost:3000/api/static')
    const posts = await res.data;

    return {
        props: {
            posts,
        },
    }
}

export default HomePage