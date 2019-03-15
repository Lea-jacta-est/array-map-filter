/* Array.prototype.map ET filter - Exercice 3

Variation sur l'exercice précédent: la fonction getStudentsPerCurriculum reçoit cette fois deux arguments.
1. Encore un tableau d'objets, décrivant des campus de la Wild Code School.
Les noms des propriétés restent les mêmes, mais le contenu du tableau curriculums change.
- city: ville où se trouve le campus
- curriculums: tableau d'objets, ayant chacun une propriété name ('JS/Angular', etc.) et
une propriété numStudents indiquant le nombre d'élèves pour ce cursus
2. Le nom d'un cursus

En utilisant filter et map, la fonction doit d'abord éliminer les campus
qui ne proposent pas le cursus donné par le 2ème argument, puis renvoyer,
pour chaque campus gardé, un objet sous la forme : { VILLE: NB_ELEVES }.

Arguments en entrée:

1. Tableau des campus:
[
  { city: 'Bordeaux',
    curriculums: [
      { name: 'PHP/Symfony', numStudents: 12 },
      { name: 'JS/React', numStudents: 29 }
    ]
  },
  {
    city: 'La Loupe',
    curriculums: [
      { name: 'JS/Angular', numStudents: 32 }
    ]
  },
  {
    city: 'Lille',
    curriculums: [
      { name: 'PHP/Symfony', numStudents: 12 },
      { name: 'JS/React', numStudents: 10 }
    ]
  },
  {
    city: 'Marseille',
    curriculums: [
      { name: 'JS/React', numStudents: 16 }
    ]
  }
]

2. Nom du cursus: 'PHP/Symfony'

Sortie attendue:
  [{ Bordeaux: 12 }, { Lille: 12 }]

*/

function getStudentsPerCurriculum(campuses, curriculumName) {

function isCurriculum(curriculumList){
  for (i=0; i<curriculumList.length; i++){
    if (curriculumList[i].name === curriculumName){
      return true;
    }//if
  }//for
}; //function isCurriculum  
//  prend en entrée un l'array "curriculums" contenant des objs, 
//  return si un des objs de l'array est curriculumName.

const cityWithcurriculum = campuses.filter(campus => {
  return isCurriculum(campus.curriculums);
}); //filter cityWithcurriculum  
// return: array avec des objs "ville" contenant le curriculumName.

function onlyTheCurriculum(curriculum){
  if (curriculum.name === curriculumName){
    return true;
  }//if
}//function onlyTheCurriculum
//  prend en entrée un obj
//  return si l'objet a pour name le curriculumName


const reducedCurriculumList = cityWithcurriculum.map(campus =>{

  const deleteUselessCurriculum = campus.curriculums.filter(curriculum => {
    return onlyTheCurriculum(curriculum);

  });// filter deleteUselessCurriculum

  campus.curriculums =  deleteUselessCurriculum;
  return campus
}); // map reducedCurriculumList 

const curriculumsItem = reducedCurriculumList.map(campus => {
  const nbStudent = campus.curriculums[0].numStudents;
  const cityName = campus.city;

  const cityStudent = {};
  
  cityStudent[cityName] = nbStudent;

  return cityStudent
 // return campus.curriculums;
  //const number = city.curriculums.map((group)=>{
  //     return city.numStudents = group.numStudents;
  //   });//mapIn
  // return number;
//});
  

});
return curriculumsItem;
}

module.exports = getStudentsPerCurriculum;
