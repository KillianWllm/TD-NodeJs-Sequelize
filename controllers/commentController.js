const Avis = require('../models/avis');

async function addComments(req, res) {
    try {
        const comment1 = {
            content: 'Commentaire Test 3',
            rating: 4.1,
            product_id: 8,
            utilisateur_id: 5,
        };

        const comment2 = {
            content: 'Commentaire Test 4',
            rating: 3.2,
            product_id: 7,
            utilisateur_id: 3,
        };

        // Insérer les commentaires dans la base de données
        await Avis.create(comment1);
        await Avis.create(comment2);

        res.status(200).json({ message: 'Commentaires insérés avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'insertion des commentaires' });
    }
}

module.exports = {
    addComments
};