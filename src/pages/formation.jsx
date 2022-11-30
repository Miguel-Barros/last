import { Icon } from '@iconify/react'
import Head from 'next/head'
import ContactsBar from '../components/contacts'
import Nav from '../components/nav'
import styles from './styles/Formation.module.scss'

export default function Formation() {

    const formations = [
        {
            icon: 'mdi:book-open-page-variant',
            name: 'Técnico em Analise e Desenvolvimento de Sistemas',
            institution: 'ETEC - Adolpho Berezin',
            description: 'Estudante no curso de ADS, bla bla bla bla bla',
            startYear: '2020',
            finishYear: '2022',
        },
        {
            icon: 'mdi:book-open-page-variant',
            name: 'Técnico em Analise e Desenvolvimento de Sistemas',
            institution: 'ETEC - Adolpho Berezin',
            description: 'Estudante no curso de ADS, bla bla bla bla bla',
            startYear: '2020',
            finishYear: '2022',
        },
        {
            icon: 'mdi:book-open-page-variant',
            name: 'Técnico em Analise e Desenvolvimento de Sistemas',
            institution: 'ETEC - Adolpho Berezin',
            description: 'Estudante no curso de ADS, bla bla bla bla bla',
            startYear: '2020',
            finishYear: '2022',
        },
        {
            icon: 'mdi:book-open-page-variant',
            name: 'Técnico em Analise e Desenvolvimento de Sistemas',
            institution: 'ETEC - Adolpho Berezin',
            description: 'Estudante no curso de ADS, bla bla bla bla bla',
            startYear: '2020',
            finishYear: '2022',
        },
        {
            icon: 'mdi:book-open-page-variant',
            name: 'Técnico em Analise e Desenvolvimento de Sistemas',
            institution: 'ETEC - Adolpho Berezin',
            description: 'Estudante no curso de ADS, bla bla bla bla bla',
            startYear: '2020',
            finishYear: '2022',
        },
        {
            icon: 'mdi:book-open-page-variant',
            name: 'Técnico em Analise e Desenvolvimento de Sistemas',
            institution: 'ETEC - Adolpho Berezin',
            description: 'Estudante no curso de ADS, bla bla bla bla bla',
            startYear: '2020',
            finishYear: '2022',
        },
        
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>Formação</title>
            </Head>
            <Nav />
            <ContactsBar />
            <main className={styles.main}>
                <div className={styles.formation_group}>
                    <div className={styles.row}>
                        {formations.map((formation, index) => (
                            <div className={styles.formation} key={index}>
                                <Icon icon={formation.icon} className={styles.icon} />
                                <p className={styles.name}>{formation.name}</p>
                                <p className={styles.description}>{formation.description}</p>
                                <p className={styles.institution}>{formation.institution}</p>
                                <p className={styles.date}>{formation.startYear} - {formation.finishYear}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
