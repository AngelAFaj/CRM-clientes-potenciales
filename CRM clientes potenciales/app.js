/**
 * CRM System - Main Application
 * Sistema de gestión de clientes potenciales con roles: Admin, Gerente, Asesor
 */

class CRMApp {
    constructor() {
        this.currentUser = null;
        this.currentRole = null;
        this.isAuthenticated = false;
        
        // Mock data
        this.users = [
            { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Administrador', hidden: true },
            { id: 2, username: 'manager', password: 'manager123', role: 'manager', name: 'Gerente de Ventas' },
            { id: 3, username: 'advisor', password: 'advisor123', role: 'advisor', name: 'Asesor' },
            { id: 4, username: 'advisor2', password: 'advisor123', role: 'advisor', name: 'Asesor 2', hidden: true },
            { id: 5, username: 'advisor3', password: 'advisor123', role: 'advisor', name: 'Asesor 3', hidden: true }
        ];
        
        this.leads = [
            {
                id: 1,
                name: 'Juan Pérez',
                company: 'Empresa ABC',
                email: 'juan@empresaabc.com',
                phone: '+1234567890',
                status: 'Calificar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Cliente potencial interesado en nuestros servicios',
                createdAt: new Date('2024-01-15'),
                lastActivity: new Date('2024-01-20')
            },
            {
                id: 2,
                name: 'María García',
                company: 'Corporación XYZ',
                email: 'maria@corporacionxyz.com',
                phone: '+1234567891',
                status: 'Desarrollar',
                interest: 'Medianamente interesado',
                interestLevel: 'Medianamente interesado',
                advisor: 'Asesor',
                notes: 'En proceso de desarrollo de propuesta',
                createdAt: new Date('2024-01-10'),
                lastActivity: new Date('2024-01-19')
            },
            {
                id: 3,
                name: 'Carlos López',
                company: 'Industrias DEF',
                email: 'carlos@industriasdef.com',
                phone: '+1234567892',
                status: 'Proponer',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Listo para propuesta final',
                createdAt: new Date('2024-01-05'),
                lastActivity: new Date('2024-01-18')
            },
            {
                id: 4,
                name: 'Ana Martínez',
                company: 'Servicios GHI',
                email: 'ana@serviciosghi.com',
                phone: '+1234567893',
                status: 'Cierre',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Cliente cerrado exitosamente',
                createdAt: new Date('2024-01-01'),
                lastActivity: new Date('2024-01-17')
            },
            {
                id: 5,
                name: 'Roberto Silva',
                company: 'Tecnologías JKL',
                email: 'roberto@tecnologiasjkl.com',
                phone: '+1234567894',
                status: 'Calificar',
                interest: 'Poco interesado',
                interestLevel: 'Poco interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente con bajo nivel de interés inicial',
                createdAt: new Date('2024-01-12'),
                lastActivity: new Date('2024-01-16')
            },
            {
                id: 6,
                name: 'Laura Rodríguez',
                company: 'Consultoría MNO',
                email: 'laura@consultoriamno.com',
                phone: '+1234567895',
                status: 'Desarrollar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente muy interesado, necesita seguimiento constante',
                createdAt: new Date('2024-01-08'),
                lastActivity: new Date('2024-01-21')
            },
            {
                id: 7,
                name: 'Miguel Torres',
                company: 'Grupo PQR',
                email: 'miguel@grupopqr.com',
                phone: '+1234567896',
                status: 'Proponer',
                interest: 'Medianamente interesado',
                interestLevel: 'Medianamente interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente en fase de negociación avanzada',
                createdAt: new Date('2024-01-03'),
                lastActivity: new Date('2024-01-20')
            },
            {
                id: 8,
                name: 'Sofia Herrera',
                company: 'Innovaciones STU',
                email: 'sofia@innovacionesstu.com',
                phone: '+1234567897',
                status: 'Cierre',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente cerrado con éxito, muy satisfecho',
                createdAt: new Date('2023-12-28'),
                lastActivity: new Date('2024-01-15')
            },
            {
                id: 9,
                name: 'Diego Morales',
                company: 'Soluciones VWX',
                email: 'diego@solucionesvwx.com',
                phone: '+1234567898',
                status: 'Calificar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente nuevo, requiere evaluación inicial',
                createdAt: new Date('2024-01-18'),
                lastActivity: new Date('2024-01-22')
            },
            {
                id: 10,
                name: 'Valentina Castro',
                company: 'Empresas YZA',
                email: 'valentina@empresasyza.com',
                phone: '+1234567899',
                status: 'Desarrollar',
                interest: 'Poco interesado',
                interestLevel: 'Poco interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente con dudas, necesita más información',
                createdAt: new Date('2024-01-14'),
                lastActivity: new Date('2024-01-19')
            },
            // Leads adicionales para Asesor
            {
                id: 11,
                name: 'Elena Ruiz',
                company: 'Digital Marketing Pro',
                email: 'elena@digitalmarketing.com',
                phone: '+1111222333',
                status: 'Desarrollar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Cliente en proceso de calificación avanzada',
                createdAt: new Date('2024-01-14'),
                lastActivity: new Date('2024-01-21')
            },
            {
                id: 12,
                name: 'Miguel Torres',
                company: 'Cloud Solutions Inc',
                email: 'miguel@cloudsolutions.com',
                phone: '+2222333444',
                status: 'Cierre',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Cliente cerrado con éxito',
                createdAt: new Date('2024-01-02'),
                lastActivity: new Date('2024-01-16')
            },
            {
                id: 13,
                name: 'Luis Rodríguez',
                company: 'Global Systems',
                email: 'luis@global.com',
                phone: '+9988776655',
                status: 'Calificar',
                interest: 'Poco interesado',
                interestLevel: 'Poco interesado',
                advisor: 'Asesor',
                notes: 'Cliente con bajo interés inicial',
                createdAt: new Date('2024-01-12'),
                lastActivity: new Date('2024-01-17')
            },
            // Leads adicionales para Asesor 2
            {
                id: 14,
                name: 'Andrés Jiménez',
                company: 'Tech Startups',
                email: 'andres@techstartups.com',
                phone: '+3333444555',
                status: 'Calificar',
                interest: 'Poco interesado',
                interestLevel: 'Poco interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente con interés limitado',
                createdAt: new Date('2024-01-13'),
                lastActivity: new Date('2024-01-19')
            },
            {
                id: 15,
                name: 'Isabella Moreno',
                company: 'Innovation Labs',
                email: 'isabella@innovationlabs.com',
                phone: '+4444555666',
                status: 'Desarrollar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente muy prometedor',
                createdAt: new Date('2024-01-06'),
                lastActivity: new Date('2024-01-18')
            },
            {
                id: 16,
                name: 'Sebastián Vargas',
                company: 'Data Analytics Co',
                email: 'sebastian@dataanalytics.com',
                phone: '+5555666777',
                status: 'Proponer',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente listo para propuesta',
                createdAt: new Date('2024-01-04'),
                lastActivity: new Date('2024-01-17')
            },
            {
                id: 17,
                name: 'Camila Rojas',
                company: 'AI Solutions',
                email: 'camila@aisolutions.com',
                phone: '+6666777888',
                status: 'Cierre',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente cerrado exitosamente',
                createdAt: new Date('2024-01-09'),
                lastActivity: new Date('2024-01-15')
            },
            // Leads adicionales para Asesor 3
            {
                id: 18,
                name: 'Fernando Aguilar',
                company: 'Blockchain Tech',
                email: 'fernando@blockchain.com',
                phone: '+7777888999',
                status: 'Proponer',
                interest: 'Medianamente interesado',
                interestLevel: 'Medianamente interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente interesado en blockchain',
                createdAt: new Date('2024-01-16'),
                lastActivity: new Date('2024-01-20')
            },
            {
                id: 19,
                name: 'Patricia Mendoza',
                company: 'Green Energy Corp',
                email: 'patricia@greenenergy.com',
                phone: '+8888999000',
                status: 'Cierre',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente cerrado con éxito',
                createdAt: new Date('2024-01-12'),
                lastActivity: new Date('2024-01-19')
            },
            {
                id: 20,
                name: 'Ricardo Peña',
                company: 'FinTech Solutions',
                email: 'ricardo@fintech.com',
                phone: '+9999000111',
                status: 'Calificar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente del sector financiero',
                createdAt: new Date('2024-01-18'),
                lastActivity: new Date('2024-01-21')
            },
            {
                id: 21,
                name: 'Gabriela Flores',
                company: 'HealthTech Inc',
                email: 'gabriela@healthtech.com',
                phone: '+0000111222',
                status: 'Desarrollar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente del sector salud',
                createdAt: new Date('2024-01-17'),
                lastActivity: new Date('2024-01-22')
            },
            {
                id: 22,
                name: 'Héctor Ramírez',
                company: 'EduTech Solutions',
                email: 'hector@edutech.com',
                phone: '+1111222333',
                status: 'Proponer',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente del sector educativo',
                createdAt: new Date('2024-01-15'),
                lastActivity: new Date('2024-01-23')
            },
            // Clientes fidelizados
            {
                id: 23,
                name: 'Elena Rodríguez',
                company: 'Corporación Elena',
                email: 'elena@corporacionelena.com',
                phone: '+1234567904',
                status: 'Fidelizado',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Cliente fidelizado con contrato anual renovado',
                createdAt: new Date('2023-12-01'),
                lastActivity: new Date('2024-01-20'),
                clientType: 'fidelizado',
                contractValue: 50000,
                renewalDate: new Date('2024-12-01')
            },
            {
                id: 24,
                name: 'Miguel Torres',
                company: 'Torres & Asociados',
                email: 'miguel@torresasociados.com',
                phone: '+1234567905',
                status: 'Fidelizado',
                interest: 'Medianamente interesado',
                interestLevel: 'Medianamente interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente premium con múltiples servicios contratados',
                createdAt: new Date('2023-11-15'),
                lastActivity: new Date('2024-01-19'),
                clientType: 'fidelizado',
                contractValue: 75000,
                renewalDate: new Date('2024-11-15')
            },
            {
                id: 25,
                name: 'Isabel Morales',
                company: 'Morales Industries',
                email: 'isabel@moralesindustries.com',
                phone: '+1234567906',
                status: 'Fidelizado',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor 3',
                notes: 'Cliente estratégico con crecimiento constante',
                createdAt: new Date('2023-10-20'),
                lastActivity: new Date('2024-01-21'),
                clientType: 'fidelizado',
                contractValue: 100000,
                renewalDate: new Date('2024-10-20')
            },
            {
                id: 26,
                name: 'Carlos Mendoza',
                company: 'Mendoza Corp',
                email: 'carlos@mendozacorp.com',
                phone: '+1234567907',
                status: 'Fidelizado',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                advisor: 'Asesor',
                notes: 'Cliente de larga data con excelente relación comercial',
                createdAt: new Date('2023-09-10'),
                lastActivity: new Date('2024-01-22'),
                clientType: 'fidelizado',
                contractValue: 60000,
                renewalDate: new Date('2024-09-10')
            },
            {
                id: 27,
                name: 'Patricia Vega',
                company: 'Vega Solutions',
                email: 'patricia@vegasolutions.com',
                phone: '+1234567908',
                status: 'Fidelizado',
                interest: 'Medianamente interesado',
                interestLevel: 'Medianamente interesado',
                advisor: 'Asesor 2',
                notes: 'Cliente con potencial de expansión en nuevos mercados',
                createdAt: new Date('2023-08-05'),
                lastActivity: new Date('2024-01-23'),
                clientType: 'fidelizado',
                contractValue: 45000,
                renewalDate: new Date('2024-08-05')
            }
        ];
        
        this.tasks = [
            {
                id: 1,
                leadId: 1,
                type: 'Llamada',
                dueDate: new Date('2024-01-22T10:00:00'),
                duration: 30,
                status: 'programada',
                notes: 'Llamada de seguimiento inicial',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-20')
            },
            {
                id: 2,
                leadId: 2,
                type: 'Correo',
                dueDate: new Date('2024-01-23T14:00:00'),
                duration: 15,
                status: 'abierto',
                notes: 'Enviar propuesta por correo',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-19')
            },
            {
                id: 3,
                leadId: 3,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-24T16:00:00'),
                duration: 60,
                status: 'programada',
                notes: 'Reunión para presentar propuesta final',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-18')
            },
            {
                id: 4,
                leadId: 4,
                type: 'Mensaje',
                dueDate: new Date('2024-01-25T09:00:00'),
                duration: 10,
                status: 'completada',
                notes: 'Mensaje de confirmación de cierre',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-17'),
                completedAt: new Date('2024-01-17T10:30:00'),
                completionNotes: 'Mensaje enviado exitosamente, cliente confirmó cierre'
            },
            {
                id: 5,
                leadId: 5,
                type: 'Llamada',
                dueDate: new Date('2024-01-26T11:00:00'),
                duration: 45,
                status: 'abierto',
                notes: 'Llamada para evaluar interés del cliente',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-16')
            },
            {
                id: 6,
                leadId: 6,
                type: 'Correo',
                dueDate: new Date('2024-01-27T15:00:00'),
                duration: 20,
                status: 'programada',
                notes: 'Enviar información adicional solicitada',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-21')
            },
            {
                id: 7,
                leadId: 7,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-28T14:00:00'),
                duration: 90,
                status: 'abierto',
                notes: 'Reunión de negociación final',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-20')
            },
            {
                id: 8,
                leadId: 8,
                type: 'Mensaje',
                dueDate: new Date('2024-01-29T16:00:00'),
                duration: 5,
                status: 'completada',
                notes: 'Mensaje de agradecimiento post-venta',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-15'),
                completedAt: new Date('2024-01-15T17:00:00'),
                completionNotes: 'Cliente muy satisfecho con el servicio'
            },
            {
                id: 9,
                leadId: 9,
                type: 'Llamada',
                dueDate: new Date('2024-01-30T10:30:00'),
                duration: 30,
                status: 'programada',
                notes: 'Llamada de calificación inicial',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-22')
            },
            {
                id: 10,
                leadId: 10,
                type: 'Correo',
                dueDate: new Date('2024-01-31T12:00:00'),
                duration: 25,
                status: 'abierto',
                notes: 'Enviar propuesta personalizada',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-19')
            },
            {
                id: 11,
                leadId: 1,
                type: 'Mensaje',
                dueDate: new Date('2024-02-01T09:00:00'),
                duration: 10,
                status: 'programada',
                notes: 'Recordatorio de seguimiento',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-21')
            },
            {
                id: 12,
                leadId: 2,
                type: 'Llamada',
                dueDate: new Date('2024-02-02T14:00:00'),
                duration: 40,
                status: 'abierto',
                notes: 'Llamada de seguimiento de propuesta',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-20')
            },
            {
                id: 13,
                leadId: 3,
                type: 'Correo',
                dueDate: new Date(),
                duration: 20,
                status: 'abierto',
                notes: 'Enviar propuesta detallada al cliente',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-22'),
                priority: 'Alta'
            },
            {
                id: 14,
                leadId: 4,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-26T15:00:00'),
                duration: 60,
                status: 'programada',
                notes: 'Presentación final de propuesta',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-23'),
                priority: 'Urgente'
            },
            {
                id: 15,
                leadId: 5,
                type: 'Mensaje',
                dueDate: new Date('2024-01-24T11:00:00'),
                duration: 10,
                status: 'completada',
                notes: 'Confirmación de cita',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-21'),
                completedAt: new Date('2024-01-24T11:30:00'),
                completionNotes: 'Cliente confirmó la cita para mañana',
                priority: 'Media'
            },
            {
                id: 16,
                leadId: 6,
                type: 'Llamada',
                dueDate: new Date('2024-01-27T10:00:00'),
                duration: 30,
                status: 'abierto',
                notes: 'Llamada de calificación inicial',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-24'),
                priority: 'Baja'
            },
            {
                id: 17,
                leadId: 7,
                type: 'Correo',
                dueDate: new Date('2024-01-28T14:00:00'),
                duration: 25,
                status: 'programada',
                notes: 'Enviar información adicional solicitada',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-25'),
                priority: 'Media'
            },
            {
                id: 18,
                leadId: 8,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-29T16:00:00'),
                duration: 90,
                status: 'abierto',
                notes: 'Reunión de negociación',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-26'),
                priority: 'Alta'
            },
            {
                id: 19,
                leadId: 9,
                type: 'Mensaje',
                dueDate: new Date('2024-01-30T09:00:00'),
                duration: 5,
                status: 'abierto',
                notes: 'Recordatorio de seguimiento',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-27'),
                priority: 'Baja'
            },
            {
                id: 20,
                leadId: 10,
                type: 'Llamada',
                dueDate: new Date('2024-01-31T15:00:00'),
                duration: 45,
                status: 'programada',
                notes: 'Llamada de cierre de venta',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-28'),
                priority: 'Urgente'
            },
            {
                id: 21,
                leadId: 1,
                type: 'Reunión presencial',
                dueDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 horas desde ahora
                duration: 60,
                status: 'programada',
                notes: 'Reunión de seguimiento con cliente',
                advisor: 'Asesor',
                createdAt: new Date(),
                priority: 'Alta'
            },
            // Tareas adicionales para Asesor
            {
                id: 22,
                leadId: 11,
                type: 'Correo',
                dueDate: new Date('2024-01-25T14:00:00'),
                duration: 25,
                status: 'completada',
                notes: 'Enviar propuesta de marketing digital',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-21'),
                completedAt: new Date('2024-01-25T14:30:00'),
                completionNotes: 'Propuesta enviada exitosamente',
                priority: 'Alta'
            },
            {
                id: 23,
                leadId: 12,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-26T16:00:00'),
                duration: 90,
                status: 'completada',
                notes: 'Reunión de cierre de venta',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-20'),
                completedAt: new Date('2024-01-26T17:30:00'),
                completionNotes: 'Cliente cerrado exitosamente',
                priority: 'Urgente'
            },
            {
                id: 24,
                leadId: 13,
                type: 'Mensaje',
                dueDate: new Date('2024-01-27T09:00:00'),
                duration: 10,
                status: 'abierto',
                notes: 'Seguimiento de interés del cliente',
                advisor: 'Asesor',
                createdAt: new Date('2024-01-22'),
                priority: 'Media'
            },
            // Tareas adicionales para Asesor 2
            {
                id: 25,
                leadId: 14,
                type: 'Llamada',
                dueDate: new Date('2024-01-25T11:00:00'),
                duration: 45,
                status: 'completada',
                notes: 'Llamada de calificación inicial',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-21'),
                completedAt: new Date('2024-01-25T11:45:00'),
                completionNotes: 'Cliente mostró interés moderado',
                priority: 'Media'
            },
            {
                id: 26,
                leadId: 15,
                type: 'Correo',
                dueDate: new Date('2024-01-26T15:00:00'),
                duration: 30,
                status: 'completada',
                notes: 'Enviar propuesta de innovación',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-22'),
                completedAt: new Date('2024-01-26T15:30:00'),
                completionNotes: 'Propuesta enviada, esperando respuesta',
                priority: 'Alta'
            },
            {
                id: 27,
                leadId: 16,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-28T14:00:00'),
                duration: 60,
                status: 'programada',
                notes: 'Presentación de propuesta de analytics',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-23'),
                priority: 'Alta'
            },
            {
                id: 28,
                leadId: 17,
                type: 'Mensaje',
                dueDate: new Date('2024-01-27T16:00:00'),
                duration: 15,
                status: 'completada',
                notes: 'Confirmación de cierre de venta',
                advisor: 'Asesor 2',
                createdAt: new Date('2024-01-24'),
                completedAt: new Date('2024-01-27T16:15:00'),
                completionNotes: 'Cliente confirmó el cierre',
                priority: 'Urgente'
            },
            // Tareas adicionales para Asesor 3
            {
                id: 29,
                leadId: 18,
                type: 'Llamada',
                dueDate: new Date('2024-01-26T10:00:00'),
                duration: 40,
                status: 'completada',
                notes: 'Llamada de presentación de blockchain',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-22'),
                completedAt: new Date('2024-01-26T10:40:00'),
                completionNotes: 'Cliente muy interesado en la tecnología',
                priority: 'Alta'
            },
            {
                id: 30,
                leadId: 19,
                type: 'Correo',
                dueDate: new Date('2024-01-27T12:00:00'),
                duration: 20,
                status: 'completada',
                notes: 'Enviar propuesta de energía verde',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-23'),
                completedAt: new Date('2024-01-27T12:20:00'),
                completionNotes: 'Propuesta enviada, cliente muy satisfecho',
                priority: 'Media'
            },
            {
                id: 31,
                leadId: 20,
                type: 'Reunión presencial',
                dueDate: new Date('2024-01-29T15:00:00'),
                duration: 75,
                status: 'programada',
                notes: 'Reunión de presentación FinTech',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-24'),
                priority: 'Alta'
            },
            {
                id: 32,
                leadId: 21,
                type: 'Mensaje',
                dueDate: new Date('2024-01-28T09:00:00'),
                duration: 10,
                status: 'abierto',
                notes: 'Seguimiento de propuesta HealthTech',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-25'),
                priority: 'Media'
            },
            {
                id: 33,
                leadId: 22,
                type: 'Llamada',
                dueDate: new Date('2024-01-30T11:00:00'),
                duration: 35,
                status: 'abierto',
                notes: 'Llamada de seguimiento EduTech',
                advisor: 'Asesor 3',
                createdAt: new Date('2024-01-26'),
                priority: 'Baja'
            },
            {
                id: 34,
                leadId: 2,
                type: 'Mensaje',
                dueDate: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 horas desde ahora
                duration: 10,
                status: 'abierto',
                notes: 'Enviar recordatorio de propuesta',
                advisor: 'Asesor',
                createdAt: new Date(),
                priority: 'Media'
            },
            {
                id: 23,
                leadId: 3,
                type: 'Llamada',
                dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Mañana
                duration: 30,
                status: 'programada',
                notes: 'Llamada de calificación inicial',
                advisor: 'Asesor',
                createdAt: new Date(),
                priority: 'Baja'
            }
        ];
        
        this.sequences = [
            {
                id: 1,
                name: 'Secuencia Calificación',
                state: 'Calificar',
                interest: '',
                actions: [
                    { type: 'Llamada', repetitions: 1, delay: 0, maxTime: 1 },
                    { type: 'Mensaje', repetitions: 1, delay: 24, maxTime: 3 }
                ]
            },
            {
                id: 2,
                name: 'Secuencia Desarrollo',
                state: 'Desarrollar',
                interest: '',
                actions: [
                    { type: 'Correo', repetitions: 1, delay: 0, maxTime: 2 },
                    { type: 'Llamada', repetitions: 2, delay: 48, maxTime: 5 },
                    { type: 'Reunión presencial', repetitions: 1, delay: 72, maxTime: 7 }
                ]
            },
            {
                id: 3,
                name: 'Secuencia Propuesta',
                state: 'Proponer',
                interest: '',
                actions: [
                    { type: 'Correo', repetitions: 1, delay: 0, maxTime: 1 },
                    { type: 'Llamada', repetitions: 1, delay: 24, maxTime: 3 },
                    { type: 'Reunión presencial', repetitions: 1, delay: 48, maxTime: 5 }
                ]
            },
            {
                id: 4,
                name: 'Secuencia Cierre',
                state: 'Cierre',
                interest: '',
                actions: [
                    { type: 'Llamada', repetitions: 1, delay: 0, maxTime: 1 },
                    { type: 'Mensaje', repetitions: 1, delay: 2, maxTime: 2 }
                ]
            },
            {
                id: 5,
                name: 'Secuencia Alto Interés',
                state: 'Desarrollar',
                interest: 'Interesado',
                interestLevel: 'Interesado',
                actions: [
                    { type: 'Llamada', repetitions: 2, delay: 0, maxTime: 1 },
                    { type: 'Correo', repetitions: 1, delay: 12, maxTime: 2 },
                    { type: 'Reunión presencial', repetitions: 1, delay: 24, maxTime: 3 }
                ]
            },
            {
                id: 6,
                name: 'Secuencia Bajo Interés',
                state: 'Calificar',
                interest: 'Poco interesado',
                interestLevel: 'Poco interesado',
                actions: [
                    { type: 'Mensaje', repetitions: 1, delay: 0, maxTime: 2 },
                    { type: 'Llamada', repetitions: 1, delay: 48, maxTime: 5 }
                ]
            }
        ];
        
        this.kpis = {
            global: {
                dailyTargetClients: 10,
                weeklyConversionTarget: 15,
                maxDaysPerState: 7
            },
            advisor: {
                'Asesor': {
                    dailyTarget: 5,
                    weeklyTarget: 3,
                    maxActionsPerDay: 10
                },
                'Asesor 2': {
                    dailyTarget: 6,
                    weeklyTarget: 4,
                    maxActionsPerDay: 12
                },
                'Asesor 3': {
                    dailyTarget: 4,
                    weeklyTarget: 2,
                    maxActionsPerDay: 8
                }
            }
        };
        
        this.activities = [
            {
                id: 1,
                leadId: 1,
                type: 'Lead creado',
                description: 'Nuevo lead agregado al sistema',
                user: 'Asesor',
                timestamp: new Date('2024-01-15T09:00:00')
            },
            {
                id: 2,
                leadId: 1,
                type: 'Llamada realizada',
                description: 'Llamada inicial de contacto exitosa',
                user: 'Asesor',
                timestamp: new Date('2024-01-16T10:30:00')
            },
            {
                id: 3,
                leadId: 2,
                type: 'Lead creado',
                description: 'Lead agregado desde formulario web',
                user: 'Asesor',
                timestamp: new Date('2024-01-10T14:20:00')
            },
            {
                id: 4,
                leadId: 2,
                type: 'Correo enviado',
                description: 'Propuesta inicial enviada por correo',
                user: 'Asesor',
                timestamp: new Date('2024-01-12T16:45:00')
            },
            {
                id: 5,
                leadId: 3,
                type: 'Lead creado',
                description: 'Lead calificado como interesado',
                user: 'Asesor',
                timestamp: new Date('2024-01-05T11:15:00')
            },
            {
                id: 6,
                leadId: 3,
                type: 'Reunión programada',
                description: 'Reunión presencial agendada para presentar propuesta',
                user: 'Asesor',
                timestamp: new Date('2024-01-18T15:00:00')
            },
            {
                id: 7,
                leadId: 4,
                type: 'Lead creado',
                description: 'Lead de referencia de cliente existente',
                user: 'Asesor',
                timestamp: new Date('2024-01-01T08:30:00')
            },
            {
                id: 8,
                leadId: 4,
                type: 'Cierre exitoso',
                description: 'Cliente cerrado con éxito, contrato firmado',
                user: 'Asesor',
                timestamp: new Date('2024-01-17T17:20:00')
            },
            {
                id: 9,
                leadId: 5,
                type: 'Lead creado',
                description: 'Lead con bajo nivel de interés inicial',
                user: 'Asesor',
                timestamp: new Date('2024-01-12T13:45:00')
            },
            {
                id: 10,
                leadId: 5,
                type: 'Mensaje enviado',
                description: 'Mensaje de seguimiento para evaluar interés',
                user: 'Asesor',
                timestamp: new Date('2024-01-16T09:30:00')
            },
            {
                id: 11,
                leadId: 6,
                type: 'Lead creado',
                description: 'Lead muy interesado, alta prioridad',
                user: 'Asesor',
                timestamp: new Date('2024-01-08T10:00:00')
            },
            {
                id: 12,
                leadId: 6,
                type: 'Llamada realizada',
                description: 'Llamada de seguimiento, cliente muy receptivo',
                user: 'Asesor',
                timestamp: new Date('2024-01-21T14:15:00')
            },
            {
                id: 13,
                leadId: 7,
                type: 'Lead creado',
                description: 'Lead en fase de negociación avanzada',
                user: 'Asesor',
                timestamp: new Date('2024-01-03T16:20:00')
            },
            {
                id: 14,
                leadId: 7,
                type: 'Reunión realizada',
                description: 'Reunión de negociación, progreso positivo',
                user: 'Asesor',
                timestamp: new Date('2024-01-20T11:00:00')
            },
            {
                id: 15,
                leadId: 8,
                type: 'Lead creado',
                description: 'Lead cerrado exitosamente',
                user: 'Asesor',
                timestamp: new Date('2023-12-28T12:00:00')
            },
            {
                id: 16,
                leadId: 8,
                type: 'Cierre exitoso',
                description: 'Cliente muy satisfecho, recomendación obtenida',
                user: 'Asesor',
                timestamp: new Date('2024-01-15T16:30:00')
            },
            {
                id: 17,
                leadId: 9,
                type: 'Lead creado',
                description: 'Nuevo lead, requiere evaluación inicial',
                user: 'Asesor',
                timestamp: new Date('2024-01-18T09:45:00')
            },
            {
                id: 18,
                leadId: 9,
                type: 'Llamada programada',
                description: 'Llamada de calificación agendada',
                user: 'Asesor',
                timestamp: new Date('2024-01-22T10:00:00')
            },
            {
                id: 19,
                leadId: 10,
                type: 'Lead creado',
                description: 'Lead con dudas, necesita más información',
                user: 'Asesor',
                timestamp: new Date('2024-01-14T15:30:00')
            },
            {
                id: 20,
                leadId: 10,
                type: 'Correo enviado',
                description: 'Información adicional enviada al cliente',
                user: 'Asesor',
                timestamp: new Date('2024-01-19T12:15:00')
            },
            // Actividades adicionales para clientes fidelizados
            {
                id: 21,
                leadId: 23,
                type: 'Cliente fidelizado',
                description: 'Cliente convertido a fidelizado con contrato anual de $50,000',
                user: 'Asesor',
                timestamp: new Date('2023-12-01T10:00:00')
            },
            {
                id: 22,
                leadId: 23,
                type: 'Contrato firmado',
                description: 'Contrato anual firmado exitosamente',
                user: 'Asesor',
                timestamp: new Date('2023-12-02T14:30:00')
            },
            {
                id: 23,
                leadId: 23,
                type: 'Reunión de seguimiento',
                description: 'Reunión mensual de seguimiento realizada',
                user: 'Asesor',
                timestamp: new Date('2024-01-05T15:00:00')
            },
            {
                id: 24,
                leadId: 24,
                type: 'Cliente premium',
                description: 'Cliente premium con múltiples servicios contratados',
                user: 'Asesor 2',
                timestamp: new Date('2023-11-15T09:15:00')
            },
            {
                id: 25,
                leadId: 24,
                type: 'Renovación de contrato',
                description: 'Contrato renovado por $75,000',
                user: 'Asesor 2',
                timestamp: new Date('2023-11-16T11:45:00')
            },
            {
                id: 26,
                leadId: 24,
                type: 'Seguimiento activo',
                description: 'Seguimiento activo con cliente premium',
                user: 'Asesor 2',
                timestamp: new Date('2024-01-10T10:30:00')
            },
            {
                id: 27,
                leadId: 25,
                type: 'Cliente estratégico',
                description: 'Cliente estratégico con crecimiento constante',
                user: 'Asesor 3',
                timestamp: new Date('2023-10-20T13:20:00')
            },
            {
                id: 28,
                leadId: 25,
                type: 'Contrato premium',
                description: 'Contrato de $100,000 firmado',
                user: 'Asesor 3',
                timestamp: new Date('2023-10-21T15:30:00')
            },
            {
                id: 29,
                leadId: 25,
                type: 'Expansión de servicios',
                description: 'Servicios expandidos por crecimiento del cliente',
                user: 'Asesor 3',
                timestamp: new Date('2024-01-08T16:00:00')
            },
            {
                id: 30,
                leadId: 26,
                type: 'Cliente de larga data',
                description: 'Cliente con excelente relación comercial',
                user: 'Asesor',
                timestamp: new Date('2023-09-10T08:45:00')
            },
            {
                id: 31,
                leadId: 26,
                type: 'Renovación automática',
                description: 'Contrato renovado automáticamente por $60,000',
                user: 'Asesor',
                timestamp: new Date('2023-09-11T10:15:00')
            },
            {
                id: 32,
                leadId: 27,
                type: 'Cliente con potencial',
                description: 'Cliente con potencial de expansión en nuevos mercados',
                user: 'Asesor 2',
                timestamp: new Date('2023-08-05T12:30:00')
            },
            {
                id: 33,
                leadId: 27,
                type: 'Contrato de expansión',
                description: 'Contrato de $45,000 para nuevos mercados',
                user: 'Asesor 2',
                timestamp: new Date('2023-08-06T14:00:00')
            },
            {
                id: 34,
                leadId: 27,
                type: 'Seguimiento de mercado',
                description: 'Seguimiento de expansión en nuevos mercados',
                user: 'Asesor 2',
                timestamp: new Date('2024-01-12T14:30:00')
            }
        ];
        
        this.init();
    }
    
    init() {
        this.loadData();
        this.checkAuthentication();
        
        // Inicializar eventos de ejemplo
        this.loadMockEvents();
    }
    
    loadData() {
        // Load data from localStorage if available
        const savedData = localStorage.getItem('crmData');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.leads = data.leads || this.leads;
            this.tasks = data.tasks || this.tasks;
            this.sequences = data.sequences || this.sequences;
            this.kpis = data.kpis || this.kpis;
            this.activities = data.activities || this.activities;
            
            console.log('Datos cargados:', {
                sequences: this.sequences.length,
                data: data
            });
        } else {
            console.log('No hay datos guardados, usando datos por defecto');
        }
    }
    
