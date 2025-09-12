import styles from './presscard.module.css'
import Image from 'next/image';
import Link from 'next/link';
import '/src/app/globals.css';


const Presscard = ({ post }) => { 
    if (!post) {
        return <div>Loading recent press...</div>;
    }

    return (
        <Link href={`/press-releases/${post.slug}`}>
            <div className={styles.cardContainer}>
                <Image src={post.image} alt={post.title} width={300} height={300}/>
                <div className={styles.typeContainer}>
                    <div className={styles.type}><h4>{post.type}</h4></div>
                    <div className={styles.grayLine}></div>
                </div>
                <h5>{post.title}</h5>
                <p>{post.glance}</p>
                <Link href={`/press-releases/${post.slug}`}>
                    <button className={'buttonBoilerplate ' + 'darkButton ' + styles.readNow}>Read Now</button>
                </Link>
            </div>
        </Link>
    );
}

export default Presscard
