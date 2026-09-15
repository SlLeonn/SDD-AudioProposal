# Portable Guitar MultiFX

Propuesta académica para un prototipo semestral de una unidad portátil de práctica para guitarra. La presentación explica una entrada de guitarra, amplificación mediante un altavoz compacto y pocos efectos seleccionables, con la asequibilidad como objetivo de diseño.

## Alcance

El repositorio contiene una presentación estática y una guía de publicación. No representa un producto de producción ni define circuitos, certificaciones, objetivos de batería, objetivos de sonoridad o una cobertura amplia de efectos.

## Presentación local

La presentación local funciona sin red:

1. Abra `site/index.html` directamente en un navegador.
2. Use la navegación de la página o los enlaces nativos para recorrer sus secciones.
3. Si GitHub Pages no está disponible, presente este mismo archivo local como alternativa.

## Activar GitHub Pages

La publicación remota requiere una revisión y autorización separadas. Cuando el repositorio público esté preparado:

1. Confirme que `main` es la rama de publicación prevista.
2. En **Settings → Pages**, seleccione **GitHub Actions** como fuente de publicación.
3. Integre el flujo `.github/workflows/deploy-pages.yml` en `main` o ejecute el flujo manualmente desde `main`.
4. Revise la ejecución de Actions y la dirección publicada antes de utilizarla en la presentación.

El flujo empaqueta únicamente `./site`, por lo que los archivos de planificación de `openspec/` no forman parte del sitio público.
