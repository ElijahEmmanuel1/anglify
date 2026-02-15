// ============================================
// Vocabulary Data — Business English for TOEIC
// Organized by theme with French translations
// ============================================

export const vocabThemes = [
    { id: 'business', title: 'Business & Management', icon: '💼', color: '#4F46E5' },
    { id: 'finance', title: 'Finance & Banking', icon: '🏦', color: '#10B981' },
    { id: 'travel', title: 'Travel & Transportation', icon: '✈️', color: '#3B82F6' },
    { id: 'communication', title: 'Communication & Media', icon: '📱', color: '#8B5CF6' },
    { id: 'office', title: 'Office & Equipment', icon: '🏢', color: '#F59E0B' },
    { id: 'retail', title: 'Retail & Shopping', icon: '🛒', color: '#EF4444' },
    { id: 'hr', title: 'HR & Recruitment', icon: '👥', color: '#EC4899' },
    { id: 'industry', title: 'Industry & Production', icon: '🏭', color: '#14B8A6' },
];

export const vocabularyWords = [
    // Business & Management
    { id: 'v1', word: 'deadline', definition: 'Date limite', example: 'The deadline for the proposal is next Friday.', theme: 'business' },
    { id: 'v2', word: 'agenda', definition: 'Ordre du jour', example: 'The first item on the agenda is the budget review.', theme: 'business' },
    { id: 'v3', word: 'to implement', definition: 'Mettre en œuvre', example: 'We plan to implement the new system next month.', theme: 'business' },
    { id: 'v4', word: 'to postpone', definition: 'Reporter / Remettre à plus tard', example: 'The meeting has been postponed until Thursday.', theme: 'business' },
    { id: 'v5', word: 'strategy', definition: 'Stratégie', example: 'Our marketing strategy needs to be updated.', theme: 'business' },
    { id: 'v6', word: 'revenue', definition: 'Chiffre d\'affaires / Revenus', example: 'Revenue increased by 15% this quarter.', theme: 'business' },
    { id: 'v7', word: 'to expand', definition: 'Se développer / S\'étendre', example: 'The company is expanding into Asian markets.', theme: 'business' },
    { id: 'v8', word: 'to negotiate', definition: 'Négocier', example: 'We need to negotiate better terms with the supplier.', theme: 'business' },
    { id: 'v9', word: 'stakeholder', definition: 'Partie prenante', example: 'All stakeholders will be involved in the decision.', theme: 'business' },
    { id: 'v10', word: 'milestone', definition: 'Étape clé / Jalon', example: 'Reaching 1000 customers was a major milestone.', theme: 'business' },
    { id: 'v11', word: 'quarterly', definition: 'Trimestriel', example: 'The quarterly report will be published next week.', theme: 'business' },
    { id: 'v12', word: 'to outsource', definition: 'Externaliser / Sous-traiter', example: 'We decided to outsource IT support.', theme: 'business' },
    { id: 'v13', word: 'headquarters', definition: 'Siège social', example: 'The headquarters are located in London.', theme: 'business' },
    { id: 'v14', word: 'merger', definition: 'Fusion (d\'entreprises)', example: 'The merger between the two banks is expected next year.', theme: 'business' },
    { id: 'v15', word: 'competitive', definition: 'Compétitif / Concurrentiel', example: 'Our prices are very competitive.', theme: 'business' },

    // Finance & Banking
    { id: 'v16', word: 'invoice', definition: 'Facture', example: 'Please send the invoice to our accounting department.', theme: 'finance' },
    { id: 'v17', word: 'budget', definition: 'Budget', example: 'We need to stay within budget.', theme: 'finance' },
    { id: 'v18', word: 'profit', definition: 'Bénéfice / Profit', example: 'The company made a profit of $2 million.', theme: 'finance' },
    { id: 'v19', word: 'loss', definition: 'Perte', example: 'The company reported a net loss this year.', theme: 'finance' },
    { id: 'v20', word: 'to invest', definition: 'Investir', example: 'They invested heavily in renewable energy.', theme: 'finance' },
    { id: 'v21', word: 'interest rate', definition: 'Taux d\'intérêt', example: 'Interest rates have risen again.', theme: 'finance' },
    { id: 'v22', word: 'savings account', definition: 'Compte épargne', example: 'I opened a savings account at the bank.', theme: 'finance' },
    { id: 'v23', word: 'to withdraw', definition: 'Retirer (de l\'argent)', example: 'I need to withdraw cash from the ATM.', theme: 'finance' },
    { id: 'v24', word: 'loan', definition: 'Prêt / Emprunt', example: 'She took out a loan to buy a house.', theme: 'finance' },
    { id: 'v25', word: 'refund', definition: 'Remboursement', example: 'You can get a full refund within 30 days.', theme: 'finance' },
    { id: 'v26', word: 'expenses', definition: 'Dépenses / Frais', example: 'Travel expenses will be reimbursed.', theme: 'finance' },
    { id: 'v27', word: 'tax', definition: 'Impôt / Taxe', example: 'Income tax rates vary by country.', theme: 'finance' },

    // Travel & Transportation
    { id: 'v28', word: 'boarding pass', definition: 'Carte d\'embarquement', example: 'Please have your boarding pass ready.', theme: 'travel' },
    { id: 'v29', word: 'itinerary', definition: 'Itinéraire', example: 'I\'ll send you the travel itinerary by email.', theme: 'travel' },
    { id: 'v30', word: 'departure', definition: 'Départ', example: 'The departure time has been changed to 3 PM.', theme: 'travel' },
    { id: 'v31', word: 'layover', definition: 'Escale', example: 'We have a 3-hour layover in Dubai.', theme: 'travel' },
    { id: 'v32', word: 'accommodation', definition: 'Hébergement', example: 'The conference fee includes accommodation.', theme: 'travel' },
    { id: 'v33', word: 'to commute', definition: 'Faire le trajet domicile-travail', example: 'She commutes to work by train every day.', theme: 'travel' },
    { id: 'v34', word: 'round trip', definition: 'Aller-retour', example: 'A round trip ticket to Paris costs €200.', theme: 'travel' },
    { id: 'v35', word: 'delay', definition: 'Retard', example: 'There is a 30-minute delay on the Northern line.', theme: 'travel' },
    { id: 'v36', word: 'reservation', definition: 'Réservation', example: 'I\'d like to make a reservation for two.', theme: 'travel' },
    { id: 'v37', word: 'luggage / baggage', definition: 'Bagages', example: 'Please collect your luggage at carousel 3.', theme: 'travel' },

    // Communication & Media
    { id: 'v38', word: 'to subscribe', definition: 'S\'abonner', example: 'Subscribe to our newsletter for updates.', theme: 'communication' },
    { id: 'v39', word: 'broadcast', definition: 'Diffusion / Émission', example: 'The CEO\'s speech will be broadcast live.', theme: 'communication' },
    { id: 'v40', word: 'press release', definition: 'Communiqué de presse', example: 'We issued a press release about the new product.', theme: 'communication' },
    { id: 'v41', word: 'to acknowledge', definition: 'Accuser réception / Reconnaître', example: 'Please acknowledge receipt of this email.', theme: 'communication' },
    { id: 'v42', word: 'feedback', definition: 'Retour / Commentaires', example: 'We value your feedback on our services.', theme: 'communication' },
    { id: 'v43', word: 'to forward', definition: 'Transférer / Faire suivre', example: 'Could you forward this email to the team?', theme: 'communication' },
    { id: 'v44', word: 'attachment', definition: 'Pièce jointe', example: 'Please see the attachment for more details.', theme: 'communication' },
    { id: 'v45', word: 'confidential', definition: 'Confidentiel', example: 'This document is strictly confidential.', theme: 'communication' },

    // Office & Equipment
    { id: 'v46', word: 'supplies', definition: 'Fournitures', example: 'We need to order more office supplies.', theme: 'office' },
    { id: 'v47', word: 'photocopier', definition: 'Photocopieur', example: 'The photocopier is out of paper.', theme: 'office' },
    { id: 'v48', word: 'conference room', definition: 'Salle de conférence', example: 'The meeting will be held in the main conference room.', theme: 'office' },
    { id: 'v49', word: 'to file', definition: 'Classer / Archiver', example: 'Please file these documents alphabetically.', theme: 'office' },
    { id: 'v50', word: 'layout', definition: 'Agencement / Disposition', example: 'The new office layout is more open plan.', theme: 'office' },
    { id: 'v51', word: 'maintenance', definition: 'Entretien / Maintenance', example: 'The elevator is closed for maintenance.', theme: 'office' },
    { id: 'v52', word: 'to renovate', definition: 'Rénover', example: 'The lobby is being renovated this month.', theme: 'office' },

    // Retail & Shopping
    { id: 'v53', word: 'discount', definition: 'Réduction / Remise', example: 'We offer a 20% discount for new customers.', theme: 'retail' },
    { id: 'v54', word: 'receipt', definition: 'Reçu / Ticket de caisse', example: 'Keep your receipt for returns and exchanges.', theme: 'retail' },
    { id: 'v55', word: 'warranty', definition: 'Garantie', example: 'The product comes with a two-year warranty.', theme: 'retail' },
    { id: 'v56', word: 'to purchase', definition: 'Acheter / Acquérir', example: 'You can purchase tickets online.', theme: 'retail' },
    { id: 'v57', word: 'out of stock', definition: 'En rupture de stock', example: 'I\'m sorry, that item is currently out of stock.', theme: 'retail' },
    { id: 'v58', word: 'merchandise', definition: 'Marchandise', example: 'New merchandise arrives every Monday.', theme: 'retail' },
    { id: 'v59', word: 'to deliver', definition: 'Livrer', example: 'We can deliver within 3 business days.', theme: 'retail' },
    { id: 'v60', word: 'customer service', definition: 'Service client', example: 'Contact customer service for any issues.', theme: 'retail' },

    // HR & Recruitment
    { id: 'v61', word: 'to recruit', definition: 'Recruter', example: 'We are recruiting for several positions.', theme: 'hr' },
    { id: 'v62', word: 'candidate', definition: 'Candidat', example: 'We interviewed ten candidates for the role.', theme: 'hr' },
    { id: 'v63', word: 'qualifications', definition: 'Qualifications / Diplômes', example: 'What qualifications do you need for this job?', theme: 'hr' },
    { id: 'v64', word: 'probation', definition: 'Période d\'essai', example: 'All new employees serve a 3-month probation.', theme: 'hr' },
    { id: 'v65', word: 'leave / time off', definition: 'Congé', example: 'I\'d like to request some time off next week.', theme: 'hr' },
    { id: 'v66', word: 'overtime', definition: 'Heures supplémentaires', example: 'Employees are paid extra for overtime work.', theme: 'hr' },
    { id: 'v67', word: 'shift', definition: 'Quart de travail / Poste', example: 'She works the night shift at the hospital.', theme: 'hr' },
    { id: 'v68', word: 'to evaluate', definition: 'Évaluer', example: 'Managers evaluate employees twice a year.', theme: 'hr' },

    // Industry & Production
    { id: 'v69', word: 'facility', definition: 'Installation / Établissement', example: 'Our manufacturing facility is located in Ohio.', theme: 'industry' },
    { id: 'v70', word: 'assembly line', definition: 'Chaîne de montage', example: 'Workers on the assembly line produce 500 units daily.', theme: 'industry' },
    { id: 'v71', word: 'inventory', definition: 'Inventaire / Stock', example: 'We need to do a full inventory check.', theme: 'industry' },
    { id: 'v72', word: 'shipment', definition: 'Expédition / Envoi', example: 'The shipment will arrive on Wednesday.', theme: 'industry' },
    { id: 'v73', word: 'quality control', definition: 'Contrôle qualité', example: 'All products pass through quality control.', theme: 'industry' },
    { id: 'v74', word: 'to manufacture', definition: 'Fabriquer', example: 'We manufacture electronic components.', theme: 'industry' },
    { id: 'v75', word: 'supplier', definition: 'Fournisseur', example: 'We work with several reliable suppliers.', theme: 'industry' },
    { id: 'v76', word: 'warehouse', definition: 'Entrepôt', example: 'The goods are stored in our warehouse.', theme: 'industry' },
];

export function getWordsByTheme(themeId) {
    return vocabularyWords.filter(w => w.theme === themeId);
}

export function getDueWords(progress) {
    const now = new Date();
    return vocabularyWords.filter(w => {
        const wordProgress = progress?.vocabulary?.words?.[w.id];
        if (!wordProgress) return true; // never studied
        if (!wordProgress.nextReview) return true;
        return new Date(wordProgress.nextReview) <= now;
    });
}
