import './SkillsBox.css'
function SkillsBox() {
	return (
		<div className="skills">
			<h1 className="heading skills">SKILLS</h1>
			<div className="box">
				<div className="skills_inner">
					<div className="skill_title">Linux</div>
					<div className="skill_text">автоматизация, виртуализация, защита</div>
					<div className="skill_year">15 лет</div>
				</div>
				<div className="skills_inner">
					<div className="skill_title">DevOps</div>
					<div className="skill_text">CI/CD, Kubernetes, Terraform, Ansible</div>
					<div className="skill_year">3 года</div>
				</div>
				<div className="skills_inner">
					<div className="skill_title">Security</div>
					<div className="skill_text">информационная и кибер - безопасность</div>
					<div className="skill_year">5 лет</div>
				</div>
			</div>
		</div>
	)
}
export default SkillsBox;