import styles from './individualpress.module.css'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import '/src/app/globals.css';
import Image from 'next/image';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  
    // Find the Markdown file
    const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
  
    // Parse frontmatter + content
    const { data, content } = matter(fileContents);
  
    // Convert markdown to HTML with proper paragraph handling
    const processedContent = await remark()
      .use(remarkHtml, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();

    // Format date to "month-day, year" format
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    };
  
    return (
      <div className={styles.postContainer + ' wrapper'}>
        <div className={styles.titleContainer}>
            <p className={styles.type}>{data.type}</p>
            <div className={styles.title}>
                <div className={styles.verticalBar}></div>
                <div><h1>{data.title}</h1></div>
            </div>
                <p>{formatDate(data.date)}</p>
                <div className={styles.authorContainer}>
                    <Image src={data.authorImage} width={50} height={50} alt='Image of author'></Image>
                    <p>{data.author}, {data.authorRole}</p>
                </div>
            </div>
        
        <div className={styles.bodyContainer}>
            <Image src={data.image} width={500} height={500} alt={data.title || "Press release image"}/>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    );
  }