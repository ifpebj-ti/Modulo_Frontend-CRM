import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const currentDateFormatted = capitalize(format(new Date(), "iiiiii, dd/MM/YYY", 
{ locale: ptBr}));