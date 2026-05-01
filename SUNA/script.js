// ============================================
// CONTENT DATA
// ============================================
const PAGES = {
  sommaire: {
    title: 'Sommaire',
    kanji: '目次',
    tooltipLabel: 'Sommaire des Archives',
    html: `
      <div class="scroll-ornament">━━━ ◈ ━━━</div>
      <div class="section-title">Sommaire<span class="kanji-sub">目次</span></div>
      <p style="text-align:center; font-family:'Cinzel',serif; font-size:14px; letter-spacing:3px; color:var(--sand-deep); margin-bottom:30px;">DOCUMENT À USAGE ÉDUCATIF — SECTION ARCHÉOLOGIE rédigé par Heiji Hamada</p>
      <div style="max-width:400px; margin:0 auto;">
        <div class="page-link" data-page="histoire" style="padding:14px 0; border-bottom:1px dashed rgba(139,111,71,0.25); cursor:pointer;">
          <span style="font-family:'Cinzel',serif; font-size:22px; font-weight:900; color:var(--accent-red); opacity:0.7; margin-right:12px;">I</span>
          <span style="font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--ink-dark);">Histoire de Sunagakure</span>
        </div>
        <div class="page-link" data-page="clans_majeurs" style="padding:14px 0; border-bottom:1px dashed rgba(139,111,71,0.25); cursor:pointer;">
          <span style="font-family:'Cinzel',serif; font-size:22px; font-weight:900; color:var(--accent-red); opacity:0.7; margin-right:12px;">II</span>
          <span style="font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--ink-dark);">Les Clans Majeurs</span>
        </div>
        <div class="page-link" data-page="clans_mineurs" style="padding:14px 0; border-bottom:1px dashed rgba(139,111,71,0.25); cursor:pointer;">
          <span style="font-family:'Cinzel',serif; font-size:22px; font-weight:900; color:var(--accent-red); opacity:0.7; margin-right:12px;">III</span>
          <span style="font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--ink-dark);">Les Clans Mineurs</span>
        </div>
        <div class="page-link" data-page="kazekages" style="padding:14px 0; cursor:pointer;">
          <span style="font-family:'Cinzel',serif; font-size:22px; font-weight:900; color:var(--accent-red); opacity:0.7; margin-right:12px;">IV</span>
          <span style="font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--ink-dark);">Les Kazekages</span>
        </div>
      </div>
      <div class="seal-stamp"><span class="stamp-char">砂</span></div>
    `
  },
  histoire: {
    title: 'Histoire de Suna',
    kanji: '歴史',
    tooltipLabel: 'Histoire de Suna',
    html: `
      <div class="scroll-ornament">━━━ ◈ ━━━</div>
      <div class="section-title">Chapitre I — Histoire de Sunagakure<span class="kanji-sub">砂隠れの里の歴史</span></div>
        <p style="font-style: italic; font-size: 14px; color: var(--sand-deep); opacity: 0.8; margin-top: 8px;">Des pages semblent incomplètes...</p>
      <div class="seal-stamp"><span class="stamp-char">史</span></div>
    `
  },
  clans_majeurs: {
    title: 'Clans Majeurs',
    kanji: '主要氏族',
    tooltipLabel: 'Clans Majeurs',
    html: `
      <div class="scroll-ornament">━━━ ◈ ━━━</div>
      <div class="section-title">Chapitre II — Les Clans Majeurs<span class="kanji-sub">主要氏族</span></div>
      <p>Les clans majeurs constituent les piliers fondateurs du village. Leur influence politique, militaire et culturelle façonne la vie de Suna depuis des générations.</p>

      <div class="clan-card">
        <div class="clan-name">Clan Jishaku</div>
        <span class="clan-kanji">夢幻一族</span>
        <p style="font-style: italic; font-size: 14px; color: var(--sand-deep); opacity: 0.8; margin-top: 8px;">Des pages semblent incomplètes...</p>
      </div>
     
      <div class="clan-card">
        <div class="clan-name">Clan Ayatsuri</div>
        <span class="clan-kanji">夢幻一族</span>
         <p style="margin-bottom: 12px;"><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Chef de Clan :</strong> Shunraku Ayatsuri</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Histoire du Clan :</strong> <br> Le clan Ayatsuri est né dans la douleur et le sang. Kuro et Shiro Ayatsuri, deux frères d'une tribu nomade du Pays du Vent, furent bannis pour un crime impardonnable aux yeux des leurs : leur soif insatiable de savoir. Obsédés par l'idée de dépasser les limites humaines, ils étudièrent les flux de chakra jusqu'à découvrir un secret qui allait changer l'art de la guerre : les fils de chakra.
        <br><br> En exil, ils façonnèrent les premières marionnettes de combat : des extensions mortelles de leur volonté, mêlant bois, métal et chakra, capables de frapper à distance avec une précision inhumaine.
        <br><br> Lorsque leur art fut perfectionné, les deux frères revinrent, non pour demander pardon, mais pour anéantir leur ancienne tribu. Les survivants furent rassemblés et contraints d'apprendre cet art mécanique et implacable. Ainsi naquit le clan Ayatsuri, fondé non sur la paix, mais sur la vengeance et la transmission. C'est Gin Ayatsuri qui posa les premières fondations de ce qui deviendrait l'une des lignées les plus redoutées du Pays du Vent. </p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Culture & Philosophie :</strong> .</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Organisation:</strong> .</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Relations & Influence :</strong> .</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Capacités :</strong></p>
      </div>

      <div class="clan-card">
        <div class="clan-name">Clan Ensho</div>
        <span class="clan-kanji">夢幻一族</span>
        <p style="margin-bottom: 12px;"><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Chef de Clan :</strong> Geto Ensho</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Histoire du Clan :</strong><br> Le clan Ensho trouve son origine dans l'une des plus sombres tragédies du Pays du Vent. Lors du conflit dévastateur entre les clans Jishaku et Mugen, la tribu originelle du Vent fut presque entièrement anéantie. Seul Ensho, dernier survivant présumé, osa se dresser contre Shibuki Jishaku, futur Premier Kazekage de Suna. Il périt au combat, laissant derrière lui une lame noire forgée dans le fer du sang de sa tribu, bénie par la Déesse du Vent. <br> <br>Quelques rescapés du massacre, refusant de se soumettre à l'unification de Shibuki, choisirent l'exil dans les confins brûlants du désert. Animés par la douleur et la foi, ils se tournèrent vers la prière et l'ascèse, renforçant leur lien mystique avec la Déesse du Vent. C'est Loki Ensho qui, le premier, rassembla ces survivants dispersés et posa les fondations du clan, nommé en mémoire du guerrier tombé. Nomades, dissidents, survivants, les Ensho devinrent sous sa conduite les nouveaux maîtres du vent. </p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Culture & Philosophie :</strong><br> Les Ensho vouent un culte sacré au vent, qu'ils perçoivent comme une entité vivante, messager de leur déesse et juge du désert. Chaque membre du clan reçoit dès son plus jeune âge un éventail sacré, forgé selon des traditions ancestrales, à travers lequel il apprend à canaliser et diriger le souffle divin. Leur philosophie repose sur trois piliers : foi, endurance et liberté..</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Rôle a Sunagakure:</strong><br> Longtemps reclus, les Ensho construisirent leur puissance dans l'ombre en prenant le contrôle des routes commerciales du Pays du Vent. Leur neutralité politique et leur respect des pactes leur permirent de gagner la confiance des caravaniers, contrebandiers et seigneurs, supplantant peu à peu le monopole du clan Ayatsuri. Lorsque l'économie du pays chancela, le daimyō du Vent imposa leur intégration à Sunagakure. <br><br> Depuis lors, le clan Ensho supervise l'intégralité de l'économie du village : perception des taxes, régulation des échanges et direction du Comptoir des Sables. Aucune richesse n'entre ou ne sort de Suna sans passer entre leurs mains. À leur tête, Geto Ensho cumule la direction du clan et le titre de Commandant des Armées de Sunagakure, faisant des Ensho l'un des clans les plus influents du village.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Relations & Influence :</strong><br> Incontournables dans la vie économique de Suna, les Ensho sont respectés autant que redoutés. Leur contrôle sur les flux de richesses leur confère un levier d'influence considérable sur les autres clans, dont la prospérité dépend en partie de leur bon vouloir. S'ils ne cherchent pas l'affrontement, nul n'ignore que contrarier les Ensho, c'est risquer de voir le vent tourner à son désavantage.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Capacités :</strong><br> Les Ensho sont des maîtres du Vent Céleste, une forme avancée du Fūton façonnée par des générations de dévotion et d'ascèse. Leurs techniques, canalisées à travers leur éventail ancestral, sont tranchantes, rapides et imprévisibles. Ce vent divin se distingue par sa capacité à contrer les arts ninjas des autres clans de Suna. Manipuler le vent n'est pas un simple art du combat, c'est un acte de foi.</p>
      </div>

      <div class="clan-card">
        <div class="clan-name">Clan Mugen</div>
        <span class="clan-kanji">夢幻一族</span>
        <p style="margin-bottom: 12px;"><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Chef de Clan :</strong> Roshii Mugen</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Histoire du Clan :</strong> <br> Fondé par Inashiro Mugen, le clan est reconnu comme l'un des plus anciens praticiens des arts illusionnistes. Ses origines remontent à une époque où les rituels occultes et les pratiques chamaniques dominaient les sociétés ninja. Les premiers membres étaient des mystiques et des chamans qui découvrirent les secrets de la perception à travers la méditation et des cérémonies ésotériques.
          <br><br>
          Au fil du temps, leurs ancêtres furent parmi les premiers à comprendre que les illusions pouvaient dépasser la simple tromperie sensorielle pour affecter directement l'esprit. Ces découvertes firent rapidement des Mugen des atouts recherchés par les seigneurs de guerre, jusqu'à leur intégration au village caché de Sunagakure, où le clan perfectionna son art du genjutsu et se spécialisa dans la manipulation mentale. </p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Culture & Philosophie :</strong> <br>La philosophie du clan repose sur l'idée que la réalité est malléable. Comprendre et manipuler l'esprit est, pour eux, la clé pour dominer un adversaire. Dès l'enfance, les membres sont formés à développer une sensibilité aiguë à l'énergie mentale et à créer des illusions capables de tromper tous les sens.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Organisation:</strong> <br>Le clan est structuré en familles spécialisées dans des aspects variés du genjutsu. Les plus expérimentés portent le titre de Maîtres des Illusions : ils supervisent l'enseignement, les missions stratégiques et la préservation des secrets ancestraux. La vie des Mugen est ponctuée de rituels, de compétitions d'illusions et de cérémonies de passage marquant la maîtrise de techniques avancées. Le clan est actuellement dirigé par le Généralissime Roshii Mugen.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Relations & Influence :</strong> <br>Respectés mais craints, les Mugen occupent une place singulière dans la hiérarchie des clans de Suna. Créateurs et piliers de la section Koan, ils en assurent depuis l'origine le maintien de l'ordre et la sécurité du village. Leur maîtrise du genjutsu, difficile à contrer, leur confère une réputation de manipulateurs insaisissables. Les autres clans gardent toujours à l'esprit que face aux Mugen, la frontière entre vérité et illusion est incertaine.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Capacités :</strong> <br>Les Mugen sont des spécialistes du genjutsu avancé, capables d'altérer la perception du temps, de plonger une cible dans un environnement entièrement factice, ou d'induire des émotions intenses telles que la peur, la paranoïa ou le désespoir. <br><br>Le clan possède un dōjutsu propre à leur lignée : le Sōryūgan. Cette pupille unique leur confère deux capacités distinctes :
<br><br> Identification — Discerner instantanément alliés et ennemis, quelles que soient les circonstances ou les déguisements.
<br>Déplacement instantané — Se téléporter à volonté, sans contrainte de lieu ni de moment.
        </p>
      </div>
      <div class="seal-stamp"><span class="stamp-char">族</span></div>
    `
  },
  clans_mineurs: {
    title: 'Clans Mineurs',
    kanji: '小氏族',
    tooltipLabel: 'Clans Mineurs',
    html: `
      <div class="scroll-ornament">━━━ ◈ ━━━</div>
      <div class="section-title">Chapitre III — Les Clans Mineurs<span class="kanji-sub">小氏族</span></div>
      <p>Si les clans majeurs forment le squelette de Suna, les clans mineurs en sont les muscles. Moins nombreux mais essentiels, ils apportent des compétences uniques à l'arsenal du village.</p>

      <div class="clan-card">
        <div class="clan-name">Clan Hayakawa</div>
        <span class="clan-kanji">早川一族</span>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Histoire du Clan :</strong> Lié à une Malédiction du Ciel. Dès la naissance, chaque membre est frappé par un sceau maudit se manifestant sous la forme de chaînes de chakra. Leur doyen, Kirei Hayakawa, actuel Régent et Raikage de Kumo, porte en lui la marque originelle, symbole de la puissance et de la douleur de sa lignée.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Actes Accomplis :</strong> Auteurs de l'Extermination du Clan Jinsei. Leurs porteurs de marque (Kirei, Kidou, Goenji) ont dompté la malédiction. Pionniers en ingénierie extrême avec Arata (marionnette humaine) et la création artificielle de Kidara. Kisoji a quant à lui hissé l'art du Fuinjutsu à son paroxysme.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Capacités et Arsenaux :</strong> Experts en Fuinjutsu, manipulant la malédiction via les "Chaînes du Jugement" pour entraver la puissance ennemie. Ils conservent <b>Hibai</b>, l'arme sacrée des ancêtres autrefois rattachée à la lignée des Fukuda.</p>
        <p><strong style="color:var(--ink-dark); font-family:'Cinzel', serif;">Coutumes et Philosophie :</strong> D'un pragmatisme absolu et dotés d'un sens aiguisé des affaires. Chaque alliance ou combat doit servir l'intérêt supérieur du clan.</p>
      </div>

      <div class="clan-card">
        <div class="clan-name">Clan Satoshi</div><span class="clan-kanji">鳳器一族</span>
        <p style="font-style: italic; font-size: 14px; color: var(--sand-deep); opacity: 0.8; margin-top: 8px;">Des pages semblent incomplètes...</p>
      </div>
      <div class="seal-stamp"><span class="stamp-char">匠</span></div>
    `
  },
  kazekages: {
    title: 'Les Kazekages',
    kanji: '風影',
    tooltipLabel: 'Monument des Kazekages',
    html:`
     <div class="scroll-ornament">━━━ ◈ ━━━</div>
      <div class="section-title">Chapitre IV — Les Kazekages<span class="kanji-sub">風影</span></div>
      <p>Les archives recensent la lignée complète des dirigeants de Suna, répartie selon les grandes ères de notre histoire.</p>

      <h3>I. La Première Ère : Fondation et Ascension</h3>
      <div class="kazekage-entry"><div class="kaze-ord">1</div><div class="kaze-info"><div class="kaze-name">Shibuki Jishaku</div><p>Fondateur historique du village. Il a réalisé l'unification des clans nomades grâce à sa maîtrise unique du sable.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">2</div><div class="kaze-info"><div class="kaze-name">Hoshino Mugen</div><p>Leader tourné vers l'expansionnisme. Expert en illusions (Genjutsu), il a créé les forces spéciales "Kuro-Shin" et fut l'élément déclencheur de la Première Grande Guerre Ninja.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">3</div><div class="kaze-info"><div class="kaze-name">Sei Jishaku</div><p>Célèbre héros de guerre reconnu pour sa générosité. Il a fait partie de l'unité Kageri (les 4 Démons) et a considérablement accru la puissance militaire du pays.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">4</div><div class="kaze-info"><div class="kaze-name">Kajura Jishaku</div><p>Instaurateur d'un véritable Âge d'Or. Il a imposé une méritocratie et une discipline stricte, permettant au village d'exercer une domination historique sur Konoha.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">5</div><div class="kaze-info"><div class="kaze-name">Aeris Ayatsuri</div><p>Maître marionnettiste de génie. Il a forgé une alliance stratégique avec le clan Uchiha via le Culte Amura et a servi de mentor spirituel et technique à Ichiki.</p></div></div>

      <div class="divider">❖</div>

      <h3>II. La Première Ère : Période de Crise et Déclin</h3>
      <div class="kazekage-entry"><div class="kaze-ord">6</div><div class="kaze-info"><div class="kaze-name">Ichiki Jishaku</div><p>Devenu "Démon du Sable" de la seconde génération. Son règne fut marqué par des échecs successifs et des replis stratégiques qui ont affaibli la position du village.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">7</div><div class="kaze-info"><div class="kaze-name">Yoru Mugen</div><p>Visionnaire logistique, il a modernisé les ressources et l'équipement militaire. Il a su redonner confiance au peuple avant de tomber héroïquement au combat contre les forces de Konoha.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">8</div><div class="kaze-info"><div class="kaze-name">Eishiro Jishaku</div><p>Son règne fut l'un des plus courts. Confronté à un moral au plus bas, il fut finalement assassiné par Nora Senju.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">9</div><div class="kaze-info"><div class="kaze-name">Kazan Raimei</div><p>Dictateur totalitaire ayant imposé une réforme radicale des régents. Il a fini par trahir les siens en devenant déserteur pour rejoindre l'organisation Tensoku.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">10</div><div class="kaze-info"><div class="kaze-name">Jura Jishaku</div><p>Fils de Kajura, il a restauré l'honneur du clan par une victoire éclatante, mais a tragiquement trouvé la mort lors d'une confrontation directe face au démon Ichibi.</p></div></div>

      <div class="divider">❖</div>

      <h3>III. La Seconde Ère : Nouvelle Génération</h3>
      <div class="kazekage-entry"><div class="kaze-ord">11</div><div class="kaze-info"><div class="kaze-name">Sora Jishaku</div><p>Premier Kazekage de la seconde ère et également premier détenteur du Sakin.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">12</div><div class="kaze-info"><div class="kaze-name">Reikuro Jishaku</div><p>Maître du Sakin. Grand voyageur, il a temporairement confié la régence du village à Seidan Jishaku. Celui-ci mourru face au Tetsukage, Jingo "la Bête".</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">13</div><div class="kaze-info"><div class="kaze-name">Kaku Jishaku</div><p>Réceptacle (Jinchūriki) de Shukaku. Surnommé "Le Soleil".</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">14</div><div class="kaze-info"><div class="kaze-name">Hidan Jishaku</div><p>Eu un règne assez court.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">15</div><div class="kaze-info"><div class="kaze-name">Roni Mugen</div><p>Kazekage ayant eu un règne plutôt court.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">16</div><div class="kaze-info"><div class="kaze-name">Kairo Mugen</div><p>Sortira victorieux de nombreuses guerrse contre Konoha, Kiri ainsi qu'Oto, Celui ci sacrifia son propre bras afin de sauver la vie de Yone Ensho.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">17</div><div class="kaze-info"><div class="kaze-name">Nika Mugen</div><p>Cinquième figure majeure de cette nouvelle génération montante.</p></div></div>

      <div class="divider">❖</div>

      <h3>IV. La Seconde Ère : Le Premier Empire</h3>
      <div class="kazekage-entry"><div class="kaze-ord">18</div><div class="kaze-info"><div class="kaze-name">Doni Mugen</div><p>Premier Empereur de l'histoire. Il a réformé la méritocratie et restructuré la hiérarchie militaire (élevant les Commandants Jōnin au rang de Généralissimes et les Jonin commandants des armées). Il a mené les conquêtes d'Iwa et de Kumo avant de mourir en protégeant ses troupes lors d'une embuscade à Kumo.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">19</div><div class="kaze-info"><div class="kaze-name">Yoshi Mugen</div><p>Un souverain au règne éphémère. Il s'est sacrifié pour assurer la survie de son armée lors du conflit majeur contre le village de Kiri.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">20</div><div class="kaze-info"><div class="kaze-name">Nagi Zenin</div><p>Hôte du démon à une queue, Shukaku.</p></div></div>

      <div class="divider">❖</div>

      <h3>V. La Troisième Génération</h3>
      <div class="kazekage-entry"><div class="kaze-ord">21</div><div class="kaze-info"><div class="kaze-name">Doni II Mugen</div><p>Portant le nom illustre du premier Empereur, il incarne l'héritage de la lignée Mugen et la continuité de la puissance impériale au sein de cette nouvelle ère.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">22</div><div class="kaze-info"><div class="kaze-name">Sakuro Jishaku</div><p>Maître dans l'art du Sakin. Il instaura la méritocratie et prôna l'unité au sein de son village. Son règne fut malheureusement de courte durée, il finit par être renversé lors d'un coup d'État orchestré par Kobi & Roshii Mugen.</p></div></div>
      <div class="kazekage-entry"><div class="kaze-ord">23</div><div class="kaze-info"><div class="kaze-name">Kobi Mugen</div><p>Actuel Kazekage en titre. Il a pris le pouvoir en destituant Sakuro Jishaku, s'imposant ainsi comme le nouveau pilier du village.</p></div></div>
       <div class="kazekage-entry"><div class="kaze-ord">24</div><div class="kaze-info"><div class="kaze-name">Roshii Mugen</div><p>Suite au départ imprévu de son prédécésseur Kobi, Roshii à donc été nommé Kazekage de Sunagakure.</p></div></div>

      <div class="seal-stamp"><span class="stamp-char">風影</span></div>
    `
  }
};

