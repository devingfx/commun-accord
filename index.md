---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: blox
# title: maaat



header:
  topbar:
    - phone: +36 66 45 89 54
    - envelope: aze@exemple.com
    - geo-alt: Ardèche / Côte d'Azur
  mode: fixed-top
#   offset: 500px
  logo:
    text: "MSpianos"
    # image: ....
    url: "#"
  nav:
    align: right
  
hero:
  center-text:
    image: ../img/backgrounds/w1920/Acceuil.jpg
    title: "**Sarrazy** Mathieu"
    texts:
      - Technicien, accordeur / restaurateur de piano
      - Diplômé de l’école Ignace Pleyel à Loos
    actions:
      - label: Contactez moi
        url: "#contact"  


# hero:
#   carousel:
#   - image: assets/img/backgrounds/w1920/abstract-2178720.jpg
#     title: "**Sarrazy** Mathieu"
#     texts:
#       - Technicien, accordeur / restaurateur de piano
#       - Diplômé de l’école Ignace Pleyel à Loos
#     actions:
#       - label: Contactez moi
#         url: "#contact"
  
#   - image: assets/img/backgrounds/w1920/piano-4487573.jpg
#     title: Lorem Ipsum Dolor
#     texts:
#       - Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
#     actions:
#       - label: En savoir +
#         url: "#menu"
#       - label: Reserver
#         url: "#book-a-table"
  
#   - image: assets/img/backgrounds/w1920/piano-2308370.jpg
#     title: Sequi ea ut et est quaerat
#     texts:
#       - Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
#     actions:
#       - label: Faire un don
#         url: "#menu"


# Accord
accord:
  columns:
    - size: 7
      offset: 1
      content: _subjects/accord.md
      class: content
    # - size: 5
    #   background: assets/img/about.png

# Réglage mécanique
reglage:
  columns:
    # - size: 5
    #   background: assets/img/about.png
    - size: 7
      offset: 4
      content: _subjects/reglage.md
      class: content

# Harmonisation
harmonisation:
  columns:
    - size: 7
      offset: 1
      content: _subjects/harmonisation.md
      class: content
    # - size: 5
    #   background: assets/img/about.png

# Réparation
reparation:
  columns:
    # - size: 5
    #   background: assets/img/about.png
    - size: 7
      offset: 4
      content: _subjects/reparation.md
      class: content

# Restauration, Ébénisterie & Laque
restauration:
  columns:
    - size: 7
      offset: 1
      content: _subjects/restauration.md
      class: content
    # - size: 5
    #   background: assets/img/about.png

# Le numérique dans l’acoustique
numerique:
  columns:
    # - size: 5
    #   background: assets/img/about.png
    - size: 7
      offset: 4
      content: _subjects/numerique.md
      class: content



# Présentation
about:
#   about:
#     image: assets/img/about.png
  
#   layout: columns

  columns:
#     - size: 5
#       background: assets/img/about.png
#       class: video-box
#       content:
#         - <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
    - size: 12
    #   offset: 4
      content: _subjects/presentation.md
      class: content
#       content: |
#         ### Technicien, accordeur / restaurateur de piano
#         > Diplômé de l’école Ignace Pleyel à Loos
        
#         Mon parcours est quelque peu atypique. Ingénieur en mécanique, j’ai conçu et élaboré des machines automatisées et robotisées pour de nombreux secteurs de l’industrie pendant plus de 15 ans.
        
#         Vers mes 40 ans, j’ai eu besoin de trouver du manuel et du mouvement dans ma profession tout en gardant de la technique et de l’intellectuel, de trouver de la proximité avec les gens, de me recentrer sur des valeurs plus simples et artisanales. Un travail plus humain et plus riche de sens.
        
#         Je me suis longuement questionné sur un métier qui me permettrait de faire le lien entre ma personnalité, ma créativité, mon besoin de rigueur, la technique et le manuel. Toutes ces réflexions m’ont amené à conclure que le métier d’accordeur restaurateur de piano en serait ma synthèse.


  
# Gallerie
atelier:
  gallery: _subjects/atelier.md
    # photos:
    #   - assets/img/gallery/piano-462320.jpg
    #   - assets/img/gallery/piano-915784.jpg

# Contact
contact:
  contact:
    form:
      mailto: contact@exemple.com



---
