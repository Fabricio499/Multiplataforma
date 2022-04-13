import {Router} from './router'
import {FormProvider} from './contexts/formContext'

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App