// ============================================
// --- NOUVEAU : CHARGEMENT DE L'IMAGE DE FOND Suna ---
// ============================================
const sunaVillageImage = new Image();

// --- MODIFIE CETTE LIGNE AVEC TON IMAGE ---
// (Utilise une image avec de la transparence PNG si possible,
// ou une image dont le haut peut se fondre dans le ciel)

sunaVillageImage.src = 'images/suna2.png';

let isSunaImageLoaded = false;
sunaVillageImage.onload = () => {
    isSunaImageLoaded = true;
    console.log("Image de Suna chargée avec succès.");
};

sunaVillageImage.onerror = () => {
    console.error("Erreur lors du chargement de l'image. Vérifiez le chemin :", sunaVillageImage.src);
};

// ============================================
// CANVAS DESERT RENDERER
// ============================================
const canvas = document.getElementById('desertCanvas');
const ctx = canvas.getContext('2d');

let W, H;
let scrollProgress = 0; // 0 → 1
const WORLD_WIDTH = 8000;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Sky gradient shifts with scroll
function drawSky() {
  const t = scrollProgress;
  const grad = ctx.createLinearGradient(0, 0, 0, H * 0.6);
  grad.addColorStop(0, `rgb(${180 + t*40}, ${130 + t*50}, ${60 + t*20})`);
  grad.addColorStop(0.3, `rgb(${210 - t*30}, ${170 - t*10}, ${100 + t*10})`);
  grad.addColorStop(0.7, `rgb(${230 - t*50}, ${190 - t*40}, ${120 - t*30})`);
  grad.addColorStop(1, `rgb(${200 - t*20}, ${160 - t*20}, ${90})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const sunX = W * 0.75 - scrollProgress * W * 0.3;
  const sunY = H * 0.15 + Math.sin(scrollProgress * Math.PI) * H * 0.05;
  const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 120);
  sunGrad.addColorStop(0, 'rgba(255, 240, 180, 0.9)');
  sunGrad.addColorStop(0.3, 'rgba(255, 220, 120, 0.4)');
  sunGrad.addColorStop(1, 'rgba(255, 200, 100, 0)');
  ctx.fillStyle = sunGrad;
  ctx.fillRect(0, 0, W, H);
}

function drawSunaVillageLayer() {
    if (!isSunaImageLoaded) return;
    ctx.save();
    ctx.globalAlpha = 0.4;
    const offset = scrollProgress * WORLD_WIDTH;
    const parallaxSpeed = 0.15;
    const imageX = -(offset * parallaxSpeed);
    const imageY = H * 0.10;
    const imageWidth = W * 0.95;
    const imageHeight = H * 0.90;
    ctx.drawImage(sunaVillageImage, imageX, imageY, imageWidth, imageHeight);
    ctx.drawImage(sunaVillageImage, imageX + imageWidth, imageY, imageWidth, imageHeight);
    ctx.restore();
}

function drawDunes() {
  const offset = scrollProgress * WORLD_WIDTH;
  drawDuneLayer(offset * 0.15, H * 0.48, H * 0.22, 'rgba(180, 140, 70, 0.5)', 600, 0.8);
  drawDuneLayer(offset * 0.25, H * 0.52, H * 0.2, 'rgba(170, 125, 55, 0.6)', 500, 1.2);
  drawDuneLayer(offset * 0.4, H * 0.58, H * 0.22, 'rgba(160, 115, 50, 0.7)', 400, 1.5);
  drawDuneLayer(offset * 0.55, H * 0.63, H * 0.2, 'rgba(150, 105, 45, 0.8)', 350, 1.0);
  drawDuneLayer(offset * 0.75, H * 0.7, H * 0.25, 'rgba(140, 100, 40, 0.85)', 300, 1.8);
  drawDuneLayer(offset * 1.0, H * 0.78, H * 0.3, 'rgba(120, 85, 35, 0.95)', 250, 1.2);
  ctx.fillStyle = 'rgba(100, 70, 30, 1)';
  ctx.fillRect(0, H * 0.88, W, H * 0.12);
  const fgGrad = ctx.createLinearGradient(0, H * 0.85, 0, H * 0.92);
  fgGrad.addColorStop(0, 'rgba(100, 70, 30, 0)');
  fgGrad.addColorStop(1, 'rgba(100, 70, 30, 1)');
  ctx.fillStyle = fgGrad;
  ctx.fillRect(0, H * 0.85, W, H * 0.1);
}

function drawDuneLayer(offset, baseY, amp, color, period, phase) {
  ctx.beginPath();
  ctx.moveTo(0, H);
  for (let x = 0; x <= W; x += 4) {
    const worldX = x + offset;
    const y = baseY
      + Math.sin((worldX / period) + phase) * amp * 0.4
      + Math.sin((worldX / (period * 0.6)) + phase * 2.3) * amp * 0.25
      + Math.sin((worldX / (period * 1.8)) + phase * 0.7) * amp * 0.15;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(W, H);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * W,
    y: Math.random() * H,
    size: 0.5 + Math.random() * 2.5,
    speedX: 1 + Math.random() * 3,
    speedY: -0.5 + Math.random() * 1,
    opacity: 0.1 + Math.random() * 0.4,
  });
}

function drawParticles() {
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY + Math.sin(Date.now() / 1000 + p.x) * 0.3;
    if (p.x > W + 10) { p.x = -10; p.y = Math.random() * H; }
    if (p.y < -10 || p.y > H + 10) { p.y = Math.random() * H; }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(210, 180, 120, ${p.opacity})`;
    ctx.fill();
  });
}

