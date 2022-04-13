// Criar o Context - Criar Reducer (faz tal coisa / agrupamento de ações) - criar o Provider (ambiente)
// Criar um Hook --> Simplificar o acesso das informações.

import { createContext, ReactNode,useContext, useReducer } from 'react'

// --> Types do initialData
type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

// --> Types da minha Action
type Action = {
    type: FormActions;
    payload: any;
}

// --> Types para meu Contexto
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
// --> Types do Props do Provider
type FormProviderProps = {
    children: ReactNode;
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: '',
}


// --> Context
const FormContext = createContext<ContextType | undefined>(undefined)

// --> Reducer
// --> a função irá receber State (nossos dados) e as Action (ações) nos parametros.
// --> enum: da nomes a determinadas açoes, no caso para FormAction
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
            return state
    }
}   

// --> Provider
// --> children para poder alocar conteudos dentro dele...
export const FormProvider = ({children}: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initialData)
    // * uso padrão de um Reducer no ReactJS;
    // * state é o meus dados e o dispatch é uma função mais executar minhas ações.
    const value = {state, dispatch}

    return (
        <FormContext.Provider value={value}> 
            {children}
        </FormContext.Provider>
    )
}

// --> Context Hook [Custom Hook]
export const useForm = () => {
    const context = useContext(FormContext)
    if(context === undefined) {
        throw new Error('useForm precisa ser utilizado dentro do FormProvider')
    }
    return context
}
