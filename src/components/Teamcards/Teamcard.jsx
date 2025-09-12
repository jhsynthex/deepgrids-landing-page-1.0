"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './teamcard.module.css'

const Teamcard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.teamCard} onClick={openModal}>
   
          <Image 
                src={props.image} 
                width={275} 
                height={275} 
                alt={props.alt}
                className={styles.bioImage}
              />
              <div className={styles.bioContentContainer}>
                <h5 className={styles.name}>{props.name}</h5>
                <p className={styles.role}>{props.role}</p>
                <div className={styles.bioLinkContainer}>
                  <div className={styles.bioLink}><p>Read bio</p></div>
                </div>
              </div>
        
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <div className={styles.modalContent}>
            <Image 
                    src={props.image} 
                    width={200} 
                    height={200} 
                    alt={props.alt} 
                    className={styles.modalImage} 
                  />
                  <div className={styles.modalText}>
                  
                      <div className={styles.topContainer}>
                        <div className={styles.blackDivider}></div>
                        <div className={styles.topTextContainer}>
                          <div className={styles.nameContainer}>
                            <h2>{props.name}</h2>
                            <Link href={props.LinkedIn} target="_blank" rel="noopener noreferrer">
                              <Image src="/assets/linkedinLogo.svg" alt='LinkedIn logo' width={25} height={25}/>                
                            </Link>
                          </div>
                          <h3>{props.role}</h3>
                        </div>
                      </div>
                <p dangerouslySetInnerHTML={{ __html: props.bio || "Bio coming soon..." }}></p>
              </div> 
            </div> 
          </div> 
        </div> 
      )}
    </>
  )
}

export default Teamcard