/**
 * Jex-analytique - Configuration du systeme
 * Architecture modulaire pour l'analyse sectorielle et professionnelle
 * 
 * @author JEXREY - Creation digitale & Developpement logiciel
 * @version 1.0.0
 */

export interface JexAnalytiqueConfig {
    /** Mode de fonctionnement de l'application */
    mode: 'production' | 'development';
    
    /** Parametres de l'analyseur de donnees */
    analyzer: {
        /** Sources de donnees autorisees */
        sources: string[];
        /** Frequence de mise a jour des donnees (en heures) */
        updateFrequency: number;
        /** Activer le cache des analyses */
        enableCache: boolean;
        /** Nombre maximum de resultats par recherche */
        maxResults: number;
    };

    /** Configuration du systeme de notation */
    scoring: {
        /** Poids du salaire dans le score (0-1) */
        salaryWeight: number;
        /** Poids de la demande dans le score (0-1) */
        demandWeight: number;
        /** Poids de la croissance dans le score (0-1) */
        growthWeight: number;
        /** Poids de la stabilite dans le score (0-1) */
        stabilityWeight: number;
    };

    /** Parametres de l'interface utilisateur */
    ui: {
        /** Theme par defaut */
        theme: 'dark' | 'light';
        /** Langue par defaut */
        language: 'fr' | 'en';
        /** Activer les animations */
        animations: boolean;
        /** Nombre d'elements par page */
        itemsPerPage: number;
    };

    /** Configuration reseau et API */
    network: {
        /** URL de l'API de donnees */
        apiEndpoint: string;
        /** Timeout des requetes (ms) */
        timeout: number;
        /** Nombre de tentatives en cas d'echec */
        retryCount: number;
    };

    /** Parametres de securite */
    security: {
        /** Activer la validation des entrees */
        inputValidation: boolean;
        /** Taux de confiance minimum pour les analyses */
        minConfidence: number;
        /** Politique de chiffrement */
        encryption: 'aes-256-gcm' | 'none';
    };
}

/**
 * Configuration par defaut du systeme Jex-analytique
 */
export const defaultConfig: JexAnalytiqueConfig = {
    mode: 'production',
    analyzer: {
        sources: [
            'World Economic Forum',
            'Bureau of Labor Statistics (BLS)',
            'Forbes',
            'Bloomberg',
            'OCDE',
            'Banque Mondiale',
            'McKinsey Global Institute',
            'International Monetary Fund'
        ],
        updateFrequency: 24,
        enableCache: true,
        maxResults: 50
    },
    scoring: {
        salaryWeight: 0.35,
        demandWeight: 0.30,
        growthWeight: 0.25,
        stabilityWeight: 0.10
    },
    ui: {
        theme: 'dark',
        language: 'fr',
        animations: true,
        itemsPerPage: 20
    },
    network: {
        apiEndpoint: 'https://api.jex-analytique.com/v1',
        timeout: 10000,
        retryCount: 3
    },
    security: {
        inputValidation: true,
        minConfidence: 0.75,
        encryption: 'aes-256-gcm'
    }
};

/**
 * Initialise la configuration du systeme
 * @param config Configuration partielle a fusionner avec la configuration par defaut
 * @returns Configuration complete
 */
export function initializeConfig(config?: Partial<JexAnalytiqueConfig>): JexAnalytiqueConfig {
    return {
        ...defaultConfig,
        ...config,
        analyzer: { ...defaultConfig.analyzer, ...config?.analyzer },
        scoring: { ...defaultConfig.scoring, ...config?.scoring },
        ui: { ...defaultConfig.ui, ...config?.ui },
        network: { ...defaultConfig.network, ...config?.network },
        security: { ...defaultConfig.security, ...config?.security }
    };
}

export default defaultConfig;
