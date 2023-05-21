function calcularDescuento() {
    const cantidadTickets = parseInt(document.getElementById("cantidadTickets").value);
    const categoria = document.getElementById("categoria").value;
    let descuento;

    switch (categoria) {
      case "estudiante":
        descuento = 0.8;
        break;
      case "trainee":
        descuento = 0.5;
        break;
      case "junior":
        descuento = 0.15;
        break;
      default:
        descuento = 0;
        break;
    }

    const valorTicket = 200;
    const totalDescuento = cantidadTickets * valorTicket * (1 - descuento);
    document.getElementById("resultado").value = `$${totalDescuento}`;
  }

  function borrarCampos() {
    document.getElementById("formCantidad").reset();
    document.getElementById("formCategoria").reset();
    document.getElementById("formResultado").reset();
    document.getElementById("formNombre").reset();
    document.getElementById("formApellido").reset();
    document.getElementById("formCorreo").reset();

  }