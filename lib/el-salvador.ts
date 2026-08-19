export type District = {
  name: string;
  surcharge: number | null;
};

export type Municipality = {
  name: string;
  districts: District[];
};

export type Department = {
  name: string;
  municipalities: Municipality[];
};

function district(name: string, surcharge: number | null = null): District {
  return { name, surcharge };
}

export const departments: Department[] = [
  {
    name: "Ahuachapán",
    municipalities: [
      {
        name: "Ahuachapán Norte",
        districts: [
          district("Atiquizaya"),
          district("El Refugio"),
          district("San Lorenzo"),
          district("Turín"),
        ],
      },
      {
        name: "Ahuachapán Centro",
        districts: [
          district("Ahuachapán"),
          district("Apaneca"),
          district("Concepción de Ataco"),
          district("Tacuba"),
        ],
      },
      {
        name: "Ahuachapán Sur",
        districts: [
          district("Guaymango"),
          district("Jujutla"),
          district("San Francisco Menéndez"),
          district("San Pedro Puxtla"),
        ],
      },
    ],
  },
  {
    name: "Santa Ana",
    municipalities: [
      {
        name: "Santa Ana Norte",
        districts: [
          district("Masahuat"),
          district("Metapán"),
          district("Santa Rosa Guachipilín"),
          district("Texistepeque"),
        ],
      },
      {
        name: "Santa Ana Centro",
        districts: [district("Santa Ana", 20)],
      },
      {
        name: "Santa Ana Este",
        districts: [district("Coatepeque"), district("El Congo")],
      },
      {
        name: "Santa Ana Oeste",
        districts: [
          district("Candelaria de la Frontera"),
          district("Chalchuapa"),
          district("El Porvenir"),
          district("San Antonio Pajonal"),
          district("San Sebastián Salitrillo"),
          district("Santiago de la Frontera"),
        ],
      },
    ],
  },
  {
    name: "Sonsonate",
    municipalities: [
      {
        name: "Sonsonate Norte",
        districts: [
          district("Juayúa"),
          district("Nahuizalco"),
          district("Salcoatitán"),
          district("Santa Catarina Masahuat"),
        ],
      },
      {
        name: "Sonsonate Centro",
        districts: [
          district("Sonsonate", 0),
          district("Sonzacate", 0),
          district("Nahulingo", 0),
          district("San Antonio del Monte", 0),
          district("Santo Domingo de Guzmán", 0),
        ],
      },
      {
        name: "Sonsonate Este",
        districts: [
          district("Izalco", 0),
          district("Armenia"),
          district("Caluco"),
          district("San Julián"),
          district("Cuisnahuat"),
          district("Santa Isabel Ishuatán"),
        ],
      },
      {
        name: "Sonsonate Oeste",
        districts: [district("Acajutla")],
      },
    ],
  },
  {
    name: "Chalatenango",
    municipalities: [
      {
        name: "Chalatenango Norte",
        districts: [
          district("La Palma"),
          district("Citalá"),
          district("San Ignacio"),
        ],
      },
      {
        name: "Chalatenango Centro",
        districts: [
          district("Nueva Concepción"),
          district("Tejutla"),
          district("La Reina"),
          district("Agua Caliente"),
          district("Dulce Nombre de María"),
          district("El Paraíso"),
          district("San Fernando"),
          district("San Francisco Morazán"),
          district("San Rafael"),
          district("Santa Rita"),
        ],
      },
      {
        name: "Chalatenango Sur",
        districts: [
          district("Chalatenango"),
          district("Arcatao"),
          district("Azacualpa"),
          district("Comalapa"),
          district("Concepción Quezaltepeque"),
          district("El Carrizal"),
          district("La Laguna"),
          district("Las Vueltas"),
          district("Nombre de Jesús"),
          district("Nueva Trinidad"),
          district("Ojos de Agua"),
          district("Potonico"),
          district("San Antonio de la Cruz"),
          district("San Antonio Los Ranchos"),
          district("San Francisco Lempa"),
          district("San Isidro Labrador"),
          district("San José Cancasque"),
          district("San Miguel de Mercedes"),
          district("San José Las Flores"),
          district("San Luis del Carmen"),
        ],
      },
    ],
  },
  {
    name: "La Libertad",
    municipalities: [
      {
        name: "La Libertad Norte",
        districts: [
          district("Quezaltepeque", 5),
          district("San Matías"),
          district("San Pablo Tacachico"),
        ],
      },
      {
        name: "La Libertad Centro",
        districts: [
          district("San Juan Opico", 10),
          district("Ciudad Arce", 10),
        ],
      },
      {
        name: "La Libertad Oeste",
        districts: [
          district("Colón", 10),
          district("Jayaque"),
          district("Sacacoyo"),
          district("Tepecoyo"),
          district("Talnique"),
        ],
      },
      {
        name: "La Libertad Este",
        districts: [
          district("Antiguo Cuscatlán", 0),
          district("Huizúcar", 5),
          district("Nuevo Cuscatlán", 5),
          district("San José Villanueva"),
          district("Zaragoza", 10),
        ],
      },
      {
        name: "La Libertad Costa",
        districts: [
          district("Chiltiupán"),
          district("Jicalapa"),
          district("La Libertad"),
          district("Tamanique"),
          district("Teotepeque"),
        ],
      },
      {
        name: "La Libertad Sur",
        districts: [district("Comasagua"), district("Santa Tecla", 0)],
      },
    ],
  },
  {
    name: "San Salvador",
    municipalities: [
      {
        name: "San Salvador Norte",
        districts: [
          district("Aguilares"),
          district("El Paisnal"),
          district("Guazapa", 5),
        ],
      },
      {
        name: "San Salvador Oeste",
        districts: [district("Apopa", 0), district("Nejapa", 0)],
      },
      {
        name: "San Salvador Este",
        districts: [
          district("Ilopango", 10),
          district("San Martín", 10),
          district("Soyapango", 0),
          district("Tonacatepeque", 5),
        ],
      },
      {
        name: "San Salvador Centro",
        districts: [
          district("Ayutuxtepeque", 0),
          district("Mejicanos", 0),
          district("San Salvador", 0),
          district("Cuscatancingo", 0),
          district("Ciudad Delgado", 0),
        ],
      },
      {
        name: "San Salvador Sur",
        districts: [
          district("Panchimalco", 5),
          district("Rosario de Mora"),
          district("San Marcos", 5),
          district("Santo Tomás", 5),
          district("Santiago Texacuangos"),
        ],
      },
    ],
  },
  {
    name: "Cuscatlán",
    municipalities: [
      {
        name: "Cuscatlán Norte",
        districts: [
          district("Suchitoto"),
          district("San José Guayabal"),
          district("Oratorio de Concepción"),
          district("San Bartolomé Perulapía"),
          district("San Pedro Perulapán"),
        ],
      },
      {
        name: "Cuscatlán Sur",
        districts: [
          district("Cojutepeque", 10),
          district("San Rafael Cedros"),
          district("Candelaria"),
          district("Monte San Juan"),
          district("El Carmen"),
          district("San Cristóbal"),
          district("Santa Cruz Michapa"),
          district("San Ramón"),
          district("El Rosario"),
          district("Santa Cruz Analquito"),
          district("Tenancingo"),
        ],
      },
    ],
  },
  {
    name: "La Paz",
    municipalities: [
      {
        name: "La Paz Oeste",
        districts: [
          district("Cuyultitán"),
          district("Olocuilta"),
          district("San Juan Talpa"),
          district("San Luis Talpa"),
          district("San Pedro Masahuat"),
          district("Tapalhuaca"),
          district("San Francisco Chinameca"),
        ],
      },
      {
        name: "La Paz Centro",
        districts: [
          district("El Rosario"),
          district("Jerusalén"),
          district("Mercedes La Ceiba"),
          district("Paraíso de Osorio"),
          district("San Antonio Masahuat"),
          district("San Emigdio"),
          district("San Juan Tepezontes"),
          district("San Luis La Herradura"),
          district("San Miguel Tepezontes"),
          district("San Pedro Nonualco"),
          district("Santa María Ostuma"),
          district("Santiago Nonualco"),
        ],
      },
      {
        name: "La Paz Este",
        districts: [
          district("San Juan Nonualco"),
          district("San Rafael Obrajuelo"),
          district("Zacatecoluca"),
        ],
      },
    ],
  },
  {
    name: "Cabañas",
    municipalities: [
      {
        name: "Cabañas Este",
        districts: [
          district("Sensuntepeque"),
          district("Victoria"),
          district("Dolores"),
          district("Guacotecti"),
          district("San Isidro"),
        ],
      },
      {
        name: "Cabañas Oeste",
        districts: [
          district("Ilobasco"),
          district("Tejutepeque"),
          district("Jutiapa"),
          district("Cinquera"),
        ],
      },
    ],
  },
  {
    name: "San Vicente",
    municipalities: [
      {
        name: "San Vicente Norte",
        districts: [
          district("Apastepeque"),
          district("Santa Clara"),
          district("San Ildefonso"),
          district("San Esteban Catarina"),
          district("San Sebastián"),
          district("San Lorenzo"),
          district("Santo Domingo"),
        ],
      },
      {
        name: "San Vicente Sur",
        districts: [
          district("San Vicente"),
          district("Guadalupe"),
          district("Verapaz"),
          district("Tepetitán"),
          district("Tecoluca"),
          district("San Cayetano Istepeque"),
        ],
      },
    ],
  },
  {
    name: "Usulután",
    municipalities: [
      {
        name: "Usulután Norte",
        districts: [
          district("Santiago de María"),
          district("Alegría"),
          district("Berlín"),
          district("Mercedes Umaña"),
          district("Jucuapa"),
          district("El Triunfo"),
          district("Estanzuelas"),
          district("San Buenaventura"),
          district("Nueva Granada"),
        ],
      },
      {
        name: "Usulután Este",
        districts: [
          district("Usulután"),
          district("Jucuarán"),
          district("San Dionisio"),
          district("Concepción Batres"),
          district("Santa María"),
          district("Ozatlán"),
          district("Tecapán"),
          district("Santa Elena"),
          district("California"),
          district("Ereguayquín"),
        ],
      },
      {
        name: "Usulután Oeste",
        districts: [
          district("Jiquilisco"),
          district("Puerto El Triunfo"),
          district("San Agustín"),
          district("San Francisco Javier"),
        ],
      },
    ],
  },
  {
    name: "San Miguel",
    municipalities: [
      {
        name: "San Miguel Norte",
        districts: [
          district("Ciudad Barrios"),
          district("Sesori"),
          district("Nuevo Edén de San Juan"),
          district("San Gerardo"),
          district("San Luis de la Reina"),
          district("Carolina"),
          district("San Antonio del Mosco"),
          district("Chapeltique"),
        ],
      },
      {
        name: "San Miguel Centro",
        districts: [
          district("San Miguel"),
          district("Comacarán"),
          district("Uluazapa"),
          district("Moncagua"),
          district("Quelepa"),
          district("Chirilagua"),
        ],
      },
      {
        name: "San Miguel Oeste",
        districts: [
          district("Chinameca"),
          district("Nueva Guadalupe"),
          district("Lolotique"),
          district("San Jorge"),
          district("San Rafael Oriente"),
          district("El Tránsito"),
        ],
      },
    ],
  },
  {
    name: "Morazán",
    municipalities: [
      {
        name: "Morazán Norte",
        districts: [
          district("Arambala"),
          district("Cacaopera"),
          district("Corinto"),
          district("El Rosario"),
          district("Joateca"),
          district("Jocoaitique"),
          district("Meanguera"),
          district("Perquín"),
          district("San Fernando"),
          district("San Isidro"),
          district("Torola"),
        ],
      },
      {
        name: "Morazán Sur",
        districts: [
          district("Chilanga"),
          district("Delicias de Concepción"),
          district("El Divisadero"),
          district("Gualococti"),
          district("Guatajiagua"),
          district("Jocoro"),
          district("Lolotiquillo"),
          district("Osicala"),
          district("San Carlos"),
          district("San Francisco Gotera"),
          district("San Simón"),
          district("Sensembra"),
          district("Sociedad"),
          district("Yamabal"),
          district("Yoloaiquín"),
        ],
      },
    ],
  },
  {
    name: "La Unión",
    municipalities: [
      {
        name: "La Unión Norte",
        districts: [
          district("Anamorós"),
          district("Bolívar"),
          district("Concepción de Oriente"),
          district("El Sauce"),
          district("Lislique"),
          district("Nueva Esparta"),
          district("Pasaquina"),
          district("Polorós"),
          district("San José La Fuente"),
          district("Santa Rosa de Lima"),
        ],
      },
      {
        name: "La Unión Sur",
        districts: [
          district("Conchagua"),
          district("El Carmen"),
          district("Intipucá"),
          district("La Unión"),
          district("Meanguera del Golfo"),
          district("San Alejo"),
          district("Yayantique"),
          district("Yucuaiquín"),
        ],
      },
    ],
  },
];

