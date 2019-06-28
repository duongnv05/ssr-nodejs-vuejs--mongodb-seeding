module.exports = (req, res, view, data = {}) => {
	res.render(view, data)
}