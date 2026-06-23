import React, { useState, useEffect } from 'react';
import './App.css';

// IMPORTS DES CAPTURES D'ECRAN DU STAGE
// Extrait de ton mémoire (pages 23 à 36)
import dashboardManager from './assets/figure12-dashboard-manager.png';
import creationActivite from './assets/figure13-creation-activite.png';
import creationTache from './assets/figure14-creation-tache.png';
import tachesCreees from './assets/figure15-taches-creees.png';
import attributionTache from './assets/figure16-attribution-tache.png';
import listeActivites from './assets/figure17-liste-activites.png';
import detailsActivite from './assets/figure18-details-activite.png';
import listeTachesSoumises from './assets/figure19-liste-taches-soumises.png';
import planningJournalier from './assets/figure20-planning-journalier.png';
import planningHebdomadaire from './assets/figure21-planning-hebdomadaire.png';
import listeTachesFiltre from './assets/figure22-liste-taches-filtre.png';
import notificationCollaborateur from './assets/figure23-notification-collaborateur.png';
import planificationTache from './assets/figure24-planification-tache.png';
import listeActivitesCollaborateur from './assets/figure25-liste-activites-collaborateur.png';
import listeTachesActivite from './assets/figure26-liste-taches-activite.png';
import replanification from './assets/figure27-replanification.png';
import saisieTemps from './assets/figure28-saisie-temps.png';
import listeAnomalies from './assets/figure29-liste-anomalies.png';
import chargeTravail from './assets/figure30-charge-travail.png';
import rapportRecapitulatif from './assets/figure31-rapport-recapitulatif.png';

