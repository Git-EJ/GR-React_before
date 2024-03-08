// ======================================= CARD BACKGROUND =======================================

import peinture from '../img/peinture.png'
import parements from '../img/parements.jpg'
import cuisine from '../img/cuisine.jpg'
import verriere from '../img/veriere.jpg'
import electricite from '../img/electricite.jpg'

import decoration from '../img/decoration.webp'
import parquet from '../img/parquet.png'
import sdb from '../img/sdb.webp'
import cloisons from '../img/cloisons.webp'
import plomberie from '../img/plomberie.jpg'

// ======================================= CARD LEFT FRONT COLOR =======================================

const peintureColor = { color: '#eb7d7d' };
const parementsColor = { color: '#aaffef' };
const cuisineColor = { color: '#ff26e8' };
const vierriereColor = { color: '#ffd5d5' };
const electriciteColor = { color: '#ffaf56' };

// ======================================= CARD RIGHT FRONT COLOR =======================================

const decorationColor = { color: '#eacc44' }
const parquetColor = { color: '#12a01e' }
const sdbColor = { color: '#a2ffa9' }
const cloisonsColor = { color: '#008798' }
const plomberieColor = { color: '#8198ff' }



export const dataCard = [

    // ======================================= LEFT COLUMN =======================================

    {
        metier: 'Peinture',
        id: 'pe',
        dot: '•',
        background: peinture,
        color: peintureColor,
        backtext1: 'Tous travaux de peinture',
        backtext2: 'Application enduit/plâtre',
        backtext3: null,
        backtext4: null,
        isLeft: true
    },

    {
        metier: 'Parements',
        id: 'pa',
        dot: '•',
        background: parements,
        color: parementsColor,
        backtext1: 'Carrelages',
        backtext2: 'Plaquettes de parements',
        backtext3: 'Lambris',
        backtext4: null,
        isLeft: true
    },

    {
        metier: 'Cuisine',
        id: 'cu',
        dot: '•',
        background: cuisine,
        color: cuisineColor,
        backtext1: 'Installation / Rénovation de cuisine',
        backtext2: 'Installation de nouveaux éléments',
        backtext3: 'Remplacement de plan de travail',
        backtext4: 'Remplacement évier et robinetterie',
        isLeft: true
    },

    {
        metier: 'Verrière',
        id: 've',
        dot: '•',
        background: verriere,
        color: vierriereColor,
        backtext1: 'Création verrière sur mesure',
        backtext2: 'Pose et installation',
        backtext3: null,
        backtext4: null,
        isLeft: true
    },

    {
        metier: 'Electricité',
        id: 'el',
        dot: '•',
        background: electricite,
        color: electriciteColor,
        backtext1: 'Tous travaux éléctriques',
        backtext2: 'Mise aux normes',
        backtext3: null,
        backtext4: null,
        isLeft: true
    },

    // ======================================= RIGHT COLUMN =======================================
    
        {
        metier: 'Decoration',
        id: 'de',
        dot: '•',
        background: decoration,
        color: decorationColor,
        backtext1: 'Clé en main pour location meublée',
        backtext2: 'Luminaire',
        backtext3: 'Mobilier',
        backtext4: null,
        isLeft: false
    },

    {
        metier: 'Parquet',
        id: 'pr',
        dot: '•',
        background: parquet,
        color: parquetColor,
        backtext1: 'Tous types de parquets collés et flottants',
        backtext2: 'Ponçage/vitrification parquets massif',
        backtext3: 'Tous types de carrelages',
        backtext4: 'Dalles pvc',
        isLeft: false
    },
    
    {
        metier: 'Salle de Bain',
        id: 'sd',
        dot: '•',
        background: sdb,
        color: sdbColor,
        backtext1: 'Création, rénovation',
        backtext2: 'Installation de nouveaux élément',
        backtext3: 'Remplacement lavabo et robinetterie',
        backtext4: null,
        isLeft: false
    },

    {
        metier: 'Cloisons',
        id: 'cl',
        dot: '•',
        background: cloisons,
        color: cloisonsColor,
        backtext1: 'Placo / BA13',
        backtext2: 'Béton cellulaire',
        backtext3: 'Carreaux de plâtre',
        backtext4: null,
        isLeft: false
    },
    
    {
        metier: 'Plomberie',
        id: 'pl',
        dot: '•',
        background: plomberie,
        color: plomberieColor,
        backtext1: 'Tous travaux de plomberie',
        backtext2: 'WC suspendu',
        backtext3: null,
        backtext4: null,
        isLeft: false
    },

]
