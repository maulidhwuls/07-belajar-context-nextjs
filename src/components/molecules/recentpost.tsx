import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPost(){
    return(
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post
                title="Nama"
                body="Wulan Maulidiah"
            />
            <Post 
                title="NIM"
                body="2341728038"
            />

        </Section2>
    )
}