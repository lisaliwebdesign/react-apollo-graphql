const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function post(parent, { url, description }, context) {
  const userId = getUserId(context)
  return context.prisma.createLink({
    url,
    description,
    postedBy: {
      connect: {
        id: userId
      }
    }
  })
}

function createOrganisation(parent, { name, type }, context) {
  return context.prisma.createOrganisation({
    name,
    type,
  })
}

async function createCompetition(parent, args, context) {
  const competition = await context.prisma.createCompetition({ ...args })
  const title = competition.title
  return {
    title
  }
}

async function createQuestion(parent, args, context) {
  const question = await context.prisma.createQuestion({ ...args })
  const title = question.title
  return {
    title
  }
}

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user,
  }
}

async function login(parent, args, context) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

async function vote(parent, args, context) {
  const userId = getUserId(context)
  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}


async function createApplication(parent, args, context) {
  const userId = getUserId(context)
 // const questions = await context.prisma.questions()
  const application = await context.prisma.createApplication({
    // questions : args.questions,
    user: { connect: { id: userId } },
    competition: { connect: { id: args.competitionId } },
  })
  return {
    user: { connect: { id: userId } },
    application: application,
  }
  // return context.prisma.createApplication({
  //   questions : questions,
  //   user: { connect: { id: userId } },
  //   competition: { connect: { id: args.competitionId } },
  // })
}

module.exports = {
  post,
  createOrganisation,
  createCompetition,
  createQuestion,
  signup,
  login,
  vote,
  createApplication
}