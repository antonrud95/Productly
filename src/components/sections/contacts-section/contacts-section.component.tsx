import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactsType } from '~/types/contacts.type'
import ContactsItem from '~/components/ui/general/contacts-item/contacts-item.component'
import FC from '~/types/fc'

// import styles from './contacts-section.module.scss'

interface Props {
  contacts: ContactsType[]
}

const ContactsSection: FC<Props> = ({ contacts }) => {
  return (
    <Container>
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
