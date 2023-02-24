import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./Form";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";

import { StyledMainTitle, StyledTitle, Wrapper } from "./App.styled";



class App extends Component {
  state = {
    // contacts: [],
    filter: '',
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? []
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts !== null) {
      this.setState({
        contacts: parsedContacts,
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

    console.log(localStorage);
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