export function formatSurchargeLabel(surcharge: number | null): string {
  if (surcharge === null) {
    return "Sin servicio";
  }

  if (surcharge === 0) {
    return "Sin extra";
  }

  return `+$${surcharge} por el viaje`;
}

export function findDepartment(name: string): Department | undefined {
  return departments.find((item) => item.name === name);
}

export function findMunicipality(
  department: Department,
  name: string,
): Municipality | undefined {
  return department.municipalities.find((item) => item.name === name);
}

export function findDistrict(
  municipality: Municipality,
  name: string,
): District | undefined {
  return municipality.districts.find((item) => item.name === name);
}

export function departmentHasCoverage(department: Department): boolean {
  return department.municipalities.some((municipality) =>
    municipality.districts.some((item) => item.surcharge !== null),
  );
}

export function listCoveredDepartmentNames(): string[] {
  return departments
    .filter(departmentHasCoverage)
    .map((department) => department.name);
}

export function formatPlaceLabel(
  department: string,
  municipality: string,
  districtName: string,
): string {
  return `${districtName}, ${municipality}, ${department}`;
}

export type PlaceHit = {
  departmentName: string;
  municipalityName: string;
  district: District;
};

type IndexedPlace = PlaceHit & {
  districtFold: string;
  municipalityFold: string;
  departmentFold: string;
};