    saveData() {
        const data = {
            leads: this.leads,
            tasks: this.tasks,
            sequences: this.sequences,
            kpis: this.kpis,
            activities: this.activities
        };
        console.log('Guardando datos:', {
            sequences: this.sequences.length,
            data: data
        });
        localStorage.setItem('crmData', JSON.stringify(data));
    }
    
    checkAuthentication() {
        const userSession = localStorage.getItem('userSession');
        if (userSession) {
            const session = JSON.parse(userSession);
            this.currentUser = session.user;
            this.currentRole = session.role;
            this.isAuthenticated = true;
        }
    }
    
    // Authentication Methods
    login(username, password, role) {
        console.log('Intentando login:', { username, password, role });
        console.log('Usuarios disponibles:', this.users);
        
        const user = this.users.find(u => 
            u.username === username && 
            u.password === password && 
            u.role === role
        );
        
        console.log('Usuario encontrado:', user);
        
        if (user) {
            this.currentUser = user;
            this.currentRole = role;
            this.isAuthenticated = true;
            
            // Save session
            localStorage.setItem('userSession', JSON.stringify({
                user: user,
                role: role
            }));
            
            console.log('Login exitoso, redirigiendo...');
            return true;
        }
        console.log('Login fallido');
        return false;
    }
    
    logout() {
        this.currentUser = null;
        this.currentRole = null;
        this.isAuthenticated = false;
        localStorage.removeItem('userSession');
        window.location.href = 'index.html';
    }
    
    // Navigation Methods
    redirectToRole() {
        if (!this.isAuthenticated) {
            window.location.href = 'index.html';
            return;
        }
        
        switch (this.currentRole) {
            case 'admin':
                window.location.href = 'admin.html';
                break;
            case 'manager':
                window.location.href = 'manager.html';
                break;
            case 'advisor':
                window.location.href = 'advisor.html';
                break;
            default:
                window.location.href = 'index.html';
        }
    }
    
    // Lead Management
    getLeadsForUser() {
        if (this.currentRole === 'admin' || this.currentRole === 'manager') {
            return this.leads;
        } else {
            return this.leads.filter(lead => lead.advisor === this.currentUser.name);
        }
    }
    
    createLead(leadData) {
        const newLead = {
            id: Date.now(),
            ...leadData,
            createdAt: new Date(),
            lastActivity: new Date()
        };
        this.leads.push(newLead);
        this.saveData();
        return newLead;
    }
    
    updateLead(leadId, updates) {
        const leadIndex = this.leads.findIndex(lead => lead.id === leadId);
        if (leadIndex !== -1) {
            this.leads[leadIndex] = { ...this.leads[leadIndex], ...updates };
            this.leads[leadIndex].lastActivity = new Date();
            this.saveData();
            return this.leads[leadIndex];
        }
        return null;
    }
    
    advanceLeadState(leadId) {
        const lead = this.leads.find(l => l.id === leadId);
        if (!lead) return false;
        
        const states = ['Calificar', 'Desarrollar', 'Proponer', 'Cierre'];
        const currentIndex = states.indexOf(lead.status);
        
        if (currentIndex < states.length - 1) {
            const previousState = lead.status;
            lead.status = states[currentIndex + 1];
            lead.lastActivity = new Date();
            this.saveData();
            this.addActivity(leadId, 'Estado avanzado', `Lead avanzado de ${previousState} a ${lead.status}`);
            
            // Update Kanban board if we're in advisor view
            if (this.currentRole === 'advisor') {
                this.updateAdvisorKanban();
            }
            
            this.showNotification(`Lead avanzado a ${lead.status}`, 'success');
            return true;
        } else {
            this.showNotification('El lead ya está en el estado final', 'warning');
            return false;
        }
    }

    confirmDeleteClient(leadId) {
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Cliente no encontrado', 'error');
            return;
        }

        // Crear modal de confirmación dinámico
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center;
            align-items: center; z-index: 10000; animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                max-width: 500px; width: 90%; text-align: center; animation: slideIn 0.3s ease;">
                <div style="color: #dc3545; font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.5rem;">¿Eliminar Cliente?</h3>
                <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.5;">
                    ¿Estás seguro de que deseas eliminar a <strong>${lead.name}</strong>?<br>
                    Esta acción no se puede deshacer y se perderá todo el historial.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button onclick="this.closest('div').parentElement.remove()" 
                        style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none;
                        border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.2s;"
                        onmouseover="this.style.background='#5a6268'"
                        onmouseout="this.style.background='#6c757d'">
                        Cancelar
                    </button>
                    <button onclick="window.crm.deleteClient(${leadId}); this.closest('div').parentElement.remove();" 
                        style="padding: 0.75rem 1.5rem; background: #dc3545; color: white; border: none;
                        border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.2s;"
                        onmouseover="this.style.background='#c82333'"
                        onmouseout="this.style.background='#dc3545'">
                        🗑️ Sí, Eliminar
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    deleteClient(leadId) {
        const leadIndex = this.leads.findIndex(l => l.id == leadId);
        if (leadIndex === -1) {
            this.showNotification('Cliente no encontrado', 'error');
            return;
        }

        const lead = this.leads[leadIndex];
        
        // Eliminar el lead
        this.leads.splice(leadIndex, 1);
        
        // Eliminar tareas relacionadas
        this.tasks = this.tasks.filter(task => task.leadId != leadId);
        
        // Eliminar actividades relacionadas
        this.activities = this.activities.filter(activity => activity.leadId != leadId);
        
        // Guardar cambios
        this.saveData();
        
        // Actualizar vistas
        if (this.currentRole === 'advisor') {
            this.updateAdvisorKanban();
            this.updateAdvisorDashboard();
        }
        
        this.showNotification(`Cliente "${lead.name}" eliminado correctamente`, 'success');
        console.log('Cliente eliminado:', lead.name);
    }

    qualifyClient(leadId) {
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Cliente no encontrado', 'error');
            return;
        }

        // Crear modal de calificación dinámico
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center;
            align-items: center; z-index: 10000; animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                max-width: 600px; width: 90%; animation: slideIn 0.3s ease;">
                
                <!-- Header -->
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="color: #ffc107; font-size: 3rem; margin-bottom: 1rem;">⭐</div>
                    <h3 style="color: #333; margin-bottom: 0.5rem; font-size: 1.5rem;">Calificar Cliente</h3>
                    <p style="color: #666; margin: 0; font-size: 1rem;">
                        <strong>${lead.name}</strong> - ${lead.company || 'Sin empresa'}
                    </p>
                </div>

                <!-- Opciones de calificación -->
                <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
                    <button onclick="window.crm.setClientStatus(${leadId}, 'fidelizado'); this.closest('div').parentElement.parentElement.remove();"
                        style="padding: 1.5rem; background: linear-gradient(135deg, #28a745, #20c997); color: white; 
                        border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem;
                        transition: transform 0.2s, box-shadow 0.2s; display: flex; align-items: center; gap: 1rem;"
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(40, 167, 69, 0.3)'"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="font-size: 2rem;">✅</div>
                        <div style="text-align: left;">
                            <div style="font-size: 1.1rem; font-weight: 700;">Cliente Fidelizado</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">El cliente ha sido convertido exitosamente y está satisfecho</div>
                        </div>
                    </button>

                    <button onclick="window.crm.setClientStatus(${leadId}, 'perdido'); this.closest('div').parentElement.parentElement.remove();"
                        style="padding: 1.5rem; background: linear-gradient(135deg, #dc3545, #c82333); color: white; 
                        border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem;
                        transition: transform 0.2s, box-shadow 0.2s; display: flex; align-items: center; gap: 1rem;"
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(220, 53, 69, 0.3)'"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="font-size: 2rem;">❌</div>
                        <div style="text-align: left;">
                            <div style="font-size: 1.1rem; font-weight: 700;">Cliente Perdido</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">El cliente no está interesado o no se pudo cerrar la venta</div>
                        </div>
                    </button>
                </div>

                <!-- Botón cancelar -->
                <div style="text-align: center;">
                    <button onclick="this.closest('div').parentElement.remove()" 
                        style="padding: 0.75rem 2rem; background: #6c757d; color: white; border: none;
                        border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.2s;"
                        onmouseover="this.style.background='#5a6268'"
                        onmouseout="this.style.background='#6c757d'">
                        Cancelar
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    setClientStatus(leadId, statusType) {
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Cliente no encontrado', 'error');
            return;
        }

        const previousStatus = lead.status;
        
        if (statusType === 'fidelizado') {
            // Cliente fidelizado: se marca como Cierre y aparece en la pestaña clientes
            lead.status = 'Cierre';
            lead.clientType = 'fidelizado';
            lead.notes = (lead.notes || '') + `\n[${new Date().toLocaleDateString()}] Cliente marcado como FIDELIZADO - Conversión exitosa.`;
            this.addActivity(leadId, 'Cliente Fidelizado', 'Cliente marcado como fidelizado - Conversión exitosa');
            this.showNotification(`🎉 ¡${lead.name} ahora es un cliente fidelizado!`, 'success');
        } else if (statusType === 'perdido') {
            // Cliente perdido: se quita del Kanban y aparece en la pestaña clientes como "perdido"
            lead.status = 'Perdido';
            lead.clientType = 'perdido';
            lead.notes = (lead.notes || '') + `\n[${new Date().toLocaleDateString()}] Cliente marcado como PERDIDO - No se logró la conversión.`;
            this.addActivity(leadId, 'Cliente Perdido', 'Cliente marcado como perdido - No se logró la conversión');
            this.showNotification(`${lead.name} marcado como cliente perdido`, 'warning');
        }

        lead.lastActivity = new Date();
        
        // Guardar cambios
        this.saveData();
        
        // Actualizar vistas
        if (this.currentRole === 'advisor') {
            this.updateAdvisorKanban();
            this.updateAdvisorDashboard();
        }
        
