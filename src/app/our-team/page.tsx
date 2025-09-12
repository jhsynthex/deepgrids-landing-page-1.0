import styles from './ourteam.module.css'
import Image from 'next/image';
import '/src/app/globals.css';
import Teamcard from '../../components/Teamcards/Teamcard';


export default function OurTeam() {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamContentContainer + ' wrapper'}>
                <div className={styles.headerText}>
                <div className={styles.missionStatement}>
                    <div className={styles.blackVertical}></div>
                    <div className={styles.grayGradient}>
                        <h1>Our Team</h1>
                    </div>
                </div>
                        <h5 className={styles.tagLine}>We are engineers, creatives, business leaders, and industry experts that build with purpose.</h5>
                        <div className={'sectionHeader '}>
                            <Image src={'/assets/sectionHeaderBlack.svg'} alt='Black section header' width={20} height={20}></Image>
                            <p>Core Team</p>
                        </div>
                </div>
                    <div className={styles.teamCardContainer + ' wrapper'}>
                        <div className={styles.coreTeamContainer}>
                            <Teamcard image='/assets/teamMembers/MatthewJeanty.svg' alt='Matthew Jeanty, the CEO of Deepgrids' name='Matthew Jeanty' role='Chief Executive Officer' LinkedIn="https://www.linkedin.com/in/matthew-jeanty-a42bbb328" bio='Matthew Jeanty is the CEO of Deepgrids. His role as head of the company encompasses defining its vision, executing on product and strategy, and leading the organization. He drives the technical vision of the product, fundraising, and go to market strategy.<br/><br/>

 Matthew’s interest in technology and business was sparked while at Penn State studying finance and embarking on his first forays into business. But it was when he became convinced that artificial intelligence was the fundamental technology that would drive how markets and strategy would function for the coming decades that set his professional course in stone. That was the genesis of not only the relationships with technologists, investors, and others that has become Deepgrids today but of the core belief in the technology itself. <br><br>

 “If you hesitate, you lose. If you want to shape the future, you have to build it yourself,” he says. It’s an ethos that guides him through all things leadership related, from corporate structuring to board negotiations to technical team management. In his personal life, he grounds the intangible nature of finance and AI with reading, strategy games, and a love of history and geopolitics.

' />
                            <Teamcard image='/assets/teamMembers/DeniseGangi.svg' alt='Denise Gangi, the President of Deepgrids' name='Denise Gangi' role='President' LinkedIn="https://www.linkedin.com/in/denisegangi" bio='Denise is a financial services professional with over 20 years of SaaS deal pricing team leadership in the information technology and fintech B2B industries, namely at Broadridge Financial Solutions, where she served as the Vice President of Strategic Pricing. Her expertise is in leading global, cross-disciplinary pricing teams in deal strategy, bundling pricing structures, and financial valuation focused on achieving optimal economic and market- positioning outcomes.<br/><br/>

She has defined contract terms, led negotiations and closed deals with annual values up to $2 billion. In addition to successfully leading discrete deal pricing teams, her passion includes the development and management of a highly successful pricing function -- most recently for a $1.8 billion division of Broadridge Financial Solutions which provides global technology and operations services for financial service institutions.<br/><br/>

Complementing her deal leadership work is several years’ experience in corporate strategy and start-up identification, global team leadership in software product management, and competitor/market analyses. Prior to Broadridge, her business development experience also included global deal pricing and contract negotiation within IBM Global Services where she successfully led and closed global deals.
'/>
                            
                            <Teamcard image='/assets/teamMembers/EshanSharma.svg' alt='Eshan Sharma, the Principal AI Architect at Deepgrids' name='Eshan Sharma' role='Principle AI Architect' LinkedIn="https://www.linkedin.com/in/eshan-sharma-deepgrids/" bio="Eshan Sharma is a founding member and the Principal AI Architect at Deepgrids, where he leads the technical vision, strategy, and architecture for the company's artificial intelligence initiatives. He is responsible for designing and driving the overall AI framework, ensuring it aligns with core business goals while overseeing the implementation of cutting-edge AI solutions. His work is central to developing the agentic systems and fine-tuned LLMs that power Deepgrid’s pricing optimization products, giving clients a distinct edge in enterprise software sales.<br/><br/>

Eshan’s path as a software engineer was set the moment he discovered Scratch and HTML in the 5th grade. While his passion for building with code has been a constant, he experienced a second defining moment with the dawn of the modern AI revolution. It gave him the same profound feeling of discovery he had as a child, making it clear that AI was the field he would spend his life mastering. This focus drove him to earn a Bachelor’s in Software Engineering and a Master’s in Applied Artificial Intelligence with high honors from Stevens Institute of Technology, equipping him with the expertise to build AI products from zero to one.<br/><br/>

