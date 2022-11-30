import styles from './styles/Skills.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import ContactsBar from '../components/contacts'
import Scroll from '../components/scroll'
import { Icon } from '@iconify/react'
import { useEffect } from 'react'

export default function Skills() {

  const skills = [
    {
      name: 'Sass',
      icon: 'mdi:sass',
      experience: 'junior'
    },
    {
      name: 'React',
      icon: 'mdi:react',
      experience: 'junior'
    },
    {
      name: 'Javascript',
      icon: 'fa-brands:js-square',
      experience: 'junior'
    },
    {
      name: 'Firebase',
      icon: 'mdi:firebase',
      experience: 'junior'
    },
    {
      name: 'Python',
      icon: 'mdi:language-python',
      experience: 'junior'
    },
    {
      name: 'Next.js',
      icon: 'cib:next-js',
      experience: 'junior'
    },
  ]

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (e.target.className === styles.skill) {
        return alert('Você clicou em uma skill!')
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Skills</title>
      </Head>
      <Nav />
      <ContactsBar />
      <main className={styles.main}>
        <p>Essas são algumas das <span> principais </span> tecnologias que tenho <span> afinidade </span></p>
        <div className={styles.skills_group}>
          <div className={styles.row}>
            {skills.map((skill, index) => {
              return (
                <div key={index} className={styles.skill}>
                  <Icon icon={skill.icon} className={styles.skill_icon} />
                  <p className={styles.skill_name}>{skill.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
