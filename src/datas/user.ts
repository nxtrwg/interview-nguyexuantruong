const users = [
    {
        name: "Romain Gillig",
        type: "Particulier",
        email: "romain@gillig.studio",
        phone: "06 88 65 26 87",
        opportunity: "Formation 3D",
        responsable: "Sébastien",
        image: "/images/avatar.avif",
        tags: "BTP, BtoB, +1"
    },
    {
        name: "Alice Dupont",
        type: "Particulier",
        email: "alice.dupont@example.com",
        phone: "06 77 45 32 19",
        opportunity: "Formation Marketing",
        responsable: "Claire",
        image: "/images/avatar.avif",
        tags: "Marketing, Freelance, +2"
    },
    {
        name: "Jean Martin",
        type: "Particulier",
        email: "jean.martin@example.com",
        phone: "06 89 12 45 78",
        opportunity: "Formation Web Development",
        responsable: "Marc",
        image: "/images/avatar.avif",
        tags: "Tech, Web, +3"
    },
    {
        name: "Sophie Laurent",
        type: "Particulier",
        email: "sophie.laurent@example.com",
        phone: "06 55 98 76 34",
        opportunity: "Formation Design Graphique",
        responsable: "Elodie",
        image: "/images/avatar.avif",
        tags: "Design, UI/UX, +1"
    },
    {
        name: "Marc Dubois",
        type: "Particulier",
        email: "marc.dubois@example.com",
        phone: "06 65 87 45 21",
        opportunity: "Formation Business Management",
        responsable: "Antoine",
        image: "/images/avatar.avif",
        tags: "Business, Management, +5"
    },
    {
        name: "Claire Fontaine",
        type: "Particulier",
        email: "claire.fontaine@example.com",
        phone: "06 74 32 67 88",
        opportunity: "Formation RH",
        responsable: "Julie",
        image: "/images/avatar.avif",
        tags: "RH, Recrutement, +2"
    },
    {
        name: "Paul Lefevre",
        type: "Particulier",
        email: "paul.lefevre@example.com",
        phone: "06 48 95 62 31",
        opportunity: "Formation Comptabilité",
        responsable: "Thomas",
        image: "/images/avatar.avif",
        tags: "Finance, Comptabilité, +1"
    },
    {
        name: "Elodie Morel",
        type: "Particulier",
        email: "elodie.morel@example.com",
        phone: "06 39 87 45 12",
        opportunity: "Formation Communication",
        responsable: "Nathalie",
        image: "/images/avatar.avif",
        tags: "Communication, Média, +3"
    },
    {
        name: "Antoine Bernard",
        type: "Particulier",
        email: "antoine.bernard@example.com",
        phone: "06 28 65 98 74",
        opportunity: "Formation Développement Mobile",
        responsable: "Damien",
        image: "/images/avatar.avif",
        tags: "Mobile, iOS, Android, +2"
    },
    {
        name: "Julie Lambert",
        type: "Particulier",
        email: "julie.lambert@example.com",
        phone: "06 79 45 21 34",
        opportunity: "Formation Photographie",
        responsable: "Camille",
        image: "/images/avatar.avif",
        tags: "Photographie, Créatif, +1"
    },
    {
        name: "Romain Gillig",
        type: "Particulier",
        email: "romain@gillig.studio",
        phone: "06 88 65 26 87",
        opportunity: "Formation 3D",
        responsable: "Sébastien",
        image: "/images/avatar.avif",
        tags: "BTP, BtoB, +1"
    },
    {
        name: "Alice Dupont",
        type: "Particulier",
        email: "alice.dupont@example.com",
        phone: "06 77 45 32 19",
        opportunity: "Formation Marketing",
        responsable: "Claire",
        image: "/images/avatar.avif",
        tags: "Marketing, Freelance, +2"
    },
    {
        name: "Jean Martin",
        type: "Particulier",
        email: "jean.martin@example.com",
        phone: "06 89 12 45 78",
        opportunity: "Formation Web Development",
        responsable: "Marc",
        image: "/images/avatar.avif",
        tags: "Tech, Web, +3"
    },
    {
        name: "Sophie Laurent",
        type: "Particulier",
        email: "sophie.laurent@example.com",
        phone: "06 55 98 76 34",
        opportunity: "Formation Design Graphique",
        responsable: "Elodie",
        image: "/images/avatar.avif",
        tags: "Design, UI/UX, +1"
    },
    {
        name: "Marc Dubois",
        type: "Particulier",
        email: "marc.dubois@example.com",
        phone: "06 65 87 45 21",
        opportunity: "Formation Business Management",
        responsable: "Antoine",
        image: "/images/avatar.avif",
        tags: "Business, Management, +5"
    },
    {
        name: "Romain Gillig",
        type: "Particulier",
        email: "romain@gillig.studio",
        phone: "06 88 65 26 87",
        opportunity: "Formation 3D",
        responsable: "Sébastien",
        image: "/images/avatar.avif",
        tags: "BTP, BtoB, +1"
    },
    {
        name: "Alice Dupont",
        type: "Particulier",
        email: "alice.dupont@example.com",
        phone: "06 77 45 32 19",
        opportunity: "Formation Marketing",
        responsable: "Claire",
        image: "/images/avatar.avif",
        tags: "Marketing, Freelance, +2"
    },
    {
        name: "Jean Martin",
        type: "Particulier",
        email: "jean.martin@example.com",
        phone: "06 89 12 45 78",
        opportunity: "Formation Web Development",
        responsable: "Marc",
        image: "/images/avatar.avif",
        tags: "Tech, Web, +3"
    },
    {
        name: "Sophie Laurent",
        type: "Particulier",
        email: "sophie.laurent@example.com",
        phone: "06 55 98 76 34",
        opportunity: "Formation Design Graphique",
        responsable: "Elodie",
        image: "/images/avatar.avif",
        tags: "Design, UI/UX, +1"
    },
    {
        name: "Marc Dubois",
        type: "Particulier",
        email: "marc.dubois@example.com",
        phone: "06 65 87 45 21",
        opportunity: "Formation Business Management",
        responsable: "Antoine",
        image: "/images/avatar.avif",
        tags: "Business, Management, +5"
    },
    {
        name: "Claire Fontaine",
        type: "Particulier",
        email: "claire.fontaine@example.com",
        phone: "06 74 32 67 88",
        opportunity: "Formation RH",
        responsable: "Julie",
        image: "/images/avatar.avif",
        tags: "RH, Recrutement, +2"
    },
    {
        name: "Paul Lefevre",
        type: "Particulier",
        email: "paul.lefevre@example.com",
        phone: "06 48 95 62 31",
        opportunity: "Formation Comptabilité",
        responsable: "Thomas",
        image: "/images/avatar.avif",
        tags: "Finance, Comptabilité, +1"
    },
    {
        name: "Elodie Morel",
        type: "Particulier",
        email: "elodie.morel@example.com",
        phone: "06 39 87 45 12",
        opportunity: "Formation Communication",
        responsable: "Nathalie",
        image: "/images/avatar.avif",
        tags: "Communication, Média, +3"
    },
    {
        name: "Antoine Bernard",
        type: "Particulier",
        email: "antoine.bernard@example.com",
        phone: "06 28 65 98 74",
        opportunity: "Formation Développement Mobile",
        responsable: "Damien",
        image: "/images/avatar.avif",
        tags: "Mobile, iOS, Android, +2"
    },
    {
        name: "Julie Lambert",
        type: "Particulier",
        email: "julie.lambert@example.com",
        phone: "06 79 45 21 34",
        opportunity: "Formation Photographie",
        responsable: "Camille",
        image: "/images/avatar.avif",
        tags: "Photographie, Créatif, +1"
    },
    {
        name: "Romain Gillig",
        type: "Particulier",
        email: "romain@gillig.studio",
        phone: "06 88 65 26 87",
        opportunity: "Formation 3D",
        responsable: "Sébastien",
        image: "/images/avatar.avif",
        tags: "BTP, BtoB, +1"
    },
    {
        name: "Alice Dupont",
        type: "Particulier",
        email: "alice.dupont@example.com",
        phone: "06 77 45 32 19",
        opportunity: "Formation Marketing",
        responsable: "Claire",
        image: "/images/avatar.avif",
        tags: "Marketing, Freelance, +2"
    },
    {
        name: "Jean Martin",
        type: "Particulier",
        email: "jean.martin@example.com",
        phone: "06 89 12 45 78",
        opportunity: "Formation Web Development",
        responsable: "Marc",
        image: "/images/avatar.avif",
        tags: "Tech, Web, +3"
    },
    {
        name: "Sophie Laurent",
        type: "Particulier",
        email: "sophie.laurent@example.com",
        phone: "06 55 98 76 34",
        opportunity: "Formation Design Graphique",
        responsable: "Elodie",
        image: "/images/avatar.avif",
        tags: "Design, UI/UX, +1"
    },
    {
        name: "Marc Dubois",
        type: "Particulier",
        email: "marc.dubois@example.com",
        phone: "06 65 87 45 21",
        opportunity: "Formation Business Management",
        responsable: "Antoine",
        image: "/images/avatar.avif",
        tags: "Business, Management, +5"
    },
    {
        name: "Romain Gillig",
        type: "Particulier",
        email: "romain@gillig.studio",
        phone: "06 88 65 26 87",
        opportunity: "Formation 3D",
        responsable: "Sébastien",
        image: "/images/avatar.avif",
        tags: "BTP, BtoB, +1"
    },
    {
        name: "Alice Dupont",
        type: "Particulier",
        email: "alice.dupont@example.com",
        phone: "06 77 45 32 19",
        opportunity: "Formation Marketing",
        responsable: "Claire",
        image: "/images/avatar.avif",
        tags: "Marketing, Freelance, +2"
    },
    {
        name: "Jean Martin",
        type: "Particulier",
        email: "jean.martin@example.com",
        phone: "06 89 12 45 78",
        opportunity: "Formation Web Development",
        responsable: "Marc",
        image: "/images/avatar.avif",
        tags: "Tech, Web, +3"
    },
    {
        name: "Sophie Laurent",
        type: "Particulier",
        email: "sophie.laurent@example.com",
        phone: "06 55 98 76 34",
        opportunity: "Formation Design Graphique",
        responsable: "Elodie",
        image: "/images/avatar.avif",
        tags: "Design, UI/UX, +1"
    },
    {
        name: "Marc Dubois",
        type: "Particulier",
        email: "marc.dubois@example.com",
        phone: "06 65 87 45 21",
        opportunity: "Formation Business Management",
        responsable: "Antoine",
        image: "/images/avatar.avif",
        tags: "Business, Management, +5"
    },
    {
        name: "Claire Fontaine",
        type: "Particulier",
        email: "claire.fontaine@example.com",
        phone: "06 74 32 67 88",
        opportunity: "Formation RH",
        responsable: "Julie",
        image: "/images/avatar.avif",
        tags: "RH, Recrutement, +2"
    },
    {
        name: "Paul Lefevre",
        type: "Particulier",
        email: "paul.lefevre@example.com",
        phone: "06 48 95 62 31",
        opportunity: "Formation Comptabilité",
        responsable: "Thomas",
        image: "/images/avatar.avif",
        tags: "Finance, Comptabilité, +1"
    },
    {
        name: "Elodie Morel",
        type: "Particulier",
        email: "elodie.morel@example.com",
        phone: "06 39 87 45 12",
        opportunity: "Formation Communication",
        responsable: "Nathalie",
        image: "/images/avatar.avif",
        tags: "Communication, Média, +3"
    },
    {
        name: "Antoine Bernard",
        type: "Particulier",
        email: "antoine.bernard@example.com",
        phone: "06 28 65 98 74",
        opportunity: "Formation Développement Mobile",
        responsable: "Damien",
        image: "/images/avatar.avif",
        tags: "Mobile, iOS, Android, +2"
    },
    {
        name: "Julie Lambert",
        type: "Particulier",
        email: "julie.lambert@example.com",
        phone: "06 79 45 21 34",
        opportunity: "Formation Photographie",
        responsable: "Camille",
        image: "/images/avatar.avif",
        tags: "Photographie, Créatif, +1"
    },
    {
        name: "Romain Gillig",
        type: "Particulier",
        email: "romain@gillig.studio",
        phone: "06 88 65 26 87",
        opportunity: "Formation 3D",
        responsable: "Sébastien",
        image: "/images/avatar.avif",
        tags: "BTP, BtoB, +1"
    },
    {
        name: "Alice Dupont",
        type: "Particulier",
        email: "alice.dupont@example.com",
        phone: "06 77 45 32 19",
        opportunity: "Formation Marketing",
        responsable: "Claire",
        image: "/images/avatar.avif",
        tags: "Marketing, Freelance, +2"
    },
    {
        name: "Jean Martin",
        type: "Particulier",
        email: "jean.martin@example.com",
        phone: "06 89 12 45 78",
        opportunity: "Formation Web Development",
        responsable: "Marc",
        image: "/images/avatar.avif",
        tags: "Tech, Web, +3"
    },
    {
        name: "Sophie Laurent",
        type: "Particulier",
        email: "sophie.laurent@example.com",
        phone: "06 55 98 76 34",
        opportunity: "Formation Design Graphique",
        responsable: "Elodie",
        image: "/images/avatar.avif",
        tags: "Design, UI/UX, +1"
    },
    {
        name: "Marc Dubois",
        type: "Particulier",
        email: "marc.dubois@example.com",
        phone: "06 65 87 45 21",
        opportunity: "Formation Business Management",
        responsable: "Antoine",
        image: "/images/avatar.avif",
        tags: "Business, Management, +5"
    },
];

export {users}