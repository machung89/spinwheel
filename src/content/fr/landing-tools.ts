import type { LandingText } from "../types";

export const landingTools: Record<string, LandingText> = {
  "team-generator": {
    name: "Générateur d’équipes",
    card: "Répartissez une liste de prénoms en équipes équitables.",
    seoTitle: "Générateur d’équipes aléatoires – Groupes équilibrés",
    metaDescription: "Générateur d’équipes aléatoires gratuit. Collez une liste de prénoms, choisissez le nombre d’équipes ou de membres et obtenez des groupes équilibrés.",
    h1: "Générateur d’équipes aléatoires",
    lead: "Collez votre liste, choisissez le nombre d’équipes et obtenez des groupes aléatoires équilibrés en un clic.",
    sections: [
      {
        heading: "Des équipes toujours équilibrées",
        paragraphs: [
          "Le générateur mélange votre liste avec un brassage cryptographiquement sûr, puis distribue les prénoms un par un, comme des cartes. Les équipes ne diffèrent donc jamais de plus d’une personne : 13 personnes en 3 équipes donnent 5, 4 et 4.",
          "Répartissez par nombre d’équipes (quatre groupes pour quatre ateliers, par exemple) ou par personnes par équipe (binômes ou trinômes). Nommez les équipes — Rouge, Bleu, Vert — et copiez le résultat pour le coller dans un chat, un document ou une diapo.",
        ],
      },
      { heading: "Quand utiliser des équipes aléatoires", list: ["Travaux de groupe et binômes de TP", "Matchs de foot, de basket ou de balle au prisonnier", "Team building et hackathons", "Quiz et jeux de soirée", "Salles de sous-groupes en visio"] },
      { heading: "Pourquoi le hasard vaut mieux que des capitaines", paragraphs: ["Laisser des capitaines choisir est une tradition… et le meilleur moyen que quelqu’un se sente mis à l’écart. Les équipes aléatoires sont plus rapides, mélangent les groupes d’amis et écartent tout soupçon de favoritisme. Pour équilibrer les niveaux, générez plusieurs fois et gardez la répartition la plus juste, ou répartissez séparément confirmés et débutants puis combinez."] },
    ],
    howTo: [
      { title: "Collez les prénoms", text: "Un par ligne ou séparés par des virgules. Les doublons sont retirés." },
      { title: "Choisissez la répartition", text: "Nombre d’équipes ou personnes par équipe." },
      { title: "Nommez les équipes", text: "Facultatif : noms séparés par des virgules." },
      { title: "Générez", text: "Copiez le résultat ou remélangez." },
    ],
    benefits: [
      { title: "Tailles égales", text: "Jamais plus d’une personne d’écart." },
      { title: "Vrai hasard", text: "Brassage Fisher–Yates cryptographiquement sûr." },
      { title: "Facile à partager", text: "Copiez toutes les équipes en un clic." },
      { title: "Privé", text: "Les prénoms ne sont traités que dans votre navigateur." },
    ],
    faqs: [
      { q: "Comment les équipes sont-elles rendues équitables ?", a: "La liste est mélangée avec un brassage Fisher–Yates sans biais utilisant le générateur cryptographique du navigateur, puis distribuée à tour de rôle pour équilibrer les tailles." },
      { q: "Puis-je faire des binômes ?", a: "Oui. Choisissez Personnes par équipe et saisissez 2. Avec un nombre impair, un groupe aura trois personnes." },
      { q: "Y a-t-il une limite de prénoms ?", a: "Vous pouvez coller des centaines de prénoms ; le générateur répond instantanément." },
      { q: "Puis-je garder certaines personnes ensemble ?", a: "Pas automatiquement. Astuce : écrivez-les sur une seule ligne, comme « Sam et Alex », pour qu’elles comptent comme une entrée." },
    ],
  },
  "random-number-generator": {
    name: "Générateur de nombres aléatoires",
    card: "Des nombres aléatoires dans n’importe quel intervalle.",
    seoTitle: "Générateur de nombres aléatoires – Tout intervalle",
    metaDescription: "Générez des nombres aléatoires entre n’importe quel minimum et maximum. Tirez 1 à 1 000 nombres, avec ou sans répétition, triés ou non. Gratuit et sûr.",
    h1: "Générateur de nombres aléatoires",
    lead: "Choisissez un intervalle et une quantité, et obtenez instantanément des résultats aléatoires sans biais.",
    sections: [
      {
        heading: "Des nombres sûrs et sans biais",
        paragraphs: [
          "Beaucoup d’outils simples utilisent Math.random, suffisant pour jouer mais pas conçu pour être imprévisible. Ce générateur utilise la Web Crypto API avec échantillonnage par rejet, la méthode recommandée pour le code sensible. Chaque nombre de l’intervalle a exactement la même chance, même pour de très grands intervalles.",
          "Activez Sans répétition pour tirer des nombres uniques : pratique pour une tombola, un loto entre amis ou attribuer des identifiants au hasard. Générez jusqu’à 1 000 nombres d’un coup, triés si vous le souhaitez.",
        ],
      },
      { heading: "Usages courants", list: ["Tombolas et tirages de lots", "Désigner un gagnant par numéro de ticket", "Cours de statistiques et probabilités", "Choisir une page, une question ou une place au hasard", "Jeux de société sans dé"] },
    ],
    howTo: [
      { title: "Fixez l’intervalle", text: "Saisissez un minimum et un maximum. Les négatifs fonctionnent aussi." },
      { title: "Choisissez la quantité", text: "Tirez 1 à 1 000 nombres." },
      { title: "Options", text: "Autorisez ou non les répétitions, triez ou non." },
      { title: "Générez", text: "Copiez le résultat ou recommencez." },
    ],
    benefits: [
      { title: "Tout intervalle", text: "De 1–6 à plus ou moins quatre millions de milliards." },
      { title: "Sans répétition", text: "Tirages uniques pour tombolas et lotos." },
      { title: "Niveau cryptographique", text: "Utilise crypto.getRandomValues, pas Math.random." },
      { title: "Historique", text: "Vos résultats précédents s’affichent en dessous." },
    ],
    faqs: [
      { q: "Ce générateur est-il vraiment aléatoire ?", a: "Il utilise le générateur cryptographiquement sûr de votre appareil, adapté aux usages de sécurité. L’échantillonnage par rejet supprime le léger biais du simple modulo." },
      { q: "Comment tirer des numéros façon loto ?", a: "Fixez l’intervalle (par exemple 1 à 49), saisissez 6 et activez Sans répétition. C’est pour le plaisir : cela n’améliore pas vos chances à un vrai loto." },
      { q: "Puis-je générer des décimales ?", a: "Le générateur produit des entiers. Pour des décimales, générez un intervalle plus grand et divisez : 1 à 1000 divisé par 100 donne deux décimales." },
    ],
  },
  "random-letter-generator": {
    name: "Générateur de lettres aléatoires",
    card: "Tirez des lettres au hasard pour jeux de mots et phonologie.",
    seoTitle: "Générateur de lettres aléatoires – Lettres de A à Z",
    metaDescription: "Générez des lettres aléatoires de A à Z. Voyelles ou consonnes, majuscules ou minuscules, sans lettres difficiles et plusieurs lettres sans répétition.",
    h1: "Générateur de lettres aléatoires",
    lead: "Tirez une lettre ou plusieurs à la fois, avec options voyelles, consonnes et exclusion des lettres difficiles.",
    sections: [
      {
        heading: "Conçu pour les jeux de mots",
        paragraphs: [
          "Le petit bac, les anagrammes et les défis d’orthographe commencent par une lettre au hasard. L’option Ignorer les lettres difficiles exclut Q, U, V, X, Y et Z, qui bloquent souvent les jeux où il faut un mot par catégorie.",
          "Besoin de lettres pour un jeu de construction de mots ? Tirez sept lettres sans répétition, ou mélangez voyelles et consonnes en les tirant séparément.",
        ],
      },
      { heading: "Pour enseignants et parents", paragraphs: ["Utilisez les paires majuscule/minuscule (Aa, Bb) pour reconnaître les lettres, les voyelles seules pour travailler les sons, ou un lot de lettres pour un échauffement d’orthographe. Parfait au vidéoprojecteur ou sur tablette."], list: ["Échauffement sur les sons", "Trouve trois choses qui commencent par…", "Le mot le plus long avec ces lettres", "Entraînement à l’écriture"] },
    ],
    howTo: [
      { title: "Choisissez les lettres", text: "Toutes, voyelles ou consonnes." },
      { title: "Choisissez la casse", text: "Majuscules, minuscules ou les deux." },
      { title: "Fixez la quantité", text: "1 à 26 lettres, avec ou sans répétition." },
      { title: "Générez", text: "Vos lettres apparaissent aussitôt." },
    ],
    benefits: [
      { title: "Idéal pour jouer", text: "Excluez les lettres difficiles pour des parties fluides." },
      { title: "Sélections flexibles", text: "Voyelles, consonnes ou alphabet complet." },
      { title: "Sans répétition", text: "Lettres uniques pour les jeux de tuiles." },
      { title: "Équitable", text: "Chaque lettre a la même chance." },
    ],
    faqs: [
      { q: "Puis-je exclure certaines lettres ?", a: "Utilisez Ignorer les lettres difficiles pour retirer Q, U, V, X, Y et Z, ou la Roue des lettres où vous pouvez masquer n’importe quelle lettre." },
      { q: "Inclut-il les lettres accentuées ?", a: "Le générateur utilise les 26 lettres de base. Vous pouvez ajouter É, È, À ou Ç à une roue personnalisée." },
      { q: "Le Y compte-t-il comme voyelle ?", a: "Dans les filtres voyelles/consonnes, Y est traité comme une consonne." },
    ],
  },
  "dice-roller": {
    name: "Lanceur de dés",
    card: "Lancez jusqu’à 12 dés : d4, d6, d8, d10, d12, d20 ou d100.",
    seoTitle: "Lancer de dés en ligne – Dés virtuels de d4 à d100",
    metaDescription: "Lancez jusqu’à 12 dés virtuels en ligne : d4, d6, d8, d10, d12, d20 ou d100. Ajoutez un modificateur, voyez le total et l’historique. Équitable, rapide et gratuit.",
    h1: "Lancer de dés en ligne",
    lead: "Vous avez perdu vos dés ? Lancez-en jusqu’à douze à la fois, du d4 à quatre faces au d100.",
    sections: [
      {
        heading: "Tous les dés dont vous avez besoin",
        paragraphs: [
          "Les jeux de société utilisent surtout des dés à six faces, mais les jeux de rôle demandent toute une panoplie : d4, d6, d8, d10, d12, d20 et d100. Choisissez le type et le nombre, ajoutez un modificateur de bonus ou de malus, et le lanceur affiche chaque dé et le total.",
          "Les derniers lancers s’affichent en dessous pour vérifier ce qui s’est passé deux tours plus tôt, bien utile quand la table n’est pas d’accord.",
        ],
      },
      { heading: "Des lancers équitables", paragraphs: ["Les vrais dés peuvent être légèrement déséquilibrés ; pas les dés virtuels. Chaque lancer utilise le générateur cryptographique du navigateur : chaque face a exactement la même chance."] },
      { heading: "Idéal pour", list: ["Jeux de société avec un dé manquant", "Parties de jeu de rôle (2d6, 1d20+5, 4d6…)", "Cours de maths et de probabilités", "Jeux de soirée et soirées en famille", "Petites décisions au hasard"] },
    ],
    howTo: [
      { title: "Choisissez les dés", text: "Nombre de dés (1–12) et nombre de faces." },
      { title: "Ajoutez un modificateur", text: "Facultatif : à ajouter ou retrancher du total." },
      { title: "Lancez", text: "Voyez chaque dé et le total." },
      { title: "Consultez l’historique", text: "Les derniers lancers sont listés en dessous." },
    ],
    benefits: [
      { title: "Sept types de dés", text: "d4, d6, d8, d10, d12, d20 et d100." },
      { title: "Totaux et modificateurs", text: "Plus besoin de calcul mental." },
      { title: "Parfaitement équitable", text: "Aucune face usée ni pipée." },
      { title: "Toujours sous la main", text: "Fonctionne sur tout téléphone, sans appli." },
    ],
    faqs: [
      { q: "Les dés en ligne sont-ils équitables ?", a: "Ceux-ci, oui. Chaque face est choisie par un générateur cryptographiquement sûr avec échantillonnage par rejet : toutes sont également probables." },
      { q: "Comment lancer 1d20+5 ?", a: "Réglez Nombre de dés sur 1, Faces sur d20 et Modificateur sur 5, puis cliquez sur Lancer." },
      { q: "Puis-je lancer différents types de dés à la fois ?", a: "Un type à la fois. Pour des lancers mixtes, lancez chaque type à tour de rôle : l’historique garde les deux." },
    ],
  },
  "coin-flip": {
    name: "Pile ou face",
    card: "Lancez une pièce virtuelle équitable, une ou cent fois.",
    seoTitle: "Pile ou face en ligne – Lancer une pièce",
    metaDescription: "Jouez à pile ou face en ligne avec une pièce virtuelle équitable. Lancez une fois ou 100 fois, suivez les séries et le ratio pile/face. Gratuit et instantané.",
    h1: "Pile ou face en ligne",
    lead: "Pile ou face ? Lancez une pièce virtuelle parfaitement équitable : une fois pour décider, ou cent fois pour voir les probabilités en action.",
    sections: [
      {
        heading: "Une pièce parfaitement équitable",
        paragraphs: [
          "Des chercheurs ont observé qu’une vraie pièce retombe légèrement plus souvent du côté où elle a commencé. Une pièce virtuelle n’a ni côté de départ ni technique de pouce : chaque lancer est un nouveau 50/50 tiré par le générateur cryptographique du navigateur.",
          "Cliquez sur Lancer 10 ou Lancer 100 pour une expérience rapide. Le pourcentage de faces oscille autour de 50 % et s’en rapproche à mesure que les lancers s’accumulent : c’est la loi des grands nombres.",
        ],
      },
      { heading: "Quand jouer à pile ou face", list: ["Décider qui commence ou qui engage", "Départager deux options", "Décisions rapides oui/non", "Cours de probabilités", "Choisir son camp dans un jeu"] },
    ],
    howTo: [
      { title: "Annoncez", text: "Pile ou face ? Dites-le à voix haute." },
      { title: "Lancez", text: "Cliquez sur Lancer la pièce et regardez-la tourner." },
      { title: "Voyez le résultat", text: "Pile ou face s’affiche avec vos statistiques." },
      { title: "Expérimentez", text: "Essayez Lancer 100 pour voir le ratio approcher 50 %." },
    ],
    benefits: [
      { title: "50/50 exact", text: "Aucun biais de poids, d’usure ou de technique." },
      { title: "Lancers en série", text: "10 ou 100 pièces d’un coup." },
      { title: "Statistiques", text: "Totaux, séries et derniers résultats." },
      { title: "Accessible", text: "Résultats annoncés aux lecteurs d’écran." },
    ],
    faqs: [
      { q: "Un pile ou face virtuel est-il à 50/50 ?", a: "Oui. Chaque lancer a exactement 50 % de chances de tomber sur face, choisi par le générateur cryptographique du navigateur." },
      { q: "Pourquoi ai-je eu cinq faces d’affilée ?", a: "Les séries sont normales ! Cinq faces d’affilée ont environ une chance sur 32 : cela arrive souvent sur de nombreux lancers." },
      { q: "Puis-je lancer plusieurs pièces ?", a: "Utilisez Lancer 10 ou Lancer 100 pour en lancer beaucoup d’un coup et voir les totaux." },
    ],
  },
  "yes-or-no-picker": {
    name: "Tirage oui ou non",
    card: "Obtenez un oui, un non ou un peut-être instantané.",
    seoTitle: "Tirage oui ou non – Une réponse aléatoire immédiate",
    metaDescription: "Posez une question et obtenez immédiatement un oui ou un non aléatoire. Ajoutez Peut-être ou jouez au meilleur des trois. Un moyen rapide et équitable de trancher.",
    h1: "Oui ou non ?",
    lead: "Tapez votre question (ou pas) et obtenez un oui ou un non instantané. Pas de roue, pas d’attente.",
    sections: [
      {
        heading: "Quand vous voulez juste une réponse",
        paragraphs: [
          "La Roue oui ou non est parfaite pour le suspense. Ce tirage est fait pour obtenir une réponse tout de suite. Cliquez et vous aurez Oui ou Non avec exactement la même chance, ou activez Peut-être pour trois réponses.",
          "Le meilleur des trois tire trois fois et suit la majorité, ce que beaucoup trouvent plus convaincant qu’un seul résultat. Vos dernières questions et réponses sont listées en dessous.",
        ],
      },
      { heading: "À utiliser avec discernement", paragraphs: ["Une réponse aléatoire est idéale pour les petits choix réversibles : dessert ou pas, à pied ou en voiture, maintenant ou après le déjeuner. Pour les décisions importantes, servez-vous-en pour sonder votre intuition : si la réponse vous déçoit, vous savez ce que vous voulez vraiment."] },
    ],
    howTo: [
      { title: "Demandez", text: "Tapez une question fermée, ou pensez-y simplement." },
      { title: "Options", text: "Ajoutez Peut-être ou le meilleur des trois." },
      { title: "Obtenez la réponse", text: "Cliquez pour un résultat immédiat." },
      { title: "Revoyez", text: "Les dernières réponses sont listées en dessous." },
    ],
    benefits: [
      { title: "Instantané", text: "Pas d’animation : la réponse apparaît aussitôt." },
      { title: "Équitable", text: "Chances égales pour chaque réponse." },
      { title: "Meilleur des trois", text: "Un vote majoritaire pour plus d’assurance." },
      { title: "Privé", text: "Vos questions ne quittent jamais votre appareil." },
    ],
    faqs: [
      { q: "La réponse oui/non est-elle aléatoire ?", a: "Oui. Chaque réponse est choisie par un générateur cryptographiquement sûr, avec des chances exactement égales." },
      { q: "Comment fonctionne le meilleur des trois ?", a: "Le tirage choisit oui ou non jusqu’à trois fois et s’arrête dès qu’une réponse obtient deux voix. Les votes s’affichent sous la réponse." },
      { q: "Ma question est-elle enregistrée ?", a: "Seulement sur cette page tant qu’elle est ouverte. Les questions ne sont envoyées nulle part." },
    ],
  },
  "truth-or-dare-generator": {
    name: "Générateur action ou vérité",
    card: "Vérités et actions sympas selon l’âge.",
    seoTitle: "Générateur action ou vérité – Questions et défis sympas",
    metaDescription: "Générateur action ou vérité gratuit avec des questions et défis adaptés aux enfants, ados et adultes. Sans répétition, avec tours de jeu et cartes instantanées.",
    h1: "Générateur action ou vérité",
    lead: "Tirez une nouvelle vérité ou action en un clic. Choisissez l’âge, ajoutez les joueurs et laissez le jeu se dérouler.",
    sections: [
      {
        heading: "Des questions sympas pour chaque public",
        paragraphs: [
          "Chaque question est écrite pour que le jeu reste drôle et confortable. Celles des enfants sont rigolotes et gentilles, celles des ados conviennent aux soirées pyjama et groupes de jeunes, et celles des adultes visent les soirées où l’on veut rire, pas rougir.",
          "Les questions ne se répètent pas avant d’avoir parcouru toute la liste de l’âge et du type choisis : les longues parties restent fraîches.",
        ],
      },
      { heading: "Des règles pour s’amuser", list: ["Chacun peut passer une fois par partie, sans se justifier.", "Les actions doivent être sûres et faisables dans la pièce.", "Pas d’action avec le téléphone, de publication ou de contact extérieur sans accord.", "Si quelqu’un semble mal à l’aise, on passe : c’est pour s’amuser."] },
      { heading: "Vous préférez une roue ?", paragraphs: ["La Roue action ou vérité cache une question sous chaque secteur et la révèle après le tirage. Vous pouvez écrire vos propres questions et partager la roue avec vos amis."] },
    ],
    howTo: [
      { title: "Choisissez l’âge", text: "Enfants, ados ou adultes." },
      { title: "Ajoutez les joueurs", text: "Facultatif : saisissez les prénoms pour suivre les tours." },
      { title: "Tirez une carte", text: "Vérité, Action ou Au hasard." },
      { title: "Joueur suivant", text: "Passez la main et tirez encore." },
    ],
    benefits: [
      { title: "Adapté à l’âge", text: "Trois sélections de questions." },
      { title: "Sans répétition", text: "Toute la liste avant de recommencer." },
      { title: "Suivi des tours", text: "Indique à qui c’est le tour." },
      { title: "Instantané", text: "Ni préparation ni inscription." },
    ],
    faqs: [
      { q: "Les questions conviennent-elles aux enfants ?", a: "La sélection Enfants vise environ 6 à 12 ans et reste drôle et douce. Choisissez toujours la sélection adaptée au plus jeune joueur." },
      { q: "Puis-je ajouter mes propres vérités et actions ?", a: "Utilisez la Roue action ou vérité pour écrire, enregistrer et partager vos questions." },
      { q: "Combien y a-t-il de questions ?", a: "Chaque âge compte 15 vérités et 15 actions, sans répétition avant d’avoir tout tiré." },
    ],
  },
  "youtube-comment-picker": {
    name: "Tirage de commentaires YouTube",
    card: "Tirez au sort un gagnant parmi les commentaires YouTube.",
    seoTitle: "Tirage au sort de commentaires YouTube – Gagnant aléatoire",
    metaDescription: "Tirez au sort un gagnant parmi les commentaires YouTube. Filtrez par mot-clé, excluez votre chaîne, une participation par personne, plusieurs gagnants.",
    h1: "Tirage au sort de commentaires YouTube",
    lead: "Organisez un concours équitable : tirez des gagnants parmi les commentaires d’une vidéo, avec filtres de mot-clé, doublons et comptes exclus.",
    sections: [
      {
        heading: "Comment ça marche",
        paragraphs: [
          "Collez le lien d’une vidéo YouTube publique et l’outil charge ses commentaires principaux via l’API officielle YouTube Data. Définissez ensuite vos règles — mot-clé obligatoire, comptes exclus, une participation par personne ou par commentaire — et tirez autant de gagnants que nécessaire.",
          "Si le chargement automatique n’est pas disponible, collez les commentaires (un par ligne, au format « Nom : commentaire »), copiés depuis la vue des commentaires de YouTube Studio ou un export.",
        ],
      },
      { heading: "Un concours digne de confiance", list: ["Publiez les règles avant le début, avec la date de fin et le mode de tirage.", "Activez Une participation par personne pour neutraliser le spam.", "Excluez votre chaîne, vos modérateurs et votre équipe.", "Filmez l’écran ou tirez en direct pour prouver l’équité.", "Respectez les règles des concours YouTube et la loi applicable."] },
      { heading: "Équité", paragraphs: ["Les gagnants sont tirés parmi les commentaires admissibles grâce à un brassage partiel cryptographiquement sûr : chaque participation admissible a la même chance et personne ne peut gagner deux fois dans un même tirage."] },
    ],
    howTo: [
      { title: "Collez le lien", text: "N’importe quelle vidéo publique ou Short." },
      { title: "Chargez les commentaires", text: "Les commentaires principaux sont récupérés automatiquement." },
      { title: "Réglez les filtres", text: "Mot-clé, exclusions et une participation par personne." },
      { title: "Tirez les gagnants", text: "Un ou plusieurs d’un coup." },
    ],
    benefits: [
      { title: "Tirages équitables", text: "Même chance pour chaque participation admissible." },
      { title: "Anti-spam", text: "Option une participation par compte." },
      { title: "Flexible", text: "Filtres par mot-clé et listes d’exclusion." },
      { title: "Sans connexion", text: "Nous ne demandons jamais votre compte YouTube." },
    ],
    faqs: [
      { q: "Faut-il se connecter à YouTube ?", a: "Non. L’outil ne lit que les commentaires publics, aucune connexion n’est nécessaire." },
      { q: "Combien de commentaires peut-il charger ?", a: "Jusqu’à 4 000 commentaires principaux par vidéo. Pour de plus gros concours, collez les commentaires depuis un export." },
      { q: "Les réponses sont-elles incluses ?", a: "Seuls les commentaires principaux sont chargés, la règle habituelle des concours par commentaire." },
      { q: "WhirlPick est-il affilié à YouTube ?", a: "Non. WhirlPick est un outil indépendant qui utilise l’API publique YouTube Data. YouTube est une marque de Google LLC." },
    ],
  },
};
