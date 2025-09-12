import styles from './recentpress.module.css'
import Image from 'next/image';
import '/src/app/globals.css';
import Presscard from '../presscards/Presscard';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NewsletterForm from './NewsletterForm';

// Server component to fetch posts
async function getRecentPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      image: data.image,
      author: data.author,
      glance: data.glance,
      authorRole: data.authorRole,
      authorImage: data.authorImage,
      date: data.date,
      type: data.type,
    };
  });
  
  // Sort by date (most recent first) and take the first 3
  return posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
}

export default async function Recentpress() { 
  const recentPosts = await getRecentPosts();
    
  return (
    <div className={styles.recentPressContainer}>
        <div className='sectionHeader + wrapper'>
            <Image src={'/assets/sectionHeaderBlack.svg'} alt='Black section header' width={20} height={20}></Image>
            <p>Recent Press</p>
          </div>
        <div className={styles.pressContainer + ' wrapper'}>
            {recentPosts.map((post, index) => (
                <Presscard key={post.slug} post={post} />
            ))}
        </div>
        <div id="newsletter" className={styles.newsletter}>
            <Image className={styles.envelopeOne} src='/assets/envelopes.svg' width={200} height={200}/>
            <div className={styles.emailCapture}>
                <h1>Sign up for <span>company updates</span></h1>
                <p>Receive email updates about Deepgrids, its products, and other important information. Get the latest insights delivered to your inbox.</p>
                <div className={styles.emailContainer}>
                  <NewsletterForm />
                </div>
            </div>
            <Image className={styles.envelopeTwo} src='/assets/envelopes.svg' width={200} height={200}/>
        </div>
    </div>
  );
}