function drawHaze() {
  const t = (Math.sin(Date.now() / 4000) + 1) / 2;
  ctx.fillStyle = `rgba(200, 160, 90, ${0.03 + t * 0.06})`;
  ctx.fillRect(0, 0, W, H);
}

// ============================================
// LANDMARKS on the desert
// ============================================
const LANDMARK_DEFS = [
  { key: 'sommaire',      worldX: 0.06, label: PAGES.sommaire.tooltipLabel,      kanji: '目' },
  { key: 'histoire',      worldX: 0.20, label: PAGES.histoire.tooltipLabel,      kanji: '史' },
  { key: 'clans_majeurs', worldX: 0.35, label: PAGES.clans_majeurs.tooltipLabel, kanji: '族' },
  { key: 'clans_mineurs', worldX: 0.55, label: PAGES.clans_mineurs.tooltipLabel, kanji: '匠' },
  { key: 'kazekages',     worldX: 0.75, label: PAGES.kazekages.tooltipLabel,     kanji: '影' },
];

let hoveredLandmark = null;

function getLandmarkScreenPos(lm) {
  const offset = scrollProgress * WORLD_WIDTH;
  const screenX = lm.worldX * WORLD_WIDTH - offset * 0.55;
  const duneY = H * 0.58
    + Math.sin((screenX + offset * 0.4) / 400 + 1.5) * H * 0.22 * 0.4
    + Math.sin((screenX + offset * 0.4) / 240 + 3.45) * H * 0.22 * 0.25;
  return { x: screenX, y: duneY - 20 };
}

