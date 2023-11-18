import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export const currentDateFormatted = format(new Date(), "EEEE, d 'de' MMMM 'de' YYY", { locale: ptBr });