import EducationJSON from './Education.json';
import EducationInterface from '../../interfaces/Education';
import styles from '../../styles.json';

const EducationInfo: EducationInterface[] = EducationJSON;

interface educationProps {
	education: EducationInterface;
}

function ItemEducation({ education }: educationProps) {
	return (
		<div className='flex justify-between gap-x-1'>
			<div className='text-left'>
				<h3 className='font-bold'>{education.nome}</h3>
				<h4>{education.instituicao}</h4>
			</div>
			<div className='flex gap-1'>
				<h3>{education.local}</h3>
				<span>|</span>
				<h3>{education.data}</h3>
			</div>
		</div>
	);
}

function Education() {
	return (
		<div>
			<h2 className={styles.h2}>Education</h2>
			<ul className={styles.ul}>
				{EducationInfo.map(
					(education: EducationInterface, index: number) => {
						return (
							<ItemEducation
								key={index}
								education={education}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default Education;
