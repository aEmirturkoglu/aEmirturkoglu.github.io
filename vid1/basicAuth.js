function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403)
    return res.send('u need to sign in lol')
  }

  next()
}

function authRole(role) {
  return (req, res, next) => {
  if (req.user.role !==role) {
    res.status(401)
    return res.send(' be admin lol / not allowed')
  }

  next()
}
}
module.exports = {
  authUser,
  authRole
}