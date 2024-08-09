import Link from './Link';

interface CTI {
	titulo: string;
	instituicao: string;
	data: string;
	skills: string[];
	descricao?: string[];
	certificado?: Link;
}

export default CTI;
