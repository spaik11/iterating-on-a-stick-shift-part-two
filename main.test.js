const {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
} = require('./main.js')




describe('makeDino', () => {
  it(`given a species name, a period, and a diet, returns a dinosaur object with those values, as well as a default status of 'not extinct'`, () => {
    const expectedDino = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(makeDino('Eoraptor', 'Triassic', true)).toEqual(expectedDino)
  });

  it(`allows us to create a dinosaur with status extinct`, () => {
    const expectedDino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    }

    expect(makeDino('Brachiosaurus', 'Jurassic', false, true)).toEqual(expectedDino)
  })
})

describe('makeSingular', () => {
  it(`given a dinosaur object, returns a new dinosaur object with the "us" suffix removed from its species`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const expectedDino = {
      species: 'Brachiosaur',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    expect(makeSingular(dino)).toEqual(expectedDino)
  })

  it(`returns the dinosaur species intact if it does not end with 'us'`, () => {
    const dino = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(makeSingular(dino)).toEqual(dino)
  })

  it(`does not mutate the original dinosaur object`, () => {
    const dinoTemplate = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    makeSingular(dino);
    expect(dino).toEqual(dinoTemplate);
  })
})

describe('truncateSpecies', () => {
  it(`returns a new dinosaur with its species truncated to 7 characters`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const truncatedDino = {
      species: 'Brachio...',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };
    expect(truncateSpecies(dino)).toEqual(truncatedDino);
  })

  it(`returns the dinosaur unchanged if its species name length is 10 or less`, () => {
    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };
    
    expect(truncateSpecies(dino)).toEqual(dino);
  })

  it(`does not mutate the original object`, () => {
    const dinoTemplate = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    truncateSpecies(dino)
    
    expect(dino).toEqual(dinoTemplate);
  })
})

describe('makeExtinct', () => {
  it(`returns a new dinosaur with its extinct set to true`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const extinctDino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };
    expect(makeExtinct(dino)).toEqual(extinctDino);
  })

  it(`does not mutate the original object`, () => {
    const dinoTemplate = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    makeExtinct(dino)
    
    expect(dino).toEqual(dinoTemplate);
  })
})

describe('isCarnivore', () => {
  it(`returns whether the given dinosaur is a carnivore`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    expect(isCarnivore(dino1)).toBe(true)
    expect(isCarnivore(dino2)).toBe(false);
  })
})

describe('isExtinct', () => {
  it(`returns whether the given dinosaur is extinct`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    expect(isExtinct(dino1)).toBe(true)
    expect(isExtinct(dino2)).toBe(false);
  })
})

describe('isTriassic', () => {
  it(`returns whether the given dinosaur is from the Triassic period`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const dino3 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(isTriassic(dino1)).toBe(false)
    expect(isTriassic(dino2)).toBe(false);
    expect(isTriassic(dino3)).toBe(true);
  })
})

describe('isJurassic', () => {
  it(`returns whether the given dinosaur is from the Jurassic period`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const dino3 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(isJurassic(dino1)).toBe(false)
    expect(isJurassic(dino2)).toBe(true);
    expect(isJurassic(dino3)).toBe(false);
  })
})

describe('isCretaceous', () => {
  it(`returns whether the given dinosaur is from the Cretaceous period`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const dino3 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(isCretaceous(dino1)).toBe(true)
    expect(isCretaceous(dino2)).toBe(false);
    expect(isCretaceous(dino3)).toBe(false);
  })
})