Eshan’s work is guided by a powerful personal philosophy: 'It has to be done, and if not you, then who?' This ethos of ownership and relentless innovation, informed by his deep interest in Greek, Roman, and Eastern philosophy, is the common thread in his professional and personal life. He finds a creative and tangible counterbalance to the abstract nature of AI through disciplined, hands-on pursuits, from woodworking his own desk and learning the electric guitar to a lifelong dedication to soccer and fitness."/>
                            <Teamcard image='/assets/teamMembers/JosephHolzman.svg' alt='Joseph Holzman, the Head of Frontend Engineering at Deepgrids' name='Joseph Holzman' role='Head of Frontend Engineering' LinkedIn="https://www.linkedin.com/in/joseph-holzman-36292520a/" bio="Joseph Holzman is a founding member and Head of Frontend Engineering at Deepgrids, where he leads the UI/UX design, interface implementation, and full-stack integration initiatives. He is responsible for ensuring that Deepgrid’s cutting-edge AI solutions are accessible through beautiful, intuitive, responsive, and secure surfaces. Additionally, he drives the artwork and visual identity of the Deepgrids brand.<br/><br/>

Throughout his life, Joseph was always artistically inclined. However, he did not realize the marriage of art and coding until he began pursuing a Bachelor’s in Computer Science at Drew University. His studies taught him that software solutions can and should be as beautiful as they are functional. He further realized that as artificial intelligence grew in capability and scope, truly great frontend engineering will always require a human in the loop to deeply understand and adapt to users. Since graduating, Joseph has applied these philosophies to frontend engineering at Cloudflare, and now Deepgrids, of which he was a founding member in 2025.<br/><br/>

In his personal life, Joseph is an avid guitar player and singer. He also loves creating digital art, visiting museums, and cooking new pasta dishes. He is currently watching Silicon Valley on HBO."/>
                            <Teamcard image='/assets/teamMembers/AlexandraEdwing.svg' alt='Alexandra Edwing, the Head of Growth at Deepgrids' name='Alexandra Edwing' role='Head of Growth' LinkedIn="https://www.linkedin.com/in/alexandraedwing/" bio="Alexandra Edwing is a founding member and Head of Growth at Deepgrids. She is responsible for spearheading the company's Branding and Marketing strategy. Her goal is to develop a cohesive company brand that aligns with our market needs, and to ensure strategic expansion as the company scales.<br/><br/>

Alex studied Political Science at Drew University, and has always gravitated towards roles that required a mix of creativity and strategy. Effectively communicating with others has always been her strong suit - by blending marketing, product development, and analytics, she uses a data-driven approach to determine the most successful product-market fit. Alex's interest in AI-powered software solutions stems from the power it gives companies to connect better with consumers and run business operations more effectively, which is essential to growth. With her unique mixture of marketing, communications, and team leadership, she is the cornerstone of Deepgrid's go-to-market strategy.<br/><br/>

Alex is eager to broaden her horizons, so she reads as many books as she can get her hands on. She believes education is the root to all success - the importance of not only having access to it, but also being proactive enough to consume as much as you can. Besides reading, she finds herself dedicated to swimming, dancing, and hiking, and traveling when she can."/>
                        </div>
                    </div>
                        <div className={'sectionHeader ' + styles.sectionHeader}>
                            <Image src={'/assets/sectionHeaderBlack.svg'} width={20} height={20} alt="Section header icon"></Image>
                            <p>Board of Directors</p>
                        </div>
                    <div className={styles.teamCardContainer + ' wrapper'}>
                        <div className={styles.boardOfAdvisorsContainer}>
                            <Teamcard image='/assets/teamMembers/PeterHorst.svg' alt='Peter Horst, a member of the Board of Advisors' name='Peter Horst' role='Independent Board Director' LinkedIn="https://www.linkedin.com/in/peterhorst" bio="Peter Horst is a renowned Chief Marketing Officer with decades of experience leading brand strategy and marketing for some of the world's most recognized companies, including Capital One, Hershey, and General Mills. As a Forbes Top 30 CMO, he has driven transformative growth, brand innovation, and customer engagement at scale. At Deepgrids, Peter brings invaluable expertise in go-to-market strategy, brand building, and executive leadership, helping guide the company's vision and market presence." />
                            <Teamcard image='/assets/teamMembers/MatthewJeanty.svg' alt='Matthew Jeanty, the CEO of Deepgrids' name='Matthew Jeanty' role='Chief Executive Officer' LinkedIn="https://www.linkedin.com/in/matthew-jeanty-a42bbb328" bio='Matthew Jeanty is the CEO of Deepgrids. His role as head of the company encompasses defining its vision, executing on product and strategy, and leading the organization. He drives the technical vision of the product, fundraising, and go to market strategy.<br/><br/>

 Matthew’s interest in technology and business was sparked while at Penn State studying finance and embarking on his first forays into business. But it was when he became convinced that artificial intelligence was the fundamental technology that would drive how markets and strategy would function for the coming decades that set his professional course in stone. That was the genesis of not only the relationships with technologists, investors, and others that has become Deepgrids today but of the core belief in the technology itself. <br><br>

 “If you hesitate, you lose. If you want to shape the future, you have to build it yourself,” he says. It’s an ethos that guides him through all things leadership related, from corporate structuring to board negotiations to technical team management. In his personal life, he grounds the intangible nature of finance and AI with reading, strategy games, and a love of history and geopolitics.

