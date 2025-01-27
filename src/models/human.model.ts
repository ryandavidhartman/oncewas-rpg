import { IRace } from "./irace.interface";
import { ClassName } from "./classname.enum";
import { RaceName } from "./racename.enum";

const HUMAN_SPECIFICS_KEY = "game.races.human.specifics"

export class Human implements IRace {

    private constructor() { }
    private static instance: Human;
    public static getInstance(): Human {
        if (!Human.instance) {
            Human.instance = new Human();
        }

        return Human.instance;
    }

    raceName = RaceName.HUMAN;
    abilityRequirements = {};
    classes = [ClassName.THIEF, ClassName.CLERIC, ClassName.FIGHTER, ClassName.MAGICUSER];
    weaponRestrictions = [];
    // specialAbilities = ["+10% XP"];
    specialAbilities = [
        {
            translationKey: `${HUMAN_SPECIFICS_KEY}.specialAbilities.extraXp`,
            params: { VALUE: 10 }
        }
    ];
    savingThrowMods = {};
    names = ["Gatugha Helbeard",
        "Abeoh Longrobe",
        "Tiobaid GilleChrìost",
        "Raibeart MacIlleGhlais",
        "Ealar Mac'IlleBhreac",
        "Iòsaph Gòrdan",
        "Mìcheil MacBeathag",
        "Tormod MacNiallghuis",
        "Pàdruig MacThòmais",
        "Artur MacIll'Fhialain",
        "Solamh MacGilleDhuibh",
        "Sim MacDiarmaid",
        "Beasag Ìomharach",
        "Marta Cèampach",
        "Ciorsdan MacAoidhein",
        "Seonag Beitean",
        "Leagsaidh MacThorcadail",
        "Eithrig Granndach",
        "Dior-bhàil MacBhlàthain",
        "Frangag MacAdaidh",
        "Rut Brothaigh",
        "Ceitidh Cuimeineach",
        "Grégoire Naudé",
        "Wilfried Le Sueur",
        "Antoine Silvestre",
        "Maxence Baume",
        "Raymond Crozier",
        "Mickaël Ménétries",
        "Bruno Féret",
        "José Lemoine",
        "Sylvain Parmentier",
        "Lucrèce Adnet",
        "Maryvonne Longchambon",
        "Bethsabée Édouard",
        "Maria Beauvais",
        "Louise Giraud",
        "Mireille Bonhomme",
        "Marie-Christine Valluy",
        "Bérénice Fétique",
        "Irène Béliveau",
        "Germaine Jégou",
        "Victoire Dupont",
        "Timm Nagelberg",
        "Daniel Heuser",
        "Kuno Lotz",
        "Caesar Herzsprung",
        "Ronald Seyfried",
        "Laurin Bruckmann",
        "Georg Kieber",
        "Klemens Rosenhain",
        "Georg Eichenberg",
        "Otto Fleischman",
        "Bernadette Reichwein",
        "Tina Schroth",
        "Lilly Körver",
        "Elsa Sperber",
        "Zoey Myers",
        "Carla Baar",
        "Annika Rimensberger",
        "Ronja Walbaum",
        "Tessa Berlepsch",
        "Lucie Teyber",
        "Aithanarid",
        "Arnegliscus",
        "Sunnia",
        "Ostrogotha",
        "Bessi",
        "Rhima",
        "Vandil",
        "Gadaric",
        "Baduila",
        "Sigismund",
        "Kriemhild",
        "Gosvintha",
        "Brunichild",
        "Lucienne",
        "Chlodoswintha",
        "Hermesind",
        "Amalfrida",
        "Amalwara",
        "Megan-Laureen",
        "Ereleuva",
        "Eike",
        "Wolfgang",
        "Rocco",
        "Baldwin",
        "Willibert",
        "Walfried",
        "Ingbert",
        "Gangolf",
        "Filibert",
        "Dankrad",
        "Heilwig",
        "Gerlinde",
        "Ludwina",
        "Charlotte",
        "Wigburg",
        "Richmute",
        "Raina",
        "Hildburg"]
}