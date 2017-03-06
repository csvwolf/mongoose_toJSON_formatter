module.exports = function (schema) {
  schema.set('toJSON', {
    transform(doc, ret) {
      if (ret._id) {
        ret.id = ret._id;
        delete ret._id;
      }

      return ret;
    }
  });
};
