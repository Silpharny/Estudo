export const createUser = (req, res) => {
  res.status(200).json({
    message: "user created",
  })
}

export const getUser = (req, res) => {
  res.status(200).json({
    message: "user get",
  })
}

export const deleteUser = (req, res) => {
  res.status(200).json({
    message: "user deleted",
  })
}