        console.log(`Cliente ${lead.name} calificado como ${statusType}`);
    }

    debugLostClients() {
        console.log('=== DEBUG: CLIENTES PERDIDOS ===');
        const lostLeads = this.leads.filter(lead => lead.status === 'Perdido');
        console.log('Total leads con estado "Perdido":', lostLeads.length);
        lostLeads.forEach(lead => {
            console.log(`- ${lead.name} (${lead.advisor}): Estado="${lead.status}", Tipo="${lead.clientType || 'no definido'}"`);
        });
        
        const currentUserName = this.currentUser.name || this.currentUser;
        const myLostLeads = lostLeads.filter(lead => lead.advisor === currentUserName);
        console.log(`Leads perdidos del asesor "${currentUserName}":`, myLostLeads.length);
        myLostLeads.forEach(lead => {
            console.log(`- ${lead.name}: Estado="${lead.status}", Tipo="${lead.clientType || 'no definido'}"`);
        });
        
        return myLostLeads;
    }
    
    // Task Management
    getTasksForUser() {
        if (this.currentRole === 'admin' || this.currentRole === 'manager') {
            return this.tasks;
        } else {
            return this.tasks.filter(task => task.advisor === this.currentUser.name);
        }
    }
    
    createTask(taskData) {
        const newTask = {
            id: Date.now(),
            ...taskData,
            advisor: this.currentUser.name,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        this.saveData();
        return newTask;
    }
    
    updateTask(taskId, updates) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
            this.saveData();
            return this.tasks[taskIndex];
        }
        return null;
    }
    
    completeTask(taskId, completionNotes) {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return false;
        
        task.status = 'completada';
        task.completionNotes = completionNotes;
        task.completedAt = new Date();
        
        this.saveData();
        this.addActivity(task.leadId, 'Tarea completada', `Tarea ${task.type} completada: ${completionNotes}`);
        
        // Check if lead should advance state
        const previousState = this.leads.find(l => l.id === task.leadId)?.status;
        this.checkLeadStateAdvancement(task.leadId);
        
        // Update Kanban if we're in advisor view and state might have changed
        if (this.currentRole === 'advisor') {
            const currentState = this.leads.find(l => l.id === task.leadId)?.status;
            if (previousState !== currentState) {
                this.updateAdvisorKanban();
            }
        }
        
        return true;
    }
    
    checkLeadStateAdvancement(leadId) {
        const lead = this.leads.find(l => l.id === leadId);
        if (!lead) return;
        
        const sequence = this.sequences.find(s => s.state === lead.status);
        if (!sequence) return;
        
        const completedTasks = this.tasks.filter(t => 
            t.leadId === leadId && 
            t.status === 'completada' && 
            t.completedAt >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
        );
        
        const requiredActions = sequence.actions.reduce((total, action) => total + action.repetitions, 0);
        
        if (completedTasks.length >= requiredActions) {
            const previousState = lead.status;
            this.advanceLeadState(leadId);
            
            // Update Kanban board if we're in advisor view and state actually changed
            if (this.currentRole === 'advisor' && lead.status !== previousState) {
                this.updateAdvisorKanban();
            }
        }
    }
    
    // Activity Tracking
    addActivity(leadId, type, description) {
        const activity = {
            id: Date.now(),
            leadId: leadId,
            type: type,
            description: description,
            user: this.currentUser.name,
            timestamp: new Date()
        };
        this.activities.push(activity);
        this.saveData();
    }
    
    getActivitiesForLead(leadId) {
        return this.activities.filter(activity => activity.leadId === leadId);
    }
    
    // Statistics and Analytics
    getStatistics(period = 'monthly') {
        const now = new Date();
        let startDate;
        
        switch (period) {
            case 'daily':
                startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                break;
            case 'weekly':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'monthly':
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                break;
            case 'yearly':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
        }
        
        const leads = this.getLeadsForUser();
        const tasks = this.getTasksForUser();
        
        const periodLeads = leads.filter(lead => lead.createdAt >= startDate);
        const periodTasks = tasks.filter(task => task.createdAt >= startDate);
        const completedTasks = periodTasks.filter(task => task.status === 'completada');
        const conversions = periodLeads.filter(lead => lead.status === 'Cierre');
        
        return {
            totalLeads: leads.length,
            periodLeads: periodLeads.length,
            totalTasks: tasks.length,
            periodTasks: periodTasks.length,
            completedTasks: completedTasks.length,
            conversions: conversions.length,
            conversionRate: periodLeads.length > 0 ? Math.round((conversions.length / periodLeads.length) * 100) : 0
        };
    }
    
    // AI Analysis (Simulated)
    runAIAnalysis() {
        const leads = this.getLeadsForUser();
        const tasks = this.getTasksForUser();
        
        const analysis = {
            insights: [],
            recommendations: []
        };
        
        // Analyze conversion rates
        const conversionRate = this.getStatistics().conversionRate;
        if (conversionRate < 10) {
            analysis.insights.push('La tasa de conversión es baja. Revisar el proceso de calificación.');
            analysis.recommendations.push('Implementar mejor seguimiento en la fase de calificación');
        }
        
        // Analyze task completion
        const completedTasks = tasks.filter(t => t.status === 'completada').length;
        const totalTasks = tasks.length;
        const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        if (completionRate < 70) {
            analysis.insights.push('La tasa de finalización de tareas es baja.');
            analysis.recommendations.push('Revisar la carga de trabajo y prioridades');
        }
        
        // Analyze lead progression
        const stuckLeads = leads.filter(lead => {
            const daysSinceLastActivity = Math.floor((new Date() - lead.lastActivity) / (1000 * 60 * 60 * 24));
            return daysSinceLastActivity > 7 && lead.status !== 'Cierre';
        });
        
        if (stuckLeads.length > 0) {
            analysis.insights.push(`${stuckLeads.length} leads no han tenido actividad reciente.`);
            analysis.recommendations.push('Contactar leads inactivos para reactivar el proceso');
        }
        
        return analysis;
    }
    
    // Export functionality
    exportToCSV(data, filename) {
        const csvContent = this.convertToCSV(data);
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }
    
    convertToCSV(data) {
        if (!data || data.length === 0) return '';
        
        const headers = Object.keys(data[0]);
        const csvRows = [headers.join(',')];
        
        for (const row of data) {
            const values = headers.map(header => {
                const value = row[header];
                return typeof value === 'string' ? `"${value}"` : value;
            });
            csvRows.push(values.join(','));
        }
        
        return csvRows.join('\n');
    }
    
    // Utility Methods
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    formatDate(date) {
        return new Date(date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    formatDateTime(date) {
        return new Date(date).toLocaleString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    // Initialize specific interfaces
    initLogin() {
        console.log('Inicializando login...');
        const loginForm = document.getElementById('loginForm');
        console.log('Formulario encontrado:', loginForm);
        
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Formulario enviado');
                
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const role = document.getElementById('role').value;
                
                console.log('Datos del formulario:', { username, password, role });
                
                if (this.login(username, password, role)) {
                    this.showNotification('Inicio de sesión exitoso', 'success');
                    setTimeout(() => {
                        this.redirectToRole();
                    }, 1000);
                } else {
                    this.showNotification('Credenciales incorrectas', 'error');
                }
            });
        } else {
            console.error('No se encontró el formulario de login');
        }
    }
    
    initAdmin() {
        this.checkAuthentication();
        if (!this.isAuthenticated || this.currentRole !== 'admin') {
            this.redirectToRole();
            return;
        }
        
        this.setupAdminEventListeners();
        this.updateAdminDashboard();
    }
    
    initManager() {
        this.checkAuthentication();
        if (!this.isAuthenticated || this.currentRole !== 'manager') {
            this.redirectToRole();
            return;
        }
        
        this.setupManagerEventListeners();
        this.updateManagerDashboard();
        
        // Initialize sequences display
        setTimeout(() => {
            console.log('Inicializando secuencias del manager...');
            this.updateManagerSequences();
            
            // Agregar botón de prueba temporal
            this.addTestButton();
        }, 100);
    }
    
    initAdvisor() {
        this.checkAuthentication();
        if (!this.isAuthenticated || this.currentRole !== 'advisor') {
            this.redirectToRole();
            return;
        }
        
        // Initialize calendar with current date
        this.currentCalendarDate = new Date();
        this.currentCalendarView = 'week';
        
        this.setupAdvisorEventListeners();
        this.updateAdvisorDashboard();
        
        // Ensure DOM is fully loaded before updating tasks
        setTimeout(() => {
            this.updateAdvisorTasks();
            this.updateAdvisorKanban();
        }, 100);
    }
    
    // Admin specific methods
    setupAdminEventListeners() {
        // Logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.getAttribute('data-section');
                this.showAdminSection(section);
            });
        });
        
        // AI Analysis
        const runAIAnalysisBtn = document.getElementById('runAIAnalysis');
        if (runAIAnalysisBtn) {
            runAIAnalysisBtn.addEventListener('click', () => this.runAdminAIAnalysis());
        }
        
        // Export
        const exportBtn = document.getElementById('exportReport');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportAdminReport());
        }
        
        // Global KPI Form
        const globalKPIForm = document.getElementById('globalKPIForm');
        if (globalKPIForm) {
            globalKPIForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveGlobalKPIs();
            });
        }
    }
    
    showAdminSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update section content
        switch (sectionName) {
            case 'dashboard':
                this.updateAdminDashboard();
                break;
            case 'statistics':
                this.updateAdminStatistics();
                break;
            case 'kpis':
                this.updateAdminKPIs();
                break;
            case 'ai-analysis':
                this.updateAdminAIAnalysis();
                break;
            case 'team-overview':
                this.updateAdminTeamOverview();
                break;
        }
    }
    
    updateAdminDashboard() {
        const stats = this.getStatistics();
        
        document.getElementById('totalLeads').textContent = stats.totalLeads;
        document.getElementById('totalConversions').textContent = stats.conversions;
        document.getElementById('activeAdvisors').textContent = 3; // Mock data
        document.getElementById('conversionRate').textContent = `${stats.conversionRate}%`;
        
        this.updateAdminCharts();
    }
    
    updateAdminCharts() {
        // Advisor Performance Chart
        const advisorCtx = document.getElementById('advisorPerformanceChart');
        if (advisorCtx) {
            new Chart(advisorCtx, {
                type: 'bar',
                data: {
                    labels: ['Asesor 1', 'Asesor 2', 'Asesor 3'],
                    datasets: [{
                        label: 'Conversiones',
                        data: [5, 3, 7],
                        backgroundColor: 'rgba(59, 130, 246, 0.5)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        
        // Monthly Conversions Chart
        const monthlyCtx = document.getElementById('monthlyConversionsChart');
        if (monthlyCtx) {
            new Chart(monthlyCtx, {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Conversiones',
                        data: [12, 19, 15, 25, 22, 30],
                        borderColor: 'rgba(16, 185, 129, 1)',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
    
    runAdminAIAnalysis() {
        const analysis = this.runAIAnalysis();
        const resultsContainer = document.getElementById('aiResults');
        
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <div class="ai-result-item">
                    <h4>Insights Generados</h4>
                    <ul>
                        ${analysis.insights.map(insight => `<li>${insight}</li>`).join('')}
                    </ul>
                </div>
                <div class="ai-result-item">
                    <h4>Recomendaciones</h4>
                    <ul>
                        ${analysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        this.showNotification('Análisis IA completado', 'success');
    }
    
    exportAdminReport() {
        const leads = this.getLeadsForUser();
        this.exportToCSV(leads, 'reporte_leads_admin.csv');
        this.showNotification('Reporte exportado exitosamente', 'success');
    }
    
    saveGlobalKPIs() {
        const dailyTarget = document.getElementById('dailyTargetClients').value;
        const weeklyTarget = document.getElementById('weeklyConversionTarget').value;
        const maxDays = document.getElementById('maxDaysPerState').value;
        
        this.kpis.global = {
            dailyTargetClients: parseInt(dailyTarget),
            weeklyConversionTarget: parseInt(weeklyTarget),
            maxDaysPerState: parseInt(maxDays)
        };
        
        this.saveData();
        this.showNotification('KPIs globales guardados', 'success');
    }
    
    // Manager specific methods
    setupManagerEventListeners() {
        // Logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.getAttribute('data-section');
                this.showManagerSection(section);
            });
        });
        
        // Period selector
        const periodSelect = document.getElementById('periodSelect');
        if (periodSelect) {
            periodSelect.addEventListener('change', () => {
                this.updateManagerDashboard();
            });
        }
        
        // Advisor KPI Form - Configurar con timeout para asegurar que el DOM esté listo
        setTimeout(() => {
            const advisorKPIForm = document.getElementById('advisorKPIForm');
            console.log('Configurando event listener para advisorKPIForm:', !!advisorKPIForm);
            if (advisorKPIForm) {
                // Remover listeners existentes
                advisorKPIForm.removeEventListener('submit', this.handleKPISubmit);
                
                // Agregar nuevo listener
                this.handleKPISubmit = (e) => {
                    e.preventDefault();
                    console.log('Formulario de KPIs enviado');
                    this.saveAdvisorKPIs();
                };
                
                advisorKPIForm.addEventListener('submit', this.handleKPISubmit);
                
                // También agregar listener al botón directamente
                const submitButton = advisorKPIForm.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        console.log('Botón Guardar KPIs clickeado');
                        this.saveAdvisorKPIs();
                    });
                }
            }
        }, 500);
        
        // Sequence Form
        const sequenceForm = document.getElementById('sequenceForm');
        if (sequenceForm) {
            sequenceForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveSequence();
            });
        }
        
        // Add sequence action
        const addSequenceActionBtn = document.getElementById('addSequenceAction');
        if (addSequenceActionBtn) {
            addSequenceActionBtn.addEventListener('click', () => {
                this.addSequenceAction();
            });
        }
        
        // Modal de asignación de asesores
        const assignModal = document.getElementById('assignAdvisorsModal');
        if (assignModal) {
            // Botón cerrar del modal
            const closeBtn = assignModal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    console.log('Cerrando modal de asignación...');
                    assignModal.style.display = 'none';
                });
            }
            
            // Click fuera del modal
            assignModal.addEventListener('click', (e) => {
                if (e.target === assignModal) {
                    console.log('Click fuera del modal de asignación, cerrando...');
                    assignModal.style.display = 'none';
                }
            });
        }
        
        // Botones del modal de asignación
        const selectAllBtn = document.getElementById('selectAllAdvisors');
        if (selectAllBtn) {
            selectAllBtn.addEventListener('click', () => {
                console.log('Seleccionando todos los asesores...');
                this.selectAllAdvisors();
            });
        }
        
        const deselectAllBtn = document.getElementById('deselectAllAdvisors');
        if (deselectAllBtn) {
            deselectAllBtn.addEventListener('click', () => {
                console.log('Deseleccionando todos los asesores...');
                this.deselectAllAdvisors();
            });
        }
        
        const saveMultipleAssignmentsBtn = document.getElementById('saveMultipleAssignments');
        if (saveMultipleAssignmentsBtn) {
            saveMultipleAssignmentsBtn.addEventListener('click', () => {
                console.log('Guardando asignaciones múltiples...');
                this.saveMultipleAssignments();
            });
        }
        
        // Reset sequence form
        const resetSequenceBtn = document.getElementById('resetSequence');
        if (resetSequenceBtn) {
            resetSequenceBtn.addEventListener('click', () => {
                this.resetSequenceForm();
            });
        }
        
        // Assignment modal controls
        const selectAllAdvisorsBtn = document.getElementById('selectAllAdvisors');
        if (selectAllAdvisorsBtn) {
            selectAllAdvisorsBtn.addEventListener('click', () => {
                this.selectAllAdvisors();
            });
        }
        
        const deselectAllAdvisorsBtn = document.getElementById('deselectAllAdvisors');
        if (deselectAllAdvisorsBtn) {
            deselectAllAdvisorsBtn.addEventListener('click', () => {
                this.deselectAllAdvisors();
            });
        }
        
        const saveAssignmentsBtn = document.getElementById('saveAssignments');
        if (saveAssignmentsBtn) {
            saveAssignmentsBtn.addEventListener('click', () => {
                this.saveMultipleAssignments();
            });
        }
        
        const cancelAssignmentBtn = document.getElementById('cancelAssignment');
        if (cancelAssignmentBtn) {
            cancelAssignmentBtn.addEventListener('click', () => {
                this.closeModal('assignAdvisorsModal');
            });
        }
    }
    
    showManagerSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update section content
        switch (sectionName) {
            case 'dashboard':
                this.updateManagerDashboard();
                break;
            case 'team-stats':
                this.updateManagerTeamStats();
                break;
            case 'advisor-management':
                this.updateManagerAdvisorManagement();
                break;
            case 'sequences':
                console.log('Cambiando a sección de secuencias...');
                this.updateManagerSequences();
                break;
            case 'calendar':
                this.updateManagerCalendar();
                break;
            case 'leads':
                console.log('Navegando a sección de leads del manager...');
                this.updateManagerLeads();
                break;
            case 'clients':
                console.log('Navegando a sección de clientes del manager...');
                this.updateManagerClients();
                break;
        }
    }
    
    updateManagerDashboard() {
        const period = document.getElementById('periodSelect')?.value || 'monthly';
        const stats = this.getTeamStatistics(period);
        
        console.log('Actualizando dashboard del manager:', stats);
        
        // Actualizar elementos del DOM
        const teamTotalLeads = document.getElementById('teamTotalLeads');
        const teamTotalActions = document.getElementById('teamTotalActions');
        const teamConversions = document.getElementById('teamConversions');
        const teamConversionRate = document.getElementById('teamConversionRate');
        
        if (teamTotalLeads) teamTotalLeads.textContent = stats.totalLeads;
        if (teamTotalActions) teamTotalActions.textContent = stats.completedTasks;
        if (teamConversions) teamConversions.textContent = stats.conversions;
        if (teamConversionRate) teamConversionRate.textContent = `${stats.conversionRate}%`;
        
        // Actualizar resumen de KPIs
        this.updateManagerKPIsSummary();
        
        // Configurar análisis de IA del equipo
        this.setupTeamAIAnalysis();
    }
    
    getTeamStatistics(period = 'monthly') {
        const now = new Date();
        let startDate;
        
        switch (period) {
            case 'daily':
                startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                break;
            case 'weekly':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'monthly':
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                break;
            case 'yearly':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
        }
        
        // Obtener todos los leads del equipo (todos los asesores)
        const teamLeads = this.leads.filter(lead => {
            const advisor = this.users.find(user => user.name === lead.advisor);
            return advisor && advisor.role === 'advisor';
        });
        
        // Obtener todas las tareas del equipo
        const teamTasks = this.tasks.filter(task => {
            const advisor = this.users.find(user => user.name === task.advisor);
            return advisor && advisor.role === 'advisor';
        });
        
        // Filtrar por período
        const periodLeads = teamLeads.filter(lead => new Date(lead.createdAt) >= startDate);
        const periodTasks = teamTasks.filter(task => new Date(task.createdAt) >= startDate);
        
        // Calcular estadísticas
        const completedTasks = periodTasks.filter(task => task.status === 'completada');
        const conversions = periodLeads.filter(lead => lead.status === 'Cierre');
        const conversionRate = periodLeads.length > 0 ? Math.round((conversions.length / periodLeads.length) * 100) : 0;
        
        console.log('Estadísticas del equipo calculadas:', {
            totalLeads: teamLeads.length,
            periodLeads: periodLeads.length,
            totalTasks: teamTasks.length,
            periodTasks: periodTasks.length,
            completedTasks: completedTasks.length,
            conversions: conversions.length,
            conversionRate: conversionRate
        });
        
        return {
            totalLeads: periodLeads.length, // Usar leads del período para las estadísticas
            periodLeads: periodLeads.length,
            totalTasks: teamTasks.length,
            periodTasks: periodTasks.length,
            completedTasks: completedTasks.length,
            conversions: conversions.length,
            conversionRate: conversionRate
        };
    }
    
    saveAdvisorKPIs() {
        console.log('=== GUARDANDO KPIs DEL ASESOR ===');
        
        const advisorSelect = document.getElementById('advisorSelect');
        const dailyLeadsGoal = document.getElementById('dailyLeadsGoal');
        const weeklyConversionsGoal = document.getElementById('weeklyConversionsGoal');
        const maxActionsPerDay = document.getElementById('maxActionsPerDay');
        
        console.log('Elementos encontrados:', {
            advisorSelect: !!advisorSelect,
            dailyLeadsGoal: !!dailyLeadsGoal,
            weeklyConversionsGoal: !!weeklyConversionsGoal,
            maxActionsPerDay: !!maxActionsPerDay
        });
        
        if (!advisorSelect || !advisorSelect.value) {
            this.showNotification('Por favor selecciona un asesor', 'error');
            return;
        }
        
        const advisor = advisorSelect.value;
        const dailyTarget = dailyLeadsGoal ? parseInt(dailyLeadsGoal.value) || 0 : 0;
        const weeklyTarget = weeklyConversionsGoal ? parseInt(weeklyConversionsGoal.value) || 0 : 0;
        const maxActions = maxActionsPerDay ? parseInt(maxActionsPerDay.value) || 0 : 0;
        
        console.log('Valores obtenidos:', {
            advisor,
            dailyTarget,
            weeklyTarget,
            maxActions
        });
        
        if (!this.kpis) {
            this.kpis = {};
        }
        
        if (!this.kpis.advisor) {
            this.kpis.advisor = {};
        }
        
        this.kpis.advisor[advisor] = {
            dailyLeadsGoal: dailyTarget,
            weeklyConversionsGoal: weeklyTarget,
            maxActionsPerDay: maxActions,
            updatedAt: new Date()
        };
        
        console.log('KPIs guardados para', advisor, ':', this.kpis.advisor[advisor]);
        
        this.saveData();
        this.showNotification(`KPIs guardados para ${advisor}`, 'success');
        
        // Limpiar formulario
        if (dailyLeadsGoal) dailyLeadsGoal.value = '';
        if (weeklyConversionsGoal) weeklyConversionsGoal.value = '';
        if (maxActionsPerDay) maxActionsPerDay.value = '';
    }
    
    addSequenceAction() {
        const container = document.getElementById('sequenceActions');
        const actionDiv = document.createElement('div');
        actionDiv.className = 'sequence-action';
        actionDiv.innerHTML = `
            <div class="action-type-group">
                <label>Tipo de Acción</label>
                <select class="action-type">
                    <option value="Llamada">Llamada</option>
                    <option value="Mensaje">Mensaje</option>
                    <option value="Correo">Correo</option>
                    <option value="Reunión presencial">Reunión presencial</option>
                </select>
            </div>
            
            <div class="action-count-group">
                <label>Cantidad</label>
                <input type="number" class="action-repetitions" placeholder="1" min="1" value="1">
            </div>
            
            <div class="action-delay-group">
                <label>Delay (horas)</label>
                <input type="number" class="action-delay" placeholder="0" min="0" value="0">
            </div>
            
            <div class="action-max-time-group">
                <label>Tiempo máx (días)</label>
                <input type="number" class="action-max-time" placeholder="7" min="1" value="7">
            </div>
            
            <div class="action-remove-group">
                <button type="button" class="btn btn-danger btn-sm remove-action">
                    Eliminar
                </button>
            </div>
        `;
        
        container.appendChild(actionDiv);
        
        // Add remove functionality
        const removeBtn = actionDiv.querySelector('.remove-action');
        removeBtn.addEventListener('click', () => {
            container.removeChild(actionDiv);
        });
    }
    
    saveSequence() {
        console.log('Guardando secuencia...');
        
        const name = document.getElementById('sequenceName').value;
        const state = document.getElementById('sequenceState').value;
        const interest = document.getElementById('sequenceInterest').value;
        
        console.log('Datos de la secuencia:', { name, state, interest });
        
        if (!name || !state) {
            this.showNotification('Por favor completa todos los campos obligatorios', 'error');
            return;
        }
        
        const actions = Array.from(document.querySelectorAll('.sequence-action')).map(actionEl => ({
            type: actionEl.querySelector('.action-type').value,
            repetitions: parseInt(actionEl.querySelector('.action-repetitions').value) || 1,
            delay: parseInt(actionEl.querySelector('.action-delay').value) || 0,
            maxTime: parseInt(actionEl.querySelector('.action-max-time').value) || 7
        }));
        
        if (actions.length === 0) {
            this.showNotification('Debe agregar al menos una acción a la secuencia', 'error');
            return;
        }
        
        const sequence = {
            id: Date.now(),
            name,
            state,
            interest: interest || 'Todos los niveles',
            actions,
            assignedAdvisors: [], // Array de asesores asignados
            createdAt: new Date()
        };
        
        this.sequences.push(sequence);
        console.log('Secuencia agregada:', sequence);
        console.log('Total de secuencias:', this.sequences.length);
        
        this.saveData();
        this.showNotification('Secuencia creada exitosamente', 'success');
        this.updateManagerSequences();
        this.resetSequenceForm();
    }
    
    updateManagerSequences() {
        const sequencesList = document.getElementById('sequencesList');
        const sequenceCount = document.getElementById('sequenceCount');
        
        console.log('Actualizando secuencias del manager:', {
            sequencesList: !!sequencesList,
            sequenceCount: !!sequenceCount,
            sequencesLength: this.sequences.length,
            sequences: this.sequences
        });
        
        // Verificar localStorage
        const storedSequences = localStorage.getItem('crm_sequences');
        console.log('Secuencias en localStorage:', storedSequences);
        
        if (!sequencesList) {
            console.error('Elemento sequencesList no encontrado');
            return;
        }
        
        // Update count
        if (sequenceCount) {
            sequenceCount.textContent = `${this.sequences.length} secuencias`;
        }
        
        if (this.sequences.length === 0) {
            sequencesList.innerHTML = `
                <div class="empty-sequences">
                    <h4>No hay secuencias creadas</h4>
                    <p>Crea tu primera secuencia de acciones para automatizar el seguimiento de leads</p>
                </div>
            `;
            return;
        }
        
        // Render sequences
        sequencesList.innerHTML = this.sequences.map(sequence => `
            <div class="sequence-item">
                <div class="sequence-header">
                    <h4 class="sequence-name">${sequence.name}</h4>
                    <div class="sequence-actions">
                        <button class="btn btn-primary btn-sm" onclick="crm.editSequence(${sequence.id})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="crm.deleteSequence(${sequence.id})">Eliminar</button>
                    </div>
                </div>
                
                <div class="sequence-meta">
                    <span class="sequence-tag sequence-state">${sequence.state}</span>
                    <span class="sequence-tag sequence-interest">${sequence.interest}</span>
                </div>
                
                <div class="sequence-assignment">
                    <label>Asignar a:</label>
                    <div class="assignment-controls">
                        <div class="current-assignments-list" id="currentAssignments_${sequence.id}">
                            ${this.renderCurrentAssignments(sequence)}
                        </div>
                        <button class="assignment-button" onclick="window.crm.openAssignAdvisorsModal(${sequence.id})">
                            <span>👥</span> Gestionar Asignaciones
                        </button>
                    </div>
                </div>
                
                <div class="sequence-actions-list">
                    <h5>Acciones (${sequence.actions.length}):</h5>
                    ${sequence.actions.map((action, index) => `
                        <div class="action-step">
                            <div class="action-step-icon">${index + 1}</div>
                            <div class="action-step-details">
                                <div class="action-step-type">${action.type}</div>
                                <div class="action-step-meta">
                                    Cantidad: ${action.repetitions} | 
                                    Delay: ${action.delay}h | 
                                    Máx: ${action.maxTime}d
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
    
    resetSequenceForm() {
        document.getElementById('sequenceForm').reset();
        // Reset to single action
        const actionsList = document.getElementById('sequenceActions');
        actionsList.innerHTML = `
            <div class="sequence-action">
                <div class="action-type-group">
                    <label>Tipo de Acción</label>
                    <select class="action-type">
                        <option value="Llamada">Llamada</option>
                        <option value="Mensaje">Mensaje</option>
                        <option value="Correo">Correo</option>
                        <option value="Reunión presencial">Reunión presencial</option>
                    </select>
                </div>
                
                <div class="action-count-group">
                    <label>Cantidad</label>
                    <input type="number" class="action-repetitions" placeholder="1" min="1" value="1">
                </div>
                
                <div class="action-delay-group">
                    <label>Delay (horas)</label>
                    <input type="number" class="action-delay" placeholder="0" min="0" value="0">
                </div>
                
                <div class="action-max-time-group">
                    <label>Tiempo máx (días)</label>
                    <input type="number" class="action-max-time" placeholder="7" min="1" value="7">
                </div>
                
                <div class="action-remove-group">
                    <button type="button" class="btn btn-danger btn-sm remove-action">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    }
    
    editSequence(sequenceId) {
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) return;
        
        // Fill form with sequence data
        document.getElementById('sequenceName').value = sequence.name;
        document.getElementById('sequenceState').value = sequence.state;
        document.getElementById('sequenceInterest').value = sequence.interest;
        
        // Clear and rebuild actions
        const actionsList = document.getElementById('sequenceActions');
        actionsList.innerHTML = sequence.actions.map(action => `
            <div class="sequence-action">
                <div class="action-type-group">
                    <label>Tipo de Acción</label>
                    <select class="action-type">
                        <option value="Llamada" ${action.type === 'Llamada' ? 'selected' : ''}>Llamada</option>
                        <option value="Mensaje" ${action.type === 'Mensaje' ? 'selected' : ''}>Mensaje</option>
                        <option value="Correo" ${action.type === 'Correo' ? 'selected' : ''}>Correo</option>
                        <option value="Reunión presencial" ${action.type === 'Reunión presencial' ? 'selected' : ''}>Reunión presencial</option>
                    </select>
                </div>
                
                <div class="action-count-group">
                    <label>Cantidad</label>
                    <input type="number" class="action-repetitions" placeholder="1" min="1" value="${action.repetitions}">
                </div>
                
                <div class="action-delay-group">
                    <label>Delay (horas)</label>
                    <input type="number" class="action-delay" placeholder="0" min="0" value="${action.delay}">
                </div>
                
                <div class="action-max-time-group">
                    <label>Tiempo máx (días)</label>
                    <input type="number" class="action-max-time" placeholder="7" min="1" value="${action.maxTime}">
                </div>
                
                <div class="action-remove-group">
                    <button type="button" class="btn btn-danger btn-sm remove-action">
                        Eliminar
                    </button>
                </div>
            </div>
        `).join('');
        
        this.showNotification('Secuencia cargada para edición', 'info');
    }
    
    deleteSequence(sequenceId) {
        if (confirm('¿Estás seguro de que quieres eliminar esta secuencia?')) {
            this.sequences = this.sequences.filter(s => s.id !== sequenceId);
            this.saveData();
            this.updateManagerSequences();
            this.showNotification('Secuencia eliminada exitosamente', 'success');
        }
    }
    
    assignSequenceToAdvisor(sequenceId, advisorName) {
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) {
            this.showNotification('Secuencia no encontrada', 'error');
            return;
        }
        
        if (advisorName) {
            sequence.assignedTo = advisorName;
            this.showNotification(`Secuencia asignada a ${advisorName}`, 'success');
        } else {
            delete sequence.assignedTo;
            this.showNotification('Asignación de secuencia removida', 'info');
        }
        
        this.saveData();
        console.log('Secuencia actualizada:', sequence);
    }
    
    renderCurrentAssignments(sequence) {
        if (!sequence.assignedAdvisors || sequence.assignedAdvisors.length === 0) {
            return '<span class="no-assignments">Sin asignaciones</span>';
        }
        
        return sequence.assignedAdvisors.map(advisorName => `
            <span class="current-assignment-tag">
                ${advisorName}
                <button class="remove-assignment" onclick="crm.removeAdvisorFromSequence(${sequence.id}, '${advisorName}')" title="Remover asignación">×</button>
            </span>
        `).join('');
    }
    
    openAssignAdvisorsModal(sequenceId) {
        console.log('Abriendo modal dinámico de asignación de asesores para secuencia:', sequenceId);
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) {
            console.error('Secuencia no encontrada:', sequenceId);
            alert('Secuencia no encontrada');
            return;
        }
        
        console.log('Secuencia encontrada:', sequence.name);
        
        // Inicializar assignedAdvisors si no existe
        if (!sequence.assignedAdvisors) {
            sequence.assignedAdvisors = [];
        }
        
        console.log('Asesores asignados actualmente:', sequence.assignedAdvisors);
        
        // Obtener lista de asesores (solo los visibles)
        const advisors = this.getVisibleAdvisors();
        console.log('Asesores visibles disponibles:', advisors.map(a => a.name));
        
        // Crear modal dinámico
        const modal = document.createElement('div');
        modal.id = 'dynamicAssignModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #dee2e6;">
                    <h3 style="margin: 0; color: #333;">👥 Asignar Secuencia: ${sequence.name}</h3>
                    <button onclick="document.getElementById('dynamicAssignModal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; padding: 0; width: 30px; height: 30px;">&times;</button>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <button onclick="window.crm.selectAllAdvisorsInModal()" style="padding: 0.5rem 1rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Seleccionar Todos</button>
                        <button onclick="window.crm.deselectAllAdvisorsInModal()" style="padding: 0.5rem 1rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Deseleccionar Todos</button>
                    </div>
                    
                    <div style="max-height: 300px; overflow-y: auto; border: 1px solid #dee2e6; border-radius: 4px; padding: 1rem; background: #f8f9fa;">
                        ${advisors.map(advisor => `
                            <div style="display: flex; align-items: center; padding: 0.5rem; margin-bottom: 0.5rem; background: white; border-radius: 4px; border: 1px solid #e9ecef;">
                                <input type="checkbox" 
                                       id="dynamicAdvisor_${advisor.id}" 
                                       value="${advisor.name}"
                                       ${sequence.assignedAdvisors.includes(advisor.name) ? 'checked' : ''}
                                       style="margin-right: 0.5rem; cursor: pointer;">
                                <label for="dynamicAdvisor_${advisor.id}" style="cursor: pointer; margin: 0; color: #333; font-weight: 500;">${advisor.name}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 4px; border: 1px solid #dee2e6;">
                    <h5 style="margin: 0 0 0.5rem 0; color: #495057;">Asignaciones Actuales:</h5>
                    <div style="min-height: 50px;">
                        ${sequence.assignedAdvisors.length > 0 ? 
                            sequence.assignedAdvisors.map(advisor => `
                                <span style="display: inline-block; background: #007bff; color: white; padding: 0.25rem 0.5rem; border-radius: 12px; margin: 0.25rem; font-size: 0.8rem;">
                                    ${advisor}
                                    <button onclick="window.crm.removeAdvisorFromSequenceInModal(${sequenceId}, '${advisor}')" style="background: none; border: none; color: white; margin-left: 0.5rem; cursor: pointer;">×</button>
                                </span>
                            `).join('') : 
                            '<p style="color: #6c757d; margin: 0;">Sin asignaciones</p>'
                        }
                    </div>
                </div>
                
                <div style="display: flex; justify-content: flex-end; gap: 1rem; padding-top: 1rem; border-top: 1px solid #dee2e6;">
                    <button onclick="window.crm.saveAdvisorAssignments(${sequenceId})" style="padding: 0.75rem 1.5rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">Guardar Asignaciones</button>
                    <button onclick="document.getElementById('dynamicAssignModal').remove()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancelar</button>
                </div>
            </div>
        `;
        
        // Agregar event listener para cerrar con click fuera
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('Click fuera del modal, cerrando...');
                document.getElementById('dynamicAssignModal').remove();
            }
        });
        
        document.body.appendChild(modal);
        console.log('Modal dinámico de asignación creado y mostrado');
    }
    
    selectAllAdvisorsInModal() {
        console.log('Seleccionando todos los asesores en modal dinámico...');
        const checkboxes = document.querySelectorAll('#dynamicAssignModal input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        console.log('Todos los asesores seleccionados');
    }
    
    deselectAllAdvisorsInModal() {
        console.log('Deseleccionando todos los asesores en modal dinámico...');
        const checkboxes = document.querySelectorAll('#dynamicAssignModal input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        console.log('Todos los asesores deseleccionados');
    }
    
    saveAdvisorAssignments(sequenceId) {
        console.log('Guardando asignaciones de asesores para secuencia:', sequenceId);
        
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) {
            console.error('Secuencia no encontrada para guardar asignaciones');
            return;
        }
        
        // Obtener asesores seleccionados
        const checkboxes = document.querySelectorAll('#dynamicAssignModal input[type="checkbox"]:checked');
        const selectedAdvisors = Array.from(checkboxes).map(cb => cb.value);
        
        console.log('Asesores seleccionados:', selectedAdvisors);
        
        // Actualizar asignaciones
        const previousAdvisors = sequence.assignedAdvisors || [];
        sequence.assignedAdvisors = selectedAdvisors;
        
        // Crear tareas automáticamente para nuevos asesores asignados
        const newAdvisors = selectedAdvisors.filter(advisor => !previousAdvisors.includes(advisor));
        if (newAdvisors.length > 0) {
            console.log('Creando tareas automáticamente para nuevos asesores:', newAdvisors);
            this.createAutomaticTasks(sequence, newAdvisors);
        }
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal
        document.getElementById('dynamicAssignModal').remove();
        
        // Actualizar vista de secuencias
        this.updateManagerSequences();
        
        alert(`Secuencia "${sequence.name}" asignada a ${selectedAdvisors.length} asesor(es). ${newAdvisors.length > 0 ? 'Tareas creadas automáticamente.' : ''}`);
        console.log('Asignaciones guardadas exitosamente');
    }
    
    createAutomaticTasks(sequence, advisors) {
        console.log('=== CREANDO TAREAS AUTOMÁTICAS ===');
        console.log('Secuencia:', sequence.name, 'Estado:', sequence.state);
        console.log('Asesores:', advisors);
        
        let totalTasksCreated = 0;
        
        advisors.forEach(advisorName => {
            console.log(`Procesando asesor: ${advisorName}`);
            
            // Obtener clientes del asesor que están en el estado de la secuencia
            const clientsInState = this.leads.filter(lead => 
                lead.advisor === advisorName && lead.status === sequence.state
            );
            
            console.log(`Clientes de ${advisorName} en estado ${sequence.state}:`, clientsInState.length);
            console.log('Clientes encontrados:', clientsInState.map(c => ({ id: c.id, name: c.name, status: c.status })));
            
            if (clientsInState.length === 0) {
                console.log(`No hay clientes en estado ${sequence.state} para ${advisorName}`);
                return;
            }
            
            // Crear tareas para cada cliente según las acciones de la secuencia
            clientsInState.forEach(client => {
                console.log(`Creando tareas para cliente: ${client.name} (ID: ${client.id})`);
                
                if (!sequence.actions || sequence.actions.length === 0) {
                    console.log('La secuencia no tiene acciones definidas');
                    return;
                }
                
                sequence.actions.forEach((action, actionIndex) => {
                    console.log(`Procesando acción ${actionIndex + 1}: ${action.type}`);
                    
                    // Calcular fecha de vencimiento basada en el delay
                    const delayHours = this.parseTimeToHours(action.delay);
                    const dueDate = new Date();
                    dueDate.setHours(dueDate.getHours() + delayHours);
                    
                    // Crear múltiples tareas según la cantidad especificada
                    for (let i = 0; i < (action.count || 1); i++) {
                        const taskId = Date.now() + Math.random();
                        const task = {
                            id: taskId,
                            leadId: client.id,
                            type: action.type,
                            dueDate: dueDate,
                            duration: this.getDefaultDuration(action.type),
                            status: 'abierta',
                            notes: `Tarea generada automáticamente de la secuencia "${sequence.name}" - Acción ${actionIndex + 1}${action.count > 1 ? ` (${i + 1}/${action.count})` : ''}`,
                            advisor: advisorName,
                            createdAt: new Date(),
                            sequenceId: sequence.id,
                            actionIndex: actionIndex,
                            isAutoGenerated: true
                        };
                        
                        this.tasks.push(task);
                        totalTasksCreated++;
                        
                        console.log(`Tarea creada: ${action.type} para ${client.name} - Vence: ${dueDate.toLocaleString('es-ES')}`);
                        
                        // Agregar actividad al historial del cliente
                        this.addActivity(client.id, 'Tarea automática creada', `Tarea "${action.type}" creada automáticamente desde secuencia "${sequence.name}"`);
                        
                        // Ajustar fecha para la siguiente tarea si hay múltiples
                        dueDate.setHours(dueDate.getHours() + 1);
                    }
                });
            });
        });
        
        console.log(`=== TAREAS AUTOMÁTICAS CREADAS: ${totalTasksCreated} ===`);
        return totalTasksCreated;
    }
    
    parseTimeToHours(timeString) {
        // Convertir strings como "2h", "30m", "1d" a horas
        if (!timeString) return 0;
        
        const timeStr = timeString.toLowerCase().trim();
        const value = parseInt(timeStr);
        
        if (timeStr.includes('h')) {
            return value; // horas
        } else if (timeStr.includes('m')) {
            return value / 60; // minutos a horas
        } else if (timeStr.includes('d')) {
            return value * 24; // días a horas
        } else {
            return value; // asumir horas por defecto
        }
    }
    
    getDefaultDuration(taskType) {
        // Duración por defecto según el tipo de tarea
        const durations = {
            'Llamada': 30,
            'Mensaje': 5,
            'Correo': 15,
            'Reunión presencial': 60
        };
        return durations[taskType] || 30;
    }
    
    removeAdvisorFromSequenceInModal(sequenceId, advisorName) {
        console.log('Removiendo asesor del modal:', advisorName);
        
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) return;
        
        // Remover asesor de la lista
        sequence.assignedAdvisors = sequence.assignedAdvisors.filter(advisor => advisor !== advisorName);
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal actual y reabrir con datos actualizados
        document.getElementById('dynamicAssignModal').remove();
        this.openAssignAdvisorsModal(sequenceId);
        
        console.log('Asesor removido y modal actualizado');
    }
    
    populateAssignAdvisorsModal(sequence) {
        console.log('Poblando modal de asignación para secuencia:', sequence.name);
        
        // Actualizar nombre de la secuencia
        const sequenceNameEl = document.getElementById('assignmentSequenceName');
        if (sequenceNameEl) {
            sequenceNameEl.textContent = sequence.name;
            console.log('Nombre de secuencia actualizado');
        } else {
            console.error('Elemento assignmentSequenceName no encontrado');
        }
        
        // Poblar lista de asesores
        const advisorsList = document.getElementById('advisorsList');
        if (!advisorsList) {
            console.error('Elemento advisorsList no encontrado');
            return;
        }
        
        const advisors = this.getVisibleAdvisors();
        console.log('Asesores visibles encontrados:', advisors.length);
        console.log('Lista de asesores visibles:', advisors.map(a => a.name));
        
        const advisorsHTML = advisors.map(advisor => `
            <div class="advisor-checkbox-item">
                <input type="checkbox" 
                       id="advisor_${advisor.id}" 
                       value="${advisor.name}"
                       ${sequence.assignedAdvisors.includes(advisor.name) ? 'checked' : ''}>
                <label for="advisor_${advisor.id}">${advisor.name}</label>
            </div>
        `).join('');
        
        console.log('HTML de asesores generado:', advisorsHTML);
        advisorsList.innerHTML = advisorsHTML;
        console.log('HTML de asesores insertado en el DOM');
        
        // Actualizar asignaciones actuales
        this.updateCurrentAssignmentsDisplay(sequence);
    }
    
    updateCurrentAssignmentsDisplay(sequence) {
        const currentAssignmentsList = document.getElementById('currentAssignmentsList');
        currentAssignmentsList.innerHTML = this.renderCurrentAssignments(sequence);
    }
    
    removeAdvisorFromSequence(sequenceId, advisorName) {
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) return;
        
        if (sequence.assignedAdvisors) {
            sequence.assignedAdvisors = sequence.assignedAdvisors.filter(name => name !== advisorName);
            this.saveData();
            this.updateManagerSequences();
            this.showNotification(`Asesor ${advisorName} removido de la secuencia`, 'info');
        }
    }
    
    saveMultipleAssignments() {
        const sequenceId = this.currentSequenceId;
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) return;
        
        // Obtener asesores seleccionados
        const checkboxes = document.querySelectorAll('#advisorsList input[type="checkbox"]:checked');
        const selectedAdvisors = Array.from(checkboxes).map(cb => cb.value);
        
        // Actualizar asignaciones
        sequence.assignedAdvisors = selectedAdvisors;
        
        // Guardar cambios
        this.saveData();
        
        // Actualizar visualización
        this.updateManagerSequences();
        this.updateCurrentAssignmentsDisplay(sequence);
        
        // Cerrar modal
        this.closeModal('assignAdvisorsModal');
        
        // Mostrar notificación
        if (selectedAdvisors.length > 0) {
            this.showNotification(`Secuencia asignada a ${selectedAdvisors.length} asesor(es)`, 'success');
        } else {
            this.showNotification('Todas las asignaciones removidas', 'info');
        }
    }
    
    selectAllAdvisors() {
        const checkboxes = document.querySelectorAll('#advisorsList input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
    }
    
    deselectAllAdvisors() {
        const checkboxes = document.querySelectorAll('#advisorsList input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    addTestButton() {
        // Agregar botón de prueba temporal para debug
        const sequencesSection = document.getElementById('sequences');
        if (sequencesSection) {
            const testButton = document.createElement('button');
            testButton.textContent = '🔍 Debug Secuencias';
            testButton.className = 'btn btn-warning';
            testButton.style.margin = '10px';
            testButton.onclick = () => {
                console.log('=== DEBUG SECUENCIAS ===');
                console.log('Secuencias en memoria:', this.sequences);
                console.log('Secuencias en localStorage:', localStorage.getItem('crmData'));
                console.log('Elemento sequencesList:', document.getElementById('sequencesList'));
                console.log('Elemento sequenceCount:', document.getElementById('sequenceCount'));
                this.updateManagerSequences();
            };
            sequencesSection.appendChild(testButton);
        }
    }
    
    // Advisor specific methods
    setupAdvisorEventListeners() {
        // Logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.getAttribute('data-section');
                this.showAdvisorSection(section);
            });
        });
        
        // Task creation
        const createTaskBtn = document.getElementById('createTaskBtn');
        if (createTaskBtn) {
            createTaskBtn.addEventListener('click', () => {
                this.showTaskModal();
            });
        }

        // Lead creation
        const createLeadBtn = document.getElementById('createLeadBtn');
        if (createLeadBtn) {
            createLeadBtn.addEventListener('click', () => {
                this.showCreateLeadModal();
            });
        }
        
        // Task form
        const taskForm = document.getElementById('taskForm');
        if (taskForm) {
            taskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveTask();
            });
        }
        
        // Complete task form
        const completeTaskForm = document.getElementById('completeTaskForm');
        if (completeTaskForm) {
            completeTaskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.completeTaskFromModal();
            });
        }

        // Create lead form
        const createLeadForm = document.getElementById('createLeadForm');
        if (createLeadForm) {
            createLeadForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.createLeadFromModal();
            });
        }

        // Cancel lead creation
        const cancelLeadBtn = document.getElementById('cancelLead');
        if (cancelLeadBtn) {
            cancelLeadBtn.addEventListener('click', () => {
                this.closeModal('createLeadModal');
            });
        }

        // Close modals when clicking X
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close')) {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                }
            }
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });
        
        // Task filters
        const taskStatusFilter = document.getElementById('taskStatusFilter');
        if (taskStatusFilter) {
            taskStatusFilter.addEventListener('change', () => {
                this.filterTasks();
            });
        }
        
        const taskTypeFilter = document.getElementById('taskTypeFilter');
        if (taskTypeFilter) {
            taskTypeFilter.addEventListener('change', () => {
                this.filterTasks();
            });
        }
    }
    
    showAdvisorSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update section content
        switch (sectionName) {
            case 'dashboard':
                console.log('Actualizando dashboard del asesor');
                this.updateAdvisorDashboard();
                break;
            case 'kanban':
                console.log('Actualizando kanban del asesor');
                this.updateAdvisorKanban();
                break;
            case 'tasks':
                console.log('Actualizando tareas del asesor');
                // Force update tasks when switching to tasks section
                setTimeout(() => {
                    this.updateAdvisorTasks();
                }, 50);
                break;
            case 'calendar':
                console.log('Actualizando calendario del asesor');
                this.updateAdvisorCalendar();
                break;
            case 'leads':
                console.log('Actualizando leads del asesor');
                this.updateAdvisorLeads();
                break;
            case 'clients':
                console.log('Actualizando clientes del asesor');
                this.updateAdvisorClients();
                break;
        }
        
        // Always update Kanban when switching sections to ensure data is current
        if (this.currentRole === 'advisor') {
            this.updateAdvisorKanban();
        }
    }
    
    updateAdvisorDashboard() {
        // Get advisor-specific statistics
        const leads = this.getLeadsForUser();
        const tasks = this.getTasksForUser();
        
        const totalLeads = leads.length;
        const completedTasks = tasks.filter(task => task.status === 'completada').length;
        const conversions = leads.filter(lead => lead.status === 'Cierre').length;
        const conversionRate = totalLeads > 0 ? Math.round((conversions / totalLeads) * 100) : 0;
        
        // Update dashboard elements
        const myLeadsCount = document.getElementById('myLeadsCount');
        const myCompletedTasks = document.getElementById('myCompletedTasks');
        const myConversions = document.getElementById('myConversions');
        const myConversionRate = document.getElementById('myConversionRate');
        
        if (myLeadsCount) myLeadsCount.textContent = totalLeads;
        if (myCompletedTasks) myCompletedTasks.textContent = completedTasks;
        if (myConversions) myConversions.textContent = conversions;
        if (myConversionRate) myConversionRate.textContent = `${conversionRate}%`;
        
        // Actualizar secuencias asignadas
        this.updateAssignedSequences();
        
        console.log('Dashboard actualizado:', { totalLeads, completedTasks, conversions, conversionRate });
    }
    
    updateAssignedSequences() {
        console.log('Actualizando secuencias asignadas para asesor:', this.currentUser.name);
        
        const assignedSequencesWidget = document.getElementById('assignedSequencesWidget');
        if (!assignedSequencesWidget) {
            console.error('Widget de secuencias asignadas no encontrado');
            return;
        }
        
        // Obtener secuencias asignadas al asesor actual
        const assignedSequences = this.sequences.filter(sequence => {
            return sequence.assignedAdvisors && sequence.assignedAdvisors.includes(this.currentUser.name);
        });
        
        console.log('Secuencias asignadas encontradas:', assignedSequences.length);
        console.log('Detalles de secuencias:', assignedSequences.map(s => ({ id: s.id, name: s.name, state: s.state })));
        
        if (assignedSequences.length === 0) {
            assignedSequencesWidget.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #6c757d; background: #f8f9fa; border-radius: 8px; border: 2px dashed #dee2e6;">
                    <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">📋</div>
                    <h4 style="margin: 0 0 0.5rem 0; color: #495057;">Sin Secuencias Asignadas</h4>
                    <p style="margin: 0; font-size: 0.9rem;">No tienes secuencias asignadas por el momento</p>
                </div>
            `;
            return;
        }
        
        // Generar HTML para las secuencias asignadas
        assignedSequencesWidget.innerHTML = `
            <div style="display: grid; gap: 1rem;">
                ${assignedSequences.map(sequence => `
                    <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <h5 style="margin: 0; color: #333; font-weight: 600;">${sequence.name}</h5>
                            <span style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                                ${sequence.state}
                            </span>
                        </div>
                        <p style="margin: 0 0 0.5rem 0; color: #6c757d; font-size: 0.9rem;">${sequence.description || 'Sin descripción'}</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <small style="color: #28a745; font-weight: 500;">
                                📊 ${sequence.actions ? sequence.actions.length : 0} acciones
                            </small>
                            <button onclick="window.crm.viewSequenceDetails(${sequence.id})" style="padding: 0.25rem 0.5rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        console.log('Widget de secuencias asignadas actualizado');
    }
    
    viewSequenceDetails(sequenceId) {
        console.log('Viendo detalles de secuencia:', sequenceId);
        const sequence = this.sequences.find(s => s.id === sequenceId);
        if (!sequence) {
            console.error('Secuencia no encontrada');
            return;
        }
        
        // Crear modal dinámico para mostrar detalles de la secuencia
        const modal = document.createElement('div');
        modal.id = 'sequenceDetailsModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #dee2e6;">
                    <h3 style="margin: 0; color: #333;">📋 ${sequence.name}</h3>
                    <button onclick="document.getElementById('sequenceDetailsModal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; padding: 0; width: 30px; height: 30px;">&times;</button>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #495057;">Información de la Secuencia:</h4>
                    <p><strong>Estado aplicable:</strong> ${sequence.state}</p>
                    <p><strong>Descripción:</strong> ${sequence.description || 'Sin descripción'}</p>
                    <p><strong>Asesores asignados:</strong> ${sequence.assignedAdvisors ? sequence.assignedAdvisors.join(', ') : 'Ninguno'}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 1rem 0; color: #495057;">Acciones de la Secuencia (${sequence.actions ? sequence.actions.length : 0}):</h4>
                    <div style="max-height: 300px; overflow-y: auto; border: 1px solid #dee2e6; border-radius: 4px; padding: 1rem; background: #f8f9fa;">
                        ${sequence.actions && sequence.actions.length > 0 ? 
                            sequence.actions.map((action, index) => `
                                <div style="background: white; border: 1px solid #e9ecef; border-radius: 4px; padding: 1rem; margin-bottom: 0.5rem;">
                                    <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                                        <span style="background: #007bff; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-right: 0.5rem;">
                                            ${index + 1}
                                        </span>
                                        <strong style="color: #333;">${action.type}</strong>
                                    </div>
                                    <div style="font-size: 0.9rem; color: #6c757d; margin-left: 2rem;">
                                        <p style="margin: 0.25rem 0;"><strong>Cantidad:</strong> ${action.count}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Delay:</strong> ${action.delay}</p>
                                        <p style="margin: 0.25rem 0;"><strong>Tiempo máximo:</strong> ${action.maxTime}</p>
                                    </div>
                                </div>
                            `).join('') : 
                            '<p style="text-align: center; color: #6c757d; margin: 2rem 0;">No hay acciones definidas en esta secuencia</p>'
                        }
                    </div>
                </div>
                
                <div style="text-align: right; padding-top: 1rem; border-top: 1px solid #dee2e6;">
                    <button onclick="document.getElementById('sequenceDetailsModal').remove()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Cerrar</button>
                </div>
            </div>
        `;
        
        // Agregar event listener para cerrar con click fuera
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.getElementById('sequenceDetailsModal').remove();
            }
        });
        
        document.body.appendChild(modal);
        console.log('Modal de detalles de secuencia mostrado');
    }
    
    confirmDeleteTask(taskId) {
        console.log('Confirmando eliminación de tarea:', taskId);
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) {
            console.error('Tarea no encontrada:', taskId);
            return;
        }
        
        console.log('Tarea encontrada:', task.type, 'para cliente:', this.getLeadName(task.leadId));
        
        // Crear modal de confirmación dinámico
        const modal = document.createElement('div');
        modal.id = 'deleteTaskModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #dee2e6;">
                    <h3 style="margin: 0; color: #dc3545;">🗑️ Eliminar Tarea</h3>
                    <button onclick="document.getElementById('deleteTaskModal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; padding: 0; width: 30px; height: 30px;">&times;</button>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                        <h4 style="margin: 0 0 0.5rem 0; color: #856404;">⚠️ Confirmar Eliminación</h4>
                        <p style="margin: 0; color: #856404;">¿Estás seguro de que deseas eliminar esta tarea?</p>
                    </div>
                    
                    <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 1rem;">
                        <h5 style="margin: 0 0 0.5rem 0; color: #495057;">Información de la Tarea:</h5>
                        <p style="margin: 0.25rem 0;"><strong>Tipo:</strong> ${task.type}</p>
                        <p style="margin: 0.25rem 0;"><strong>Cliente:</strong> ${this.getLeadName(task.leadId)}</p>
                        <p style="margin: 0.25rem 0;"><strong>Fecha límite:</strong> ${new Date(task.dueDate).toLocaleString('es-ES')}</p>
                        <p style="margin: 0.25rem 0;"><strong>Estado:</strong> ${task.status}</p>
                        ${task.isAutoGenerated ? '<p style="margin: 0.25rem 0; color: #007bff;"><strong>Origen:</strong> Generada automáticamente</p>' : ''}
                        ${task.notes ? `<p style="margin: 0.25rem 0;"><strong>Notas:</strong> ${task.notes}</p>` : ''}
                    </div>
                </div>
                
                <div style="display: flex; justify-content: flex-end; gap: 1rem; padding-top: 1rem; border-top: 1px solid #dee2e6;">
                    <button onclick="window.crm.deleteTask(${taskId})" style="padding: 0.75rem 1.5rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
                        🗑️ Sí, Eliminar
                    </button>
                    <button onclick="document.getElementById('deleteTaskModal').remove()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Cancelar
                    </button>
                </div>
            </div>
        `;
        
        // Agregar event listener para cerrar con click fuera
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.getElementById('deleteTaskModal').remove();
            }
        });
        
        document.body.appendChild(modal);
        console.log('Modal de confirmación de eliminación mostrado');
    }
    
    deleteTask(taskId) {
        console.log('Eliminando tarea:', taskId);
        const taskIndex = this.tasks.findIndex(t => t.id === taskId);
        if (taskIndex === -1) {
            console.error('Tarea no encontrada para eliminar:', taskId);
            alert('Error: Tarea no encontrada');
            return;
        }
        
        const task = this.tasks[taskIndex];
        console.log('Tarea a eliminar:', task.type, 'para cliente:', this.getLeadName(task.leadId));
        
        // Agregar actividad al historial del cliente
        this.addActivity(task.leadId, 'Tarea eliminada', `Tarea "${task.type}" eliminada por el asesor`);
        
        // Eliminar la tarea del array
        this.tasks.splice(taskIndex, 1);
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal
        document.getElementById('deleteTaskModal').remove();
        
        // Actualizar vista de tareas
        this.updateAdvisorTasks();
        
        // Actualizar dashboard si estamos en esa vista
        if (document.querySelector('#dashboard.content-section.active')) {
            this.updateAdvisorDashboard();
        }
        
        alert('Tarea eliminada exitosamente');
        console.log('Tarea eliminada y vista actualizada');
    }
    
    updateAdvisorKanban() {
        const leads = this.getLeadsForUser();
        const states = ['Calificar', 'Desarrollar', 'Proponer', 'Cierre'];
        
        console.log('Actualizando Kanban con', leads.length, 'leads');
        
        // Add loading indicator
        const kanbanBoard = document.querySelector('.kanban-board');
        if (kanbanBoard) {
            kanbanBoard.classList.add('loading');
        }
        
        // Use setTimeout to show the update visually
        setTimeout(() => {
            states.forEach(state => {
                const stateLeads = leads.filter(lead => lead.status === state);
                const countElement = document.getElementById(`${state.toLowerCase()}Count`);
                const contentElement = document.getElementById(`${state.toLowerCase()}Leads`);
                
                if (countElement) {
                    countElement.textContent = stateLeads.length;
                    console.log(`Estado ${state}: ${stateLeads.length} leads`);
                }
                
                if (contentElement) {
                    contentElement.innerHTML = stateLeads.map(lead => {
                        const interestClass = lead.interest ? lead.interest.toLowerCase().replace(' ', '') : 'sin-definir';
                        const canAdvance = state !== 'Cierre';
                        
                        return `
                            <div class="lead-card" data-lead-id="${lead.id}" draggable="true">
                                <h4>${lead.name}</h4>
                                <p><strong>Empresa:</strong> ${lead.company}</p>
                                <p><strong>Interés:</strong> <span class="lead-interest interest-${interestClass}">${lead.interest}</span></p>
                                <p><strong>Última actividad:</strong> ${this.formatDate(lead.lastActivity)}</p>
                                <div class="lead-actions">
                                    <button class="btn btn-primary" onclick="window.crm.showLeadDetail(${lead.id})">👁️ Ver</button>
                                    ${canAdvance ? `<button class="btn btn-success" onclick="window.crm.advanceLeadState(${lead.id})">⬆️ Avanzar</button>` : ''}
                                    <button class="btn btn-warning" onclick="window.crm.qualifyClient(${lead.id})" title="Calificar cliente">⭐ Calificar</button>
                                    <button class="btn btn-danger" onclick="window.crm.confirmDeleteClient(${lead.id})" title="Eliminar cliente">🗑️ Eliminar</button>
                                </div>
                            </div>
                        `;
                    }).join('');
                }
            });
            
            // Remove loading indicator
            if (kanbanBoard) {
                kanbanBoard.classList.remove('loading');
            }
            
            // Setup drag and drop functionality
            this.setupDragAndDrop();
            
            // Update dashboard stats as well
            this.updateAdvisorDashboard();
        }, 100); // Small delay to show the update
    }
    
    setupDragAndDrop() {
        const leadCards = document.querySelectorAll('.lead-card[draggable="true"]');
        const dropZones = document.querySelectorAll('.column-content[data-state]');
        
        // Setup drag events for lead cards
        leadCards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', card.dataset.leadId);
                card.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });
            
            card.addEventListener('dragend', (e) => {
                card.classList.remove('dragging');
                // Remove drag-over class from all drop zones
                dropZones.forEach(zone => zone.classList.remove('drag-over'));
            });
        });
        
        // Setup drop events for columns
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                zone.classList.add('drag-over');
            });
            
            zone.addEventListener('dragleave', (e) => {
                // Only remove drag-over if we're leaving the zone entirely
                if (!zone.contains(e.relatedTarget)) {
                    zone.classList.remove('drag-over');
                }
            });
            
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                
                const leadId = parseInt(e.dataTransfer.getData('text/plain'));
                const newState = zone.dataset.state;
                
                if (leadId && newState) {
                    this.moveLeadToState(leadId, newState);
                }
            });
        });
    }
    
    moveLeadToState(leadId, newState) {
        const lead = this.leads.find(l => l.id === leadId);
        if (!lead) {
            this.showNotification('Lead no encontrado', 'error');
            return;
        }
        
        const previousState = lead.status;
        
        // Check if the move is valid (can move to any state)
        if (previousState === newState) {
            this.showNotification('El lead ya está en este estado', 'warning');
            return;
        }
        
        // Update lead state
        lead.status = newState;
        lead.lastActivity = new Date();
        
        // Save data
        this.saveData();
        
        // Add activity
        this.addActivity(leadId, 'Estado cambiado', `Lead movido de ${previousState} a ${newState} mediante drag & drop`);
        
        // Update Kanban board
        this.updateAdvisorKanban();
        
        // Show notification
        this.showNotification(`Lead movido a ${newState}`, 'success');
        
        console.log(`Lead ${leadId} movido de ${previousState} a ${newState}`);
    }
    
    showTaskModal() {
        const modal = document.getElementById('taskModal');
        if (modal) {
            modal.classList.add('show');
            this.populateTaskForm();
        }
    }

    showCreateLeadModal() {
        const modal = document.getElementById('createLeadModal');
        if (modal) {
            modal.classList.add('show');
            // Clear form
            document.getElementById('createLeadForm').reset();
        }
    }
    
    populateTaskForm() {
        const leads = this.getLeadsForUser();
        const leadSelect = document.getElementById('taskLead');
        
        if (leadSelect) {
            leadSelect.innerHTML = '<option value="">Seleccionar lead...</option>' +
                leads.map(lead => `<option value="${lead.id}">${lead.name} - ${lead.company}</option>`).join('');
        }
    }
    
    saveTask() {
        const leadId = parseInt(document.getElementById('taskLead').value);
        const type = document.getElementById('taskType').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const duration = parseInt(document.getElementById('taskDuration').value);
        const notes = document.getElementById('taskNotes').value;
        
        const taskData = {
            leadId,
            type,
            dueDate: new Date(dueDate),
            duration,
            notes,
            status: 'abierto'
        };
        
        this.createTask(taskData);
        this.showNotification('Tarea creada exitosamente', 'success');
        this.closeModal('taskModal');
        this.updateAdvisorTasks();
    }
    
    completeTaskFromModal() {
        const taskId = parseInt(document.getElementById('completeTaskId').value);
        const notes = document.getElementById('completionNotes').value;
        
        if (this.completeTask(taskId, notes)) {
            this.showNotification('Tarea completada exitosamente', 'success');
            this.closeModal('completeTaskModal');
            this.updateAdvisorTasks();
        }
    }

    createLeadFromModal() {
        const name = document.getElementById('leadName').value;
        const company = document.getElementById('leadCompany').value;
        const email = document.getElementById('leadEmail').value;
        const phone = document.getElementById('leadPhone').value;
        const interest = document.getElementById('leadInterest').value;
        const notes = document.getElementById('leadNotes').value;
        
        const leadData = {
            name,
            company,
            email,
            phone,
            status: 'Calificar',
            interest,
            advisor: this.currentUser.name,
            notes
        };
        
        const newLead = this.createLead(leadData);
        
        if (newLead) {
            this.showNotification('Lead creado exitosamente', 'success');
            this.closeModal('createLeadModal');
            
            // Update Kanban board immediately
            this.updateAdvisorKanban();
            
            // Add activity
            this.addActivity(newLead.id, 'Lead creado', 'Nuevo lead agregado al sistema');
            
            console.log('Nuevo lead creado:', newLead);
        } else {
            this.showNotification('Error al crear el lead', 'error');
        }
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    }
    
    // Global methods for all roles
    showLeadDetail(leadId) {
        this.createLeadDetailModal(leadId);
    }

    createLeadDetailModal(leadId) {
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            console.error('Lead no encontrado:', leadId);
            return;
        }

        // Remover modal existente
        const existingModal = document.getElementById('leadDetailModalDynamic');
        if (existingModal) {
            existingModal.remove();
        }

        const activities = this.getActivitiesForLead(leadId);
        const modal = this.buildLeadDetailModalHTML(lead, activities, leadId);
        
        document.body.appendChild(modal);
        this.setupLeadDetailModalEvents(modal);
        
        console.log('Modal de detalle de lead mostrado para:', lead.name);
    }

    buildLeadDetailModalHTML(lead, activities, leadId) {
        const modal = document.createElement('div');
        modal.id = 'leadDetailModalDynamic';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center;
            align-items: center; z-index: 10000; animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div style="background: white; width: 90%; max-width: 900px; max-height: 85vh;
                border-radius: 12px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                overflow: hidden; display: flex; flex-direction: column; animation: slideIn 0.3s ease;">
                
                ${this.getModalHeader(lead)}
                ${this.getModalContent(lead, activities, leadId)}
                ${this.getModalFooter(leadId)}
            </div>
        `;

        this.addModalStyles();
        return modal;
    }

    getModalHeader(lead) {
        return `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white;
                padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center;
                border-bottom: 3px solid #0056b3;">
                <div>
                    <h2 style="margin: 0; font-size: 1.5rem; font-weight: 600;">
                        🔍 Detalle de ${lead.name}
                    </h2>
                    <p style="margin: 0.5rem 0 0 0; opacity: 0.9; font-size: 0.9rem;">
                        ${lead.company || 'Sin empresa'} • ${lead.status}
                    </p>
                </div>
                <button onclick="document.getElementById('leadDetailModalDynamic').remove()" 
                    style="background: rgba(255, 255, 255, 0.2); border: none; color: white;
                    width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.2rem;
                    display: flex; align-items: center; justify-content: center; transition: background-color 0.2s;"
                    onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'"
                    onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
                    ✕
                </button>
            </div>
        `;
    }

    getModalContent(lead, activities, leadId) {
        return `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;
                overflow-y: auto; flex: 1; background: #f8f9fa;">
                ${this.getLeadInfoColumn(lead)}
                ${this.getActivitiesColumn(activities, leadId)}
            </div>
        `;
    }

    getLeadInfoColumn(lead) {
        return `
            <div style="background: white; border-radius: 12px; padding: 1.5rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); height: fit-content;">
                <h3 style="color: #007bff; margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 600;
                    display: flex; align-items: center; gap: 0.5rem; border-bottom: 2px solid #e9ecef;
                    padding-bottom: 0.75rem;">
                    📋 Información General
                </h3>
                <div style="display: grid; gap: 1rem;">
                    ${this.getContactInfo(lead)}
                    ${this.getStatusInfo(lead)}
                    ${this.getManagementInfo(lead)}
                    ${lead.notes ? this.getNotesInfo(lead) : ''}
                </div>
            </div>
        `;
    }

    getContactInfo(lead) {
        return `
            <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                padding: 1rem; border-radius: 8px; border-left: 4px solid #007bff;">
                <h4 style="color: #495057; margin: 0 0 0.75rem 0; font-size: 1rem;">👤 Contacto</h4>
                <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                    <div><strong>Nombre:</strong> ${lead.name}</div>
                    <div><strong>Email:</strong> ${lead.email || 'No especificado'}</div>
                    <div><strong>Teléfono:</strong> ${lead.phone || 'No especificado'}</div>
                    <div><strong>Empresa:</strong> ${lead.company || 'Sin empresa'}</div>
                </div>
            </div>
        `;
    }

    getStatusInfo(lead) {
        return `
            <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                padding: 1rem; border-radius: 8px; border-left: 4px solid #28a745;">
                <h4 style="color: #495057; margin: 0 0 0.75rem 0; font-size: 1rem;">📊 Estado</h4>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <strong>Estado:</strong>
                        <span style="background: linear-gradient(135deg, #007bff, #0056b3);
                            color: white; padding: 0.25rem 0.75rem; border-radius: 15px;
                            font-size: 0.8rem; font-weight: 600;">${lead.status}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <strong>Interés:</strong>
                        <span style="background: linear-gradient(135deg, #28a745, #20c997);
                            color: white; padding: 0.25rem 0.75rem; border-radius: 15px;
                            font-size: 0.8rem; font-weight: 600;">${lead.interest || lead.interestLevel || 'No definido'}</span>
                    </div>
                </div>
            </div>
        `;
    }

    getManagementInfo(lead) {
        return `
            <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107;">
                <h4 style="color: #495057; margin: 0 0 0.75rem 0; font-size: 1rem;">⚙️ Gestión</h4>
                <div style="display: grid; gap: 0.5rem; font-size: 0.9rem;">
                    <div><strong>Asesor:</strong> ${lead.advisor || 'No asignado'}</div>
                    <div><strong>Creado:</strong> ${this.formatDate(lead.createdAt)}</div>
                    <div><strong>Última actividad:</strong> ${this.formatDate(lead.lastActivity)}</div>
                </div>
            </div>
        `;
    }

    getNotesInfo(lead) {
        return `
            <div style="background: linear-gradient(135deg, #fff3cd, #ffeaa7);
                padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107;">
                <h4 style="color: #495057; margin: 0 0 0.75rem 0; font-size: 1rem;">📝 Notas</h4>
                <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: #495057;">
                    ${lead.notes}
                </p>
            </div>
        `;
    }

    getActivitiesColumn(activities, leadId) {
        return `
            <div style="background: white; border-radius: 12px; padding: 1.5rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: flex;
                flex-direction: column; max-height: 500px;">
                <h3 style="color: #007bff; margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 600;
                    display: flex; align-items: center; gap: 0.5rem; border-bottom: 2px solid #e9ecef;
                    padding-bottom: 0.75rem;">
                    📈 Historial de Actividades
                    <span style="background: #007bff; color: white; padding: 0.25rem 0.5rem;
                        border-radius: 12px; font-size: 0.8rem; font-weight: 600;">${activities.length}</span>
                </h3>
                <div style="overflow-y: auto; flex: 1; padding-right: 0.5rem;">
                    ${activities.length > 0 ? this.getActivitiesTimeline(activities) : this.getNoActivitiesMessage()}
                </div>
                
                <!-- Sección de Análisis de IA -->
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #e9ecef;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                            🤖 Análisis de IA
                        </h4>
                        <button onclick="window.crm.generateLeadAIAnalysis(${leadId}, this)" 
                            style="padding: 0.4rem 0.8rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">
                            🔄 Analizar
                        </button>
                    </div>
                    <div id="leadAIAnalysis_${leadId}" style="min-height: 60px;">
                        <div style="text-align: center; padding: 1rem; color: #6c757d; font-style: italic;">
                            Haz click en "Analizar" para obtener insights de IA sobre este lead
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getActivitiesTimeline(activities) {
        return `
            <div style="position: relative;">
                <div style="position: absolute; left: 1rem; top: 0; bottom: 0; width: 2px;
                    background: linear-gradient(to bottom, #007bff, #28a745);"></div>
                ${activities.map((activity, index) => this.getActivityItem(activity, index, activities.length)).join('')}
            </div>
        `;
    }

    getActivityItem(activity, index, total) {
        return `
            <div style="position: relative; padding: 1rem 0 1rem 3rem;
                margin-bottom: ${index < total - 1 ? '1rem' : '0'};">
                <div style="position: absolute; left: 0.5rem; top: 1.25rem; width: 12px; height: 12px;
                    background: ${this.getActivityColor(activity.type)}; border: 3px solid white;
                    border-radius: 50%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);"></div>
                <div style="background: ${this.getActivityBgColor(activity.type)}; padding: 1rem;
                    border-radius: 8px; border-left: 4px solid ${this.getActivityColor(activity.type)};
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;
                        margin-bottom: 0.5rem;">
                        <span style="background: ${this.getActivityColor(activity.type)}; color: white;
                            padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;
                            font-weight: 600;">${activity.type}</span>
                        <span style="color: #6c757d; font-size: 0.8rem; font-weight: 500;">
                            ${this.formatDateTime(activity.timestamp)}</span>
                    </div>
                    <p style="margin: 0.5rem 0; color: #495057; line-height: 1.4; font-size: 0.9rem;">
                        ${activity.description}</p>
                    <small style="color: #6c757d; font-weight: 500;">👤 ${activity.user}</small>
                </div>
            </div>
        `;
    }

    getNoActivitiesMessage() {
        return `
            <div style="text-align: center; padding: 3rem 1rem; color: #6c757d;">
                <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">📭</div>
                <h4 style="margin: 0 0 0.5rem 0; color: #495057;">Sin actividades</h4>
                <p style="margin: 0; font-size: 0.9rem;">
                    Aún no hay actividades registradas para este lead.
                </p>
            </div>
        `;
    }

    getModalFooter(leadId) {
        return `
            <div style="padding: 1.5rem 2rem; background: white; border-top: 1px solid #e9ecef;
                display: flex; justify-content: flex-end; gap: 1rem;">
                <button onclick="window.crm.editAdvisorLead && window.crm.editAdvisorLead(${leadId})"
                    style="padding: 0.75rem 1.5rem; background: #28a745; color: white; border: none;
                    border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.2s;"
                    onmouseover="this.style.background='#218838'"
                    onmouseout="this.style.background='#28a745'">
                    ✏️ Editar Lead
                </button>
                <button onclick="window.crm.quickCreateTask && window.crm.quickCreateTask(${leadId})"
                    style="padding: 0.75rem 1.5rem; background: #ffc107; color: #212529; border: none;
                    border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.2s;"
                    onmouseover="this.style.background='#e0a800'"
                    onmouseout="this.style.background='#ffc107'">
                    ➕ Crear Tarea
                </button>
                <button onclick="document.getElementById('leadDetailModalDynamic').remove()"
                    style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none;
                    border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.2s;"
                    onmouseover="this.style.background='#5a6268'"
                    onmouseout="this.style.background='#6c757d'">
                    Cerrar
                </button>
            </div>
        `;
    }

    addModalStyles() {
        if (document.getElementById('leadDetailModalStyles')) return;
        
        const style = document.createElement('style');
        style.id = 'leadDetailModalStyles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @media (max-width: 768px) {
                #leadDetailModalDynamic > div {
                    width: 95% !important;
                    max-width: none !important;
                    margin: 1rem !important;
                }
                #leadDetailModalDynamic > div > div:nth-child(2) {
                    grid-template-columns: 1fr !important;
                    gap: 1rem !important;
                    padding: 1rem !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupLeadDetailModalEvents(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                const style = document.getElementById('leadDetailModalStyles');
                if (style) style.remove();
            }
        });

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                const style = document.getElementById('leadDetailModalStyles');
                if (style) style.remove();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    getActivityColor(type) {
        const colors = {
            'Llamada': '#007bff',
            'Mensaje': '#28a745',
            'Correo': '#ffc107',
            'Reunión presencial': '#dc3545',
            'Estado avanzado': '#17a2b8',
            'Lead creado': '#6f42c1',
            'Tarea completada': '#20c997'
        };
        return colors[type] || '#6c757d';
    }

    getActivityBgColor(type) {
        const colors = {
            'Llamada': '#e3f2fd',
            'Mensaje': '#e8f5e8',
            'Correo': '#fff8e1',
            'Reunión presencial': '#ffebee',
            'Estado avanzado': '#e0f2f1',
            'Lead creado': '#f3e5f5',
            'Tarea completada': '#e0f2f1'
        };
        return colors[type] || '#f8f9fa';
    }

    generateLeadAIAnalysis(leadId, buttonElement) {
        console.log('Generando análisis de IA para lead:', leadId);
        
        const analysisContainer = document.getElementById(`leadAIAnalysis_${leadId}`);
        if (!analysisContainer) {
            console.error('Contenedor de análisis no encontrado');
            return;
        }

        // Mostrar indicador de carga
        analysisContainer.innerHTML = `
            <div style="text-align: center; padding: 1.5rem; color: #007bff;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🤖</div>
                <div style="font-weight: 600;">Analizando historial...</div>
                <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">La IA está procesando las actividades del lead</div>
            </div>
        `;

        // Simular análisis con delay
        setTimeout(() => {
            const lead = this.leads.find(l => l.id == leadId);
            const activities = this.getActivitiesForLead(leadId);
            const analysis = this.simulateLeadAIAnalysis(lead, activities);
            
            analysisContainer.innerHTML = this.renderLeadAIAnalysis(analysis);
        }, 2000);
    }

    simulateLeadAIAnalysis(lead, activities) {
        const analysis = {
            leadName: lead.name,
            totalActivities: activities.length,
            leadStatus: lead.status,
            interestLevel: lead.interest || lead.interestLevel || 'No definido',
            daysSinceCreated: Math.floor((new Date() - new Date(lead.createdAt)) / (1000 * 60 * 60 * 24)),
            daysSinceLastActivity: Math.floor((new Date() - new Date(lead.lastActivity)) / (1000 * 60 * 60 * 24))
        };

        // Análisis de actividades
        const activityTypes = {};
        activities.forEach(activity => {
            activityTypes[activity.type] = (activityTypes[activity.type] || 0) + 1;
        });

        // Calcular probabilidad de cierre
        let closeProbability = 30; // Base
        if (lead.status === 'Cierre') closeProbability = 100;
        else if (lead.status === 'Proponer') closeProbability = 75;
        else if (lead.status === 'Desarrollar') closeProbability = 55;
        else if (lead.status === 'Calificar') closeProbability = 35;

        // Ajustar por interés
        if (analysis.interestLevel.includes('Medianamente')) closeProbability += 15;
        else if (analysis.interestLevel.includes('Interesado')) closeProbability += 10;
        else if (analysis.interestLevel.includes('Poco')) closeProbability -= 10;

        // Ajustar por actividades
        if (analysis.totalActivities > 5) closeProbability += 10;
        else if (analysis.totalActivities < 2) closeProbability -= 15;

        // Ajustar por tiempo sin actividad
        if (analysis.daysSinceLastActivity > 7) closeProbability -= 20;
        else if (analysis.daysSinceLastActivity < 2) closeProbability += 5;

        closeProbability = Math.max(5, Math.min(95, closeProbability));

        // Generar insights
        const insights = [];
        if (analysis.daysSinceLastActivity > 7) {
            insights.push('⚠️ Lead inactivo por más de una semana - Requiere seguimiento urgente');
        }
        if (analysis.totalActivities < 3) {
            insights.push('📞 Pocas interacciones registradas - Aumentar frecuencia de contacto');
        }
        if (lead.status === 'Calificar' && analysis.daysSinceCreated > 14) {
            insights.push('🚀 Lead en calificación por mucho tiempo - Acelerar proceso');
        }
        if (activityTypes['Llamada'] > activityTypes['Correo']) {
            insights.push('📱 Prefiere comunicación telefónica - Priorizar llamadas');
        }
        if (closeProbability > 70) {
            insights.push('💰 Alta probabilidad de cierre - Enfocar recursos aquí');
        }

        // Generar recomendaciones
        const recommendations = [];
        if (lead.status === 'Calificar') {
            recommendations.push('Programar llamada de calificación detallada');
            recommendations.push('Enviar información adicional sobre servicios');
        } else if (lead.status === 'Desarrollar') {
            recommendations.push('Preparar propuesta personalizada');
            recommendations.push('Agendar reunión de presentación');
        } else if (lead.status === 'Proponer') {
            recommendations.push('Hacer seguimiento de la propuesta');
            recommendations.push('Preparar negociación de términos');
        } else if (lead.status === 'Cierre') {
            recommendations.push('Proceso de onboarding del cliente');
            recommendations.push('Programar seguimiento post-venta');
        }

        return {
            ...analysis,
            closeProbability,
            activityTypes,
            insights,
            recommendations
        };
    }

    renderLeadAIAnalysis(analysis) {
        return `
            <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 8px; padding: 1rem;">
                <!-- Métricas Clave -->
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; text-align: center; border-left: 3px solid #007bff;">
                        <div style="font-size: 1.2rem; font-weight: 700; color: #007bff;">${analysis.closeProbability}%</div>
                        <div style="font-size: 0.8rem; color: #6c757d;">Prob. Cierre</div>
                    </div>
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; text-align: center; border-left: 3px solid #28a745;">
                        <div style="font-size: 1.2rem; font-weight: 700; color: #28a745;">${analysis.totalActivities}</div>
                        <div style="font-size: 0.8rem; color: #6c757d;">Actividades</div>
                    </div>
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; text-align: center; border-left: 3px solid #ffc107;">
                        <div style="font-size: 1.2rem; font-weight: 700; color: #ffc107;">${analysis.daysSinceCreated}</div>
                        <div style="font-size: 0.8rem; color: #6c757d;">Días en Sistema</div>
                    </div>
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; text-align: center; border-left: 3px solid ${analysis.daysSinceLastActivity > 7 ? '#dc3545' : '#17a2b8'};">
                        <div style="font-size: 1.2rem; font-weight: 700; color: ${analysis.daysSinceLastActivity > 7 ? '#dc3545' : '#17a2b8'};">${analysis.daysSinceLastActivity}</div>
                        <div style="font-size: 0.8rem; color: #6c757d;">Días Sin Actividad</div>
                    </div>
                </div>

                <!-- Insights -->
                ${analysis.insights.length > 0 ? `
                <div style="margin-bottom: 1rem;">
                    <h5 style="color: #495057; margin: 0 0 0.5rem 0; font-size: 0.9rem; font-weight: 600;">💡 Insights Clave:</h5>
                    <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                        ${analysis.insights.map(insight => `
                            <div style="background: white; padding: 0.5rem; border-radius: 4px; font-size: 0.85rem; 
                                border-left: 3px solid #ffc107; color: #495057;">${insight}</div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Recomendaciones -->
                ${analysis.recommendations.length > 0 ? `
                <div>
                    <h5 style="color: #495057; margin: 0 0 0.5rem 0; font-size: 0.9rem; font-weight: 600;">🎯 Próximas Acciones:</h5>
                    <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                        ${analysis.recommendations.map((rec, index) => `
                            <div style="background: white; padding: 0.5rem; border-radius: 4px; font-size: 0.85rem; 
                                border-left: 3px solid #28a745; color: #495057; display: flex; align-items: center; gap: 0.5rem;">
                                <span style="background: #28a745; color: white; width: 18px; height: 18px; border-radius: 50%; 
                                    display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 600;">${index + 1}</span>
                                ${rec}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }
    
    // Placeholder methods for incomplete functionality
    updateAdminStatistics() {
        // Implementation for admin statistics
    }
    
    updateAdminKPIs() {
        // Implementation for admin KPIs
    }
    
    updateAdminAIAnalysis() {
        // Implementation for admin AI analysis
    }
    
    updateAdminTeamOverview() {
        // Implementation for admin team overview
    }
    
    updateManagerTeamStats() {
        console.log('Actualizando estadísticas del equipo...');
        
        const period = document.getElementById('periodSelect')?.value || 'monthly';
        console.log('Período seleccionado:', period);
        
        const stats = this.getTeamStatistics(period);
        console.log('Estadísticas calculadas:', stats);
        
        // Actualizar estadísticas del equipo
        const teamTotalLeads = document.getElementById('teamTotalLeads');
        const teamTotalActions = document.getElementById('teamTotalActions');
        const teamConversions = document.getElementById('teamConversions');
        const teamConversionRate = document.getElementById('teamConversionRate');
        
        console.log('Elementos encontrados:', {
            teamTotalLeads: !!teamTotalLeads,
            teamTotalActions: !!teamTotalActions,
            teamConversions: !!teamConversions,
            teamConversionRate: !!teamConversionRate
        });
        
        if (teamTotalLeads) {
            teamTotalLeads.textContent = stats.totalLeads;
            console.log('Total leads actualizado:', stats.totalLeads);
        }
        if (teamTotalActions) {
            teamTotalActions.textContent = stats.completedTasks;
            console.log('Total acciones actualizado:', stats.completedTasks);
        }
        if (teamConversions) {
            teamConversions.textContent = stats.conversions;
            console.log('Conversiones actualizadas:', stats.conversions);
        }
        if (teamConversionRate) {
            teamConversionRate.textContent = `${stats.conversionRate}%`;
            console.log('Tasa de conversión actualizada:', stats.conversionRate);
        }
        
        // Actualizar estadísticas por asesor
        this.updateAdvisorStats();
    }
    
    updateAdvisorStats() {
        const advisors = this.getVisibleAdvisors();
        const teamStatsTable = document.getElementById('teamStatsTable');
        
        if (!teamStatsTable) {
            console.log('No se encontró el elemento teamStatsTable');
            return;
        }
        
        console.log('Actualizando tabla de estadísticas del equipo...');
        console.log('Asesores encontrados:', advisors);
        
        teamStatsTable.innerHTML = advisors.map(advisor => {
            const advisorLeads = this.leads.filter(lead => lead.advisor === advisor.name);
            const advisorTasks = this.tasks.filter(task => task.advisor === advisor.name);
            const completedTasks = advisorTasks.filter(task => task.status === 'completada');
            const conversions = advisorLeads.filter(lead => lead.status === 'Cierre');
            const activeLeads = advisorLeads.filter(lead => lead.status !== 'Cierre');
            const conversionRate = advisorLeads.length > 0 ? Math.round((conversions.length / advisorLeads.length) * 100) : 0;
            
            // Obtener la última actividad del asesor
            const lastActivity = advisorLeads.length > 0 ? 
                new Date(Math.max(...advisorLeads.map(lead => new Date(lead.lastActivity)))) : 
                new Date();
            
            const lastActivityFormatted = lastActivity.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            
            console.log(`Asesor: ${advisor.name}, Leads: ${advisorLeads.length}, Tareas: ${completedTasks.length}, Conversiones: ${conversions.length}`);
            
            return `
                <tr>
                    <td><strong>${advisor.name}</strong></td>
                    <td>${advisorLeads.length}</td>
                    <td>${completedTasks.length}</td>
                    <td>${conversions.length}</td>
                    <td>${conversionRate}%</td>
                    <td>${activeLeads.length}</td>
                    <td>${lastActivityFormatted}</td>
                </tr>
            `;
        }).join('');
        
        console.log('Tabla de estadísticas actualizada');
    }
    
    updateManagerAdvisorManagement() {
        console.log('Actualizando gestión de asesores...');
        
        // Configurar navegación de pantallas
        this.setupScreenNavigation();
        
        // Actualizar estadísticas por asesor
        this.updateAdvisorStatsTable();
        
        // Actualizar formulario de KPIs
        this.updateAdvisorKPIForm();
        
        // Actualizar formulario de asignación de leads
        this.updateLeadAssignmentForm();
        
        // Mostrar solo la primera pantalla
        this.showScreen('advisor-stats-screen');
    }
    
    setupScreenNavigation() {
        console.log('Configurando navegación de pantallas...');
        
        const screenButtons = document.querySelectorAll('.screen-nav-btn');
        const screens = document.querySelectorAll('.advisor-screen');
        
        // Ocultar todas las pantallas
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Desactivar todos los botones
        screenButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Agregar event listeners a los botones
        screenButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const screenId = button.getAttribute('data-screen');
                console.log('Cambiando a pantalla:', screenId);
                this.showScreen(screenId);
            });
        });
        
        console.log('Navegación de pantallas configurada');
    }
    
    showScreen(screenId) {
        console.log('Mostrando pantalla:', screenId);
        
        // Ocultar todas las pantallas
        const screens = document.querySelectorAll('.advisor-screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Desactivar todos los botones
        const screenButtons = document.querySelectorAll('.screen-nav-btn');
        screenButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Mostrar la pantalla seleccionada
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Pantalla activada:', screenId);
            
            // Actualizar contenido específico según la pantalla
            if (screenId === 'lead-assignment-screen') {
                setTimeout(() => {
                    this.updateLeadAssignmentForm();
                }, 100);
            } else if (screenId === 'advisor-kpis-screen') {
                setTimeout(() => {
                    this.updateAdvisorKPIForm();
                }, 100);
            } else if (screenId === 'advisor-stats-screen') {
                setTimeout(() => {
                    this.updateAdvisorStatsTable();
                }, 100);
            }
        }
        
        // Activar el botón correspondiente
        const targetButton = document.querySelector(`[data-screen="${screenId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
            console.log('Botón activado:', targetButton.textContent.trim());
        }
    }
    
    clearAllAdvisorTabListeners() {
        // Remover todos los event listeners de los botones de pestañas
        const tabButtons = document.querySelectorAll('.advisor-tabs .tab-btn');
        tabButtons.forEach(button => {
            // Clonar el botón para remover todos los event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
        console.log('Event listeners de pestañas limpiados');
    }
    
    setupAdvisorTabsNew() {
        const tabButtons = document.querySelectorAll('.advisor-tabs .tab-btn');
        
        console.log('Configurando pestañas de asesores (nueva lógica)...');
        console.log('Botones encontrados:', tabButtons.length);
        
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetTab = button.getAttribute('data-tab');
                console.log('Clic en pestaña:', targetTab);
                
                // Ocultar todo el contenido
                this.hideAllAdvisorTabContent();
                
                // Mostrar solo la pestaña seleccionada
                this.showAdvisorTab(targetTab);
            });
        });
        
        console.log('Pestañas configuradas con nueva lógica');
    }
    
    hideAllAdvisorTabContent() {
        // Ocultar todo el contenido de pestañas con máxima agresividad
        const tabContents = document.querySelectorAll('.advisor-management .tab-content');
        tabContents.forEach((content, index) => {
            content.classList.remove('active');
            
            // Crear un estilo personalizado para forzar la ocultación
            const styleId = `hide-${content.id}`;
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                #${content.id} {
                    display: none !important;
                    visibility: hidden !important;
                    position: absolute !important;
                    left: -9999px !important;
                    top: -9999px !important;
                    opacity: 0 !important;
                    z-index: -1 !important;
                    height: 0 !important;
                    overflow: hidden !important;
                    width: 0 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
            `;
            
            console.log(`Ocultando contenido ${index}: ${content.id}`);
        });
        
        // Desactivar todos los botones con máxima agresividad
        const tabButtons = document.querySelectorAll('.advisor-management .tab-btn');
        tabButtons.forEach((button, index) => {
            button.classList.remove('active');
            
            // Crear un estilo personalizado para forzar la desactivación
            const buttonId = `btn-${index}`;
            if (!button.id) button.id = buttonId;
            
            const styleId = `hide-btn-${index}`;
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                #${buttonId} {
                    border-bottom-color: transparent !important;
                    background-color: transparent !important;
                    color: #666 !important;
                    font-weight: normal !important;
                    background: none !important;
                }
            `;
            
            console.log(`Desactivando botón ${index}: ${button.textContent.trim()}`);
        });
        
        console.log('Todo el contenido de pestañas ocultado completamente');
    }
    
    showAdvisorTab(tabId) {
        console.log('=== INICIANDO MOSTRAR PESTAÑA ===', tabId);
        
        // Ocultar todo primero
        this.hideAllAdvisorTabContent();
        
        // Mostrar la pestaña seleccionada
        const targetContent = document.getElementById(tabId);
        const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
        
        console.log('Elementos encontrados:', {
            targetContent: !!targetContent,
            targetButton: !!targetButton,
            contentId: targetContent?.id,
            buttonText: targetButton?.textContent?.trim()
        });
        
        if (targetContent) {
            targetContent.classList.add('active');
            
            // Crear un estilo personalizado para forzar la visualización
            const styleId = `show-${targetContent.id}`;
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                #${targetContent.id} {
                    display: block !important;
                    visibility: visible !important;
                    position: static !important;
                    left: auto !important;
                    top: auto !important;
                    opacity: 1 !important;
                    z-index: 1 !important;
                    height: auto !important;
                    overflow: visible !important;
                    width: auto !important;
                    margin: 0 !important;
                    padding: 1.5rem 0 !important;
                }
            `;
            
            console.log('Contenido activado:', targetContent.id);
        } else {
            console.error('No se encontró el contenido para la pestaña:', tabId);
        }
        
        if (targetButton) {
            targetButton.classList.add('active');
            
            // Crear un estilo personalizado para forzar la activación
            const buttonIndex = Array.from(document.querySelectorAll('.advisor-management .tab-btn')).indexOf(targetButton);
            const buttonId = `btn-${buttonIndex}`;
            if (!targetButton.id) targetButton.id = buttonId;
            
            const styleId = `show-btn-${buttonIndex}`;
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                #${buttonId} {
                    border-bottom-color: #007bff !important;
                    background-color: #f8f9fa !important;
                    color: #007bff !important;
                    font-weight: bold !important;
                    background: #f8f9fa !important;
                }
            `;
            
            console.log('Botón activado:', targetButton.textContent.trim());
        } else {
            console.error('No se encontró el botón para la pestaña:', tabId);
        }
        
        console.log('=== FIN MOSTRAR PESTAÑA ===');
        this.debugAdvisorTabs();
    }
    
    debugAdvisorTabs() {
        const tabContents = document.querySelectorAll('.advisor-management .tab-content');
        const tabButtons = document.querySelectorAll('.advisor-management .tab-btn');
        
        console.log('=== DEBUG PESTAÑAS ===');
        tabContents.forEach((content, index) => {
            const isActive = content.classList.contains('active');
            const display = content.style.display;
            const visibility = content.style.visibility;
            const position = content.style.position;
            console.log(`Contenido ${index}:`, {
                id: content.id,
                active: isActive,
                display: display,
                visibility: visibility,
                position: position,
                computedDisplay: window.getComputedStyle(content).display
            });
        });
        
        tabButtons.forEach((button, index) => {
            const isActive = button.classList.contains('active');
            const borderColor = button.style.borderBottomColor;
            const backgroundColor = button.style.backgroundColor;
            const color = button.style.color;
            console.log(`Botón ${index}:`, {
                text: button.textContent.trim(),
                active: isActive,
                dataTab: button.getAttribute('data-tab'),
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                color: color
            });
        });
        console.log('=== FIN DEBUG ===');
    }
    
    // Función de prueba para verificar el funcionamiento de las pestañas
    testAdvisorTabs() {
        console.log('=== PRUEBA DE PESTAÑAS ===');
        
        // Probar cada pestaña
        const tabIds = ['advisor-stats', 'advisor-kpis', 'lead-assignment'];
        
        tabIds.forEach((tabId, index) => {
            console.log(`Probando pestaña ${index + 1}: ${tabId}`);
            this.showAdvisorTab(tabId);
            
            // Verificar que solo esta pestaña esté activa
            const activeContents = document.querySelectorAll('.advisor-management .tab-content.active');
            const activeButtons = document.querySelectorAll('.advisor-management .tab-btn.active');
            
            console.log(`Pestaña ${tabId}:`, {
                contenidosActivos: activeContents.length,
                botonesActivos: activeButtons.length,
                contenidoCorrecto: activeContents.length === 1 && activeContents[0].id === tabId,
                botonCorrecto: activeButtons.length === 1 && activeButtons[0].getAttribute('data-tab') === tabId
            });
        });
        
        console.log('=== FIN PRUEBA ===');
    }
    
    // Función para verificar el estado visual real de las pestañas
    checkVisualState() {
        console.log('=== VERIFICACIÓN VISUAL ===');
        
        const tabContents = document.querySelectorAll('.advisor-management .tab-content');
        const tabButtons = document.querySelectorAll('.advisor-management .tab-btn');
        
        tabContents.forEach((content, index) => {
            const computedStyle = window.getComputedStyle(content);
            const isVisible = computedStyle.display !== 'none' && 
                             computedStyle.visibility !== 'hidden' && 
                             computedStyle.opacity !== '0';
            
            console.log(`Contenido ${index} (${content.id}):`, {
                claseActive: content.classList.contains('active'),
                display: computedStyle.display,
                visibility: computedStyle.visibility,
                opacity: computedStyle.opacity,
                position: computedStyle.position,
                left: computedStyle.left,
                top: computedStyle.top,
                zIndex: computedStyle.zIndex,
                isVisible: isVisible
            });
        });
        
        tabButtons.forEach((button, index) => {
            const computedStyle = window.getComputedStyle(button);
            
            console.log(`Botón ${index} (${button.textContent.trim()}):`, {
                claseActive: button.classList.contains('active'),
                borderBottomColor: computedStyle.borderBottomColor,
                backgroundColor: computedStyle.backgroundColor,
                color: computedStyle.color,
                fontWeight: computedStyle.fontWeight
            });
        });
        
        console.log('=== FIN VERIFICACIÓN VISUAL ===');
    }
    
    // Función para limpiar todos los estilos dinámicos
    clearDynamicStyles() {
        console.log('Limpiando estilos dinámicos...');
        
        // Remover todos los estilos de ocultación
        const hideStyles = document.querySelectorAll('style[id^="hide-"]');
        hideStyles.forEach(style => style.remove());
        
        // Remover todos los estilos de visualización
        const showStyles = document.querySelectorAll('style[id^="show-"]');
        showStyles.forEach(style => style.remove());
        
        // Remover todos los estilos de botones
        const buttonStyles = document.querySelectorAll('style[id^="hide-btn-"], style[id^="show-btn-"]');
        buttonStyles.forEach(style => style.remove());
        
        console.log('Estilos dinámicos limpiados');
    }
    
    // Función para forzar la ocultación de todo el contenido
    forceHideAllContent() {
        console.log('Forzando ocultación de todo el contenido...');
        
        // Limpiar estilos existentes
        this.clearDynamicStyles();
        
        // Crear un estilo global con máxima especificidad
        const globalStyleId = 'force-hide-all';
        let globalStyle = document.getElementById(globalStyleId);
        if (!globalStyle) {
            globalStyle = document.createElement('style');
            globalStyle.id = globalStyleId;
            document.head.appendChild(globalStyle);
        }
        
        globalStyle.textContent = `
            /* Ocultar todo el contenido de pestañas con máxima especificidad */
            .advisor-management .tab-content,
            .advisor-management #advisor-stats,
            .advisor-management #advisor-kpis,
            .advisor-management #lead-assignment {
                display: none !important;
                visibility: hidden !important;
                position: absolute !important;
                left: -9999px !important;
                top: -9999px !important;
                opacity: 0 !important;
                z-index: -1 !important;
                height: 0 !important;
                overflow: hidden !important;
                width: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                background: none !important;
            }
            
            /* Desactivar todos los botones con máxima especificidad */
            .advisor-management .tab-btn,
            .advisor-management .tab-btn.active {
                border-bottom-color: transparent !important;
                background-color: transparent !important;
                color: #666 !important;
                font-weight: normal !important;
                background: none !important;
                border-bottom: 2px solid transparent !important;
            }
            
            /* Ocultar específicamente las tablas y formularios */
            .advisor-management table,
            .advisor-management form,
            .advisor-management .form-group,
            .advisor-management .btn {
                display: none !important;
                visibility: hidden !important;
            }
        `;
        
        // Aplicar estilos directamente a los elementos
        const tabContents = document.querySelectorAll('.advisor-management .tab-content');
        tabContents.forEach((content, index) => {
            content.style.cssText = `
                display: none !important;
                visibility: hidden !important;
                position: absolute !important;
                left: -9999px !important;
                top: -9999px !important;
                opacity: 0 !important;
                z-index: -1 !important;
                height: 0 !important;
                overflow: hidden !important;
                width: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
            `;
            console.log(`Aplicando estilos directos a: ${content.id}`);
        });
        
        // Aplicar estilos directamente a los botones
        const tabButtons = document.querySelectorAll('.advisor-management .tab-btn');
        tabButtons.forEach((button, index) => {
            button.style.cssText = `
                border-bottom-color: transparent !important;
                background-color: transparent !important;
                color: #666 !important;
                font-weight: normal !important;
                background: none !important;
                border-bottom: 2px solid transparent !important;
            `;
            button.classList.remove('active');
            console.log(`Aplicando estilos directos a botón: ${button.textContent.trim()}`);
        });
        
        console.log('Ocultación global aplicada con estilos directos');
    }
    
    // Función para verificar si los estilos se aplicaron correctamente
    verifyStylesApplied() {
        console.log('=== VERIFICANDO APLICACIÓN DE ESTILOS ===');
        
        const tabContents = document.querySelectorAll('.advisor-management .tab-content');
        tabContents.forEach((content, index) => {
            const computedStyle = window.getComputedStyle(content);
            console.log(`Contenido ${index} (${content.id}):`, {
                display: computedStyle.display,
                visibility: computedStyle.visibility,
                position: computedStyle.position,
                left: computedStyle.left,
                top: computedStyle.top,
                opacity: computedStyle.opacity,
                zIndex: computedStyle.zIndex,
                height: computedStyle.height,
                width: computedStyle.width
            });
        });
        
        const tabButtons = document.querySelectorAll('.advisor-management .tab-btn');
        tabButtons.forEach((button, index) => {
            const computedStyle = window.getComputedStyle(button);
            console.log(`Botón ${index} (${button.textContent.trim()}):`, {
                borderBottomColor: computedStyle.borderBottomColor,
                backgroundColor: computedStyle.backgroundColor,
                color: computedStyle.color,
                fontWeight: computedStyle.fontWeight,
                hasActiveClass: button.classList.contains('active')
            });
        });
        
        console.log('=== FIN VERIFICACIÓN DE ESTILOS ===');
    }
    
    // Función para eliminar temporalmente todos los elementos del DOM
    forceRemoveAllElements() {
        console.log('=== ELIMINANDO ELEMENTOS DEL DOM ===');
        
        const tabContents = document.querySelectorAll('.advisor-management .tab-content');
        tabContents.forEach((content, index) => {
            console.log(`Eliminando contenido: ${content.id}`);
            content.style.display = 'none';
            content.style.visibility = 'hidden';
            content.style.position = 'absolute';
            content.style.left = '-9999px';
            content.style.top = '-9999px';
            content.style.opacity = '0';
            content.style.zIndex = '-1';
            content.style.height = '0';
            content.style.overflow = 'hidden';
            content.style.width = '0';
            content.style.margin = '0';
            content.style.padding = '0';
            
            // Ocultar todos los elementos hijos
            const children = content.querySelectorAll('*');
            children.forEach(child => {
                child.style.display = 'none';
                child.style.visibility = 'hidden';
            });
        });
        
        const tabButtons = document.querySelectorAll('.advisor-management .tab-btn');
        tabButtons.forEach((button, index) => {
            console.log(`Desactivando botón: ${button.textContent.trim()}`);
            button.classList.remove('active');
            button.style.borderBottomColor = 'transparent';
            button.style.backgroundColor = 'transparent';
            button.style.color = '#666';
            button.style.fontWeight = 'normal';
            button.style.background = 'none';
            button.style.borderBottom = '2px solid transparent';
        });
        
        console.log('=== ELEMENTOS ELIMINADOS DEL DOM ===');
    }
    
    setupAdvisorTabs() {
        const tabButtons = document.querySelectorAll('.advisor-tabs .tab-btn');
        
        console.log('Configurando pestañas de asesores...');
        console.log('Botones encontrados:', tabButtons.length);
        
        // Remover event listeners existentes para evitar duplicados
        tabButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
        
        // Obtener los botones actualizados
        const updatedTabButtons = document.querySelectorAll('.advisor-tabs .tab-btn');
        
        updatedTabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = button.getAttribute('data-tab');
                
                console.log('Haciendo clic en pestaña:', targetTab);
                
                // Usar la función centralizada para mostrar la pestaña
                this.showAdvisorTab(targetTab);
            });
        });
    }
    
    updateAdvisorStatsTable() {
        console.log('Actualizando tabla de estadísticas de asesores...');
        
        const tableBody = document.querySelector('#teamStatsTable tbody');
        if (!tableBody) {
            console.error('No se encontró la tabla de estadísticas de asesores');
            return;
        }
        
        // Limpiar tabla
        tableBody.innerHTML = '';
        
        // Obtener estadísticas del equipo
        const teamStats = this.getTeamStatistics('monthly');
        console.log('Estadísticas del equipo:', teamStats);
        
        // Obtener asesores únicos
        const advisors = [...new Set(this.leads.map(lead => lead.advisor).filter(advisor => advisor))];
        console.log('Asesores encontrados:', advisors);
        
        advisors.forEach(advisor => {
            const advisorLeads = this.leads.filter(lead => lead.advisor === advisor);
            const advisorTasks = this.tasks.filter(task => task.advisor === advisor);
            const conversions = advisorLeads.filter(lead => lead.status === 'Cerrado').length;
            const conversionRate = advisorLeads.length > 0 ? (conversions / advisorLeads.length * 100).toFixed(1) : 0;
            const activeLeads = advisorLeads.filter(lead => lead.status !== 'Cerrado').length;
            const lastActivity = advisorTasks.length > 0 ? 
                new Date(Math.max(...advisorTasks.map(task => new Date(task.dueDate)))).toLocaleDateString() : 
                'Sin actividad';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${advisor}</td>
                <td>${advisorLeads.length}</td>
                <td>${advisorTasks.length}</td>
                <td>${conversions}</td>
                <td>${conversionRate}%</td>
                <td>${activeLeads}</td>
                <td>${lastActivity}</td>
            `;
            tableBody.appendChild(row);
        });
        
        // Actualizar las estadísticas generales
        this.updateGeneralStats(teamStats);
        
        console.log('Tabla de estadísticas actualizada');
    }
    
    updateGeneralStats(teamStats) {
        const totalAdvisors = document.getElementById('totalAdvisors');
        const totalAssignedLeads = document.getElementById('totalAssignedLeads');
        const teamConversions = document.getElementById('teamConversions');
        const teamConversionRate = document.getElementById('teamConversionRate');
        
        if (totalAdvisors) totalAdvisors.textContent = teamStats.totalAdvisors || 0;
        if (totalAssignedLeads) totalAssignedLeads.textContent = teamStats.totalLeads || 0;
        if (teamConversions) teamConversions.textContent = teamStats.conversions || 0;
        if (teamConversionRate) teamConversionRate.textContent = `${teamStats.conversionRate || 0}%`;
    }
    
    updateAdvisorKPIForm() {
        const advisorSelect = document.getElementById('advisorSelect');
        if (!advisorSelect) return;
        
        // Limpiar opciones existentes
        advisorSelect.innerHTML = '<option value="">Seleccionar asesor...</option>';
        
        // Agregar asesores (solo los visibles)
        const advisors = this.getVisibleAdvisors();
        advisors.forEach(advisor => {
            const option = document.createElement('option');
            option.value = advisor.name;
            option.textContent = advisor.name;
            advisorSelect.appendChild(option);
        });
        
        // Configurar evento de cambio para cargar KPIs existentes
        advisorSelect.addEventListener('change', (e) => {
            const selectedAdvisor = e.target.value;
            if (selectedAdvisor) {
                this.loadAdvisorKPIs(selectedAdvisor);
            }
        });
        
        // Configurar envío del formulario
        const form = document.getElementById('advisorKPIForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveAdvisorKPIs();
            });
        }
    }
    
    loadAdvisorKPIs(advisorName) {
        const kpis = this.kpis.advisor[advisorName] || {};
        
        console.log('=== CARGANDO KPIs PARA ASESOR ===');
        console.log('Asesor:', advisorName);
        console.log('KPIs encontrados:', kpis);
        
        const dailyLeadsGoal = document.getElementById('dailyLeadsGoal');
        const weeklyConversionsGoal = document.getElementById('weeklyConversionsGoal');
        const maxActionsPerDay = document.getElementById('maxActionsPerDay');
        
        if (dailyLeadsGoal) {
            dailyLeadsGoal.value = kpis.dailyLeadsGoal || kpis.dailyTarget || '';
            console.log('Meta diaria cargada:', dailyLeadsGoal.value);
        }
        if (weeklyConversionsGoal) {
            weeklyConversionsGoal.value = kpis.weeklyConversionsGoal || kpis.weeklyTarget || '';
            console.log('Meta semanal cargada:', weeklyConversionsGoal.value);
        }
        if (maxActionsPerDay) {
            maxActionsPerDay.value = kpis.maxActionsPerDay || '';
            console.log('Máximo acciones cargadas:', maxActionsPerDay.value);
        }
        
        console.log('KPIs cargados exitosamente para:', advisorName);
    }

    showAllKPIs() {
        console.log('=== TODOS LOS KPIs GUARDADOS ===');
        console.log('Estructura completa de KPIs:', this.kpis);
        
        // KPIs Globales
        console.log('\n📊 KPIs GLOBALES:');
        if (this.kpis.global) {
            console.log('- Meta Diaria de Clientes:', this.kpis.global.dailyTargetClients);
            console.log('- Meta Semanal de Conversiones:', this.kpis.global.weeklyConversionTarget);
            console.log('- Máximo Días por Estado:', this.kpis.global.maxDaysPerState);
        } else {
            console.log('No hay KPIs globales configurados');
        }
        
        // KPIs por Asesor
        console.log('\n👥 KPIs POR ASESOR:');
        if (this.kpis.advisor && Object.keys(this.kpis.advisor).length > 0) {
            Object.entries(this.kpis.advisor).forEach(([advisorName, kpis]) => {
                console.log(`\n📋 ${advisorName}:`);
                console.log('  - Meta Diaria de Leads:', kpis.dailyLeadsGoal || kpis.dailyTarget || 'No definida');
                console.log('  - Meta Semanal de Conversiones:', kpis.weeklyConversionsGoal || kpis.weeklyTarget || 'No definida');
                console.log('  - Máximo Acciones por Día:', kpis.maxActionsPerDay || 'No definido');
                console.log('  - Última Actualización:', kpis.updatedAt || 'No disponible');
                
                // Análisis de cumplimiento
                this.analyzeAdvisorKPICompliance(advisorName, kpis);
            });
        } else {
            console.log('No hay KPIs de asesores configurados');
        }
        
        return this.kpis;
    }

    analyzeAdvisorKPICompliance(advisorName, kpis) {
        console.log(`\n🔍 ANÁLISIS DE CUMPLIMIENTO PARA ${advisorName}:`);
        
        // Obtener datos reales del asesor
        const advisorLeads = this.leads.filter(lead => lead.advisor === advisorName);
        const advisorTasks = this.tasks.filter(task => task.advisor === advisorName);
        const conversions = advisorLeads.filter(lead => lead.status === 'Cierre');
        
        // Análisis diario de leads
        if (kpis.dailyLeadsGoal || kpis.dailyTarget) {
            const dailyGoal = kpis.dailyLeadsGoal || kpis.dailyTarget;
            const leadsToday = advisorLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt);
                const today = new Date();
                return leadDate.toDateString() === today.toDateString();
            }).length;
            
            const dailyCompliance = dailyGoal > 0 ? (leadsToday / dailyGoal * 100).toFixed(1) : 0;
            console.log(`  📈 Meta Diaria: ${leadsToday}/${dailyGoal} leads (${dailyCompliance}%)`);
            
            if (dailyCompliance >= 100) {
                console.log('  ✅ Meta diaria CUMPLIDA');
            } else if (dailyCompliance >= 80) {
                console.log('  ⚠️ Cerca de cumplir meta diaria');
            } else {
                console.log('  ❌ Meta diaria NO cumplida');
            }
        }
        
        // Análisis semanal de conversiones
        if (kpis.weeklyConversionsGoal || kpis.weeklyTarget) {
            const weeklyGoal = kpis.weeklyConversionsGoal || kpis.weeklyTarget;
            const weekStart = new Date();
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
            
            const conversionsThisWeek = conversions.filter(lead => {
                const conversionDate = new Date(lead.lastActivity);
                return conversionDate >= weekStart;
            }).length;
            
            const weeklyCompliance = weeklyGoal > 0 ? (conversionsThisWeek / weeklyGoal * 100).toFixed(1) : 0;
            console.log(`  🎯 Meta Semanal: ${conversionsThisWeek}/${weeklyGoal} conversiones (${weeklyCompliance}%)`);
            
            if (weeklyCompliance >= 100) {
                console.log('  ✅ Meta semanal CUMPLIDA');
            } else if (weeklyCompliance >= 80) {
                console.log('  ⚠️ Cerca de cumplir meta semanal');
            } else {
                console.log('  ❌ Meta semanal NO cumplida');
            }
        }
        
        // Análisis de acciones por día
        if (kpis.maxActionsPerDay) {
            const today = new Date();
            const tasksToday = advisorTasks.filter(task => {
                const taskDate = new Date(task.createdAt);
                return taskDate.toDateString() === today.toDateString();
            }).length;
            
            const actionCompliance = kpis.maxActionsPerDay > 0 ? (tasksToday / kpis.maxActionsPerDay * 100).toFixed(1) : 0;
            console.log(`  ⚡ Acciones Hoy: ${tasksToday}/${kpis.maxActionsPerDay} (${actionCompliance}%)`);
            
            if (tasksToday > kpis.maxActionsPerDay) {
                console.log('  ⚠️ Excede el máximo de acciones por día');
            } else if (actionCompliance >= 80) {
                console.log('  ✅ Buen nivel de actividad');
            } else {
                console.log('  📈 Puede aumentar la actividad');
            }
        }
        
        // Recomendaciones
        console.log(`\n💡 RECOMENDACIONES PARA ${advisorName}:`);
        const totalLeads = advisorLeads.length;
        const conversionRate = totalLeads > 0 ? (conversions.length / totalLeads * 100).toFixed(1) : 0;
        
        if (conversionRate < 20) {
            console.log('  - Mejorar técnicas de cierre');
            console.log('  - Revisar calidad de leads');
        } else if (conversionRate > 50) {
            console.log('  - Excelente tasa de conversión');
            console.log('  - Considerar aumentar metas');
        }
        
        if (totalLeads < 10) {
            console.log('  - Aumentar actividades de prospección');
            console.log('  - Revisar fuentes de leads');
        }
    }

    viewKPIsInLocalStorage() {
        console.log('=== KPIs EN LOCALSTORAGE ===');
        const savedData = localStorage.getItem('crmData');
        if (savedData) {
            const data = JSON.parse(savedData);
            console.log('KPIs guardados:', data.kpis);
            return data.kpis;
        } else {
            console.log('No hay datos guardados en localStorage');
            return null;
        }
    }

    updateManagerKPIsSummary() {
        console.log('Actualizando resumen de KPIs en dashboard del gerente...');
        
        const kpisSummaryGrid = document.getElementById('kpisSummaryGrid');
        if (!kpisSummaryGrid) {
            console.error('Contenedor de resumen de KPIs no encontrado');
            return;
        }

        // Verificar si hay KPIs configurados
        if (!this.kpis.advisor || Object.keys(this.kpis.advisor).length === 0) {
            kpisSummaryGrid.innerHTML = `
                <div class="kpi-no-data">
                    <div class="icon">📊</div>
                    <h4>No hay KPIs configurados</h4>
                    <p>Ve a "Gestión de Asesores" → "Definir KPIs por Asesor" para configurar metas</p>
                </div>
            `;
            return;
        }

        // Generar cards de KPIs para cada asesor
        let kpisHTML = '';
        Object.entries(this.kpis.advisor).forEach(([advisorName, kpis]) => {
            const complianceData = this.calculateAdvisorKPICompliance(advisorName, kpis);
            kpisHTML += this.createKPIAdvisorCard(advisorName, kpis, complianceData);
        });

        kpisSummaryGrid.innerHTML = kpisHTML;
    }

    calculateAdvisorKPICompliance(advisorName, kpis) {
        const advisorLeads = this.leads.filter(lead => lead.advisor === advisorName);
        const advisorTasks = this.tasks.filter(task => task.advisor === advisorName);
        const conversions = advisorLeads.filter(lead => lead.status === 'Cierre');

        // Meta diaria de leads
        let dailyCompliance = 0;
        let leadsToday = 0;
        if (kpis.dailyLeadsGoal || kpis.dailyTarget) {
            const dailyGoal = kpis.dailyLeadsGoal || kpis.dailyTarget;
            leadsToday = advisorLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt);
                const today = new Date();
                return leadDate.toDateString() === today.toDateString();
            }).length;
            dailyCompliance = dailyGoal > 0 ? (leadsToday / dailyGoal * 100) : 0;
        }

        // Meta semanal de conversiones
        let weeklyCompliance = 0;
        let conversionsThisWeek = 0;
        if (kpis.weeklyConversionsGoal || kpis.weeklyTarget) {
            const weeklyGoal = kpis.weeklyConversionsGoal || kpis.weeklyTarget;
            const weekStart = new Date();
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
            
            conversionsThisWeek = conversions.filter(lead => {
                const conversionDate = new Date(lead.lastActivity);
                return conversionDate >= weekStart;
            }).length;
            weeklyCompliance = weeklyGoal > 0 ? (conversionsThisWeek / weeklyGoal * 100) : 0;
        }

        // Acciones del día
        let dailyActions = 0;
        let actionCompliance = 0;
        if (kpis.maxActionsPerDay) {
            const today = new Date();
            dailyActions = advisorTasks.filter(task => {
                const taskDate = new Date(task.createdAt);
                return taskDate.toDateString() === today.toDateString();
            }).length;
            actionCompliance = kpis.maxActionsPerDay > 0 ? (dailyActions / kpis.maxActionsPerDay * 100) : 0;
        }

        // Calcular estado general
        const averageCompliance = (dailyCompliance + weeklyCompliance + Math.min(actionCompliance, 100)) / 3;
        let overallStatus = 'poor';
        if (averageCompliance >= 80) overallStatus = 'excellent';
        else if (averageCompliance >= 60) overallStatus = 'good';

        return {
            dailyCompliance: Math.round(dailyCompliance),
            weeklyCompliance: Math.round(weeklyCompliance),
            actionCompliance: Math.round(actionCompliance),
            overallStatus,
            leadsToday,
            conversionsThisWeek,
            dailyActions,
            dailyGoal: kpis.dailyLeadsGoal || kpis.dailyTarget || 0,
            weeklyGoal: kpis.weeklyConversionsGoal || kpis.weeklyTarget || 0,
            maxActions: kpis.maxActionsPerDay || 0
        };
    }

    createKPIAdvisorCard(advisorName, kpis, compliance) {
        const getComplianceClass = (percentage) => {
            if (percentage >= 80) return 'excellent';
            if (percentage >= 60) return 'good';
            return 'poor';
        };

        const getStatusText = (status) => {
            switch(status) {
                case 'excellent': return 'Excelente';
                case 'good': return 'Bueno';
                case 'poor': return 'Necesita Mejora';
                default: return 'Sin Datos';
            }
        };

        return `
            <div class="kpi-advisor-card">
                <div class="kpi-advisor-header">
                    <div class="kpi-advisor-name">👤 ${advisorName}</div>
                    <div class="kpi-overall-status ${compliance.overallStatus}">
                        ${getStatusText(compliance.overallStatus)}
                    </div>
                </div>
                
                <div class="kpi-metrics">
                    ${compliance.dailyGoal > 0 ? `
                    <div class="kpi-metric-item">
                        <div class="kpi-metric-label">📈 Meta Diaria de Leads</div>
                        <div class="kpi-metric-value">
                            <div class="kpi-metric-number">${compliance.leadsToday}/${compliance.dailyGoal}</div>
                            <div class="kpi-metric-percentage ${getComplianceClass(compliance.dailyCompliance)}">
                                ${compliance.dailyCompliance}%
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${compliance.weeklyGoal > 0 ? `
                    <div class="kpi-metric-item">
                        <div class="kpi-metric-label">🎯 Meta Semanal de Conversiones</div>
                        <div class="kpi-metric-value">
                            <div class="kpi-metric-number">${compliance.conversionsThisWeek}/${compliance.weeklyGoal}</div>
                            <div class="kpi-metric-percentage ${getComplianceClass(compliance.weeklyCompliance)}">
                                ${compliance.weeklyCompliance}%
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${compliance.maxActions > 0 ? `
                    <div class="kpi-metric-item">
                        <div class="kpi-metric-label">⚡ Acciones del Día</div>
                        <div class="kpi-metric-value">
                            <div class="kpi-metric-number">${compliance.dailyActions}/${compliance.maxActions}</div>
                            <div class="kpi-metric-percentage ${getComplianceClass(Math.min(compliance.actionCompliance, 100))}">
                                ${Math.min(compliance.actionCompliance, 100)}%
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    setupTeamAIAnalysis() {
        const generateButton = document.getElementById('generateTeamAIAnalysis');
        if (generateButton) {
            // Remover listeners existentes
            generateButton.removeEventListener('click', this.handleGenerateTeamAI);
            
            // Agregar nuevo listener
            this.handleGenerateTeamAI = () => {
                this.generateTeamAIAnalysis();
            };
            
            generateButton.addEventListener('click', this.handleGenerateTeamAI);
        }
    }

    generateTeamAIAnalysis() {
        console.log('Generando análisis de IA del equipo...');
        
        const contentContainer = document.getElementById('teamAIAnalysisContent');
        if (!contentContainer) {
            console.error('Contenedor de análisis de IA no encontrado');
            return;
        }

        // Mostrar indicador de carga
        contentContainer.innerHTML = `
            <div class="ai-loading">
                <div class="ai-loading-icon">🧠</div>
                <h4>Analizando Datos del Equipo...</h4>
                <p>La IA está procesando estadísticas, KPIs y tendencias de ventas</p>
            </div>
        `;

        // Simular análisis con delay
        setTimeout(() => {
            const analysis = this.simulateTeamAIAnalysis();
            contentContainer.innerHTML = this.renderTeamAIAnalysis(analysis);
        }, 3000);
    }

    simulateTeamAIAnalysis() {
        console.log('Simulando análisis de IA del equipo...');
        
        // Obtener datos del equipo
        const allLeads = this.leads;
        const allTasks = this.tasks;
        const advisors = [...new Set(allLeads.map(lead => lead.advisor).filter(advisor => advisor))];
        
        // Calcular métricas generales
        const totalLeads = allLeads.length;
        const totalConversions = allLeads.filter(lead => lead.status === 'Cierre').length;
        const totalTasks = allTasks.length;
        const conversionRate = totalLeads > 0 ? (totalConversions / totalLeads * 100) : 0;
        
        // Análisis por asesor
        const advisorPerformance = {};
        advisors.forEach(advisor => {
            const advisorLeads = allLeads.filter(lead => lead.advisor === advisor);
            const advisorConversions = advisorLeads.filter(lead => lead.status === 'Cierre').length;
            const advisorTasks = allTasks.filter(task => task.advisor === advisor);
            
            advisorPerformance[advisor] = {
                leads: advisorLeads.length,
                conversions: advisorConversions,
                tasks: advisorTasks.length,
                conversionRate: advisorLeads.length > 0 ? (advisorConversions / advisorLeads.length * 100) : 0
            };
        });

        // Generar insights
        const insights = [];
        
        // Insight sobre conversión general
        if (conversionRate > 40) {
            insights.push({
                title: '🎯 Excelente Tasa de Conversión del Equipo',
                description: `El equipo tiene una tasa de conversión del ${conversionRate.toFixed(1)}%, superando el promedio de la industria (25-30%).`
            });
        } else if (conversionRate < 20) {
            insights.push({
                title: '⚠️ Tasa de Conversión Baja',
                description: `La tasa de conversión del ${conversionRate.toFixed(1)}% está por debajo del promedio. Se requiere optimización del proceso.`
            });
        }

        // Insight sobre distribución de leads
        const leadsPerAdvisor = Object.values(advisorPerformance).map(p => p.leads);
        const maxLeads = Math.max(...leadsPerAdvisor);
        const minLeads = Math.min(...leadsPerAdvisor);
        
        if (maxLeads - minLeads > 5) {
            insights.push({
                title: '📊 Distribución Desigual de Leads',
                description: `Hay una diferencia significativa en la carga de trabajo (${maxLeads} vs ${minLeads} leads). Considerar redistribución.`
            });
        }

        // Insight sobre mejor performer
        const bestAdvisor = Object.entries(advisorPerformance)
            .sort((a, b) => b[1].conversionRate - a[1].conversionRate)[0];
        
        if (bestAdvisor && bestAdvisor[1].conversionRate > 50) {
            insights.push({
                title: '⭐ Asesor Destacado Identificado',
                description: `${bestAdvisor[0]} tiene una tasa de conversión excepcional del ${bestAdvisor[1].conversionRate.toFixed(1)}%. Considerar compartir mejores prácticas.`
            });
        }

        // Generar recomendaciones
        const recommendations = [];
        
        if (conversionRate < 30) {
            recommendations.push({
                title: 'Implementar Programa de Capacitación',
                description: 'Organizar sesiones de entrenamiento en técnicas de cierre y manejo de objeciones.'
            });
        }

        if (totalTasks / advisors.length < 10) {
            recommendations.push({
                title: 'Aumentar Actividad de Seguimiento',
                description: 'Incrementar la frecuencia de contacto con leads para mejorar las tasas de conversión.'
            });
        }

        recommendations.push({
            title: 'Optimizar Proceso de Calificación',
            description: 'Revisar criterios de calificación para enfocar esfuerzos en leads de mayor calidad.'
        });

        recommendations.push({
            title: 'Implementar Sistema de Incentivos',
            description: 'Crear programa de bonificaciones basado en cumplimiento de KPIs para motivar al equipo.'
        });

        // Generar alertas
        const alerts = [];
        
        // Alertas por asesor con bajo rendimiento
        Object.entries(advisorPerformance).forEach(([advisor, performance]) => {
            if (performance.conversionRate < 15 && performance.leads > 3) {
                alerts.push({
                    title: `🚨 ${advisor} - Rendimiento Bajo`,
                    description: `Tasa de conversión del ${performance.conversionRate.toFixed(1)}% requiere atención inmediata.`
                });
            }
        });

        // Alerta sobre leads sin actividad
        const inactiveLeads = allLeads.filter(lead => {
            const daysSinceActivity = Math.floor((new Date() - new Date(lead.lastActivity)) / (1000 * 60 * 60 * 24));
            return daysSinceActivity > 7 && lead.status !== 'Cierre';
        }).length;

        if (inactiveLeads > 5) {
            alerts.push({
                title: '⏰ Leads Inactivos Detectados',
                description: `${inactiveLeads} leads sin actividad por más de 7 días. Riesgo de pérdida de oportunidades.`
            });
        }

        return {
            totalLeads,
            totalConversions,
            conversionRate: conversionRate.toFixed(1),
            advisorCount: advisors.length,
            insights,
            recommendations,
            alerts,
            advisorPerformance
        };
    }

    renderTeamAIAnalysis(analysis) {
        return `
            <div class="ai-analysis-results">
                <!-- Insights Clave -->
                <div class="ai-insights-section">
                    <div class="ai-insights-header">
                        <span>💡</span>
                        <span>Insights Clave del Equipo</span>
                    </div>
                    ${analysis.insights.length > 0 ? 
                        analysis.insights.map(insight => `
                            <div class="ai-item insight">
                                <div class="ai-item-title">${insight.title}</div>
                                <p class="ai-item-description">${insight.description}</p>
                            </div>
                        `).join('') : 
                        '<div class="ai-item insight"><div class="ai-item-title">✅ Rendimiento Estable</div><p class="ai-item-description">El equipo mantiene un rendimiento consistente sin alertas críticas.</p></div>'
                    }
                </div>

                <!-- Recomendaciones Estratégicas -->
                <div class="ai-recommendations-section">
                    <div class="ai-recommendations-header">
                        <span>🎯</span>
                        <span>Recomendaciones Estratégicas</span>
                    </div>
                    ${analysis.recommendations.map((rec, index) => `
                        <div class="ai-item recommendation">
                            <div class="ai-item-title">${index + 1}. ${rec.title}</div>
                            <p class="ai-item-description">${rec.description}</p>
                        </div>
                    `).join('')}
                </div>

                <!-- Alertas y Acciones Urgentes -->
                ${analysis.alerts.length > 0 ? `
                <div class="ai-alerts-section">
                    <div class="ai-alerts-header">
                        <span>🚨</span>
                        <span>Alertas y Acciones Urgentes</span>
                    </div>
                    ${analysis.alerts.map(alert => `
                        <div class="ai-item alert">
                            <div class="ai-item-title">${alert.title}</div>
                            <p class="ai-item-description">${alert.description}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        `;
    }
    
    updateLeadAssignmentForm() {
        console.log('=== ACTUALIZANDO FORMULARIO DE ASIGNACIÓN ===');
        
        const leadSelect = document.getElementById('leadSelect');
        const advisorAssign = document.getElementById('assignToAdvisor'); // ID correcto
        const sequenceAssign = document.getElementById('sequenceAssign');
        
        console.log('Elementos encontrados:', {
            leadSelect: !!leadSelect,
            advisorAssign: !!advisorAssign,
            sequenceAssign: !!sequenceAssign
        });
        
        if (!leadSelect || !advisorAssign) {
            console.error('Elementos del formulario no encontrados');
            return;
        }
        
        // Limpiar opciones existentes
        leadSelect.innerHTML = '<option value="">Seleccionar lead...</option>';
        advisorAssign.innerHTML = '<option value="">Seleccionar asesor...</option>';
        if (sequenceAssign) {
            sequenceAssign.innerHTML = '<option value="">Sin secuencia específica</option>';
        }
        
        // Agregar leads visibles (excluyendo los de asesores ocultos)
        const visibleLeads = this.getVisibleLeads();
        console.log('Total leads visibles disponibles:', visibleLeads.length);
        visibleLeads.forEach(lead => {
            const option = document.createElement('option');
            option.value = lead.id;
            option.textContent = `${lead.name} - ${lead.company || 'Sin empresa'} (${lead.advisor || 'Sin asignar'})`;
            leadSelect.appendChild(option);
        });
        
        // Agregar asesores (solo los visibles)
        const advisors = this.getVisibleAdvisors();
        console.log('Asesores visibles encontrados:', advisors.length);
        advisors.forEach(advisor => {
            const option = document.createElement('option');
            option.value = advisor.name;
            option.textContent = advisor.name;
            advisorAssign.appendChild(option);
        });
        
        // Agregar secuencias si existen
        if (sequenceAssign && this.sequences && this.sequences.length > 0) {
            console.log('Secuencias encontradas:', this.sequences.length);
            this.sequences.forEach(sequence => {
                const option = document.createElement('option');
                option.value = sequence.id;
                option.textContent = `${sequence.name} (${sequence.state})`;
                sequenceAssign.appendChild(option);
            });
        }
        
        // Configurar envío del formulario
        const form = document.getElementById('leadAssignmentForm'); // ID correcto
        if (form) {
            // Remover listeners existentes
            form.removeEventListener('submit', this.handleLeadAssignment);
            
            // Agregar nuevo listener
            this.handleLeadAssignment = (e) => {
                e.preventDefault();
                console.log('Formulario de asignación enviado');
                this.assignLeadToAdvisor();
            };
            
            form.addEventListener('submit', this.handleLeadAssignment);
        }
        
        console.log('Formulario de asignación actualizado');
    }

    getVisibleUsers() {
        return this.users.filter(user => !user.hidden);
    }

    getVisibleAdvisors() {
        return this.users.filter(user => user.role === 'advisor' && !user.hidden);
    }

    getVisibleLeads() {
        // Ocultar leads asignados a asesores ocultos
        const hiddenAdvisors = this.users.filter(user => user.hidden).map(user => user.name);
        return this.leads.filter(lead => !hiddenAdvisors.includes(lead.advisor));
    }
    
    assignLeadToAdvisor() {
        console.log('=== ASIGNANDO LEAD A ASESOR ===');
        
        const leadSelect = document.getElementById('leadSelect');
        const advisorAssign = document.getElementById('assignToAdvisor');
        const sequenceAssign = document.getElementById('sequenceAssign');
        
        if (!leadSelect || !advisorAssign) {
            console.error('Elementos del formulario no encontrados');
            this.showNotification('Error: Formulario no disponible', 'error');
            return;
        }
        
        const leadId = parseInt(leadSelect.value);
        const advisorName = advisorAssign.value;
        const sequenceId = sequenceAssign ? sequenceAssign.value : '';
        
        console.log('Datos de asignación:', { leadId, advisorName, sequenceId });
        
        if (!leadId || !advisorName) {
            alert('Por favor selecciona un lead y un asesor');
            return;
        }
        
        // Encontrar el lead y actualizar su asesor
        const lead = this.leads.find(l => l.id === leadId);
        if (lead) {
            lead.advisor = advisorName;
            
            // Si se seleccionó una secuencia, asignarla también
            if (sequenceId) {
                const sequence = this.sequences.find(s => s.id === parseInt(sequenceId));
                if (sequence) {
                    if (!sequence.assignedAdvisors) {
                        sequence.assignedAdvisors = [];
                    }
                    if (!sequence.assignedAdvisors.includes(advisorName)) {
                        sequence.assignedAdvisors.push(advisorName);
                    }
                }
            }
            
            // Guardar datos
            this.saveData();
            
            // Actualizar formularios
            this.updateLeadAssignmentForm();
            this.updateAdvisorStatsTable();
            
            alert(`Lead asignado exitosamente a ${advisorName}`);
            console.log('Lead asignado:', lead.name, 'a', advisorName);
        }
    }
    
    
    updateManagerCalendar() {
        console.log('Actualizando calendario del manager...');
        
        // Configurar controles del calendario
        this.setupManagerCalendarControls();
        
        // Generar calendario semanal
        this.generateManagerWeeklyCalendar();
        
        // Actualizar resumen de tareas
        this.updateTeamTasksSummary();
    }
    
    setupManagerCalendarControls() {
        const prevWeekBtn = document.getElementById('prevWeek');
        const nextWeekBtn = document.getElementById('nextWeek');
        const todayBtn = document.getElementById('todayBtn');
        const createEventBtn = document.getElementById('createEventBtn');
        
        if (prevWeekBtn) {
            prevWeekBtn.addEventListener('click', () => {
                this.navigateManagerWeek(-1);
            });
        }
        
        if (nextWeekBtn) {
            nextWeekBtn.addEventListener('click', () => {
                this.navigateManagerWeek(1);
            });
        }
        
        if (todayBtn) {
            todayBtn.addEventListener('click', () => {
                this.goToTodayManager();
            });
        }
        
        if (createEventBtn) {
            createEventBtn.addEventListener('click', () => {
                this.openCreateEventModal();
            });
        }
        
        // Inicializar fecha actual
        if (!this.currentManagerWeek) {
            this.currentManagerWeek = new Date();
        }
    }
    
    navigateManagerWeek(direction) {
        this.currentManagerWeek.setDate(this.currentManagerWeek.getDate() + (direction * 7));
        this.generateManagerWeeklyCalendar();
        this.updateTeamTasksSummary();
    }
    
    goToTodayManager() {
        this.currentManagerWeek = new Date();
        this.generateManagerWeeklyCalendar();
        this.updateTeamTasksSummary();
    }
    
    generateManagerWeeklyCalendar() {
        const calendarGrid = document.getElementById('teamCalendar');
        const weekDisplay = document.getElementById('currentWeek');
        
        if (!calendarGrid) return;
        
        // Actualizar display de la semana
        if (weekDisplay) {
            const startOfWeek = this.getStartOfWeek(this.currentManagerWeek);
            const endOfWeek = this.getEndOfWeek(this.currentManagerWeek);
            weekDisplay.textContent = `${startOfWeek.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })} - ${endOfWeek.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
        }
        
        // Limpiar calendario
        calendarGrid.innerHTML = '';
        
        // Generar slots de tiempo (8:00 AM - 6:00 PM)
        const timeSlots = [];
        for (let hour = 8; hour <= 18; hour++) {
            timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
        }
        
        // Generar días de la semana
        const startOfWeek = this.getStartOfWeek(this.currentManagerWeek);
        const days = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            days.push(day);
        }
        
        // Crear grid del calendario
        timeSlots.forEach(timeSlot => {
            // Slot de tiempo
            const timeElement = document.createElement('div');
            timeElement.className = 'time-slot';
            timeElement.textContent = timeSlot;
            calendarGrid.appendChild(timeElement);
            
            // Celdas para cada día
            days.forEach(day => {
                const dayCell = document.createElement('div');
                dayCell.className = 'day-cell';
                
                // Marcar día actual
                const today = new Date();
                if (this.isSameDay(day, today)) {
                    dayCell.classList.add('today');
                }
                
                // Marcar fines de semana
                if (day.getDay() === 0 || day.getDay() === 6) {
                    dayCell.classList.add('weekend');
                }
                
                // Agregar tareas y eventos para este día y hora
                this.addTasksToDayCell(dayCell, day, timeSlot);
                
                calendarGrid.appendChild(dayCell);
            });
        });
    }
    
    addTasksToDayCell(dayCell, day, timeSlot) {
        const dayTasks = this.getTasksForDay(day);
        const dayEvents = this.getEventsForDay(day);
        
        // Agregar tareas
        dayTasks.forEach(task => {
            if (this.isTaskAtTime(task, timeSlot)) {
                const taskElement = document.createElement('div');
                taskElement.className = `task-item-calendar ${task.type}`;
                if (task.status === 'completada') {
                    taskElement.classList.add('completed');
                }
                taskElement.innerHTML = `
                    <div style="font-weight: 600;">${task.title}</div>
                    <div style="font-size: 0.7rem; opacity: 0.9;">${task.advisor}</div>
                `;
                taskElement.title = `${task.title} - ${task.advisor} - ${task.description || 'Sin descripción'}`;
                dayCell.appendChild(taskElement);
            }
        });
        
        // Agregar eventos
        dayEvents.forEach(event => {
            if (this.isEventAtTime(event, timeSlot)) {
                const eventElement = document.createElement('div');
                eventElement.className = 'event-item-calendar';
                eventElement.innerHTML = `
                    <div style="font-weight: 600;">${event.title}</div>
                    <div style="font-size: 0.7rem; opacity: 0.9;">${event.advisor || 'Equipo'}</div>
                `;
                eventElement.title = `${event.title} - ${event.advisor || 'Equipo'} - ${event.description || 'Sin descripción'}`;
                dayCell.appendChild(eventElement);
            }
        });
    }
    
    getTasksForDay(day) {
        return this.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return this.isSameDay(taskDate, day);
        });
    }
    
    getEventsForDay(day) {
        return this.events ? this.events.filter(event => {
            const eventDate = new Date(event.date);
            return this.isSameDay(eventDate, day);
        }) : [];
    }
    
    isTaskAtTime(task, timeSlot) {
        const taskTime = new Date(task.dueDate);
        const taskHour = taskTime.getHours();
        const slotHour = parseInt(timeSlot.split(':')[0]);
        return taskHour === slotHour;
    }
    
    isEventAtTime(event, timeSlot) {
        const eventTime = new Date(`${event.date} ${event.time}`);
        const eventHour = eventTime.getHours();
        const slotHour = parseInt(timeSlot.split(':')[0]);
        return eventHour === slotHour;
    }
    
    isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }
    
    getStartOfWeek(date) {
        const startOfWeek = new Date(date);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
        startOfWeek.setDate(diff);
        startOfWeek.setHours(0, 0, 0, 0);
        return startOfWeek;
    }
    
    getEndOfWeek(date) {
        const endOfWeek = this.getStartOfWeek(date);
        endOfWeek.setDate(endOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        return endOfWeek;
    }
    
    updateTeamTasksSummary() {
        const tasksSummary = document.getElementById('tasksSummary');
        if (!tasksSummary) return;
        
        // Obtener tareas de la semana actual
        const startOfWeek = this.getStartOfWeek(this.currentManagerWeek);
        const endOfWeek = this.getEndOfWeek(this.currentManagerWeek);
        
        const weekTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return taskDate >= startOfWeek && taskDate <= endOfWeek;
        });
        
        // Agrupar por asesor
        const tasksByAdvisor = {};
        weekTasks.forEach(task => {
            if (!tasksByAdvisor[task.advisor]) {
                tasksByAdvisor[task.advisor] = [];
            }
            tasksByAdvisor[task.advisor].push(task);
        });
        
        // Generar resumen
        tasksSummary.innerHTML = '';
        Object.keys(tasksByAdvisor).forEach(advisor => {
            const advisorTasks = tasksByAdvisor[advisor];
            const completedTasks = advisorTasks.filter(task => task.status === 'completada').length;
            
            const summaryCard = document.createElement('div');
            summaryCard.className = 'task-summary-card';
            summaryCard.innerHTML = `
                <h4><span class="advisor-name">${advisor}</span></h4>
                <p><strong>${advisorTasks.length}</strong> tareas esta semana</p>
                <p><span class="task-time">${completedTasks}</span> completadas</p>
                <p>${((completedTasks / advisorTasks.length) * 100).toFixed(1)}% completado</p>
            `;
            tasksSummary.appendChild(summaryCard);
        });
    }
    
    openCreateEventModal() {
        const modal = document.getElementById('createEventModal');
        if (!modal) return;
        
        // Poblar select de asesores
        this.populateEventAdvisorSelect();
        
        // Establecer fecha actual
        const today = new Date().toISOString().split('T')[0];
        const eventDate = document.getElementById('eventDate');
        if (eventDate) {
            eventDate.value = today;
        }
        
        modal.style.display = 'block';
    }
    
    closeCreateEventModal() {
        const modal = document.getElementById('createEventModal');
        if (modal) {
            modal.style.display = 'none';
            // Limpiar formulario
            document.getElementById('createEventForm').reset();
        }
    }
    
    populateEventAdvisorSelect() {
        const advisorSelect = document.getElementById('eventAdvisor');
        if (!advisorSelect) return;
        
        // Limpiar opciones existentes
        advisorSelect.innerHTML = '<option value="">Todos los asesores</option>';
        
        // Agregar asesores
        const advisors = [...new Set(this.leads.map(lead => lead.advisor).filter(advisor => advisor))];
        advisors.forEach(advisor => {
            const option = document.createElement('option');
            option.value = advisor;
            option.textContent = advisor;
            advisorSelect.appendChild(option);
        });
    }
    
    saveEvent() {
        const form = document.getElementById('createEventForm');
        const formData = new FormData(form);
        
        const event = {
            id: Date.now().toString(),
            title: formData.get('title'),
            description: formData.get('description'),
            date: formData.get('date'),
            time: formData.get('time'),
            duration: parseInt(formData.get('duration')),
            advisor: formData.get('advisor') || null,
            type: formData.get('type'),
            createdAt: new Date().toISOString()
        };
        
        // Validar campos requeridos
        if (!event.title || !event.date || !event.time) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }
        
        // Inicializar array de eventos si no existe
        if (!this.events) {
            this.events = [];
        }
        
        // Agregar evento
        this.events.push(event);
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal
        this.closeCreateEventModal();
        
        // Actualizar calendario
        this.generateManagerWeeklyCalendar();
        this.updateTeamTasksSummary();
        
        alert('Evento creado exitosamente');
        console.log('Evento creado:', event);
    }
    
    viewLeadDetails(leadId) {
        console.log('Intentando ver detalles del lead:', leadId, 'Tipo:', typeof leadId);
        const lead = this.leads.find(l => l.id == leadId); // Usar == en lugar de === para comparación flexible
        if (!lead) {
            console.error('Lead no encontrado:', leadId);
            console.log('Leads disponibles:', this.leads.map(l => ({ id: l.id, name: l.name })));
            return;
        }
        console.log('Lead encontrado:', lead);
        
        // Crear modal de detalles
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Detalles del Lead: ${lead.name}</h3>
                    <span class="close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="lead-details">
                        <div class="detail-group">
                            <h4>Información Básica</h4>
                            <p><strong>Nombre:</strong> ${lead.name}</p>
                            <p><strong>Contacto:</strong> ${lead.contact}</p>
                            <p><strong>Estado:</strong> <span class="status-${lead.status ? lead.status.toLowerCase() : 'sin-definir'}">${lead.status || 'Sin definir'}</span></p>
                            <p><strong>Nivel de Interés:</strong> <span class="interest-${lead.interestLevel ? lead.interestLevel.toLowerCase().replace(' ', '-') : 'sin-definir'}">${lead.interestLevel || 'Sin definir'}</span></p>
                        </div>
                        <div class="detail-group">
                            <h4>Asignación</h4>
                            <p><strong>Asesor Asignado:</strong> ${lead.advisor || 'Sin asignar'}</p>
                            <p><strong>Fecha de Creación:</strong> ${new Date(lead.createdAt).toLocaleDateString('es-ES')}</p>
                            <p><strong>Última Actividad:</strong> ${new Date(lead.lastActivity).toLocaleDateString('es-ES')}</p>
                        </div>
                        <div class="detail-group">
                            <h4>Notas</h4>
                            <p>${lead.notes || 'Sin notas'}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Cerrar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    editLead(leadId) {
        console.log('Intentando editar el lead:', leadId, 'Tipo:', typeof leadId);
        const lead = this.leads.find(l => l.id == leadId); // Usar == en lugar de === para comparación flexible
        if (!lead) {
            console.error('Lead no encontrado para editar:', leadId);
            console.log('Leads disponibles:', this.leads.map(l => ({ id: l.id, name: l.name })));
            return;
        }
        console.log('Lead encontrado para editar:', lead);
        
        // Crear modal de edición
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Editar Lead: ${lead.name}</h3>
                    <span class="close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
                </div>
                <div class="modal-body">
                    <form id="editLeadForm">
                        <div class="form-group">
                            <label for="editLeadName">Nombre:</label>
                            <input type="text" id="editLeadName" value="${lead.name}" required>
                        </div>
                        <div class="form-group">
                            <label for="editLeadContact">Contacto:</label>
                            <input type="text" id="editLeadContact" value="${lead.contact}" required>
                        </div>
                        <div class="form-group">
                            <label for="editLeadStatus">Estado:</label>
                            <select id="editLeadStatus" required>
                                <option value="Calificar" ${lead.status === 'Calificar' ? 'selected' : ''}>Calificar</option>
                                <option value="Desarrollar" ${lead.status === 'Desarrollar' ? 'selected' : ''}>Desarrollar</option>
                                <option value="Proponer" ${lead.status === 'Proponer' ? 'selected' : ''}>Proponer</option>
                                <option value="Cierre" ${lead.status === 'Cierre' ? 'selected' : ''}>Cierre</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editLeadInterest">Nivel de Interés:</label>
                            <select id="editLeadInterest" required>
                                <option value="Poco interesado" ${lead.interestLevel === 'Poco interesado' ? 'selected' : ''}>Poco interesado</option>
                                <option value="Interesado" ${lead.interestLevel === 'Interesado' ? 'selected' : ''}>Interesado</option>
                                <option value="Medianamente interesado" ${lead.interestLevel === 'Medianamente interesado' ? 'selected' : ''}>Medianamente interesado</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editLeadAdvisor">Asesor:</label>
                            <select id="editLeadAdvisor">
                                <option value="">Sin asignar</option>
                                ${[...new Set(this.leads.map(l => l.advisor).filter(a => a))].map(advisor => 
                                    `<option value="${advisor}" ${lead.advisor === advisor ? 'selected' : ''}>${advisor}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editLeadNotes">Notas:</label>
                            <textarea id="editLeadNotes" rows="3">${lead.notes || ''}</textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Cancelar</button>
                    <button class="btn btn-primary" onclick="window.crm.saveLeadEdit('${lead.id}')">Guardar Cambios</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    saveLeadEdit(leadId) {
        const lead = this.leads.find(l => l.id === leadId);
        if (!lead) return;
        
        // Obtener valores del formulario
        const name = document.getElementById('editLeadName').value;
        const contact = document.getElementById('editLeadContact').value;
        const status = document.getElementById('editLeadStatus').value;
        const interestLevel = document.getElementById('editLeadInterest').value;
        const advisor = document.getElementById('editLeadAdvisor').value;
        const notes = document.getElementById('editLeadNotes').value;
        
        // Validar campos requeridos
        if (!name || !contact || !status || !interestLevel) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }
        
        // Actualizar lead
        lead.name = name;
        lead.contact = contact;
        lead.status = status;
        lead.interestLevel = interestLevel;
        lead.advisor = advisor || null;
        lead.notes = notes;
        lead.lastActivity = new Date().toISOString();
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal
        document.querySelector('.modal').remove();
        
        // Actualizar vista
        this.loadManagerLeads();
        
        alert('Lead actualizado exitosamente');
        console.log('Lead actualizado:', lead);
    }
    
    reassignLead(leadId) {
        console.log('Intentando reasignar el lead:', leadId, 'Tipo:', typeof leadId);
        const lead = this.leads.find(l => l.id == leadId); // Usar == en lugar de === para comparación flexible
        if (!lead) {
            console.error('Lead no encontrado para reasignar:', leadId);
            console.log('Leads disponibles:', this.leads.map(l => ({ id: l.id, name: l.name })));
            return;
        }
        console.log('Lead encontrado para reasignar:', lead);
        
        // Crear modal de reasignación
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Reasignar Lead: ${lead.name}</h3>
                    <span class="close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="current-assignment">
                        <p><strong>Asesor Actual:</strong> ${lead.advisor || 'Sin asignar'}</p>
                    </div>
                    <div class="form-group">
                        <label for="reassignAdvisor">Nuevo Asesor:</label>
                        <select id="reassignAdvisor" required>
                            <option value="">Seleccionar asesor...</option>
                            ${[...new Set(this.leads.map(l => l.advisor).filter(a => a))].map(advisor => 
                                `<option value="${advisor}">${advisor}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="reassignReason">Razón de Reasignación:</label>
                        <textarea id="reassignReason" rows="3" placeholder="Explica por qué se reasigna este lead..."></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Cancelar</button>
                    <button class="btn btn-primary" onclick="window.crm.saveLeadReassignment('${leadId}')">Reasignar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    saveLeadReassignment(leadId) {
        const lead = this.leads.find(l => l.id === leadId);
        if (!lead) return;
        
        const newAdvisor = document.getElementById('reassignAdvisor').value;
        const reason = document.getElementById('reassignReason').value;
        
        if (!newAdvisor) {
            alert('Por favor selecciona un asesor');
            return;
        }
        
        const oldAdvisor = lead.advisor;
        lead.advisor = newAdvisor;
        lead.lastActivity = new Date().toISOString();
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal
        document.querySelector('.modal').remove();
        
        // Actualizar vista
        this.loadManagerLeads();
        
        alert(`Lead reasignado exitosamente a ${newAdvisor}`);
        console.log('Lead reasignado:', lead);
    }
    
    loadMockEvents() {
        // Inicializar array de eventos si no existe
        if (!this.events) {
            this.events = [];
        }
        
        // Solo agregar eventos de ejemplo si no hay eventos existentes
        if (this.events.length === 0) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const nextWeek = new Date(today);
            nextWeek.setDate(nextWeek.getDate() + 7);
            
            this.events = [
                {
                    id: 'event1',
                    title: 'Reunión de Equipo',
                    description: 'Reunión semanal del equipo de ventas',
                    date: today.toISOString().split('T')[0],
                    time: '09:00',
                    duration: 60,
                    advisor: null,
                    type: 'meeting',
                    createdAt: new Date().toISOString()
                },
                {
                    id: 'event2',
                    title: 'Seguimiento con Asesor',
                    description: 'Revisión de objetivos semanales',
                    date: tomorrow.toISOString().split('T')[0],
                    time: '14:00',
                    duration: 30,
                    advisor: 'Asesor',
                    type: 'call',
                    createdAt: new Date().toISOString()
                },
                {
                    id: 'event3',
                    title: 'Presentación de Producto',
                    description: 'Demostración de nuevo producto a cliente',
                    date: nextWeek.toISOString().split('T')[0],
                    time: '10:00',
                    duration: 90,
                    advisor: 'Asesor 2',
                    type: 'meeting',
                    createdAt: new Date().toISOString()
                },
                {
                    id: 'event4',
                    title: 'Capacitación de Ventas',
                    description: 'Sesión de capacitación sobre nuevas técnicas',
                    date: nextWeek.toISOString().split('T')[0],
                    time: '15:00',
                    duration: 120,
                    advisor: null,
                    type: 'meeting',
                    createdAt: new Date().toISOString()
                }
            ];
            
            // Guardar eventos
            this.saveData();
        }
    }
    
    updateManagerLeads() {
        console.log('Actualizando gestión de leads del manager...');
        
        // Configurar filtros
        this.setupManagerLeadsFilters();
        
        // Cargar y mostrar leads
        this.loadManagerLeads();
        
        // Configurar event listeners
        this.setupManagerLeadsEventListeners();
    }
    
    setupManagerLeadsFilters() {
        const statusFilter = document.getElementById('leadsStatusFilter');
        const interestFilter = document.getElementById('leadsInterestFilter');
        const advisorFilter = document.getElementById('leadsAdvisorFilter');
        
        // Configurar filtro de asesores
        if (advisorFilter) {
            advisorFilter.innerHTML = '<option value="">Todos los Asesores</option>';
            const advisors = [...new Set(this.leads.map(lead => lead.advisor).filter(advisor => advisor))];
            advisors.forEach(advisor => {
                const option = document.createElement('option');
                option.value = advisor;
                option.textContent = advisor;
                advisorFilter.appendChild(option);
            });
        }
    }
    
    setupManagerLeadsEventListeners() {
        const statusFilter = document.getElementById('leadsStatusFilter');
        const interestFilter = document.getElementById('leadsInterestFilter');
        const advisorFilter = document.getElementById('leadsAdvisorFilter');
        
        if (statusFilter) {
            statusFilter.addEventListener('change', () => this.filterManagerLeads());
        }
        
        if (interestFilter) {
            interestFilter.addEventListener('change', () => this.filterManagerLeads());
        }
        
        if (advisorFilter) {
            advisorFilter.addEventListener('change', () => this.filterManagerLeads());
        }
    }
    
    loadManagerLeads() {
        console.log('Cargando leads del manager...');
        const leadsGrid = document.getElementById('leadsGrid');
        if (!leadsGrid) {
            console.error('No se encontró el elemento leadsGrid');
            return;
        }
        
        console.log('Total de leads disponibles:', this.leads.length);
        
        // Obtener filtros actuales
        const statusFilter = document.getElementById('leadsStatusFilter')?.value || '';
        const interestFilter = document.getElementById('leadsInterestFilter')?.value || '';
        const advisorFilter = document.getElementById('leadsAdvisorFilter')?.value || '';
        
        console.log('Filtros aplicados:', { statusFilter, interestFilter, advisorFilter });
        
        // Filtrar leads
        let filteredLeads = this.leads;
        
        if (statusFilter) {
            filteredLeads = filteredLeads.filter(lead => lead.status === statusFilter);
        }
        
        if (interestFilter) {
            filteredLeads = filteredLeads.filter(lead => lead.interestLevel === interestFilter);
        }
        
        if (advisorFilter) {
            filteredLeads = filteredLeads.filter(lead => lead.advisor === advisorFilter);
        }
        
        console.log('Leads después del filtrado:', filteredLeads.length);
        
        // Generar HTML de leads
        leadsGrid.innerHTML = '';
        
        if (filteredLeads.length === 0) {
            leadsGrid.innerHTML = `
                <div class="no-leads-message">
                    <h3>No se encontraron leads</h3>
                    <p>No hay leads que coincidan con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }
        
        filteredLeads.forEach(lead => {
            const leadCard = this.createManagerLeadCard(lead);
            leadsGrid.appendChild(leadCard);
        });
        
        console.log(`Cargados ${filteredLeads.length} leads`);
    }

    // ==================== GESTIÓN DE CLIENTES ====================
    
    updateManagerClients() {
        console.log('Actualizando lista de clientes del manager...');
        this.setupManagerClientsFilters();
        this.loadManagerClients();
        this.setupManagerClientsEventListeners();
    }
    
    setupManagerClientsFilters() {
        // Configurar filtro de asesores
        const advisorFilter = document.getElementById('clientsAdvisorFilter');
        if (advisorFilter) {
            advisorFilter.innerHTML = '<option value="">Todos los Asesores</option>';
            const advisors = [...new Set(this.leads.map(lead => lead.advisor).filter(advisor => advisor))];
            advisors.forEach(advisor => {
                const option = document.createElement('option');
                option.value = advisor;
                option.textContent = advisor;
                advisorFilter.appendChild(option);
            });
        }
    }
    
    setupManagerClientsEventListeners() {
        // Configurar event listeners para filtros
        const typeFilter = document.getElementById('clientsTypeFilter');
        const advisorFilter = document.getElementById('clientsAdvisorFilter');
        
        if (typeFilter) {
            typeFilter.addEventListener('change', () => this.filterManagerClients());
        }
        if (advisorFilter) {
            advisorFilter.addEventListener('change', () => this.filterManagerClients());
        }
    }
    
    loadManagerClients() {
        console.log('Cargando lista de clientes del manager...');
        const clientsList = document.getElementById('clientsList');
        if (!clientsList) {
            console.error('No se encontró el elemento clientsList');
            return;
        }
        
        console.log('Total de clientes disponibles:', this.leads.length);
        
        // Obtener filtros actuales
        const typeFilter = document.getElementById('clientsTypeFilter')?.value || '';
        const advisorFilter = document.getElementById('clientsAdvisorFilter')?.value || '';
        
        console.log('Filtros aplicados:', { typeFilter, advisorFilter });
        
        // Filtrar clientes
        let filteredClients = this.leads;
        
        if (typeFilter) {
            if (typeFilter === 'fidelizado') {
                filteredClients = filteredClients.filter(client => client.clientType === 'fidelizado' || client.status === 'Fidelizado');
            } else if (typeFilter === 'potencial') {
                filteredClients = filteredClients.filter(client => !client.clientType || client.clientType !== 'fidelizado');
            }
        }
        
        if (advisorFilter) {
            filteredClients = filteredClients.filter(client => client.advisor === advisorFilter);
        }
        
        console.log('Clientes después del filtrado:', filteredClients.length);
        
        // Generar HTML de lista de clientes
        clientsList.innerHTML = '';
        
        if (filteredClients.length === 0) {
            clientsList.innerHTML = `
                <div class="no-clients-message">
                    <h3>No se encontraron clientes</h3>
                    <p>No hay clientes que coincidan con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }
        
        // Crear header de la lista
        const header = document.createElement('div');
        header.className = 'clients-list-header';
        header.innerHTML = `
            <div>Cliente</div>
            <div>Asesor</div>
            <div>Tipo</div>
            <div>Estado</div>
            <div>Acciones</div>
        `;
        clientsList.appendChild(header);
        
        // Crear items de la lista
        filteredClients.forEach(client => {
            const listItem = this.createClientListItem(client);
            clientsList.appendChild(listItem);
        });
        
        console.log(`Cargados ${filteredClients.length} clientes`);
    }
    
    createClientListItem(client) {
        const item = document.createElement('div');
        item.className = 'clients-list-item';
        
        // Determinar tipo de cliente
        const isFidelized = client.clientType === 'fidelizado' || client.status === 'Fidelizado';
        const clientType = isFidelized ? 'fidelizado' : 'potencial';
        const clientTypeText = isFidelized ? 'Fidelizado' : 'Potencial';
        
        // Determinar clase de estado
        const statusClass = client.status ? client.status.toLowerCase().replace(' ', '-') : 'sin-definir';
        
        item.innerHTML = `
            <div class="client-name">
                <div>${client.name}</div>
                <div class="client-company">${client.company || 'Sin empresa'}</div>
            </div>
            <div class="client-advisor">${client.advisor || 'Sin asignar'}</div>
            <div class="client-type client-type-${clientType}">${clientTypeText}</div>
            <div class="client-status client-status-${statusClass}">${client.status || 'Sin definir'}</div>
            <div class="client-actions">
                <button class="btn btn-primary" onclick="window.crm.viewClientHistory('${client.id}')">Ver Historial</button>
            </div>
        `;
        
        return item;
    }
    
    filterManagerClients() {
        this.loadManagerClients();
    }
    
    viewClientHistory(clientId) {
        console.log('=== INICIANDO viewClientHistory ===');
        console.log('Cliente ID:', clientId);

        try {
            const client = this.leads.find(l => l.id == clientId);
            if (!client) {
                console.error('Cliente no encontrado:', clientId);
                alert('Cliente no encontrado');
                return;
            }
            
            console.log('Cliente encontrado:', client.name);
            
            // Eliminar modal existente si existe
            const existingModal = document.getElementById('clientHistoryModal');
            if (existingModal) {
                existingModal.remove();
                console.log('Modal existente eliminado');
            }
            
            // Crear modal muy simple
            const modal = document.createElement('div');
            modal.id = 'clientHistoryModal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            modal.style.zIndex = '1000';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            
            modal.innerHTML = `
                <div style="background: white; padding: 1.5rem; border-radius: 8px; max-width: 700px; width: 95%; max-height: 90vh; overflow-y: auto;">
                    <!-- Header compacto -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #dee2e6;">
                        <h3 style="margin: 0; color: #333;">📋 ${client.name}</h3>
                        <button onclick="document.getElementById('clientHistoryModal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; padding: 0; width: 30px; height: 30px;">&times;</button>
                    </div>
                    
                    <!-- Info básica compacta -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.5rem; margin-bottom: 1rem; font-size: 0.9rem;">
                        <div><strong>Empresa:</strong> ${client.company || 'No especificada'}</div>
                        <div><strong>Asesor:</strong> ${client.advisor || 'Sin asignar'}</div>
                        <div><strong>Estado:</strong> ${client.status || 'Sin definir'}</div>
                    </div>
                    
                    <!-- Actividades compactas -->
                    <div style="margin-bottom: 1rem;">
                        <h4 style="margin: 0 0 0.5rem 0; color: #495057; font-size: 1rem;">📅 Actividades (${this.activities.filter(a => a.leadId == clientId).length}):</h4>
                        <div style="max-height: 200px; overflow-y: auto; border: 1px solid #dee2e6; border-radius: 4px; padding: 0.5rem;">
                            ${this.activities.filter(a => a.leadId == clientId).map(activity => `
                                <div style="border-bottom: 1px solid #eee; padding: 0.5rem 0; font-size: 0.85rem;">
                                    <div style="font-weight: 600; color: #007bff;">${activity.type}</div>
                                    <div style="color: #495057; margin: 0.2rem 0;">${activity.description}</div>
                                    <small style="color: #6c757d;">Por: ${activity.user} • ${new Date(activity.timestamp).toLocaleString('es-ES')}</small>
                                </div>
                            `).join('') || '<p style="text-align: center; color: #6c757d; margin: 1rem 0;">No hay actividades registradas</p>'}
                        </div>
                    </div>
                    
                    <!-- Sección IA compacta -->
                    <div style="margin-bottom: 1rem; padding: 0.8rem; background: #f8f9fa; border-radius: 4px; border: 1px solid #dee2e6;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <h4 style="margin: 0; color: #495057; font-size: 0.95rem;">🤖 Análisis con IA</h4>
                            <button onclick="window.crm.analyzeClientWithAI('${clientId}')" style="padding: 0.4rem 0.8rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
                                🧠 Analizar
                            </button>
                        </div>
                        <p style="margin: 0 0 0.5rem 0; font-size: 0.8rem; color: #6c757d;">Obtén insights inteligentes del historial</p>
                        <div id="aiAnalysis_${clientId}" style="display: none;"></div>
                    </div>
                    
                    <!-- Botón cerrar -->
                    <div style="text-align: right; padding-top: 0.5rem; border-top: 1px solid #dee2e6;">
                        <button onclick="document.getElementById('clientHistoryModal').remove()" style="padding: 0.5rem 1rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">Cerrar</button>
                    </div>
                </div>
            `;
            
            console.log('Agregando modal al DOM...');
            
            // Agregar event listener para cerrar con click fuera
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    console.log('Click fuera del modal, cerrando...');
                    document.getElementById('clientHistoryModal').remove();
                }
            });
            
            // Agregar event listener para cerrar con Escape
            document.addEventListener('keydown', function escapeHandler(e) {
                if (e.key === 'Escape') {
                    console.log('Tecla Escape presionada, cerrando modal...');
                    const modal = document.getElementById('clientHistoryModal');
                    if (modal) {
                        modal.remove();
                        document.removeEventListener('keydown', escapeHandler);
                    }
                }
            });
            
            document.body.appendChild(modal);
            console.log('Modal agregado exitosamente');
            
        } catch (error) {
            console.error('ERROR en viewClientHistory:', error);
            alert('Error: ' + error.message);
        }
    }
    
    closeClientModal() {
        console.log('Cerrando modal de cliente...');
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.remove();
        });
        console.log('Modal cerrado exitosamente');
    }
    
    analyzeClientWithAI(clientId) {
        console.log('Iniciando análisis con IA para cliente:', clientId);
        
        const analysisDiv = document.getElementById(`aiAnalysis_${clientId}`);
        if (!analysisDiv) {
            console.error('No se encontró el div de análisis');
            return;
        }
        
        // Mostrar indicador de carga
        analysisDiv.style.display = 'block';
        analysisDiv.innerHTML = `
            <div style="text-align: center; padding: 1rem;">
                <div style="border: 4px solid #f3f3f3; border-top: 4px solid #28a745; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 0 auto;"></div>
                <p style="margin-top: 0.5rem; color: #6c757d;">🤖 IA analizando historial...</p>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        
        // Simular análisis con delay
        setTimeout(() => {
            this.generateAIAnalysis(clientId);
        }, 2000);
    }
    
    generateAIAnalysis(clientId) {
        const client = this.leads.find(l => l.id == clientId);
        const activities = this.activities.filter(activity => activity.leadId == clientId);
        const analysisDiv = document.getElementById(`aiAnalysis_${clientId}`);
        
        if (!client || !analysisDiv) return;
        
        // Generar análisis basado en los datos del cliente
        const analysis = this.simulateAIAnalysis(client, activities);
        
        analysisDiv.innerHTML = `
            <div style="max-height: 400px; overflow-y: auto; border: 1px solid #dee2e6; border-radius: 8px; padding: 1rem; background: #f8f9fa;">
                <!-- Header compacto -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.8rem; border-radius: 8px; margin-bottom: 1rem; text-align: center;">
                    <h6 style="margin: 0; font-size: 1rem;">🤖 Análisis IA • ${activities.length} actividades</h6>
                </div>
                
                <!-- Métricas compactas en una fila -->
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                    <div style="background: #e8f5e8; padding: 0.8rem; border-radius: 6px; text-align: center; border-left: 3px solid #28a745;">
                        <div style="font-size: 0.7rem; color: #155724; font-weight: 600;">📊 ENGAGEMENT</div>
                        <div style="font-size: 1rem; font-weight: bold; color: #28a745;">${analysis.engagement}</div>
                    </div>
                    <div style="background: #fff3cd; padding: 0.8rem; border-radius: 6px; text-align: center; border-left: 3px solid #ffc107;">
                        <div style="font-size: 0.7rem; color: #856404; font-weight: 600;">⚡ CIERRE</div>
                        <div style="font-size: 1rem; font-weight: bold; color: #ffc107;">${analysis.closeProbability}%</div>
                    </div>
                    <div style="background: #d1ecf1; padding: 0.8rem; border-radius: 6px; text-align: center; border-left: 3px solid #17a2b8;">
                        <div style="font-size: 0.7rem; color: #0c5460; font-weight: 600;">🎯 ACCIÓN</div>
                        <div style="font-size: 0.8rem; font-weight: 600; color: #17a2b8;">${analysis.nextAction}</div>
                    </div>
                </div>
                
                <!-- Insights compactos -->
                <div style="background: white; padding: 0.8rem; border-radius: 6px; margin-bottom: 1rem; border: 1px solid #dee2e6;">
                    <h6 style="margin: 0 0 0.5rem 0; color: #495057; font-size: 0.9rem; font-weight: 600;">🔍 Insights:</h6>
                    ${analysis.insights.map(insight => `
                        <div style="font-size: 0.8rem; color: #6c757d; margin-bottom: 0.3rem; padding-left: 1rem; position: relative;">
                            <span style="position: absolute; left: 0; color: #007bff;">•</span>
                            ${insight}
                        </div>
                    `).join('')}
                </div>
                
                <!-- Recomendaciones compactas -->
                <div style="background: white; padding: 0.8rem; border-radius: 6px; margin-bottom: 1rem; border: 1px solid #007bff;">
                    <h6 style="margin: 0 0 0.5rem 0; color: #007bff; font-size: 0.9rem; font-weight: 600;">💡 Recomendaciones:</h6>
                    ${analysis.recommendations.map(rec => `
                        <div style="font-size: 0.8rem; color: #495057; margin-bottom: 0.3rem; padding-left: 1rem; position: relative;">
                            <span style="position: absolute; left: 0; color: #28a745;">✓</span>
                            ${rec}
                        </div>
                    `).join('')}
                </div>
                
                <!-- Footer compacto -->
                <div style="text-align: center; padding: 0.5rem; background: #f8f9fa; border-radius: 4px;">
                    <small style="color: #6c757d; font-size: 0.7rem;">
                        📅 ${new Date().toLocaleString('es-ES')} | 🤖 CRM AI
                    </small>
                </div>
            </div>
        `;
    }
    
    simulateAIAnalysis(client, activities) {
        // Simular análisis inteligente basado en los datos
        const totalActivities = activities.length;
        const recentActivities = activities.filter(a => new Date(a.timestamp) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
        const daysSinceLastActivity = Math.floor((new Date() - new Date(client.lastActivity)) / (1000 * 60 * 60 * 24));
        
        // Calcular engagement
        let engagement = 'Bajo';
        if (totalActivities >= 5 && recentActivities.length >= 2) engagement = 'Alto';
        else if (totalActivities >= 3 || recentActivities.length >= 1) engagement = 'Medio';
        
        // Calcular probabilidad de cierre
        let closeProbability = 30;
        if (client.status === 'Proponer') closeProbability = 75;
        else if (client.status === 'Desarrollar') closeProbability = 60;
        else if (client.status === 'Cierre') closeProbability = 95;
        else if (client.clientType === 'fidelizado') closeProbability = 100;
        
        if (client.interestLevel === 'Interesado') closeProbability += 15;
        else if (client.interestLevel === 'Medianamente interesado') closeProbability += 5;
        
        if (daysSinceLastActivity > 30) closeProbability -= 20;
        else if (daysSinceLastActivity > 14) closeProbability -= 10;
        
        closeProbability = Math.max(5, Math.min(100, closeProbability));
        
        // Determinar próxima acción
        let nextAction = 'Llamada de seguimiento';
        if (client.status === 'Calificar') nextAction = 'Calificación detallada';
        else if (client.status === 'Desarrollar') nextAction = 'Reunión de propuesta';
        else if (client.status === 'Proponer') nextAction = 'Seguimiento de propuesta';
        else if (client.clientType === 'fidelizado') nextAction = 'Revisión de contrato';
        
        // Generar insights
        const insights = [];
        if (totalActivities === 0) {
            insights.push('Cliente sin actividades registradas - requiere atención inmediata');
        } else {
            if (daysSinceLastActivity > 30) {
                insights.push(`Han pasado ${daysSinceLastActivity} días desde la última actividad - riesgo de pérdida`);
            }
            if (totalActivities >= 5) {
                insights.push('Cliente con alto nivel de interacciones - muy comprometido');
            }
            if (client.interestLevel === 'Interesado') {
                insights.push('Nivel de interés alto - momento óptimo para avanzar');
            }
            if (client.clientType === 'fidelizado') {
                insights.push('Cliente fidelizado - enfocarse en retención y upselling');
            }
            if (recentActivities.length >= 3) {
                insights.push('Actividad reciente alta - cliente muy activo');
            }
        }
        
        if (insights.length === 0) {
            insights.push('Cliente en proceso normal - continuar con seguimiento estándar');
        }
        
        // Generar recomendaciones
        const recommendations = [];
        if (client.status === 'Calificar') {
            recommendations.push('Programar llamada de calificación en las próximas 48 horas');
            recommendations.push('Enviar material informativo sobre nuestros servicios');
        } else if (client.status === 'Desarrollar') {
            recommendations.push('Preparar propuesta personalizada basada en necesidades identificadas');
            recommendations.push('Agendar reunión presencial o virtual para presentar solución');
        } else if (client.status === 'Proponer') {
            recommendations.push('Hacer seguimiento de la propuesta enviada en 3-5 días');
            recommendations.push('Preparar respuestas a posibles objeciones');
        } else if (client.clientType === 'fidelizado') {
            recommendations.push('Revisar satisfacción del cliente y oportunidades de expansión');
            recommendations.push('Programar reunión de renovación de contrato');
        }
        
        if (daysSinceLastActivity > 14) {
            recommendations.push('Contactar urgentemente - ha pasado mucho tiempo sin actividad');
        }
        
        if (recommendations.length === 0) {
            recommendations.push('Continuar con el proceso de seguimiento estándar');
            recommendations.push('Mantener comunicación regular con el cliente');
        }
        
        return {
            engagement,
            closeProbability,
            nextAction,
            insights,
            recommendations
        };
    }
    
    createManagerLeadCard(lead) {
        const card = document.createElement('div');
        card.className = 'lead-card-manager';
        card.innerHTML = `
            <div class="lead-card-header">
                <h3>${lead.name}</h3>
                <span class="lead-status status-${lead.status ? lead.status.toLowerCase() : 'sin-definir'}">${lead.status || 'Sin definir'}</span>
            </div>
            <div class="lead-card-body">
                <div class="lead-info">
                    <p><strong>Contacto:</strong> ${lead.contact}</p>
                    <p><strong>Asesor:</strong> <span class="advisor-name">${lead.advisor || 'Sin asignar'}</span></p>
                    <p><strong>Nivel de Interés:</strong> <span class="interest-level interest-${lead.interestLevel ? lead.interestLevel.toLowerCase().replace(' ', '-') : 'sin-definir'}">${lead.interestLevel || 'Sin definir'}</span></p>
                    <p><strong>Fecha de Creación:</strong> ${new Date(lead.createdAt).toLocaleDateString('es-ES')}</p>
                    <p><strong>Última Actividad:</strong> ${new Date(lead.lastActivity).toLocaleDateString('es-ES')}</p>
                </div>
                <div class="lead-notes">
                    <p><strong>Notas:</strong></p>
                    <p>${lead.notes || 'Sin notas'}</p>
                </div>
                <div class="lead-actions">
                    <button class="btn btn-primary btn-sm" onclick="window.crm.viewLeadDetails('${lead.id}')">Ver Detalles</button>
                    <button class="btn btn-secondary btn-sm" onclick="window.crm.editLead('${lead.id}')">Editar</button>
                    <button class="btn btn-warning btn-sm" onclick="window.crm.reassignLead('${lead.id}')">Reasignar</button>
                </div>
            </div>
        `;
        return card;
    }
    
    filterManagerLeads() {
        this.loadManagerLeads();
    }
    
    updateAdvisorTasks() {
        const advisorTasks = this.getTasksForUser();
        const tasksList = document.getElementById('tasksList');
        const upcomingTasks = document.getElementById('upcomingTasksWidget');
        
        if (!tasksList) {
            console.log('Elemento tasksList no encontrado');
            return;
        }
        
        console.log('Actualizando tareas del asesor:', advisorTasks.length, 'tareas encontradas');
        
        // Sort tasks by due date
        advisorTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        
        // Update tasks list
        console.log('Generando HTML para', advisorTasks.length, 'tareas');
        const tasksHTML = advisorTasks.map(task => {
            const statusClass = this.getTaskStatusClass(task.status);
            const priority = task.priority || 'Media';
            const priorityClass = this.getTaskPriorityClass(priority);
            const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'completada';
            
            return `
                <div class="task-item ${isOverdue ? 'overdue' : ''}" data-task-id="${task.id}">
                    <div class="task-header">
                        <h4>${task.type} - ${this.getLeadName(task.leadId)}</h4>
                        <div class="task-meta">
                            <span class="task-status status-${statusClass}">${task.status}</span>
                            <span class="task-priority priority-${priorityClass}">${priority}</span>
                        </div>
                    </div>
                    <div class="task-details">
                        <p><strong>Cliente:</strong> ${this.getLeadName(task.leadId)}</p>
                        <p><strong>Tipo:</strong> ${task.type}</p>
                        <p><strong>Fecha límite:</strong> ${this.formatDate(task.dueDate)}</p>
                        <p><strong>Duración:</strong> ${task.duration} min</p>
                        ${task.notes ? `<p><strong>Notas:</strong> ${task.notes}</p>` : ''}
                        ${task.completionNotes ? `<p><strong>Notas de cierre:</strong> ${task.completionNotes}</p>` : ''}
                    </div>
                    <div class="task-actions">
                        ${task.status !== 'completada' ? `
                            <button class="btn btn-success" onclick="window.crm.showCompleteTaskModal(${task.id})">Completar</button>
                        ` : ''}
                        <button class="btn btn-primary" onclick="window.crm.showTaskDetail(${task.id})">Ver Detalle</button>
                        <button class="btn btn-danger" onclick="window.crm.confirmDeleteTask(${task.id})" title="Eliminar tarea">
                            🗑️ Eliminar
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        console.log('Insertando HTML en tasksList');
        tasksList.innerHTML = tasksHTML;
        
        // Update upcoming tasks (next 7 days) - only if element exists
        if (upcomingTasks) {
            const upcoming = advisorTasks.filter(task => {
                const taskDate = new Date(task.dueDate);
                const today = new Date();
                const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                return taskDate >= today && taskDate <= nextWeek && task.status !== 'completada';
            });
            
            upcomingTasks.innerHTML = upcoming.map(task => {
                const isToday = this.isToday(new Date(task.dueDate));
                const isTomorrow = this.isTomorrow(new Date(task.dueDate));
                
                return `
                    <div class="upcoming-task ${isToday ? 'today' : ''} ${isTomorrow ? 'tomorrow' : ''}">
                        <div class="upcoming-task-time">
                            ${isToday ? 'Hoy' : isTomorrow ? 'Mañana' : this.formatDate(task.dueDate)}
                        </div>
                        <div class="upcoming-task-content">
                            <h5>${task.type} - ${this.getLeadName(task.leadId)}</h5>
                            <p>${task.notes || 'Sin descripción'}</p>
                        </div>
                        <div class="upcoming-task-actions">
                            <button class="btn btn-sm btn-primary" onclick="crm.showTaskDetail(${task.id})">Ver</button>
                            ${task.status !== 'completada' ? `
                                <button class="btn btn-sm btn-success" onclick="crm.showCompleteTaskModal(${task.id})">Completar</button>
                            ` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // Update dashboard stats
        this.updateAdvisorDashboard();
    }
    
    getTaskStatusClass(status) {
        const statusMap = {
            'abierta': 'open',
            'programada': 'scheduled',
            'completada': 'completed',
            'cancelada': 'cancelled'
        };
        return statusMap[status] || 'open';
    }
    
    getTaskPriorityClass(priority) {
        const priorityMap = {
            'Baja': 'low',
            'Media': 'medium',
            'Alta': 'high',
            'Urgente': 'urgent'
        };
        return priorityMap[priority] || 'medium';
    }
    
    isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }
    
    isTomorrow(date) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return date.toDateString() === tomorrow.toDateString();
    }
    
    showTaskDetail(taskId) {
        console.log('Buscando tarea con ID:', taskId, 'Tipo:', typeof taskId);
        const task = this.tasks.find(t => t.id == taskId); // Usar == en lugar de === para flexibilidad
        console.log('Tarea encontrada:', !!task);
        if (task) {
            console.log('Detalles de la tarea:', { id: task.id, type: task.type, status: task.status });
        } else {
            console.log('IDs de tareas disponibles:', this.tasks.map(t => ({ id: t.id, type: typeof t.id })));
        }
        
        if (!task) {
            this.showNotification('Tarea no encontrada', 'error');
            return;
        }
        
        // Get lead name
        const leadName = this.getLeadName(task.leadId);
        const priority = task.priority || 'Media';
        const statusClass = this.getTaskStatusClass(task.status);
        const priorityClass = this.getTaskPriorityClass(priority);
        
        // Create detailed HTML content for the modal
        const taskDetailContent = document.getElementById('taskDetailContent');
        if (taskDetailContent) {
            taskDetailContent.innerHTML = `
                <div class="task-detail-info">
                    <div class="task-detail-header">
                        <h4>${task.type} - ${leadName}</h4>
                        <div class="task-detail-meta">
                            <span class="task-status status-${statusClass}">${task.status}</span>
                            <span class="task-priority priority-${priorityClass}">${priority}</span>
                        </div>
                    </div>
                    
                    <div class="task-detail-grid">
                        <div class="task-detail-item">
                            <label>Cliente:</label>
                            <span>${leadName}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Tipo:</label>
                            <span>${task.type}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Estado:</label>
                            <span class="task-status status-${statusClass}">${task.status}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Prioridad:</label>
                            <span class="task-priority priority-${priorityClass}">${priority}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Fecha límite:</label>
                            <span>${this.formatDate(task.dueDate)}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Duración:</label>
                            <span>${task.duration} minutos</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Creada:</label>
                            <span>${this.formatDate(task.createdAt)}</span>
                        </div>
                        ${task.completedAt ? `
                        <div class="task-detail-item">
                            <label>Completada:</label>
                            <span>${this.formatDate(task.completedAt)}</span>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="task-detail-notes">
                        <label>Descripción:</label>
                        <p>${task.notes || 'Sin descripción'}</p>
                    </div>
                    
                    ${task.completionNotes ? `
                    <div class="task-detail-notes">
                        <label>Notas de cierre:</label>
                        <p>${task.completionNotes}</p>
                    </div>
                    ` : ''}
                </div>
            `;
        }
        
        // Show the modal
        const modal = document.getElementById('taskDetailModal');
        if (modal) {
            modal.classList.add('show');
        }
    }
    
    showCompleteTaskModal(taskId) {
        // Show completion modal
        const modal = document.getElementById('completeTaskModal');
        if (modal) {
            document.getElementById('completeTaskId').value = taskId;
            modal.classList.add('show');
        }
    }
    
    getLeadName(leadId) {
        const lead = this.leads.find(l => l.id === leadId);
        return lead ? lead.name : 'Cliente no encontrado';
    }
    
    filterTasks() {
        const statusFilter = document.getElementById('taskStatusFilter')?.value || '';
        const typeFilter = document.getElementById('taskTypeFilter')?.value || '';
        
        const advisorTasks = this.getTasksForUser();
        let filteredTasks = advisorTasks;
        
        // Apply status filter
        if (statusFilter) {
            filteredTasks = filteredTasks.filter(task => task.status === statusFilter);
        }
        
        // Apply type filter
        if (typeFilter) {
            filteredTasks = filteredTasks.filter(task => task.type === typeFilter);
        }
        
        // Sort by due date
        filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        
        // Update tasks list
        const tasksList = document.getElementById('tasksList');
        if (tasksList) {
            tasksList.innerHTML = filteredTasks.map(task => {
                const statusClass = this.getTaskStatusClass(task.status);
                const priority = task.priority || 'Media';
                const priorityClass = this.getTaskPriorityClass(priority);
                const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'completada';
                
                return `
                    <div class="task-item ${isOverdue ? 'overdue' : ''}" data-task-id="${task.id}">
                        <div class="task-header">
                            <h4>${task.type} - ${this.getLeadName(task.leadId)}</h4>
                            <div class="task-meta">
                                <span class="task-status status-${statusClass}">${task.status}</span>
                                <span class="task-priority priority-${priorityClass}">${priority}</span>
                            </div>
                        </div>
                        <div class="task-details">
                            <p><strong>Cliente:</strong> ${this.getLeadName(task.leadId)}</p>
                            <p><strong>Tipo:</strong> ${task.type}</p>
                            <p><strong>Fecha límite:</strong> ${this.formatDate(task.dueDate)}</p>
                            <p><strong>Duración:</strong> ${task.duration} min</p>
                            ${task.notes ? `<p><strong>Notas:</strong> ${task.notes}</p>` : ''}
                            ${task.completionNotes ? `<p><strong>Notas de cierre:</strong> ${task.completionNotes}</p>` : ''}
                        </div>
                        <div class="task-actions">
                            ${task.status !== 'completada' ? `
                                <button class="btn btn-success" onclick="window.crm.showCompleteTaskModal(${task.id})">Completar</button>
                            ` : ''}
                            <button class="btn btn-primary" onclick="window.crm.showTaskDetail(${task.id})">Ver Detalle</button>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        console.log(`Filtradas ${filteredTasks.length} tareas de ${advisorTasks.length} totales`);
    }

    updateAdvisorCalendar() {
        console.log('Actualizando calendario del asesor...');
        
        // Asegurar que hay tareas para la semana actual
        this.addCurrentWeekTasks();
        
        // Configurar controles del calendario
        this.setupAdvisorCalendarControls();
        
        // Generar calendario semanal
        this.generateAdvisorWeeklyCalendar();
    }

    setupAdvisorCalendarControls() {
        const prevWeekBtn = document.getElementById('prevWeek');
        const nextWeekBtn = document.getElementById('nextWeek');
        const todayBtn = document.getElementById('todayBtn');
        const createTaskBtn = document.getElementById('createTaskBtn');
        
        if (prevWeekBtn) {
            prevWeekBtn.addEventListener('click', () => {
                this.navigateAdvisorWeek(-1);
            });
        }
        
        if (nextWeekBtn) {
            nextWeekBtn.addEventListener('click', () => {
                this.navigateAdvisorWeek(1);
            });
        }
        
        if (todayBtn) {
            todayBtn.addEventListener('click', () => {
                this.goToTodayAdvisor();
            });
        }
        
        if (createTaskBtn) {
            createTaskBtn.addEventListener('click', () => {
                this.showTaskModal();
            });
        }
        
        // Inicializar fecha actual
        if (!this.currentAdvisorWeek) {
            this.currentAdvisorWeek = new Date();
        }
    }

    navigateAdvisorWeek(direction) {
        this.currentAdvisorWeek.setDate(this.currentAdvisorWeek.getDate() + (direction * 7));
        this.generateAdvisorWeeklyCalendar();
    }

    goToTodayAdvisor() {
        this.currentAdvisorWeek = new Date();
        this.generateAdvisorWeeklyCalendar();
    }

    generateAdvisorWeeklyCalendar() {
        const calendarGrid = document.getElementById('advisorCalendar');
        const currentWeekElement = document.getElementById('currentWeek');
        
        if (!calendarGrid || !currentWeekElement) {
            console.error('Elementos del calendario no encontrados');
            return;
        }

        console.log('=== GENERANDO CALENDARIO DEL ASESOR ===');

        // Calcular la semana actual
        const weekStart = this.getStartOfWeek(this.currentAdvisorWeek);
        const weekEnd = this.getEndOfWeek(this.currentAdvisorWeek);
        
        console.log('Semana actual:', weekStart.toLocaleDateString(), '-', weekEnd.toLocaleDateString());
        
        // Obtener todas las tareas del asesor
        const allAdvisorTasks = this.getTasksForUser();
        console.log('Total tareas del asesor:', allAdvisorTasks.length);
        
        // Filtrar tareas de esta semana
        const weekTasks = allAdvisorTasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return taskDate >= weekStart && taskDate <= weekEnd;
        });
        console.log('Tareas de esta semana:', weekTasks.length);
        weekTasks.forEach(task => {
            console.log(`- ${task.type} (${task.clientName || 'Sin cliente'}) - ${new Date(task.dueDate).toLocaleDateString()}`);
        });
        
        // Actualizar display de la semana
        currentWeekElement.textContent = `${weekStart.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'short' 
        })} - ${weekEnd.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
        })}`;

        // Generar grid del calendario
        let calendarHTML = '';
        const hours = Array.from({length: 10}, (_, i) => i + 8); // 8:00 a 17:00
        
        hours.forEach(hour => {
            calendarHTML += `<div class="time-slot">${hour}:00</div>`;
            
            // Generar celdas para cada día de la semana
            for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
                const currentDay = new Date(weekStart);
                currentDay.setDate(weekStart.getDate() + dayOffset);
                
                const dayTasks = this.getTasksForDay(currentDay);
                const hourTasks = dayTasks.filter(task => this.isTaskAtTime(task, `${hour}:00`));
                
                if (dayTasks.length > 0) {
                    console.log(`Día ${currentDay.toLocaleDateString()}: ${dayTasks.length} tareas`);
                }
                
                calendarHTML += `<div class="day-cell" data-date="${currentDay.toISOString().split('T')[0]}" data-hour="${hour}">`;
                
                if (hourTasks.length > 0) {
                    console.log(`Hora ${hour}:00 del día ${currentDay.toLocaleDateString()}: ${hourTasks.length} tareas`);
                }

                hourTasks.forEach(task => {
                    const statusClass = task.status || 'abierto';
                    const clientName = task.clientName || this.getClientNameFromTask(task) || 'Sin cliente';
                    console.log(`Renderizando tarea: ${task.type} - ${clientName} - ${hour}:00`);
                    calendarHTML += `
                        <div class="task-item-calendar ${statusClass}" onclick="window.crm.showTaskDetail(${task.id})" title="${task.description || task.notes}">
                            <div class="task-title">${task.type}</div>
                            <div class="task-client">${clientName}</div>
                        </div>
                    `;
                });
                
                calendarHTML += '</div>';
            }
        });
        
        calendarGrid.innerHTML = calendarHTML;
        console.log('Calendario generado con', calendarHTML.split('task-item-calendar').length - 1, 'tareas visibles');
    }

    getClientNameFromTask(task) {
        if (task.clientName) return task.clientName;
        if (task.leadId) {
            const lead = this.leads.find(l => l.id == task.leadId);
            return lead ? lead.name : null;
        }
        return null;
    }

    addCurrentWeekTasks() {
        // Agregar tareas para la semana actual si no existen
        const today = new Date();
        const currentWeekTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            const weekStart = this.getStartOfWeek(today);
            const weekEnd = this.getEndOfWeek(today);
            return taskDate >= weekStart && taskDate <= weekEnd && task.advisor === this.currentUser.name;
        });

        if (currentWeekTasks.length === 0) {
            console.log('Agregando tareas de ejemplo para la semana actual...');
            
            // Agregar tareas para los próximos días
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(10, 0, 0, 0);

            const dayAfter = new Date();
            dayAfter.setDate(dayAfter.getDate() + 2);
            dayAfter.setHours(14, 0, 0, 0);

            const friday = new Date();
            friday.setDate(friday.getDate() + 3);
            friday.setHours(9, 0, 0, 0);

            const newTasks = [
                {
                    id: `task_current_${Date.now()}_1`,
                    type: 'Llamada',
                    leadId: 1,
                    clientName: 'Juan Pérez',
                    dueDate: tomorrow,
                    status: 'programada',
                    notes: 'Llamada de seguimiento semanal',
                    advisor: this.currentUser.name,
                    createdAt: new Date()
                },
                {
                    id: `task_current_${Date.now()}_2`,
                    type: 'Reunión presencial',
                    leadId: 2,
                    clientName: 'María García',
                    dueDate: dayAfter,
                    status: 'programada',
                    notes: 'Reunión para presentar propuesta',
                    advisor: this.currentUser.name,
                    createdAt: new Date()
                },
                {
                    id: `task_current_${Date.now()}_3`,
                    type: 'Correo',
                    leadId: 3,
                    clientName: 'Carlos López',
                    dueDate: friday,
                    status: 'abierto',
                    notes: 'Enviar seguimiento por correo',
                    advisor: this.currentUser.name,
                    createdAt: new Date()
                }
            ];

            this.tasks.push(...newTasks);
            this.saveData();
            console.log('Tareas de ejemplo agregadas:', newTasks.length);
        }
    }


    getTasksForDay(date) {
        const advisorTasks = this.getTasksForUser();
        return advisorTasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return this.isSameDay(taskDate, date);
        });
    }
    
    updatePeriodDisplay() {
        const currentPeriodElement = document.getElementById('currentPeriod');
        if (!currentPeriodElement) return;
        
        // Only week view
        const weekStart = this.getWeekStart(this.currentCalendarDate);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        currentPeriodElement.textContent = `${this.formatDate(weekStart)} - ${this.formatDate(weekEnd)}`;
    }
    
    
    renderWeekView(tasks) {
        const calendarView = document.getElementById('myCalendar');
        const weekStart = this.getWeekStart(this.currentCalendarDate);
        const weekDays = this.getWeekDays(weekStart);
        
        calendarView.innerHTML = `
            <div class="calendar-week-view">
                <div class="calendar-week-header">
                    <div class="week-day-header">Hora</div>
                    ${weekDays.map(day => `
                        <div class="week-day-header ${this.isToday(day) ? 'today' : ''}">
                            <div class="day-name">${day.toLocaleDateString('es-ES', { weekday: 'short' })}</div>
                            <div class="day-number">${day.getDate()}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="calendar-week-grid">
                    ${this.generateWeekGrid(weekDays, tasks)}
                </div>
            </div>
        `;
    }
    
    
    setupCalendarNavigation() {
        // Navigation buttons - only week navigation
        const prevBtn = document.getElementById('prevPeriod');
        const nextBtn = document.getElementById('nextPeriod');
        const todayBtn = document.getElementById('goToToday');
        
        console.log('Configurando navegación del calendario semanal:', {
            prevBtn: !!prevBtn,
            nextBtn: !!nextBtn,
            todayBtn: !!todayBtn
        });
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                console.log('Click en semana anterior');
                this.navigateCalendar(-1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                console.log('Click en siguiente semana');
                this.navigateCalendar(1);
            });
        }
        
        if (todayBtn) {
            // Remove any existing event listeners
            todayBtn.replaceWith(todayBtn.cloneNode(true));
            const newTodayBtn = document.getElementById('goToToday');
            
            newTodayBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Click en "Esta Semana" - reseteando a semana actual');
                this.currentCalendarDate = new Date();
                this.updateAdvisorCalendar();
            });
        } else {
            console.error('Botón "Esta Semana" no encontrado');
        }
    }
    
    
    navigateCalendar(direction) {
        // Create a new date instance to avoid modifying the original
        const newDate = new Date(this.currentCalendarDate);
        
        console.log('Navegando semana desde:', this.formatDate(this.currentCalendarDate), 'dirección:', direction);
        
        // Validate current date before navigation
        if (isNaN(this.currentCalendarDate.getTime())) {
            console.log('Fecha inválida detectada, reseteando a fecha actual');
            this.currentCalendarDate = new Date();
            this.updateAdvisorCalendar();
            return;
        }
        
        // Only week navigation
        newDate.setDate(newDate.getDate() + (direction * 7));
        
        // Validate new date
        if (isNaN(newDate.getTime())) {
            console.log('Nueva fecha inválida, manteniendo fecha actual');
            return;
        }
        
        console.log('Navegando hacia semana:', this.formatDate(newDate));
        
        // Update the current calendar date
        this.currentCalendarDate = newDate;
        this.updateAdvisorCalendar();
    }
    
    getTasksForDate(tasks, date) {
        return tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return taskDate.toDateString() === date.toDateString();
        }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    
    getWeekStart(date) {
        const start = new Date(date);
        const day = start.getDay();
        const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Monday as first day
        start.setDate(diff);
        start.setHours(0, 0, 0, 0);
        return start;
    }
    
    getWeekEnd(date) {
        const end = new Date(date);
        const day = end.getDay();
        const diff = end.getDate() - day + (day === 0 ? 0 : 7); // Sunday as last day
        end.setDate(diff);
        end.setHours(23, 59, 59, 999);
        return end;
    }
    
    getWeekDays(weekStart) {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(weekStart);
            day.setDate(weekStart.getDate() + i);
            days.push(day);
        }
        return days;
    }
    
    generateWeekGrid(weekDays, tasks) {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        return hours.map(hour => `
            <div class="week-hour-row">
                <div class="hour-label">${hour.toString().padStart(2, '0')}:00</div>
                ${weekDays.map(day => {
                    const dayTasks = this.getTasksForDate(tasks, day).filter(task => {
                        const taskHour = new Date(task.dueDate).getHours();
                        return taskHour === hour;
                    });
                    
                    return `
                        <div class="week-day-cell ${this.isToday(day) ? 'today' : ''}">
                            ${dayTasks.map(task => this.renderTaskCard(task)).join('')}
                        </div>
                    `;
                }).join('')}
            </div>
        `).join('');
    }
    
    
    renderTaskList(tasks) {
        return tasks.map(task => this.renderTaskCard(task)).join('');
    }
    
    renderTaskCard(task, compact = false) {
        const taskTime = new Date(task.dueDate);
        const timeString = taskTime.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        const statusClass = this.getTaskStatusClass(task.status);
        const priorityClass = this.getTaskPriorityClass(task.priority || 'Media');
        const isOverdue = taskTime < new Date() && task.status !== 'completada';
        
        if (compact) {
            return `
                <div class="task-card-compact ${isOverdue ? 'overdue' : ''}" data-task-id="${task.id}">
                    <div class="task-time">${timeString}</div>
                    <div class="task-title">${task.type}</div>
                    <div class="task-client">${this.getLeadName(task.leadId)}</div>
                </div>
            `;
        }
        
        return `
            <div class="calendar-task ${isOverdue ? 'overdue' : ''}" data-task-id="${task.id}">
                <div class="calendar-task-time">${timeString}</div>
                <div class="calendar-task-content">
                    <h4>${task.type} - ${this.getLeadName(task.leadId)}</h4>
                    <p>${task.notes || 'Sin descripción'}</p>
                    <div class="calendar-task-meta">
                        <span class="task-status status-${statusClass}">${task.status}</span>
                        <span class="task-priority priority-${priorityClass}">${task.priority || 'Media'}</span>
                        <span class="task-duration">${task.duration} min</span>
                    </div>
                </div>
                <div class="calendar-task-actions">
                    <button class="btn btn-sm btn-primary" onclick="crm.showTaskDetail(${task.id})">Ver</button>
                    ${task.status !== 'completada' ? `
                        <button class="btn btn-sm btn-success" onclick="crm.showCompleteTaskModal(${task.id})">Completar</button>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    updateAdvisorLeads() {
        console.log('Actualizando leads del asesor:', this.currentUser.name);
        
        const leadsContainer = document.getElementById('leadsGrid');
        if (!leadsContainer) {
            console.error('Contenedor de leads del asesor no encontrado');
            return;
        }
        
        // Obtener leads del asesor
        const advisorLeads = this.getLeadsForUser();
        console.log('Leads del asesor encontrados:', advisorLeads.length);
        
        if (advisorLeads.length === 0) {
            leadsContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: #6c757d; background: #f8f9fa; border-radius: 12px; border: 2px dashed #dee2e6;">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">👥</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #495057;">Sin Leads Asignados</h3>
                    <p style="margin: 0; font-size: 1rem;">No tienes leads asignados por el momento</p>
                </div>
            `;
            return;
        }
        
        // Generar HTML para los leads en formato lista
        leadsContainer.innerHTML = `
            <div style="background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); overflow: hidden; margin-top: 1rem;">
                <!-- Header de la lista -->
                <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 1rem; display: grid; grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1.5fr; gap: 1rem; align-items: center; font-weight: 600; font-size: 0.9rem;">
                    <div>👤 Cliente</div>
                    <div>🏢 Empresa</div>
                    <div>📊 Estado</div>
                    <div>💡 Interés</div>
                    <div>📅 Actividad</div>
                    <div style="text-align: center;">⚙️ Acciones</div>
                </div>
                
                <!-- Items de la lista -->
                ${advisorLeads.map(lead => this.createLeadListItem(lead)).join('')}
            </div>
        `;
        
        console.log('Leads del asesor actualizados en la vista');
    }

    updateAdvisorClients() {
        console.log('Actualizando clientes del asesor...');
        
        const currentUser = this.currentUser;
        if (!currentUser) {
            console.error('No hay usuario actual');
            return;
        }

        // Obtener todos los leads que pertenecen al asesor actual
        const currentUserName = currentUser.name || currentUser;
        const myLeads = this.leads.filter(lead => lead.advisor === currentUserName);
        console.log('Leads del asesor encontrados:', myLeads.length);
        console.log('Usuario actual completo:', currentUser);
        console.log('Nombre del usuario actual:', currentUserName);

        // Usar setTimeout para asegurar que el DOM esté listo
        setTimeout(() => {
            // Configurar filtros
            this.setupAdvisorClientsFilters();
            
            // Cargar y mostrar clientes
            this.loadAdvisorClients();
        }, 100);
        
        console.log('Clientes del asesor actualizados en la vista');
    }

    setupAdvisorClientsFilters() {
        const statusFilter = document.getElementById('clientStatusFilter');
        const typeFilter = document.getElementById('clientTypeFilter');
        const interestFilter = document.getElementById('clientInterestFilter');

        console.log('Configurando filtros de clientes del asesor:', {
            statusFilter: !!statusFilter,
            typeFilter: !!typeFilter,
            interestFilter: !!interestFilter
        });

        if (statusFilter) {
            statusFilter.removeEventListener('change', () => this.loadAdvisorClients());
            statusFilter.addEventListener('change', () => this.loadAdvisorClients());
        }
        if (typeFilter) {
            typeFilter.removeEventListener('change', () => this.loadAdvisorClients());
            typeFilter.addEventListener('change', () => this.loadAdvisorClients());
        }
        if (interestFilter) {
            interestFilter.removeEventListener('change', () => this.loadAdvisorClients());
            interestFilter.addEventListener('change', () => this.loadAdvisorClients());
        }
    }

    loadAdvisorClients() {
        const currentUser = this.currentUser;
        const statusFilter = document.getElementById('clientStatusFilter')?.value || '';
        const typeFilter = document.getElementById('clientTypeFilter')?.value || '';
        const interestFilter = document.getElementById('clientInterestFilter')?.value || '';

        console.log('=== CARGANDO CLIENTES DEL ASESOR ===');
        console.log('Usuario actual:', currentUser);
        console.log('Filtros aplicados:', { statusFilter, typeFilter, interestFilter });
        console.log('Total de leads en sistema:', this.leads.length);

        // Obtener leads del asesor actual
        const currentUserName = currentUser.name || currentUser;
        console.log('Nombre del usuario actual:', currentUserName);
        let myLeads = this.leads.filter(lead => lead.advisor === currentUserName);
        console.log('Leads del asesor actual:', myLeads.length);
        console.log('Leads del asesor:', myLeads.map(l => ({ id: l.id, name: l.name, status: l.status, advisor: l.advisor })));
        
        // Aplicar filtros
        if (statusFilter) {
            myLeads = myLeads.filter(lead => lead.status === statusFilter);
            console.log(`Después de filtro por estado "${statusFilter}":`, myLeads.length);
        }
        
        if (interestFilter) {
            myLeads = myLeads.filter(lead => 
                (lead.interest || lead.interestLevel || '').includes(interestFilter)
            );
            console.log(`Después de filtro por interés "${interestFilter}":`, myLeads.length);
        }

        // Filtrar por tipo (fidelizado = estado Cierre, perdido = estado Perdido)
        if (typeFilter === 'fidelizado') {
            myLeads = myLeads.filter(lead => lead.status === 'Cierre');
            console.log(`Después de filtro por tipo "fidelizado":`, myLeads.length);
        } else if (typeFilter === 'perdido') {
            myLeads = myLeads.filter(lead => lead.status === 'Perdido');
            console.log(`Después de filtro por tipo "perdido":`, myLeads.length);
        }

        console.log('Clientes finales filtrados:', myLeads.length);
        console.log('Clientes finales:', myLeads.map(l => ({ id: l.id, name: l.name, status: l.status })));

        // Actualizar estadísticas (usar todos los leads del asesor para estadísticas, no solo los filtrados)
        const allMyLeadsForStats = this.leads.filter(lead => lead.advisor === currentUserName);
        this.updateAdvisorClientsStats(allMyLeadsForStats);
        
        // Debug: Mostrar todos los leads del asesor actual sin filtros
        const allMyLeads = this.leads.filter(lead => lead.advisor === currentUserName);
        console.log('=== DEBUG: Todos los leads del asesor ===');
        console.log('Total leads del asesor (sin filtros):', allMyLeads.length);
        allMyLeads.forEach(lead => {
            console.log(`- ${lead.name}: Estado="${lead.status}", Tipo="${lead.clientType || 'no definido'}"`);
        });

        // Renderizar clientes
        const clientsGrid = document.getElementById('clientsGrid');
        if (!clientsGrid) {
            console.error('Elemento clientsGrid no encontrado');
            return;
        }

        if (myLeads.length === 0) {
            clientsGrid.innerHTML = `
                <div class="no-clients-message-advisor">
                    <div class="icon">👥</div>
                    <h3>No hay clientes</h3>
                    <p>No se encontraron clientes que coincidan con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }

        // Generar header y items de la tabla
        const header = `
            <div class="clients-grid-header">
                <div>Cliente</div>
                <div>Empresa</div>
                <div>Tipo</div>
                <div>Estado</div>
                <div>Última Actividad</div>
                <div>Acciones</div>
            </div>
        `;

        const items = myLeads.map(lead => this.createAdvisorClientItem(lead)).join('');
        
        clientsGrid.innerHTML = header + items;
    }

    updateAdvisorClientsStats(clients) {
        const totalCount = clients.length;
        const fidelizedCount = clients.filter(c => c.status === 'Cierre').length;
        const lostCount = clients.filter(c => c.status === 'Perdido').length;

        const totalElement = document.getElementById('totalClientsCount');
        const fidelizedElement = document.getElementById('fidelizedClientsCount');
        const lostElement = document.getElementById('lostClientsCount');

        if (totalElement) totalElement.textContent = totalCount;
        if (fidelizedElement) fidelizedElement.textContent = fidelizedCount;
        if (lostElement) lostElement.textContent = lostCount;
    }

    createAdvisorClientItem(client) {
        let clientType = 'potencial';
        if (client.status === 'Cierre') {
            clientType = 'fidelizado';
        } else if (client.status === 'Perdido') {
            clientType = 'perdido';
        }
        const statusClass = client.status.toLowerCase().replace(' ', '-');
        
        return `
            <div class="client-grid-item">
                <div class="client-info-advisor">
                    <div class="client-name-advisor">${client.name}</div>
                    <div class="client-email-advisor">${client.email || 'Sin email'}</div>
                </div>
                <div class="client-company-advisor">${client.company || 'Sin empresa'}</div>
                <div class="client-type-badge-advisor ${clientType}">
                    ${clientType === 'fidelizado' ? 'Cliente Fidelizado' : clientType === 'perdido' ? 'Cliente Perdido' : 'Cliente Potencial'}
                </div>
                <div class="client-status-badge-advisor ${statusClass}">
                    ${client.status}
                </div>
                <div class="client-last-activity-advisor">
                    ${new Date(client.lastActivity).toLocaleDateString('es-ES')}
                </div>
                <div class="client-actions-advisor">
                    <button class="btn-view" onclick="window.crm.showLeadDetail(${client.id})" title="Ver detalles">
                        👁️ Ver
                    </button>
                    <button class="btn-history" onclick="window.crm.viewAdvisorClientHistory(${client.id})" title="Ver historial">
                        📈 Historial
                    </button>
                </div>
            </div>
        `;
    }

    viewAdvisorClientHistory(clientId) {
        // Reutilizar la función existente de historial de clientes
        this.viewClientHistory(clientId);
    }
    
    createLeadListItem(lead) {
        return `
            <div style="display: grid; grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1.5fr; gap: 1rem; align-items: center; padding: 1rem; border-bottom: 1px solid #f0f0f0; transition: background-color 0.2s ease;" 
                 onmouseover="this.style.backgroundColor='#f8f9fa'" 
                 onmouseout="this.style.backgroundColor='white'">
                
                <!-- Columna Cliente -->
                <div>
                    <div style="font-weight: 600; color: #333; font-size: 1rem; margin-bottom: 0.25rem;">${lead.name}</div>
                    <div style="font-size: 0.85rem; color: #6c757d;">
                        ${lead.email ? `📧 ${lead.email}` : 'Sin email'}
                    </div>
                    <div style="font-size: 0.85rem; color: #6c757d;">
                        ${lead.phone ? `📞 ${lead.phone}` : 'Sin teléfono'}
                    </div>
                </div>
                
                <!-- Columna Empresa -->
                <div style="color: #6c757d; font-size: 0.9rem; font-weight: 500;">
                    ${lead.company || 'Sin empresa'}
                </div>
                
                <!-- Columna Estado -->
                <div style="text-align: center;">
                    <span style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; white-space: nowrap; display: inline-block;">
                        ${lead.status}
                    </span>
                </div>
                
                <!-- Columna Interés -->
                <div style="text-align: center;">
                    <span style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; white-space: nowrap; display: inline-block;">
                        ${this.getInterestShortName(lead.interest || lead.interestLevel)}
                    </span>
                </div>
                
                <!-- Columna Actividad -->
                <div style="text-align: center; color: #6c757d; font-size: 0.9rem; font-weight: 500;">
                    ${new Date(lead.lastActivity).toLocaleDateString('es-ES')}
                </div>
                
                <!-- Columna Acciones -->
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button onclick="window.crm.showLeadDetail(${lead.id})" style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.25rem; transition: background-color 0.2s;" title="Ver detalles completos">
                        👁️ Ver
                    </button>
                    <button onclick="window.crm.editAdvisorLead(${lead.id})" style="padding: 0.5rem 1rem; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.25rem; transition: background-color 0.2s;" title="Editar información">
                        ✏️ Editar
                    </button>
                    <button onclick="window.crm.quickCreateTask(${lead.id})" style="padding: 0.5rem; background: #ffc107; color: #212529; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 600; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s;" title="Crear tarea rápida">
                        ➕
                    </button>
                </div>
            </div>
        `;
    }
    
    getInterestShortName(interest) {
        if (!interest) return 'No definido';
        if (interest.includes('Medianamente')) return 'Mediano';
        if (interest.includes('Poco')) return 'Poco';
        if (interest.includes('Interesado')) return 'Alto';
        return interest;
    }
    
    quickCreateTask(leadId) {
        console.log('Abriendo modal de crear tarea para lead:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            console.error('Lead no encontrado');
            return;
        }
        
        // Abrir modal de crear tarea
        this.showTaskModal();
        
        // Pre-seleccionar el lead en el modal después de que se abra
        setTimeout(() => {
            const taskLeadSelect = document.getElementById('taskLead');
            const taskIdField = document.getElementById('taskId');
            const taskTypeField = document.getElementById('taskType');
            const taskDueDateField = document.getElementById('taskDueDate');
            const taskDurationField = document.getElementById('taskDuration');
            const taskNotesField = document.getElementById('taskNotes');
            const modalTitle = document.getElementById('taskModalTitle');
            
            // Limpiar campos para nueva tarea
            if (taskIdField) taskIdField.value = '';
            if (taskTypeField) taskTypeField.value = '';
            if (taskDueDateField) taskDueDateField.value = '';
            if (taskDurationField) taskDurationField.value = '30';
            if (taskNotesField) taskNotesField.value = '';
            
            // Pre-seleccionar el lead
            if (taskLeadSelect) {
                taskLeadSelect.value = leadId;
                console.log('Lead preseleccionado en el modal:', lead.name);
            }
            
            // Cambiar título del modal
            if (modalTitle) {
                modalTitle.textContent = `Crear Nueva Tarea para ${lead.name}`;
            }
            
            // Configurar fecha por defecto para mañana
            if (taskDueDateField) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(9, 0, 0, 0);
                taskDueDateField.value = tomorrow.toISOString().slice(0, 16);
            }
            
        }, 150);
    }
    
    showQuickNotification(message, type = 'info') {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '1100';
        notification.style.padding = '1rem 1.5rem';
        notification.style.borderRadius = '8px';
        notification.style.color = 'white';
        notification.style.fontWeight = '500';
        notification.style.fontSize = '0.9rem';
        notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'transform 0.3s ease';
        
        // Colores según el tipo
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #dc3545, #c82333)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Animar salida y eliminar
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    createAdvisorLeadCard(lead) {
        return `
            <div style="background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); overflow: hidden; border-left: 4px solid #007bff; transition: transform 0.3s ease;">
                <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 1rem; border-bottom: 1px solid #dee2e6;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="margin: 0; color: #333; font-size: 1.1rem;">${lead.name}</h4>
                        <span style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">
                            ${lead.status}
                        </span>
                    </div>
                    <div style="margin-top: 0.5rem; color: #6c757d; font-size: 0.9rem;">
                        ${lead.company || 'Sin empresa'}
                    </div>
                </div>
                
                <div style="padding: 1rem;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; font-size: 0.9rem;">
                        <div>
                            <strong style="color: #495057;">📧 Email:</strong><br>
                            <span style="color: #6c757d;">${lead.email || 'No especificado'}</span>
                        </div>
                        <div>
                            <strong style="color: #495057;">📞 Teléfono:</strong><br>
                            <span style="color: #6c757d;">${lead.phone || 'No especificado'}</span>
                        </div>
                        <div>
                            <strong style="color: #495057;">💡 Interés:</strong><br>
                            <span style="background: #28a745; color: white; padding: 0.2rem 0.5rem; border-radius: 12px; font-size: 0.8rem;">
                                ${lead.interest || lead.interestLevel || 'No definido'}
                            </span>
                        </div>
                        <div>
                            <strong style="color: #495057;">📅 Última actividad:</strong><br>
                            <span style="color: #6c757d;">${new Date(lead.lastActivity).toLocaleDateString('es-ES')}</span>
                        </div>
                    </div>
                    
                    ${lead.notes ? `
                        <div style="background: #f8f9fa; padding: 0.75rem; border-radius: 6px; border-left: 3px solid #007bff; margin-bottom: 1rem;">
                            <strong style="color: #495057; font-size: 0.9rem;">📝 Notas:</strong>
                            <p style="margin: 0.5rem 0 0 0; color: #6c757d; font-size: 0.85rem; line-height: 1.4;">${lead.notes}</p>
                        </div>
                    ` : ''}
                    
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <button onclick="window.crm.showLeadDetail(${lead.id})" style="flex: 1; min-width: 120px; padding: 0.5rem; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">
                            👁️ Ver Detalle
                        </button>
                        <button onclick="window.crm.editAdvisorLead(${lead.id})" style="flex: 1; min-width: 120px; padding: 0.5rem; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">
                            ✏️ Editar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    editAdvisorLead(leadId) {
        console.log('Editando lead del asesor:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            console.error('Lead no encontrado:', leadId);
            return;
        }
        
        // Crear modal dinámico de edición
        const modal = document.createElement('div');
        modal.id = 'editLeadModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #dee2e6;">
                    <h3 style="margin: 0; color: #333;">✏️ Editar Lead: ${lead.name}</h3>
                    <button onclick="document.getElementById('editLeadModal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; padding: 0; width: 30px; height: 30px;">&times;</button>
                </div>
                
                <form style="display: grid; gap: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;">Nombre:</label>
                        <input type="text" id="editLeadName" value="${lead.name}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" required>
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;">Empresa:</label>
                        <input type="text" id="editLeadCompany" value="${lead.company || ''}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;">Email:</label>
                            <input type="email" id="editLeadEmail" value="${lead.email || ''}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;">Teléfono:</label>
                            <input type="tel" id="editLeadPhone" value="${lead.phone || ''}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                        </div>
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;">Nivel de Interés:</label>
                        <select id="editLeadInterest" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" required>
                            <option value="Poco interesado" ${(lead.interest || lead.interestLevel) === 'Poco interesado' ? 'selected' : ''}>Poco interesado</option>
                            <option value="Interesado" ${(lead.interest || lead.interestLevel) === 'Interesado' ? 'selected' : ''}>Interesado</option>
                            <option value="Medianamente interesado" ${(lead.interest || lead.interestLevel) === 'Medianamente interesado' ? 'selected' : ''}>Medianamente interesado</option>
                        </select>
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;">Notas:</label>
                        <textarea id="editLeadNotes" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; resize: vertical;">${lead.notes || ''}</textarea>
                    </div>
                </form>
                
                <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #dee2e6;">
                    <button onclick="window.crm.saveAdvisorLeadEdit(${lead.id})" style="padding: 0.75rem 1.5rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
                        💾 Guardar
                    </button>
                    <button onclick="document.getElementById('editLeadModal').remove()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Cancelar
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        console.log('Modal de edición de lead mostrado');
    }
    
    saveAdvisorLeadEdit(leadId) {
        console.log('Guardando edición de lead:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            console.error('Lead no encontrado para editar');
            return;
        }
        
        // Obtener valores del formulario
        const name = document.getElementById('editLeadName').value;
        const company = document.getElementById('editLeadCompany').value;
        const email = document.getElementById('editLeadEmail').value;
        const phone = document.getElementById('editLeadPhone').value;
        const interest = document.getElementById('editLeadInterest').value;
        const notes = document.getElementById('editLeadNotes').value;
        
        // Validar campos obligatorios
        if (!name || !interest) {
            alert('Por favor complete los campos obligatorios (Nombre e Interés)');
            return;
        }
        
        // Actualizar lead
        lead.name = name;
        lead.company = company;
        lead.email = email;
        lead.phone = phone;
        lead.interest = interest;
        lead.interestLevel = interest;
        lead.notes = notes;
        lead.lastActivity = new Date();
        
        // Agregar actividad al historial
        this.addActivity(leadId, 'Lead actualizado', `Información del lead actualizada por ${this.currentUser.name}`);
        
        // Guardar datos
        this.saveData();
        
        // Cerrar modal
        document.getElementById('editLeadModal').remove();
        
        // Actualizar vistas
        this.updateAdvisorLeads();
        this.updateAdvisorKanban();
        this.updateAdvisorDashboard();
        
        alert('Lead actualizado exitosamente');
        console.log('Lead actualizado y vistas refrescadas');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.crm = new CRMApp();
    console.log('CRM App inicializado:', window.crm);
});

// Global functions for HTML onclick handlers
window.crm = window.crm || new CRMApp();

// Global function for Today button
window.goToToday = function() {
    console.log('Función global goToToday llamada');
    if (window.crm) {
        window.crm.currentCalendarDate = new Date();
        window.crm.updateAdvisorCalendar();
    }
};
