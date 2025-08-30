const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
	res.json({ status: 'ok', message: 'API do conversor funcionando!' });
});

// Rota de conversão (mock)
app.post('/convert', async (req, res) => {
	const { url, format, quality } = req.body;
	if (!url || !format || !quality) {
		return res.status(400).json({ success: false, error: 'Parâmetros ausentes.' });
	}
	// Aqui você implementaria a lógica real de conversão
	// Por enquanto, retorna um link de download fictício
	return res.json({
		success: true,
		downloadUrl: 'https://exemplo.com/download/arquivo-convertido',
		cached: false
	});
});

app.listen(PORT, () => {
	console.log(`Servidor backend rodando na porta ${PORT}`);
});