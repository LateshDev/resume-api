
function createUser({ id, name, email, password }) {
  return {
    id,
    name: name || 'New User',
    email,
    password, // plaintext only because this is a mock/learning project
    tier: 'free',
    aiCredits: 10,
  };
}

// What we return to the client - never includes the password
function toPublicJSON(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    tier: user.tier,
    aiCredits: user.aiCredits,
  };
}

module.exports = { createUser, toPublicJSON };
