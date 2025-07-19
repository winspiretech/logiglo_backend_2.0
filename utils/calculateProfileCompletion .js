function calculateProfileCompletion(user) {
  const fields = [
    { key: 'name', weight: 10 },
    { key: 'email', weight: 10 },
    { key: 'mobileNo', weight: 10 },
    { key: 'country', weight: 10 },
    { key: 'city', weight: 10 },
    { key: 'address', weight: 10 },
    { key: 'postalCode', weight: 10 },
    { key: 'profilePic', weight: 20 },
    { key: 'bio', weight: 10 },
  ];

  let completion = 0;

  for (const { key, weight } of fields) {
    if (user[key] && user[key] !== '') {
      completion += weight;
    }
  }

  return Math.min(completion, 100);
}

module.exports = { calculateProfileCompletion };
