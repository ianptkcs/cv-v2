import CTIJSON from './CTI.json';
import CTIInterface from '../../interfaces/CTI';
import styles from '../../styles.json';

const CTIInfo: CTIInterface[] = CTIJSON;

interface CTIProps {
	cti: CTIInterface;
}

function ItemCTI({ cti }: CTIProps) {
	return (
		<div className='flex flex-col'>
			<div className={`${styles['item-just-div']} gap-x-0`}>
				<h3 className='font-bold inline'>{cti.titulo}</h3>
				<div className={styles['item-span']}>
					<h3>{cti.instituicao}</h3>
					<span>|</span>
					<h3>{cti.data}</h3>
				</div>
			</div>
			<ul className={styles['item-ul']}>
				{cti.descricao &&
					cti.descricao.map((item: string, index: number) => {
						return <li key={index}>{item}</li>;
					})}
				<li>
					<strong>Skills: </strong>
					{cti.skills.map((skill: string, index: number) => {
						return (
							<span>
								{skill}
								{index === cti.skills.length - 1 ? ';' : ', '}
							</span>
						);
					})}
				</li>
				{cti.certificado && (
					<li>
						<a
							className={styles['item-a']}
							href={cti.certificado.url}
						>
							{cti.certificado.nome}
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

function CTI() {
	return (
		<div>
			<h2 className={styles.h2}>Courses, Training & Immersions</h2>
			<ul className={styles.ul}>
				{CTIInfo.map((cti: CTIInterface, index: number) => {
					return (
						<ItemCTI
							cti={cti}
							key={index}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default CTI;
