import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const currentDateFormatted = capitalize(format(new Date(), "eeee, d 'de' MMMM 'de' YYY", 
{ locale: ptBr}));