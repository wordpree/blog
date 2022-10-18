const validate = (data) => {
  if (Array.isArray(data)) {
    return data.every((d) => d.trim() !== "");
  }
  throw new Error(`Not an array type!`);
};

export { validate };
