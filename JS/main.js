



/* Animation Ecriture  */
const txtAnim = document.querySelector('.changing-text')

new Typewriter(txtAnim, {
    loop : true,
    deleteSpeed : 20
    /* deleteSpeed : (10 rapide / deleteSpeed: 70 lent) */

})
    /* changeDelay : (10 rapide / changeDelay: 70 lent) */
    .changeDelay(90)
    .typeString("sans t'épuiser,")
    .pauseFor(1000)
    .deleteChars(16)
    .pauseFor(300)
    .typeString("sans prospecter,")
    .pauseFor(1000)
    .deleteChars(16)
    .pauseFor(300)
    .typeString("sans aucune connaissance technique ?")
    .pauseFor(1000)
    .deleteChars(36)
    .pauseFor(300)
    .start()



/* Animation Carrousel  */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    overflow: "hidden",
    slidesPerView: "auto",
    direction: 'horizontal',
    rewind: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    }
});





/* Animation Page Ressources  */

// Boutton : Label, Outils, Experts
const buttonToggleHomePageRessources = document.querySelector('#check')

if (buttonToggleHomePageRessources) {
    const txtOutils = document.querySelector('#txtOutils')
    const txtExpert = document.querySelector('#txtExpert')

// txt intro section
    const txtIntroPageRessources = document.querySelector('#txtIntroPageRessources')

// Zone content (Outils / Experts)
    const containerSection2Ressources = document.querySelector('.containerSection2Ressources')

    buttonToggleHomePageRessources.addEventListener('click', ()=>{
        txtOutils.classList.toggle("txtActiveToggleButton")
        txtExpert.classList.toggle("txtActiveToggleButton")
        containerSection2Ressources.classList.toggle("margin-top-Expert")
        verifCheckBox()
    })

    function verifCheckBox() {
        if(buttonToggleHomePageRessources.checked){
            containerSection2Ressources.innerHTML = ''
            containerSection2Ressources.innerHTML = contentExperts()
            txtIntroPageRessources.innerHTML =`Chaque entrepreneur est spécialisé dans son domaine. <br>
            Depuis que je me suis lancée, j’ai dû faire appel à différentes expertises pour créer le business dont je suis fière aujourd'hui.<br> Dans cette page, je te présente des experts aux compétences complémentaires.
            <br>Ils sauront t'accompagner dans la mise en place de tes projets si cela dépasse mes compétences.
        `
        }
        else {
            containerSection2Ressources.innerHTML = ''
            containerSection2Ressources.innerHTML = contentOutils()
            txtIntroPageRessources.innerHTML =`Voici une liste non exhaustive des outils que j’utilise au quotidien <br> 
            pour m’aider à monter le business qui me rend fière.`

        }
    }

    function contentOutils() {
        return  `
                <div class="carteOutilPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteLeftOutilPageRessources">
                            <div class="">
                                <h3 class="color-pink4 titre-bold uppercase no-display-phone">Canva</h3>
                                <p class="texte-center-phone">Logiciel de création graphique.<br>Je l'utilise pour tous mes designs, il est très pratique et simple d'utilisation</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                                <div class="">
                                    <img class="h-10vh border-circle" src="images/ressources/imgCanva.png" alt="logo canva">
                                </div>
                                <a class="btn btn-essayerLogiciel uppercase" href="">Essayer</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carteOutilPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteRightOutilPageRessources">
                            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                                <div class="">
                                    <img class="h-10vh border-circle" src="images/ressources/imgLearnyBox.png" alt="logo LearnyBox">
                                </div>
                                <a class="btn btn-essayerLogiciel uppercase" href="">Essayer</a>
                            </div>
                            <div class="">
                                <h3 class="color-pink4 titre-bold uppercase text-end no-display-phone">LearnyBox</h3>
                                <p class="texte-end texte-center-phone">Logiciel de conception de tunnel.<br>Je l'utilise pour héberger les tunnels que je fais.<br>Made in France</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carteOutilPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteLeftOutilPageRessources">
                            <div class="">
                                <h3 class="color-pink4 titre-bold uppercase no-display-phone">Systeme.io</h3>
                                <p class="texte-center-phone">Logiciel de conception de tunnel.<br>Je l'utilise pour héberger les tunnels que je fais.<br>Made in France</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                                <div class="">
                                    <img class="h-10vh border-circle" src="images/ressources/imgSystemeIO.png" alt="logo Systeme.io">
                                </div>
                                <a class="btn btn-essayerLogiciel uppercase" href="">Essayer</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carteOutilPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteRightOutilPageRessources">
                            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                                <div class="">
                                    <img class="h-10vh border-circle" src="images/ressources/imgLearnyBox.png" alt="logo Freebe">
                                </div>
                                <a class="btn btn-essayerLogiciel uppercase" href="">Essayer</a>
                            </div>
                            <div class="">
                                <h3 class="color-pink4 titre-bold uppercase text-end no-display-phone">Freebe</h3>
                                <p class="texte-end texte-center-phone">Plateforme administrative.<br>Je l'utilise pour gérer mes devis, mes factures, relances etc.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carteOutilPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteLeftOutilPageRessources">
                            <div class="">
                                <h3 class="color-pink4 titre-bold uppercase no-display-phone">Google Workspace</h3>
                                <p class="texte-center-phone">Suite d'outils de productivité<br>Je l'utilise pour l'espace membre de chacun de mes coachés, pour<br>enregistrer mes réunions, pour créer des dossiers et documents.</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                                <div class="">
                                    <img class="h-10vh border-circle" src="images/ressources/imgGGWorkspace.png" alt="logo Google Workspace">
                                </div>
                                <a class="btn btn-essayerLogiciel uppercase" href="">Essayer</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
    }
    function contentExperts() {
        return `
                <div class="carteExpertPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteLeftExpertPageRessources">
                            <div class="d-flex flex-column justify-content-center align-items-center col-4">
                                <div class="">
                                    <img class="h-10vh border-circle inputImgProfessionnel" src="images/ressources/41.png" alt="logo canva">
                                </div>
                                <div class="text-center">
                                    <div class="d-flex flex-column">
                                        <h3 class="m-0 uppercase color-pink4 titre-bold">Pierre Cauchois</h3>
                                        <h3 class="m-0 uppercase color-grey">Expert en media buying</h3>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a class="inputReseaux" href="#"><i class="color-pink4 bi bi-linkedin icon"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <p class="texte-center-phone">Il accompagne ses clients à développer leur notoriété ou le trafic vers leur site web. Consultant et formateur indépendant, il t’accompagne à toucher la bonne cible au bon endroit avec le bon message !</p>
                                <div class="containerBoutonCarteLeft">
                                    <a class="btn bouton-rose uppercase" href="">Vers son site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carteExpertPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteRightExpertPageRessources">
                            <div class="carteRightExpert">
                                <p class="texte-end texte-center-phone">Il a créé un accompagnement à la frontière du coaching classique et de la thérapie pour aider ses clients à atteindre leurs objectifs de manière alignée et autonome. Si tu cherches à surmonter la peur du regard des autres, le syndrome de l'imposteur, le manque de confiance et plus encore, il est là pour t’aider à devenir la personne que tu désires être.</p>
                                <div class="containerBoutonCarteRight">
                                    <a class="btn bouton-rose uppercase" href="">Prendre RDV</a>
                                </div>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center col-4">
                                <div class="">
                                    <img class="h-10vh border-circle inputImgProfessionnel" src="images/ressources/42.png" alt="logo canva">
                                </div>
                                <div class="text-center">
                                    <div class="d-flex flex-column">
                                        <h3 class="m-0 uppercase color-pink4 titre-bold">Julien Paradis</h3>
                                        <h3 class="m-0 uppercase color-grey">Coaching Mindset</h3>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a class="inputReseaux" href="#"><i class="color-pink4 bi bi-instagram icon"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="carteExpertPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteLeftExpertPageRessources">
                            <div class="d-flex flex-column justify-content-center align-items-center col-4">
                                <div class="">
                                    <img class="h-10vh border-circle inputImgProfessionnel" src="images/ressources/43.png" alt="logo canva">
                                </div>
                                <div class="text-center">
                                    <div class="d-flex flex-column">
                                        <h3 class="m-0 uppercase color-pink4 titre-bold">Maeva Pithon</h3>
                                        <h3 class="m-0 uppercase color-grey">graphiste junior</h3>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a class="inputReseaux" href="#"><i class="color-pink4 bi bi-linkedin icon"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <p class="texte-center-phone">Maëva est étudiante en design graphique.
                                    Elle se fera un plaisir de répondre à tous tes projets de communication visuelle (logo, flyer, carte de visite…) et/ou d’illustration.

                                    Jette un œil à son Portfolio pour découvrir son univers !

                                    PS : C’est elle qui est derrière mon magnifique logo (et mes créa réseaux sociaux) 😉</p>
                                <div class="containerBoutonCarteLeft">
                                    <a class="btn bouton-rose uppercase" href="">Son portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="carteExpertPageRessources">
                    <div class="w-80p">
                        <div class="containerCarteRightExpertPageRessources">
                            <div class="carteRightExpert">
                                <p class="texte-end texte-center-phone">Elle rédige des tunnels de vente evergreen, éthique et fun pour les entrepreneures engagées.</p>
                                <div class="containerBoutonCarteRight">
                                    <a class="btn bouton-rose uppercase" href="">Vers son site</a>
                                </div>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center col-4">
                                <div class="">
                                    <img class="h-10vh border-circle inputImgProfessionnel" src="images/ressources/44.png" alt="logo canva">
                                </div>
                                <div class="text-center">
                                    <div class="d-flex flex-column">
                                        <h3 class="m-0 uppercase color-pink4 titre-bold">sandra doggwiller</h3>
                                        <h3 class="m-0 uppercase color-grey">Copywriter</h3>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a class="inputReseaux" href="#"><i class="color-pink4 bi bi-linkedin icon"></i></a>
                                        <a class="inputReseaux" href="#"><i class="color-pink4 bi bi-instagram icon"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               `
    }

}


/* Animation Page MonCoaching Versement  */

// Boutton : label Versment 1x/4x
const BoutonCheckVersement = document.querySelector('#checkVersement')


if (BoutonCheckVersement) {
    // carte Versement 1x
    const carteVersement1MonCoaching = document.querySelector('#carteVersement1MonCoaching')
// carte Versement 4x
    const carteVersement4MonCoaching = document.querySelector('#carteVersement4MonCoaching')

    BoutonCheckVersement.addEventListener('click', ()=>{
        carteVersement1MonCoaching.classList.toggle("carteVersementMonCoachingSelected")
        carteVersement4MonCoaching.classList.toggle("carteVersementMonCoachingSelected")
    })
}








/* Animation Page MonCoaching Accordion  */
const contentElementAccordion = document.querySelectorAll('.contentElementAccordion')
const contentTexteElementAccordion = document.querySelectorAll('.contentTexteElementAccordion')

for (let i = 0; i < contentElementAccordion.length; i++) {
    contentElementAccordion[i].addEventListener('click', ()=>{
        contentTexteElementAccordion[i].classList.toggle('contentElementAccordionActive')
        contentElementAccordion[i].classList.toggle('contentAccordionActive')
    })
}

