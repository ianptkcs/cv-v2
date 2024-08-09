import Link from './Link';

interface Cabecalho {
	nome: {
		primeiro: string;
		ultimo: string;
	};
	contatos: {
		email: string;
		telefone: string;
		links: Link[];
	};
}

export default Cabecalho;
