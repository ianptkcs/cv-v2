import Cabecalho from '../components/Cabecalho/Cabecalho';
import CTI from '../components/CTI/CTI';
import Education from '../components/Education/Education';
import ExtraExp from '../components/ExtraExp/ExtraExp';
import Projetos from '../components/Projetos/Projetos';
import Skills from '../components/Skills/Skills';

export default function Cv() {
	return (
		<div className='flex flex-col p-4 gap-5 bg-red-100 font-serif'>
			<Cabecalho />
			<Education />
			<ExtraExp />
			<Projetos />
			<CTI />
			<Skills />
		</div>
	);
}
