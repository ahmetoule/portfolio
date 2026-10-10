"use client"

import { useInView } from "@/hooks/use-in-view"
import { AnimatedTitle } from "@/components/animated-title"

export function Epreuve6Section() {
    const { ref, isInView } = useInView({ threshold: 0.2 })

    return (
        <section id="epreuve-6" className="min-h-screen py-20 px-8 flex items-center" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <AnimatedTitle
                    className={`text-5xl font-bold mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    Épreuve 6
                </AnimatedTitle>

                <div className={`space-y-8 text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Épreuve E6 – Projet informatique</h3>
                        <p className="mb-6">
                            L'épreuve E6 du BTS SIO (option SISR) m'a permis de mettre en pratique l'ensemble des compétences acquises au cours de ma formation, en conduisant un projet informatique complet dans un contexte professionnel.
                        </p>
                        <p>
                            Pour cette épreuve, j'ai fait le choix de présenter un projet portant sur le déploiement et l'administration d'<strong>Active Directory</strong> couplé à <strong>GLPI</strong> (Gestionnaire Libre de Parc Informatique). Ce projet visait à répondre à des besoins concrets d'entreprise : la gestion sécurisée des identités et des accès au sein d'un domaine, ainsi que la centralisation de l'assistance utilisateur et de la gestion du parc matériel.
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="mb-6">
                            Lors de ma soutenance de fin d'études, j'ai pu démontrer ma capacité à analyser un besoin, concevoir une solution technique adaptée, et justifier mes choix d'infrastructure. J'ai détaillé la mise en place de ces services, la configuration des stratégies de groupe (GPO) et l'intégration globale de la solution au réseau.
                        </p>
                        <p>
                            <em>Note : Mon dossier technique de présentation ayant été conservé par le centre d'examen, il n'est pas disponible en téléchargement ici. La validation de cette épreuve m'a cependant permis d'obtenir mon diplôme de BTS SIO avec succès.</em>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
