import {useEffect, useState} from 'react'
import './app.less'

import snowflake from './fa-snowflake.svg'

function App() {
	const [days, setDays] = useState<number>(0)
	const [hours, setHours] = useState<number>(0)
	const [minutes, setMinutes] = useState<number>(0)
	const [seconds, setSeconds] = useState<number>(0)

	useEffect(() => {
		const currentDate = new Date();
		let date = new Date(`December 24, ${currentDate.getFullYear()} 00:00:00`);

		const timeLeft = date.getTime() - currentDate.getTime();
		setTimeout(()=>{
			setSeconds(Math.floor((timeLeft / 1000) % 60));
			setMinutes(Math.floor((timeLeft / 1000 / 60) % 60))
			setHours(Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
			setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
		}, 1000)
	}, [seconds])

	return (
		<main>
			<img src={snowflake} id={'pos1'} className={'snowflake'} alt={'Snowflake'} />
			<img src={snowflake} id={'pos2'} className={'snowflake'} alt={'Snowflake'} />
			<h2>Zostało</h2>
			<h1><span className={'glow red'}>{days} dni</span>, <span className={'glow green'}>{hours} godzin</span>, <span className={'glow red'}>{minutes} minut</span>, <span className={'glow green'}>{seconds} sekund</span></h1>
			<p>do świąt.</p>
		</main>
	)
}

export default App
