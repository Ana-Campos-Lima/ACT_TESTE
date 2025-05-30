const nameBoard = 'Trello Test Tecnical'
const nameList = 'List'

describe('Trello API - Board Operations', () => {
    let boardId

    it('Should create a new board successfully', () => {
        cy.registerBoard(nameBoard).then((response) => {
            boardId = response.body.id
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(nameBoard)
            cy.getBoard(boardId).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
            });
        })
    });

    it('Should delete the board successfully', () => {
        cy.deleteBoard(boardId).then((response) => {
            expect(response.status).to.eq(200)
            cy.getBoard(boardId).then((getResponse) => {
                expect(getResponse.status).to.eq(404);
            });
        })
    });
});

describe('Trello API - Card Operations', () => {
    let idBoard;
    let idList;
    let idCard;
    const nameBoard = 'Test Board';
    const nameList = 'Test List';
    const nameCard = 'Test Card';

    before(() => {
        cy.registerBoard(nameBoard)
            .then((boardResponse) => {
                idBoard = boardResponse.body.id;
                return cy.createAListOnBoard(idBoard, nameList);
            })
            .then((listResponse) => {
                idList = listResponse.body.id;
            });
    });

    after(() => {
        if (idBoard) {
            cy.deleteBoard(idBoard);
        }
    });

    describe('Card Creation', () => {
        it('Should create a new card successfully', () => {
            cy.registerCard(idList)
                .then((cardResponse) => {
                    idCard = cardResponse.body.id;
                    expect(cardResponse.status).to.eq(200);
                    cy.getCard(idCard).then((getResponse) => {
                        expect(getResponse.status).to.eq(200);
                    });
                });
        });
    });

    describe('Card Deletion', () => {
        beforeEach(() => {
            cy.registerCard(idList, nameCard)
                .then((cardResponse) => {
                    idCard = cardResponse.body.id;
                });
        });

        it('Should delete the card successfully', () => {
            cy.deleteCard(idCard)
                .then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(200);
                    cy.getCard(idCard).then((getResponse) => {
                        expect(getResponse.status).to.eq(404);
                    });
                });
        });
    });
});