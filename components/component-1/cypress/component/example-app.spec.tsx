/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
// use path alias defined in webpack config
import {ExampleApp} from '../../src/ExampleApp';

describe('Hello using path alias', () => {
  it('works', () => {
    mount(<ExampleApp />)
    cy.contains('Hello').should('be.visible')
  })
})