import { Helmet } from 'react-helmet-async'

interface Props {
    title: string
    description: string
}

function HelmetSEO({
    title,
    description
}: Props) {
    return (
        <>
            <Helmet>
                <title>{title} | Brasileirao 2019</title>
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}

export default HelmetSEO