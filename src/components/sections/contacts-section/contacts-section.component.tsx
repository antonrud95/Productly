import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactsType } from '~/types/contacts.type'
import SButton from '~/components/ui/general/button/button.component'
import ContactsItem from '~/components/ui/general/contacts-item/contacts-item.component'
import useContactsAssets from '~/hooks/queries/useContactsAssets'
import Img from 'gatsby-image'
import FC from '~/types/fc'

import styles from './contacts-section.module.scss'

interface Props {
  contacts: ContactsType[]
}

const ContactsSection: FC<Props> = ({ contacts }) => {
  const { contactsBg } = useContactsAssets()
  return (
    <Container fluid className={styles.contactsFluid}>
      <Img fluid={contactsBg.childImageSharp.fluid} className={styles.bg} />
      <Container className={styles.contactsContainer}>
        <div className={styles.contactsInfo}>
          <h2 className={styles.contactsTitle}>Need a super hero?</h2>
          <p className={styles.contactsText}>
            {' '}
            Do you require some help for your project: Conception workshop,
            prototyping, marketing strategy, landing page, Ux/UI?
          </p>
          <SButton variant="primary" className={styles.contactsBtn}>
            Contact our expert
          </SButton>
        </div>
        <div className={styles.speechWrapper}>
          {contacts.map((contact: ContactsType, index) => {
            return (
              <ContactsItem
                key={contact.id}
                text={contact.text}
                avatar={contact.avatar.fluid}
                outerwrapper={styles.outerWrapper}
                innerWrapper={styles.itemWrapper}
                image={styles.itemImage}
              />
            )
          })}
        </div>
      </Container>
    </Container>
  )
}

export default ContactsSection
