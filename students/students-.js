/*  
    1) Retornar a média de cada aluno (feito)
    2) Retornar apenas os alunos ativos (feito)
    3) Criar um ranking do maior para o menor pela média
    4) Retornar apenas os alunos com média maior ou igual a 7
    5) Calcular a média geral da turma (somente alunos ativos)
*/

const students = [
	{
		name: "João",
		active: true,
		scores: [8, 10, 9, 10],
	},
	{
		name: "Maria",
		active: true,
		scores: [6, 5, 7, 8],
	},
	{
		name: "Pedro",
		active: false,
		scores: [9, 9, 10, 10],
	},
	{
		name: "Ana",
		active: true,
		scores: [10, 9, 8, 9],
	},
];

//Sistema de verificação de notas

const studentsReportCard = {
	getStudentsGrade(students) {
		return students
			.filter((student) => student.active)
			.map((student) => {
				const total = student.scores.reduce((sum, n) => sum + n, 0);
				return {
					name: student.name,
					scores: student.scores,
					average: total / student.scores.length,
				};
			});
	},

	getRankingStudents(students) {
		const studentGrade = this.getStudentsGrade(students);

		if (!studentGrade.length) return null;

		return studentGrade.reduce((best, current) => {
			return current.average > best.average ? current : best;
		});
	},
};

console.log(studentsReportCard.getStudentsGrade(students));
console.log(studentsReportCard.getRankingStudents(students));
