const postedBy = (root, args, context, info) => context.prisma.link({ id: root.id }).postedBy();

const votes = (root, args, context) => context.prisma.link({ id: root.id }).votes();

module.exports = {
    postedBy,
    votes,
};