import { useTranslation } from "react-i18next"

function TicketsOrderSuccess() {
	const { t } = useTranslation('TicketsOrderSuccess')
	return (
		<>
			<h3 className="text-success text-center mb-3">{t('title', {ns: 'TicketsOrderSuccess', defaultValue: 'Thank you for your order!'})}</h3>
			<p className="text-center fw-bold">({t('paragraph', {ns: 'TicketsOrderSuccess', defaultValue: 'Please note that this is not a real website and no actual order has been made'})})</p>
		</>
	)
}

export default TicketsOrderSuccess