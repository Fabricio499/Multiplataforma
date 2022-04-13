import { BrowserRouter, Route} from 'react-router-dom'

import { FormStep1 } from './pages/formStep1'
import { FormStep2 } from './pages/formStep2'
import { FormStep3 } from './pages/formStep3'

export const Router = () => {
    
    return ( 
        <BrowserRouter> 
            <Route exact path="/" component={FormStep1} />
            <Route path="/step2"  component={FormStep2} />
            <Route path="/step3"  component={FormStep3} />
        </BrowserRouter>
    )
}

/*  Comentários:  */
// Tudo inserido dentro do BrowserRouter pode ser roteado para multi-páginas
// "Exact" do Route --> o / está em todas as páginas, caso não houve o exact, entraria em todas com /.