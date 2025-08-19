
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token)
  if (!token) {
    return res.status(401).send({ message: "Unauthorized: No token provided" });
  }
  jwt.verify(token, SECRET, (err, decoded) => {
    console.log(decoded)
    if (err) {
      return res
        .status(403)
        .send({ message: "Forbidden: Invalid or expired token" });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

module.exports = verifyToken;