function drawLandmarks() {
  LANDMARK_DEFS.forEach(lm => {
    const pos = getLandmarkScreenPos(lm);
    if (pos.x < -100 || pos.x > W + 100) return;
    const isHovered = hoveredLandmark === lm.key;
    const baseSize = isHovered ? 38 : 32;
    const glow = isHovered ? 20 : 8;
    const floatY = Math.sin(Date.now() / 1200 + lm.worldX * 10) * 5;
    const glowGrad = ctx.createRadialGradient(pos.x, pos.y + floatY, 0, pos.x, pos.y + floatY, baseSize + glow);
    glowGrad.addColorStop(0, `rgba(197, 148, 26, ${isHovered ? 0.5 : 0.25})`);
    glowGrad.addColorStop(1, 'rgba(197, 148, 26, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y + floatY, baseSize + glow, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.translate(pos.x, pos.y + floatY);
    ctx.beginPath();
    ctx.moveTo(-16, 10);
    ctx.lineTo(-14, -25);
    ctx.lineTo(-8, -35);
    ctx.lineTo(8, -35);
    ctx.lineTo(14, -25);
    ctx.lineTo(16, 10);
    ctx.closePath();
    ctx.fillStyle = isHovered ? 'rgba(60, 40, 20, 0.95)' : 'rgba(50, 35, 18, 0.85)';
    ctx.fill();
    ctx.strokeStyle = `rgba(197, 148, 26, ${isHovered ? 0.9 : 0.5})`;
    ctx.lineWidth = isHovered ? 2 : 1;
    ctx.stroke();
    ctx.font = `${isHovered ? 22 : 18}px 'Noto Sans JP'`;
    ctx.fillStyle = `rgba(197, 148, 26, ${isHovered ? 1 : 0.7})`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(lm.kanji, 0, -10);
    ctx.restore();
    lm._screenX = pos.x;
    lm._screenY = pos.y + floatY;
  });
}

function render() {
    ctx.clearRect(0, 0, W, H);
    drawSky();
    drawSunaVillageLayer();
    drawDunes();
    drawLandmarks();
    drawParticles();
    drawHaze();
    requestAnimationFrame(render);
}

render();

let targetScroll = 0;

function onWheel(e) {
  if (modalOpen) return;
  e.preventDefault();
  targetScroll += e.deltaY * 0.0004;
  targetScroll = Math.max(0, Math.min(1, targetScroll));
}

window.addEventListener('wheel', onWheel, { passive: false });

let touchStartY = 0;
window.addEventListener('touchstart', e => {
  if (modalOpen) return;
  touchStartY = e.touches[0].clientY;
});
window.addEventListener('touchmove', e => {
  if (modalOpen) return;
  e.preventDefault();
  const dy = touchStartY - e.touches[0].clientY;
  touchStartY = e.touches[0].clientY;
  targetScroll += dy * 0.001;
  targetScroll = Math.max(0, Math.min(1, targetScroll));
}, { passive: false });

function updateScroll() {
  scrollProgress += (targetScroll - scrollProgress) * 0.08;
  document.getElementById('progressFill').style.width = (scrollProgress * 100) + '%';
  if (scrollProgress > 0.02) {
    document.getElementById('scrollHint').style.opacity = '0';
    document.getElementById('scrollHint').style.pointerEvents = 'none';
  } else {
    document.getElementById('scrollHint').style.opacity = '';
    document.getElementById('scrollHint').style.pointerEvents = '';
  }
  requestAnimationFrame(updateScroll);
}

updateScroll();

const tooltip = document.getElementById('tooltip');
const tooltipInner = document.getElementById('tooltipInner');

canvas.addEventListener('mousemove', e => {
  if (modalOpen) return;
  const mx = e.clientX, my = e.clientY;
  let found = null;
  LANDMARK_DEFS.forEach(lm => {
    if (lm._screenX === undefined) return;
    const dx = mx - lm._screenX;
    const dy = my - lm._screenY;
    if (Math.sqrt(dx*dx + dy*dy) < 40) found = lm;
  });
  if (found) {
    hoveredLandmark = found.key;
    canvas.style.cursor = 'pointer';
    tooltip.style.left = found._screenX + 'px';
    tooltip.style.top = (found._screenY - 55) + 'px';
    tooltipInner.innerHTML = found.label + `<span class="sub">${PAGES[found.key].kanji} — Cliquez pour ouvrir</span>`;
    tooltip.classList.add('visible');
  } else {
    hoveredLandmark = null;
    canvas.style.cursor = '';
    tooltip.classList.remove('visible');
  }
});

canvas.addEventListener('click', e => {
  if (modalOpen) return;
  if (hoveredLandmark) {
    openPage(hoveredLandmark);
  }
});

canvas.addEventListener('touchend', e => {
  if (modalOpen) return;
  const touch = e.changedTouches[0];
  const mx = touch.clientX, my = touch.clientY;
  LANDMARK_DEFS.forEach(lm => {
    if (lm._screenX === undefined) return;
    const dx = mx - lm._screenX;
    const dy = my - lm._screenY;
    if (Math.sqrt(dx*dx + dy*dy) < 50) openPage(lm.key);
  });
});

let modalOpen = false;
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalCloseButton = document.getElementById('modalClose');

function openPage(key) {
  const page = PAGES[key];
  if (!page) return;
  modalContent.innerHTML = page.html;
  modalOverlay.classList.add('open');
  modalContent.scrollTop = 0;
  modalOpen = true;
  tooltip.classList.remove('visible');
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOpen = false;
}

modalCloseButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOpen) closeModal();
});

