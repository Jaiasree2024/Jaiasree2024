let score;

function calculateGrade(score)
{
	switch(true)
{
	case (score>90 && score<100):
		return "A+";
	
	case (score>60 && score<90):
		return "B";
default:
	return "F";
	break;
}
}

console.log("Muthu scored" ,calculateGrade(95))
