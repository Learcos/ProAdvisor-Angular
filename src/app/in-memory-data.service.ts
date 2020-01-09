import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categorie } from './categorie';
import { Injectable } from '@angular/core';
import { Entreprise } from './entreprise';
import { Commentaire } from './commentaire';
import { Auteur } from './auteur';
import { Adresse } from './adresse';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories: Categorie[] = [
      { id: 1, name: 'Peinture' },
      { id: 2, name: 'Architecte' },
      { id: 3, name: 'Chauffagiste' },
      { id: 4, name: 'Entrepreneur en toiture' },
      { id: 5, name: 'Menuisier' },
      { id: 6, name: 'Auto-moto' },
      { id: 7, name: 'Jardinage' },
      { id: 8, name: 'Panneaux solaires' },
      { id: 9, name: 'Isolation' },
      { id: 10, name: 'Aménagement intérieur' },
      { id: 11, name: 'Eolien' },
      { id: 12, name: 'Energie' }
    ];

    const adresses: Adresse[] = [
      new Adresse ("Metz", null, null, "France"),
      new Adresse ("Nancy", 'Meuse', null, 'France'),
      new Adresse ("Marseille"),
      new Adresse ("Bordeaux"),
      new Adresse ("Nice"),
      new Adresse ("Aix-en-Provence"),
      new Adresse ("Strasbourg"),
      new Adresse ("Valence"),
      new Adresse ("Montpellier"),
      new Adresse ("Lyon"),
      new Adresse ("Arles"),
      new Adresse ("La Grave"),
      new Adresse ("Borny", 'Moselle'),
      new Adresse ("Amnéville"),
      new Adresse ("Rouen"),
    ]

    const entreprises: Entreprise[] = [
      new Entreprise(1, 'Gégé-Peinture', 3.5, [categories[0]]),
      new Entreprise(2, 'Jacques-Peinture', 1.6, [categories[0]]),
      new Entreprise(3, 'Van Gogh Peinture', 2, [categories[0]] ),
      new Entreprise(4, 'Archigram', 3.5, [categories[0], categories[1]], adresses[2], "Archi top", null, "entrepriseIndividuelle"),
      new Entreprise(5, 'Cabinet Le Corbusier', 4, [categories[1]], adresses[3], "Archi bien", null, "serviceInternet"),
      new Entreprise(6, 'Pro chauffage', 2.8, [categories[2]], adresses[5], "" ),
      new Entreprise(7, 'Pro toiture', 4, [categories[3]]),
      new Entreprise(8, 'Pro-Menuiserie', 3.6, [categories[4]], null, null, null, ),
      new Entreprise(9, 'Passion moto', 1.6, [categories[0], categories[2], categories[4]], adresses[4]),
      new Entreprise(10, 'Passion auto', 1.6, [categories[5]] ),
      new Entreprise(11, 'Passion auto moto', 5, [categories[5]] ), 
      new Entreprise(12, 'Passion jardin', 1.6, [categories[6]] ),
      new Entreprise(13, 'Passion panneaux', 5, [categories[7]] ),
      new Entreprise(14, 'Passion solaire', 4.6, [categories[7]]),
      new Entreprise(15, 'Passion isolation', 3.6, [categories[8]] ),
      new Entreprise(16, 'Passion aména', 1.6, [categories[9]]),
      new Entreprise(17, 'Passion gement', 2.1, [categories[9]] ),
      new Entreprise(18, 'Passion inté', 1.6, [categories[9]] ),
      new Entreprise(19, 'Passion rieur', 2.3, [categories[9]] ),
      new Entreprise(20, 'Passion éolien', 1.6, [categories[10]]),
      new Entreprise(21, 'Passion énergie', 1.6, [categories[11]]),
    ]

    const auteurs: Auteur[] = [
      new Auteur(1, new Date('December 17, 2018 03:24:00'), 'Jean ', adresses[0]),
      new Auteur(2, new Date('December 17, 2018 03:24:00'), 'Stephanie'),
      new Auteur(3, new Date('December 17, 2018 03:24:00'), 'Marjorie', adresses[14]),
      new Auteur(4, new Date('December 17, 2018 03:24:00'), 'Laetitia'),
      new Auteur( 5, new Date('December 17, 2018 03:24:00'), 'Lisa'),
      new Auteur( 6, new Date('December 17, 2018 03:24:00'), 'Jérôme du 13', adresses[2]),
      new Auteur( 7, new Date('December 17, 2018 03:24:00'), '7'),
      new Auteur(8, new Date('December 17, 2018 03:24:00'), '8'),
      new Auteur(9, new Date('December 17, 2018 03:24:00'), '9', adresses[1]),
      new Auteur(10, new Date('December 17, 2018 03:24:00'), '10', adresses[3]),
      new Auteur(11, new Date('December 17, 2018 03:24:00'), '11', adresses[4]),
      new Auteur(12, new Date('December 17, 2018 03:24:00'), 'Pseudo 12', adresses[5]),
      new Auteur(13, new Date('December 17, 2018 03:24:00'), '13'),
      new Auteur(14, new Date('December 17, 2018 03:24:00'), 'Pseudo 14', adresses[6]),
      new Auteur(15, new Date('December 17, 2018 03:24:00'), '15', adresses[7]),
      new Auteur(16, new Date('December 17, 2018 03:24:00'), 'Pseudo 16'),
      new Auteur(17, new Date('December 17, 2018 03:24:00'), '17', adresses[8]),
      new Auteur(18, new Date('December 17, 2018 03:24:00'), '18', adresses[9]),
      new Auteur(19, new Date('December 17, 2018 03:24:00'), '19'),
      new Auteur(20,  new Date('December 17, 2018 03:24:00'),  'Pseudo 20', adresses[10]),
      new Auteur(21,  new Date('December 17, 2018 03:24:00'),  'Pseudo 21', adresses[11]),
      new Auteur(22,  new Date('December 17, 2018 03:24:00'),  '22', adresses[12]),
      new Auteur(23,  new Date('December 17, 2018 03:24:00'),  '23', adresses[13]),
      new Auteur(24,  new Date('December 17, 2018 03:24:00'),  'Pseudo 24'),
    ]

    const commentaires: Commentaire[] = [
      new Commentaire(1, 'Cool', entreprises[0], 1, new Date('December 17, 2018 03:24:00'), true, auteurs[0]),
      new Commentaire(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                      entreprises[0], 4.9, new Date('December 17, 2018'), true, auteurs[0] ),
      new Commentaire( 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      entreprises[1], 4, new Date('December 17, 2018 03:24:00'), false, auteurs[1]),
      new Commentaire(4, 'Cool', entreprises[1], 4, new Date('December 17, 2018 03:24:00'), true, auteurs[2]),
      new Commentaire( 5, 'Cool', entreprises[2], 0.6, new Date('December 17, 2018 03:24:00'), true),
      new Commentaire( 6, 'Cool', entreprises[3], 1.6, new Date('December 17, 2018 03:24:00'), true, auteurs[3]),
      new Commentaire( 7, 'Cool', entreprises[3], 4.2, new Date('December 17, 2018 03:24:00'), false, auteurs[3]),
      new Commentaire(8, 'Cool', entreprises[4], 3.6, new Date('December 17, 2018 03:24:00'), false, auteurs[4]),
      new Commentaire(9, 'Cool', entreprises[5], 2.56, new Date('December 17, 2018 03:24:00'), false, auteurs[4]),
      new Commentaire(10, 'Lorem ipsum doàor sit amet, conèectetur adipiscing', entreprises[6], 4, new Date('December 17, 2018 03:24:00'), true, auteurs[5]),
      new Commentaire(11, 'Lorem ipsum @ dolor # sit amet, consectetur adipiscing', entreprises[6], 4, new Date('December 17, 2018 03:24:00'), true),
      new Commentaire(12, 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                      entreprises[6], 4, new Date('December 17, 2018 03:24:00'), true, auteurs[6]),
      new Commentaire(13, 'Cool', entreprises[6], 3.6, new Date('December 17, 2018 06:24:00'), false, auteurs[7]),
      new Commentaire(14, 'Cool', entreprises[6], 2, new Date('December 17, 2018 03:24:00'), true, auteurs[7]),
      new Commentaire(15, 'Cool', entreprises[7], 4, new Date('December 17, 2018 03:24:00'), true, auteurs[8]),
      new Commentaire(16, 'Cool', entreprises[8], 4, new Date('August 17, 2018 03:56:00')),
      new Commentaire(17, 'Cool', entreprises[9], 3, new Date('December 17, 2018 03:24:00')),
      new Commentaire(18, 'Trop bien', entreprises[10], 4, new Date('December 17, 2018 03:24:00'), true, auteurs[9]),
      new Commentaire(19, 'Cool', entreprises[12], 4, new Date('December 17, 2018 03:24:00')),
      new Commentaire(20,  'Cool',  entreprises[13],  4,  new Date('December 17, 2018 03:24:00'), null, auteurs[9]),
      new Commentaire(21,  'Cool',  entreprises[14],  4.25,  new Date('December 17, 2018 03:24:00'), false, auteurs[10]),
      new Commentaire(22,  'Cool',  entreprises[14],  4,  new Date('December 15, 2018 03:24:00') ),
      new Commentaire(23,  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',  entreprises[15], 4,
                      new Date('December 17, 2018 03:24:00'), null, auteurs[20]),
      new Commentaire(24,  'Cool',  entreprises[16],  4,  new Date('December 12, 2018 03:24:00'), true, auteurs[16]),
      new Commentaire(25,  'Cool',  entreprises[16],  4.2,  new Date('November 17, 2018 03:24:00')),
      new Commentaire(26,  'Cool',  entreprises[16],  4,  new Date('Octobre 17, 2018 03:24:05'), true, auteurs[16]),
      new Commentaire(27,  'Cool',  entreprises[16],  4,  new Date('December 17, 2016 03:24:00'), null, auteurs[16]),
      new Commentaire(28,  'Cool',  entreprises[16],  4,  new Date('January 17, 2018 03:24:00'), true, auteurs[17]),
      new Commentaire(29,  'Cool',  entreprises[16],  4,  new Date('December 17, 2018 03:24:00'), null, auteurs[17] ),
      new Commentaire(30,  'Cool',  entreprises[17],  4,  new Date('December 17, 2018 03:24:00'), true, auteurs[18]),
      new Commentaire(31,  'Cool',  entreprises[17],  5,  new Date('December 17, 2018 03:24:00')),
      new Commentaire(32,  'Cool',  entreprises[18],  5,  new Date('December 17, 2018 03:24:00'), false),
      new Commentaire(33,  'Cool',  entreprises[20],  4,  new Date('February 17, 2018 03:24:00')),
      new Commentaire(34,  'Cool',  entreprises[20],  4,  new Date('December 17, 2018 03:24:00'), true, auteurs[18]),
      new Commentaire(35,  'Cool',  entreprises[20],  5,  new Date('December 17, 2018 03:24:00')),
      new Commentaire(36,  'Cool',  entreprises[2],  4,  new Date('December 17, 2018 03:24:00'), false, auteurs[19])
    ]

    return { categories, entreprises, commentaires };
  }

  // Overrides the genId method to ensure that a data always has an id.
  // If the array is empty,
  // the method below returns the initial number (1).
  // if the array is not empty, the method below returns the highest
  // id + 1.
  genId<T extends Categorie | Entreprise | Commentaire>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}