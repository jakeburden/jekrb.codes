module.exports = (routes, serve)  => (req, res) => {
  const match = routes.match(`${req.method} ${req.url}`)
  
  if (match) {
    const fn = match.value
    req.params = match.params
    fn(req, res)
  } else serve(req, res)
}
