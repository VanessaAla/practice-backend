"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Oh my space",
          content: "flying in the darkness",
          imageUrl: "https://www.pinterest.it/pin/667236501043196621/",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "flower bomb",
          content: "is it spring yet?",
          imageUrl: "https://www.pinterest.it/pin/171347960812634704/",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "bookselves",
          content: "read your books people",
          imageUrl: "https://www.pinterest.it/pin/609463762075160988/",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "dressings",
          content: "all you need to know about dressings",
          imageUrl: "https://www.pinterest.it/pin/86272149101107118/",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
