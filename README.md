# Proyecto: SolucionesBT - API REST de Servicio Técnico

## 1. Integrantes del Equipo (Orden Alfabético)
*(Reemplaza estos datos con los de tu equipo)*
1. Apellido1, Nombre1 - Número de lista: #7
2. Apellido2, Nombre2 - Número de lista: #12
3. Apellido3, Nombre3 - Número de lista: #20

**Valor de N asignado:** 10
**Porcentaje de Recargo:** 10 * 2% = 20%

## 2. Descripción del Negocio
**SolucionesBT** es un servicio técnico especializado en la reparación de equipos de cómputo (portátiles, PCs e impresoras). Los clientes solicitan turnos para diagnosticar y reparar fallas. Si el equipo es requerido con urgencia por el cliente, el turno se marca como "prioritario", aplicando un recargo sobre la tarifa base según el parámetro N asignado al equipo.
**Datos que requiere un turno:** Nombre del cliente, tipo de equipo, falla reportada, precio base y si es prioritario (booleano).

## 3. Arquitectura del Proyecto
El proyecto implementa una arquitectura limpia por capas:
*   **`index.js`**: Inicializa Express, middlewares y el servidor.
*   **`routes/`**: Define los endpoints (`/api/turnos`).
*   **`controllers/`**: Maneja `req` y `res`, valida datos y asigna códigos HTTP (200, 201, 400, 404).
*   **`services/`**: Contiene la lógica de negocio y el cálculo del recargo.

## 4. Ejemplos de Peticiones HTTP (Pruebas)

### A. Caso Exitoso (POST) - Código 201 Created
Petición:
```json
{
  "nombreCliente": "Carlos Perez",
  "tipoEquipo": "Portátil",
  "fallaReportada": "No enciende",
  "precioBase": 50000,
  "prioritario": true
}