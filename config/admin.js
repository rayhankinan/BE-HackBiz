module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c32ab446d3ae3ccadae4f76c1799686'),
  },
});
