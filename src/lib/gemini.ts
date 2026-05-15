import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function explainScientificTerm(term: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Explique le terme scientifique "${term}" de manière concise pour un chercheur. Réponds en français.`,
      config: {
        systemInstruction: "Tu es un expert en chimie et en physique atomique. Tu fournis des définitions précises et techniques.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Impossible de récupérer la définition pour le moment.";
  }
}

export async function identifyMolecule(composition: { [symbol: string]: number }) {
  const compStr = Object.entries(composition).map(([sym, count]) => `${sym}${count > 1 ? count : ''}`).join('');
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Identifie la molécule composée de: ${JSON.stringify(composition)}. 
      Retourne un objet JSON avec les clés suivantes: 
      "name" (nom en français), 
      "formula" (formule chimique correcte), 
      "summary" (description concise scientifique en français). 
      Si la combinaison est instable ou impossible, précise-le dans le sommaire. 
      Réponds UNIQUEMENT avec le JSON.`,
      config: {
        systemInstruction: "Tu es un chimiste expert. Tu identifies les molécules et expliques leurs propriétés.",
        responseMimeType: "application/json"
      },
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Erreur identification molécule:", error);
    return {
      name: "Combinaison Inconnue",
      formula: compStr,
      summary: "Impossible d'identifier cette structure avec certitude. Elle pourrait être instable ou complexe."
    };
  }
}

export async function searchMoleculeByName(name: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Donne les détails scientifiques de la molécule "${name}". 
      Retourne un objet JSON avec les clés suivantes: 
      "name" (nom exact en français), 
      "formula" (formule chimique correcte), 
      "composition" (objet avec symbole: nombre, ex: {"C": 6, "H": 12, "O": 6}),
      "summary" (description scientifique riche en français). 
      Réponds UNIQUEMENT avec le JSON pur, pas de markdown.`,
      config: {
        systemInstruction: "Tu es un chimiste expert. Tu identifies les molécules et expliques leurs propriétés.",
        responseMimeType: "application/json"
      },
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Erreur recherche molécule:", error);
    return null;
  }
}
export async function suggestPossibleMolecules(availableAtoms: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `À partir de ces éléments disponibles: ${availableAtoms.join(', ')}, suggère 5 molécules stables qui peuvent être formées. 
      Retourne un tableau JSON d'objets avec les clés: 
      "name" (nom en français), 
      "formula" (formule), 
      "composition" (objet symbole:nombre), 
      "summary" (description courte). 
      Réponds UNIQUEMENT avec le JSON pur.`,
      config: {
        systemInstruction: "Tu es un chimiste expert spécialisé dans la synthèse moléculaire.",
        responseMimeType: "application/json"
      },
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Erreur suggestions:", error);
    return [];
  }
}

export async function generateResearchReport(projectData: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `Génère un rapport de recherche professionnel basé sur ces données: ${JSON.stringify(projectData)}. Le rapport doit être structuré en Markdown.`,
      config: {
        systemInstruction: "Tu es un assistant de recherche scientifique. Tu rédiges des rapports clairs, structurés et formels en français.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Erreur lors de la génération du rapport.";
  }
}

export async function fetchElementCompounds(elementName: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Répertorie 5 composés chimiques majeurs de l'élément "${elementName}". 
      Retourne un tableau JSON d'objets avec les clés: 
      "name" (nom en français), 
      "formula" (formule chimique), 
      "summary" (brève description utilité/propriété en français). 
      Réponds UNIQUEMENT avec le JSON pur.`,
      config: {
        systemInstruction: "Tu es un chimiste expert. Tu fournis des informations précises sur les composés chimiques.",
        responseMimeType: "application/json"
      },
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Erreur fetch compounds:", error);
    return [];
  }
}
