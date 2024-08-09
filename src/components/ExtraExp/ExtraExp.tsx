import ExtraExpInterface from '../../interfaces/ExtraExp';
import ExtraExpJSON from './ExtraExp.json';
import styles from '../../styles.json';

const ExtraExpInfo: ExtraExpInterface[] = ExtraExpJSON;

interface ExperienciaProps {
	extraexp: ExtraExpInterface;
}

function ItemExtraExp({ extraexp }: ExperienciaProps) {
	return (
		<div>
			<div className='flex justify-between font-bold'>
				<h3>{extraexp.ocupacao}</h3>
				<h3>{extraexp.periodo}</h3>
			</div>
			<div className='flex justify-between'>
				<h4>{extraexp.empresa}</h4>
				<h4>{extraexp.local}</h4>
			</div>
			<ul className={styles['item-ul']}>
				{extraexp.descricao.map((item: string, index: number) => {
					return <li key={index}>{item}</li>;
				})}
				<li>
					<strong>Skills: </strong>
					{extraexp.skills.map((skill: string, index: number) => {
						return (
							<span>
								{skill}
								{index === extraexp.skills.length - 1
									? ';'
									: ', '}
							</span>
						);
					})}
				</li>
			</ul>
		</div>
	);
}

function ExtraExp() {
	return (
		<div>
			<h2 className={styles.h2}>Extracurricular Experience</h2>
			<ul className={styles.ul}>
				{ExtraExpInfo.map(
					(extraexp: ExtraExpInterface, index: number) => {
						return (
							<ItemExtraExp
								key={index}
								extraexp={extraexp}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default ExtraExp;
