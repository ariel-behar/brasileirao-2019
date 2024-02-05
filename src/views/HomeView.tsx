import soccerField from '../assets/img/soccer-field.jpg'

import HelmetSEO from '../components/HelmetSEO'

function HomeView() {
	return (
		<div style={{
			backgroundImage: `url('${soccerField}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: '100%',
		}}>
			<HelmetSEO title="HOME" description="Home page of the fictional website about the Brasileirao 2019 Soccer Championship" />

			<div>HomeView</div>
		</div>

	)
}

export default HomeView