import { Children, ReactNode } from 'react'
import * as C from './styles'

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header />
                    
                <C.Steps>
                    <C.Sidebar>
                        ...
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}