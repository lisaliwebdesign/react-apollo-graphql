function user(parent, args, context) {
    return context.prisma.application({ id: parent.id }).user()
}

function competition(parent, args, context) {
    return context.prisma.application({ id: parent.id }).competition()
}
module.exports = {
    user,
    competition,
}