function foldText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

const placeIndex: IndexedPlace[] = departments.flatMap((department) =>
  department.municipalities.flatMap((municipality) =>
    municipality.districts.map((item) => ({
      departmentName: department.name,
      municipalityName: municipality.name,
      district: item,
      districtFold: foldText(item.name),
      municipalityFold: foldText(municipality.name),
      departmentFold: foldText(department.name),
    })),
  ),
);

function rankPlace(place: IndexedPlace, needle: string): number {
  if (place.districtFold === needle) return 0;
  if (place.districtFold.startsWith(needle)) return 1;
  if (place.districtFold.includes(needle)) return 2;
  if (place.municipalityFold === needle) return 3;
  if (place.municipalityFold.startsWith(needle)) return 4;
  if (place.municipalityFold.includes(needle)) return 5;
  if (place.departmentFold === needle) return 6;
  if (place.departmentFold.startsWith(needle)) return 7;
  if (place.departmentFold.includes(needle)) return 8;
  return 99;
}

/** Busca pueblo o ciudad por nombre. No hace falta saber el distrito oficial. */
export function searchPlaces(query: string, limit = 8): PlaceHit[] {
  const needle = foldText(query);

  if (needle.length < 2) {
    return [];
  }

  return placeIndex
    .map((item) => ({ item, rank: rankPlace(item, needle) }))
    .filter((entry) => entry.rank < 99)
    .sort((left, right) => {
      if (left.rank !== right.rank) {
        return left.rank - right.rank;
      }

      return left.item.district.name.localeCompare(
        right.item.district.name,
        "es",
      );
    })
    .slice(0, limit)
    .map(({ item }) => ({
      departmentName: item.departmentName,
      municipalityName: item.municipalityName,
      district: item.district,
    }));
}
