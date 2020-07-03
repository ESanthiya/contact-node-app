const router = require('express').Router();
const contactController = require('./../controller/contact');

router.post('/post', async (req, res) => {
	const response = await contactController.add(req.body);
	res.send(response);
})

router.put('/put', async (req, res) => {
	const response = await contactController.update(req.query.id, req.body);
	res.send(response);
})

router.get('/get', async (req, res) => {
	const response = await contactController.fetch();
	res.send(response);
})


router.delete('/delete', async (req, res) => {
	const response = await contactController.delete(req.query.id);
	res.send(response);
})


module.exports = router;