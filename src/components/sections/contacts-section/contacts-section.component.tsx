import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactsType } from '~/types/contacts.type'
import SButton from '~/components/ui/general/button/button.component'
import ContactsItem from '~/components/ui/general/contacts-item/contacts-item.component'
import FC from '~/types/fc'

import styles from './contacts-section.module.scss'

interface Props {
  contacts: ContactsType[]
}

const ContactsSection: FC<Props> = ({ contacts }) => {
  return (
    <Container>
      <div className={styles.contactsInfo}>
        <h2>Need a super hero?</h2>
        <p>
          {' '}
          Do you require some help for your project: Conception workshop,
          prototyping, marketing strategy, landing page, Ux/UI?
        </p>
        <SButton variant="primary">Contact our expert</SButton>
      </div>
      {contacts.map((contact: ContactsType, index) => {
        return (
          <ContactsItem
            key={contact.id}
            text={contact.text}
            avatar={contact.avatar.fluid}
          />
        )
      })}
    </Container>
  )
}

export default ContactsSection
