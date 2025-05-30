const { API_KEY, API_TOKEN } = Cypress.env();

Cypress.Commands.add("registerBoard", (name) => {
    cy.request({
        method: 'POST',
        url: 'boards',
        qs: {
            name: name,
            key: API_KEY,
            token: API_TOKEN
        }
    })
});

Cypress.Commands.add("deleteBoard", (idToDelete) => {
    cy.request({
        method: 'DELETE',
        url: `boards/${idToDelete}`,
        qs: {
            key: API_KEY,
            token: API_TOKEN
        }
    })
});

Cypress.Commands.add("createAListOnBoard", (idBoard, name) => {
    cy.request({
        method: 'POST',
        url: `board/${idBoard}/lists`,
        qs: {
            name: name,
            key: API_KEY,
            token: API_TOKEN
        }
    })
});

Cypress.Commands.add("registerCard", (id) => {
    cy.request({
        method: 'POST',
        url: `cards`,
        qs: {
            idList: id,
            key: API_KEY,
            token: API_TOKEN
        }
    })
});

Cypress.Commands.add("deleteCard", (idCard) => {
    cy.request({
        method: 'DELETE',
        url: `cards/${idCard}`,
        qs: {
            key: API_KEY,
            token: API_TOKEN
        }
    })
});

Cypress.Commands.add('getBoard', (boardId) => {
    cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/boards/${boardId}`,
        qs: {
            key: API_KEY,
            token: API_TOKEN
        },
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getCard', (cardId) => {
    cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${cardId}`,
        qs: {
            key: API_KEY,
            token: API_TOKEN
        },
        headers: {
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    });
});