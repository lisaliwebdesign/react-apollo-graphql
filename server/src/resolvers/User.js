function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links()
}

function applications(parent, args, context) {
  return context.prisma.user({ id: parent.id }).applications()
}
module.exports = {
  links,
  applications,
}
