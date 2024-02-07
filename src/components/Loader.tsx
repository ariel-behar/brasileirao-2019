
import brasileiraoLogo from '../assets/img/logos/brasileirao-logo.png'
import styled from '@emotion/styled'

const StyledDiv= styled('div')`
	background: rgb(179,229,252);
	background: linear-gradient(180deg, rgba(179,229,252,1) 0%, rgba(197,225,165,1) 100%);

	img {
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		10% {
			transform: scale(1);
		}
	}
`

function Loader() {
	return (
		<StyledDiv
			className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
			<img
				src={brasileiraoLogo}
				alt="Brasileirao Logo"
			/>
		</StyledDiv>
	)
}

export default Loader