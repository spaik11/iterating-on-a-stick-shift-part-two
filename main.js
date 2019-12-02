const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species,
    period,
    carnivore,
    extinct
  }
}

const makeSingular = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.endsWith('us')) {
    newDino.species = species.slice(0, -2);
  }

  return newDino;
}

const truncateSpecies = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.length > 10) {
    newDino.species = species.slice(0, 7) + '...';
  }

  return newDino;
}

const makeExtinct = function(dinosaur) {
  const {species, period, carnivore} = dinosaur;
  const newDino = makeDino(species, period, carnivore, true);

  return newDino;

  // Alternately (but including line 1 of this function)
  
  // return {
  //   species,
  //   period,
  //   carnivore,
  //   extinct: true
  // }
}

const isCarnivore = function(dinosaur) {
}

const isExtinct = function(dinosaur) {
}

const isTriassic = function(dinosaur) {
}

const isJurassic = function(dinosaur) {
}

const isCretaceous = function(dinosaur) {
}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
}