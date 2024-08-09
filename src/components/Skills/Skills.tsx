import ExtraExpJSON from '../ExtraExp/ExtraExp.json';
import ExtraExpInterface from '../../interfaces/ExtraExp';
import CTIJSON from '../CTI/CTI.json';
import CTIInterface from '../../interfaces/CTI';
import styles from '../../styles.json';
let skills: string[] = [];

const CTIInfo: CTIInterface[] = CTIJSON;
const ExtraExpInfo: ExtraExpInterface[] = ExtraExpJSON;

const addUniqueSkills = (ArrayInfo: { skills: string[] }[]) => {
	ArrayInfo.forEach((item) => {
		item.skills.forEach((skill: string) => {
			if (!skills.includes(skill)) {
				skills.push(skill);
			}
		});
	});
};

addUniqueSkills(CTIInfo);
addUniqueSkills(ExtraExpInfo);

function Skills() {
	return (
		<div>
			<h2 className={styles.h2}>Skills</h2>
			<ul className='grid grid-cols-5 pl-7 gap-x-7 list-disc text-wrap'>
				{skills.map((skill: string, index: number) => {
					return <li key={index}>{skill}</li>;
				})}
			</ul>
		</div>
	);
}

export default Skills;
