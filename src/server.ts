import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', ws => {

	ws.on('message', message => {

		[...wss.clients]
			.filter(client => client !== ws)
			.forEach(c => c.send(message.toString()))
	})

	ws.send('Conectado ao servidor com sucesso!')
})
