import './assets/css/App.css'

function Contact(){
    return (
        <>
          <div className='body'>
            <div className="container">
                <h1 className="title">Contact — LaBoutique</h1>
                <p>Vous avez une question, une suggestion ou besoin d’aide ? Notre équipe est là pour vous répondre rapidement.</p>
                <h2 className="subtitle">Moyens de contact</h2>
                <p>- **Formulaire en ligne :** Utilisez le formulaire de contact (nom, email, sujet, message). Nous répondons généralement sous 24 heures ouvrées.</p> 
                <p>- **Email :** support@laboutique.fr </p> 
                <p>- **Téléphone :** +33 1 23 45 67 89 — du lundi au vendredi, 9h–17h.</p>
                <h2 className="subtitle">Suivi de commande</h2>
                <p>Pour toute question concernant une commande, indiquez : numéro de commande, nom et email utilisés lors de l’achat. Nous vous fournirons le statut, l’estimation de livraison et les options de retour.</p>
                <h2 className="subtitle">Retours & échang</h2>
                <p>Consultez notre page « Retours & Remboursements » pour les conditions détaillées. Pour effectuer un retour, contactez-nous par email ou via le formulaire et nous vous enverrons les instructions et l’étiquette de retour.</p> 
                <h2 className="subtitle">Partenariats et presse</h2>
                <p>Pour les demandes commerciales, collaborations ou relations presse, écrivez à partenariats@laboutique.fr avec votre proposition et vos coordonnées.</p> 
                <h2 className="subtitle">Adresse</h2>
                <p>LaBoutique — Service client</p> 
                <p>123 Rue de la vallée, 76000 Rouen, France</p> 
                <h2 className="subtitle">Horaires de réponse</h2>
                <p>Nous traitons les messages du lundi au vendredi. Réponse standard : sous 24–48 heures ouvrées. En période de forte affluence (soldes, fêtes), les délais peuvent être légèrement allongés.</p> 
                <br></br>
                <p>Merci de votre confiance — l’équipe LaBoutique</p> 
            </div>
          </div>
        </>
      )
}

export default Contact;