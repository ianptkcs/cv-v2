import cabecalho from './Cabecalho.json';
import cabecalhoInterface from '../../interfaces/Cabecalho';
import linkInterface from '../../interfaces/Link';

const cabecalhoInfo: cabecalhoInterface = cabecalho;
const { nome, contatos } = cabecalhoInfo;

function Cabecalho() {
	return (
		<div className='flex flex-col justify-items-center items-center gap-y-3'>
			<h1 className='text-center text-4xl'>
				{nome.primeiro}
				<span className='font-bold'> {nome.ultimo}</span>
			</h1>
			<div className='max-w-prose'>
				<ul className='flex flex-wrap items-center justify-center gap-x-2'>
					<li>{contatos.email}</li>
					<span>|</span>
					<li>{contatos.telefone}</li>

					{contatos.links.map(
						(link: linkInterface, index: number) => {
							return (
								<>
									<span>|</span>
									<li key={index}>
										<a
											className='italic'
											href={link.url}
										>
											{link.nome}
										</a>
									</li>
								</>
							);
						}
					)}
				</ul>
			</div>
		</div>
	);
}

export default Cabecalho;
