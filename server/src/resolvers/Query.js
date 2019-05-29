async function feed(parent, args, context) {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    links,
  }
}

async function organisations(parent, args, context) {
  const count = await context.prisma
      .organisationsConnection()
      .aggregate()
      .count()
  const organisations = await context.prisma.organisations()
  return {
    count,
    organisations
  }
}

async function competitions(parent, args, context) {
  const count = await context.prisma
      .competitionsConnection()
      .aggregate()
      .count()
  const competitions = await context.prisma.competitions()
  return {
    count,
    competitions
  }
}

async function questions(parent, args, context) {
  const count = await context.prisma
      .questionsConnection()
      .aggregate()
      .count()
  const questions = await context.prisma.questions()
  return {
    count,
    questions
  }
}

module.exports = {
  feed,
  organisations,
  competitions,
  questions,
}
