/* 9. Estilos de Galería de Proyectos (Para mostrar múltiples imágenes) */

.proyecto-galeria {
    display: flex;
    flex-wrap: wrap; /* Permite que las imágenes bajen en pantallas pequeñas */
    gap: 15px;
    margin: 20px 0;
    justify-content: center; /* Centra las imágenes si hay pocas */
}

.proyecto-galeria figure {
    flex: 1 1 calc(50% - 15px); /* Ocupa casi el 50% con espacio entre ellas */
    max-width: 350px; /* Tamaño máximo para que no sean demasiado grandes */
    margin: 0;
    text-align: center;
    border: 1px solid var(--color-borde);
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: var(--color-fondo-principal);
}

.galeria-img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.galeria-img:hover {
    transform: scale(1.03); /* Efecto zoom suave al pasar el ratón */
}

.proyecto-galeria figcaption {
    font-size: 0.8em;
    padding: 8px;
    color: var(--color-morado-claro);
    background-color: #383838;
}

/* Ajuste de Responsividad para la galería en móviles */
@media (max-width: 700px) {
    .proyecto-galeria figure {
        flex: 1 1 100%; /* Ocupa el 100% en pantallas muy pequeñas */
        max-width: 100%;
    }
}