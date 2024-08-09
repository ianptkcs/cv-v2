import ProjetosJSON from './Projetos.json';
import ProjetosInterface from '../../interfaces/Projetos';
import styles from '../../styles.json';

const ProjetosInfo: ProjetosInterface[] = ProjetosJSON;

interface ProjetosProps {
	projetos: ProjetosInterface;
}

function ItemProjetos({ projetos: projeto }: ProjetosProps) {
	return (
		<div className={styles['item-just-div']}>
			<div className={styles['item-span']}>
				<h3 className='font-bold text-left italic'>{projeto.titulo}</h3>
				<span>|</span>
				<h3>{projeto.data}</h3>
			</div>
			<div>
				<p className='text-right'>{projeto.descricao}</p>
			</div>
		</div>
	);
}

function Projetos() {
	return (
		<div>
			<h2 className='uppercase text-lg'>projetos</h2>
			<ul className={styles.ul}>
				{ProjetosInfo.map(
					(projeto: ProjetosInterface, index: number) => {
						return (
							<ItemProjetos
								key={index}
								projetos={projeto}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default Projetos;