function App() {
  const [modalOpen, setModalOpen] = useState(null);
  const [expandedFeature, setExpandedFeature] = useState(null);

  useEffect(() => {
    const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const projectsData = {
    framework: {
      title: "Framework backend Java inspiré de Spring (MVC + API REST)",
      shortDesc: "Framework Java avec routage par annotations, API REST, validation de donnees et gestion de session.",
      longDesc: "Developpement d'un framework backend Java inspire de Spring, permettant de construire des applications web structurees. Le framework integre un systeme de routage via annotations (@Get, @Post), un support d'API REST avec production de JSON, des validateurs de champs (email, min, max) et une gestion de session HTTP. L'architecture suit le pattern MVC avec des controleurs et des modeles, et utilise JSP pour les vues.",
      tech: ["Java", "Reflexion API", "Annotations", "JSP", "JSON", "Session HTTP"],
      status: "public",
      github: "https://github.com/Onenantsoa25/Framework_2758.git",
      features: [
        "Routage HTTP par annotations (@Get, @Post) - URLs personnalisables",
        "Generation de reponses en JSON (API REST)",
        "Structure MVC (controleur, modele, vue JSP)",
        "Validation de champs : email, min, max",
        "Gestion des sessions et connexion utilisateur"
      ]
    },
    stage: {
      title: "Digitalisation et gestion collaborative des activites - BFM",
      shortDesc: "Application interne de gestion des activites et du temps de travail (stage 3 mois).",
      longDesc: "Application web interne permettant de centraliser et automatiser la gestion des activites, des taches et du temps de travail des collaborateurs de la Banky Foiben'i Madagasikara.",
      tech: ["PHP", "Symfony", "MySQL", "Twig", "Bootstrap", "JavaScript"],
      status: "stage",
      github: null,
      featuresGrouped: [
        {
          name: "Authentification et securite",
          description: "Systeme d'authentification securise par matricule avec gestion des roles (manager / collaborateur).",
          screenshots: []
        },
        {
          name: "Tableau de bord manager",
          description: "Vue globale des indicateurs de performance : etat d'avancement des taches, temps passe, taches en retard, repartition des taches, evolution graphique des retards.",
          screenshots: [{ fig: "Figure 12", img: dashboardManager, desc: "Tableau de bord du manager" }]
        },
        {
          name: "Creation d'activites et de taches",
          description: "Le manager cree une activite, puis les taches associees avec estimation horaire et date d'echeance.",
          screenshots: [
            { fig: "Figure 13", img: creationActivite, desc: "Creation d'une activite" },
            { fig: "Figure 14", img: creationTache, desc: "Creation d'une tache" },
            { fig: "Figure 15", img: tachesCreees, desc: "Liste des taches creees" }
          ]
        },
        {
          name: "Attribution des taches",
          description: "Attribution equilibree des taches aux collaborateurs avec visualisation de leur charge de travail actuelle.",
          screenshots: [{ fig: "Figure 16", img: attributionTache, desc: "Attribution d'une tache a un collaborateur" }]
        },
        {
          name: "Gestion des activites (manager)",
          description: "Visualisation de toutes les activites, consultation des details et ajout de taches supplementaires.",
          screenshots: [
            { fig: "Figure 17", img: listeActivites, desc: "Liste des activites" },
            { fig: "Figure 18", img: detailsActivite, desc: "Details d'une activite" }
          ]
        },
        {
          name: "Validation des taches",
          description: "Le manager consulte et valide les taches soumises par les collaborateurs avec leurs justificatifs.",
          screenshots: [{ fig: "Figure 19", img: listeTachesSoumises, desc: "Liste des taches soumises par l'equipe" }]
        },
        {
          name: "Planning collaborateur",
          description: "Vues journaliere et hebdomadaire pour que le collaborateur organise son travail.",
          screenshots: [
            { fig: "Figure 20", img: planningJournalier, desc: "Planning journalier" },
            { fig: "Figure 21", img: planningHebdomadaire, desc: "Planning hebdomadaire" }
          ]
        },
        {
          name: "Filtrage des taches",
          description: "Le collaborateur filtre ses taches par type d'activite pour mieux s'organiser.",
          screenshots: [{ fig: "Figure 22", img: listeTachesFiltre, desc: "Liste des taches avec filtre" }]
        },
        {
          name: "Notifications et planification",
          description: "Systeme de notification en temps reel pour les nouvelles taches. Le collaborateur doit planifier chaque tache dans son agenda.",
          screenshots: [
            { fig: "Figure 23", img: notificationCollaborateur, desc: "Page des notifications" },
            { fig: "Figure 24", img: planificationTache, desc: "Planification d'une tache" }
          ]
        },
        {
          name: "Gestion des taches (collaborateur)",
          description: "Le collaborateur consulte ses activites, visualise les taches associees, replanifie ou marque comme terminee.",
          screenshots: [
            { fig: "Figure 25", img: listeActivitesCollaborateur, desc: "Liste des activites du collaborateur" },
            { fig: "Figure 26", img: listeTachesActivite, desc: "Liste des taches d'une activite" },
            { fig: "Figure 27", img: replanification, desc: "Replanification d'une tache" },
            { fig: "Figure 28", img: saisieTemps, desc: "Saisie du temps passe" }
          ]
        },
        {
          name: "Alertes anomalies",
          description: "Detection et signalement des retards et des desequilibres de charge de travail.",
          screenshots: [{ fig: "Figure 29", img: listeAnomalies, desc: "Liste des anomalies" }]
        },
        {
          name: "Analyse charge de travail",
          description: "Visualisation de la repartition de la charge de travail au sein de l'equipe.",
          screenshots: [{ fig: "Figure 30", img: chargeTravail, desc: "Charge de travail de l'equipe" }]
        },
        {
          name: "Rapports et exports",
          description: "Generation de rapports recapitulatifs exportables en PDF et Excel.",
          screenshots: [{ fig: "Figure 31", img: rapportRecapitulatif, desc: "Rapport recapitulatif du collaborateur" }]
        }
      ]
    },
    crypto: {
      title: "Plateforme de cryptomonnaie",
      shortDesc: "Participation universitaire - Backend Spring Boot.",
      longDesc: "Projet de groupe (code prive). Developpement d'un systeme complet incluant un fournisseur d'identite securise (.NET/C#) avec authentification a deux facteurs, un backend de gestion des transactions (Spring Boot), une interface web en Vue.js et une application mobile React Native.",
      tech: ["Spring Boot", "PostgreSQL", "Vue.js", "React Native", ".NET"],
      status: "private",
      github: null,
      role: "Backend Spring Boot + PostgreSQL",
      features: [
        "Gestion de portefeuille utilisateur",
        "Simulation d'achat et vente de cryptomonnaies",
        "Generation de cours en temps reel",
        "Validation par email des transactions",
        "Analyse statistique des donnees",
        "Backoffice administrateur"
      ]
    },
    commerce: {
      title: "Plateforme pour centre commercial",
      shortDesc: "Participation universitaire - Backend Node.js/Express.",
      longDesc: "Projet en binome (code prive). Developpement d'une plateforme web full-stack pour centre commercial avec trois profils utilisateurs : administrateur, boutiques et acheteurs, securisee par JWT.",
      tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
      status: "private",
      github: null,
      role: "Backend Node.js/Express + MongoDB",
      features: [
        "Gestion multi-boutiques",
        "Catalogue produits par boutique",
        "Panier et commandes en ligne",
        "Attribution de lots",
        "Tableau de bord statistique",
        "Backoffice administrateur"
      ]
    }
  };

  const openModal = (key) => setModalOpen(key);
  const closeModal = () => {
    setModalOpen(null);
    setExpandedFeature(null);
  };

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav-logo">M.R</div>
        <div className="nav-links">
          <a href="#work">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-badge">Developpeur fullstack</div>
        <h1 className="hero-title">
          Manoa <span className="accent">Randrianarivelo</span>
        </h1>
        <p className="hero-subtitle">
          Du backend au frontend, je construis des applications complètes et fonctionnelles.
          Actuellement en Master 1, je cherche mon premier poste.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn-secondary">Me contacter</a>
        </div>
        {/* <div className="hero-stats">
          <div><span className="stat-number">1</span> <span>Stage pro</span></div>
          <div><span className="stat-number">3+</span> <span>Projets techniques</span></div>
          <div><span className="stat-number">8+</span> <span>Technologies</span></div>
        </div> */}
      </section>

      <section id="work" className="section">
        <div className="section-header fade-up">
          <span className="section-tag">Mes realisations</span>
          <h2>Projets que je peux<br />vraiment vous montrer</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card featured fade-up">
            <div className="project-badge public">Code public</div>
            <h3>{projectsData.framework.title}</h3>
            <p className="project-desc">{projectsData.framework.shortDesc}</p>
            <div className="project-tech">
              {projectsData.framework.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <button onClick={() => openModal('framework')} className="btn-details">
              Voir les details →
            </button>
          </div>

          <div className="project-card fade-up">
            <div className="project-badge stage">Stage BFM - 13 fonctionnalites</div>
            <h3>{projectsData.stage.title}</h3>
            <p className="project-desc">{projectsData.stage.shortDesc}</p>
            <div className="project-tech">
              {projectsData.stage.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <button onClick={() => openModal('stage')} className="btn-details">
              Voir les details →
            </button>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="section-header fade-up">
          <span className="section-tag">Contributions</span>
          <h2>Projets de groupe<br /><span className="light-text">(code non accessible)</span></h2>
        </div>

        <div className="contributions-grid fade-up">
          <div className="contrib-card">
            <h3>{projectsData.crypto.title}</h3>
            <p className="contrib-role">{projectsData.crypto.role}</p>
            <p className="contrib-desc">{projectsData.crypto.shortDesc}</p>
            <div className="contrib-tech">
              {projectsData.crypto.tech.join(" · ")}
            </div>
            <button onClick={() => openModal('crypto')} className="btn-details-small">
              En savoir plus
            </button>
          </div>

          <div className="contrib-card">
            <h3>{projectsData.commerce.title}</h3>
            <p className="contrib-role">{projectsData.commerce.role}</p>
            <p className="contrib-desc">{projectsData.commerce.shortDesc}</p>
            <div className="contrib-tech">
              {projectsData.commerce.tech.join(" · ")}
            </div>
            <button onClick={() => openModal('commerce')} className="btn-details-small">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header fade-up">
          <span className="section-tag">Tech stack</span>
          <h2>Outils que j'utilise</h2>
        </div>

        <div className="skills-showcase fade-up">
          <div className="skill-category">
            <h4>Langages</h4>
            <div className="skill-items">Java, C#, Python, PHP, JavaScript, TypeScript, C++, python</div>
          </div>
          <div className="skill-category">
            <h4>Frameworks</h4>
            <div className="skill-items">Spring Boot, Symfony, .NET, React, Vue.js, Angular, Node.js</div>
          </div>
          <div className="skill-category">
            <h4>Base de donnees</h4>
            <div className="skill-items">PostgreSQL, MySQL, MongoDB, Oracle, SQL Server</div>
          </div>
          <div className="skill-category">
            <h4>Outils</h4>
            <div className="skill-items">Git, Docker, Linux, VS Code, IntelliJ</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-inner fade-up">
          <h2>Parlons de votre prochain projet</h2>
          <p>Je suis actuellement à la recherche d'un premier poste en developpement.</p>
          <div className="contact-links">
            <a href="mailto:OnenantsoaRandrianarivelo@gmail.com" className="contact-btn email">
              OnenantsoaRandrianarivelo@gmail.com
            </a>
            <a href="https://linkedin.com/in/manoa-randrianarivelo-491b24358" target="_blank" rel="noreferrer" className="contact-btn linkedin">
              LinkedIn
            </a>
            <a href="https://github.com/Onenantsoa25" target="_blank" rel="noreferrer" className="contact-btn github">
              GitHub
            </a>
          </div>
          <div className="contact-phone">038 12 755 26 / 033 79 382 57</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Manoa Randrianarivelo — Developpeur fullstack junior</p>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{projectsData[modalOpen].title}</h2>
            {projectsData[modalOpen].role && (
              <p className="modal-role">{projectsData[modalOpen].role}</p>
            )}
            <div className="modal-tech">
              {projectsData[modalOpen].tech.map(t => <span key={t}>{t}</span>)}
            </div>
            
            <p className="modal-desc">{projectsData[modalOpen].longDesc}</p>
            
            {/* Affichage pour le stage : fonctionnalites groupees avec captures */}
            {projectsData[modalOpen].featuresGrouped && (
              <div className="modal-features-grouped">
                <h4>Fonctionnalites de l'application</h4>
                {projectsData[modalOpen].featuresGrouped.map((feature, idx) => (
                  <div key={idx} className="feature-group">
                    <div 
                      className="feature-header"
                      onClick={() => toggleFeature(idx)}
                    >
                      <span className="feature-icon">{expandedFeature === idx ? "▼" : "▶"}</span>
                      <span className="feature-name">{feature.name}</span>
                      {feature.screenshots.length > 0 && (
                        <span className="feature-badge">{feature.screenshots.length} capture(s)</span>
                      )}
                    </div>
                    
                    {expandedFeature === idx && (
                      <div className="feature-content">
                        <p className="feature-description">{feature.description}</p>
                        {feature.screenshots.length > 0 && (
                          <div className="feature-screenshots">
                            {feature.screenshots.map((s, sIdx) => (
                              <div key={sIdx} className="feature-screenshot-item">
                                <p className="screenshot-caption">{s.fig} : {s.desc}</p>
                                <img 
                                  src={s.img} 
                                  alt={s.desc}
                                  className="feature-screenshot-img"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        {feature.screenshots.length === 0 && (
                          <p className="no-screenshot">(Fonctionnalite backend - sans capture d'ecran)</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Affichage pour les autres projets */}
            {projectsData[modalOpen].features && !projectsData[modalOpen].featuresGrouped && (
              <div className="modal-features">
                <h4>Fonctionnalites principales</h4>
                <ul>
                  {projectsData[modalOpen].features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {projectsData[modalOpen].status === 'public' && (
              <a href={projectsData[modalOpen].github} target="_blank" rel="noreferrer" className="modal-link">
                Acceder au GitHub →
              </a>
            )}
            
            {projectsData[modalOpen].status === 'private' && (
              <p className="modal-note private-note">
                Code prive - projet de groupe.
                {/* Code prive - projet de groupe. Details techniques disponibles en entretien. */}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