' />
                            <Teamcard image='/assets/teamMembers/DeniseGangi.svg' alt='Denise Gangi, the President of Deepgrids' name='Denise Gangi' role='President' LinkedIn="https://www.linkedin.com/in/denisegangi" bio='Denise is a financial services professional with over 20 years of SaaS deal pricing team leadership in the information technology and fintech B2B industries, namely at Broadridge Financial Solutions, where she served as the Vice President of Strategic Pricing. Her expertise is in leading global, cross-disciplinary pricing teams in deal strategy, bundling pricing structures, and financial valuation focused on achieving optimal economic and market- positioning outcomes.<br/><br/>

She has defined contract terms, led negotiations and closed deals with annual values up to $2 billion. In addition to successfully leading discrete deal pricing teams, her passion includes the development and management of a highly successful pricing function -- most recently for a $1.8 billion division of Broadridge Financial Solutions which provides global technology and operations services for financial service institutions.<br/><br/>

Complementing her deal leadership work is several years’ experience in corporate strategy and start-up identification, global team leadership in software product management, and competitor/market analyses. Prior to Broadridge, her business development experience also included global deal pricing and contract negotiation within IBM Global Services where she successfully led and closed global deals.
'/>
                        </div>
                    </div>
                        <div className={'sectionHeader ' + styles.sectionHeader}>
                            <Image src={'/assets/sectionHeaderBlack.svg'} width={20} height={20} alt="Section header icon"></Image>
                            <p>Board of Advisors</p>
                        </div>
                    <div className={styles.teamCardContainer + ' wrapper'}>
                        <div className={styles.boardOfAdvisorsContainer}>
                            <Teamcard image='/assets/teamMembers/ScottThompson.svg' alt='Scott Thompson, an advisory board member of Deepgrids' name='Scott Thompson' role='Advisory Board Member' LinkedIn="https://www.linkedin.com/in/scottthompson4" bio="Scott Thompson is a seasoned technology executive with a distinguished career leading engineering and architecture at some of the world's top companies. He has served as CTO at Salesforce, Vice President of Architecture at Capital One, CTO at Sterling, Vice President of Engineering at Oracle, and GM/Partner for Online Engineering at Microsoft. Scott has overseen large-scale, globally distributed teams, driven cloud transformation, and delivered innovative technology solutions. At Deepgrids, Scott provides invaluable guidance on technical architecture, scaling, and innovation, helping the company build resilient, cutting-edge solutions for the future of finance."/>
                            <Teamcard image='/assets/teamMembers/BillButler.svg' alt='Bill Butler, an advisory board member of Deepgrids' name='Bill Butler' role='Advisory Board Member' LinkedIn="https://www.linkedin.com/in/butlerwmd" bio="Bill Butler sits on the board of Sand Hill Angels, one of Silicon Valley’s most active early-stage investment groups, where he advises and supports innovative, high-growth companies. He has held senior leadership roles at HP, OpenText, Imperva, and InMoment, where he focused on aligning customer experience with strategic go-to-market initiatives and operational excellence. Over the course of his career, Bill has launched new ventures, revitalized underperforming operations, and led complex organizational transformations, including M&A integrations and global sales operations. He is recognized for building high-performance teams and bridging customer value with business capabilities to drive sustainable growth across both startups and global enterprises. At Deepgrids, Bill brings this expertise to guide strategy, scale operations, and position the company for long-term success.
"/>                        
                        </div>
                    </div>
                    </div>
            </div>
                

    );
}