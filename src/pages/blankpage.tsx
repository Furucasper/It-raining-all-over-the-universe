import { FC } from 'react'

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const BlankPage: FC<Props> = ({ children }) => {

    return <div className="flex items-center justify-center h-screen font-season fade-in-scene">
        {children}
    </div>
}

export default BlankPage