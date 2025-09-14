type Coin = 'Head' | 'Tail'

const flipCoin = (): Coin => {
	const value = Math.random()
	return value > 0.5 ? 'Head' : 'Tail'
}

export default flipCoin