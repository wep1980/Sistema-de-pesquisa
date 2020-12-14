import moment from 'moment'; // Instalação do pacote para formatar Data e Hora  npm install moment

/** Funcao para formatar data */
export const formatDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
}