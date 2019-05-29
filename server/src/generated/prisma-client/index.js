"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Organisation",
    embedded: false
  },
  {
    name: "Competition",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Application",
    embedded: false
  },
  {
    name: "Details",
    embedded: false
  },
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Finances",
    embedded: false
  },
  {
    name: "Cost",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/lisali-faea36/graphql-testing/dev`
});
exports.prisma = new exports.Prisma();