document.body.addEventListener('click', e => {
  const pageLink = e.target.closest('.page-link');
  if (pageLink) {
    const targetPage = pageLink.dataset.page;
    if (targetPage) openPage(targetPage);
  }
});

// ============================================
// AUDIO AMBIANCE CONTROL
// ============================================
const ambientAudio = document.getElementById('ambientAudio');
const audioToggle = document.getElementById('audioToggle');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLabel = document.getElementById('volumeLabel');

ambientAudio.volume = 0.25;

audioToggle.addEventListener('click', () => {
  if (ambientAudio.paused) {
    ambientAudio.play();
    audioToggle.textContent = '🔊';
  } else {
    ambientAudio.pause();
    audioToggle.textContent = '🔇';
  }
});

volumeSlider.addEventListener('input', () => {
  const volume = volumeSlider.value / 100;
  ambientAudio.volume = volume;
  volumeLabel.textContent = `${volumeSlider.value}%`;
});

// ============================================
// AUTO-START AUDIO ON PAGE LOAD
// ============================================
window.addEventListener('load', () => {
  // Try to autoplay - may be blocked by browser policy
  ambientAudio.play().then(() => {
    audioToggle.textContent = '🔊';
  }).catch(e => {
    console.log('Autoplay blocked by browser:', e);
    // Keep muted state
    audioToggle.textContent = '🔇';
  });
});
