import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactForm } from "../Form/Form";

import { StyledMainTitle, StyledTitle, Wrapper } from "./App.styled";



class App extends Component {
  state = {
    filter: '',
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? []
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addNewContact = (newContact) => {
    const { contacts } = this.state;
    const { name } = newContact

    const isExist = contacts.find(person => person.name === name.trim())

    if (isExist) {
      alert(`${name} is already in contacts.`)
      return false
    }

    const finallyNewContact = {
      id: nanoid(),
      ...newContact
    }

    this.setState({
      contacts: [finallyNewContact, ...contacts]
    })

    return true
  }

  onChangeFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  onDeleteBtnClick = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(person => person.id !== id)
    }))
  }

  handlerFilterContacts = (e) => {
    const { contacts, filter } = this.state
    const normalizeName = filter.toLowerCase().trim()

    return contacts.filter(person => person.name.toLowerCase().includes(normalizeName))
  }

  render() {
    const filteredContacts = this.handlerFilterContacts();

    return (
      <Wrapper>
        <StyledMainTitle>Phonebook</StyledMainTitle>
        <ContactForm
          addNewContact={this.addNewContact}
        />

        <StyledTitle>Contact List</StyledTitle>
        <Filter
          onChangeFilter={this.onChangeFilter}
          filter={this.state.filter}
        />

        <ContactList
          onDeleteBtnClick={this.onDeleteBtnClick}
          filteredContacts={filteredContacts}
        />

      </Wrapper>
    )
  }
};

export { App };

