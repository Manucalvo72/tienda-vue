<template>
  <div>
    <!-- Botón de WhatsApp flotante -->
    <a
      href="https://wa.me/11234567890"  
      target="_blank"
      class="whatsapp-button"
    >
      <i class="fab fa-whatsapp"></i> 
    </a>
  </div>
</template>

<script>
export default {
  name: "WhatsAppButton"
};
</script>

<style scoped>
/* Estilos para el botón de WhatsApp flotante */
.whatsapp-button {
  position: fixed;
  bottom: 30px; /* Espaciado desde el fondo */
  right: 30px; /* Espaciado desde la derecha */
  background-color: #25d366; /* Verde de WhatsApp */
  color: white;
  font-size: 24px;
  border-radius: 50%; /* Hacemos que sea un círculo */
  width: 60px;
  height: 60px;
  display: flex;
   text-decoration: none;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave para el efecto flotante */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000; /* Asegura que el botón esté siempre encima */
  overflow: hidden; /* Asegura que no haya bordes extra alrededor del ícono */
}

/* Efecto de flotación */
.whatsapp-button:hover {
  transform: translateY(-10px); /* Eleva el botón al pasar el mouse */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada en hover */
}

/* Estilo para el icono dentro del botón */
.whatsapp-button i {
  font-size: 32px; /* Tamaño del icono de WhatsApp */
  margin: 0; /* Eliminar cualquier margen extra alrededor del icono */
  padding: 0; /* Eliminar el padding para asegurarnos de que el icono esté bien centrado */
  display: block; /* Asegura que el icono no tenga margen adicional */
}

</style>

