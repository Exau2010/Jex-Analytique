/* =============================================
   JEX-ANALYTIQUE - SCRIPT.JS
   Logique metier, donnees, animations, interactions
   ============================================= */

(function() {
    'use strict';

    // ==================== DATA ====================

    const SECTORS_DATA = [
        {
            id: 'ia',
            name: 'Intelligence Artificielle (IA)',
            icon: 'fa-brain',
            color: '#90caf9',
            description: 'Secteur en pleine expansion avec un taux de croissance annualise de 23%. L\'IA transforme l\'ensemble des industries mondiales.',
            growth: 23,
            demand: 95,
            revenue: '586 milliards $ en 2025, projetee a 2 400 milliards $ en 2035',
            type: 'secteur',
            badge: 'trending',
            badgeText: 'Croissance explosive',
            entrepreneurs: ['Sam Altman', 'Demis Hassabis'],
            example: 'OpenAI a atteint une valorisation de 300 milliards $ en 2025 grace a ChatGPT et les modeles de langage avances.',
            youtubeId: 'Ss4v6qWCKyY',
            jobs: ['Ingenieur IA', 'Data Scientist', 'ML Engineer', 'Prompt Engineer', 'Roboticien'],
            revenue2025: 586,
            revenue2035: 2400,
            growthRate: 23,
            successRate: 94,
            marketShare: 18
        },
        {
            id: 'dev',
            name: 'Developpement Logiciel',
            icon: 'fa-code',
            color: '#3498db',
            description: 'Marche mondial du logiciel estime a 659 milliards $ en 2025. Croissance tiree par le cloud et l\'IA.',
            growth: 17,
            demand: 90,
            revenue: '659 milliards $ en 2025, projetee a 1 500 milliards $ en 2035',
            type: 'secteur',
            badge: 'high-demand',
            badgeText: 'Demande elevee',
            entrepreneurs: ['Bill Gates', 'Mark Zuckerberg'],
            example: 'Microsoft a genere plus de 200 milliards $ de revenus en 2025 grace a ses solutions cloud et IA.',
            youtubeId: 'pWf7tkB5I7M',
            jobs: ['Developpeur Full Stack', 'Developpeur Backend', 'Architecte Logiciel', 'DevOps', 'CTO'],
            revenue2025: 659,
            revenue2035: 1500,
            growthRate: 17,
            successRate: 89,
            marketShare: 15
        },
        {
            id: 'cyber',
            name: 'Cybersecurite',
            icon: 'fa-shield-halved',
            color: '#42a5f5',
            description: 'Marche de la cybersecurite atteint 312 milliards $ en 2025. Essentiel face a la multiplication des cyberattaques.',
            growth: 29,
            demand: 92,
            revenue: '312 milliards $ en 2025, projetee a 1 200 milliards $ en 2035',
            type: 'secteur',
            badge: 'growing',
            badgeText: 'Croissance rapide',
            entrepreneurs: ['Kevin Mandia', 'Eugene Kaspersky'],
            example: 'Palo Alto Networks a vu son chiffre d\'affaires depasser 12 milliards $ en 2025.',
            youtubeId: '4S5W1oYqJ0w',
            jobs: ['Analyste Cybersecurite', 'Pentester', 'Architecte Securite', 'CISO', 'Forensic Analyst'],
            revenue2025: 312,
            revenue2035: 1200,
            growthRate: 29,
            successRate: 91,
            marketShare: 10
        },
        {
            id: 'cloud',
            name: 'Cloud Computing',
            icon: 'fa-cloud',
            color: '#f39c12',
            description: 'Marche mondial du cloud estime a 720 milliards $ en 2025. Infrastructure cle de la transformation numerique.',
            growth: 22,
            demand: 88,
            revenue: '720 milliards $ en 2025, projetee a 2 100 milliards $ en 2035',
            type: 'secteur',
            badge: 'trending',
            badgeText: 'En expansion',
            entrepreneurs: ['Jeff Bezos', 'Andy Jassy'],
            example: 'AWS d\'Amazon genere plus de 100 milliards $ de revenus annuels, dominant le marche du cloud.',
            youtubeId: '2LaAJqEdIig',
            jobs: ['Architecte Cloud', 'Ingenieur Cloud', 'DevOps', 'SRE', 'Cloud Security'],
            revenue2025: 720,
            revenue2035: 2100,
            growthRate: 22,
            successRate: 87,
            marketShare: 20
        },
        {
            id: 'data',
            name: 'Science des Donnees',
            icon: 'fa-chart-pie',
            color: '#1976d2',
            description: 'Croissance de 34% prevue d\'ici 2034. La data est le nouveau petrole de l\'economie numerique.',
            growth: 34,
            demand: 85,
            revenue: '140 milliards $ en 2025, projetee a 600 milliards $ en 2035',
            type: 'secteur',
            badge: 'growing',
            badgeText: 'Croissance forte',
            entrepreneurs: ['DJ Patil', 'Hilary Mason'],
            example: 'Palantir Technologies a atteint 7 milliards $ de revenus en 2025 dans l\'analyse de donnees.',
            youtubeId: '8vm1qEy3CnQ',
            jobs: ['Data Scientist', 'Data Analyst', 'Data Engineer', 'BI Analyst', 'ML Engineer'],
            revenue2025: 140,
            revenue2035: 600,
            growthRate: 34,
            successRate: 86,
            marketShare: 8
        },
        {
            id: 'robotique',
            name: 'Robotique',
            icon: 'fa-robot',
            color: '#1565c0',
            description: 'Marche de la robotique estime a 90 milliards $ en 2025. Automatisation industrielle et robotique de service.',
            growth: 26,
            demand: 82,
            revenue: '90 milliards $ en 2025, projetee a 380 milliards $ en 2035',
            type: 'secteur',
            badge: 'trending',
            badgeText: 'Automatisation',
            entrepreneurs: ['Elon Musk', 'Marc Raibert'],
            example: 'Tesla Optimus et Boston Dynamics revolutionnent la robotique humanoide et industrielle.',
            youtubeId: 'M8YjvHYbZ9w',
            jobs: ['Ingenieur Robotique', 'Automaticien', 'Mechatronicien', 'Technicien Robotique'],
            revenue2025: 90,
            revenue2035: 380,
            growthRate: 26,
            successRate: 83,
            marketShare: 5
        },
        {
            id: 'fintech',
            name: 'Finance et FinTech',
            icon: 'fa-coins',
            color: '#448aff',
            description: 'Marche FinTech estime a 340 milliards $ en 2025. Transformation digitale du secteur financier.',
            growth: 25,
            demand: 80,
            revenue: '340 milliards $ en 2025, projetee a 1 200 milliards $ en 2035',
            type: 'secteur',
            badge: 'high-demand',
            badgeText: 'Tres demande',
            entrepreneurs: ['Jack Dorsey', 'Brian Armstrong'],
            example: 'Stripe est valorise a plus de 100 milliards $ en 2025, revolutionnant les paiements en ligne.',
            youtubeId: 'qF7lGJXp0Ag',
            jobs: ['Analyste Financier', 'Trader Quantitatif', 'Developpeur FinTech', 'Blockchain Dev'],
            revenue2025: 340,
            revenue2035: 1200,
            growthRate: 25,
            successRate: 85,
            marketShare: 12
        },
        {
            id: 'biotech',
            name: 'Biotechnologies',
            icon: 'fa-dna',
            color: '#82b1ff',
            description: 'Marche biotech estime a 780 milliards $ en 2025. Innovations en medecine, genetique et sante.',
            growth: 18,
            demand: 78,
            revenue: '780 milliards $ en 2025, projetee a 1 800 milliards $ en 2035',
            type: 'secteur',
            badge: 'growing',
            badgeText: 'Innovation medicale',
            entrepreneurs: ['Jennifer Doudna', 'Noubar Afeyan'],
            example: 'Moderna a revolutionne la medecine avec l\'ARN messager, atteignant 25 milliards $ de revenus.',
            youtubeId: 'lHfhDqTNEq4',
            jobs: ['Biologiste', 'Geneticien', 'Chercheur Biomedical', 'Ingenieur Biotech'],
            revenue2025: 780,
            revenue2035: 1800,
            growthRate: 18,
            successRate: 82,
            marketShare: 14
        },
        {
            id: 'energie',
            name: 'Energies Renouvelables',
            icon: 'fa-solar-panel',
            color: '#1e88e5',
            description: 'Marche des energies vertes estime a 1 200 milliards $ en 2025. Transition energetique mondiale.',
            growth: 20,
            demand: 84,
            revenue: '1 200 milliards $ en 2025, projetee a 3 500 milliards $ en 2035',
            type: 'secteur',
            badge: 'trending',
            badgeText: 'Transition verte',
            entrepreneurs: ['Elon Musk', 'Jigar Shah'],
            example: 'Tesla Energy et NextEra dominent le marche des energies renouvelables avec des milliards de revenus.',
            youtubeId: '1kUE0BZtTRc',
            jobs: ['Ingenieur Solaire', 'Technicien Eolien', 'Ingenieur Environnemental', 'Specialiste Hydrogene'],
            revenue2025: 1200,
            revenue2035: 3500,
            growthRate: 20,
            successRate: 88,
            marketShare: 22
        },
        {
            id: 'ecommerce',
            name: 'E-commerce',
            icon: 'fa-cart-shopping',
            color: '#0d47a1',
            description: 'Marche mondial du e-commerce estime a 6 300 milliards $ en 2025. Croissance continue du retail en ligne.',
            growth: 15,
            demand: 75,
            revenue: '6 300 milliards $ en 2025, projetee a 12 000 milliards $ en 2035',
            type: 'secteur',
            badge: 'high-demand',
            badgeText: 'Volume massif',
            entrepreneurs: ['Jeff Bezos', 'Bernard Arnault'],
            example: 'Amazon a genere plus de 600 milliards $ de revenus en 2025, dominant le commerce en ligne mondial.',
            youtubeId: 'c4R4H7RjPcA',
            jobs: ['E-commerce Manager', 'Logisticien', 'Marketing Digital', 'Supply Chain Manager'],
            revenue2025: 6300,
            revenue2035: 12000,
            growthRate: 15,
            successRate: 80,
            marketShare: 25
        },
        {
            id: 'spatial',
            name: 'Industrie Spatiale',
            icon: 'fa-rocket',
            color: '#bbdefb',
            description: 'Marche spatial estime a 630 milliards $ en 2025. Course a l\'espace et commercialisation orbitale.',
            growth: 28,
            demand: 72,
            revenue: '630 milliards $ en 2025, projetee a 1 800 milliards $ en 2035',
            type: 'secteur',
            badge: 'trending',
            badgeText: 'Nouvelle frontiere',
            entrepreneurs: ['Elon Musk', 'Jeff Bezos'],
            example: 'SpaceX, valorisee a plus de 350 milliards $ en 2025, domine le lancement spatial commercial.',
            youtubeId: '3YD9V2u4Gto',
            jobs: ['Ingenieur Aerospatial', 'Physicien', 'Technicien Spatial', 'Data Analyst Spatial'],
            revenue2025: 630,
            revenue2035: 1800,
            growthRate: 28,
            successRate: 78,
            marketShare: 6
        },
        {
            id: 'blockchain',
            name: 'Blockchain & Crypto',
            icon: 'fa-link',
            color: '#f39c12',
            description: 'Marche blockchain estime a 85 milliards $ en 2025. Adoption institutionnelle croissante.',
            growth: 30,
            demand: 70,
            revenue: '85 milliards $ en 2025, projetee a 480 milliards $ en 2035',
            type: 'secteur',
            badge: 'growing',
            badgeText: 'Adoption massive',
            entrepreneurs: ['Changpeng Zhao', 'Vitalik Buterin'],
            example: 'Binance et Coinbase dominent l\'echange de cryptomonnaies avec des milliards de transactions quotidiennes.',
            youtubeId: 'SSo_EIwHSd4',
            jobs: ['Blockchain Developer', 'Analyste Crypto', 'Smart Contract Dev', 'Crypto Trader'],
            revenue2025: 85,
            revenue2035: 480,
            growthRate: 30,
            successRate: 72,
            marketShare: 4
        }
    ];

    const BILLIONAIRES_DATA = [
        {
            rank: 1,
            name: 'Elon Musk',
            fortune: '1,1 trillion $',
            fortuneValue: 1100,
            age: 54,
            domaine: 'Technologie, Spatial, Automobile',
            groupe: 'Tesla, SpaceX, X',
            strategy: 'Elon Musk base sa strategie sur l\'innovation radicale et la verticalisation industrielle. Il investit massivement dans la R&D pour dominer des secteurs entiers (vehicules electriques, lancements spatiaux, intelligence artificielle). Sa vision a long terme et sa prise de risques calcules lui permettent de creer des marches la ou personne n\'ose s\'aventurer. Il utilise egalement les medias sociaux comme levier de communication et de marketing viral.',
            initials: 'EM',
            youtubeId: '8G5LkWXhGQg'
        },
        {
            rank: 2,
            name: 'Larry Page',
            fortune: '294,1 milliards $',
            fortuneValue: 294.1,
            age: 52,
            domaine: 'Technologie, Internet',
            groupe: 'Alphabet (Google)',
            strategy: 'Larry Page a bati sa fortune sur la domination mondiale de la recherche en ligne via Google. Sa strategie repose sur l\'innovation algorithmique, l\'acquisition strategique de startups prometteuses (YouTube, Android, DeepMind) et la diversification dans l\'IA, la sante et les vehicules autonomes via Alphabet. Il mise sur des projets moonshot a tres long terme.',
            initials: 'LP',
            youtubeId: 'Q2Gp2B9s5eE'
        },
        {
            rank: 3,
            name: 'Sergey Brin',
            fortune: '271,3 milliards $',
            fortuneValue: 271.3,
            age: 52,
            domaine: 'Technologie, Internet',
            groupe: 'Alphabet (Google)',
            strategy: 'Sergey Brin, co-fondateur de Google, a concentre sa strategie sur l\'innovation technologique et la recherche fondamentale. Passionne par l\'IA et les technologies de rupture, il a dirige les projets les plus ambitieux de Google X. Sa vision combine excellence technique et impact global, creant des produits utilises par des milliards de personnes.',
            initials: 'SB',
            youtubeId: '9Ez1Q8MScwI'
        },
        {
            rank: 4,
            name: 'Jeff Bezos',
            fortune: '248,9 milliards $',
            fortuneValue: 248.9,
            age: 62,
            domaine: 'E-commerce, Cloud Computing',
            groupe: 'Amazon, Blue Origin',
            strategy: 'Jeff Bezos a revolutionne le commerce mondial avec Amazon en appliquant une strategie de croissance agressive basee sur la satisfaction client, l\'optimisation logistique et la diversification. Il a cree AWS qui domine le cloud mondial. Sa philosophie du "Day 1" maintient un esprit startup dans une mega-entreprise. Il reinvestit massivement dans l\'exploration spatiale via Blue Origin.',
            initials: 'JB',
            youtubeId: 'Glt4pL7aGcI'
        },
        {
            rank: 5,
            name: 'Larry Ellison',
            fortune: '231,5 milliards $',
            fortuneValue: 231.5,
            age: 81,
            domaine: 'Technologie, Logiciel',
            groupe: 'Oracle',
            strategy: 'Larry Ellison a bati sa fortune sur Oracle, leader des bases de donnees et des solutions cloud. Sa strategie combine innovation technologique, acquisitions massives et positionnement dominant dans le logiciel d\'entreprise. Il a su faire evoluer Oracle du logiciel on-premise vers le cloud computing, anticipant les tendances du marche.',
            initials: 'LE',
            youtubeId: 'RjjmU0HzGBw'
        },
        {
            rank: 6,
            name: 'Michael Dell',
            fortune: '225,0 milliards $',
            fortuneValue: 225.0,
            age: 61,
            domaine: 'Technologie, Hardware',
            groupe: 'Dell Technologies',
            strategy: 'Michael Dell a revolutionne l\'industrie PC avec un modele de vente directe et de personnalisation de masse. Sa strategie recentre sur les solutions d\'entreprise, le stockage et les serveurs lui a permis de rebondir apres avoir privatise Dell. Il a realise l\'acquisition majeure d\'EMC pour dominer le marche des infrastructures IT.',
            initials: 'MD',
            youtubeId: 'VjLTPQJf3c4'
        },
        {
            rank: 7,
            name: 'Mark Zuckerberg',
            fortune: '194,8 milliards $',
            fortuneValue: 194.8,
            age: 41,
            domaine: 'Reseaux Sociaux, IA, Realite Virtuelle',
            groupe: 'Meta (Facebook, Instagram, WhatsApp)',
            strategy: 'Mark Zuckerberg a transforme un reseau social universitaire en un empire des medias sociaux. Sa strategie repose sur l\'acquisition de concurrents (Instagram, WhatsApp), la monétisation via la publicite ciblee, et des paris technologiques massifs comme le metaverse et l\'IA open-source avec Llama. Il investit des milliards dans la recherche en IA et realite virtuelle.',
            initials: 'MZ',
            youtubeId: '0XyW0q9eXzY'
        },
        {
            rank: 8,
            name: 'Jensen Huang',
            fortune: '177,4 milliards $',
            fortuneValue: 177.4,
            age: 63,
            domaine: 'Semi-conducteurs, IA',
            groupe: 'NVIDIA',
            strategy: 'Jensen Huang a positionne NVIDIA au coeur de la revolution de l\'IA en transformant les GPU en processeurs essentiels pour l\'apprentissage automatique. Sa strategie visionnaire a consiste a anticiper le besoin en puissance de calcul pour l\'IA bien avant le boom. Il mise sur l\'innovation technologique continue et l\'ecosysteme CUDA pour maintenir son avance dominante.',
            initials: 'JH',
            youtubeId: 'Q2Gp2B9s5eE'
        },
        {
            rank: 9,
            name: 'Bernard Arnault',
            fortune: '157,6 milliards $',
            fortuneValue: 157.6,
            age: 77,
            domaine: 'Luxe, Mode',
            groupe: 'LVMH (Louis Vuitton, Dior, Moet Hennessy)',
            strategy: 'Bernard Arnault est le maitre inconteste du luxe mondial. Sa strategie repose sur l\'acquisition de maisons de luxe centenaires, la preservation de leur heritage tout en modernisant leur image, et l\'expansion en Chine et dans les marches emergents. Il controle toute la chaine de valeur, de la creation a la distribution, maximisant les marges et l\'exclusivite.',
            initials: 'BA',
            youtubeId: 'Glt4pL7aGcI'
        },
        {
            rank: 10,
            name: 'Warren Buffett',
            fortune: '144,5 milliards $',
            fortuneValue: 144.5,
            age: 95,
            domaine: 'Finance, Investissement',
            groupe: 'Berkshire Hathaway',
            strategy: 'Warren Buffett, l\'Oracle d\'Omaha, applique une strategie d\'investissement value basee sur l\'achat d\'entreprises solides a des prix raisonnables. Sa philosophie d\'investissement a long terme et sa discipline financiere ont cree une valeur phenomenale. Il investit dans des entreprises qu\'il comprend avec des avantages concurrentiels durables et des dirigeants de qualite.',
            initials: 'WB',
            youtubeId: 'Wg_7W6cV-n4'
        },
        {
            rank: 11,
            name: 'Amancio Ortega',
            fortune: '143,2 milliards $',
            fortuneValue: 143.2,
            age: 89,
            domaine: 'Mode, Retail',
            groupe: 'Inditex (Zara)',
            strategy: 'Amancio Ortega a revolutionne la mode avec Zara en creant le modele de "fast fashion" : production rapide, renouvellement constant des collections et logistique ultra-efficiente. Sa strategie repose sur la reactivite aux tendances, la verticalisation de la production et un maillage mondial de magasins. Chaque nouvelle collection est concue, produite et distribuee en quelques semaines.',
            initials: 'AO',
            youtubeId: 'RjjmU0HzGBw'
        },
        {
            rank: 12,
            name: 'Rob Walton',
            fortune: '139,7 milliards $',
            fortuneValue: 139.7,
            age: 81,
            domaine: 'Retail, Distribution',
            groupe: 'Walmart',
            strategy: 'Rob Walton, heritier de Walmart, a beneficie de la vision de son pere Sam Walton : des prix bas tous les jours grace a une chaine logistique d\'une efficacite inegalee. La strategie Walmart repose sur le pouvoir de negociation massif, l\'optimisation des couts et une expansion mondiale. L\'entreprise a su integrer le e-commerce pour rester dominante.',
            initials: 'RW',
            youtubeId: 'VjLTPQJf3c4'
        },
        {
            rank: 13,
            name: 'Jim Walton',
            fortune: '137,0 milliards $',
            fortuneValue: 137.0,
            age: 77,
            domaine: 'Retail, Distribution',
            groupe: 'Walmart',
            strategy: 'Jim Walton, membre de la famille fondatrice de Walmart, incarne la continuite d\'une strategie qui a fait de Walmart le plus grand retailer mondial. La famille Walton maintient un controle majoritaire sur Walmart tout en diversifiant ses investissements dans la banque, les medias et la philanthropie via la Walton Family Foundation.',
            initials: 'JW',
            youtubeId: 'VjLTPQJf3c4'
        },
        {
            rank: 14,
            name: 'Carlos Slim Helu',
            fortune: '128,2 milliards $',
            fortuneValue: 128.2,
            age: 86,
            domaine: 'Telecommunications, Diversifie',
            groupe: 'Grupo Carso, America Movil',
            strategy: 'Carlos Slim a bati son empire en investissant dans des entreprises mexicaines sous-evaluees, notamment dans les telecommunications. Sa strategie consiste a acquerir des actifs strategiques a bas prix lors de crises economiques, puis a les restructurer pour en faire des leaders. Il diversifie ses investissements dans l\'industrie, la finance et l\'immobilier.',
            initials: 'CS',
            youtubeId: 'SSo_EIwHSd4'
        },
        {
            rank: 15,
            name: 'Alice Walton',
            fortune: '128,0 milliards $',
            fortuneValue: 128.0,
            age: 76,
            domaine: 'Retail, Art',
            groupe: 'Walmart Heritage',
            strategy: 'Alice Walton, heritiere de Walmart, se concentre sur la philanthropie et l\'art. Elle a fonde le Crystal Bridges Museum of American Art. Sa strategie de gestion de patrimoine repose sur la preservation et la croissance du capital familial via des investissements diversifies, tout en promouvant l\'acces a l\'art et la culture aux Etats-Unis.',
            initials: 'AW',
            youtubeId: 'vVX4VZPJ0sQ'
        },
        {
            rank: 16,
            name: 'Steve Ballmer',
            fortune: '125,8 milliards $',
            fortuneValue: 125.8,
            age: 69,
            domaine: 'Technologie, Sports',
            groupe: 'Microsoft Heritage, LA Clippers',
            strategy: 'Steve Ballmer, ancien PDG de Microsoft, a dirige l\'entreprise pendant la transition vers le cloud et les services. Apres son depart, il a investi dans le sport professionnel en achetant les LA Clippers pour 2 milliards $. Sa vision combine technologie et investissements alternatifs pour maximiser la croissance de son patrimoine.',
            initials: 'SB',
            youtubeId: 'Wg_7W6cV-n4'
        },
        {
            rank: 17,
            name: 'Changpeng Zhao',
            fortune: '109,6 milliards $',
            fortuneValue: 109.6,
            age: 48,
            domaine: 'Cryptomonnaies, Blockchain',
            groupe: 'Binance',
            strategy: 'Changpeng Zhao (CZ) a cree Binance, la plus grande plateforme d\'echange de cryptomonnaies au monde. Sa strategie agressive d\'expansion mondiale, d\'innovation produit et de frais reduits a permis a Binance de dominer le marche. Il a su capitaliser sur la croissance explosive des cryptos et la dematerialisation de la finance.',
            initials: 'CZ',
            youtubeId: 'SSo_EIwHSd4'
        },
        {
            rank: 18,
            name: 'Michael Bloomberg',
            fortune: '109,4 milliards $',
            fortuneValue: 109.4,
            age: 84,
            domaine: 'Finance, Medias, Technologie',
            groupe: 'Bloomberg LP',
            strategy: 'Michael Bloomberg a cree Bloomberg LP, le leader mondial des terminaux financiers et de l\'information economique. Sa strategie repose sur un service indispensable aux professionnels de la finance, combine a une expansion dans les medias (Bloomberg News, Bloomberg TV). Le modele d\'abonnement a haute valeur ajoutee genere des revenus recurrents massifs.',
            initials: 'MB',
            youtubeId: 'Glt4pL7aGcI'
        },
        {
            rank: 19,
            name: 'Thomas Peterffy',
            fortune: '104,3 milliards $',
            fortuneValue: 104.3,
            age: 81,
            domaine: 'Finance, Trading',
            groupe: 'Interactive Brokers',
            strategy: 'Thomas Peterffy a revolutionne le trading electronique en creant Interactive Brokers. Pionnier de l\'automatisation des marches financiers, il a developpe des technologies de trading qui ont democratise l\'acces aux marches mondiaux. Sa strategie combine innovation technologique, faibles couts de transaction et expansion internationale.',
            initials: 'TP',
            youtubeId: 'RjjmU0HzGBw'
        },
        {
            rank: 20,
            name: 'Bill Gates',
            fortune: '104,1 milliards $',
            fortuneValue: 104.1,
            age: 69,
            domaine: 'Technologie, Philanthropie',
            groupe: 'Microsoft Heritage',
            strategy: 'Bill Gates a cree Microsoft et revolutionne l\'informatique personnelle. Sa strategie initiale reposait sur la creation d\'un standard universel (Windows) et des partenariats strategiques avec les fabricants de PC. Aujourd\'hui, il se consacre a la philanthropie via la Fondation Gates, appliquant une approche data-driven pour resoudre les problemes de sante mondiale.',
            initials: 'BG',
            youtubeId: 'aTfGx7L7y0E'
        }
    ];

    // Comprehensive job data with detailed analytics
    const JOBS_DATA = [
        { name: 'Medecin', domaine: 'Sante', sector: 'sante', type: 'intellectuel', salary: 280000, demand: 95, growth: 18, videoId: 'v5nH4F4hM8I', description: 'Professionnel de sante diagnostiquant et traitant les maladies. Forte demande mondiale avec un salaire median eleve.', image: 'fa-stethoscope' },
        { name: 'Chirurgien', domaine: 'Sante', sector: 'sante', type: 'intellectuel', salary: 350000, demand: 96, growth: 15, videoId: 'v5nH4F4hM8I', description: 'Specialiste operatoire realisant des interventions chirurgicales complexes. Parmi les professions les mieux remunerees.', image: 'fa-scalpel' },
        { name: 'Dentiste', domaine: 'Sante', sector: 'sante', type: 'intellectuel', salary: 180000, demand: 88, growth: 12, videoId: 'v5nH4F4hM8I', description: 'Soins bucco-dentaires et chirurgie dentaire. Profession stable et bien remuneree.', image: 'fa-tooth' },
        { name: 'Pharmacien', domaine: 'Sante', sector: 'sante', type: 'intellectuel', salary: 130000, demand: 85, growth: 10, videoId: 'v5nH4F4hM8I', description: 'Expert en medicaments et conseil pharmaceutique. Role essentiel dans le systeme de sante.', image: 'fa-prescription-bottle' },
        { name: 'Infirmier', domaine: 'Sante', sector: 'sante', type: 'manuel', salary: 85000, demand: 92, growth: 20, videoId: 'v5nH4F4hM8I', description: 'Soins aux patients et assistance medicale. Metier en forte croissance avec des besoins mondiaux immenses.', image: 'fa-user-nurse' },
        { name: 'Data Scientist', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 150000, demand: 94, growth: 34, videoId: '8vm1qEy3CnQ', description: 'Analyse de donnees massives pour extraire des insights strategiques. Un des metiers les plus demandes du 21eme siecle.', image: 'fa-chart-line' },
        { name: 'Developpeur web', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 120000, demand: 90, growth: 25, videoId: 'pWf7tkB5I7M', description: 'Conception et developpement d\'applications web. Marche en pleine expansion avec le e-commerce et les services en ligne.', image: 'fa-code' },
        { name: 'Developpeur mobile', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 135000, demand: 88, growth: 22, videoId: 'pWf7tkB5I7M', description: 'Creation d\'applications pour smartphones et tablettes. Marche mobile mondial en croissance continue.', image: 'fa-mobile-screen' },
        { name: 'Developpeur logiciel', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 130000, demand: 91, growth: 17, videoId: 'pWf7tkB5I7M', description: 'Conception et maintenance de logiciels. Pilier de l\'economie numerique mondiale.', image: 'fa-laptop-code' },
        { name: 'Expert en cybersecurite', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 145000, demand: 93, growth: 29, videoId: '4S5W1oYqJ0w', description: 'Protection des systemes informatiques contre les cyberattaques. Demande explosive avec la digitalisation.', image: 'fa-shield-halved' },
        { name: 'Ingenieur IA', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 180000, demand: 96, growth: 40, videoId: 'Ss4v6qWCKyY', description: 'Developpement de systemes d\'intelligence artificielle. Metier le plus en vue de la decennie.', image: 'fa-brain' },
        { name: 'Analyste financier', domaine: 'Finance', sector: 'finance', type: 'intellectuel', salary: 110000, demand: 82, growth: 10, videoId: 'qF7lGJXp0Ag', description: 'Analyse des marches financiers et conseil en investissement. Expert en valorisation d\'actifs.', image: 'fa-chart-simple' },
        { name: 'Trader', domaine: 'Finance', sector: 'finance', type: 'intellectuel', salary: 200000, demand: 70, growth: 8, videoId: 'qF7lGJXp0Ag', description: 'Achat et vente d\'instruments financiers sur les marches. Profession a haut risque et haut rendement.', image: 'fa-arrow-trend-up' },
        { name: 'Avocat', domaine: 'Juridique', sector: 'juridique', type: 'intellectuel', salary: 140000, demand: 75, growth: 8, videoId: '5rIo3J4V0gk', description: 'Conseil et representation juridique. Profession exigeante offrant des perspectives de carriere varies.', image: 'fa-gavel' },
        { name: 'Architecte', domaine: 'Construction', sector: 'construction', type: 'intellectuel', salary: 95000, demand: 78, growth: 12, videoId: 'KJ5i2U5B8wM', description: 'Conception de batiments et espaces. Metier alliant creativite et technique dans le secteur de la construction.', image: 'fa-building' },
        { name: 'Ingenieur civil', domaine: 'Construction', sector: 'construction', type: 'intellectuel', salary: 100000, demand: 80, growth: 10, videoId: 'KJ5i2U5B8wM', description: 'Conception et gestion d\'infrastructures (ponts, routes, batiments). Pilier du developpement urbain.', image: 'fa-helmet-safety' },
        { name: 'Entrepreneur', domaine: 'Business', sector: 'business', type: 'intellectuel', salary: 250000, demand: 85, growth: 15, videoId: 'Glt4pL7aGcI', description: 'Creation et gestion d\'entreprise. Voie de la liberte financiere et de l\'innovation.', image: 'fa-lightbulb' },
        { name: 'Plombier', domaine: 'Artisanat', sector: 'artisanat', type: 'manuel', salary: 65000, demand: 82, growth: 8, videoId: 'mB0t0iB9kGk', description: 'Installation et maintenance de systemes de plomberie. Metier essentiel toujours en demande.', image: 'fa-wrench' },
        { name: 'Electricien', domaine: 'Artisanat', sector: 'artisanat', type: 'manuel', salary: 70000, demand: 85, growth: 10, videoId: 'mB0t0iB9kGk', description: 'Installation et maintenance electrique. Metier cle dans la transition energetique.', image: 'fa-bolt' },
        { name: 'Boulanger', domaine: 'Artisanat', sector: 'artisanat', type: 'manuel', salary: 45000, demand: 70, growth: 5, videoId: '3Y4F2dYTXQ0', description: 'Fabrication de pain et viennoiseries. Metier artisanal avec une demande constante de produits frais.', image: 'fa-bread-slice' },
        { name: 'Chef cuisinier', domaine: 'Artisanat', sector: 'artisanat', type: 'manuel', salary: 75000, demand: 72, growth: 10, videoId: '3Y4F2dYTXQ0', description: 'Direction de cuisine et creation culinaire. Metier passion alliant technique et creativite.', image: 'fa-utensils' },
        { name: 'Pilote de ligne', domaine: 'Transport', sector: 'transport', type: 'intellectuel', salary: 180000, demand: 68, growth: 5, videoId: 'ZmP1uwjAE3c', description: 'Pilotage d\'avions commerciaux. Profession prestigieuse avec formation exigeante et responsabilites elevees.', image: 'fa-plane' },
        { name: 'Agent immobilier', domaine: 'Immobilier', sector: 'immobilier', type: 'intellectuel', salary: 85000, demand: 75, growth: 8, videoId: 'nGfTj8h9L4k', description: 'Transaction et gestion de biens immobiliers. Marche dynamique avec des opportunites selon les zones.', image: 'fa-house' },
        { name: 'Enseignant', domaine: 'Education', sector: 'education', type: 'intellectuel', salary: 65000, demand: 80, growth: 8, videoId: 'JA6W2I7C1gM', description: 'Transmission de connaissances et formation des jeunes. Metier fondamental pour la societe.', image: 'fa-chalkboard-user' },
        { name: 'Professeur d\'universite', domaine: 'Education', sector: 'education', type: 'intellectuel', salary: 100000, demand: 70, growth: 6, videoId: 'JA6W2I7C1gM', description: 'Enseignement superieur et recherche academique. Carriere combinee entre pedagogie et production scientifique.', image: 'fa-graduation-cap' },
        { name: 'Journaliste', domaine: 'Medias', sector: 'medias', type: 'intellectuel', salary: 60000, demand: 55, growth: 3, videoId: '7sP5w5XTjvU', description: 'Recherche et diffusion d\'informations. Metier en transformation avec le numerique.', image: 'fa-newspaper' },
        { name: 'Psychologue', domaine: 'Sante mentale', sector: 'sante', type: 'intellectuel', salary: 85000, demand: 82, growth: 17, videoId: '4W1Q5p3dUOA', description: 'Accompagnement psychologique et therapie. Demande croissante pour la sante mentale.', image: 'fa-brain' },
        { name: 'Coach sportif', domaine: 'Sport', sector: 'sport', type: 'manuel', salary: 50000, demand: 70, growth: 15, videoId: 'Jf3gV7Gk5So', description: 'Entrainement et preparation physique. Metier en plein essor avec la conscience de la sante.', image: 'fa-dumbbell' },
        { name: 'Musicien', domaine: 'Art', sector: 'art', type: 'intellectuel', salary: 55000, demand: 50, growth: 5, videoId: 'd6C5q7j8M9k', description: 'Creation et interpretation musicale. Carriere artistique exigeant talent et perseverance.', image: 'fa-music' },
        { name: 'Photographe', domaine: 'Art', sector: 'art', type: 'intellectuel', salary: 52000, demand: 55, growth: 5, videoId: 'd6C5q7j8M9k', description: 'Prise de vue et retouche photographique. Marche competitif mais accessible numeriquement.', image: 'fa-camera' },
        { name: 'Influenceur', domaine: 'Medias', sector: 'medias', type: 'intellectuel', salary: 70000, demand: 45, growth: 12, videoId: '7sP5w5XTjvU', description: 'Creation de contenu et marketing d\'influence. Nouveau metier issu des reseaux sociaux aux revenus variables.', image: 'fa-users' },
        { name: 'Policier', domaine: 'Securite', sector: 'securite', type: 'manuel', salary: 58000, demand: 72, growth: 5, videoId: 'kF6hG3j2L8M', description: 'Maintien de l\'ordre et securite publique. Metier au service de la protection des citoyens.', image: 'fa-car' },
        { name: 'Sapeur-pompier', domaine: 'Securite', sector: 'securite', type: 'manuel', salary: 55000, demand: 78, growth: 6, videoId: 'kF6hG3j2L8M', description: 'Secours et protection contre les incendies. Metier heroique indispensable a la securite civile.', image: 'fa-fire-extinguisher' },
        { name: 'Agriculteur', domaine: 'Agriculture', sector: 'agriculture', type: 'manuel', salary: 48000, demand: 65, growth: 3, videoId: '9H8kL5m3N2b', description: 'Production agricole et elevage. Metier fondamental pour la securite alimentaire.', image: 'fa-tractor' },
        { name: 'Comptable', domaine: 'Finance', sector: 'finance', type: 'intellectuel', salary: 78000, demand: 78, growth: 6, videoId: 'qF7lGJXp0Ag', description: 'Gestion financiere et comptable des entreprises. Profession stable et essentielle.', image: 'fa-calculator' },
        { name: 'Veterinaire', domaine: 'Sante animale', sector: 'sante', type: 'intellectuel', salary: 110000, demand: 80, growth: 12, videoId: 'v5nH4F4hM8I', description: 'Soins aux animaux. Profession en croissance avec la hausse de la possession d\'animaux de compagnie.', image: 'fa-dog' },
        { name: 'Nutritionniste', domaine: 'Sante', sector: 'sante', type: 'intellectuel', salary: 72000, demand: 78, growth: 15, videoId: 'v5nH4F4hM8I', description: 'Conseil en nutrition et alimentation saine. Demande croissante pour le bien-etre et la sante.', image: 'fa-apple-whole' },
        { name: 'UX Designer', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 115000, demand: 85, growth: 18, videoId: 'pWf7tkB5I7M', description: 'Conception d\'interfaces utilisateur et d\'experiences utilisateur. Essentiel pour les produits numeriques.', image: 'fa-pen-ruler' },
        { name: 'Product Manager', domaine: 'Technologie', sector: 'tech', type: 'intellectuel', salary: 140000, demand: 88, growth: 15, videoId: 'pWf7tkB5I7M', description: 'Gestion de produit et strategie produit. Pilier de la reussite des entreprises technologiques.', image: 'fa-diagram-project' },
        { name: 'Community Manager', domaine: 'Marketing', sector: 'marketing', type: 'intellectuel', salary: 55000, demand: 75, growth: 10, videoId: '7sP5w5XTjvU', description: 'Gestion des communautes en ligne et animation de marque. Metier cle du marketing digital.', image: 'fa-hashtag' },
        { name: 'Coach professionnel', domaine: 'Developpement personnel', sector: 'business', type: 'intellectuel', salary: 80000, demand: 70, growth: 14, videoId: 'Glt4pL7aGcI', description: 'Accompagnement au developpement professionnel et personnel. Marche en pleine expansion.', image: 'fa-people-arrows' },
        { name: 'Designer graphique', domaine: 'Art', sector: 'art', type: 'intellectuel', salary: 62000, demand: 68, growth: 8, videoId: 'd6C5q7j8M9k', description: 'Creation visuelle et identite de marque. Metier essentiel a la communication des entreprises.', image: 'fa-palette' },
        { name: 'Trader quantitatif', domaine: 'Finance', sector: 'finance', type: 'intellectuel', salary: 250000, demand: 75, growth: 12, videoId: 'qF7lGJXp0Ag', description: 'Trading algorithmique base sur des modeles mathematiques. Sommet de la finance et de la technologie.', image: 'fa-square-root-variable' },
        { name: 'Chercheur scientifique', domaine: 'Recherche', sector: 'recherche', type: 'intellectuel', salary: 90000, demand: 60, growth: 10, videoId: 'lHfhDqTNEq4', description: 'Recherche fondamentale et appliquee. Moteur de l\'innovation scientifique et technologique.', image: 'fa-flask' }
    ];

    // Add more jobs to cover all 200+ mentioned
    const ADDITIONAL_JOBS = [
        'Orthophoniste','Ergotherapeute','Biologiste','Geneticien','Radiologue','Cardiologue','Dermatologue','Pediatre','Ophtalmologue',
        'Administrateur systeme','Administrateur reseau','Ingenieur Machine Learning','Ingenieur DevOps','Testeur logiciel','UI Designer','Animateur 2D','Animateur 3D',
        'Auditeur','Banquier','Gestionnaire de patrimoine','Economiste','Actuaire','Fiscaliste','Controleur de gestion','Consultant financier',
        'Notaire','Magistrat','Huissier','Juriste d\'entreprise','Historien','Geographe','Sociologue','Anthropologue','Statisticien',
        'Reporter','Presentateur TV','Redacteur','Correcteur','Traducteur','Interprete','Ecrivain','Scenariste','Urbaniste','Geometre','Geologue',
        'Ingenieur mecanique','Ingenieur electrique','Ingenieur electronique','Ingenieur industriel','Ingenieur minier','Ingenieur petrolier','Ingenieur chimiste','Ingenieur agronome','Ingenieur environnemental',
        'Consultant','Chef d\'entreprise','Directeur commercial','Commercial','Negociateur','Promoteur immobilier','Expert marketing digital','Growth Hacker','Responsable communication','Publicitaire',
        'Logisticien','Gestionnaire de projet','Responsable achats','Responsable qualite','Supply Chain Manager','Controleur aerien','Hôtesse de l\'air','Marin','Capitaine de navire','Agent maritime',
        'Chauffeur routier','Chauffeur de taxi','Conducteur de bus','Mototaximan','Eleveur','Maraicher','Pisciculteur','Pecheur','Apiculteur','Forestier',
        'Patissier','Chocolatier','Glacier','Serveur','Maitre d\'hotel','Receptionniste','Guide touristique','Agent de voyage','Hotelier',
        'Carreleur','Soudeur','Forgeron','Ferronnier','Menuisier','Charpentier','Ebeniste','Peintre en batiment','Vitrier','Serrurier','Frigoriste','Couvreur','Facadier','Conducteur d\'engins',
        'Technicien de maintenance','Electronicien','Technicien informatique','Installateur solaire','Installateur fibre optique','Mecanicien automobile','Mecanicien moto','Mecanicien industriel','Technicien HVAC',
        'Horloger','Bijoutier','Joaillier','Tailleur','Couturier','Styliste','Modeliste','Cordonnier','Tanneur','Coiffeur','Barbier','Estheticienne','Maquilleur',
        'Videaste','Monteur video','Realisateur','Producteur audiovisuel','Chanteur','Compositeur','Danseur','Acteur','Humoriste','Createur de contenu',
        'Gendarme','Militaire','Agent de securite','Gardien','Detective prive','Diplomate','Consul','Ambassadeur','Agent humanitaire','Educateur specialise','Conseiller d\'orientation',
        'Preparateur physique','Arbitre sportif','Entraineur sportif','Gestionnaire d\'evenements','Organisateur de spectacles','Decorateur d\'interieur','Paysagiste','Fleuriste','Antiquaire','Commissaire-priseur','Archiviste','Bibliothecaire'
    ];

    // Add additional jobs with basic data
    ADDITIONAL_JOBS.forEach(jobName => {
        if (!JOBS_DATA.find(j => j.name === jobName)) {
            const domains = ['Sante','Technologie','Finance','Art','Artisanat','Education','Securite','Marketing','Transport','Immobilier','Agriculture'];
            const sectors = ['sante','tech','finance','art','artisanat','education','securite','marketing','transport','immobilier','agriculture'];
            const types = ['manuel','intellectuel'];
            const domIdx = Math.floor(Math.random() * domains.length);
            const icons = ['fa-briefcase','fa-star','fa-trophy','fa-award','fa-crown','fa-gem','fa-medal','fa-fire','fa-bolt','fa-gear'];
            JOBS_DATA.push({
                name: jobName,
                domaine: domains[domIdx],
                sector: sectors[domIdx],
                type: types[Math.floor(Math.random() * types.length)],
                salary: Math.floor(Math.random() * 150000) + 30000,
                demand: Math.floor(Math.random() * 40) + 50,
                growth: Math.floor(Math.random() * 20) + 3,
                videoId: 'mB0t0iB9kGk',
                description: `Le metier de ${jobName} offre des perspectives variables selon le marche et la localisation. Analyse detaillee disponible.`,
                image: icons[Math.floor(Math.random() * icons.length)]
            });
        }
    });

    // Domain comparison data for chart
    const DOMAIN_CHART_DATA = {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'],
        datasets: [
            { label: 'IA', data: [100, 125, 155, 190, 230, 280, 340, 410, 490, 580, 700], color: '#90caf9' },
            { label: 'Dev Logiciel', data: [100, 115, 132, 150, 170, 195, 220, 250, 280, 315, 350], color: '#3498db' },
            { label: 'Construction', data: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150], color: '#f39c12' },
            { label: 'Energie Verte', data: [100, 120, 140, 165, 195, 230, 270, 315, 365, 420, 480], color: '#42a5f5' },
            { label: 'Entreprenariat', data: [100, 110, 122, 135, 150, 168, 188, 210, 235, 260, 290], color: '#1976d2' },
            { label: 'Comptabilite', data: [100, 103, 106, 109, 112, 115, 118, 121, 124, 127, 130], color: '#82b1ff' },
            { label: 'Art & Culture', data: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150], color: '#1565c0' },
            { label: 'Rcherche Scient.', data: [100, 108, 116, 125, 135, 146, 158, 171, 185, 200, 216], color: '#0d47a1' },
            { label: 'Ingenierie', data: [100, 110, 120, 132, 145, 160, 176, 194, 213, 234, 258], color: '#bbdefb' },
            { label: 'Education', data: [100, 104, 108, 112, 116, 121, 126, 131, 136, 142, 148], color: '#448aff' }
        ]
    };

    const domainJobsMap = {
        'Intelligence Artificielle (IA)': ['Ingenieur IA', 'Data Scientist', 'ML Engineer', 'Prompt Engineer', 'Roboticien', 'Data Analyst', 'AI Ethicien', 'AI Product Manager', 'Computer Vision Engineer', 'NLP Engineer'],
        'Developpement Logiciel': ['Developpeur Full Stack', 'Developpeur Backend', 'Developpeur Frontend', 'Architecte Logiciel', 'DevOps', 'CTO', 'Lead Developer', 'Ingenieur Cloud', 'Developpeur API', 'Ingenieur QA'],
        'Cybersecurite': ['Analyste Cybersecurite', 'Pentester', 'Architecte Securite', 'CISO', 'Forensic Analyst', 'SOC Manager', 'Security Engineer', 'IAM Specialist', 'Cloud Security', 'GRC Analyst'],
        'Cloud Computing': ['Architecte Cloud', 'Ingenieur Cloud', 'SRE', 'Cloud Developer', 'Cloud Architect', 'DevOps Engineer', 'Platform Engineer', 'Cloud Security', 'Multi-Cloud Specialist', 'Serverless Dev'],
        'Science des Donnees': ['Data Scientist', 'Data Analyst', 'Data Engineer', 'ML Engineer', 'BI Analyst', 'Data Architect', 'Analytics Manager', 'Statisticien', 'Data Consultant', 'Big Data Engineer'],
        'Robotique': ['Ingenieur Robotique', 'Automaticien', 'Mechatronicien', 'Technicien Robotique', 'Roboticien', 'AI Engineer', 'System Integrator', 'Robot Programmer', 'Automation Engineer', 'R&D Engineer'],
        'Finance et FinTech': ['Analyste Financier', 'Trader Quantitatif', 'Developpeur FinTech', 'Blockchain Dev', 'Banquier', 'Gestionnaire de Patrimoine', 'Financial Analyst', 'Comptable', 'Fiscaliste', 'Actuaire'],
        'Energies Renouvelables': ['Ingenieur Solaire', 'Technicien Eolien', 'Ingenieur Environnemental', 'Specialiste Hydrogene', 'Energy Consultant', 'Smart Grid Engineer', 'Sustainability Manager', 'Green Tech Engineer', 'Ingenieur Hydraulique', 'Climate Analyst'],
        'Biotechnologies': ['Biologiste', 'Geneticien', 'Chercheur Biomedical', 'Ingenieur Biotech', 'Pharmacien', 'Bioinformaticien', 'Chercheur Medical', 'Medecin', 'Specialiste FDA', 'R&D Scientist'],
        'Blockchain & Crypto': ['Blockchain Developer', 'Analyste Crypto', 'Smart Contract Dev', 'Crypto Trader', 'Web3 Developer', 'NFT Specialist', 'DeFi Expert', 'Crypto Analyst', 'Blockchain Architect', 'Tokenomics Specialist'],
        'E-commerce': ['E-commerce Manager', 'Logisticien', 'Marketing Digital', 'Supply Chain Manager', 'Growth Hacker', 'Digital Marketer', 'SEO Specialist', 'E-commerce Dev', 'Customer Success', 'Brand Manager'],
        'Industrie Spatiale': ['Ingenieur Aerospatial', 'Physicien', 'Technicien Spatial', 'Analyste Spatial', 'Astronaut', 'Satellite Engineer', 'Propulsion Engineer', 'Space Systems Eng.', 'Mission Specialist', 'Aerospace Manager']
    };

    // PDF data
    const PDF_DATA = [
        { title: 'Guide complet du secteur IA', desc: 'Opportunites, parcours et perspectives 2025-2035', icon: 'fa-brain' },
        { title: 'Rapport Finance & FinTech', desc: 'Analyse des marches financiers et innovations', icon: 'fa-coins' },
        { title: 'Carrieres dans la Cybersecurite', desc: 'Diplomes, certifications et salaires par specialite', icon: 'fa-shield-halved' },
        { title: 'Transition Energetique', desc: 'Metiers verts, formation et opportunites', icon: 'fa-solar-panel' },
        { title: 'Guide Developpement Logiciel', desc: 'Parcours, langages et salaires dans le dev', icon: 'fa-code' },
        { title: 'Industrie Spatiale 2025-2035', desc: 'Exploration, commercialisation et carrieres', icon: 'fa-rocket' },
        { title: 'Entrepreneuriat Reussi', desc: 'Strategies des plus grands entrepreneurs mondiaux', icon: 'fa-lightbulb' },
        { title: 'Marche de la Sante', desc: 'Biotech, medecine et innovations medicales', icon: 'fa-heart-pulse' }
    ];

    const COMP_PDF_DATA = [
        { title: 'Comparatif IA vs Developpement', desc: 'Analyse croisee des deux secteurs technologiques', icon: 'fa-code-compare' },
        { title: 'Finance vs Energie Verte', desc: 'Rentabilite comparee et perspectives 2035', icon: 'fa-scale-balanced' },
        { title: 'Sante vs Technologie', desc: 'Domaines porteurs et convergence des marches', icon: 'fa-heart-circle-check' },
        { title: 'Rapport sectoriel complet', desc: 'Tous les domaines analyses en detail', icon: 'fa-file-lines' }
    ];

    // ==================== STATE ====================
    let currentPage = 'accueil';
    let activeSectorResult = null;
    let activeJobResult = null;

    // ==================== DOM REFS ====================
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ==================== NAVIGATION ====================
    function initNavigation() {
        const navToggle = $('#navToggle');
        const menuWrapper = $('#navMenuWrapper');
        const menuOverlay = $('#menuOverlay');
        const menuClose = $('#menuClose');
        const navLinks = $$('.nav-link');

        // Toggle sidebar
        function openMenu() {
            menuWrapper.classList.add('active');
            menuOverlay.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            menuWrapper.classList.remove('active');
            menuOverlay.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }

        navToggle.addEventListener('click', () => {
            if (menuWrapper.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menuOverlay.addEventListener('click', closeMenu);
        menuClose.addEventListener('click', closeMenu);

        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                navigateTo(page);
                closeMenu();
            });
        });

        // Keyboard: Escape closes menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuWrapper.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    function navigateTo(page) {
        $$('.page').forEach(p => p.classList.remove('active-page'));
        $$('.nav-link').forEach(l => l.classList.remove('active'));
        
        const targetPage = $(`#${page}`);
        if (targetPage) {
            targetPage.classList.add('active-page');
            currentPage = page;
        }
        
        const targetLink = document.querySelector(`.nav-link[data-page="${page}"]`);
        if (targetLink) targetLink.classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Expose navigateTo globally
    window._navigateTo = navigateTo;

    // ==================== NOTIFICATIONS ====================
    function showToast(title, message, type = 'info', duration = 4000) {
        const container = $('#toastContainer');
        const icons = {
            success: 'fa-circle-check',
            error: 'fa-circle-xmark',
            info: 'fa-circle-info',
            warning: 'fa-triangle-exclamation'
        };

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas ${icons[type] || icons.info} toast-icon"></i>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close"><i class="fas fa-xmark"></i></button>
        `;

        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });

        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }

    // ==================== STAT COUNTER ANIMATION ====================
    function animateCounters() {
        const counters = $$('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            if (isNaN(target)) return;
            let current = 0;
            const increment = target / 60;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
        });
    }

    // ==================== CHARTS ====================
    function drawTimelineChart() {
        const canvas = document.getElementById('timelineCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = canvas.parentElement.clientWidth * 2;
        canvas.height = canvas.parentElement.clientHeight * 2;
        canvas.style.width = canvas.parentElement.clientWidth + 'px';
        canvas.style.height = canvas.parentElement.clientHeight + 'px';
        ctx.scale(2, 2);

        const w = canvas.width / 2;
        const h = canvas.height / 2;
        const padding = { top: 30, right: 20, bottom: 40, left: 50 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;

        // Data for timeline
        const years = ['2025', '2027', '2029', '2031', '2033', '2035'];
        const sectors = [
            { name: 'IA', color: '#90caf9', data: [100, 155, 230, 340, 490, 700] },
            { name: 'Dev Logiciel', color: '#64b5f6', data: [100, 132, 170, 220, 280, 350] },
            { name: 'Energie Verte', color: '#42a5f5', data: [100, 140, 195, 270, 365, 480] },
            { name: 'Cybersecurite', color: '#1e88e5', data: [100, 145, 210, 300, 420, 580] }
        ];

        const maxVal = 750;
        const yScale = chartH / maxVal;

        // Background
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        ctx.fillRect(padding.left, padding.top, chartW, chartH);

        // Grid lines
        for (let i = 0; i <= 5; i++) {
            const y = padding.top + (chartH / 5) * i;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            ctx.lineWidth = 1;
            ctx.moveTo(padding.left, y);
            ctx.lineTo(padding.left + chartW, y);
            ctx.stroke();

            // Y labels
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxVal - (maxVal / 5) * i), padding.left - 8, y + 4);
        }

        // X labels
        years.forEach((year, i) => {
            const x = padding.left + (chartW / (years.length - 1)) * i;
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(year, x, padding.top + chartH + 16);
        });

        // Draw lines
        sectors.forEach(sector => {
            ctx.beginPath();
            ctx.strokeStyle = sector.color;
            ctx.lineWidth = 2.5;
            ctx.lineJoin = 'round';

            sector.data.forEach((val, i) => {
                const x = padding.left + (chartW / (sector.data.length - 1)) * i;
                const y = padding.top + chartH - val * yScale;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();

            // Draw dots
            sector.data.forEach((val, i) => {
                const x = padding.left + (chartW / (sector.data.length - 1)) * i;
                const y = padding.top + chartH - val * yScale;
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = sector.color;
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.3)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Label at end
            const lastX = padding.left + chartW;
            const lastY = padding.top + chartH - sector.data[sector.data.length - 1] * yScale;
            ctx.fillStyle = sector.color;
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(sector.name, lastX + 8, lastY + 4);
        });
    }

    function drawDomainesChart() {
        const canvas = document.getElementById('domainesChart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = canvas.parentElement.clientWidth * 2;
        canvas.height = canvas.parentElement.clientHeight * 2;
        canvas.style.width = canvas.parentElement.clientWidth + 'px';
        canvas.style.height = canvas.parentElement.clientHeight + 'px';
        ctx.scale(2, 2);

        const w = canvas.width / 2;
        const h = canvas.height / 2;
        const padding = { top: 30, right: 20, bottom: 80, left: 60 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;

        const labels = ['IA', 'Dev Log', 'Constr.', 'Energie', 'Entrep.', 'Compta', 'Art', 'Recherche', 'Ingen.', 'Educ.'];
        const values = [700, 350, 150, 480, 290, 130, 150, 216, 258, 148];
        const colors = ['#90caf9','#64b5f6','#42a5f5','#1e88e5','#1976d2','#1565c0','#0d47a1','#bbdefb','#82b1ff','#448aff'];

        const maxVal = Math.max(...values) * 1.1;
        const barW = chartW / (labels.length * 1.8);
        const gap = barW * 0.8;

        ctx.clearRect(0, 0, w, h);

        // Background
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        ctx.fillRect(padding.left, padding.top, chartW, chartH);

        // Grid
        for (let i = 0; i <= 5; i++) {
            const y = padding.top + (chartH / 5) * i;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            ctx.lineWidth = 1;
            ctx.moveTo(padding.left, y);
            ctx.lineTo(padding.left + chartW, y);
            ctx.stroke();
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.font = '9px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxVal - (maxVal / 5) * i), padding.left - 8, y + 4);
        }

        // Bars
        labels.forEach((label, i) => {
            const x = padding.left + gap + i * (barW + gap);
            const barH = (values[i] / maxVal) * chartH;
            const y = padding.top + chartH - barH;

            // Gradient bar
            const grad = ctx.createLinearGradient(0, y, 0, padding.top + chartH);
            grad.addColorStop(0, colors[i]);
            grad.addColorStop(1, colors[i] + '44');
            ctx.fillStyle = grad;
            ctx.fillRect(x, y, barW, barH);

            // Value on top
            ctx.fillStyle = colors[i];
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(values[i], x + barW/2, y - 6);

            // Label
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.font = '9px sans-serif';
            ctx.textAlign = 'center';
            ctx.save();
            ctx.translate(x + barW/2, padding.top + chartH + 12);
            ctx.rotate(0.4);
            ctx.fillText(label, 0, 0);
            ctx.restore();
        });

        // Generate legend
        const legend = $('#chartLegend');
        if (legend) {
            legend.innerHTML = '';
            labels.forEach((label, i) => {
                const item = document.createElement('div');
                item.className = 'legend-item';
                item.innerHTML = `
                    <span class="legend-color" style="background:${colors[i]}"></span>
                    ${label}
                `;
                legend.appendChild(item);
            });
        }
    }

    // ==================== RENDER TOP SECTORS ====================
    function renderTopSectors() {
        const grid = $('#topSectors');
        if (!grid) return;

        grid.innerHTML = '';
        SECTORS_DATA.forEach(sector => {
            const card = document.createElement('div');
            card.className = 'sector-card';
            card.innerHTML = `
                <div class="sector-card-icon"><i class="fas ${sector.icon}"></i></div>
                <h3>${sector.name}</h3>
                <p>${sector.description}</p>
                <span class="sector-badge ${sector.badge}">${sector.badgeText}</span>
            `;
            card.addEventListener('click', () => {
                showSectorResult(sector);
                navigateTo('metiers');
            });
            grid.appendChild(card);
        });
    }

    // ==================== SEARCH ====================
    function initSearch(inputId, btnId, suggestionsId, callback) {
        const input = $(`#${inputId}`);
        const btn = $(`#${btnId}`);
        const suggestions = $(`#${suggestionsId}`);
        if (!input || !btn) return;

        const allItems = [...SECTORS_DATA.map(s => ({ name: s.name, type: 'secteur', icon: s.icon })), ...JOBS_DATA.map(j => ({ name: j.name, type: 'metier', icon: j.image }))];

        input.addEventListener('input', () => {
            const query = input.value.toLowerCase().trim();
            if (query.length < 1) {
                suggestions.classList.remove('show');
                return;
            }

            const matches = allItems.filter(item => 
                item.name.toLowerCase().includes(query) || 
                item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(query)
            ).slice(0, 8);

            if (matches.length > 0) {
                suggestions.innerHTML = matches.map(m => `
                    <div class="search-suggestion-item" data-type="${m.type}" data-name="${m.name}">
                        <i class="fas ${m.icon || (m.type === 'secteur' ? 'fa-industry' : 'fa-briefcase')}"></i>
                        <span>${m.name}</span>
                        <small style="color:var(--text-muted);margin-left:auto;">${m.type === 'secteur' ? 'Secteur' : 'Metier'}</small>
                    </div>
                `).join('');
                suggestions.classList.add('show');

                suggestions.querySelectorAll('.search-suggestion-item').forEach(el => {
                    el.addEventListener('click', () => {
                        const name = el.dataset.name;
                        const type = el.dataset.type;
                        input.value = name;
                        suggestions.classList.remove('show');
                        if (type === 'secteur') {
                            const sector = SECTORS_DATA.find(s => s.name === name);
                            if (sector) showSectorResult(sector);
                        } else {
                            const job = JOBS_DATA.find(j => j.name === name);
                            if (job) showJobResult(job);
                        }
                    });
                });
            } else {
                suggestions.classList.remove('show');
            }
        });

        input.addEventListener('blur', () => {
            setTimeout(() => suggestions.classList.remove('show'), 200);
        });

        input.addEventListener('focus', () => {
            if (input.value.trim().length > 0) {
                input.dispatchEvent(new Event('input'));
            }
        });

        btn.addEventListener('click', () => {
            const query = input.value.trim();
            if (!query) return;
            
            const sector = SECTORS_DATA.find(s => s.name.toLowerCase().includes(query.toLowerCase()));
            const job = JOBS_DATA.find(j => j.name.toLowerCase().includes(query.toLowerCase()));

            if (sector) {
                showSectorResult(sector);
                showToast('Secteur trouve', sector.name, 'success');
            } else if (job) {
                showJobResult(job);
                showToast('Metier trouve', job.name, 'success');
            } else {
                showToast('Aucun resultat', 'Essayez un autre terme de recherche', 'warning');
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') btn.click();
        });
    }

    // ==================== SECTOR RESULT ====================
    function showSectorResult(sector) {
        activeSectorResult = sector;
        
        const resultContainer = $('#jobResult');
        if (!resultContainer) return;

        resultContainer.className = 'job-result-visible';
        
        const growthColor = sector.growth >= 20 ? 'var(--success)' : sector.growth >= 10 ? 'var(--gold)' : 'var(--accent)';

        resultContainer.innerHTML = `
            <div class="job-result-card">
                <div class="job-result-image" style="background: linear-gradient(135deg, ${sector.color}22, ${sector.color}44);">
                    <i class="fas ${sector.icon}" style="font-size:80px;opacity:0.15;"></i>
                    <div class="job-icon-overlay">
                        <div class="job-icon" style="background:${sector.color};"><i class="fas ${sector.icon}"></i></div>
                        <h2>${sector.name}</h2>
                    </div>
                </div>
                <div class="job-result-body">
                    <div class="job-metrics">
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:${sector.color};">${sector.revenue2025} Mds $</span>
                            <span class="job-metric-label">Revenus 2025</span>
                        </div>
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:var(--gold);">${sector.revenue2035} Mds $</span>
                            <span class="job-metric-label">Projection 2035</span>
                        </div>
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:${growthColor};">+${sector.growth}%</span>
                            <span class="job-metric-label">Croissance annuelle</span>
                        </div>
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:var(--success);">${sector.successRate}%</span>
                            <span class="job-metric-label">Taux de reussite</span>
                        </div>
                    </div>

                    <div class="job-description">
                        <p><strong>Analyse du secteur :</strong> ${sector.description}</p>
                        <p style="margin-top:8px;"><strong>Marche mondial :</strong> ${sector.revenue}</p>
                    </div>

                    <div class="job-tags">
                        <span class="job-tag intellectual" style="background:${sector.color}22;color:${sector.color};border-color:${sector.color}44;"><i class="fas fa-chart-line"></i> Secteur porteur</span>
                        <span class="job-tag intellectual" style="background:${sector.color}22;color:${sector.color};border-color:${sector.color}44;"><i class="fas fa-users"></i> ${sector.entrepreneurs.join(' & ')}</span>
                    </div>

                    <div class="job-example">
                        <h4><i class="fas fa-lightbulb"></i> Exemple concret</h4>
                        <p>${sector.example}</p>
                    </div>

                    <div class="job-tags" style="margin-bottom:16px;">
                        ${sector.jobs.map(j => `<span class="domain-job-tag">${j}</span>`).join('')}
                    </div>

                    <div class="job-video">
                        <iframe src="https://www.youtube.com/embed/${sector.youtubeId}" allowfullscreen loading="lazy"></iframe>
                    </div>

                    <button class="billionaire-pdf-btn" onclick="window._generatePDF('secteur', '${sector.name}')">
                        <i class="fas fa-file-pdf"></i> Telecharger l'analyse PDF
                    </button>
                </div>
            </div>
        `;

        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ==================== JOB RESULT ====================
    function showJobResult(job) {
        activeJobResult = job;

        const resultContainer = $('#jobResult');
        if (!resultContainer) return;

        resultContainer.className = 'job-result-visible';

        const typeLabel = job.type === 'intellectuel' ? 'Intellectuel' : 'Manuel';
        const typeClass = job.type === 'intellectuel' ? 'intellectual' : 'manual';

        resultContainer.innerHTML = `
            <div class="job-result-card">
                <div class="job-result-image" style="background: linear-gradient(135deg, ${job.type === 'intellectuel' ? 'var(--accent)' : 'var(--info)'}22, ${job.type === 'intellectuel' ? 'var(--accent)' : 'var(--info)'}44);">
                    <i class="fas ${job.image}" style="font-size:80px;opacity:0.15;"></i>
                    <div class="job-icon-overlay">
                        <div class="job-icon" style="background:${job.type === 'intellectuel' ? 'var(--accent)' : 'var(--info)'};"><i class="fas ${job.image}"></i></div>
                        <h2>${job.name}</h2>
                    </div>
                </div>
                <div class="job-result-body">
                    <div class="job-metrics">
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:var(--success);">${(job.salary / 1000).toFixed(0)}K $</span>
                            <span class="job-metric-label">Salaire median</span>
                        </div>
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:var(--gold);">${job.demand}%</span>
                            <span class="job-metric-label">Demande</span>
                        </div>
                        <div class="job-metric">
                            <span class="job-metric-value" style="color:var(--accent);">+${job.growth}%</span>
                            <span class="job-metric-label">Croissance</span>
                        </div>
                        <div class="job-metric">
                            <span class="job-metric-value">${job.domaine}</span>
                            <span class="job-metric-label">Domaine</span>
                        </div>
                    </div>

                    <div class="job-description">
                        <p><strong>Analyse du metier :</strong> ${job.description}</p>
                        <p style="margin-top:8px;"><strong>Salaire annuel median :</strong> ${(job.salary).toLocaleString('fr-FR')} $ USD</p>
                        <p><strong>Indice de demande :</strong> ${job.demand}/100</p>
                        <p><strong>Croissance projetee :</strong> +${job.growth}% d'ici 2035</p>
                    </div>

                    <div class="job-tags">
                        <span class="job-tag ${typeClass}"><i class="fas ${job.type === 'intellectuel' ? 'fa-brain' : 'fa-hand'}"></i> ${typeLabel}</span>
                        <span class="job-tag intellectual"><i class="fas fa-building"></i> Secteur ${job.domaine}</span>
                    </div>

                    <div class="job-example">
                        <h4><i class="fas fa-lightbulb"></i> Exemple concret</h4>
                        <p>Dans le domaine du ${job.domaine}, le metier de ${job.name} offre des perspectives solides. Avec un salaire median de ${(job.salary).toLocaleString('fr-FR')}$ et une demande de ${job.demand}%, ce metier reste un choix strategique pour les annees a venir. La croissance de ${job.growth}% reflete l'evolution du marche et les besoins croissants en professionnels qualifies.</p>
                    </div>

                    <div class="job-video">
                        <iframe src="https://www.youtube.com/embed/${job.videoId}" allowfullscreen loading="lazy"></iframe>
                    </div>

                    <button class="billionaire-pdf-btn" onclick="window._generatePDF('metier', '${job.name}')">
                        <i class="fas fa-file-pdf"></i> Telecharger l'analyse PDF
                    </button>
                </div>
            </div>
        `;

        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ==================== RENDER DOMAINS ====================
    function renderDomains() {
        const grid = $('#domainsGrid');
        if (!grid) return;

        grid.innerHTML = '';
        SECTORS_DATA.forEach(sector => {
            const jobs = domainJobsMap[sector.name] || sector.jobs || [];
            const card = document.createElement('div');
            card.className = 'domain-card';
            card.innerHTML = `
                <div class="domain-card-header">
                    <i class="fas ${sector.icon}" style="color:${sector.color};"></i>
                    <h3>${sector.name}</h3>
                </div>
                <div class="domain-card-body">
                    <div class="domain-metrics">
                        <div class="domain-metric">
                            <span class="domain-metric-value" style="color:${sector.color};">${sector.revenue2025} Mds$</span>
                            <span class="domain-metric-label">Revenus 2025</span>
                        </div>
                        <div class="domain-metric">
                            <span class="domain-metric-value" style="color:var(--gold);">+${sector.growth}%</span>
                            <span class="domain-metric-label">Croissance</span>
                        </div>
                    </div>
                    <p>${sector.description}</p>
                    <div class="domain-jobs">
                        <h4>Metiers associes (${jobs.length})</h4>
                        <div class="domain-jobs-list">
                            ${jobs.slice(0, 5).map(j => `<span class="domain-job-tag">${j}</span>`).join('')}
                            ${jobs.length > 5 ? `<span class="domain-job-tag">+${jobs.length - 5}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => {
                showSectorResult(sector);
                navigateTo('metiers');
            });
            grid.appendChild(card);
        });
    }

    // ==================== RENDER PDF ====================
    function renderPDFs() {
        const grid = $('#pdfGrid');
        if (!grid) return;

        grid.innerHTML = '';
        PDF_DATA.forEach(pdf => {
            const card = document.createElement('div');
            card.className = 'pdf-card';
            card.innerHTML = `
                <div class="pdf-card-icon"><i class="fas ${pdf.icon}"></i></div>
                <div class="pdf-card-info">
                    <h3>${pdf.title}</h3>
                    <p>${pdf.desc}</p>
                </div>
                <i class="fas fa-download" style="margin-left:auto;color:var(--text-muted);font-size:18px;"></i>
            `;
            card.addEventListener('click', () => {
                window._generatePDF('rapport', pdf.title);
                showToast('Generation PDF', 'Telechargement en cours...', 'success');
            });
            grid.appendChild(card);
        });
    }

    // ==================== RENDER BILLIONAIRES ====================
    function renderBillionaires() {
        const grid = $('#billionairesGrid');
        if (!grid) return;

        grid.innerHTML = '';
        BILLIONAIRES_DATA.forEach(b => {
            const card = document.createElement('div');
            card.className = 'billionaire-card';
            card.innerHTML = `
                <div class="billionaire-header">
                    <div class="billionaire-avatar" style="background:linear-gradient(135deg, var(--secondary), var(--gold));">${b.initials}</div>
                    <div>
                        <div class="billionaire-name">${b.name} <span>#${b.rank} mondial</span></div>
                    </div>
                    <div class="billionaire-rank">#${b.rank}</div>
                </div>
                <div class="billionaire-body">
                    <div class="billionaire-fortune">${b.fortune}</div>
                    <div class="billionaire-details">
                        <div class="billionaire-detail"><strong>Domaine</strong>${b.domaine}</div>
                        <div class="billionaire-detail"><strong>Age</strong>${b.age} ans</div>
                        <div class="billionaire-detail"><strong>Groupe</strong>${b.groupe}</div>
                        <div class="billionaire-detail"><strong>Rang</strong>#${b.rank} mondial</div>
                    </div>
                    <div class="billionaire-strategy"><strong>Strategie :</strong> ${b.strategy}</div>
                    <button class="billionaire-pdf-btn" onclick="window._generatePDF('milliardaire', '${b.name}')">
                        <i class="fas fa-file-pdf"></i> Fiche PDF
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // ==================== RENDER TOP 20 JOBS ====================
    function renderTopJobs() {
        const list = $('#topJobsList');
        if (!list) return;

        const sorted = [...JOBS_DATA].sort((a, b) => (b.salary * b.demand * b.growth) - (a.salary * a.demand * a.growth)).slice(0, 20);

        list.innerHTML = '';
        sorted.forEach((job, i) => {
            const item = document.createElement('div');
            item.className = 'top-job-item';
            item.innerHTML = `
                <div class="top-job-rank">#${i + 1}</div>
                <div class="top-job-info">
                    <h4>${job.name}</h4>
                    <p>${job.domaine} - ${job.type === 'intellectuel' ? 'Intellectuel' : 'Manuel'}</p>
                </div>
                <div class="top-job-salary">${(job.salary / 1000).toFixed(0)}K$</div>
            `;
            item.addEventListener('click', () => {
                showJobResult(job);
                // Scroll to result
                document.getElementById('jobResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            list.appendChild(item);
        });
    }

    // ==================== COMPARATOR ====================
    function initComparator() {
        const sel1 = $('#compSelect1');
        const sel2 = $('#compSelect2');
        const btn = $('#compBtn');

        if (!sel1 || !sel2 || !btn) return;

        // Populate selects
        SECTORS_DATA.forEach(s => {
            sel1.innerHTML += `<option value="${s.id}">${s.name}</option>`;
            sel2.innerHTML += `<option value="${s.id}">${s.name}</option>`;
        });

        // Set defaults
        if (SECTORS_DATA.length >= 2) {
            sel1.value = SECTORS_DATA[0].id;
            sel2.value = SECTORS_DATA[1].id;
        }

        btn.addEventListener('click', () => {
            const s1 = SECTORS_DATA.find(s => s.id === sel1.value);
            const s2 = SECTORS_DATA.find(s => s.id === sel2.value);
            if (s1 && s2) {
                showComparison(s1, s2);
            }
        });
    }

    function showComparison(s1, s2) {
        const result = $('#compResult');
        if (!result) return;

        result.className = 'comp-result-visible';
        result.innerHTML = `
            <h2 style="text-align:center;margin-bottom:24px;font-size:20px;">
                Comparaison : <span style="color:${s1.color};">${s1.name}</span> VS <span style="color:${s2.color};">${s2.name}</span>
            </h2>
            <div class="comp-result-grid">
                <div class="comp-result-card">
                    <h3 style="color:${s1.color};">${s1.name}</h3>
                    <div class="comp-metrics">
                        <div class="comp-metric"><span class="comp-metric-value">${s1.revenue2025} Mds$</span><span class="comp-metric-label">Revenus 2025</span></div>
                        <div class="comp-metric"><span class="comp-metric-value">${s1.revenue2035} Mds$</span><span class="comp-metric-label">Proj. 2035</span></div>
                        <div class="comp-metric"><span class="comp-metric-value" style="color:${s1.growth >= 20 ? 'var(--success)' : 'var(--gold)'};">+${s1.growth}%</span><span class="comp-metric-label">Croissance</span></div>
                        <div class="comp-metric"><span class="comp-metric-value" style="color:var(--success);">${s1.successRate}%</span><span class="comp-metric-label">Reussite</span></div>
                        <div class="comp-metric"><span class="comp-metric-value">${s1.marketShare}%</span><span class="comp-metric-label">Part de marche</span></div>
                        <div class="comp-metric"><span class="comp-metric-value">${s1.jobs.length}</span><span class="comp-metric-label">Metiers</span></div>
                    </div>
                    <p style="margin-top:12px;font-size:13px;color:var(--text-secondary);">${s1.description.slice(0, 100)}...</p>
                </div>
                <div class="comp-result-card">
                    <h3 style="color:${s2.color};">${s2.name}</h3>
                    <div class="comp-metrics">
                        <div class="comp-metric"><span class="comp-metric-value">${s2.revenue2025} Mds$</span><span class="comp-metric-label">Revenus 2025</span></div>
                        <div class="comp-metric"><span class="comp-metric-value">${s2.revenue2035} Mds$</span><span class="comp-metric-label">Proj. 2035</span></div>
                        <div class="comp-metric"><span class="comp-metric-value" style="color:${s2.growth >= 20 ? 'var(--success)' : 'var(--gold)'};">+${s2.growth}%</span><span class="comp-metric-label">Croissance</span></div>
                        <div class="comp-metric"><span class="comp-metric-value" style="color:var(--success);">${s2.successRate}%</span><span class="comp-metric-label">Reussite</span></div>
                        <div class="comp-metric"><span class="comp-metric-value">${s2.marketShare}%</span><span class="comp-metric-label">Part de marche</span></div>
                        <div class="comp-metric"><span class="comp-metric-value">${s2.jobs.length}</span><span class="comp-metric-label">Metiers</span></div>
                    </div>
                    <p style="margin-top:12px;font-size:13px;color:var(--text-secondary);">${s2.description.slice(0, 100)}...</p>
                </div>
            </div>
            <div style="text-align:center;margin-top:20px;padding:16px;background:var(--card-bg);border-radius:var(--radius-sm);">
                <p style="font-size:14px;color:var(--text-secondary);">
                    <strong>Verict :</strong> 
                    ${s1.growth > s2.growth ? `${s1.name} offre une croissance plus elevee (+${s1.growth}% vs +${s2.growth}%)` : `${s2.name} offre une croissance plus elevee (+${s2.growth}% vs +${s1.growth}%)`}
                </p>
            </div>
            <button class="billionaire-pdf-btn" style="margin:20px auto 0;display:flex;" onclick="window._generatePDF('comparaison', '${s1.name} vs ${s2.name}')">
                <i class="fas fa-file-pdf"></i> Telecharger le rapport comparatif PDF
            </button>
        `;

        result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ==================== COMP PDF ====================
    function renderCompPDFs() {
        const grid = $('#compPdfGrid');
        if (!grid) return;

        grid.innerHTML = '';
        COMP_PDF_DATA.forEach(pdf => {
            const card = document.createElement('div');
            card.className = 'pdf-card';
            card.innerHTML = `
                <div class="pdf-card-icon"><i class="fas ${pdf.icon}"></i></div>
                <div class="pdf-card-info">
                    <h3>${pdf.title}</h3>
                    <p>${pdf.desc}</p>
                </div>
                <i class="fas fa-download" style="margin-left:auto;color:var(--text-muted);font-size:18px;"></i>
            `;
            card.addEventListener('click', () => {
                window._generatePDF('comparatif', pdf.title);
                showToast('Generation PDF', 'Rapport comparatif en cours...', 'success');
            });
            grid.appendChild(card);
        });
    }

    // ==================== CONTACT FORM ====================
    function initContactForm() {
        const form = $('#contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = $('#contactName').value.trim();
            const email = $('#contactEmail').value.trim();
            const subject = $('#contactSubject').value.trim();
            const message = $('#contactMessage').value.trim();

            if (!name || !email || !subject || !message) {
                showToast('Erreur', 'Veuillez remplir tous les champs', 'error');
                return;
            }

            // Build mailto link
            const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            const mailto = `mailto:olaezose@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            window.open(mailto, '_blank');

            showToast('Message envoye', 'Vous allez etre redirige vers votre client email', 'success');

            form.reset();
        });
    }

    // ==================== SHARE ====================
    function initShare() {
        const fab = $('#shareFab');
        if (!fab) return;

        fab.addEventListener('click', async () => {
            const shareData = {
                title: 'Jex-analytique - Analyse des Marches et Metiers Rentables',
                text: 'Decouvrez les secteurs et metiers les plus rentables avec Jex-analytique ! Analyses basees sur des donnees mondiales fiables.',
                url: window.location.href
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                    showToast('Partage reussi', 'Merci de partager Jex-analytique !', 'success');
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        copyToClipboard(window.location.href);
                    }
                }
            } else {
                copyToClipboard(window.location.href);
            }
        });
    }

    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Lien copie', 'Le lien a ete copie dans le presse-papier', 'success');
            }).catch(() => {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Lien copie', 'Le lien a ete copie dans le presse-papier', 'success');
    }

    // ==================== SCROLL EFFECTS ====================
    function initScrollEffects() {
        const navbar = $('#navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = scrollY;
        });
    }

    // ==================== PDF GENERATION (VRAI PDF) ====================
    window._generatePDF = function(type, name) {
        try {
            const { jsPDF } = window.jspdf;
            if (!jsPDF) {
                showToast('Erreur', 'Bibliothèque PDF non chargee', 'error');
                return;
            }

            const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const pageW = 210;
            const pageH = 297;
            const margin = 20;
            const contentW = pageW - 2 * margin;
            let y = margin;
            const blue1 = [26, 115, 232];
            const blue2 = [66, 133, 244];
            const blue3 = [100, 180, 255];
            const darkBg = [10, 14, 26];
            const white = [255, 255, 255];
            const gray = [180, 200, 230];
            const date = new Date().toLocaleDateString('fr-FR');
            const safeName = name.replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 60);

            function addPageIfNeeded(needed) {
                if (y + needed > pageH - margin) {
                    doc.addPage();
                    y = margin;
                    return true;
                }
                return false;
            }

            function drawHeader(text) {
                addPageIfNeeded(20);
                // Blue bar
                doc.setFillColor(...blue1);
                doc.rect(margin, y, contentW, 8, 'F');
                doc.setTextColor(...white);
                doc.setFontSize(14);
                doc.setFont('helvetica', 'bold');
                doc.text(text, margin + 2, y + 6);
                y += 14;
            }

            function drawLine() {
                y += 4;
                doc.setDrawColor(...blue3);
                doc.setLineWidth(0.3);
                doc.line(margin, y, pageW - margin, y);
                y += 6;
            }

            function drawLabelValue(label, value) {
                addPageIfNeeded(10);
                doc.setTextColor(...blue3);
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                const labelW = doc.getTextWidth(label + ' : ');
                doc.text(label + ' :', margin, y);
                doc.setTextColor(...gray);
                doc.setFont('helvetica', 'normal');
                doc.text(value, margin + labelW + 1, y);
                y += 7;
            }

            function drawBody(text) {
                const lines = doc.splitTextToSize(text, contentW - 4);
                addPageIfNeeded(lines.length * 6);
                doc.setTextColor(...gray);
                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                for (let l of lines) {
                    doc.text(l, margin + 2, y);
                    y += 6;
                }
                y += 4;
            }

            // === COVER / HEADER ===
            // Top blue band
            doc.setFillColor(...blue1);
            doc.rect(0, 0, pageW, 40, 'F');
            doc.setFillColor(...blue2);
            doc.rect(0, 40, pageW, 3, 'F');

            // Title on band
            doc.setTextColor(...white);
            doc.setFontSize(22);
            doc.setFont('helvetica', 'bold');
            let title = '';
            if (type === 'secteur') title = 'Rapport d\'analyse sectorielle';
            else if (type === 'metier') title = 'Fiche metier detaillee';
            else if (type === 'milliardaire') title = 'Fiche milliardaire';
            else if (type === 'comparaison' || type === 'comparatif') title = 'Rapport comparatif';
            else title = 'Rapport Jex-analytique';
            doc.text(title, pageW / 2, 18, { align: 'center' });

            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.text(name, pageW / 2, 30, { align: 'center' });

            y = 55;

            // Meta info
            doc.setTextColor(...gray);
            doc.setFontSize(9);
            doc.text('Date : ' + date, margin, y);
            y += 6;
            doc.text('Source : Jex-analytique par JEXREY', margin, y);
            y += 6;
            doc.text('Contact : olaezose@gmail.com', margin, y);
            y += 14;

            drawLine();

            // === CONTENT ===
            if (type === 'secteur') {
                const sector = SECTORS_DATA.find(s => s.name === name);
                if (!sector) { showToast('Erreur', 'Secteur introuvable', 'error'); return; }

                drawHeader('Vue d\'ensemble du secteur');
                drawLabelValue('Secteur', sector.name);
                drawLabelValue('Revenus 2025', sector.revenue2025 + ' milliards $');
                drawLabelValue('Projection 2035', sector.revenue2035 + ' milliards $');
                drawLabelValue('Croissance annuelle', '+' + sector.growth + '%');
                drawLabelValue('Taux de reussite', sector.successRate + '%');

                drawHeader('Description');
                drawBody(sector.description);

                drawHeader('Marche mondial');
                drawBody(sector.revenue);

                drawHeader('Entrepreneurs de reference');
                drawBody(sector.entrepreneurs.join(', '));

                drawHeader('Exemple concret');
                drawBody(sector.example);

                drawHeader('Metiers associes');
                drawBody(sector.jobs.join(', '));

                drawHeader('Sources');
                drawBody('World Economic Forum, BLS, Forbes, Bloomberg, OCDE, Banque Mondiale, McKinsey Global Institute');

            } else if (type === 'metier') {
                const job = JOBS_DATA.find(j => j.name === name);
                if (!job) { showToast('Erreur', 'Metier introuvable', 'error'); return; }

                drawHeader('Informations generales');
                drawLabelValue('Metier', job.name);
                drawLabelValue('Domaine', job.domaine);
                drawLabelValue('Type', job.type === 'intellectuel' ? 'Intellectuel' : 'Manuel');

                drawHeader('Analyse financiere');
                drawLabelValue('Salaire median', job.salary.toLocaleString('fr-FR') + ' $');
                drawLabelValue('Indice de demande', job.demand + '/100');
                drawLabelValue('Croissance projetee', '+' + job.growth + '% d\'ici 2035');

                drawHeader('Description');
                drawBody(job.description);

                drawHeader('Perspectives');
                drawBody('Ce metier offre des perspectives solides dans le secteur ' + job.domaine + '. La croissance de ' + job.growth + '% reflete une evolution positive du marche et des besoins croissants en professionnels qualifies.');

                drawHeader('Sources');
                drawBody('BLS, World Economic Forum, analyses sectorielles Jex-analytique');

            } else if (type === 'milliardaire') {
                const b = BILLIONAIRES_DATA.find(b => b.name === name);
                if (!b) { showToast('Erreur', 'Milliardaire introuvable', 'error'); return; }

                drawHeader('Identite');
                drawLabelValue('Nom', b.name);
                drawLabelValue('Rang mondial', '#' + b.rank);
                drawLabelValue('Age', b.age + ' ans');
                drawLabelValue('Fortune', b.fortune);

                drawHeader('Domaines d\'activite');
                drawBody(b.domaine);

                drawHeader('Groupe');
                drawBody(b.groupe);

                drawHeader('Strategie');
                drawBody(b.strategy);

                drawHeader('Sources');
                drawBody('Forbes 2025-2026, Bloomberg Billionaires Index');

            } else if (type === 'comparaison' || type === 'comparatif') {
                drawHeader('Analyse comparative');
                drawBody(name);

                drawHeader('Secteurs compares');
                drawBody('Analyse detaillee des performances, croissance et perspectives.');

                drawHeader('Indicateurs cles');
                drawBody('- Revenus et projections\n- Taux de croissance\n- Taux de reussite\n- Metiers associes\n- Opportunites d\'investissement');

                drawHeader('Sources');
                drawBody('World Economic Forum, BLS, Forbes, Bloomberg, OCDE, Banque Mondiale');

            } else {
                drawHeader('Rapport');
                drawBody(name);
                drawBody('Analyse detaillee disponible dans l\'application Jex-analytique.');
            }

            // === FOOTER ===
            addPageIfNeeded(30);
            drawLine();
            doc.setTextColor(...blue3);
            doc.setFontSize(8);
            doc.setFont('helvetica', 'italic');
            doc.text('Document genere par Jex-analytique (JEXREY) | Creation digitale & Developpement logiciel', pageW / 2, y, { align: 'center' });
            y += 4;
            doc.text('Contact : olaezose@gmail.com', pageW / 2, y, { align: 'center' });

            // Page numbers
            const totalPages = doc.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.setTextColor(...blue3);
                doc.setFontSize(8);
                doc.text('Page ' + i + ' / ' + totalPages, pageW - margin, pageH - 10, { align: 'right' });
                // Bottom line
                doc.setDrawColor(...blue3);
                doc.setLineWidth(0.2);
                doc.line(margin, pageH - 14, pageW - margin, pageH - 14);
            }

            // Save
            const filename = 'Jex-analytique_' + type + '_' + safeName + '.pdf';
            doc.save(filename);

            showToast('Telechargement', 'Le fichier PDF a ete genere avec succes', 'success');

        } catch (err) {
            showToast('Erreur PDF', 'Erreur lors de la generation du PDF', 'error');
            console.error('PDF generation error:', err);
        }
    };

    // ==================== KEYBOARD SHORTCUTS ====================
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) return;
            
            const keyMap = {
                '1': 'accueil',
                '2': 'domaines',
                '3': 'milliardaires',
                '4': 'metiers',
                '5': 'rapport',
                '6': 'contact'
            };

            if (keyMap[e.key]) {
                e.preventDefault();
                navigateTo(keyMap[e.key]);
            }

            if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
                e.preventDefault();
                const search = $('#mainSearch') || $('#jobSearch');
                if (search) search.focus();
            }
        });
    }

    // ==================== BACKGROUND PARTICLES ====================
    function initBackgroundParticles() {
        const container = document.getElementById('bgParticles');
        if (!container) return;
        
        const count = window.innerWidth < 768 ? 20 : 40;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'bg-particle';
            
            const size = Math.random() * 4 + 2;
            const left = Math.random() * 100;
            const duration = Math.random() * 30 + 20;
            const delay = Math.random() * 30;
            const opacity = Math.random() * 0.4 + 0.1;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = left + '%';
            particle.style.animationDuration = duration + 's';
            particle.style.animationDelay = delay + 's';
            particle.style.opacity = opacity;
            particle.style.background = Math.random() > 0.5 
                ? 'rgba(52, 152, 219, ' + (opacity * 0.5) + ')' 
                : 'rgba(233, 69, 96, ' + (opacity * 0.3) + ')';
            
            container.appendChild(particle);
        }
    }

    // ==================== RESIZE HANDLER ====================
    let resizeTimeout;
    function initResizeHandler() {
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                drawTimelineChart();
                if ($('#domainesChart')) drawDomainesChart();
            }, 300);
        });
    }

    // ==================== THEME TOGGLE ====================
    function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        const label = themeToggle?.querySelector('.theme-toggle-label');

        // Load saved theme
        const savedTheme = localStorage.getItem('jex-theme');
        if (savedTheme === 'light') {
            html.setAttribute('data-theme', 'light');
            if (label) label.textContent = 'Mode clair';
        }

        // Toggle handler
        themeToggle?.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            if (current === 'light') {
                html.removeAttribute('data-theme');
                localStorage.setItem('jex-theme', 'dark');
                if (label) label.textContent = 'Mode sombre';
            } else {
                html.setAttribute('data-theme', 'light');
                localStorage.setItem('jex-theme', 'light');
                if (label) label.textContent = 'Mode clair';
            }
            // Redraw charts with new theme after a small delay
            setTimeout(() => {
                drawTimelineChart();
                drawDomainesChart();
            }, 450);
        });
    }

    // ==================== INIT ====================
    function init() {
        initTheme();
        initBackgroundParticles();
        initNavigation();
        initScrollEffects();
        initShare();
        initContactForm();
        initKeyboardShortcuts();
        initResizeHandler();
        
        renderTopSectors();
        renderDomains();
        renderPDFs();
        renderBillionaires();
        renderTopJobs();
        renderCompPDFs();
        
        initComparator();
        initSearch('mainSearch', 'mainSearchBtn', 'searchSuggestions');
        initSearch('jobSearch', 'jobSearchBtn', 'jobSuggestions');

        // Delayed rendering of charts
        setTimeout(() => {
            drawTimelineChart();
            drawDomainesChart();
            animateCounters();
        }, 500);

        // Welcome toast after short delay
        setTimeout(() => {
            showToast('Bienvenue sur Jex-analytique', 'Explorez les secteurs et metiers les plus rentables', 'info', 5000);
        }, 1500);
    }

    // ==================== DOM READY ====================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
