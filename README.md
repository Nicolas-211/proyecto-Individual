# proyecto-Individual

# 🧾 Sistema de Gestión de Correspondencia y Cheques - Tesis

## 📌 Índice

1. [Descripción General](#descripción-general)
2. [Actores del Sistema](#actores-del-sistema)
3. [Casos de Uso](#casos-de-uso)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Instalación y Ejecución](#instalación-y-ejecución)
7. [Funcionalidades Clave](#funcionalidades-clave)
8. [Mejoras con IA y Automatización](#mejoras-con-ia-y-automatización)
9. [Capturas del Sistema](#capturas-del-sistema)
10. [Roadmap de Mejoras](#roadmap-de-mejoras)

---

## 📖 Descripción General

Sistema desarrollado como parte de una tesis de título para la gestión digital de correspondencia y cheques en una organización. Permite a usuarios registrar documentos, adjuntar archivos PDF, visualizar historiales y generar reportes automatizados.

---

## 🧍‍♂️ Actores del Sistema

* **Administrador**
* **Usuario**

---

## 📄 Casos de Uso

### 🔁 Casos comunes para ambos roles:

* Iniciar sesión
* Visualizar tabla de cheques ingresados
* Visualizar tabla de correspondencia ingresada
* Generar informe

### 🔒 Exclusivos del Administrador:

* Agregar indicaciones o instrucciones
* Asignar roles a usuarios

### ✍️ Exclusivos del Usuario:

* Registrar nuevo usuario
* Ingresar correspondencia (con adjunto PDF)
* Ingresar cheque (con adjunto PDF)

---

## 🧰 Tecnologías Utilizadas

### Backend

* Node.js + Express / NestJS (modular por microservicio)
* PostgreSQL
* JWT Auth + Middleware personalizado
* Prisma ORM / Sequelize (dependiendo del MS)

### Frontend

* React + Vite
* TailwindCSS
* Shadcn/UI
* React Hook Form + TanStack Table

### IA & Automatización

* OpenRouter (GPT-4, Claude, Mistral)
* Nodemailer / SendGrid para correos
* Embeddings + resumen de PDFs (IA)

---

## 🗂️ Estructura del Proyecto

```
tesis/
├── frontend/
│   └── ...
├── backend/
│   ├── ms-usuario/
│   ├── ms-documentos/
│   ├── ms-cheques/
│   └── ...
├── bff/
│   ├── usuario-bff/
│   ├── documentos-bff/
│   └── cheques-bff/
├── scripts/
│   └── run-all.sh / run-all.ps1
└── README.md
```

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tesis-correspondencia.git
cd tesis-correspondencia
```

### 2. Instalar dependencias

```bash
cd backend/ms-usuario && npm install
cd ../../bff/usuario-bff && npm install
cd ../../../frontend && npm install
```

### 3. Ejecutar todo con script

```bash
# Linux/macOS
yarn workspace root run start:all

# o PowerShell en Windows
./scripts/run-all.ps1
```

### 4. Variables de entorno

Configurar los `.env` correspondientes en cada microservicio y BFF.

---

## ✅ Funcionalidades Clave

### 📥 Ingreso de Cheque

* Nº Oficio, Fecha, Origen, Serie, Monto, RIT
* Archivo PDF adjunto

### 📄 Ingreso de Correspondencia

* Año, Tipo de Ingreso, Tipo Documento, Nº Documento
* Fecha, RIT, Antecedentes, Origen, Distribución
* Observaciones, Archivo PDF

### 📊 Tablas con filtros avanzados

* Filtros por fechas, tipo, origen, etc.
* Visualización de PDF adjunto

### 🗃️ Gestión de Roles

* Asignación de permisos
* Visualización segmentada según tipo de usuario

---

## 🤖 Mejoras con IA y Automatización

### ✨ Inteligencia Artificial (OpenRouter)

* Clasificación automática del tipo de documento
* Generación de resumen del PDF
* Sugerencia de distribución
* Chat con IA entrenada con la documentación ingresada

### 📬 Automatización de Correos

* Envío de confirmación al ingresar documentos
* Reportes mensuales
* Notificaciones por instrucciones pendientes

### 📈 Estadísticas y Dashboard

* Visualización de ingresos por fecha
* Comparación mensual/anual
* Exportación en PDF/Excel

### 🔍 Búsqueda Inteligente

* Búsqueda por palabras clave o contenido de PDF (OCR opcional)

---

## 🖼️ Capturas del Sistema

(Puedes agregar aquí capturas de cada formulario o vista principal)

---

## 🛣️ Roadmap de Mejoras

* [ ] Integrar IA con resumen automático
* [ ] Implementar recordatorios por calendario
* [ ] Sistema de comentarios internos por documento
* [ ] Firma electrónica integrada
* [ ] Notificaciones en tiempo real

---

¿Tienes sugerencias o quieres contribuir? ¡Bienvenido/a! 🤝
