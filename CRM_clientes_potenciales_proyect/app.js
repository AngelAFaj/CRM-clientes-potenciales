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
            { 
                id: 1, 
                username: 'admin', 
                password: 'admin123', 
                role: 'admin', 
                name: 'Administrador',
                firstName: 'Administrador',
                lastName: 'Sistema',
                email: 'admin@sistema.com',
                phone: '+1234567890',
                cedula: '1234567890',
                address: 'Oficina Principal, Ciudad',
                isActive: false,
                createdAt: new Date('2024-01-01'),
                createdBy: 'Sistema'
            },
            { 
                id: 2, 
                username: 'manager', 
                password: 'manager123', 
                role: 'manager', 
                name: 'Gerente de Ventas',
                firstName: 'Gerente',
                lastName: 'Ventas',
                email: 'gerente@empresa.com',
                phone: '+1234567891',
                cedula: '1234567891',
                address: 'Oficina Gerencia, Ciudad',
                isActive: true,
                createdAt: new Date('2024-01-01'),
                createdBy: 'Sistema',
                assignedAdvisors: ['Asesor', 'Asesor 2', 'Asesor 3'] // Asesores asignados a este gerente
            },
            { 
                id: 3, 
                username: 'advisor', 
                password: 'advisor123', 
                role: 'advisor', 
                name: 'Asesor',
                firstName: 'Asesor',
                lastName: 'Principal',
                email: 'asesor@empresa.com',
                phone: '+1234567892',
                cedula: '1234567892',
                address: 'Oficina Ventas, Ciudad',
                isActive: true,
                createdAt: new Date('2024-01-01'),
                createdBy: 'Sistema',
                managerId: 2 // ID del gerente asignado
            },
            { 
                id: 4, 
                username: 'advisor2', 
                password: 'advisor123', 
                role: 'advisor', 
                name: 'Asesor 2', 
                hidden: true,
                firstName: 'Asesor',
                lastName: 'Secundario',
                email: 'asesor2@empresa.com',
                phone: '+1234567893',
                cedula: '1234567893',
                address: 'Oficina Ventas 2, Ciudad',
                isActive: true,
                createdAt: new Date('2024-01-01'),
                createdBy: 'Sistema',
                managerId: 2 // ID del gerente asignado
            },
            { 
                id: 5, 
                username: 'advisor3', 
                password: 'advisor123', 
                role: 'advisor', 
                name: 'Asesor 3', 
                hidden: true,
                firstName: 'Asesor',
                lastName: 'Terciario',
                email: 'asesor3@empresa.com',
                phone: '+1234567894',
                cedula: '1234567894',
                address: 'Oficina Ventas 3, Ciudad',
                isActive: true,
                createdAt: new Date('2024-01-01'),
                createdBy: 'Sistema',
                managerId: 2 // ID del gerente asignado
            },
            { 
                id: 6, 
                username: 'contract-generator', 
                password: 'contract123', 
                role: 'contract-generator', 
                name: 'Generador de Contratos',
                firstName: 'Contract',
                lastName: 'Generator',
                email: 'contract-generator@empresa.com',
                phone: '+1234567896',
                cedula: '1234567896',
                address: 'Oficina Contratos, Ciudad',
                isActive: true,
                createdAt: new Date('2024-01-01'),
                createdBy: 'Sistema'
            }
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
        
        this.kpis = [];
        
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
            try {
                const data = JSON.parse(savedData);
                this.leads = data.leads || this.leads;
                this.tasks = data.tasks || this.tasks;
                this.sequences = data.sequences || this.sequences;
                this.kpis = Array.isArray(data.kpis) ? data.kpis : [];
                this.activities = data.activities || this.activities;
                this.users = data.users || this.users;
            } catch (error) {
                console.error('Error al cargar datos del localStorage:', error);
                console.log('Limpiando localStorage corrupto...');
                localStorage.removeItem('crmData');
                // Reinicializar con datos por defecto
                this.kpis = [];
            }
            
            // Asegurar que los usuarios tengan todos los campos necesarios
            this.users = this.users.map(user => ({
                ...user,
                firstName: user.firstName || user.name?.split(' ')[0] || 'Usuario',
                lastName: user.lastName || user.name?.split(' ').slice(1).join(' ') || 'Sin Apellido',
                email: user.email || `${user.username}@empresa.com`,
                phone: user.phone || '+1234567890',
                cedula: user.cedula || '1234567890',
                address: user.address || 'Dirección no especificada',
                isActive: user.isActive !== undefined ? user.isActive : true,
                createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
                createdBy: user.createdBy || 'Sistema'
            }));
            
            console.log('Datos cargados:', {
                sequences: this.sequences.length,
                users: this.users.length
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
            activities: this.activities,
            users: this.users
        };
        console.log('Guardando datos:', {
            sequences: this.sequences.length,
            users: this.users.length,
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
        
        // Asegurar cuentas por defecto para pruebas si no existen contraseñas
        this.ensureDefaultAccountsForLogin();
        
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
    
    // Crea 3 cuentas demo (admin/manager/advisor) si faltan o no tienen password
    ensureDefaultAccountsForLogin() {
        if (!Array.isArray(this.users)) {
            this.users = [];
        }
        const nowIso = new Date().toISOString();
        const ensure = (username, password, role, name) => {
            let u = this.users.find(x => x.username === username && x.role === role);
            if (!u) {
                u = { id: `${role}-${username}`, name, firstName: name.split(' ')[0], lastName: name.split(' ').slice(1).join(' '), username, password, role, email: `${username}@demo.local`, isActive: true, createdAt: nowIso };
                this.users.push(u);
            } else {
                if (!u.password) u.password = password;
                if (!u.username) u.username = username;
                u.role = role;
                if (u.isActive === undefined) u.isActive = true;
            }
        };
        ensure('admin', 'admin123', 'admin', 'Admin Demo');
        ensure('manager', 'manager123', 'manager', 'Gerente Demo');
        ensure('advisor', 'advisor123', 'advisor', 'Asesor Demo');
        ensure('contract-generator', 'contract123', 'contract-generator', 'Contract Generator Demo');
        
        // Guardar si fue necesario
        try { this.saveData(); } catch(e) { console.warn('No se pudo guardar datos demo:', e); }
    }
    
    initAdmin() {
        this.checkAuthentication();
        if (!this.isAuthenticated || this.currentRole !== 'admin') {
            this.redirectToRole();
            return;
        }
        
        this.setupAdminEventListeners();
        this.updateAdminDashboard();
        
        // Verificar si hay gerentes de ventas disponibles al inicializar
        this.createDefaultManager();
        this.showManagersStatus();
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
        
        // Initialize dynamic KPIs system
        this.initializeDynamicKPIs();
    }
    
    // Sistema Dinámico de KPIs
    initializeDynamicKPIs() {
        this.setupKPIEventListeners();
        this.loadKPIs();
        this.populateKPIFormOptions();
        this.setupKPIAIRecommendations();
    }
    
    setupKPIEventListeners() {
        console.log('Configurando event listeners de KPIs...');
        
        // Event listeners para selección de tipo de KPI
        const kpiTypeCards = document.querySelectorAll('.kpi-type-card');
        console.log('Encontradas', kpiTypeCards.length, 'tarjetas de tipo KPI');
        kpiTypeCards.forEach(card => {
            card.addEventListener('click', () => {
                const kpiType = card.getAttribute('data-kpi-type');
                console.log('Tipo de KPI seleccionado:', kpiType);
                this.selectKPIType(kpiType);
            });
        });
        
        // Event listener para el formulario de KPIs
        const kpiForm = document.getElementById('dynamicKPIForm');
        if (kpiForm) {
            console.log('Formulario de KPI encontrado, configurando event listener');
            kpiForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Formulario enviado, guardando KPI...');
                this.saveKPI();
            });
        } else {
            console.error('Formulario de KPI no encontrado');
        }
        
        // Event listener adicional para el botón de guardar
        const saveButton = document.querySelector('#dynamicKPIForm button[type="submit"]');
        if (saveButton) {
            console.log('Botón de guardar encontrado');
            saveButton.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Botón de guardar clickeado');
                this.saveKPI();
            });
        } else {
            console.error('Botón de guardar no encontrado');
        }
    }

    // Recomendaciones IA (simuladas)
    setupKPIAIRecommendations() {
        const btn = document.getElementById('kpiAIRecommendBtn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const recs = this.generateAIKPIRecommendations();
            this.renderAIKPIRecommendations(recs);
        });
    }

    generateAIKPIRecommendations() {
        // Analiza leads y tareas recientes (últimos 60 días)
        const now = new Date();
        const from = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
        const leadsRecent = this.leads.filter(l => new Date(l.createdAt) >= from);
        const tasksRecent = this.tasks.filter(t => new Date(t.createdAt || t.dueDate) >= from);

        const advisors = this.users.filter(u => u.role === 'advisor');

        const byAdvisor = advisors.map(a => {
            const aLeads = leadsRecent.filter(l => l.advisor === a.name);
            const aTasks = tasksRecent.filter(t => t.advisor === a.name);
            const conversions = aLeads.filter(l => l.status === 'Cierre').length;
            const lost = aLeads.filter(l => l.status === 'Perdido').length;
            const active = aLeads.filter(l => ['Calificar','Desarrollar','Proponer','Contactado','En Proceso'].includes(l.status)).length;
            const calls = aTasks.filter(t => (t.type || '').toLowerCase().includes('llamada')).length;
            const meetings = aTasks.filter(t => (t.type || '').toLowerCase().includes('reunión')).length;

            // Heurísticas simples
            const recs = [];
            // Si hay muchos activos y pocas llamadas -> empujar actividad
            if (active >= 5 && calls < active) {
                recs.push({ type: 'activity', name: 'Incrementar llamadas', params: [
                    { name: 'Llamadas Diarias', value: Math.max(10, Math.ceil(active * 1.2)), unit: 'llamadas' },
                    { name: 'Reuniones Semanales', value: Math.max(3, Math.ceil(meetings * 1.2)), unit: 'reuniones' }
                ]});
            }
            // Si conversión baja con muchos leads -> KPI de conversión
            const convRate = aLeads.length ? Math.round((conversions / aLeads.length) * 100) : 0;
            if (aLeads.length >= 8 && convRate < 25) {
                recs.push({ type: 'sales', name: 'Mejorar conversión', params: [
                    { name: 'Tasa de Conversión', value: Math.min(35, convRate + 10), unit: '%' },
                    { name: 'Número de Oportunidades', value: Math.max(12, aLeads.length), unit: 'oportunidades' }
                ]});
            }
            // Si hay perdidos altos -> KPI de calidad/tiempos
            if (lost >= 3) {
                recs.push({ type: 'quality', name: 'Reducir pérdidas', params: [
                    { name: 'Tiempo de Respuesta', value: 2, unit: 'horas' },
                    { name: 'Puntuación de Satisfacción', value: 8, unit: '/10' }
                ]});
            }

            // Fallback: si no hubo recs, dar una estándar
            if (recs.length === 0) {
                recs.push({ type: 'activity', name: 'Actividad mínima', params: [
                    { name: 'Llamadas Diarias', value: 12, unit: 'llamadas' },
                    { name: 'Emails Enviados', value: 25, unit: 'emails' }
                ]});
            }

            return { advisor: a, leads: aLeads.length, convRate, recs };
        });

        // Recomendación global para el equipo
        const totalLeads = leadsRecent.length;
        const totalConv = leadsRecent.filter(l => l.status === 'Cierre').length;
        const teamConv = totalLeads ? Math.round((totalConv / totalLeads) * 100) : 0;
        const teamRec = teamConv < 20
            ? { type: 'sales', name: 'Objetivo de conversión del equipo', params: [
                { name: 'Tasa de Conversión', value: Math.min(30, teamConv + 8), unit: '%' }
              ]}
            : { type: 'activity', name: 'Mantener actividad del equipo', params: [
                { name: 'Reuniones Semanales', value: 6, unit: 'reuniones' }
              ]};

        return { team: { conv: teamConv, rec: teamRec }, advisors: byAdvisor };
    }

    renderAIKPIRecommendations(data) {
        const box = document.getElementById('kpi-ai-recommendations');
        if (!box) return;

        const pill = (text) => `<span style="display:inline-block;padding:2px 8px;border:1px solid #d9d9d9;border-radius:999px;font-size:12px;color:#555;">${text}</span>`;
        const recCard = (rec, advisorId=null) => `
            <div class="kpi-ai-card" style="background:#fff;border:1px solid #f0f0f0;border-radius:10px;padding:12px;margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                    <div style="font-weight:600;">${rec.name} ${pill(this.getKPITypeName(rec.type))}</div>
                    <div>
                        <button class="btn btn-outline btn-xs" data-apply-kpi data-type="${rec.type}" data-name="${rec.name}" data-adv="${advisorId ?? ''}">Aplicar</button>
                    </div>
                </div>
                <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;">
                    ${rec.params.map(p=>pill(`${p.name}: ${p.value} ${p.unit||''}`)).join('')}
                </div>
            </div>`;

        let html = '';
        html += `<div style="margin-bottom:10px;color:#555;">${pill(`Conversión equipo: ${data.team.conv}%`)}</div>`;
        html += recCard(data.team.rec, '');

        data.advisors.forEach(a => {
            html += `<div style="margin-top:12px;margin-bottom:6px;font-weight:600;">${a.advisor.name} ${pill(`Leads: ${a.leads}`)} ${pill(`Conv: ${a.convRate}%`)}</div>`;
            a.recs.forEach(r => { html += recCard(r, a.advisor.id); });
        });

        box.innerHTML = html;
        box.style.display = 'block';

        // Listeners para Aplicar
        box.querySelectorAll('[data-apply-kpi]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = btn.getAttribute('data-type');
                const name = btn.getAttribute('data-name');
                const advisorId = btn.getAttribute('data-adv') || '';
                this.applyAIRecommendationToForm({ type, name, advisorId, rec: data });
            });
        });
    }

    applyAIRecommendationToForm({ type, name, advisorId }) {
        // Abrir formulario con tipo seleccionado y rellenar valores
        this.selectKPIType(type);
        const formContainer = document.getElementById('kpi-form-container');
        if (formContainer) formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Set nombre, asignación, periodo sugerido
        const nameInput = document.getElementById('kpiName');
        if (nameInput) nameInput.value = name;
        const advSelect = document.getElementById('kpiAdvisor');
        if (advSelect && advisorId) advSelect.value = advisorId;
        const period = document.getElementById('kpiPeriod');
        if (period) period.value = 'monthly';

        // Rellenar parámetros básicos si existen inputs renderizados
        const params = document.querySelectorAll('#kpi-parameters-container .kpi-parameter input');
        params.forEach((input, idx) => {
            // Valores demo razonables según índice
            const defaults = ['12','25','5000','15'];
            input.value = defaults[idx] || '10';
        });
    }
    
    selectKPIType(kpiType) {
        // Remover selección anterior
        document.querySelectorAll('.kpi-type-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Seleccionar nueva tarjeta
        const selectedCard = document.querySelector(`[data-kpi-type="${kpiType}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
        
        // Mostrar formulario y configurar parámetros
        this.showKPIForm(kpiType);
    }
    
    showKPIForm(kpiType) {
        const formContainer = document.getElementById('kpi-form-container');
        const formTitle = document.getElementById('kpi-form-title');
        const parametersContainer = document.getElementById('kpi-parameters-container');
        
        if (formContainer) {
            formContainer.style.display = 'block';
        }
        
        if (formTitle) {
            formTitle.textContent = `Configurar KPIs de ${this.getKPITypeName(kpiType)}`;
        }
        
        if (parametersContainer) {
            parametersContainer.innerHTML = this.generateKPIParameters(kpiType);
        }
        
        // Configurar fecha de inicio por defecto
        const startDateInput = document.getElementById('kpiStartDate');
        if (startDateInput) {
            startDateInput.value = new Date().toISOString().split('T')[0];
        }
        
        // Reconfigurar event listeners después de mostrar el formulario
        setTimeout(() => {
            this.setupKPIFormEventListeners();
        }, 100);
    }
    
    setupKPIFormEventListeners() {
        console.log('Reconfigurando event listeners del formulario...');
        
        // Event listener para el formulario de KPIs
        const kpiForm = document.getElementById('dynamicKPIForm');
        if (kpiForm) {
            // Remover event listeners anteriores
            kpiForm.removeEventListener('submit', this.handleKPIFormSubmit);
            
            // Agregar nuevo event listener
            this.handleKPIFormSubmit = (e) => {
                e.preventDefault();
                console.log('Formulario enviado, guardando KPI...');
                this.saveKPI();
            };
            kpiForm.addEventListener('submit', this.handleKPIFormSubmit);
            console.log('Event listener del formulario configurado');
        }
        
        // Event listener adicional para el botón de guardar
        const saveButton = document.querySelector('#dynamicKPIForm button[type="submit"]');
        if (saveButton) {
            // Remover event listeners anteriores
            saveButton.removeEventListener('click', this.handleSaveButtonClick);
            
            // Agregar nuevo event listener
            this.handleSaveButtonClick = (e) => {
                e.preventDefault();
                console.log('Botón de guardar clickeado');
                this.saveKPI();
            };
            saveButton.addEventListener('click', this.handleSaveButtonClick);
            console.log('Event listener del botón de guardar configurado');
        }
    }
    
    getKPITypeName(kpiType) {
        const names = {
            'sales': 'Ventas',
            'activity': 'Actividad',
            'quality': 'Calidad',
            'custom': 'Personalizados'
        };
        return names[kpiType] || 'Personalizados';
    }
    
    generateKPIParameters(kpiType) {
        const parameters = {
            'sales': [
                { name: 'Meta de Ventas', type: 'number', unit: 'ventas', placeholder: 'Ej: 10' },
                { name: 'Tasa de Conversión', type: 'percentage', unit: '%', placeholder: 'Ej: 25' },
                { name: 'Valor Promedio de Venta', type: 'currency', unit: '$', placeholder: 'Ej: 5000' },
                { name: 'Número de Oportunidades', type: 'number', unit: 'oportunidades', placeholder: 'Ej: 20' }
            ],
            'activity': [
                { name: 'Llamadas Diarias', type: 'number', unit: 'llamadas', placeholder: 'Ej: 15' },
                { name: 'Reuniones Semanales', type: 'number', unit: 'reuniones', placeholder: 'Ej: 5' },
                { name: 'Emails Enviados', type: 'number', unit: 'emails', placeholder: 'Ej: 30' },
                { name: 'Tiempo de Seguimiento', type: 'number', unit: 'horas', placeholder: 'Ej: 2' }
            ],
            'quality': [
                { name: 'Puntuación de Satisfacción', type: 'number', unit: '/10', placeholder: 'Ej: 8.5' },
                { name: 'Tiempo de Respuesta', type: 'number', unit: 'horas', placeholder: 'Ej: 2' },
                { name: 'Tasa de Retención', type: 'percentage', unit: '%', placeholder: 'Ej: 85' },
                { name: 'NPS Score', type: 'number', unit: 'puntos', placeholder: 'Ej: 9' }
            ],
            'custom': [
                { name: 'Parámetro Personalizado 1', type: 'text', unit: '', placeholder: 'Ej: Valor personalizado' },
                { name: 'Parámetro Personalizado 2', type: 'number', unit: 'unidades', placeholder: 'Ej: 100' }
            ]
        };
        
        const kpiParams = parameters[kpiType] || parameters['custom'];
        
        return kpiParams.map((param, index) => `
            <div class="kpi-parameter">
                <label>${param.name}:</label>
                <input type="${param.type}" 
                       name="parameter_${index}" 
                       placeholder="${param.placeholder}"
                       class="parameter-value"
                       required>
                <span class="parameter-unit">${param.unit}</span>
                <button type="button" class="btn btn-sm btn-outline" onclick="this.parentElement.remove()">Eliminar</button>
            </div>
        `).join('');
    }
    
    populateKPIFormOptions() {
        // Poblar opciones de asesores
        const advisorSelect = document.getElementById('kpiAdvisor');
        if (advisorSelect) {
            const advisors = this.users.filter(user => user.role === 'advisor');
            advisorSelect.innerHTML = '<option value="">Todos los asesores</option>' +
                advisors.map(advisor => `<option value="${advisor.id}">${advisor.name}</option>`).join('');
        }
        
        // Poblar opciones de gerentes
        const managerSelect = document.getElementById('kpiManager');
        if (managerSelect) {
            const managers = this.users.filter(user => user.role === 'manager');
            managerSelect.innerHTML = '<option value="">Todos los gerentes</option>' +
                managers.map(manager => `<option value="${manager.id}">${manager.name}</option>`).join('');
        }
    }
    
    saveKPI() {
        console.log('Iniciando guardado de KPI...');
        
        const form = document.getElementById('dynamicKPIForm');
        if (!form) {
            console.error('Formulario no encontrado');
            this.showNotification('Error: Formulario no encontrado', 'error');
            return;
        }
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const description = formData.get('description');
        const startDate = formData.get('startDate');
        
        // Validaciones básicas
        if (!name || name.trim() === '') {
            this.showNotification('Por favor ingresa un nombre para el KPI', 'error');
            return;
        }
        
        if (!startDate) {
            this.showNotification('Por favor selecciona una fecha de inicio', 'error');
            return;
        }
        
        const kpiData = {
            id: Date.now().toString(),
            name: name.trim(),
            description: description ? description.trim() : '',
            type: this.getSelectedKPIType(),
            advisor: formData.get('advisor'),
            manager: formData.get('manager'),
            period: formData.get('period'),
            startDate: startDate,
            endDate: formData.get('endDate'),
            parameters: this.extractKPIParameters(),
            createdAt: new Date().toISOString(),
            status: 'active'
        };
        
        console.log('Datos del KPI:', kpiData);
        
        // Guardar KPI - Asegurar que this.kpis sea un array
        if (!this.kpis || !Array.isArray(this.kpis)) {
            console.log('Inicializando this.kpis como array');
            this.kpis = [];
        }
        this.kpis.push(kpiData);
        
        try {
            this.saveData();
            console.log('KPI guardado exitosamente');
        } catch (error) {
            console.error('Error al guardar KPI:', error);
            this.showNotification('Error al guardar el KPI', 'error');
            return;
        }
        
        // Actualizar lista
        this.loadKPIs();
        
        // Cerrar formulario
        this.closeKPIForm();
        
        this.showNotification('KPI guardado exitosamente', 'success');
    }
    
    getSelectedKPIType() {
        const selectedCard = document.querySelector('.kpi-type-card.selected');
        return selectedCard ? selectedCard.getAttribute('data-kpi-type') : 'custom';
    }
    
    extractKPIParameters() {
        const parameters = [];
        const parameterElements = document.querySelectorAll('.kpi-parameter');
        
        parameterElements.forEach((element, index) => {
            const input = element.querySelector('input[name^="parameter_"]');
            const unit = element.querySelector('.parameter-unit').textContent;
            
            if (input && input.value) {
                parameters.push({
                    name: input.previousElementSibling.textContent.replace(':', ''),
                    value: input.value,
                    unit: unit,
                    type: input.type
                });
            }
        });
        
        return parameters;
    }
    
    loadKPIs() {
        const kpiList = document.getElementById('kpi-list');
        if (!kpiList) return;
        
        if (!this.kpis || this.kpis.length === 0) {
            kpiList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No hay KPIs configurados</p>';
            return;
        }
        
        kpiList.innerHTML = this.kpis.map(kpi => `
            <div class="kpi-item">
                <div class="kpi-item-header">
                    <h4 class="kpi-item-title">${kpi.name}</h4>
                    <span class="kpi-item-type">${this.getKPITypeName(kpi.type)}</span>
                </div>
                <p class="kpi-item-description">${kpi.description || 'Sin descripción'}</p>
                <div class="kpi-item-parameters">
                    ${kpi.parameters.map(param => `
                        <div class="kpi-parameter-item">
                            <div class="kpi-parameter-name">${param.name}</div>
                            <div class="kpi-parameter-value">${param.value} ${param.unit}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="kpi-item-footer">
                    <div class="kpi-item-assignment">
                        Período: ${kpi.period} | 
                        ${kpi.startDate} ${kpi.endDate ? `- ${kpi.endDate}` : ''}
                    </div>
                    <div class="kpi-item-actions">
                        <button class="btn-edit" onclick="window.crm.editKPI('${kpi.id}')">Editar</button>
                        <button class="btn-delete" onclick="window.crm.deleteKPI('${kpi.id}')">Eliminar</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    closeKPIForm() {
        const formContainer = document.getElementById('kpi-form-container');
        if (formContainer) {
            formContainer.style.display = 'none';
        }
        
        // Limpiar formulario
        const form = document.getElementById('dynamicKPIForm');
        if (form) {
            form.reset();
        }
        
        // Remover selección de tipo
        document.querySelectorAll('.kpi-type-card').forEach(card => {
            card.classList.remove('selected');
        });
    }
    
    editKPI(kpiId) {
        const kpi = this.kpis.find(k => k.id === kpiId);
        if (!kpi) return;
        
        // Seleccionar tipo de KPI
        this.selectKPIType(kpi.type);
        
        // Llenar formulario
        document.getElementById('kpiName').value = kpi.name;
        document.getElementById('kpiDescription').value = kpi.description || '';
        document.getElementById('kpiAdvisor').value = kpi.advisor || '';
        document.getElementById('kpiManager').value = kpi.manager || '';
        document.getElementById('kpiPeriod').value = kpi.period;
        document.getElementById('kpiStartDate').value = kpi.startDate;
        document.getElementById('kpiEndDate').value = kpi.endDate || '';
        
        // Configurar parámetros
        const parametersContainer = document.getElementById('kpi-parameters-container');
        if (parametersContainer) {
            parametersContainer.innerHTML = this.generateKPIParameters(kpi.type);
            
            // Llenar valores existentes
            kpi.parameters.forEach((param, index) => {
                const input = parametersContainer.querySelector(`input[name="parameter_${index}"]`);
                if (input) {
                    input.value = param.value;
                }
            });
        }
    }
    
    deleteKPI(kpiId) {
        if (confirm('¿Estás seguro de que quieres eliminar este KPI?')) {
            this.kpis = this.kpis.filter(k => k.id !== kpiId);
            this.saveData();
            this.loadKPIs();
            this.showNotification('KPI eliminado exitosamente', 'success');
        }
    }
    
    // Función global para cerrar formulario de KPIs
    closeKPIFormGlobal() {
        this.closeKPIForm();
    }
    
    initManagerForAdmin() {
        this.checkAuthentication();
        if (!this.isAuthenticated || (this.currentRole !== 'manager' && this.currentRole !== 'admin')) {
            this.redirectToRole();
            return;
        }
        
        this.setupManagerEventListeners();
        this.setupAdminSidebarNavigation();
        this.setupAdminDashboardControls();
        this.updateManagersDashboard();
        this.updateAdvisorsKPIs();
        // Métricas generales
        this.setupGeneralMetricsFilters && this.setupGeneralMetricsFilters();
        this.updateGeneralMetricsUI && this.updateGeneralMetricsUI();
        // Estadísticas generales y por asesor
        this.updateStatsGeneralUI && this.updateStatsGeneralUI();
        this.setupAdvisorStatsFilters();
        this.updateAdvisorStatsUI();
        // Estadísticas de leads
        this.setupLeadsStatsFilters && this.setupLeadsStatsFilters();
        this.updateLeadsStatsUI && this.updateLeadsStatsUI();
        // Estadísticas de clientes
        this.setupClientsStatsFilters && this.setupClientsStatsFilters();
        this.updateClientsStatsUI && this.updateClientsStatsUI();
        
        // Initialize sequences display
        setTimeout(() => {
            console.log('Inicializando secuencias del admin/manager...');
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
        
        // Sembrar datos de ejemplo para el asesor actual si no existen suficientes clientes
        this.ensureAdvisorSampleLeads(this.currentUser?.name);
        
        // Initialize calendar with current date
        this.currentCalendarDate = new Date();
        this.currentCalendarView = 'week';
        
        this.setupAdvisorEventListeners();
        this.updateAdvisorDashboard();
        
        // Ensure DOM is fully loaded before updating tasks
        setTimeout(() => {
            this.updateAdvisorTasks();
            this.updateAdvisorKanban();
            this.updateTodayPendingTasks();
            this.updateUpcomingTasksWidget();
        }, 100);
    }

    // Crea 7 clientes para el asesor: 2 "Cierre" (convertido), 1 "Perdido" y 4 en oportunidad
    ensureAdvisorSampleLeads(advisorName) {
        try {
            if (!advisorName) return;
            if (!Array.isArray(this.leads)) this.leads = [];
            const myLeads = this.leads.filter(l => l.advisor === advisorName);
            if (myLeads.length >= 7) return; // Ya hay suficientes
            const now = new Date();
            const makeDate = (d) => new Date(now.getFullYear(), now.getMonth(), d).toISOString();
            const base = [
                { name: 'Cliente Convertido 1', status: 'Cierre' },
                { name: 'Cliente Convertido 2', status: 'Cierre' },
                { name: 'Cliente Perdido 1', status: 'Perdido' },
                { name: 'Oportunidad 1', status: 'Calificar' },
                { name: 'Oportunidad 2', status: 'Desarrollar' },
                { name: 'Oportunidad 3', status: 'Proponer' },
                { name: 'Oportunidad 4', status: 'Cierre' } // permanece en pipeline (no contado como convertido si no se marca ganado)
            ];
            // Ajustar última a estado de oportunidad para no contarla como conversión aún
            base[6].status = 'Proponer';
            const startIdx = myLeads.length;
            for (let i = 0; i < base.length && this.leads.filter(l => l.advisor === advisorName).length < 7; i++) {
                const item = base[i];
                this.leads.push({
                    id: `demo-${advisorName}-${Date.now()}-${i}`,
                    name: item.name,
                    advisor: advisorName,
                    status: item.status,
                    createdAt: makeDate(1 + i),
                    updatedAt: makeDate(1 + i)
                });
            }
            try { this.saveData(); } catch (e) { /* noop */ }
        } catch (e) {
            console.warn('No se pudieron crear leads de ejemplo para el asesor:', e);
        }
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
        console.log('Actualizando dashboard del admin...');
        
        // Get all leads
        const allLeads = this.leads;
        const totalLeads = allLeads.length;
        
        // Calculate different lead categories
        const convertedLeads = allLeads.filter(lead => lead.status === 'Cerrado').length;
        const prospectLeads = allLeads.filter(lead => 
            ['Calificar', 'Desarrollar', 'Proponer', 'Cierre'].includes(lead.status)
        ).length;
        const lostLeads = allLeads.filter(lead => lead.status === 'Perdido').length;
        
        // Calculate conversion rate
        const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads * 100).toFixed(1) : 0;
        
        // Get total actions
        const totalActions = this.tasks.length;
        
        // Update DOM elements
        this.updateElement('teamTotalLeads', totalLeads);
        this.updateElement('teamConversions', convertedLeads);
        this.updateElement('teamProspects', prospectLeads);
        this.updateElement('teamLostLeads', lostLeads);
        this.updateElement('teamConversionRate', `${conversionRate}%`);
        this.updateElement('teamTotalActions', totalActions);
        
        console.log('Dashboard del admin actualizado:', {
            totalLeads,
            convertedLeads,
            prospectLeads,
            lostLeads,
            conversionRate,
            totalActions
        });
        
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

        // User Management Event Listeners
        const userCreationForm = document.getElementById('userCreationForm');
        if (userCreationForm) {
            userCreationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleUserCreation();
            });
        }

        const resetUserFormBtn = document.getElementById('resetUserForm');
        if (resetUserFormBtn) {
            resetUserFormBtn.addEventListener('click', () => {
                document.getElementById('userCreationForm').reset();
            });
        }

        const editUserForm = document.getElementById('editUserForm');
        if (editUserForm) {
            editUserForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleUserEdit();
            });
        }

        // Users filter
        const usersRoleFilter = document.getElementById('usersRoleFilter');
        if (usersRoleFilter) {
            usersRoleFilter.addEventListener('change', () => {
                this.loadUsers();
            });
        }

        // User Detail Modal Event Listeners
        const userDetailModal = document.getElementById('userDetailModal');
        if (userDetailModal) {
            const closeBtn = userDetailModal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    userDetailModal.style.display = 'none';
                    userDetailModal.classList.remove('show');
                });
            }
            
            // Click fuera del modal
            userDetailModal.addEventListener('click', (e) => {
                if (e.target === userDetailModal) {
                    userDetailModal.style.display = 'none';
                    userDetailModal.classList.remove('show');
                }
            });
        }

        // Edit User Modal Event Listeners
        const editUserModal = document.getElementById('editUserModal');
        if (editUserModal) {
            const closeBtn = editUserModal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.closeEditUserModal();
                });
            }
            
            // Click fuera del modal
            editUserModal.addEventListener('click', (e) => {
                if (e.target === editUserModal) {
                    this.closeEditUserModal();
                }
            });
        }

        // Lead Detail Modal Event Listeners
        const leadDetailModal = document.getElementById('leadDetailModal');
        if (leadDetailModal) {
            const closeBtn = leadDetailModal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    leadDetailModal.style.display = 'none';
                    leadDetailModal.classList.remove('show');
                });
            }
            
            // Click fuera del modal
            leadDetailModal.addEventListener('click', (e) => {
                if (e.target === leadDetailModal) {
                    leadDetailModal.style.display = 'none';
                    leadDetailModal.classList.remove('show');
                }
            });
        }

        // Create Event Modal Event Listeners
        const createEventModal = document.getElementById('createEventModal');
        if (createEventModal) {
            const closeBtn = createEventModal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.closeCreateEventModal();
                });
            }
            
            // Click fuera del modal
            createEventModal.addEventListener('click', (e) => {
                if (e.target === createEventModal) {
                    this.closeCreateEventModal();
                }
            });
        }

        // Task Detail Modal Event Listeners
        const taskDetailModal = document.getElementById('taskDetailModal');
        if (taskDetailModal) {
            const closeBtn = taskDetailModal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.closeTaskDetailModal();
                });
            }
            
            // Click fuera del modal
            taskDetailModal.addEventListener('click', (e) => {
                if (e.target === taskDetailModal) {
                    this.closeTaskDetailModal();
                }
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
            case 'user-management':
                console.log('Cambiando a sección de gestión de usuarios...');
                this.updateManagerUserManagement();
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
        const teamLostClients = document.getElementById('teamLostClients');
        const teamProspectClients = document.getElementById('teamProspectClients');
        
        if (teamTotalLeads) teamTotalLeads.textContent = stats.totalLeads;
        if (teamTotalActions) teamTotalActions.textContent = stats.completedTasks;
        if (teamConversions) teamConversions.textContent = stats.conversions;
        if (teamConversionRate) teamConversionRate.textContent = `${stats.conversionRate}%`;
        if (teamLostClients) teamLostClients.textContent = stats.lostClients;
        if (teamProspectClients) teamProspectClients.textContent = stats.prospectClients;
        
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
        const lostClients = periodLeads.filter(lead => lead.status === 'Perdido');
        const prospectClients = periodLeads.filter(lead => lead.status !== 'Cierre' && lead.status !== 'Perdido');
        const conversionRate = periodLeads.length > 0 ? Math.round((conversions.length / periodLeads.length) * 100) : 0;
        
        console.log('Estadísticas del equipo calculadas:', {
            totalLeads: teamLeads.length,
            periodLeads: periodLeads.length,
            totalTasks: teamTasks.length,
            periodTasks: periodTasks.length,
            completedTasks: completedTasks.length,
            conversions: conversions.length,
            lostClients: lostClients.length,
            prospectClients: prospectClients.length,
            conversionRate: conversionRate
        });
        
        return {
            totalLeads: periodLeads.length, // Usar leads del período para las estadísticas
            periodLeads: periodLeads.length,
            totalTasks: teamTasks.length,
            periodTasks: periodTasks.length,
            completedTasks: completedTasks.length,
            conversions: conversions.length,
            lostClients: lostClients.length,
            prospectClients: prospectClients.length,
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
                    for (let i = 0; i < (action.repetitions || 1); i++) {
                        const taskId = Date.now() + Math.random();
                        const task = {
                            id: taskId,
                            leadId: client.id,
                            type: action.type,
                            dueDate: dueDate,
                            duration: this.getDefaultDuration(action.type),
                            status: 'abierta',
                            notes: `Tarea generada automáticamente de la secuencia "${sequence.name}" - Acción ${actionIndex + 1}${action.repetitions > 1 ? ` (${i + 1}/${action.repetitions})` : ''}`,
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
        
        // Calcular nuevas métricas de leads
        const leadsLost = leads.filter(lead => lead.status === 'Perdido' || lead.interest === 'No interesado' || lead.interest === '1 - No me interesa').length;
        const leadsInProcess = leads.filter(lead => 
            lead.status !== 'Cierre' && 
            lead.status !== 'Perdido' && 
            lead.interest !== 'No interesado' && 
            lead.interest !== '1 - No me interesa'
        ).length;
        
        // Update dashboard elements
        const myLeadsCount = document.getElementById('myLeadsCount');
        const myCompletedTasks = document.getElementById('myCompletedTasks');
        const myConversions = document.getElementById('myConversions');
        const myConversionRate = document.getElementById('myConversionRate');
        
        if (myLeadsCount) myLeadsCount.textContent = totalLeads;
        if (myCompletedTasks) myCompletedTasks.textContent = completedTasks;
        if (myConversions) myConversions.textContent = conversions;
        if (myConversionRate) myConversionRate.textContent = `${conversionRate}%`;
        
        // Update new leads breakdown elements
        const leadsLostCount = document.getElementById('leadsLostCount');
        const leadsInProcessCount = document.getElementById('leadsInProcessCount');
        
        if (leadsLostCount) leadsLostCount.textContent = leadsLost;
        if (leadsInProcessCount) leadsInProcessCount.textContent = leadsInProcess;
        
        // Update today's pending tasks
        this.updateTodayTasks();
        
        // Actualizar secuencias asignadas
        this.updateAssignedSequences();
        
        console.log('Dashboard actualizado:', { 
            totalLeads, 
            completedTasks, 
            conversions, 
            conversionRate,
            leadsLost,
            leadsInProcess
        });
    }
    
    updateTodayTasks() {
        const tasks = this.getTasksForUser();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Contar tareas pendientes para hoy
        const todayPendingTasks = tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            taskDate.setHours(0, 0, 0, 0);
            return task.status === 'abierta' && taskDate >= today && taskDate < tomorrow;
        }).length;
        
        // Actualizar elementos del DOM
        const todayPendingTasksElement = document.getElementById('todayPendingTasks');
        const todayTasksStatusElement = document.getElementById('todayTasksStatus');
        
        if (todayPendingTasksElement) {
            todayPendingTasksElement.textContent = todayPendingTasks;
        }
        
        if (todayTasksStatusElement) {
            if (todayPendingTasks === 0) {
                todayTasksStatusElement.textContent = '¡Todo al día!';
                todayTasksStatusElement.className = 'stat-change positive';
            } else {
                todayTasksStatusElement.textContent = `${todayPendingTasks} pendientes`;
                todayTasksStatusElement.className = 'stat-change negative';
            }
        }
        
        console.log('Tareas pendientes para hoy:', todayPendingTasks);
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
                                <p><strong>Empresa:</strong> ${lead.company || 'Sin empresa'}</p>
                                <p><strong>Interés:</strong> <span class="lead-interest interest-${interestClass}">${lead.interest || 'No definido'}</span></p>
                                <p><strong>Última actividad:</strong> ${this.formatDate(lead.lastActivity)}</p>
                                <div class="lead-actions">
                                    <button class="btn btn-primary" onclick="window.crm.showLeadDetail('${lead.id}')">👁️ Ver</button>
                                    ${canAdvance ? `<button class="btn btn-success" onclick="window.crm.advanceLeadState('${lead.id}')">⬆️ Avanzar</button>` : ''}
                                    <button class="btn btn-warning" onclick="window.crm.qualifyClient('${lead.id}')" title="Calificar cliente">⭐ Calificar</button>
                                    <button class="btn btn-danger" onclick="window.crm.confirmDeleteClient('${lead.id}')" title="Eliminar cliente">🗑️ Eliminar</button>
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
        // Limpiar event listeners anteriores
        const existingCards = document.querySelectorAll('.lead-card[draggable="true"]');
        const existingZones = document.querySelectorAll('.column-content[data-state]');
        
        // Remover todos los event listeners existentes
        existingCards.forEach(card => {
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
        });
        
        existingZones.forEach(zone => {
            const newZone = zone.cloneNode(true);
            zone.parentNode.replaceChild(newZone, zone);
        });
        
        // Obtener elementos actualizados
        const leadCards = document.querySelectorAll('.lead-card[draggable="true"]');
        const dropZones = document.querySelectorAll('.column-content[data-state]');
        
        console.log('Configurando drag & drop para', leadCards.length, 'tarjetas y', dropZones.length, 'zonas');
        
        // Setup drag events for lead cards
        leadCards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                console.log('Iniciando arrastre de lead:', card.dataset.leadId);
                e.dataTransfer.setData('text/plain', card.dataset.leadId);
                e.dataTransfer.effectAllowed = 'move';
                card.classList.add('dragging');
                
                // Agregar clase a todas las zonas de drop
                dropZones.forEach(zone => zone.classList.add('drop-zone-active'));
            });
            
            card.addEventListener('dragend', (e) => {
                console.log('Finalizando arrastre');
                card.classList.remove('dragging');
                // Remover clases de todas las zonas
                dropZones.forEach(zone => {
                    zone.classList.remove('drag-over', 'drop-zone-active');
                });
            });
        });
        
        // Setup drop events for columns
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                zone.classList.add('drag-over');
            });
            
            zone.addEventListener('dragenter', (e) => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });
            
            zone.addEventListener('dragleave', (e) => {
                // Solo remover si realmente estamos saliendo de la zona
                if (!zone.contains(e.relatedTarget)) {
                    zone.classList.remove('drag-over');
                }
            });
            
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                
                const leadId = e.dataTransfer.getData('text/plain');
                const newState = zone.dataset.state;
                
                console.log('Soltando lead:', leadId, 'en estado:', newState);
                
                if (leadId && newState) {
                    this.moveLeadToState(leadId, newState);
                }
            });
        });
    }
    
    moveLeadToState(leadId, newState) {
        console.log('Moviendo lead:', leadId, 'a estado:', newState);
        const lead = this.leads.find(l => l.id == leadId); // Usar == para comparación flexible
        if (!lead) {
            console.error('Lead no encontrado:', leadId);
            this.showNotification('Lead no encontrado', 'error');
            return;
        }
        
        const previousState = lead.status;
        console.log('Estado anterior:', previousState, 'Nuevo estado:', newState);
        
        // Check if the move is valid (can move to any state)
        if (previousState === newState) {
            this.showNotification('El lead ya está en este estado', 'warning');
            return;
        }
        
        // Update lead state
        lead.status = newState;
        lead.lastActivity = new Date().toISOString();
        
        console.log('Lead actualizado:', lead);
        
        // Save data
        this.saveData();
        
        // Add activity
        this.addActivity(leadId, 'Estado cambiado', `Lead movido de ${previousState} a ${newState} mediante drag & drop`);
        
        // Update Kanban board
        this.updateAdvisorKanban();
        
        // Show notification
        this.showNotification(`Lead movido de ${previousState} a ${newState}`, 'success');
        
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
        this.updateTodayPendingTasks();
        this.updateUpcomingTasksWidget();
    }
    
    completeTaskFromModal() {
        const taskId = parseInt(document.getElementById('completeTaskId').value);
        const notes = document.getElementById('completionNotes').value;
        
        if (this.completeTask(taskId, notes)) {
            this.showNotification('Tarea completada exitosamente', 'success');
            this.closeModal('completeTaskModal');
            this.updateAdvisorTasks();
            this.updateTodayPendingTasks();
            this.updateUpcomingTasksWidget();
        }
    }

    createLeadFromModal() {
        const name = document.getElementById('leadName').value;
        const phone = document.getElementById('leadPhone').value;
        const sector = document.getElementById('leadSector').value;
        const currentCompany = document.getElementById('currentCompany').value;
        const currentPlanValue = document.getElementById('currentPlanValue').value;
        const serviceTime = document.getElementById('serviceTime').value;
        const satisfactionRating = document.getElementById('satisfactionRating').value;
        const improvementAreas = document.getElementById('improvementAreas').value;
        const preferredPlan = document.getElementById('preferredPlan').value;
        const interestLevel = document.getElementById('interestLevel').value;
        const whatsMissing = document.getElementById('whatsMissing').value;
        
        const leadData = {
            name,
            phone,
            sector,
            currentCompany,
            currentPlanValue,
            serviceTime,
            satisfactionRating,
            improvementAreas,
            preferredPlan,
            interestLevel,
            whatsMissing,
            company: currentCompany, // Mantener compatibilidad
            email: '', // Campo removido
            status: 'Calificar',
            interest: interestLevel, // Usar el nuevo campo de interés
            advisor: this.currentUser.name,
            notes: `Sector: ${sector}\nPlan actual: ${currentPlanValue}\nTiempo con servicio: ${serviceTime}\nSatisfacción: ${satisfactionRating}\nMejoras deseadas: ${improvementAreas}\nPlan preferido: ${preferredPlan}\nInterés (1-10): ${interestLevel}\nLo que falta: ${whatsMissing}`
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
        this.showScreen('advisor-kpis-screen');
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
        
        if (!calendarGrid) {
            console.error('Elemento teamCalendar no encontrado');
            return;
        }
        
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
        
        // Crear grid del calendario con estructura correcta
        let calendarHTML = '';
        
        timeSlots.forEach(timeSlot => {
            // Slot de tiempo
            calendarHTML += `<div class="time-slot">${timeSlot}</div>`;
            
            // Celdas para cada día
            days.forEach(day => {
                let dayCellClass = 'day-cell';
                
                // Marcar día actual
                const today = new Date();
                if (this.isSameDay(day, today)) {
                    dayCellClass += ' today';
                }
                
                // Marcar fines de semana
                if (day.getDay() === 0 || day.getDay() === 6) {
                    dayCellClass += ' weekend';
                }
                
                calendarHTML += `<div class="${dayCellClass}" data-date="${day.toISOString().split('T')[0]}" data-time="${timeSlot}">`;
                
                // Agregar tareas y eventos para este día y hora
                const dayTasks = this.getTasksForDay(day);
                const dayEvents = this.getEventsForDay(day);
                
                // Agregar tareas
                dayTasks.forEach(task => {
                    if (this.isTaskAtTime(task, timeSlot)) {
                        const statusClass = task.status === 'completada' ? 'completed' : '';
                        calendarHTML += `
                            <div class="task-item-calendar ${task.type} ${statusClass}" 
                                 onclick="window.crm.showTaskDetail(${task.id})" 
                                 title="${task.title || task.type} - ${task.advisor || 'Sin asignar'} - ${task.description || 'Sin descripción'}"
                                 style="cursor: pointer;">
                                <div style="font-weight: 600;">${task.title || task.type}</div>
                                <div style="font-size: 0.7rem; opacity: 0.9;">${task.advisor || 'Sin asignar'}</div>
                            </div>
                        `;
                    }
                });
                
                // Agregar eventos
                dayEvents.forEach(event => {
                    if (this.isEventAtTime(event, timeSlot)) {
                        calendarHTML += `
                            <div class="event-item-calendar" 
                                 onclick="window.crm.showEventDetail(${event.id})" 
                                 title="${event.title} - ${event.advisor || 'Equipo'} - ${event.description || 'Sin descripción'}"
                                 style="cursor: pointer;">
                                <div style="font-weight: 600;">${event.title}</div>
                                <div style="font-size: 0.7rem; opacity: 0.9;">${event.advisor || 'Equipo'}</div>
                            </div>
                        `;
                    }
                });
                
                calendarHTML += '</div>';
            });
        });
        
        calendarGrid.innerHTML = calendarHTML;
        console.log('Calendario del manager generado correctamente');
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
            this.showNotification('Lead no encontrado', 'error');
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
                            <p><strong>Teléfono:</strong> ${lead.phone || 'No especificado'}</p>
                            <p><strong>Sector:</strong> ${lead.sector || 'No especificado'}</p>
                            <p><strong>Estado:</strong> <span class="status-${lead.status ? lead.status.toLowerCase() : 'sin-definir'}">${lead.status || 'Sin definir'}</span></p>
                        </div>
                        <div class="detail-group">
                            <h4>Servicio Actual</h4>
                            <p><strong>Empresa actual:</strong> ${lead.currentCompany || 'No especificado'}</p>
                            <p><strong>Valor del plan actual:</strong> ${lead.currentPlanValue || 'No especificado'}</p>
                            <p><strong>Tiempo con el servicio:</strong> ${lead.serviceTime || 'No especificado'}</p>
                            <p><strong>Calificación de satisfacción:</strong> ${lead.satisfactionRating || 'No especificado'}</p>
                        </div>
                        <div class="detail-group">
                            <h4>Interés y Preferencias</h4>
                            <p><strong>Nivel de interés (1-10):</strong> ${lead.interestLevel || 'No especificado'}</p>
                            <p><strong>Mejoras deseadas:</strong> ${lead.improvementAreas || 'No especificado'}</p>
                            <p><strong>Plan preferido:</strong> ${lead.preferredPlan || 'No especificado'}</p>
                            <p><strong>Lo que falta para llegar a 10:</strong> ${lead.whatsMissing || 'No especificado'}</p>
                        </div>
                        <div class="detail-group">
                            <h4>Asignación</h4>
                            <p><strong>Asesor Asignado:</strong> ${lead.advisor || 'Sin asignar'}</p>
                            <p><strong>Fecha de Creación:</strong> ${this.formatDate(lead.createdAt)}</p>
                            <p><strong>Última Actividad:</strong> ${this.formatDate(lead.lastActivity)}</p>
                        </div>
                        ${lead.notes ? `
                        <div class="detail-group">
                            <h4>Notas Adicionales</h4>
                            <p>${lead.notes}</p>
                        </div>
                        ` : ''}
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

    createManagerLeadCard(lead) {
        const leadCard = document.createElement('div');
        leadCard.className = 'lead-card';
        
        const interestLevel = lead.interestLevel || lead.interest || 'No especificado';
        const currentCompany = lead.currentCompany || lead.company || 'No especificado';
        const phone = lead.phone || 'No especificado';
        const sector = lead.sector || 'No especificado';
        
        // Determinar color del estado
        let statusColor = '#007bff';
        switch (lead.status) {
            case 'Calificar':
                statusColor = '#ffc107';
                break;
            case 'Desarrollar':
                statusColor = '#17a2b8';
                break;
            case 'Proponer':
                statusColor = '#fd7e14';
                break;
            case 'Cierre':
                statusColor = '#28a745';
                break;
            case 'Perdido':
                statusColor = '#dc3545';
                break;
        }
        
        leadCard.innerHTML = `
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: all 0.2s ease; cursor: pointer;" 
                 onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)'"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'">
                
                <!-- Header del lead -->
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.25rem; font-weight: 600;">${lead.name}</h4>
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                            <span style="background: ${statusColor}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 500;">
                                ${lead.status}
                            </span>
                            <span style="color: #64748b; font-size: 0.875rem;">
                                📱 ${phone}
                            </span>
                        </div>
                        <div style="color: #64748b; font-size: 0.875rem;">
                            <span style="margin-right: 1rem;">🏢 ${currentCompany}</span>
                            <span>🏭 ${sector}</span>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="background: #f1f5f9; color: #475569; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
                            Interés: ${interestLevel}
                        </div>
                        <div style="color: #64748b; font-size: 0.75rem;">
                            ${lead.advisor || 'Sin asignar'}
                        </div>
                    </div>
                </div>
                
                <!-- Información adicional -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                    <div>
                        <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Plan Actual</div>
                        <div style="font-weight: 600; color: #1e293b;">${lead.currentPlanValue || 'No especificado'}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Tiempo Servicio</div>
                        <div style="font-weight: 600; color: #1e293b;">${lead.serviceTime || 'No especificado'}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Satisfacción</div>
                        <div style="font-weight: 600; color: #1e293b;">${lead.satisfactionRating || 'No especificado'}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Plan Preferido</div>
                        <div style="font-weight: 600; color: #1e293b;">${lead.preferredPlan || 'No especificado'}</div>
                    </div>
                </div>
                
                <!-- Acciones -->
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button onclick="window.crm.showManagerLeadDetails(${lead.id})" 
                            style="flex: 1; padding: 0.75rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Ver Detalles
                    </button>
                    <button onclick="window.crm.editLead(${lead.id})" 
                            style="padding: 0.75rem 1rem; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.2s ease;">
                        ✏️ Editar
                    </button>
                    <button onclick="window.crm.reassignLead(${lead.id})" 
                            style="padding: 0.75rem 1rem; background: #f59e0b; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.2s ease;">
                        🔄 Reasignar
                    </button>
                </div>
            </div>
        `;
        
        return leadCard;
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
                    <p><strong>Fecha de Creación:</strong> ${this.formatDate(lead.createdAt)}</p>
                    <p><strong>Última Actividad:</strong> ${this.formatDate(lead.lastActivity)}</p>
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
                            <button class="btn btn-success" onclick="window.crm.showCompleteTaskModal('${task.id}')">Completar</button>
                        ` : ''}
                        <button class="btn btn-primary" onclick="window.crm.showTaskDetail('${task.id}')">Ver Detalle</button>
                        <button class="btn btn-danger" onclick="window.crm.confirmDeleteTask('${task.id}')" title="Eliminar tarea">
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
                            <button class="btn btn-sm btn-primary" onclick="crm.showTaskDetail('${task.id}')">Ver</button>
                            ${task.status !== 'completada' ? `
                                <button class="btn btn-sm btn-success" onclick="crm.showCompleteTaskModal('${task.id}')">Completar</button>
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
    
    showEventDetail(eventId) {
        console.log('Buscando evento con ID:', eventId, 'Tipo:', typeof eventId);
        const event = this.events ? this.events.find(e => e.id == eventId) : null;
        console.log('Evento encontrado:', !!event);
        
        if (!event) {
            this.showNotification('Evento no encontrado', 'error');
            return;
        }
        
        // Create detailed HTML content for the modal
        const taskDetailContent = document.getElementById('taskDetailContent');
        if (taskDetailContent) {
            taskDetailContent.innerHTML = `
                <div class="task-detail-info">
                    <div class="task-detail-header">
                        <h4>${event.title}</h4>
                        <div class="task-detail-meta">
                            <span class="task-status status-programada">Evento</span>
                            <span class="task-priority priority-media">${event.type || 'General'}</span>
                        </div>
                    </div>
                    
                    <div class="task-detail-grid">
                        <div class="task-detail-item">
                            <label>Título:</label>
                            <span>${event.title}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Tipo:</label>
                            <span>${event.type || 'General'}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Fecha:</label>
                            <span>${this.formatDate(event.date)}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Hora:</label>
                            <span>${event.time || 'No especificada'}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Duración:</label>
                            <span>${event.duration || 60} minutos</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Asignado a:</label>
                            <span>${event.advisor || 'Equipo completo'}</span>
                        </div>
                        <div class="task-detail-item">
                            <label>Creado:</label>
                            <span>${this.formatDate(event.createdAt || new Date())}</span>
                        </div>
                    </div>
                    
                    <div class="task-detail-notes">
                        <label>Descripción:</label>
                        <p>${event.description || 'Sin descripción'}</p>
                    </div>
                </div>
            `;
        }
        
        // Show the modal
        const modal = document.getElementById('taskDetailModal');
        if (modal) {
            modal.classList.add('show');
        }
    }
    
    closeTaskDetailModal() {
        const modal = document.getElementById('taskDetailModal');
        if (modal) {
            modal.classList.remove('show');
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
                                <button class="btn btn-success" onclick="window.crm.showCompleteTaskModal('${task.id}')">Completar</button>
                            ` : ''}
                            <button class="btn btn-primary" onclick="window.crm.showTaskDetail('${task.id}')">Ver Detalle</button>
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
                    <button class="btn btn-sm btn-primary" onclick="crm.showTaskDetail('${task.id}')">Ver</button>
                    ${task.status !== 'completada' ? `
                        <button class="btn btn-sm btn-success" onclick="crm.showCompleteTaskModal('${task.id}')">Completar</button>
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
        
        // Formatear fecha de última actividad de forma segura
        let lastActivityDate = 'Sin actividad';
        try {
            if (client.lastActivity) {
                const date = new Date(client.lastActivity);
                if (!isNaN(date.getTime())) {
                    lastActivityDate = date.toLocaleDateString('es-ES');
                }
            }
        } catch (error) {
            console.error('Error al formatear fecha de última actividad:', error);
        }
        
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
                    ${lastActivityDate}
                </div>
                <div class="client-actions-advisor">
                    <button class="btn-view" onclick="window.crm.showLeadDetail('${client.id}')" title="Ver detalles">
                        👁️ Ver
                    </button>
                    <button class="btn-history" onclick="window.crm.viewAdvisorClientHistory('${client.id}')" title="Ver historial">
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
                    ${this.formatDate(lead.lastActivity)}
                </div>
                
                <!-- Columna Acciones -->
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button onclick="window.crm.showLeadDetail('${lead.id}')" style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.25rem; transition: background-color 0.2s;" title="Ver detalles completos">
                        👁️ Ver
                    </button>
                    <button onclick="window.crm.editAdvisorLead('${lead.id}')" style="padding: 0.5rem 1rem; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.25rem; transition: background-color 0.2s;" title="Editar información">
                        ✏️ Editar
                    </button>
                    <button onclick="window.crm.quickCreateTask('${lead.id}')" style="padding: 0.5rem; background: #ffc107; color: #212529; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 600; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s;" title="Crear tarea rápida">
                        ➕
                    </button>
                </div>
            </div>
        `;
    }
    
    getInterestShortName(interest) {
        if (!interest) return 'No definido';
        
        // Manejar nuevos niveles de interés (1-10)
        if (interest.includes('10 - Super interesado')) return '10 - Super';
        if (interest.includes('9')) return '9';
        if (interest.includes('8')) return '8';
        if (interest.includes('7')) return '7';
        if (interest.includes('6')) return '6';
        if (interest.includes('5')) return '5';
        if (interest.includes('4')) return '4';
        if (interest.includes('3')) return '3';
        if (interest.includes('2')) return '2';
        if (interest.includes('1 - No me interesa')) return '1 - No';
        
        // Manejar niveles antiguos
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
                            <span style="color: #6c757d;">${this.formatDate(lead.lastActivity)}</span>
                        </div>
                    </div>
                    
                    ${lead.notes ? `
                        <div style="background: #f8f9fa; padding: 0.75rem; border-radius: 6px; border-left: 3px solid #007bff; margin-bottom: 1rem;">
                            <strong style="color: #495057; font-size: 0.9rem;">📝 Notas:</strong>
                            <p style="margin: 0.5rem 0 0 0; color: #6c757d; font-size: 0.85rem; line-height: 1.4;">${lead.notes}</p>
                        </div>
                    ` : ''}
                    
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <button onclick="window.crm.showLeadDetail('${lead.id}')" style="flex: 1; min-width: 120px; padding: 0.5rem; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">
                            👁️ Ver Detalle
                        </button>
                        <button onclick="window.crm.editAdvisorLead('${lead.id}')" style="flex: 1; min-width: 120px; padding: 0.5rem; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">
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

    // User Management Functions
    createUser(userData) {
        // Validar que el username no exista
        const existingUser = this.users.find(u => u.username === userData.username);
        if (existingUser) {
            this.showNotification('El nombre de usuario ya existe', 'error');
            return false;
        }

        // Validar que el email no exista
        const existingEmail = this.users.find(u => u.email === userData.email);
        if (existingEmail) {
            this.showNotification('El correo electrónico ya está registrado', 'error');
            return false;
        }

        // Validar que la cédula no exista
        const existingCedula = this.users.find(u => u.cedula === userData.cedula);
        if (existingCedula) {
            this.showNotification('La cédula ya está registrada', 'error');
            return false;
        }

        const newUser = {
            id: Date.now(),
            username: userData.username,
            password: userData.password,
            name: `${userData.firstName} ${userData.lastName}`,
            firstName: userData.firstName,
            lastName: userData.lastName,
            cedula: userData.cedula,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
            role: userData.role,
            isActive: true,
            createdAt: new Date(),
            createdBy: this.currentUser.name
        };

        // Si es un asesor, asignar al gerente seleccionado
        if (userData.role === 'advisor' && userData.managerId) {
            newUser.managerId = parseInt(userData.managerId);
            
            // Agregar el asesor a la lista de asesores asignados del gerente
            const manager = this.users.find(u => u.id === newUser.managerId);
            if (manager && manager.role === 'manager') {
                if (!manager.assignedAdvisors) {
                    manager.assignedAdvisors = [];
                }
                manager.assignedAdvisors.push(newUser.name);
            }
        }

        // Si es un gerente, inicializar lista de asesores asignados
        if (userData.role === 'manager') {
            newUser.assignedAdvisors = [];
            
            // Si se seleccionaron asesores, asignarlos
            if (userData.selectedAdvisors && userData.selectedAdvisors.length > 0) {
                userData.selectedAdvisors.forEach(advisorName => {
                    const advisor = this.users.find(u => u.name === advisorName);
                    if (advisor && advisor.role === 'advisor') {
                        advisor.managerId = newUser.id;
                        newUser.assignedAdvisors.push(advisorName);
                    }
                });
            }
        }

        this.users.push(newUser);
        this.saveData();
        this.showNotification(`Usuario ${newUser.name} creado exitosamente`, 'success');
        
        // Actualizar lista de usuarios
        this.loadUsers();
        
        return newUser;
    }

    toggleManagerSelection() {
        const roleSelect = document.getElementById('userRole');
        const managerGroup = document.getElementById('managerSelectionGroup');
        const advisorGroup = document.getElementById('advisorSelectionGroup');
        const managerSelect = document.getElementById('userManager');
        
        if (!roleSelect || !managerGroup || !advisorGroup || !managerSelect) return;
        
        // Ocultar ambos grupos primero
        managerGroup.style.display = 'none';
        advisorGroup.style.display = 'none';
        managerSelect.value = '';
        
        if (roleSelect.value === 'advisor') {
            managerGroup.style.display = 'block';
            // Verificar si hay gerentes disponibles, si no, crear uno por defecto
            this.createDefaultManager();
            this.populateManagerSelect();
        } else if (roleSelect.value === 'manager') {
            advisorGroup.style.display = 'block';
            this.populateAdvisorsCheckboxes();
        }
    }

    populateManagerSelect() {
        const managerSelect = document.getElementById('userManager');
        if (!managerSelect) {
            console.error('Elemento userManager no encontrado');
            return;
        }
        
        console.log('=== POBLANDO SELECT DE GERENTES ===');
        console.log('Total usuarios en el sistema:', this.users.length);
        
        // Limpiar opciones existentes excepto la primera
        managerSelect.innerHTML = '<option value="">Seleccionar gerente...</option>';
        
        // Obtener todos los gerentes de ventas
        const managers = this.users.filter(user => user.role === 'manager' && user.isActive);
        
        console.log('Gerentes encontrados:', managers.length);
        console.log('Detalles de gerentes:', managers.map(m => ({
            id: m.id,
            name: m.name,
            role: m.role,
            isActive: m.isActive,
            assignedAdvisors: m.assignedAdvisors?.length || 0
        })));
        
        if (managers.length === 0) {
            console.warn('No se encontraron gerentes de ventas activos');
            // Agregar opción de "No hay gerentes disponibles"
            const noManagerOption = document.createElement('option');
            noManagerOption.value = '';
            noManagerOption.textContent = 'No hay gerentes de ventas disponibles';
            noManagerOption.disabled = true;
            managerSelect.appendChild(noManagerOption);
            return;
        }
        
        managers.forEach(manager => {
            const option = document.createElement('option');
            option.value = manager.id;
            option.textContent = `${manager.name} (${manager.assignedAdvisors ? manager.assignedAdvisors.length : 0} asesores)`;
            managerSelect.appendChild(option);
        });
        
        console.log('Select de gerentes poblado exitosamente');
    }

    // Función para crear un gerente de ventas de prueba si no existe ninguno
    createDefaultManager() {
        console.log('Verificando si existe al menos un gerente de ventas...');
        
        const existingManagers = this.users.filter(user => user.role === 'manager' && user.isActive);
        
        if (existingManagers.length === 0) {
            console.log('No hay gerentes de ventas, creando uno por defecto...');
            
            const defaultManager = {
                id: Date.now(),
                username: 'gerente_ventas',
                password: 'gerente123',
                role: 'manager',
                name: 'Gerente de Ventas',
                firstName: 'Gerente',
                lastName: 'Ventas',
                email: 'gerente@empresa.com',
                phone: '+1234567890',
                cedula: '1234567890',
                address: 'Oficina Gerencia, Ciudad',
                isActive: true,
                createdAt: new Date(),
                createdBy: 'Sistema',
                assignedAdvisors: []
            };
            
            this.users.push(defaultManager);
            this.saveData();
            
            console.log('Gerente de ventas por defecto creado:', defaultManager.name);
            this.showNotification('Se ha creado un gerente de ventas por defecto', 'info');
            
            return defaultManager;
        }
        
        console.log('Ya existen gerentes de ventas:', existingManagers.length);
        return null;
    }

    // Función para mostrar el estado de los gerentes de ventas
    showManagersStatus() {
        console.log('=== ESTADO DE GERENTES DE VENTAS ===');
        const allUsers = this.users;
        const managers = allUsers.filter(user => user.role === 'manager');
        const activeManagers = managers.filter(user => user.isActive);
        
        console.log('Total usuarios:', allUsers.length);
        console.log('Total gerentes:', managers.length);
        console.log('Gerentes activos:', activeManagers.length);
        
        if (managers.length > 0) {
            console.log('Detalles de gerentes:');
            managers.forEach((manager, index) => {
                console.log(`${index + 1}. ${manager.name} (ID: ${manager.id})`);
                console.log(`   - Activo: ${manager.isActive}`);
                console.log(`   - Username: ${manager.username}`);
                console.log(`   - Email: ${manager.email}`);
                console.log(`   - Asesores asignados: ${manager.assignedAdvisors?.length || 0}`);
            });
        }
        
        console.log('=== FIN ESTADO DE GERENTES ===');
    }

    populateAdvisorsCheckboxes() {
        const advisorsList = document.getElementById('availableAdvisorsList');
        if (!advisorsList) return;
        
        // Obtener todos los asesores que no tienen gerente asignado
        const availableAdvisors = this.users.filter(user => 
            user.role === 'advisor' && 
            user.isActive && 
            (!user.managerId || user.managerId === null)
        );
        
        if (availableAdvisors.length === 0) {
            advisorsList.innerHTML = `
                <div class="no-advisors-message">
                    <p>No hay asesores disponibles para asignar.</p>
                </div>
            `;
            return;
        }
        
        advisorsList.innerHTML = availableAdvisors.map(advisor => `
            <div class="advisor-checkbox-item">
                <label>
                    <input type="checkbox" name="selectedAdvisors" value="${advisor.name}">
                    <span class="advisor-name">${advisor.name}</span>
                    <span class="advisor-username">@${advisor.username}</span>
                </label>
            </div>
        `).join('');
    }

    toggleEditManagerSelection() {
        const roleSelect = document.getElementById('editUserRole');
        const managerGroup = document.getElementById('editManagerSelectionGroup');
        const managerSelect = document.getElementById('editUserManager');
        
        if (!roleSelect || !managerGroup || !managerSelect) return;
        
        if (roleSelect.value === 'advisor') {
            managerGroup.style.display = 'block';
            // Verificar si hay gerentes disponibles, si no, crear uno por defecto
            this.createDefaultManager();
            this.populateEditManagerSelect();
        } else {
            managerGroup.style.display = 'none';
            managerSelect.value = '';
        }
    }

    populateEditManagerSelect() {
        const managerSelect = document.getElementById('editUserManager');
        if (!managerSelect) return;
        
        // Limpiar opciones existentes excepto la primera
        managerSelect.innerHTML = '<option value="">Seleccionar gerente...</option>';
        
        // Obtener todos los gerentes de ventas
        const managers = this.users.filter(user => user.role === 'manager' && user.isActive);
        
        managers.forEach(manager => {
            const option = document.createElement('option');
            option.value = manager.id;
            option.textContent = `${manager.name} (${manager.assignedAdvisors ? manager.assignedAdvisors.length : 0} asesores)`;
            managerSelect.appendChild(option);
        });
    }

    handleUserCreation() {
        console.log('Manejando creación de usuario');
        
        const form = document.getElementById('userCreationForm');
        if (!form) {
            this.showNotification('Formulario no encontrado', 'error');
            return;
        }
        
        const formData = new FormData(form);
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            cedula: formData.get('cedula'),
            role: formData.get('role'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            username: formData.get('username'),
            password: formData.get('password')
        };
        
        // Obtener managerId si es asesor
        if (userData.role === 'advisor') {
            const managerSelect = document.getElementById('userManager');
            if (managerSelect) {
                userData.managerId = managerSelect.value;
            }
        }
        
        // Obtener asesores seleccionados si es gerente
        if (userData.role === 'manager') {
            const selectedCheckboxes = document.querySelectorAll('input[name="selectedAdvisors"]:checked');
            userData.selectedAdvisors = Array.from(selectedCheckboxes).map(cb => cb.value);
        }
        
        // Validar campos obligatorios
        if (!userData.firstName || !userData.lastName || !userData.role || !userData.username || !userData.password) {
            this.showNotification('Por favor complete todos los campos obligatorios', 'error');
            return;
        }
        
        // Crear usuario
        const newUser = this.createUser(userData);
        if (newUser) {
            // Limpiar formulario
            form.reset();
            
            // Ocultar grupos de selección
            const managerGroup = document.getElementById('managerSelectionGroup');
            const advisorGroup = document.getElementById('advisorSelectionGroup');
            if (managerGroup) managerGroup.style.display = 'none';
            if (advisorGroup) advisorGroup.style.display = 'none';
        }
    }

    loadUsers() {
        // Semilla mínima: 2 gerentes y 6 asesores si no existen
        try {
            const nowIso = new Date().toISOString();
            const countManagers = (this.users || []).filter(u => u.role === 'manager').length;
            const countAdvisors = (this.users || []).filter(u => u.role === 'advisor').length;
            if (!Array.isArray(this.users) || this.users.length === 0 || countManagers < 2 || countAdvisors < 6) {
                this.users = [
                    { id: 'm1', name: 'Laura Gómez', firstName: 'Laura', lastName: 'Gómez', role: 'manager', username: 'lgomez', email: 'laura@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'm2', name: 'Diego Torres', firstName: 'Diego', lastName: 'Torres', role: 'manager', username: 'dtorres', email: 'diego@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'a1', name: 'Carlos Ruiz', firstName: 'Carlos', lastName: 'Ruiz', role: 'advisor', managerId: 'm1', username: 'cruiz', email: 'carlos@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'a2', name: 'María López', firstName: 'María', lastName: 'López', role: 'advisor', managerId: 'm1', username: 'mlopez', email: 'maria@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'a3', name: 'Andrés Pérez', firstName: 'Andrés', lastName: 'Pérez', role: 'advisor', managerId: 'm1', username: 'aperez', email: 'andres@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'a4', name: 'Sofía Medina', firstName: 'Sofía', lastName: 'Medina', role: 'advisor', managerId: 'm2', username: 'smedina', email: 'sofia@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'a5', name: 'Julián Castro', firstName: 'Julián', lastName: 'Castro', role: 'advisor', managerId: 'm2', username: 'jcastro', email: 'julian@empresa.com', isActive: true, createdAt: nowIso },
                    { id: 'a6', name: 'Paula Vargas', firstName: 'Paula', lastName: 'Vargas', role: 'advisor', managerId: 'm2', username: 'pvargas', email: 'paula@empresa.com', isActive: true, createdAt: nowIso }
                ];
            }
        } catch (e) { /* noop */ }

        // Si existe la UI separada por roles, renderizar ahí
        const adminList = document.getElementById('adminUsersList');
        const managerList = document.getElementById('managerUsersList');
        const advisorList = document.getElementById('advisorUsersList');
        const adminCount = document.getElementById('adminCount');
        const managerCount = document.getElementById('managerCount');
        const advisorCount = document.getElementById('advisorCount');

        if (managerList || advisorList || adminList) {
            const admins = (this.users || []).filter(u => u.role === 'admin');
            const managers = (this.users || []).filter(u => u.role === 'manager');
            const advisors = (this.users || []).filter(u => u.role === 'advisor');

            if (adminList) adminList.innerHTML = admins.map(u => this.createUserCard(u)).join('');
            if (managerList) managerList.innerHTML = managers.map(u => this.createUserCard(u)).join('');
            if (advisorList) advisorList.innerHTML = advisors.map(u => this.createUserCard(u)).join('');

            if (adminCount) adminCount.textContent = `${admins.length} administradores`;
            if (managerCount) managerCount.textContent = `${managers.length} gerentes`;
            if (advisorCount) advisorCount.textContent = `${advisors.length} asesores`;
            return;
        }

        // Fallback a la lista plana
        const roleFilter = document.getElementById('usersRoleFilter')?.value;
        let filteredUsers = this.users;
        if (roleFilter) {
            filteredUsers = this.users.filter(user => user.role === roleFilter);
        }

        const usersList = document.getElementById('usersList');
        const userCount = document.getElementById('userCount');
        if (!usersList) return;

        userCount.textContent = `${filteredUsers.length} usuarios`;
        if (filteredUsers.length === 0) {
            usersList.innerHTML = `
                <div class="no-users-message">
                    <div class="icon">👥</div>
                    <h3>No hay usuarios</h3>
                    <p>No se encontraron usuarios que coincidan con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }
        usersList.innerHTML = filteredUsers.map(user => this.createUserCard(user)).join('');
    }

    createUserCard(user) {
        const roleIcon = user.role === 'admin' ? '👑' : user.role === 'manager' ? '👔' : '👤';
        const roleName = user.role === 'admin' ? 'Administrador' : user.role === 'manager' ? 'Gerente' : 'Asesor';
        const statusClass = user.isActive ? 'active' : 'inactive';
        const statusText = user.isActive ? 'Activo' : 'Inactivo';
        
        // Función para verificar si un campo tiene valor
        const hasValue = (value) => value && value !== 'undefined' && value !== 'null';
        
        // Obtener información resumida
        const emailDisplay = hasValue(user.email) ? user.email : 'No especificado';
        const phoneDisplay = hasValue(user.phone) ? user.phone : 'No especificado';
        const cedulaDisplay = hasValue(user.cedula) ? user.cedula : 'No especificado';
        const addressDisplay = hasValue(user.address) ? (user.address.length > 50 ? user.address.substring(0, 50) + '...' : user.address) : 'No especificado';
        
        // Obtener información de asociación
        let associationInfo = '';
        if (user.role === 'manager' && user.assignedAdvisors) {
            associationInfo = `<div class="user-association">
                <span class="association-label">👥 Asesores asignados:</span>
                <span class="association-value">${user.assignedAdvisors.length} asesor(es)</span>
            </div>`;
        } else if (user.role === 'advisor' && user.managerId) {
            const manager = this.users.find(u => u.id === user.managerId);
            const managerName = manager ? manager.name : 'Gerente no encontrado';
            associationInfo = `<div class="user-association">
                <span class="association-label">👔 Gerente asignado:</span>
                <span class="association-value">${managerName}</span>
            </div>`;
        }

        return `
            <div class="user-card ${statusClass}">
                <div class="user-header">
                    <div class="user-avatar">
                        <span class="user-icon">${roleIcon}</span>
                    </div>
                    <div class="user-info">
                        <h4>${user.name}</h4>
                        <div class="user-meta">
                            <span class="user-role-badge role-${user.role}">${roleName}</span>
                            <span class="user-status-badge ${statusClass}">${statusText}</span>
                        </div>
                        <div class="user-username">@${user.username}</div>
                    </div>
                    <div class="user-actions-compact">
                        <button onclick="window.crm.viewUserDetails('${user.id}')" class="btn btn-outline btn-xs" title="Ver Detalles">
                            👁️
                        </button>
                        <button onclick="window.crm.editUser('${user.id}')" class="btn btn-primary btn-xs" title="Editar">
                            ✏️
                        </button>
                        <button onclick="window.crm.toggleUserStatus('${user.id}')" class="btn btn-${user.isActive ? 'warning' : 'success'} btn-xs" title="${user.isActive ? 'Desactivar' : 'Activar'}">
                            ${user.isActive ? '⏸️' : '▶️'}
                        </button>
                    </div>
                </div>
                
                <div class="user-details-compact">
                    <div class="detail-row">
                        <div class="detail-item-compact">
                            <span class="icon">📧</span>
                            <span class="value">${emailDisplay}</span>
                        </div>
                        <div class="detail-item-compact">
                            <span class="icon">📱</span>
                            <span class="value">${phoneDisplay}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item-compact">
                            <span class="icon">🆔</span>
                            <span class="value">${cedulaDisplay}</span>
                        </div>
                        <div class="detail-item-compact">
                            <span class="icon">📅</span>
                            <span class="value">${this.formatDate(user.createdAt)}</span>
                        </div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-item-compact full-width">
                            <span class="icon">📍</span>
                            <span class="value">${addressDisplay}</span>
                        </div>
                    </div>
                    ${associationInfo ? `<div class="detail-row">${associationInfo}</div>` : ''}
                </div>
            </div>
        `;
    }

    viewUserDetails(userId) {
        const user = this.users.find(u => u.id === userId);
        if (!user) {
            this.showNotification('Usuario no encontrado', 'error');
            return;
        }

        const modal = document.getElementById('userDetailModal');
        const title = document.getElementById('userDetailTitle');
        const content = document.getElementById('userDetailContent');

        if (!modal || !title || !content) {
            console.error('Elementos del modal de detalle de usuario no encontrados:', {
                modal: !!modal,
                title: !!title,
                content: !!content
            });
            this.showNotification('Error: Modal no encontrado', 'error');
            return;
        }

        title.textContent = `Detalle de ${user.name}`;

        const roleIcon = user.role === 'admin' ? '👑' : user.role === 'manager' ? '👔' : '👤';
        const roleName = user.role === 'admin' ? 'Administrador' : user.role === 'manager' ? 'Gerente de Ventas' : 'Asesor';

        content.innerHTML = `
            <div class="user-detail-container">
                <div class="user-detail-header">
                    <div class="user-avatar-large">
                        <span class="user-icon-large">${roleIcon}</span>
                    </div>
                    <div class="user-main-info">
                        <h3>${user.name}</h3>
                        <span class="user-role-badge">${roleName}</span>
                        <span class="user-status-badge ${user.isActive ? 'active' : 'inactive'}">
                            ${user.isActive ? 'Activo' : 'Inactivo'}
                        </span>
                    </div>
                </div>
                
                <div class="user-detail-grid">
                    <div class="detail-section">
                        <h4>📋 Información Personal</h4>
                        <div class="detail-item">
                            <span class="label">Nombres:</span>
                            <span class="value">${user.firstName}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Apellidos:</span>
                            <span class="value">${user.lastName}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Cédula:</span>
                            <span class="value">${user.cedula}</span>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>📞 Información de Contacto</h4>
                        <div class="detail-item">
                            <span class="label">Email:</span>
                            <span class="value">${user.email}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Teléfono:</span>
                            <span class="value">${user.phone}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Dirección:</span>
                            <span class="value">${user.address}</span>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>🔐 Información de Acceso</h4>
                        <div class="detail-item">
                            <span class="label">Usuario:</span>
                            <span class="value">${user.username}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Rol:</span>
                            <span class="value">${roleName}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Estado:</span>
                            <span class="value ${user.isActive ? 'active' : 'inactive'}">${user.isActive ? 'Activo' : 'Inactivo'}</span>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>📊 Información del Sistema</h4>
                        <div class="detail-item">
                            <span class="label">Creado:</span>
                            <span class="value">${this.formatDateTime(user.createdAt)}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Creado por:</span>
                            <span class="value">${user.createdBy || 'Sistema'}</span>
                        </div>
                        ${user.lastLogin ? `
                        <div class="detail-item">
                            <span class="label">Último acceso:</span>
                            <span class="value">${this.formatDateTime(user.lastLogin)}</span>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="user-detail-actions">
                    <button onclick="window.crm.editUser('${user.id}'); document.getElementById('userDetailModal').style.display='none';" class="btn btn-primary">
                        ✏️ Editar Usuario
                    </button>
                    <button onclick="window.crm.toggleUserStatus('${user.id}'); document.getElementById('userDetailModal').style.display='none';" class="btn btn-${user.isActive ? 'warning' : 'success'}">
                        ${user.isActive ? '⏸️ Desactivar' : '▶️ Activar'}
                    </button>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        modal.classList.add('show');
    }

    editUser(userId) {
        const user = this.users.find(u => u.id === userId);
        if (!user) {
            this.showNotification('Usuario no encontrado', 'error');
            return;
        }

        // Verificar que todos los elementos del formulario existan
        const formElements = {
            firstName: document.getElementById('editUserFirstName'),
            lastName: document.getElementById('editUserLastName'),
            cedula: document.getElementById('editUserCedula'),
            email: document.getElementById('editUserEmail'),
            phone: document.getElementById('editUserPhone'),
            address: document.getElementById('editUserAddress'),
            username: document.getElementById('editUserUsername'),
            role: document.getElementById('editUserRole'),
            form: document.getElementById('editUserForm'),
            modal: document.getElementById('editUserModal')
        };

        const missingElements = Object.keys(formElements).filter(key => !formElements[key]);
        if (missingElements.length > 0) {
            console.error('Elementos del formulario de edición no encontrados:', missingElements);
            this.showNotification('Error: Formulario de edición no encontrado', 'error');
            return;
        }

        // Llenar el formulario de edición
        formElements.firstName.value = user.firstName || '';
        formElements.lastName.value = user.lastName || '';
        formElements.cedula.value = user.cedula || '';
        formElements.email.value = user.email || '';
        formElements.phone.value = user.phone || '';
        formElements.address.value = user.address || '';
        formElements.username.value = user.username || '';
        formElements.role.value = user.role || '';

        // Manejar selección de gerente para asesores
        if (user.role === 'advisor') {
            this.toggleEditManagerSelection();
            // Establecer el gerente actual si existe
            if (user.managerId) {
                const managerSelect = document.getElementById('editUserManager');
                if (managerSelect) {
                    managerSelect.value = user.managerId;
                }
            }
        }

        // Guardar el ID del usuario para la actualización
        formElements.form.dataset.userId = userId;

        // Mostrar el modal
        formElements.modal.style.display = 'flex';
        formElements.modal.classList.add('show');
        console.log('Modal de edición de usuario mostrado para:', user.name);
    }

    updateUser(userId, userData) {
        const userIndex = this.users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            this.showNotification('Usuario no encontrado', 'error');
            return false;
        }

        // Validar username único (excluyendo el usuario actual)
        const existingUser = this.users.find(u => u.username === userData.username && u.id !== userId);
        if (existingUser) {
            this.showNotification('El nombre de usuario ya existe', 'error');
            return false;
        }

        // Validar email único (excluyendo el usuario actual)
        const existingEmail = this.users.find(u => u.email === userData.email && u.id !== userId);
        if (existingEmail) {
            this.showNotification('El correo electrónico ya está registrado', 'error');
            return false;
        }

        // Validar cédula única (excluyendo el usuario actual)
        const existingCedula = this.users.find(u => u.cedula === userData.cedula && u.id !== userId);
        if (existingCedula) {
            this.showNotification('La cédula ya está registrada', 'error');
            return false;
        }

        // Actualizar datos del usuario
        const user = this.users[userIndex];
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.name = `${userData.firstName} ${userData.lastName}`;
        user.cedula = userData.cedula;
        user.email = userData.email;
        user.phone = userData.phone;
        user.address = userData.address;
        user.username = userData.username;
        user.role = userData.role;
        user.updatedAt = new Date();
        const currentUser = this.getCurrentUser();
        user.updatedBy = currentUser ? currentUser.name : 'Sistema';

        // Actualizar contraseña solo si se proporciona una nueva
        if (userData.password && userData.password.trim() !== '') {
            user.password = userData.password;
        }

        // Manejar cambio de gerente para asesores
        if (userData.role === 'advisor') {
            const oldManagerId = user.managerId;
            const newManagerId = userData.managerId ? parseInt(userData.managerId) : null;

            // Si cambió el gerente
            if (oldManagerId !== newManagerId) {
                // Remover del gerente anterior
                if (oldManagerId) {
                    const oldManager = this.users.find(u => u.id === oldManagerId);
                    if (oldManager && oldManager.assignedAdvisors) {
                        oldManager.assignedAdvisors = oldManager.assignedAdvisors.filter(name => name !== user.name);
                    }
                }

                // Agregar al nuevo gerente
                if (newManagerId) {
                    user.managerId = newManagerId;
                    const newManager = this.users.find(u => u.id === newManagerId);
                    if (newManager) {
                        if (!newManager.assignedAdvisors) {
                            newManager.assignedAdvisors = [];
                        }
                        if (!newManager.assignedAdvisors.includes(user.name)) {
                            newManager.assignedAdvisors.push(user.name);
                        }
                    }
                } else {
                    user.managerId = null;
                }
            }
        }

        this.saveData();
        this.showNotification(`Usuario ${user.name} actualizado exitosamente`, 'success');
        this.loadUsers();
        this.closeEditUserModal();
        
        return true;
    }

    toggleUserStatus(userId) {
        const user = this.users.find(u => u.id === userId);
        if (!user) {
            this.showNotification('Usuario no encontrado', 'error');
            return;
        }

        // No permitir desactivar al usuario actual (si se puede determinar)
        const currentUser = this.getCurrentUser();
        if (currentUser && user.id === currentUser.id) {
            this.showNotification('No puedes desactivar tu propio usuario', 'warning');
            return;
        }

        user.isActive = !user.isActive;
        user.statusChangedAt = new Date();
        user.statusChangedBy = currentUser ? currentUser.name : 'Sistema';

        this.saveData();
        this.showNotification(`Usuario ${user.name} ${user.isActive ? 'activado' : 'desactivado'} exitosamente`, 'success');
        this.loadUsers();
    }

    closeEditUserModal() {
        document.getElementById('editUserModal').style.display = 'none';
        document.getElementById('editUserForm').reset();
        delete document.getElementById('editUserForm').dataset.userId;
    }

    // User Management Handler Functions
    handleUserCreation() {
        const formData = new FormData(document.getElementById('userCreationForm'));
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            cedula: formData.get('cedula'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            username: formData.get('username'),
            password: formData.get('password'),
            role: formData.get('role')
        };

        // Validaciones básicas
        if (!userData.firstName || !userData.lastName || !userData.cedula || !userData.email || !userData.phone || !userData.address || !userData.username || !userData.password || !userData.role) {
            this.showNotification('Por favor complete todos los campos obligatorios', 'error');
            return;
        }

        if (userData.password.length < 6) {
            this.showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
            return;
        }

        if (userData.cedula.length !== 10) {
            this.showNotification('La cédula debe tener exactamente 10 dígitos', 'error');
            return;
        }

        // Crear usuario
        const success = this.createUser(userData);
        if (success) {
            document.getElementById('userCreationForm').reset();
        }
    }

    handleUserEdit() {
        const userId = parseInt(document.getElementById('editUserForm').dataset.userId);
        const formData = new FormData(document.getElementById('editUserForm'));
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            cedula: formData.get('cedula'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            username: formData.get('username'),
            password: formData.get('password'),
            role: formData.get('role')
        };

        // Obtener managerId si es asesor
        if (userData.role === 'advisor') {
            const managerSelect = document.getElementById('editUserManager');
            if (managerSelect) {
                userData.managerId = managerSelect.value;
            }
        }

        // Validaciones básicas
        if (!userData.firstName || !userData.lastName || !userData.cedula || !userData.email || !userData.phone || !userData.address || !userData.username || !userData.role) {
            this.showNotification('Por favor complete todos los campos obligatorios', 'error');
            return;
        }

        if (userData.password && userData.password.length < 6) {
            this.showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
            return;
        }

        if (userData.cedula.length !== 10) {
            this.showNotification('La cédula debe tener exactamente 10 dígitos', 'error');
            return;
        }

        // Actualizar usuario
        this.updateUser(userId, userData);
    }

    closeEditUserModal() {
        const modal = document.getElementById('editUserModal');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
            // Limpiar formulario
            const form = document.getElementById('editUserForm');
            if (form) {
                form.reset();
            }
        }
    }

    getCurrentUser() {
        // Obtener el usuario actual de localStorage o sesión
        const currentUserData = localStorage.getItem('currentUser');
        if (currentUserData) {
            const userData = JSON.parse(currentUserData);
            return this.users.find(u => u.username === userData.username);
        }
        
        // Si no hay usuario en localStorage, intentar obtener de this.currentUser
        if (this.currentUser) {
            return this.currentUser;
        }
        
        // Como fallback, devolver null
        return null;
    }


    updateManagerUserManagement() {
        console.log('Actualizando sección de gestión de usuarios...');
        
        // Cargar usuarios
        this.loadUsers();
        
        // Configurar filtros
        const usersRoleFilter = document.getElementById('usersRoleFilter');
        if (usersRoleFilter) {
            // Limpiar opciones existentes excepto la primera
            usersRoleFilter.innerHTML = '<option value="">Todos los Roles</option>';
            
            // Agregar opciones dinámicas
            const roles = [...new Set(this.users.map(user => user.role))];
            roles.forEach(role => {
                const option = document.createElement('option');
                option.value = role;
                option.textContent = role === 'admin' ? 'Administrador' : 
                                   role === 'manager' ? 'Gerente de Ventas' : 'Asesor';
                usersRoleFilter.appendChild(option);
            });
        }
    }

    updateTodayPendingTasks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const todayTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            taskDate.setHours(0, 0, 0, 0);
            
            return taskDate.getTime() === today.getTime() && 
                   task.status !== 'completada' &&
                   task.advisor === this.currentUser.name;
        });

        const todayPendingTasks = document.getElementById('todayPendingTasks');
        const todayTasksStatus = document.getElementById('todayTasksStatus');
        
        if (todayPendingTasks) {
            todayPendingTasks.textContent = todayTasks.length;
        }
        
        if (todayTasksStatus) {
            if (todayTasks.length === 0) {
                todayTasksStatus.textContent = '¡Todo al día!';
                todayTasksStatus.className = 'stat-change positive';
            } else if (todayTasks.length <= 3) {
                todayTasksStatus.textContent = 'Buen ritmo';
                todayTasksStatus.className = 'stat-change neutral';
            } else {
                todayTasksStatus.textContent = 'Necesitas atención';
                todayTasksStatus.className = 'stat-change negative';
            }
        }
    }

    updateAdvisorTasks() {
        console.log('Actualizando tareas del asesor...');
        
        const tasksContainer = document.getElementById('tasksList');
        if (!tasksContainer) {
            console.error('Contenedor de tareas no encontrado');
            return;
        }

        // Obtener tareas del asesor actual
        const advisorTasks = this.tasks.filter(task => 
            task.advisor === this.currentUser.name
        );

        console.log('Tareas del asesor encontradas:', advisorTasks.length);

        if (advisorTasks.length === 0) {
            tasksContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: #6c757d; background: #f8f9fa; border-radius: 12px; border: 2px dashed #dee2e6;">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">📋</div>
                    <h3 style="margin: 0 0 1rem 0; color: #495057;">No hay tareas asignadas</h3>
                    <p style="margin: 0; color: #6c757d;">Crea una nueva tarea para comenzar a trabajar.</p>
                </div>
            `;
            return;
        }

        // Ordenar tareas según la prioridad solicitada:
        // 1. Próximas a realizarse (fecha futura, no completadas)
        // 2. Completadas
        // 3. No realizadas (fecha pasada, no completadas)
        const sortedTasks = advisorTasks.sort((a, b) => {
            const now = new Date();
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);
            
            const isACompleted = a.status === 'completada';
            const isBCompleted = b.status === 'completada';
            const isAFuture = dateA > now;
            const isBFuture = dateB > now;
            const isAPast = dateA < now;
            const isBPast = dateB < now;
            
            // 1. Próximas a realizarse (fecha futura, no completadas) - Prioridad 1
            if (!isACompleted && isAFuture && (isBCompleted || !isBFuture)) return -1;
            if (!isBCompleted && isBFuture && (isACompleted || !isAFuture)) return 1;
            
            // Si ambas son futuras, ordenar por fecha
            if (!isACompleted && isAFuture && !isBCompleted && isBFuture) {
                return dateA - dateB;
            }
            
            // 2. Completadas - Prioridad 2
            if (isACompleted && !isBCompleted) return 1;
            if (isBCompleted && !isACompleted) return -1;
            
            // Si ambas son completadas, ordenar por fecha (más recientes primero)
            if (isACompleted && isBCompleted) {
                return dateB - dateA;
            }
            
            // 3. No realizadas (fecha pasada, no completadas) - Prioridad 3
            if (!isACompleted && isAPast && !isBCompleted && isBPast) {
                return dateA - dateB; // Más vencidas primero
            }
            
            return 0;
        });

        // Generar HTML de las tareas ordenadas
        tasksContainer.innerHTML = sortedTasks.map(task => this.createTaskCard(task)).join('');
        
        console.log('Tareas del asesor actualizadas y ordenadas:', sortedTasks.length);
    }

    updateUpcomingTasksWidget() {
        const widget = document.getElementById('upcomingTasksWidget');
        if (!widget) {
            console.error('Widget de próximas tareas no encontrado');
            return;
        }

        // Obtener tareas próximas del asesor actual (fecha futura, no completadas)
        const now = new Date();
        const upcomingTasks = this.tasks
            .filter(task => {
                const taskDate = new Date(task.dueDate);
                return task.advisor === this.currentUser.name &&
                       task.status !== 'completada' &&
                       taskDate > now;
            })
            .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
            .slice(0, 5); // Mostrar solo las 5 próximas

        console.log('Tareas próximas encontradas:', upcomingTasks.length);

        if (upcomingTasks.length === 0) {
            widget.innerHTML = `
                <div style="text-align: center; padding: 3rem 2rem; color: #64748b; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
                    <div style="width: 48px; height: 48px; margin: 0 auto 1rem; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h4 style="margin: 0 0 0.5rem 0; color: #334155; font-size: 1rem; font-weight: 600;">Sin tareas pendientes</h4>
                    <p style="margin: 0; font-size: 0.875rem; color: #64748b;">Todas las tareas están al día</p>
                </div>
            `;
            return;
        }

        widget.innerHTML = upcomingTasks.map(task => {
            const taskDate = new Date(task.dueDate);
            const isToday = this.isToday(taskDate);
            const isTomorrow = this.isTomorrow(taskDate);
            
            let dateLabel = '';
            let priorityColor = '#3b82f6';
            let priorityBg = '#dbeafe';
            
            if (isToday) {
                dateLabel = 'Hoy';
                priorityColor = '#dc2626';
                priorityBg = '#fee2e2';
            } else if (isTomorrow) {
                dateLabel = 'Mañana';
                priorityColor = '#ea580c';
                priorityBg = '#fed7aa';
            } else {
                dateLabel = taskDate.toLocaleDateString('es-ES', { 
                    day: '2-digit', 
                    month: 'short' 
                });
            }

            return `
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); transition: all 0.2s ease;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                        <div style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                                <div style="width: 8px; height: 8px; background: ${priorityColor}; border-radius: 50%; flex-shrink: 0;"></div>
                                <h4 style="margin: 0; color: #1e293b; font-size: 1rem; font-weight: 600; line-height: 1.4;">${task.type}</h4>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem; color: #64748b; font-size: 0.875rem;">
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>${dateLabel}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>${taskDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                            </div>
                        </div>
                        <span style="background: ${priorityBg}; color: ${priorityColor}; padding: 0.375rem 0.75rem; border-radius: 8px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.025em;">
                            ${dateLabel}
                        </span>
                    </div>
                    
                    ${task.notes ? `
                        <div style="margin-bottom: 1rem; padding: 0.75rem; background: #f8fafc; border-radius: 8px; border-left: 3px solid #3b82f6;">
                            <p style="margin: 0; color: #475569; font-size: 0.875rem; line-height: 1.5;">${task.notes}</p>
                        </div>
                    ` : ''}
                    
                    <div style="display: flex; gap: 0.75rem;">
                        <button onclick="window.crm.showTaskDetail(${task.id})" style="flex: 1; padding: 0.75rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Ver Detalle
                        </button>
                        <button onclick="window.crm.showCompleteTaskModal('${task.id}')" style="flex: 1; padding: 0.75rem 1rem; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Completar
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    isTomorrow(date) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const taskDate = new Date(date);
        taskDate.setHours(0, 0, 0, 0);
        
        return taskDate.getTime() === tomorrow.getTime();
    }

    createTaskCard(task) {
        const taskDate = new Date(task.dueDate);
        const isOverdue = taskDate < new Date() && task.status !== 'completada';
        const isToday = this.isToday(taskDate);
        const isFuture = taskDate > new Date();
        
        // Determinar el color del borde izquierdo según el estado
        let borderColor = '#007bff'; // Azul por defecto
        if (task.status === 'completada') {
            borderColor = '#28a745'; // Verde para completadas
        } else if (isOverdue) {
            borderColor = '#dc3545'; // Rojo para vencidas
        } else if (isToday) {
            borderColor = '#ffc107'; // Amarillo para hoy
        } else if (isFuture) {
            borderColor = '#17a2b8'; // Azul claro para futuras
        }

        // Determinar el color del badge de estado
        let statusBadgeColor = '#007bff';
        let statusText = task.status;
        
        switch (task.status) {
            case 'completada':
                statusBadgeColor = '#28a745';
                statusText = 'COMPLETADA';
                break;
            case 'abierto':
                statusBadgeColor = '#007bff';
                statusText = 'ABIERTO';
                break;
            case 'programada':
                statusBadgeColor = '#6f42c1';
                statusText = 'PROGRAMADA';
                break;
            case 'en_progreso':
                statusBadgeColor = '#fd7e14';
                statusText = 'EN PROGRESO';
                break;
            default:
                statusBadgeColor = '#6c757d';
                statusText = task.status.toUpperCase();
        }

        // Determinar el color del badge de prioridad
        let priorityBadgeColor = '#ffc107';
        let priorityText = task.priority || 'Media';
        
        switch (task.priority) {
            case 'Alta':
                priorityBadgeColor = '#dc3545';
                priorityText = 'ALTA';
                break;
            case 'Media':
                priorityBadgeColor = '#ffc107';
                priorityText = 'MEDIA';
                break;
            case 'Baja':
                priorityBadgeColor = '#28a745';
                priorityText = 'BAJA';
                break;
        }

        return `
            <div class="task-card" style="border-left: 4px solid ${borderColor};">
                <div class="task-header">
                    <div class="task-title-section">
                        <h4 class="task-title">${task.type} - ${this.getLeadName(task.leadId)}</h4>
                        <div class="task-meta">
                            <span class="task-meta-item">
                                <strong>Cliente:</strong> ${this.getLeadName(task.leadId)}
                            </span>
                            <span class="task-meta-item">
                                <strong>Tipo:</strong> ${task.type}
                            </span>
                            <span class="task-meta-item">
                                <strong>Fecha límite:</strong> ${taskDate.toLocaleDateString('es-ES', { 
                                    day: '2-digit', 
                                    month: 'short', 
                                    year: 'numeric' 
                                })}
                            </span>
                            <span class="task-meta-item">
                                <strong>Duración:</strong> ${task.duration} min
                            </span>
                            <span class="task-meta-item">
                                <strong>Notas:</strong> ${task.notes || 'Sin descripción'}
                            </span>
                        </div>
                    </div>
                    <div class="task-badges">
                        <span class="task-badge status-badge" style="background-color: ${statusBadgeColor};">
                            ${statusText}
                        </span>
                        <span class="task-badge priority-badge" style="background-color: ${priorityBadgeColor};">
                            ${priorityText}
                        </span>
                    </div>
                </div>
                <div class="task-actions">
                    ${task.status !== 'completada' ? `
                        <button class="btn btn-success btn-sm" onclick="window.crm.showCompleteTaskModal('${task.id}')">
                            Completar
                        </button>
                    ` : ''}
                    <button class="btn btn-primary btn-sm" onclick="window.crm.showTaskDetail('${task.id}')">
                        Ver Detalle
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="window.crm.deleteTask('${task.id}')">
                        🗑️ Eliminar
                    </button>
                </div>
            </div>
        `;
    }

    // ==================== FUNCIONES DEL CALENDARIO DEL MANAGER/ADMIN ====================

    updateManagerCalendar() {
        console.log('Actualizando calendario del manager...');
        
        // Configurar controles del calendario
        this.setupManagerCalendarControls();
        
        // Generar calendario semanal
        this.generateManagerWeeklyCalendar();
        
        // Actualizar resumen de tareas
        this.updateManagerTasksSummary();
    }

    setupManagerCalendarControls() {
        const prevWeekBtn = document.getElementById('prevWeek');
        const nextWeekBtn = document.getElementById('nextWeek');
        const todayBtn = document.getElementById('todayBtn');
        const createEventBtn = document.getElementById('createEventBtn');
        
        if (prevWeekBtn) {
            prevWeekBtn.onclick = () => this.navigateManagerWeek(-1);
        }
        
        if (nextWeekBtn) {
            nextWeekBtn.onclick = () => this.navigateManagerWeek(1);
        }
        
        if (todayBtn) {
            todayBtn.onclick = () => this.goToTodayManager();
        }
        
        if (createEventBtn) {
            createEventBtn.onclick = () => this.showCreateEventModal();
        }
        
        // Inicializar fecha actual
        if (!this.currentManagerWeek) {
            this.currentManagerWeek = new Date();
        }
    }

    navigateManagerWeek(direction) {
        this.currentManagerWeek.setDate(this.currentManagerWeek.getDate() + (direction * 7));
        this.generateManagerWeeklyCalendar();
        this.updateManagerTasksSummary();
    }

    goToTodayManager() {
        this.currentManagerWeek = new Date();
        this.generateManagerWeeklyCalendar();
        this.updateManagerTasksSummary();
    }


    updateManagerTasksSummary() {
        const tasksSummary = document.getElementById('tasksSummary');
        if (!tasksSummary) return;

        // Obtener todas las tareas del equipo
        const teamTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            const weekStart = this.getStartOfWeek(this.currentManagerWeek);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekEnd.getDate() + 6);
            return taskDate >= weekStart && taskDate <= weekEnd;
        });

        // Agrupar por asesor
        const tasksByAdvisor = {};
        teamTasks.forEach(task => {
            if (!tasksByAdvisor[task.advisor]) {
                tasksByAdvisor[task.advisor] = [];
            }
            tasksByAdvisor[task.advisor].push(task);
        });

        let summaryHTML = '';
        Object.keys(tasksByAdvisor).forEach(advisor => {
            const advisorTasks = tasksByAdvisor[advisor];
            const completedTasks = advisorTasks.filter(task => task.status === 'completada').length;
            const pendingTasks = advisorTasks.length - completedTasks;
            
            summaryHTML += `
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h4 style="margin: 0; color: #1e293b; font-size: 1.1rem; font-weight: 600;">${advisor}</h4>
                        <span style="background: #f1f5f9; color: #475569; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem; font-weight: 500;">
                            ${advisorTasks.length} tareas
                        </span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div style="text-align: center; padding: 1rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #16a34a; margin-bottom: 0.25rem;">${completedTasks}</div>
                            <div style="font-size: 0.875rem; color: #15803d; font-weight: 500;">Completadas</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #fef3c7; border-radius: 8px; border: 1px solid #fde68a;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #d97706; margin-bottom: 0.25rem;">${pendingTasks}</div>
                            <div style="font-size: 0.875rem; color: #b45309; font-weight: 500;">Pendientes</div>
                        </div>
                    </div>
                </div>
            `;
        });

        if (summaryHTML === '') {
            summaryHTML = `
                <div style="text-align: center; padding: 3rem; color: #6c757d; background: #f8f9fa; border-radius: 12px; border: 2px dashed #dee2e6;">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">📅</div>
                    <h3 style="margin: 0 0 1rem 0; color: #495057;">No hay tareas esta semana</h3>
                    <p style="margin: 0; color: #6c757d;">Crea eventos para planificar las actividades del equipo.</p>
                </div>
            `;
        }

        tasksSummary.innerHTML = summaryHTML;
    }

    getStartOfWeek(date) {
        const start = new Date(date);
        const day = start.getDay();
        const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Ajustar para que el lunes sea el primer día
        start.setDate(diff);
        start.setHours(0, 0, 0, 0);
        return start;
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

    getTasksForDay(date) {
        return this.tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            return this.isSameDay(taskDate, date);
        });
    }

    isTaskAtTime(task, time) {
        const taskTime = new Date(task.dueDate);
        const taskHour = taskTime.getHours();
        const taskMinute = taskTime.getMinutes();
        const [hour, minute] = time.split(':').map(Number);
        
        return taskHour === hour && Math.abs(taskMinute - minute) < 30;
    }

    getClientNameFromTask(task) {
        // Intentar obtener el nombre del cliente desde el lead
        if (task.leadId) {
            const lead = this.leads.find(l => l.id == task.leadId);
            if (lead) return lead.name;
        }
        return task.clientName || 'Sin cliente';
    }

    isSameDay(date1, date2) {
        return date1.toDateString() === date2.toDateString();
    }

    // ==================== FUNCIONES DEL MODAL DE CREAR EVENTO ====================

    showCreateEventModal() {
        const modal = document.getElementById('createEventModal');
        if (!modal) {
            console.error('Modal createEventModal no encontrado');
            return;
        }

        // Limpiar formulario
        const form = document.getElementById('createEventForm');
        if (form) {
            form.reset();
        }

        // Configurar fecha por defecto para hoy
        const eventDateField = document.getElementById('eventDate');
        if (eventDateField) {
            const today = new Date();
            eventDateField.value = today.toISOString().split('T')[0];
        }

        // Configurar hora por defecto
        const eventTimeField = document.getElementById('eventTime');
        if (eventTimeField) {
            eventTimeField.value = '09:00';
        }

        // Poblar lista de asesores
        this.populateEventAdvisors();

        // Mostrar modal
        modal.style.display = 'flex';
        modal.classList.add('show');
    }

    closeCreateEventModal() {
        const modal = document.getElementById('createEventModal');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
        }
    }

    populateEventAdvisors() {
        const advisorSelect = document.getElementById('eventAdvisor');
        if (!advisorSelect) return;

        // Limpiar opciones existentes excepto la primera
        advisorSelect.innerHTML = '<option value="">Todos los asesores</option>';

        // Obtener asesores únicos
        const advisors = [...new Set(this.tasks.map(task => task.advisor).filter(advisor => advisor))];
        advisors.forEach(advisor => {
            const option = document.createElement('option');
            option.value = advisor;
            option.textContent = advisor;
            advisorSelect.appendChild(option);
        });
    }

    saveEvent() {
        const form = document.getElementById('createEventForm');
        if (!form) {
            this.showNotification('Formulario no encontrado', 'error');
            return;
        }

        const formData = new FormData(form);
        const eventData = {
            title: formData.get('title'),
            description: formData.get('description'),
            date: formData.get('date'),
            time: formData.get('time'),
            duration: parseInt(formData.get('duration')),
            advisor: formData.get('advisor'),
            type: formData.get('type')
        };

        // Validar campos obligatorios
        if (!eventData.title || !eventData.date || !eventData.time) {
            this.showNotification('Por favor complete todos los campos obligatorios', 'error');
            return;
        }

        // Crear fecha y hora combinadas
        const eventDateTime = new Date(`${eventData.date}T${eventData.time}`);
        
        // Crear nueva tarea/evento
        const newTask = {
            id: `event_${Date.now()}`,
            type: eventData.title,
            leadId: null,
            clientName: eventData.description || 'Evento del equipo',
            dueDate: eventDateTime,
            status: 'programada',
            notes: eventData.description,
            advisor: eventData.advisor || 'Todos',
            duration: eventData.duration,
            priority: 'Media',
            createdAt: new Date(),
            isEvent: true
        };

        // Agregar a la lista de tareas
        this.tasks.push(newTask);
        this.saveData();

        // Cerrar modal
        this.closeCreateEventModal();

        // Actualizar calendario
        this.generateManagerWeeklyCalendar();
        this.updateManagerTasksSummary();

        this.showNotification('Evento creado exitosamente', 'success');
    }

    // ==================== FUNCIONES DE DETALLES DE LEADS PARA MANAGER/ADMIN ====================

    showManagerLeadDetails(leadId) {
        console.log('Mostrando detalles del lead para manager:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Lead no encontrado', 'error');
            return;
        }

        const modal = document.getElementById('leadDetailModal');
        const title = document.getElementById('leadDetailTitle');
        const content = document.getElementById('leadDetailContent');

        if (!modal || !title || !content) {
            console.error('Elementos del modal de detalle de lead no encontrados');
            this.showNotification('Error: Modal no encontrado', 'error');
            return;
        }

        title.textContent = `Detalle del Lead: ${lead.name}`;

        // Obtener información adicional del lead
        const interestLevel = lead.interestLevel || lead.interest || 'No especificado';
        const currentCompany = lead.currentCompany || lead.company || 'No especificado';
        const phone = lead.phone || 'No especificado';
        const email = lead.email || 'No especificado';
        const sector = lead.sector || 'No especificado';
        const currentPlanValue = lead.currentPlanValue || 'No especificado';
        const serviceTime = lead.serviceTime || 'No especificado';
        const satisfactionRating = lead.satisfactionRating || 'No especificado';
        const improvementAreas = lead.improvementAreas || 'No especificado';
        const preferredPlan = lead.preferredPlan || 'No especificado';
        const whatsMissing = lead.whatsMissing || 'No especificado';
        const notes = lead.notes || 'Sin notas adicionales';

        content.innerHTML = `
            <div style="background: #f8f9fa; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                    <div>
                        <h4 style="color: #495057; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">📋 Información Básica</h4>
                        <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #dee2e6;">
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Nombre:</strong> ${lead.name}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Empresa Actual:</strong> ${currentCompany}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Teléfono:</strong> ${phone}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Email:</strong> ${email}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Sector:</strong> ${sector}
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 style="color: #495057; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">🎯 Servicio Actual</h4>
                        <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #dee2e6;">
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Valor del Plan Actual:</strong> ${currentPlanValue}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Tiempo de Servicio:</strong> ${serviceTime}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Nivel de Satisfacción:</strong> ${satisfactionRating}
                            </div>
                            <div style="margin-bottom: 0.75rem;">
                                <strong style="color: #495057;">Áreas de Mejora:</strong> ${improvementAreas}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 1.5rem;">
                    <h4 style="color: #495057; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">💡 Interés y Preferencias</h4>
                    <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #dee2e6;">
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">Nivel de Interés:</strong> 
                            <span style="background: #e3f2fd; color: #1976d2; padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.875rem; font-weight: 500;">
                                ${interestLevel}
                            </span>
                        </div>
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">Plan Preferido:</strong> ${preferredPlan}
                        </div>
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">¿Qué le falta?:</strong> ${whatsMissing}
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 1.5rem;">
                    <h4 style="color: #495057; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">👤 Asignación</h4>
                    <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #dee2e6;">
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">Estado:</strong> 
                            <span style="background: #fff3cd; color: #856404; padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.875rem; font-weight: 500;">
                                ${lead.status}
                            </span>
                        </div>
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">Asesor Asignado:</strong> ${lead.advisor || 'Sin asignar'}
                        </div>
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">Fecha de Creación:</strong> ${this.formatDate(lead.createdAt)}
                        </div>
                        <div style="margin-bottom: 0.75rem;">
                            <strong style="color: #495057;">Última Actividad:</strong> ${this.formatDate(lead.lastActivity)}
                        </div>
                    </div>
                </div>
                
                ${notes !== 'Sin notas adicionales' ? `
                <div style="margin-top: 1.5rem;">
                    <h4 style="color: #495057; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">📝 Notas Adicionales</h4>
                    <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #dee2e6;">
                        <p style="margin: 0; color: #495057; line-height: 1.6;">${notes}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        `;

        // Mostrar modal
        modal.style.display = 'flex';
        modal.classList.add('show');
    }

    // Admin Sidebar Navigation
    setupAdminSidebarNavigation() {
        console.log('Configurando navegación del sidebar del admin...');
        
        const sidebarButtons = document.querySelectorAll('.sidebar-btn');
        sidebarButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const section = button.getAttribute('data-section');
                this.showAdminSidebarSection(section);
            });
        });
    }

    showAdminSidebarSection(sectionName) {
        console.log('Cambiando a sección del sidebar:', sectionName);
        
        // Ocultar todas las secciones principales
        document.querySelectorAll('.main-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Actualizar botones del sidebar
        document.querySelectorAll('.sidebar-btn').forEach(button => {
            button.classList.remove('active');
        });
        
        const activeButton = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Cargar contenido específico de la sección
        switch (sectionName) {
            case 'crm-section':
                console.log('Cargando sección CRM...');
                // La sección CRM ya tiene su propia navegación interna
                break;
            case 'user-section':
                console.log('Cargando sección de usuarios...');
                this.loadUsers();
                break;
        }
    }

    // Admin Dashboard Controls
    setupAdminDashboardControls() {
        console.log('Configurando controles del dashboard del admin...');
        
        // Manager filter
        const managerFilter = document.getElementById('managerFilter');
        if (managerFilter) {
            this.populateManagerFilter();
            managerFilter.addEventListener('change', () => {
                this.filterByManager(managerFilter.value);
                this.updateGeneralTeamStatsTable && this.updateGeneralTeamStatsTable();
                this.updateGeneralSalesReport && this.updateGeneralSalesReport();
            });
        }

        // Filtros de tiempo para pestaña Estadísticas
        const yearSelect = document.getElementById('filterYear');
        const monthSelect = document.getElementById('filterMonth');
        const periodType = document.getElementById('timePeriodType');

        if (yearSelect) {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let y = currentYear - 5; y <= currentYear + 2; y++) years.push(y);
            yearSelect.innerHTML = years.map(y => `<option value="${y}" ${y===currentYear?'selected':''}>${y}</option>`).join('');
        }

        const updateMonthVisibility = () => {
            const monthGroup = document.getElementById('monthFilterGroup');
            if (monthGroup && periodType) {
                monthGroup.style.display = periodType.value === 'monthly' ? 'flex' : 'none';
            }
        };
        updateMonthVisibility();

        if (periodType) {
            periodType.addEventListener('change', () => {
                updateMonthVisibility();
                this.updateGeneralTeamStatsTable && this.updateGeneralTeamStatsTable();
                this.updateGeneralSalesReport && this.updateGeneralSalesReport();
            });
        }
        if (monthSelect) {
            monthSelect.addEventListener('change', () => {
                this.updateGeneralTeamStatsTable && this.updateGeneralTeamStatsTable();
                this.updateGeneralSalesReport && this.updateGeneralSalesReport();
            });
        }
        if (yearSelect) {
            yearSelect.addEventListener('change', () => {
                this.updateGeneralTeamStatsTable && this.updateGeneralTeamStatsTable();
                this.updateGeneralSalesReport && this.updateGeneralSalesReport();
            });
        }
    }

    // ====== Estadísticas por Asesor (filtros y UI) ======
    setupAdvisorStatsFilters() {
        const yearSelect = document.getElementById('advisorFilterYear');
        const monthSelect = document.getElementById('advisorFilterMonth');
        const periodType = document.getElementById('advisorPeriodType');
        if (!yearSelect && !monthSelect && !periodType) return;

        // Poblar años
        if (yearSelect) {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let y = currentYear - 5; y <= currentYear + 2; y++) years.push(y);
            yearSelect.innerHTML = years.map(y => `<option value="${y}" ${y===currentYear?'selected':''}>${y}</option>`).join('');
        }

        // Visibilidad del mes
        const updateMonthVisibility = () => {
            const monthGroup = document.getElementById('advisorMonthFilterGroup');
            if (monthGroup && periodType) {
                monthGroup.style.display = periodType.value === 'monthly' ? 'flex' : 'none';
            }
        };
        updateMonthVisibility();

        const onChange = () => this.updateAdvisorStatsUI();
        if (periodType) periodType.addEventListener('change', () => { updateMonthVisibility(); onChange(); });
        if (monthSelect) monthSelect.addEventListener('change', onChange);
        if (yearSelect) yearSelect.addEventListener('change', onChange);
    }

    getAdvisorSelectedRange() {
        const periodTypeEl = document.getElementById('advisorPeriodType');
        const monthEl = document.getElementById('advisorFilterMonth');
        const yearEl = document.getElementById('advisorFilterYear');
        const now = new Date();
        const year = yearEl ? parseInt(yearEl.value || String(now.getFullYear()), 10) : now.getFullYear();
        const isMonthly = !periodTypeEl || periodTypeEl.value === 'monthly';
        if (isMonthly) {
            const month = monthEl ? parseInt(monthEl.value || String(now.getMonth() + 1), 10) : now.getMonth() + 1;
            const startDate = new Date(year, month - 1, 1, 0, 0, 0);
            const endDate = new Date(year, month, 0, 23, 59, 59);
            return { startDate, endDate };
        }
        const startDate = new Date(year, 0, 1, 0, 0, 0);
        const endDate = new Date(year, 11, 31, 23, 59, 59);
        return { startDate, endDate };
    }

    isInAdvisorRange(item) {
        const { startDate, endDate } = this.getAdvisorSelectedRange();
        const raw = item?.date || item?.createdAt || item?.updatedAt || item?.dueDate || item?.fecha || item?.created;
        if (!raw) return true;
        const d = new Date(raw);
        if (isNaN(d.getTime())) return true;
        return d >= startDate && d <= endDate;
    }

    updateAdvisorStatsUI() {
        const tbody = document.getElementById('advisorStatsTableBody');
        if (!tbody) return;

        const advisors = (this.users || []).filter(u => u.role === 'advisor' && u.isActive);
        const leads = this.leads || [];
        const tasks = this.tasks || [];

        const rows = advisors.map(advisor => {
            const advLeads = leads.filter(l => l.advisor === advisor.name && this.isInAdvisorRange(l));
            const advTasks = tasks.filter(t => t.advisor === advisor.name && this.isInAdvisorRange(t));
            const conversions = advLeads.filter(l => l.status === 'Cerrado').length;
            const activeLeads = advLeads.filter(l => l.status !== 'Cerrado').length;
            const rate = advLeads.length > 0 ? ((conversions / advLeads.length) * 100).toFixed(1) : '0.0';
            const lastActivity = advTasks.concat(advLeads)
                .map(x => new Date(x.updatedAt || x.createdAt || x.date || x.lastActivity || 0))
                .reduce((a,b)=> (a>b?a:b), new Date(0));
            const lastStr = isNaN(lastActivity.getTime()) || lastActivity.getTime()===0 ? '-' : lastActivity.toLocaleDateString('es-ES');
            return `
                <tr>
                    <td>${advisor.name}</td>
                    <td>${advLeads.length}</td>
                    <td>${advTasks.length}</td>
                    <td>${conversions}</td>
                    <td>${rate}%</td>
                    <td>${activeLeads}</td>
                    <td>${lastStr}</td>
                </tr>
            `;
        }).join('');

        // Si no hay asesores o datos, mostrar un row con demo para ejemplificar
        if (!rows || rows.trim()==='') {
            tbody.innerHTML = `
                <tr>
                    <td>Asesor Demo</td>
                    <td>12</td>
                    <td>30</td>
                    <td>5</td>
                    <td>41.7%</td>
                    <td>7</td>
                    <td>${new Date().toLocaleDateString('es-ES')}</td>
                </tr>
            `;
        } else {
            tbody.innerHTML = rows;
        }
    }

    populateManagerFilter() {
        const managerFilter = document.getElementById('managerFilter');
        if (!managerFilter) return;
        
        // Clear existing options except "all"
        managerFilter.innerHTML = '<option value="all">Todos los Gerentes</option>';
        
        // Get all managers
        const managers = this.users.filter(user => user.role === 'manager' && user.isActive);
        
        managers.forEach(manager => {
            const option = document.createElement('option');
            option.value = manager.id;
            option.textContent = manager.name;
            managerFilter.appendChild(option);
        });
        
        console.log('Filtro de gerentes poblado:', managers.length, 'gerentes');
    }

    updateManagersDashboard() {
        console.log('Actualizando dashboard de gerentes...');
        
        const managersGrid = document.getElementById('managersGrid');
        if (!managersGrid) return;
        
        // Get all managers
        const managers = this.users.filter(user => user.role === 'manager' && user.isActive);
        
        if (managers.length === 0) {
            managersGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b; background: #f8fafc; border-radius: 12px; border: 2px dashed #e2e8f0;">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">👥</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #334155;">Sin Gerentes de Ventas</h3>
                    <p style="margin: 0; font-size: 1rem;">No hay gerentes de ventas registrados en el sistema</p>
                </div>
            `;
            return;
        }
        
        // Generate manager cards
        managersGrid.innerHTML = managers.map(manager => this.createManagerCard(manager)).join('');
        // También refrescar la pestaña de estadísticas (tabla y gráfico), si existe
        this.updateGeneralTeamStatsTable && this.updateGeneralTeamStatsTable();
        
        console.log('Dashboard de gerentes actualizado:', managers.length, 'gerentes');
    }

    createManagerCard(manager) {
        // Get manager's advisors
        const advisors = this.users.filter(user => 
            user.role === 'advisor' && 
            user.managerId === manager.id && 
            user.isActive
        );
        
        // Get manager's leads (through advisors)
        const managerLeads = this.leads.filter(lead => 
            advisors.some(advisor => lead.advisor === advisor.name)
        );
        
        // Get manager's tasks
        const managerTasks = this.tasks.filter(task => 
            advisors.some(advisor => task.advisor === advisor.name)
        );
        
        // Calculate statistics
        const totalLeads = managerLeads.length;
        const totalTasks = managerTasks.length;
        const conversions = managerLeads.filter(lead => lead.status === 'Cerrado').length;
        const conversionRate = totalLeads > 0 ? (conversions / totalLeads * 100).toFixed(1) : 0;
        const activeLeads = managerLeads.filter(lead => lead.status !== 'Cerrado').length;
        
        // Get period for comparison
        const period = document.getElementById('periodSelect')?.value || 'monthly';
        const periodStats = this.getManagerPeriodStats(manager.id, period);
        
        return `
            <div class="manager-card" data-manager-id="${manager.id}">
                <div class="manager-header">
                    <div class="manager-info">
                        <h4>${manager.name}</h4>
                        <p>${advisors.length} asesor${advisors.length !== 1 ? 'es' : ''} asignado${advisors.length !== 1 ? 's' : ''}</p>
                    </div>
                    <div class="manager-status ${manager.isActive ? 'active' : 'inactive'}">
                        ${manager.isActive ? 'Activo' : 'Inactivo'}
                    </div>
                </div>
                
                <div class="manager-stats">
                    <div class="manager-stat">
                        <div class="manager-stat-value">${totalLeads}</div>
                        <div class="manager-stat-label">Total Leads</div>
                    </div>
                    <div class="manager-stat">
                        <div class="manager-stat-value">${conversions}</div>
                        <div class="manager-stat-label">Conversiones</div>
                    </div>
                    <div class="manager-stat">
                        <div class="manager-stat-value">${conversionRate}%</div>
                        <div class="manager-stat-label">Tasa Conversión</div>
                    </div>
                    <div class="manager-stat">
                        <div class="manager-stat-value">${activeLeads}</div>
                        <div class="manager-stat-label">Leads Activos</div>
                    </div>
                </div>
                
                <div class="advisor-list">
                    <h5>👥 Asesores Asignados</h5>
                    ${advisors.length > 0 ? 
                        advisors.map(advisor => this.createAdvisorItem(advisor)).join('') :
                        '<p style="text-align: center; color: #64748b; font-style: italic;">Sin asesores asignados</p>'
                    }
                </div>
            </div>
        `;
    }

    createAdvisorItem(advisor) {
        // Get advisor's leads
        const advisorLeads = this.leads.filter(lead => lead.advisor === advisor.name);
        const advisorTasks = this.tasks.filter(task => task.advisor === advisor.name);
        const advisorConversions = advisorLeads.filter(lead => lead.status === 'Cerrado').length;
        
        return `
            <div class="advisor-item">
                <div class="advisor-name">${advisor.name}</div>
                <div class="advisor-stats">
                    <div class="advisor-stat">
                        <div class="advisor-stat-value">${advisorLeads.length}</div>
                        <div class="advisor-stat-label">Leads</div>
                    </div>
                    <div class="advisor-stat">
                        <div class="advisor-stat-value">${advisorConversions}</div>
                        <div class="advisor-stat-label">Conversiones</div>
                    </div>
                    <div class="advisor-stat">
                        <div class="advisor-stat-value">${advisorTasks.length}</div>
                        <div class="advisor-stat-label">Tareas</div>
                    </div>
                </div>
            </div>
        `;
    }

    getManagerPeriodStats(managerId, period) {
        // This would calculate period-specific statistics
        // For now, return basic stats
        return {
            leads: 0,
            conversions: 0,
            tasks: 0,
            conversionRate: 0
        };
    }

    filterByManager(managerId) {
        console.log('Filtrando por gerente:', managerId);
        
        if (managerId === 'all') {
            // Show all managers
            document.querySelectorAll('.manager-card').forEach(card => {
                card.style.display = 'block';
            });
        } else {
            // Show only selected manager
            document.querySelectorAll('.manager-card').forEach(card => {
                const cardManagerId = card.getAttribute('data-manager-id');
                card.style.display = cardManagerId === managerId ? 'block' : 'none';
            });
        }
    }

    updateAdvisorsKPIs() {
        console.log('Actualizando KPIs de asesores...');
        
        const kpisGrid = document.getElementById('kpisSummaryGrid');
        if (!kpisGrid) return;
        
        // Get all advisors
        const advisors = this.users.filter(user => user.role === 'advisor' && user.isActive);
        
        if (advisors.length === 0) {
            kpisGrid.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #64748b; background: #f8fafc; border-radius: 8px;">
                    <div style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;">👥</div>
                    <h4 style="margin: 0 0 0.5rem 0; color: #334155;">Sin Asesores Registrados</h4>
                    <p style="margin: 0; font-size: 0.9rem;">No hay asesores activos en el sistema</p>
                </div>
            `;
            return;
        }
        
        // Generate advisor KPI cards
        kpisGrid.innerHTML = advisors.map(advisor => this.createAdvisorKPICard(advisor)).join('');
        
        console.log('KPIs de asesores actualizados:', advisors.length, 'asesores');
    }

    // Renderiza gráfico de barras en la pestaña Estadísticas
    renderTeamStatsBarChart(advisors) {
        const canvas = document.getElementById('teamStatsBarChart');
        if (!canvas) return;

        const chartData = this.getTeamStatsForDateRange();
        
        if (this._teamStatsBarChart) {
            this._teamStatsBarChart.destroy();
        }

        const ctx = canvas.getContext('2d');
        this._teamStatsBarChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [
                    { 
                        label: 'Leads', 
                        data: chartData.leadsData, 
                        borderColor: '#2563eb',
                        backgroundColor: '#2563eb20',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Acciones', 
                        data: chartData.actionsData, 
                        borderColor: '#10b981',
                        backgroundColor: '#10b98120',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Conversiones', 
                        data: chartData.conversionsData, 
                        borderColor: '#f59e0b',
                        backgroundColor: '#f59e0b20',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
                plugins: { legend: { position: 'top' } }
            }
        });
    }

    createAdvisorKPICard(advisor) {
        // Get advisor's leads and tasks
        const advisorLeads = this.leads.filter(lead => lead.advisor === advisor.name);
        const advisorTasks = this.tasks.filter(task => task.advisor === advisor.name);
        
        // Calculate KPIs
        const dailyGoal = 5; // Meta diaria de leads
        const weeklyGoal = 3; // Meta semanal de conversiones
        const dailyActionsGoal = 20; // Meta diaria de acciones
        
        const dailyLeads = advisorLeads.length;
        const weeklyConversions = advisorLeads.filter(lead => lead.status === 'Cerrado').length;
        const dailyActions = advisorTasks.length;
        
        const dailyLeadsProgress = Math.min((dailyLeads / dailyGoal) * 100, 100);
        const weeklyConversionsProgress = Math.min((weeklyConversions / weeklyGoal) * 100, 100);
        const dailyActionsProgress = Math.min((dailyActions / dailyActionsGoal) * 100, 100);
        
        // Determine overall status
        const avgProgress = (dailyLeadsProgress + weeklyConversionsProgress + dailyActionsProgress) / 3;
        let status = 'needs-improvement';
        let statusText = 'NECESITA MEJORA';
        
        if (avgProgress >= 80) {
            status = 'excellent';
            statusText = 'EXCELENTE';
        } else if (avgProgress >= 60) {
            status = 'good';
            statusText = 'BUENO';
        }
        
        // Determine percentage class
        const getPercentageClass = (progress) => {
            if (progress >= 80) return 'high';
            if (progress >= 50) return 'medium';
            return 'low';
        };
        
        return `
            <div class="advisor-kpi-card">
                <div class="advisor-kpi-header">
                    <div class="advisor-kpi-name">
                        <span>👤</span>
                        <span>${advisor.name}</span>
                    </div>
                    <div class="advisor-kpi-status ${status}">${statusText}</div>
                </div>
                
                <div class="advisor-kpi-metrics">
                    <div class="advisor-kpi-metric">
                        <div class="advisor-kpi-metric-icon">📈</div>
                        <div class="advisor-kpi-metric-title">Meta Diaria de Leads</div>
                        <div class="advisor-kpi-metric-progress">${dailyLeads}/${dailyGoal}</div>
                        <div class="advisor-kpi-metric-percentage ${getPercentageClass(dailyLeadsProgress)}">
                            ${dailyLeadsProgress.toFixed(0)}%
                        </div>
                    </div>
                    
                    <div class="advisor-kpi-metric">
                        <div class="advisor-kpi-metric-icon">🎯</div>
                        <div class="advisor-kpi-metric-title">Meta Semanal de Conversiones</div>
                        <div class="advisor-kpi-metric-progress">${weeklyConversions}/${weeklyGoal}</div>
                        <div class="advisor-kpi-metric-percentage ${getPercentageClass(weeklyConversionsProgress)}">
                            ${weeklyConversionsProgress.toFixed(0)}%
                        </div>
                    </div>
                    
                    <div class="advisor-kpi-metric">
                        <div class="advisor-kpi-metric-icon">⚡</div>
                        <div class="advisor-kpi-metric-title">Acciones del Día</div>
                        <div class="advisor-kpi-metric-progress">${dailyActions}/${dailyActionsGoal}</div>
                        <div class="advisor-kpi-metric-percentage ${getPercentageClass(dailyActionsProgress)}">
                            ${dailyActionsProgress.toFixed(0)}%
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    updateElement(elementId, value) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
        }
    }

    // Funciones para métricas generales
    setupGeneralMetricsFilters() {
        console.log('Configurando filtros de métricas generales...');
        
        // Filtros de rango de fechas para métricas generales
        const startYearSelect = document.getElementById('generalStartYear');
        const endYearSelect = document.getElementById('generalEndYear');
        const startMonthSelect = document.getElementById('generalStartMonth');
        const endMonthSelect = document.getElementById('generalEndMonth');

        // Poblar años
        if (startYearSelect && endYearSelect) {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let y = currentYear - 5; y <= currentYear + 2; y++) years.push(y);
            const yearOptions = years.map(y => `<option value="${y}" ${y===currentYear?'selected':''}>${y}</option>`).join('');
            startYearSelect.innerHTML = yearOptions;
            endYearSelect.innerHTML = yearOptions;
        }

        // Configurar valores por defecto (Enero 2025 - Mayo 2025)
        if (startMonthSelect) startMonthSelect.value = '1';
        if (endMonthSelect) endMonthSelect.value = '5';
        if (startYearSelect) startYearSelect.value = '2025';
        if (endYearSelect) endYearSelect.value = '2025';

        // Event listeners
        if (startMonthSelect) {
            startMonthSelect.addEventListener('change', () => this.updateGeneralMetricsUI());
        }
        if (startYearSelect) {
            startYearSelect.addEventListener('change', () => this.updateGeneralMetricsUI());
        }
        if (endMonthSelect) {
            endMonthSelect.addEventListener('change', () => this.updateGeneralMetricsUI());
        }
        if (endYearSelect) {
            endYearSelect.addEventListener('change', () => this.updateGeneralMetricsUI());
        }
    }

    updateGeneralMetricsUI() {
        console.log('Actualizando UI de métricas generales...');
        this.updateGeneralMetricsCards();
        this.updateGeneralMetricsTable();
        this.renderGeneralMetricsChart();
    }

    updateGeneralMetricsCards() {
        const metrics = this.getGeneralMetricsForSelectedRange();
        
        // Actualizar tarjetas de métricas
        this.updateElement('totalSalesCount', metrics.totalSales);
        this.updateElement('totalLostCount', metrics.totalLost);
        this.updateElement('totalProspectsCount', metrics.totalProspects);
        this.updateElement('conversionRate', `${metrics.conversionRate}%`);
    }

    updateGeneralMetricsTable() {
        const tbody = document.getElementById('generalMetricsTableBody');
        if (!tbody) return;

        const monthlyData = this.getGeneralMetricsMonthlyData();
        
        if (monthlyData.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 2rem; color: #64748b;">
                        No hay datos para el rango seleccionado
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = monthlyData.map(month => `
            <tr>
                <td style="padding: 0.75rem; font-weight: 600; color: var(--text-primary);">${month.monthName}</td>
                <td style="padding: 0.75rem; text-align: center; color: #059669; font-weight: 600;">${month.sales}</td>
                <td style="padding: 0.75rem; text-align: center; color: #dc2626; font-weight: 600;">${month.lost}</td>
                <td style="padding: 0.75rem; text-align: center; color: #d97706; font-weight: 600;">${month.prospects}</td>
                <td style="padding: 0.75rem; text-align: center; color: #059669; font-weight: 600;">${month.conversionRate}%</td>
            </tr>
        `).join('');
    }

    getGeneralMetricsForSelectedRange() {
        const startYear = parseInt(document.getElementById('generalStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('generalStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('generalEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('generalEndMonth')?.value || 5);

        // Filtrar leads por rango de fechas
        const rangeLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            const leadYear = leadDate.getFullYear();
            const leadMonth = leadDate.getMonth() + 1;
            
            return (leadYear > startYear || (leadYear === startYear && leadMonth >= startMonth)) &&
                   (leadYear < endYear || (leadYear === endYear && leadMonth <= endMonth));
        });

        // Calcular métricas
        const totalSales = rangeLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
        const totalLost = rangeLeads.filter(lead => lead.status === 'Perdido').length;
        const totalProspects = rangeLeads.filter(lead => 
            lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido'
        ).length;
        const totalLeads = rangeLeads.length;
        const conversionRate = totalLeads > 0 ? ((totalSales / totalLeads) * 100).toFixed(1) : 0;

        // Si no hay datos, mostrar ceros
        if (totalLeads === 0) {
            return {
                totalSales: 0,
                totalLost: 0,
                totalProspects: 0,
                conversionRate: 0
            };
        }

        return {
            totalSales,
            totalLost,
            totalProspects,
            conversionRate: parseFloat(conversionRate)
        };
    }

    getGeneralMetricsMonthlyData() {
        const startYear = parseInt(document.getElementById('generalStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('generalStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('generalEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('generalEndMonth')?.value || 5);

        const monthlyData = [];
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        let currentYear = startYear;
        let currentMonth = startMonth;
        
        while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
            const monthLeads = this.leads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === currentYear && leadDate.getMonth() + 1 === currentMonth;
            });

            const sales = monthLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
            const lost = monthLeads.filter(lead => lead.status === 'Perdido').length;
            const prospects = monthLeads.filter(lead => 
                lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido'
            ).length;
            const total = monthLeads.length;
            const conversionRate = total > 0 ? ((sales / total) * 100).toFixed(1) : 0;

            monthlyData.push({
                monthName: `${monthNames[currentMonth - 1]} ${currentYear}`,
                sales,
                lost,
                prospects,
                conversionRate: parseFloat(conversionRate)
            });
            
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }
        }

        return monthlyData;
    }

    renderGeneralMetricsChart() {
        const canvas = document.getElementById('generalMetricsChart');
        if (!canvas || !window.Chart) return;

        const chartData = this.getGeneralMetricsChartData();
        
        if (this._generalMetricsChart) {
            this._generalMetricsChart.destroy();
        }

        const ctx = canvas.getContext('2d');
        this._generalMetricsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [
                    { 
                        label: 'Ventas', 
                        data: chartData.salesData, 
                        borderColor: '#059669',
                        backgroundColor: '#05966920',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Perdidos', 
                        data: chartData.lostData, 
                        borderColor: '#dc2626',
                        backgroundColor: '#dc262620',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Prospectos', 
                        data: chartData.prospectsData, 
                        borderColor: '#d97706',
                        backgroundColor: '#d9770620',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 0
                },
                scales: { 
                    y: { 
                        beginAtZero: true, 
                        ticks: { 
                            precision: 0,
                            stepSize: 10
                        },
                        grid: {
                            display: true,
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: true,
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                },
                plugins: { 
                    legend: { 
                        display: true,
                        position: 'top'
                    } 
                }
            }
        });
    }

    getGeneralMetricsChartData() {
        const startYear = parseInt(document.getElementById('generalStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('generalStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('generalEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('generalEndMonth')?.value || 5);

        let labels = [];
        let salesData = [];
        let lostData = [];
        let prospectsData = [];

        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        
        let currentYear = startYear;
        let currentMonth = startMonth;
        
        while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
            labels.push(`${monthNames[currentMonth - 1]} ${currentYear}`);
            
            const monthLeads = this.leads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === currentYear && leadDate.getMonth() + 1 === currentMonth;
            });

            const sales = monthLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
            const lost = monthLeads.filter(lead => lead.status === 'Perdido').length;
            const prospects = monthLeads.filter(lead => 
                lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido'
            ).length;

            salesData.push(sales);
            lostData.push(lost);
            prospectsData.push(prospects);
            
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }
        }

        // Si no hay datos, mostrar arrays vacíos
        if (salesData.length === 0 || salesData.every(v => v === 0)) {
            labels = [];
            salesData = [];
            lostData = [];
            prospectsData = [];
        }

        return {
            labels,
            salesData,
            lostData,
            prospectsData
        };
    }

    // Funciones para estadísticas de leads
    setupLeadsStatsFilters() {
        console.log('Configurando filtros de estadísticas de leads...');
        
        // Filtros de rango de fechas para estadísticas de leads
        const startYearSelect = document.getElementById('leadsStartYear');
        const endYearSelect = document.getElementById('leadsEndYear');
        const startMonthSelect = document.getElementById('leadsStartMonth');
        const endMonthSelect = document.getElementById('leadsEndMonth');

        // Poblar años
        if (startYearSelect && endYearSelect) {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let y = currentYear - 5; y <= currentYear + 2; y++) years.push(y);
            const yearOptions = years.map(y => `<option value="${y}" ${y===currentYear?'selected':''}>${y}</option>`).join('');
            startYearSelect.innerHTML = yearOptions;
            endYearSelect.innerHTML = yearOptions;
        }

        // Configurar valores por defecto (Enero 2025 - Mayo 2025)
        if (startMonthSelect) startMonthSelect.value = '1';
        if (endMonthSelect) endMonthSelect.value = '5';
        if (startYearSelect) startYearSelect.value = '2025';
        if (endYearSelect) endYearSelect.value = '2025';

        // Event listeners
        if (startMonthSelect) {
            startMonthSelect.addEventListener('change', () => this.updateLeadsStatsUI());
        }
        if (startYearSelect) {
            startYearSelect.addEventListener('change', () => this.updateLeadsStatsUI());
        }
        if (endMonthSelect) {
            endMonthSelect.addEventListener('change', () => this.updateLeadsStatsUI());
        }
        if (endYearSelect) {
            endYearSelect.addEventListener('change', () => this.updateLeadsStatsUI());
        }
    }

    updateLeadsStatsUI() {
        console.log('Actualizando UI de estadísticas de leads...');
        this.updateLeadsStatsCards();
        this.updateLeadsStatsTable();
        this.updateLeadsStatsChart();
    }

    updateLeadsStatsCards() {
        const stats = this.getLeadsStatsForSelectedRange();
        
        // Actualizar tarjetas de estadísticas
        this.updateElement('totalLeadsCount', stats.totalLeads);
        this.updateElement('convertedLeadsCount', stats.convertedLeads);
        this.updateElement('activeLeadsCount', stats.activeLeads);
        this.updateElement('lostLeadsCount', stats.lostLeads);
        this.updateElement('leadsConversionRate', `${stats.conversionRate}%`);
        this.updateElement('monthlyAverage', stats.monthlyAverage);
    }

    updateLeadsStatsTable() {
        const tbody = document.getElementById('leadsStatsTableBody');
        if (!tbody) return;

        const stats = this.getLeadsStatsForSelectedRange();
        const periodType = document.getElementById('leadsPeriodType')?.value || 'monthly';
        const year = document.getElementById('leadsFilterYear')?.value || new Date().getFullYear();
        const month = document.getElementById('leadsFilterMonth')?.value || new Date().getMonth() + 1;

        let periodLabel = '';
        if (periodType === 'monthly') {
            const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                              'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            periodLabel = `${monthNames[month - 1]} ${year}`;
        } else {
            periodLabel = `Año ${year}`;
        }

        tbody.innerHTML = `
            <tr>
                <td>${periodLabel}</td>
                <td>${stats.totalLeads}</td>
                <td>${stats.convertedLeads}</td>
                <td>${stats.activeLeads}</td>
                <td>${stats.lostLeads}</td>
                <td>${stats.conversionRate}%</td>
            </tr>
        `;
    }

    updateLeadsStatsChart() {
        const canvas = document.getElementById('leadsStatsChart');
        if (!canvas || !window.Chart) return;

        const chartData = this.getLeadsStatsForDateRange();
        
        if (this._leadsStatsChart) this._leadsStatsChart.destroy();
        
        this._leadsStatsChart = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: { 
                labels: chartData.labels, 
                datasets: [
                    { 
                        label: 'Total Leads', 
                        data: chartData.totalLeads,
                        borderColor: '#2563eb',
                        backgroundColor: '#2563eb20',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Convertidos', 
                        data: chartData.convertedLeads,
                        borderColor: '#10b981',
                        backgroundColor: '#10b98120',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Activos', 
                        data: chartData.activeLeads,
                        borderColor: '#f59e0b',
                        backgroundColor: '#f59e0b20',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Perdidos', 
                        data: chartData.lostLeads,
                        borderColor: '#ef4444',
                        backgroundColor: '#ef444420',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                scales: { 
                    y: { 
                        beginAtZero: true, 
                        ticks: { precision: 0 } 
                    } 
                },
                plugins: { 
                    legend: { 
                        display: true,
                        position: 'top'
                    } 
                }
            }
        });
    }

    getLeadsStatsForSelectedRange() {
        const periodType = document.getElementById('leadsPeriodType')?.value || 'monthly';
        const year = parseInt(document.getElementById('leadsFilterYear')?.value || new Date().getFullYear());
        const month = parseInt(document.getElementById('leadsFilterMonth')?.value || new Date().getMonth() + 1);

        let filteredLeads = this.leads || [];
        
        // Filtrar por rango de fechas
        if (periodType === 'monthly') {
            filteredLeads = filteredLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === year && leadDate.getMonth() + 1 === month;
            });
        } else {
            filteredLeads = filteredLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === year;
            });
        }

        // Calcular estadísticas
        const totalLeads = filteredLeads.length;
        const convertedLeads = filteredLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
        const activeLeads = filteredLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length;
        const lostLeads = filteredLeads.filter(lead => lead.status === 'Perdido').length;
        const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;
        
        // Calcular promedio mensual (últimos 12 meses)
        const monthlyAverage = this.calculateMonthlyAverage();

        // Fallback demo si no hay datos
        if (totalLeads === 0 && convertedLeads === 0 && activeLeads === 0 && lostLeads === 0) {
            return {
                totalLeads: 25,
                convertedLeads: 8,
                activeLeads: 12,
                lostLeads: 5,
                conversionRate: 32.0,
                monthlyAverage: 20
            };
        }

        return {
            totalLeads,
            convertedLeads,
            activeLeads,
            lostLeads,
            conversionRate: parseFloat(conversionRate),
            monthlyAverage
        };
    }

    calculateMonthlyAverage() {
        const currentYear = new Date().getFullYear();
        const monthlyTotals = [];
        
        for (let month = 1; month <= 12; month++) {
            const monthLeads = this.leads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === currentYear && leadDate.getMonth() + 1 === month;
            });
            monthlyTotals.push(monthLeads.length);
        }
        
        return Math.round(monthlyTotals.reduce((sum, total) => sum + total, 0) / 12);
    }

    // Funciones para estadísticas de clientes
    setupClientsStatsFilters() {
        console.log('Configurando filtros de estadísticas de clientes...');
        
        // Filtros de rango de fechas para estadísticas de clientes
        const startYearSelect = document.getElementById('clientsStartYear');
        const endYearSelect = document.getElementById('clientsEndYear');
        const startMonthSelect = document.getElementById('clientsStartMonth');
        const endMonthSelect = document.getElementById('clientsEndMonth');

        // Poblar años
        if (startYearSelect && endYearSelect) {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let y = currentYear - 5; y <= currentYear + 2; y++) years.push(y);
            const yearOptions = years.map(y => `<option value="${y}" ${y===currentYear?'selected':''}>${y}</option>`).join('');
            startYearSelect.innerHTML = yearOptions;
            endYearSelect.innerHTML = yearOptions;
        }

        // Configurar valores por defecto (Enero 2025 - Mayo 2025)
        if (startMonthSelect) startMonthSelect.value = '1';
        if (endMonthSelect) endMonthSelect.value = '5';
        if (startYearSelect) startYearSelect.value = '2025';
        if (endYearSelect) endYearSelect.value = '2025';

        // Event listeners
        if (startMonthSelect) {
            startMonthSelect.addEventListener('change', () => this.updateClientsStatsUI());
        }
        if (startYearSelect) {
            startYearSelect.addEventListener('change', () => this.updateClientsStatsUI());
        }
        if (endMonthSelect) {
            endMonthSelect.addEventListener('change', () => this.updateClientsStatsUI());
        }
        if (endYearSelect) {
            endYearSelect.addEventListener('change', () => this.updateClientsStatsUI());
        }
    }

    updateClientsStatsUI() {
        console.log('Actualizando UI de estadísticas de clientes...');
        this.updateClientsStatsCards();
        this.updateClientsStatsTable();
        this.updateClientsStatsChart();
    }

    // Funciones para estadísticas por asesor con rango de fechas
    setupAdvisorStatsFilters() {
        console.log('Configurando filtros de estadísticas por asesor...');
        
        // Filtros de rango de fechas para estadísticas por asesor
        const startYearSelect = document.getElementById('advisorStartYear');
        const endYearSelect = document.getElementById('advisorEndYear');
        const startMonthSelect = document.getElementById('advisorStartMonth');
        const endMonthSelect = document.getElementById('advisorEndMonth');

        // Poblar años
        if (startYearSelect && endYearSelect) {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let y = currentYear - 5; y <= currentYear + 2; y++) years.push(y);
            const yearOptions = years.map(y => `<option value="${y}" ${y===currentYear?'selected':''}>${y}</option>`).join('');
            startYearSelect.innerHTML = yearOptions;
            endYearSelect.innerHTML = yearOptions;
        }

        // Configurar valores por defecto (Enero 2025 - Mayo 2025)
        if (startMonthSelect) startMonthSelect.value = '1';
        if (endMonthSelect) endMonthSelect.value = '5';
        if (startYearSelect) startYearSelect.value = '2025';
        if (endYearSelect) endYearSelect.value = '2025';

        // Event listeners
        if (startMonthSelect) {
            startMonthSelect.addEventListener('change', () => this.updateAdvisorStatsUI());
        }
        if (startYearSelect) {
            startYearSelect.addEventListener('change', () => this.updateAdvisorStatsUI());
        }
        if (endMonthSelect) {
            endMonthSelect.addEventListener('change', () => this.updateAdvisorStatsUI());
        }
        if (endYearSelect) {
            endYearSelect.addEventListener('change', () => this.updateAdvisorStatsUI());
        }
    }

    updateAdvisorStatsUI() {
        console.log('Actualizando UI de estadísticas por asesor...');
        this.updateAdvisorStatsCards();
        this.updateAdvisorStatsTable();
    }

    updateAdvisorStatsCards() {
        // Obtener estadísticas para el rango seleccionado
        const stats = this.getAdvisorStatsForSelectedRange();
        
        // Actualizar tarjetas
        this.updateElement('totalAdvisors', stats.totalAdvisors);
        this.updateElement('totalAssignedLeads', stats.totalLeads);
        this.updateElement('teamConversions', stats.totalConversions);
        this.updateElement('teamConversionRate', `${stats.conversionRate}%`);
    }

    updateAdvisorStatsTable() {
        const tableBody = document.getElementById('advisorStatsTableBody');
        if (!tableBody) return;

        const advisorsStats = this.getDetailedAdvisorStatsForRange();
        
        if (advisorsStats.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 2rem; color: #64748b;">
                        No hay datos para el rango seleccionado
                    </td>
                </tr>
            `;
            return;
        }

        tableBody.innerHTML = advisorsStats.map(advisor => `
            <tr>
                <td><strong>${advisor.name}</strong></td>
                <td>${advisor.leadsAssigned}</td>
                <td>${advisor.actionsPerformed}</td>
                <td>${advisor.conversions}</td>
                <td>${advisor.conversionRate}%</td>
                <td>${advisor.activeLeads}</td>
                <td>${advisor.lastActivity}</td>
            </tr>
        `).join('');
    }

    getAdvisorStatsForSelectedRange() {
        const startYear = parseInt(document.getElementById('advisorStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('advisorStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('advisorEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('advisorEndMonth')?.value || 5);

        // Obtener todos los asesores
        const advisors = this.users.filter(user => user.role === 'advisor' && user.isActive);
        
        // Filtrar leads por rango de fechas
        const rangeLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            const leadYear = leadDate.getFullYear();
            const leadMonth = leadDate.getMonth() + 1;
            
            return (leadYear > startYear || (leadYear === startYear && leadMonth >= startMonth)) &&
                   (leadYear < endYear || (leadYear === endYear && leadMonth <= endMonth));
        });

        // Filtrar tareas por rango de fechas
        const rangeTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.createdAt || task.dueDate || task.fecha);
            const taskYear = taskDate.getFullYear();
            const taskMonth = taskDate.getMonth() + 1;
            
            return (taskYear > startYear || (taskYear === startYear && taskMonth >= startMonth)) &&
                   (taskYear < endYear || (taskYear === endYear && taskMonth <= endMonth));
        });

        const totalLeads = rangeLeads.length;
        const totalConversions = rangeLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
        const conversionRate = totalLeads > 0 ? ((totalConversions / totalLeads) * 100).toFixed(1) : 0;

        return {
            totalAdvisors: advisors.length,
            totalLeads,
            totalConversions,
            conversionRate: parseFloat(conversionRate)
        };
    }

    getDetailedAdvisorStatsForRange() {
        const startYear = parseInt(document.getElementById('advisorStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('advisorStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('advisorEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('advisorEndMonth')?.value || 5);

        // Obtener todos los asesores
        const advisors = this.users.filter(user => user.role === 'advisor' && user.isActive);
        
        return advisors.map(advisor => {
            // Filtrar leads del asesor por rango de fechas
            const advisorLeads = this.leads.filter(lead => {
                if (lead.advisor !== advisor.name) return false;
                
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                const leadYear = leadDate.getFullYear();
                const leadMonth = leadDate.getMonth() + 1;
                
                return (leadYear > startYear || (leadYear === startYear && leadMonth >= startMonth)) &&
                       (leadYear < endYear || (leadYear === endYear && leadMonth <= endMonth));
            });

            // Filtrar tareas del asesor por rango de fechas
            const advisorTasks = this.tasks.filter(task => {
                if (task.advisor !== advisor.name) return false;
                
                const taskDate = new Date(task.createdAt || task.dueDate || task.fecha);
                const taskYear = taskDate.getFullYear();
                const taskMonth = taskDate.getMonth() + 1;
                
                return (taskYear > startYear || (taskYear === startYear && taskMonth >= startMonth)) &&
                       (taskYear < endYear || (taskYear === endYear && taskMonth <= endMonth));
            });

            const conversions = advisorLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
            const activeLeads = advisorLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length;
            const conversionRate = advisorLeads.length > 0 ? ((conversions / advisorLeads.length) * 100).toFixed(1) : 0;
            
            // Obtener última actividad
            const lastActivity = advisorLeads.length > 0 ? 
                Math.max(...advisorLeads.map(lead => new Date(lead.lastActivity || lead.createdAt).getTime())) : null;
            const lastActivityText = lastActivity ? 
                this.formatDate(new Date(lastActivity)) : 'Sin actividad';

            return {
                name: advisor.name,
                leadsAssigned: advisorLeads.length,
                actionsPerformed: advisorTasks.length,
                conversions,
                conversionRate: parseFloat(conversionRate),
                activeLeads,
                lastActivity: lastActivityText
            };
        });
    }

    updateClientsStatsCards() {
        const stats = this.getClientsStatsForSelectedRange();
        
        // Actualizar tarjetas de estadísticas
        this.updateElement('totalClientsCount', stats.totalClients);
        this.updateElement('fidelizedClientsCount', stats.fidelizedClients);
        this.updateElement('potentialClientsCount', stats.potentialClients);
        this.updateElement('activeClientsCount', stats.activeClients);
        this.updateElement('lostClientsCount', stats.lostClients);
        this.updateElement('fidelizationRate', `${stats.fidelizationRate}%`);
    }

    updateClientsStatsTable() {
        const tbody = document.getElementById('clientsStatsTableBody');
        if (!tbody) return;

        const stats = this.getClientsStatsForSelectedRange();
        const periodType = document.getElementById('clientsPeriodType')?.value || 'monthly';
        const year = document.getElementById('clientsFilterYear')?.value || new Date().getFullYear();
        const month = document.getElementById('clientsFilterMonth')?.value || new Date().getMonth() + 1;

        let periodLabel = '';
        if (periodType === 'monthly') {
            const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                              'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            periodLabel = `${monthNames[month - 1]} ${year}`;
        } else {
            periodLabel = `Año ${year}`;
        }

        tbody.innerHTML = `
            <tr>
                <td>${periodLabel}</td>
                <td>${stats.totalClients}</td>
                <td>${stats.fidelizedClients}</td>
                <td>${stats.potentialClients}</td>
                <td>${stats.activeClients}</td>
                <td>${stats.lostClients}</td>
                <td>${stats.fidelizationRate}%</td>
            </tr>
        `;
    }

    updateClientsStatsChart() {
        const canvas = document.getElementById('clientsStatsChart');
        if (!canvas || !window.Chart) return;

        const chartData = this.getClientsStatsForDateRange();
        
        if (this._clientsStatsChart) this._clientsStatsChart.destroy();
        
        this._clientsStatsChart = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: { 
                labels: chartData.labels, 
                datasets: [
                    { 
                        label: 'Total Clientes', 
                        data: chartData.totalClients,
                        borderColor: '#2563eb',
                        backgroundColor: '#2563eb20',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Fidelizados', 
                        data: chartData.fidelizedClients,
                        borderColor: '#10b981',
                        backgroundColor: '#10b98120',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Potenciales', 
                        data: chartData.potentialClients,
                        borderColor: '#f59e0b',
                        backgroundColor: '#f59e0b20',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Activos', 
                        data: chartData.activeClients,
                        borderColor: '#06b6d4',
                        backgroundColor: '#06b6d420',
                        tension: 0.4,
                        fill: false
                    },
                    { 
                        label: 'Perdidos', 
                        data: chartData.lostClients,
                        borderColor: '#ef4444',
                        backgroundColor: '#ef444420',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                scales: { 
                    y: { 
                        beginAtZero: true, 
                        ticks: { precision: 0 } 
                    } 
                },
                plugins: { 
                    legend: { 
                        display: true,
                        position: 'top'
                    } 
                }
            }
        });
    }

    getClientsStatsForSelectedRange() {
        const periodType = document.getElementById('clientsPeriodType')?.value || 'monthly';
        const year = parseInt(document.getElementById('clientsFilterYear')?.value || new Date().getFullYear());
        const month = parseInt(document.getElementById('clientsFilterMonth')?.value || new Date().getMonth() + 1);

        // Obtener leads que se convirtieron en clientes
        let clientLeads = this.leads || [];
        
        // Filtrar por rango de fechas
        if (periodType === 'monthly') {
            clientLeads = clientLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === year && leadDate.getMonth() + 1 === month;
            });
        } else {
            clientLeads = clientLeads.filter(lead => {
                const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
                return leadDate.getFullYear() === year;
            });
        }

        // Calcular estadísticas de clientes
        const totalClients = clientLeads.length;
        const fidelizedClients = clientLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length;
        const potentialClients = clientLeads.filter(lead => lead.status === 'Calificar' || lead.status === 'Desarrollar' || lead.status === 'Proponer').length;
        const activeClients = clientLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length;
        const lostClients = clientLeads.filter(lead => lead.status === 'Perdido').length;
        const fidelizationRate = totalClients > 0 ? ((fidelizedClients / totalClients) * 100).toFixed(1) : 0;

        // Fallback demo si no hay datos
        if (totalClients === 0 && fidelizedClients === 0 && potentialClients === 0 && activeClients === 0 && lostClients === 0) {
            return {
                totalClients: 18,
                fidelizedClients: 6,
                potentialClients: 8,
                activeClients: 10,
                lostClients: 2,
                fidelizationRate: 33.3
            };
        }

        return {
            totalClients,
            fidelizedClients,
            potentialClients,
            activeClients,
            lostClients,
            fidelizationRate: parseFloat(fidelizationRate)
        };
    }

    // Funciones para generar datos de rango de fechas para gráficos de líneas
    getLeadsStatsForDateRange() {
        const startYear = parseInt(document.getElementById('leadsStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('leadsStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('leadsEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('leadsEndMonth')?.value || 5);

        let labels = [];
        let totalLeads = [];
        let convertedLeads = [];
        let activeLeads = [];
        let lostLeads = [];

        // Generar datos para cada mes en el rango
        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        
        let currentYear = startYear;
        let currentMonth = startMonth;
        
        while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
            labels.push(`${monthNames[currentMonth - 1]} ${currentYear}`);
            
            const monthStats = this.getLeadsStatsForMonth(currentYear, currentMonth);
            totalLeads.push(monthStats.totalLeads);
            convertedLeads.push(monthStats.convertedLeads);
            activeLeads.push(monthStats.activeLeads);
            lostLeads.push(monthStats.lostLeads);
            
            // Avanzar al siguiente mes
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }
        }

        return {
            labels,
            totalLeads,
            convertedLeads,
            activeLeads,
            lostLeads
        };
    }

    getClientsStatsForDateRange() {
        const startYear = parseInt(document.getElementById('clientsStartYear')?.value || 2025);
        const startMonth = parseInt(document.getElementById('clientsStartMonth')?.value || 1);
        const endYear = parseInt(document.getElementById('clientsEndYear')?.value || 2025);
        const endMonth = parseInt(document.getElementById('clientsEndMonth')?.value || 5);

        let labels = [];
        let totalClients = [];
        let fidelizedClients = [];
        let potentialClients = [];
        let activeClients = [];
        let lostClients = [];

        // Generar datos para cada mes en el rango
        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        
        let currentYear = startYear;
        let currentMonth = startMonth;
        
        while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
            labels.push(`${monthNames[currentMonth - 1]} ${currentYear}`);
            
            const monthStats = this.getClientsStatsForMonth(currentYear, currentMonth);
            totalClients.push(monthStats.totalClients);
            fidelizedClients.push(monthStats.fidelizedClients);
            potentialClients.push(monthStats.potentialClients);
            activeClients.push(monthStats.activeClients);
            lostClients.push(monthStats.lostClients);
            
            // Avanzar al siguiente mes
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }
        }

        return {
            labels,
            totalClients,
            fidelizedClients,
            potentialClients,
            activeClients,
            lostClients
        };
    }

    getLeadsStatsForDay(date) {
        const dayLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            return leadDate.toDateString() === date.toDateString();
        });

        return {
            totalLeads: dayLeads.length,
            convertedLeads: dayLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length,
            activeLeads: dayLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length,
            lostLeads: dayLeads.filter(lead => lead.status === 'Perdido').length
        };
    }

    getLeadsStatsForMonth(year, month) {
        const monthLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            return leadDate.getFullYear() === year && leadDate.getMonth() + 1 === month;
        });

        return {
            totalLeads: monthLeads.length,
            convertedLeads: monthLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length,
            activeLeads: monthLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length,
            lostLeads: monthLeads.filter(lead => lead.status === 'Perdido').length
        };
    }

    getClientsStatsForDay(date) {
        const dayLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            return leadDate.toDateString() === date.toDateString();
        });

        return {
            totalClients: dayLeads.length,
            fidelizedClients: dayLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length,
            potentialClients: dayLeads.filter(lead => lead.status === 'Calificar' || lead.status === 'Desarrollar' || lead.status === 'Proponer').length,
            activeClients: dayLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length,
            lostClients: dayLeads.filter(lead => lead.status === 'Perdido').length
        };
    }

    getClientsStatsForMonth(year, month) {
        const monthLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            return leadDate.getFullYear() === year && leadDate.getMonth() + 1 === month;
        });

        return {
            totalClients: monthLeads.length,
            fidelizedClients: monthLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length,
            potentialClients: monthLeads.filter(lead => lead.status === 'Calificar' || lead.status === 'Desarrollar' || lead.status === 'Proponer').length,
            activeClients: monthLeads.filter(lead => lead.status !== 'Cerrado' && lead.status !== 'Cierre' && lead.status !== 'Perdido').length,
            lostClients: monthLeads.filter(lead => lead.status === 'Perdido').length
        };
    }

    getTeamStatsForDateRange() {
        // Para estadísticas del equipo, usar un rango fijo por defecto (Enero 2025 - Mayo 2025)
        const startYear = 2025;
        const startMonth = 1;
        const endYear = 2025;
        const endMonth = 5;

        let labels = [];
        let leadsData = [];
        let actionsData = [];
        let conversionsData = [];

        // Generar datos para cada mes en el rango
        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        
        let currentYear = startYear;
        let currentMonth = startMonth;
        
        while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
            labels.push(`${monthNames[currentMonth - 1]} ${currentYear}`);
            
            const monthStats = this.getTeamStatsForMonth(currentYear, currentMonth);
            leadsData.push(monthStats.leads);
            actionsData.push(monthStats.actions);
            conversionsData.push(monthStats.conversions);
            
            // Avanzar al siguiente mes
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }
        }

        return {
            labels,
            leadsData,
            actionsData,
            conversionsData
        };
    }

    getTeamStatsForDay(date) {
        const dayLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            return leadDate.toDateString() === date.toDateString();
        });

        const dayTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.createdAt || task.dueDate || task.fecha);
            return taskDate.toDateString() === date.toDateString();
        });

        return {
            leads: dayLeads.length,
            actions: dayTasks.length,
            conversions: dayLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length
        };
    }

    getTeamStatsForMonth(year, month) {
        const monthLeads = this.leads.filter(lead => {
            const leadDate = new Date(lead.createdAt || lead.date || lead.fecha);
            return leadDate.getFullYear() === year && leadDate.getMonth() + 1 === month;
        });

        const monthTasks = this.tasks.filter(task => {
            const taskDate = new Date(task.createdAt || task.dueDate || task.fecha);
            return taskDate.getFullYear() === year && taskDate.getMonth() + 1 === month;
        });

        return {
            leads: monthLeads.length,
            actions: monthTasks.length,
            conversions: monthLeads.filter(lead => lead.status === 'Cerrado' || lead.status === 'Cierre').length
        };
    }

    // Funciones faltantes para el tablero Kanban
    advanceLeadState(leadId) {
        console.log('Avanzando estado del lead:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Lead no encontrado', 'error');
            return;
        }

        const currentState = lead.status;
        let newState = '';
        
        switch(currentState) {
            case 'Calificar':
                newState = 'Desarrollar';
                break;
            case 'Desarrollar':
                newState = 'Proponer';
                break;
            case 'Proponer':
                newState = 'Cierre';
                break;
            case 'Cierre':
                this.showNotification('El lead ya está en el estado final', 'info');
                return;
            default:
                this.showNotification('Estado no válido para avanzar', 'error');
                return;
        }

        lead.status = newState;
        lead.lastActivity = new Date().toISOString();
        
        this.saveData();
        this.updateAdvisorKanban();
        this.showNotification(`Lead avanzado de ${currentState} a ${newState}`, 'success');
    }

    qualifyClient(leadId) {
        console.log('Calificando cliente:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Lead no encontrado', 'error');
            return;
        }

        // Crear modal de calificación
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Calificar Cliente: ${lead.name}</h3>
                    <span class="close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
                </div>
                <div class="modal-body">
                    <form id="qualifyForm">
                        <div class="form-group">
                            <label for="interestLevel">Nivel de Interés:</label>
                            <select id="interestLevel" required>
                                <option value="">Seleccionar nivel...</option>
                                <option value="1 - No me interesa">1 - No me interesa</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10 - Super interesado">10 - Super interesado</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="qualificationNotes">Notas de Calificación:</label>
                            <textarea id="qualificationNotes" rows="4" placeholder="Describe el nivel de interés y próximos pasos..."></textarea>
                        </div>
                        <div class="form-group">
                            <label for="nextAction">Próxima Acción:</label>
                            <select id="nextAction" required>
                                <option value="">Seleccionar acción...</option>
                                <option value="Llamada de seguimiento">Llamada de seguimiento</option>
                                <option value="Enviar propuesta">Enviar propuesta</option>
                                <option value="Reunión presencial">Reunión presencial</option>
                                <option value="Enviar información adicional">Enviar información adicional</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Cancelar</button>
                    <button class="btn btn-primary" onclick="window.crm.saveQualification('${leadId}')">Guardar Calificación</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    saveQualification(leadId) {
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) return;

        const interestLevel = document.getElementById('interestLevel').value;
        const notes = document.getElementById('qualificationNotes').value;
        const nextAction = document.getElementById('nextAction').value;

        if (!interestLevel || !nextAction) {
            this.showNotification('Por favor completa todos los campos requeridos', 'error');
            return;
        }

        // Actualizar lead
        lead.interestLevel = interestLevel;
        lead.interest = interestLevel;
        lead.notes = (lead.notes || '') + (notes ? `\n\nCalificación: ${notes}` : '');
        lead.lastActivity = new Date().toISOString();

        // Crear tarea automática si se especifica
        if (nextAction) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const task = {
                id: Date.now(),
                advisor: lead.advisor,
                leadId: leadId,
                type: nextAction,
                title: `${nextAction} - ${lead.name}`,
                dueDate: tomorrow.toISOString(),
                duration: 30,
                status: 'abierta',
                priority: 'Media',
                notes: `Tarea generada automáticamente por calificación del cliente`,
                createdAt: new Date().toISOString()
            };
            
            this.tasks.push(task);
        }

        this.saveData();
        this.updateAdvisorKanban();
        this.updateAdvisorTasks();
        
        // Cerrar modal
        document.querySelector('.modal').remove();
        
        this.showNotification('Cliente calificado exitosamente', 'success');
    }

    confirmDeleteClient(leadId) {
        console.log('Confirmando eliminación del lead:', leadId);
        const lead = this.leads.find(l => l.id == leadId);
        if (!lead) {
            this.showNotification('Lead no encontrado', 'error');
            return;
        }

        if (confirm(`¿Estás seguro de que deseas eliminar el lead "${lead.name}"?\n\nEsta acción no se puede deshacer.`)) {
            // Eliminar lead
            const leadIndex = this.leads.findIndex(l => l.id == leadId);
            if (leadIndex !== -1) {
                this.leads.splice(leadIndex, 1);
            }

            // Eliminar tareas relacionadas
            this.tasks = this.tasks.filter(task => task.leadId != leadId);

            this.saveData();
            this.updateAdvisorKanban();
            this.updateAdvisorTasks();
            this.showNotification('Lead eliminado exitosamente', 'success');
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.crm = new CRMApp();
    console.log('CRM App inicializado:', window.crm);
});

// Global functions for HTML onclick handlers
window.crm = window.crm || new CRMApp();

// Función global para verificar el estado de los gerentes de ventas
window.checkManagers = function() {
    if (window.crm) {
        window.crm.showManagersStatus();
    } else {
        console.error('CRM App no está disponible');
    }
};

// Función global para crear un gerente de ventas por defecto
window.createDefaultManager = function() {
    if (window.crm) {
        const manager = window.crm.createDefaultManager();
        if (manager) {
            console.log('Gerente creado:', manager);
        } else {
            console.log('Ya existen gerentes de ventas');
        }
    } else {
        console.error('CRM App no está disponible');
    }
};

// Global function for Today button
window.goToToday = function() {
    console.log('Función global goToToday llamada');
    if (window.crm) {
        window.crm.currentCalendarDate = new Date();
        window.crm.updateAdvisorCalendar();
    }
};

// Contract Generator functionality
CRMApp.prototype.initContractGenerator = function() {
    console.log('Inicializando Contract Generator...');
    this.setupContractGeneratorEventListeners();
    this.loadContractGeneratorData();
    this.updateContractGeneratorDashboard();
};

CRMApp.prototype.setupContractGeneratorEventListeners = function() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            this.showContractGeneratorSection(section);
        });
    });

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => this.logout());
    }

    // Refresh clients
    const refreshBtn = document.getElementById('refreshClientsBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => this.refreshClientsList());
    }

    // Export clients
    const exportBtn = document.getElementById('exportClientsBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => this.exportClientsList());
    }

    // Modal close handlers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            this.closeModal(e.target.closest('.modal'));
        }
    });
};

CRMApp.prototype.showContractGeneratorSection = function(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active class to nav link
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Load section-specific data
    switch(sectionId) {
        case 'dashboard':
            this.updateContractGeneratorDashboard();
            break;
        case 'clients-list':
            this.updateClientsListGrid();
            break;
        case 'contracts':
            this.updateContractsGrid();
            break;
        case 'templates':
            this.updateTemplatesGrid();
            break;
        case 'reports':
            this.updateReports();
            break;
    }
};

CRMApp.prototype.loadContractGeneratorData = function() {
    // Initialize contract-ready clients data
    if (!this.contractReadyClients) {
        this.contractReadyClients = [
            {
                id: 1,
                name: 'Juan Pérez',
                company: 'Empresa ABC',
                email: 'juan@empresaabc.com',
                phone: '+1234567890',
                status: 'aceptado',
                contractType: 'servicios',
                serviceDetails: {
                    plan: 'Plan Premium',
                    speed: '100 Mbps',
                    price: 150,
                    duration: 12
                },
                clientInfo: {
                    identification: 'CEDULA',
                    idNumber: '1234567890',
                    fullName: 'Juan Carlos Pérez García',
                    birthDate: '1985-03-15',
                    address: 'Calle Principal 123, Ciudad'
                },
                contractInfo: {
                    contractDate: '2024-12-01',
                    signatureDate: '2024-12-01',
                    collectionDay: 15,
                    cutOffDay: 30,
                    collectionType: 'Prepago',
                    clientCondition: 'Normal'
                },
                createdAt: '2024-11-25',
                lastActivity: '2024-12-01',
                advisor: 'Asesor',
                notes: 'Cliente aceptó propuesta, listo para generar contrato'
            },
            {
                id: 2,
                name: 'María García',
                company: 'Corporación XYZ',
                email: 'maria@corporacionxyz.com',
                phone: '+1234567891',
                status: 'aceptado',
                contractType: 'servicios',
                serviceDetails: {
                    plan: 'Plan Empresarial',
                    speed: '500 Mbps',
                    price: 300,
                    duration: 24
                },
                clientInfo: {
                    identification: 'RUC',
                    idNumber: '1234567890001',
                    fullName: 'María Elena García López',
                    birthDate: '1980-07-22',
                    address: 'Av. Empresarial 456, Ciudad'
                },
                contractInfo: {
                    contractDate: '2024-12-01',
                    signatureDate: '2024-12-01',
                    collectionDay: 10,
                    cutOffDay: 25,
                    collectionType: 'Postpago',
                    clientCondition: 'VIP'
                },
                createdAt: '2024-11-20',
                lastActivity: '2024-12-01',
                advisor: 'Asesor 2',
                notes: 'Cliente corporativo, contrato empresarial'
            },
            {
                id: 3,
                name: 'Carlos López',
                company: 'Industrias DEF',
                email: 'carlos@industriasdef.com',
                phone: '+1234567892',
                status: 'en_proceso',
                contractType: 'servicios',
                serviceDetails: {
                    plan: 'Plan Básico',
                    speed: '50 Mbps',
                    price: 80,
                    duration: 12
                },
                clientInfo: {
                    identification: 'CEDULA',
                    idNumber: '9876543210',
                    fullName: 'Carlos Alberto López Martínez',
                    birthDate: '1990-11-10',
                    address: 'Calle Secundaria 789, Ciudad'
                },
                contractInfo: {
                    contractDate: '2024-12-01',
                    signatureDate: null,
                    collectionDay: 5,
                    cutOffDay: 20,
                    collectionType: 'Prepago',
                    clientCondition: 'Normal'
                },
                createdAt: '2024-11-28',
                lastActivity: '2024-12-01',
                advisor: 'Asesor',
                notes: 'Cliente en proceso de revisión de contrato'
            }
        ];
    }

    // Initialize contracts data
    if (!this.contractsData) {
        this.contractsData = [
            {
                id: 1,
                clientId: 1,
                clientName: 'Juan Pérez',
                contractNumber: 'CTR-001-2024',
                status: 'generado',
                contractType: 'servicios',
                value: 150,
                startDate: '2024-12-01',
                endDate: '2025-11-30',
                generatedDate: '2024-12-01',
                signedDate: null,
                advisor: 'Asesor'
            },
            {
                id: 2,
                clientId: 2,
                clientName: 'María García',
                contractNumber: 'CTR-002-2024',
                status: 'firmado',
                contractType: 'servicios',
                value: 300,
                startDate: '2024-12-01',
                endDate: '2026-11-30',
                generatedDate: '2024-12-01',
                signedDate: '2024-12-01',
                advisor: 'Asesor 2'
            }
        ];
    }

    // Initialize templates data
    if (!this.contractTemplates) {
        this.contractTemplates = [
            {
                id: 1,
                name: 'Contrato Servicios Básico',
                type: 'servicios',
                description: 'Plantilla para servicios básicos de internet',
                content: 'Plantilla de contrato para servicios básicos...',
                createdAt: '2024-01-01'
            },
            {
                id: 2,
                name: 'Contrato Servicios Empresarial',
                type: 'servicios',
                description: 'Plantilla para servicios empresariales',
                content: 'Plantilla de contrato para servicios empresariales...',
                createdAt: '2024-01-01'
            }
        ];
    }
};

CRMApp.prototype.updateContractGeneratorDashboard = function() {
    const pendingClients = this.contractReadyClients.filter(c => c.status === 'aceptado').length;
    const generatedContracts = this.contractsData.filter(c => c.status === 'generado' || c.status === 'firmado').length;
    const pendingContracts = this.contractsData.filter(c => c.status === 'generado').length;
    const signedContracts = this.contractsData.filter(c => c.status === 'firmado').length;
    const totalValue = this.contractsData.reduce((sum, c) => sum + c.value, 0);
    const avgProcessingTime = 2; // Simulated average processing time

    // Update dashboard stats
    document.getElementById('pendingClientsCount').textContent = pendingClients;
    document.getElementById('generatedContractsCount').textContent = generatedContracts;
    document.getElementById('pendingContractsCount').textContent = pendingContracts;
    document.getElementById('signedContractsCount').textContent = signedContracts;
    document.getElementById('totalContractValue').textContent = '$' + totalValue.toLocaleString();
    document.getElementById('avgProcessingTime').textContent = avgProcessingTime + 'h';

    // Update widgets
    this.updateRecentClientsWidget();
    this.updateContractsByStatusWidget();
    this.updateSystemAlertsWidget();
};

CRMApp.prototype.updateRecentClientsWidget = function() {
    const recentWidget = document.getElementById('recentClientsWidget');
    if (!recentWidget) return;

    const recentClients = this.contractReadyClients.slice(0, 5);
    
    recentWidget.innerHTML = recentClients.map(client => `
        <div class="recent-client-item">
            <div class="client-name">${client.name}</div>
            <div class="client-company">${client.company}</div>
            <div class="client-status status-${client.status}">${client.status}</div>
        </div>
    `).join('');
};

CRMApp.prototype.updateContractsByStatusWidget = function() {
    const statusWidget = document.getElementById('contractsByStatusWidget');
    if (!statusWidget) return;

    const statusCounts = {
        'generado': this.contractsData.filter(c => c.status === 'generado').length,
        'firmado': this.contractsData.filter(c => c.status === 'firmado').length,
        'pendiente_firma': this.contractsData.filter(c => c.status === 'pendiente_firma').length
    };

    statusWidget.innerHTML = Object.entries(statusCounts).map(([status, count]) => `
        <div class="status-item">
            <span class="status-label">${status.replace('_', ' ').toUpperCase()}:</span>
            <span class="status-count">${count}</span>
        </div>
    `).join('');
};

CRMApp.prototype.updateSystemAlertsWidget = function() {
    const alertsWidget = document.getElementById('systemAlertsWidget');
    if (!alertsWidget) return;

    const alerts = [
        {
            type: 'info',
            message: '3 clientes listos para generar contrato',
            priority: 'media'
        },
        {
            type: 'warning',
            message: '1 contrato pendiente de firma por más de 7 días',
            priority: 'alta'
        },
        {
            type: 'success',
            message: '5 contratos firmados esta semana',
            priority: 'baja'
        }
    ];

    alertsWidget.innerHTML = alerts.map(alert => `
        <div class="alert alert-${alert.type}">
            <strong>${alert.priority.toUpperCase()}:</strong> ${alert.message}
        </div>
    `).join('');
};

CRMApp.prototype.updateClientsListGrid = function() {
    const clientsGrid = document.getElementById('clientsListGrid');
    if (!clientsGrid) return;

    const totalClients = this.contractReadyClients.length;
    const pendingClients = this.contractReadyClients.filter(c => c.status === 'aceptado').length;
    const inProcessClients = this.contractReadyClients.filter(c => c.status === 'en_proceso').length;

    // Update stats
    document.getElementById('totalClientsCount').textContent = totalClients;
    document.getElementById('pendingClientsCount').textContent = pendingClients;
    document.getElementById('inProcessClientsCount').textContent = inProcessClients;

    // Update grid
    clientsGrid.innerHTML = this.contractReadyClients.map(client => `
        <div class="client-card" data-client-id="${client.id}">
            <div class="client-header">
                <h3>${client.name}</h3>
                <span class="client-status status-${client.status}">${client.status}</span>
            </div>
            <div class="client-info">
                <p><strong>Empresa:</strong> ${client.company}</p>
                <p><strong>Email:</strong> ${client.email}</p>
                <p><strong>Teléfono:</strong> ${client.phone}</p>
                <p><strong>Tipo de Contrato:</strong> ${client.contractType}</p>
                <p><strong>Plan:</strong> ${client.serviceDetails.plan}</p>
                <p><strong>Valor:</strong> $${client.serviceDetails.price}/mes</p>
                <p><strong>Asesor:</strong> ${client.advisor}</p>
            </div>
            <div class="client-actions">
                <button class="btn btn-primary" onclick="window.crm.viewClientDetail(${client.id})">Ver Detalle</button>
                <button class="btn btn-success" onclick="window.crm.generateContract(${client.id})">Generar Contrato</button>
            </div>
        </div>
    `).join('');
};

CRMApp.prototype.viewClientDetail = function(clientId) {
    const client = this.contractReadyClients.find(c => c.id == clientId);
    if (!client) return;

    const modal = document.getElementById('clientDetailModal');
    const content = document.getElementById('clientDetailContent');
    
    if (content) {
        content.innerHTML = `
            <div class="client-detail">
                <h4>Información del Cliente</h4>
                <p><strong>Nombre:</strong> ${client.name}</p>
                <p><strong>Empresa:</strong> ${client.company}</p>
                <p><strong>Email:</strong> ${client.email}</p>
                <p><strong>Teléfono:</strong> ${client.phone}</p>
                <p><strong>Identificación:</strong> ${client.clientInfo.identification} - ${client.clientInfo.idNumber}</p>
                <p><strong>Nombre Completo:</strong> ${client.clientInfo.fullName}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${client.clientInfo.birthDate}</p>
                <p><strong>Dirección:</strong> ${client.clientInfo.address}</p>
                
                <h4>Detalles del Servicio</h4>
                <p><strong>Plan:</strong> ${client.serviceDetails.plan}</p>
                <p><strong>Velocidad:</strong> ${client.serviceDetails.speed}</p>
                <p><strong>Precio:</strong> $${client.serviceDetails.price}/mes</p>
                <p><strong>Duración:</strong> ${client.serviceDetails.duration} meses</p>
                
                <h4>Información del Contrato</h4>
                <p><strong>Fecha de Contrato:</strong> ${client.contractInfo.contractDate}</p>
                <p><strong>Día de Cobro:</strong> ${client.contractInfo.collectionDay}</p>
                <p><strong>Día de Corte:</strong> ${client.contractInfo.cutOffDay}</p>
                <p><strong>Tipo de Cobro:</strong> ${client.contractInfo.collectionType}</p>
                <p><strong>Condición del Cliente:</strong> ${client.contractInfo.clientCondition}</p>
                
                <h4>Notas</h4>
                <p>${client.notes}</p>
            </div>
        `;
    }
    
    if (modal) {
        modal.style.display = 'block';
    }
};

CRMApp.prototype.generateContract = function(clientId) {
    console.log('Generando contrato para cliente ID:', clientId);
    
    const client = this.contractReadyClients.find(c => c.id == clientId);
    if (!client) {
        console.error('Cliente no encontrado con ID:', clientId);
        alert('Cliente no encontrado');
        return;
    }

    console.log('Cliente encontrado:', client);
    
    // Guardar datos del cliente en localStorage para la página de generación
    localStorage.setItem('currentContractClient', JSON.stringify(client));
    
    // Redirigir a la página de generación de contratos
    window.location.href = 'contract-generation.html';
};

CRMApp.prototype.setupWizardNavigation = function() {
    console.log('Configurando navegación del wizard...');
    
    // Current step tracking
    this.currentWizardStep = 1;
    const totalSteps = 8;
    const steps = ['informacion', 'contactos', 'ubicacion', 'medios-pago', 'planes', 'referencias', 'adjuntos', 'finalizar'];
    
    // Tab click handlers
    const tabs = document.querySelectorAll('.wizard-tab');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            this.goToWizardStep(index + 1);
        });
    });
    
    // Next button
    const nextBtn = document.getElementById('nextStep');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (this.currentWizardStep < totalSteps) {
                this.goToWizardStep(this.currentWizardStep + 1);
            }
        });
    }
    
    // Previous button
    const prevBtn = document.getElementById('prevStep');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (this.currentWizardStep > 1) {
                this.goToWizardStep(this.currentWizardStep - 1);
            }
        });
    }
    
    console.log('Navegación del wizard configurada');
};

CRMApp.prototype.goToWizardStep = function(stepNumber) {
    console.log(`Navegando al paso ${stepNumber}...`);
    
    const totalSteps = 8;
    const steps = ['informacion', 'contactos', 'ubicacion', 'medios-pago', 'planes', 'referencias', 'adjuntos', 'finalizar'];
    
    // Hide all steps
    const allSteps = document.querySelectorAll('.wizard-step');
    allSteps.forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStep = document.getElementById(`step-${steps[stepNumber - 1]}`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
    
    // Update tabs
    const allTabs = document.querySelectorAll('.wizard-tab');
    allTabs.forEach((tab, index) => {
        tab.classList.remove('active');
        if (index === stepNumber - 1) {
            tab.classList.add('active');
        }
    });
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevStep');
    const nextBtn = document.getElementById('nextStep');
    const previewBtn = document.getElementById('previewBtn');
    const generateBtn = document.getElementById('generateBtn');
    
    if (prevBtn) {
        prevBtn.style.display = stepNumber > 1 ? 'inline-block' : 'none';
    }
    
    if (nextBtn) {
        if (stepNumber < totalSteps) {
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = 'Siguiente';
        } else {
            nextBtn.style.display = 'none';
        }
    }
    
    if (previewBtn) {
        previewBtn.style.display = stepNumber === totalSteps ? 'inline-block' : 'none';
    }
    
    if (generateBtn) {
        generateBtn.style.display = stepNumber === totalSteps ? 'inline-block' : 'none';
    }
    
    this.currentWizardStep = stepNumber;
    console.log(`Paso ${stepNumber} activado`);
};

CRMApp.prototype.setupContractFormFunctionality = function() {
    console.log('Configurando funcionalidad del formulario de contrato...');
    
    // Auto-calculate age when birth date changes
    const birthDateInput = document.getElementById('birthDate');
    const ageInput = document.getElementById('age');
    
    if (birthDateInput && ageInput) {
        birthDateInput.addEventListener('change', () => {
            const birthDate = new Date(birthDateInput.value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            ageInput.value = age > 0 ? age : '';
        });
    }
    
    // Auto-calculate expiration date when contract date or duration changes
    const contractDateInput = document.getElementById('contractDate');
    const durationInput = document.getElementById('duration');
    const expirationDateInput = document.getElementById('expirationDate');
    
    if (contractDateInput && durationInput && expirationDateInput) {
        const updateExpirationDate = () => {
            if (contractDateInput.value && durationInput.value) {
                const startDate = new Date(contractDateInput.value);
                const duration = parseInt(durationInput.value);
                const endDate = new Date(startDate);
                endDate.setMonth(endDate.getMonth() + duration);
                expirationDateInput.value = endDate.toISOString().split('T')[0];
            }
        };
        
        contractDateInput.addEventListener('change', updateExpirationDate);
        durationInput.addEventListener('input', updateExpirationDate);
    }
    
    // Setup invoice data button
    const invoiceDataBtn = document.getElementById('invoiceDataBtn');
    if (invoiceDataBtn) {
        invoiceDataBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de Datos Factura en desarrollo', 'info');
        });
    }
    
    // Setup contacts functionality
    this.setupContactsFunctionality();
    
    // Setup location functionality
    this.setupLocationFunctionality();
    
    console.log('Funcionalidad del formulario configurada');
};

CRMApp.prototype.setupContactsFunctionality = function() {
    console.log('Configurando funcionalidad de contactos...');
    
    // Initialize contacts array
    this.contractContacts = [];
    
    // Setup add phone button
    const addPhoneBtn = document.getElementById('addPhoneBtn');
    if (addPhoneBtn) {
        addPhoneBtn.addEventListener('click', () => {
            this.addContact('phone');
        });
    }
    
    // Setup add email button
    const addEmailBtn = document.getElementById('addEmailBtn');
    if (addEmailBtn) {
        addEmailBtn.addEventListener('click', () => {
            this.addContact('email');
        });
    }
    
    // Load existing client contacts
    this.loadClientContacts();
    
    console.log('Funcionalidad de contactos configurada');
};

CRMApp.prototype.loadClientContacts = function() {
    console.log('Cargando contactos del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) return;
    
    try {
        const client = JSON.parse(clientData);
        
        // Add client's main phone and email as celular contacts
        if (client.phone) {
            this.contractContacts.push({
                id: Date.now() + 1,
                type: 'celular',
                phone: client.phone,
                email: client.email || '',
                isFromClient: true
            });
        }
        
        // Add client's email as celular contact if different from phone contact
        if (client.email && client.phone !== client.email) {
            this.contractContacts.push({
                id: Date.now() + 2,
                type: 'celular',
                phone: '',
                email: client.email,
                isFromClient: true
            });
        }
        
        // Render contacts
        this.renderContacts();
        
    } catch (error) {
        console.error('Error al cargar contactos del cliente:', error);
    }
};

CRMApp.prototype.addContact = function(type) {
    console.log(`Agregando contacto de tipo: ${type}`);
    
    const contactType = document.getElementById('contactType').value;
    const contactPhone = document.getElementById('contactPhone').value;
    const contactEmail = document.getElementById('contactEmail').value;
    
    if (!contactType) {
        this.showNotification('Seleccione un tipo de contacto', 'warning');
        return;
    }
    
    if (type === 'phone' && !contactPhone) {
        this.showNotification('Ingrese un número de teléfono', 'warning');
        return;
    }
    
    if (type === 'email' && !contactEmail) {
        this.showNotification('Ingrese un email', 'warning');
        return;
    }
    
    const newContact = {
        id: Date.now(),
        type: contactType,
        phone: type === 'phone' ? contactPhone : '',
        email: type === 'email' ? contactEmail : '',
        isFromClient: false
    };
    
    this.contractContacts.push(newContact);
    this.renderContacts();
    
    // Clear form
    if (type === 'phone') {
        document.getElementById('contactPhone').value = '';
    } else {
        document.getElementById('contactEmail').value = '';
    }
    
    this.showNotification('Contacto agregado exitosamente', 'success');
};

CRMApp.prototype.renderContacts = function() {
    console.log('Renderizando contactos...');
    
    const contactsList = document.getElementById('contactsList');
    if (!contactsList) return;
    
    if (this.contractContacts.length === 0) {
        contactsList.innerHTML = '';
        return;
    }
    
    contactsList.innerHTML = this.contractContacts.map(contact => `
        <div class="contact-item" data-contact-id="${contact.id}">
            <div class="contact-info">
                <span class="contact-type-badge ${contact.type}">${this.getContactTypeLabel(contact.type)}</span>
                <div class="contact-details">
                    ${contact.phone ? `<div class="contact-phone">📞 ${contact.phone}</div>` : ''}
                    ${contact.email ? `<div class="contact-email">📧 ${contact.email}</div>` : ''}
                </div>
            </div>
            <div class="contact-actions">
                ${!contact.isFromClient ? `
                    <button class="btn-edit" onclick="window.crm.editContact(${contact.id})">Editar</button>
                    <button class="btn-delete" onclick="window.crm.deleteContact(${contact.id})">Eliminar</button>
                ` : `
                    <span class="text-muted">Datos del cliente</span>
                `}
            </div>
        </div>
    `).join('');
};

CRMApp.prototype.getContactTypeLabel = function(type) {
    const labels = {
        'celular': 'CELULAR',
        'fud': 'FUD',
        'fax': 'FAX'
    };
    return labels[type] || type;
};

CRMApp.prototype.editContact = function(contactId) {
    console.log(`Editando contacto ID: ${contactId}`);
    
    const contact = this.contractContacts.find(c => c.id === contactId);
    if (!contact) return;
    
    // Fill form with contact data
    document.getElementById('contactType').value = contact.type;
    document.getElementById('contactPhone').value = contact.phone;
    document.getElementById('contactEmail').value = contact.email;
    
    // Remove contact from list
    this.deleteContact(contactId, false);
    
    this.showNotification('Contacto cargado para edición', 'info');
};

CRMApp.prototype.deleteContact = function(contactId, showNotification = true) {
    console.log(`Eliminando contacto ID: ${contactId}`);
    
    this.contractContacts = this.contractContacts.filter(c => c.id !== contactId);
    this.renderContacts();
    
    if (showNotification) {
        this.showNotification('Contacto eliminado', 'success');
    }
};

CRMApp.prototype.setupLocationFunctionality = function() {
    console.log('Configurando funcionalidad de ubicación...');
    
    // Setup sub-navigation
    const subNavTabs = document.querySelectorAll('.sub-nav-tab');
    subNavTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const subsection = tab.getAttribute('data-subsection');
            this.switchLocationSubsection(subsection);
        });
    });
    
    // Setup routes button
    const routesBtn = document.querySelector('.btn-rutas');
    if (routesBtn) {
        routesBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de Rutas en desarrollo', 'info');
        });
    }
    
    // Load client location data
    this.loadClientLocationData();
    
    // Setup georeferencia functionality
    this.setupGeoreferenciaFunctionality();
    
    // Setup payment methods functionality
    this.setupPaymentMethodsFunctionality();
    
    // Setup services functionality
    this.setupServicesFunctionality();
    
        // Setup references functionality
        this.setupReferencesFunctionality();
        
        // Setup attachments functionality
        this.setupAttachmentsFunctionality();
    
    console.log('Funcionalidad de ubicación configurada');
};

CRMApp.prototype.switchLocationSubsection = function(subsection) {
    console.log(`Cambiando a subsección: ${subsection}`);
    
    // Update active tab
    const subNavTabs = document.querySelectorAll('.sub-nav-tab');
    subNavTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-subsection') === subsection) {
            tab.classList.add('active');
        }
    });
    
    // Update active section
    const sections = document.querySelectorAll('.location-section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === `${subsection}-section`) {
            section.classList.add('active');
        }
    });
};

CRMApp.prototype.loadClientLocationData = function() {
    console.log('Cargando datos de ubicación del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) return;
    
    try {
        const client = JSON.parse(clientData);
        
        // Load client address if available
        if (client.clientInfo && client.clientInfo.address) {
            const addressInput = document.getElementById('direccionCompleta');
            if (addressInput) {
                addressInput.value = client.clientInfo.address;
            }
        }
        
    } catch (error) {
        console.error('Error al cargar datos de ubicación del cliente:', error);
    }
};

CRMApp.prototype.setupGeoreferenciaFunctionality = function() {
    console.log('Configurando funcionalidad de georeferencia...');
    
    // Setup search location button
    const searchLocationBtn = document.getElementById('searchLocation');
    if (searchLocationBtn) {
        searchLocationBtn.addEventListener('click', () => {
            this.showNotification('Buscando ubicación...', 'info');
            // Simulate location search
            setTimeout(() => {
                this.showNotification('Ubicación encontrada', 'success');
            }, 1500);
        });
    }
    
    // Setup diamond button
    const diamondBtn = document.getElementById('diamondBtn');
    if (diamondBtn) {
        diamondBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de diamante en desarrollo', 'info');
        });
    }
    
    // Setup open map button
    const openMapBtn = document.getElementById('openMap');
    if (openMapBtn) {
        openMapBtn.addEventListener('click', () => {
            this.showNotification('Abriendo mapa interactivo...', 'info');
            // Simulate map opening
            setTimeout(() => {
                this.showNotification('Mapa cargado exitosamente', 'success');
            }, 1000);
        });
    }
    
    // Setup search NAPS button
    const searchNapsBtn = document.getElementById('searchNaps');
    if (searchNapsBtn) {
        searchNapsBtn.addEventListener('click', () => {
            const searchValue = document.getElementById('busquedaNaps').value;
            if (!searchValue) {
                this.showNotification('Ingrese un término de búsqueda', 'warning');
                return;
            }
            this.showNotification(`Buscando NAPS: ${searchValue}`, 'info');
        });
    }
    
    // Setup notes button
    const notesBtn = document.getElementById('notesBtn');
    if (notesBtn) {
        notesBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de notas en desarrollo', 'info');
        });
    }
    
    // Setup save georeferencia button
    const saveGeoreferenciaBtn = document.getElementById('saveGeoreferencia');
    if (saveGeoreferenciaBtn) {
        saveGeoreferenciaBtn.addEventListener('click', () => {
            this.saveGeoreferenciaData();
        });
    }
    
    // Setup coordinate validation
    this.setupCoordinateValidation();
    
    console.log('Funcionalidad de georeferencia configurada');
};

CRMApp.prototype.setupCoordinateValidation = function() {
    const latitudInput = document.getElementById('latitud');
    const longitudInput = document.getElementById('longitud');
    
    if (latitudInput) {
        latitudInput.addEventListener('blur', () => {
            this.validateCoordinate(latitudInput.value, 'latitud');
        });
    }
    
    if (longitudInput) {
        longitudInput.addEventListener('blur', () => {
            this.validateCoordinate(longitudInput.value, 'longitud');
        });
    }
};

CRMApp.prototype.validateCoordinate = function(value, type) {
    const numValue = parseFloat(value);
    let isValid = false;
    let message = '';
    
    if (type === 'latitud') {
        isValid = numValue >= -90 && numValue <= 90;
        message = isValid ? 'Latitud válida' : 'Latitud debe estar entre -90 y 90';
    } else if (type === 'longitud') {
        isValid = numValue >= -180 && numValue <= 180;
        message = isValid ? 'Longitud válida' : 'Longitud debe estar entre -180 y 180';
    }
    
    if (!isValid) {
        this.showNotification(message, 'error');
    }
};

CRMApp.prototype.saveGeoreferenciaData = function() {
    console.log('Guardando datos de georeferencia...');
    
    const georeferenciaData = {
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
        poste: document.getElementById('poste').value,
        cajaNap: document.getElementById('cajaNap').value,
        puerto: document.getElementById('puerto').value,
        busquedaNaps: document.getElementById('busquedaNaps').value,
        timestamp: new Date().toISOString()
    };
    
    // Validate required fields
    if (!georeferenciaData.latitud || !georeferenciaData.longitud) {
        this.showNotification('Latitud y Longitud son campos requeridos', 'error');
        return;
    }
    
    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem('contractGeoreferenciaData') || '{}');
    const clientId = JSON.parse(localStorage.getItem('currentContractClient') || '{}').id;
    
    if (clientId) {
        existingData[clientId] = georeferenciaData;
        localStorage.setItem('contractGeoreferenciaData', JSON.stringify(existingData));
        
        this.showNotification('Datos de georeferencia guardados exitosamente', 'success');
        console.log('Datos de georeferencia guardados:', georeferenciaData);
    } else {
        this.showNotification('Error: No se encontró información del cliente', 'error');
    }
};

CRMApp.prototype.setupPaymentMethodsFunctionality = function() {
    console.log('Configurando funcionalidad de medios de pago...');
    
    // Setup payment method selection
    const formaPagoSelect = document.getElementById('formaPago');
    if (formaPagoSelect) {
        formaPagoSelect.addEventListener('change', () => {
            this.handlePaymentMethodChange();
        });
    }
    
    // Load client payment data
    this.loadClientPaymentData();
    
    console.log('Funcionalidad de medios de pago configurada');
};

CRMApp.prototype.handlePaymentMethodChange = function() {
    const formaPago = document.getElementById('formaPago').value;
    const paymentDetails = document.getElementById('paymentDetails');
    const paymentSummary = document.getElementById('paymentSummary');
    
    if (!formaPago) {
        paymentDetails.style.display = 'none';
        paymentSummary.style.display = 'none';
        return;
    }
    
    // Show payment details
    paymentDetails.style.display = 'grid';
    paymentSummary.style.display = 'block';
    
    // Auto-fill payment details based on selection
    this.autoFillPaymentDetails(formaPago);
    
    // Update payment summary
    this.updatePaymentSummary(formaPago);
    
    console.log('Método de pago seleccionado:', formaPago);
};

CRMApp.prototype.autoFillPaymentDetails = function(paymentMethod) {
    const numeroCuenta = document.getElementById('numeroCuenta');
    const banco = document.getElementById('banco');
    const tipoCuenta = document.getElementById('tipoCuenta');
    
    // Clear previous values
    if (numeroCuenta) numeroCuenta.value = '';
    if (banco) banco.value = '';
    if (tipoCuenta) tipoCuenta.value = '';
    
    // Auto-fill based on payment method
    switch (paymentMethod) {
        case 'banco_pichincha_ah2213822815':
            if (numeroCuenta) numeroCuenta.value = 'AH2213822815';
            if (banco) banco.value = 'Banco Pichincha';
            if (tipoCuenta) tipoCuenta.value = 'ahorro';
            break;
        case 'banco_pichincha_ct2100298478':
            if (numeroCuenta) numeroCuenta.value = 'CT2100298478';
            if (banco) banco.value = 'Banco Pichincha';
            if (tipoCuenta) tipoCuenta.value = 'corriente';
            break;
        case 'banco_promerica_ah12006886111':
            if (numeroCuenta) numeroCuenta.value = 'AH12006886111';
            if (banco) banco.value = 'Banco Promerica';
            if (tipoCuenta) tipoCuenta.value = 'ahorro';
            break;
        case 'cuenta_tvmundo_2100144415':
            if (numeroCuenta) numeroCuenta.value = '2100144415';
            if (banco) banco.value = 'TVMundo';
            if (tipoCuenta) tipoCuenta.value = 'corriente';
            break;
        case 'cheques':
            if (banco) banco.value = 'Cheques';
            if (tipoCuenta) tipoCuenta.value = '';
            break;
        case 'credito':
        case 'credito_inv':
            if (banco) banco.value = 'Crédito';
            if (tipoCuenta) tipoCuenta.value = 'credito';
            break;
        case 'cruce_facturas_servicios':
            if (banco) banco.value = 'Cruce de Facturas';
            if (tipoCuenta) tipoCuenta.value = '';
            break;
    }
};

CRMApp.prototype.updatePaymentSummary = function(paymentMethod) {
    const summaryContent = document.getElementById('summaryContent');
    if (!summaryContent) return;
    
    const paymentMethodText = document.getElementById('formaPago').selectedOptions[0].text;
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const banco = document.getElementById('banco').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    
    // Determine payment method class for styling
    let methodClass = 'payment-method-bank';
    if (paymentMethod.includes('cheques')) methodClass = 'payment-method-check';
    else if (paymentMethod.includes('credito')) methodClass = 'payment-method-credit';
    else if (paymentMethod.includes('cruce')) methodClass = 'payment-method-transfer';
    
    // Update payment summary styling
    const paymentSummary = document.getElementById('paymentSummary');
    if (paymentSummary) {
        paymentSummary.className = `payment-summary ${methodClass}`;
    }
    
    // Create summary content
    let summaryHTML = `
        <div class="summary-item">
            <span class="summary-label">Método de Pago:</span>
            <span class="summary-value">${paymentMethodText}</span>
        </div>
    `;
    
    if (numeroCuenta) {
        summaryHTML += `
            <div class="summary-item">
                <span class="summary-label">Número de Cuenta:</span>
                <span class="summary-value">${numeroCuenta}</span>
            </div>
        `;
    }
    
    if (banco) {
        summaryHTML += `
            <div class="summary-item">
                <span class="summary-label">Banco:</span>
                <span class="summary-value">${banco}</span>
            </div>
        `;
    }
    
    if (tipoCuenta) {
        const tipoCuentaText = tipoCuenta === 'ahorro' ? 'Ahorro' : 
                               tipoCuenta === 'corriente' ? 'Corriente' : 
                               tipoCuenta === 'credito' ? 'Crédito' : tipoCuenta;
        summaryHTML += `
            <div class="summary-item">
                <span class="summary-label">Tipo de Cuenta:</span>
                <span class="summary-value">${tipoCuentaText}</span>
            </div>
        `;
    }
    
    summaryContent.innerHTML = summaryHTML;
};

CRMApp.prototype.loadClientPaymentData = function() {
    console.log('Cargando datos de pago del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) return;
    
    try {
        const client = JSON.parse(clientData);
        
        // Load saved payment data if available
        const savedPaymentData = localStorage.getItem('contractPaymentData');
        if (savedPaymentData) {
            const paymentData = JSON.parse(savedPaymentData);
            const clientId = client.id;
            
            if (paymentData[clientId]) {
                const data = paymentData[clientId];
                
                // Restore form values
                if (data.formaPago && document.getElementById('formaPago')) {
                    document.getElementById('formaPago').value = data.formaPago;
                    this.handlePaymentMethodChange();
                }
                
                if (data.numeroCuenta && document.getElementById('numeroCuenta')) {
                    document.getElementById('numeroCuenta').value = data.numeroCuenta;
                }
                
                if (data.banco && document.getElementById('banco')) {
                    document.getElementById('banco').value = data.banco;
                }
                
                if (data.tipoCuenta && document.getElementById('tipoCuenta')) {
                    document.getElementById('tipoCuenta').value = data.tipoCuenta;
                }
                
                if (data.titularCuenta && document.getElementById('titularCuenta')) {
                    document.getElementById('titularCuenta').value = data.titularCuenta;
                }
                
                if (data.observacionesPago && document.getElementById('observacionesPago')) {
                    document.getElementById('observacionesPago').value = data.observacionesPago;
                }
                
                console.log('Datos de pago del cliente cargados');
            }
        }
        
    } catch (error) {
        console.error('Error al cargar datos de pago del cliente:', error);
    }
};

CRMApp.prototype.setupServicesFunctionality = function() {
    console.log('Configurando funcionalidad de servicios...');
    
    // Initialize services array
    this.contractServices = [];
    
    // Setup service type selection
    const tipoServicioSelect = document.getElementById('tipoServicio');
    if (tipoServicioSelect) {
        tipoServicioSelect.addEventListener('change', () => {
            this.handleServiceTypeChange();
        });
    }
    
    // Setup select plans button
    const selectPlansBtn = document.getElementById('selectPlansBtn');
    if (selectPlansBtn) {
        selectPlansBtn.addEventListener('click', () => {
            this.openPlansSelection();
        });
    }
    
    // Setup notes button
    const notesBtn = document.getElementById('notesBtn');
    if (notesBtn) {
        notesBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de notas en desarrollo', 'info');
        });
    }
    
    // Load client services data
    this.loadClientServicesData();
    
    // Render initial table
    this.renderServicesTable();
    
    console.log('Funcionalidad de servicios configurada');
};

CRMApp.prototype.handleServiceTypeChange = function() {
    const tipoServicio = document.getElementById('tipoServicio').value;
    const selectPlansBtn = document.getElementById('selectPlansBtn');
    
    if (tipoServicio) {
        selectPlansBtn.disabled = false;
        selectPlansBtn.style.opacity = '1';
    } else {
        selectPlansBtn.disabled = true;
        selectPlansBtn.style.opacity = '0.6';
    }
    
    console.log('Tipo de servicio seleccionado:', tipoServicio);
};

CRMApp.prototype.openPlansSelection = function() {
    const tipoServicio = document.getElementById('tipoServicio').value;
    
    if (!tipoServicio) {
        this.showNotification('Seleccione un tipo de servicio primero', 'warning');
        return;
    }
    
    // Simulate plans selection modal
    this.showNotification(`Abriendo selección de planes para ${tipoServicio.toUpperCase()}...`, 'info');
    
    // Simulate adding a plan after 1 second
    setTimeout(() => {
        this.addSamplePlan(tipoServicio);
    }, 1000);
};

CRMApp.prototype.addSamplePlan = function(serviceType) {
    const planId = Date.now();
    const serviceTypeText = serviceType.toUpperCase();
    
    // Generate sample plan data based on service type
    let planData;
    switch (serviceType) {
        case 'internet':
            planData = {
                id: planId,
                tipo: 'Internet',
                ubicacion: 'Casa Principal',
                dispositivo: 'Router WiFi',
                tarjetaModem: 'MOD-001',
                estado: 'active',
                registrado: this.formatDate(new Date()),
                ultimoCorte: '-',
                ultimaReconexion: '-',
                vencimiento: this.formatDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)),
                paquetes: 'Básico 50MB',
                radius: 'RAD-001'
            };
            break;
        case 'tv':
            planData = {
                id: planId,
                tipo: 'TV',
                ubicacion: 'Sala',
                dispositivo: 'Decodificador',
                tarjetaModem: 'TV-001',
                estado: 'active',
                registrado: this.formatDate(new Date()),
                ultimoCorte: '-',
                ultimaReconexion: '-',
                vencimiento: this.formatDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)),
                paquetes: 'Premium HD',
                radius: 'TV-001'
            };
            break;
        case 'duo':
            planData = {
                id: planId,
                tipo: 'DUO',
                ubicacion: 'Casa Principal',
                dispositivo: 'Combo Router+TV',
                tarjetaModem: 'DUO-001',
                estado: 'active',
                registrado: this.formatDate(new Date()),
                ultimoCorte: '-',
                ultimaReconexion: '-',
                vencimiento: this.formatDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)),
                paquetes: 'Internet + TV',
                radius: 'DUO-001'
            };
            break;
    }
    
    this.contractServices.push(planData);
    this.renderServicesTable();
    this.showNotification(`Plan ${serviceTypeText} agregado exitosamente`, 'success');
};

CRMApp.prototype.renderServicesTable = function() {
    const tableBody = document.getElementById('plansTableBody');
    const emptyPlans = document.getElementById('emptyPlans');
    const plansTable = document.getElementById('plansTable');
    
    if (!tableBody || !emptyPlans || !plansTable) return;
    
    if (this.contractServices.length === 0) {
        tableBody.innerHTML = '';
        emptyPlans.style.display = 'flex';
        plansTable.style.display = 'none';
        return;
    }
    
    emptyPlans.style.display = 'none';
    plansTable.style.display = 'table';
    
    tableBody.innerHTML = this.contractServices.map(service => `
        <tr>
            <td>${service.tipo}</td>
            <td>${service.ubicacion}</td>
            <td>${service.dispositivo}</td>
            <td>${service.tarjetaModem}</td>
            <td><span class="status-badge ${service.estado}">${this.getStatusText(service.estado)}</span></td>
            <td>${service.registrado}</td>
            <td>${service.ultimoCorte}</td>
            <td>${service.ultimaReconexion}</td>
            <td>${service.vencimiento}</td>
            <td>${service.paquetes}</td>
            <td>
                <button class="btn-delete" onclick="window.crm.deleteService(${service.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
            <td>${service.radius}</td>
        </tr>
    `).join('');
};

CRMApp.prototype.getStatusText = function(status) {
    const statusTexts = {
        'active': 'Activo',
        'inactive': 'Inactivo',
        'pending': 'Pendiente'
    };
    return statusTexts[status] || status;
};

CRMApp.prototype.deleteService = function(serviceId) {
    console.log(`Eliminando servicio ID: ${serviceId}`);
    
    this.contractServices = this.contractServices.filter(s => s.id !== serviceId);
    this.renderServicesTable();
    
    this.showNotification('Servicio eliminado exitosamente', 'success');
};

CRMApp.prototype.formatDate = function(date) {
    // Validar que date sea un objeto Date válido
    if (!date) {
        return 'Sin fecha';
    }
    
    // Si es un string, intentar convertirlo a Date
    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    // Verificar que sea un objeto Date válido
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Fecha inválida';
    }
    
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};

CRMApp.prototype.loadClientServicesData = function() {
    console.log('Cargando datos de servicios del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) return;
    
    try {
        const client = JSON.parse(clientData);
        
        // Load saved services data if available
        const savedServicesData = localStorage.getItem('contractServicesData');
        if (savedServicesData) {
            const servicesData = JSON.parse(savedServicesData);
            const clientId = client.id;
            
            if (servicesData[clientId]) {
                this.contractServices = servicesData[clientId];
                this.renderServicesTable();
                console.log('Datos de servicios del cliente cargados');
            }
        }
        
    } catch (error) {
        console.error('Error al cargar datos de servicios del cliente:', error);
    }
};

CRMApp.prototype.setupReferencesFunctionality = function() {
    console.log('Configurando funcionalidad de referencias...');
    
    // Initialize references array
    this.contractReferences = [];
    
    // Setup add reference button
    const addReferenceBtn = document.getElementById('addReferenceBtn');
    if (addReferenceBtn) {
        addReferenceBtn.addEventListener('click', () => {
            this.addReference();
        });
    }
    
    // Load client references data
    this.loadClientReferencesData();
    
    // Render initial table
    this.renderReferencesTable();
    
    console.log('Funcionalidad de referencias configurada');
};

CRMApp.prototype.addReference = function() {
    console.log('Agregando nueva referencia...');
    
    // Get form values
    const nombres = document.getElementById('nombresReferencia').value.trim();
    const identificacion = document.getElementById('identificacionReferencia').value.trim();
    const parentesco = document.getElementById('parentescoReferencia').value;
    const telefono = document.getElementById('telefonoReferencia').value.trim();
    
    // Validate required fields
    if (!nombres || !identificacion || !telefono) {
        this.showNotification('Por favor complete todos los campos requeridos', 'warning');
        return;
    }
    
    // Check for duplicate identification
    const existingReference = this.contractReferences.find(ref => ref.identificacion === identificacion);
    if (existingReference) {
        this.showNotification('Ya existe una referencia con esta identificación', 'warning');
        return;
    }
    
    // Create new reference
    const newReference = {
        id: Date.now(),
        nombres: nombres,
        identificacion: identificacion,
        parentesco: parentesco || 'No especificado',
        telefono: telefono,
        fechaAgregado: new Date().toISOString()
    };
    
    // Add to array
    this.contractReferences.push(newReference);
    
    // Render table
    this.renderReferencesTable();
    
    // Clear form
    this.clearReferenceForm();
    
    // Show success message
    this.showNotification('Referencia agregada exitosamente', 'success');
    
    console.log('Referencia agregada:', newReference);
};

CRMApp.prototype.clearReferenceForm = function() {
    document.getElementById('nombresReferencia').value = '';
    document.getElementById('identificacionReferencia').value = '';
    document.getElementById('parentescoReferencia').value = '';
    document.getElementById('telefonoReferencia').value = '';
};

CRMApp.prototype.renderReferencesTable = function() {
    const tableBody = document.getElementById('referencesTableBody');
    const emptyReferences = document.getElementById('emptyReferences');
    const referencesTable = document.getElementById('referencesTable');
    
    if (!tableBody || !emptyReferences || !referencesTable) return;
    
    if (this.contractReferences.length === 0) {
        tableBody.innerHTML = '';
        emptyReferences.style.display = 'flex';
        referencesTable.style.display = 'none';
        return;
    }
    
    emptyReferences.style.display = 'none';
    referencesTable.style.display = 'table';
    
    tableBody.innerHTML = this.contractReferences.map(reference => `
        <tr>
            <td>${reference.nombres}</td>
            <td>${reference.identificacion}</td>
            <td>${this.getParentescoText(reference.parentesco)}</td>
            <td>${reference.telefono}</td>
            <td>
                <button class="btn-edit" onclick="window.crm.editReference(${reference.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="window.crm.deleteReference(${reference.id})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </td>
        </tr>
    `).join('');
};

CRMApp.prototype.getParentescoText = function(parentesco) {
    const parentescoTexts = {
        'padre': 'PADRE',
        'madre': 'MADRE',
        'hermano': 'HERMANO(A)',
        'amigo': 'AMIGO(A)',
        'abuelo': 'ABUELO(A)',
        'tio': 'TIO(A)',
        'esposo': 'ESPOSO(A)',
        'hijo': 'HIJO(A)',
        'otros': 'OTROS',
        'No especificado': 'No especificado'
    };
    return parentescoTexts[parentesco] || parentesco;
};

CRMApp.prototype.editReference = function(referenceId) {
    console.log(`Editando referencia ID: ${referenceId}`);
    
    const reference = this.contractReferences.find(r => r.id === referenceId);
    if (!reference) return;
    
    // Fill form with reference data
    document.getElementById('nombresReferencia').value = reference.nombres;
    document.getElementById('identificacionReferencia').value = reference.identificacion;
    document.getElementById('parentescoReferencia').value = reference.parentesco;
    document.getElementById('telefonoReferencia').value = reference.telefono;
    
    // Remove from array (will be re-added when form is submitted)
    this.deleteReference(referenceId, false);
    
    this.showNotification('Referencia cargada para edición', 'info');
};

CRMApp.prototype.deleteReference = function(referenceId, showNotification = true) {
    console.log(`Eliminando referencia ID: ${referenceId}`);
    
    this.contractReferences = this.contractReferences.filter(r => r.id !== referenceId);
    this.renderReferencesTable();
    
    if (showNotification) {
        this.showNotification('Referencia eliminada exitosamente', 'success');
    }
};

CRMApp.prototype.loadClientReferencesData = function() {
    console.log('Cargando datos de referencias del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) return;
    
    try {
        const client = JSON.parse(clientData);
        
        // Load saved references data if available
        const savedReferencesData = localStorage.getItem('contractReferencesData');
        if (savedReferencesData) {
            const referencesData = JSON.parse(savedReferencesData);
            const clientId = client.id;
            
            if (referencesData[clientId]) {
                this.contractReferences = referencesData[clientId];
                this.renderReferencesTable();
                console.log('Datos de referencias del cliente cargados');
            }
        }
        
    } catch (error) {
        console.error('Error al cargar datos de referencias del cliente:', error);
    }
};

// Attachments functionality
CRMApp.prototype.setupAttachmentsFunctionality = function() {
    console.log('Configurando funcionalidad de adjuntos...');
    
    // Initialize attachments data
    this.contractAttachments = {
        photos: [],
        signatures: [],
        files: []
    };
    
    // Setup document type selection
    this.setupDocumentTypeSelection();
    
    // Setup attachment type toggle
    this.setupAttachmentTypeToggle();
    
    // Setup photo functionality
    this.setupPhotoFunctionality();
    
    // Setup signature functionality
    this.setupSignatureFunctionality();
    
    // Setup file functionality
    this.setupFileFunctionality();
    
    // Load client attachments data
    this.loadClientAttachmentsData();
    
    console.log('Funcionalidad de adjuntos configurada');
};

CRMApp.prototype.setupDocumentTypeSelection = function() {
    const documentSelect = document.getElementById('tipoDocumento');
    if (documentSelect) {
        documentSelect.addEventListener('change', (e) => {
            console.log('Tipo de documento seleccionado:', e.target.value);
            this.showNotification('Tipo de documento seleccionado', 'info');
        });
    }
};

CRMApp.prototype.setupAttachmentTypeToggle = function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const photoSection = document.getElementById('photoSection');
    const fileSection = document.getElementById('fileSection');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const type = button.getAttribute('data-type');
            
            if (type === 'foto') {
                photoSection.style.display = 'block';
                fileSection.style.display = 'none';
            } else if (type === 'archivo') {
                photoSection.style.display = 'none';
                fileSection.style.display = 'block';
            }
            
            console.log('Tipo de adjunto cambiado a:', type);
        });
    });
};

CRMApp.prototype.setupPhotoFunctionality = function() {
    const accessCameraBtn = document.getElementById('accessCameraBtn');
    const selectPhotoBtn = document.getElementById('selectPhotoBtn');
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    const photoPreview = document.getElementById('photoPreview');
    const photoImage = document.getElementById('photoImage');
    
    // Access camera button
    if (accessCameraBtn) {
        accessCameraBtn.addEventListener('click', () => {
            this.accessCamera();
        });
    }
    
    // Select photo button
    if (selectPhotoBtn) {
        selectPhotoBtn.addEventListener('click', () => {
            this.selectPhoto();
        });
    }
    
    // Photo placeholder click
    if (photoPlaceholder) {
        photoPlaceholder.addEventListener('click', () => {
            this.selectPhoto();
        });
    }
};

CRMApp.prototype.accessCamera = function() {
    console.log('Accediendo a la cámara...');
    
    // Check if getUserMedia is supported
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // Create a modal for camera preview
                this.showCameraModal(stream);
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
                this.showNotification('No se pudo acceder a la cámara', 'error');
            });
    } else {
        this.showNotification('La cámara no está disponible en este dispositivo', 'warning');
    }
};

CRMApp.prototype.showCameraModal = function(stream) {
    // Create camera modal
    const modal = document.createElement('div');
    modal.className = 'camera-modal';
    modal.innerHTML = `
        <div class="camera-modal-content">
            <div class="camera-header">
                <h4>Capturar Foto</h4>
                <button class="close-camera" onclick="this.closest('.camera-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="camera-preview">
                <video id="cameraVideo" autoplay></video>
                <canvas id="cameraCanvas" style="display: none;"></canvas>
            </div>
            <div class="camera-actions">
                <button class="btn btn-success" id="capturePhotoBtn">
                    <i class="fas fa-camera"></i> Capturar
                </button>
                <button class="btn btn-secondary" onclick="this.closest('.camera-modal').remove()">
                    Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Start video stream
    const video = document.getElementById('cameraVideo');
    video.srcObject = stream;
    
    // Capture photo
    document.getElementById('capturePhotoBtn').addEventListener('click', () => {
        this.capturePhoto(video, stream);
    });
};

CRMApp.prototype.capturePhoto = function(video, stream) {
    const canvas = document.getElementById('cameraCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.drawImage(video, 0, 0);
    
    // Convert to data URL
    const dataURL = canvas.toDataURL('image/jpeg');
    
    // Stop camera stream
    stream.getTracks().forEach(track => track.stop());
    
    // Close modal
    document.querySelector('.camera-modal').remove();
    
    // Set photo
    this.setPhoto(dataURL);
};

CRMApp.prototype.selectPhoto = function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
};

CRMApp.prototype.setPhoto = function(dataURL) {
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    const photoPreview = document.getElementById('photoPreview');
    const photoImage = document.getElementById('photoImage');
    
    if (photoPlaceholder && photoPreview && photoImage) {
        photoImage.src = dataURL;
        photoPlaceholder.style.display = 'none';
        photoPreview.style.display = 'block';
        
        // Save photo to attachments
        this.contractAttachments.photos.push({
            id: Date.now(),
            dataURL: dataURL,
            timestamp: new Date().toISOString()
        });
        
        this.showNotification('Foto capturada exitosamente', 'success');
        console.log('Foto guardada en adjuntos');
    }
};

CRMApp.prototype.setupSignatureFunctionality = function() {
    const canvas = document.getElementById('signatureCanvas');
    const clearBtn = document.getElementById('clearSignatureBtn');
    const saveBtn = document.getElementById('saveSignatureBtn');
    const opticalBtn = document.getElementById('opticalPenBtn');
    const scannerBtn = document.getElementById('scannedSignatureBtn');
    const saveFinalBtn = document.getElementById('saveFinalSignatureBtn');
    
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // Mouse events
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = this.getMousePos(canvas, e);
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        
        const [currentX, currentY] = this.getMousePos(canvas, e);
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        [lastX, lastY] = [currentX, currentY];
    });
    
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    
    canvas.addEventListener('mouseout', () => {
        isDrawing = false;
    });
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    });
    
    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        canvas.dispatchEvent(mouseEvent);
    });
    
    // Clear button
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.showNotification('Firma limpiada', 'info');
        });
    }
    
    // Save button
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            this.saveSignature(canvas);
        });
    }
    
    // Optical pen button
    if (opticalBtn) {
        opticalBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de lápiz óptico no disponible', 'info');
        });
    }
    
    // Scanner button
    if (scannerBtn) {
        scannerBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de escáner no disponible', 'info');
        });
    }
    
    // Save final button
    if (saveFinalBtn) {
        saveFinalBtn.addEventListener('click', () => {
            this.saveSignature(canvas);
        });
    }
};

CRMApp.prototype.getMousePos = function(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return [
        e.clientX - rect.left,
        e.clientY - rect.top
    ];
};

CRMApp.prototype.saveSignature = function(canvas) {
    const dataURL = canvas.toDataURL('image/png');
    
    // Save signature to attachments
    this.contractAttachments.signatures.push({
        id: Date.now(),
        dataURL: dataURL,
        timestamp: new Date().toISOString()
    });
    
    this.showNotification('Firma guardada exitosamente', 'success');
    console.log('Firma guardada en adjuntos');
};

CRMApp.prototype.setupFileFunctionality = function() {
    const dropzone = document.getElementById('fileDropzone');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    
    if (!dropzone || !fileInput || !fileList) return;
    
    // File input change
    fileInput.addEventListener('change', (e) => {
        this.handleFiles(e.target.files);
    });
    
    // Dropzone click
    dropzone.addEventListener('click', () => {
        fileInput.click();
    });
    
    // Drag and drop
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.background = '#e3f2fd';
    });
    
    dropzone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropzone.style.background = '#f8f9fa';
    });
    
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.background = '#f8f9fa';
        this.handleFiles(e.dataTransfer.files);
    });
};

CRMApp.prototype.handleFiles = function(files) {
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileData = {
                id: Date.now(),
                name: file.name,
                size: file.size,
                type: file.type,
                dataURL: e.target.result,
                timestamp: new Date().toISOString()
            };
            
            this.contractAttachments.files.push(fileData);
            this.renderFileList();
            this.showNotification(`Archivo ${file.name} agregado`, 'success');
        };
        reader.readAsDataURL(file);
    });
};

CRMApp.prototype.renderFileList = function() {
    const fileList = document.getElementById('fileList');
    if (!fileList) return;
    
    if (this.contractAttachments.files.length === 0) {
        fileList.innerHTML = '';
        return;
    }
    
    fileList.innerHTML = this.contractAttachments.files.map(file => `
        <div class="file-item">
            <div class="file-item-info">
                <i class="fas fa-file file-item-icon"></i>
                <div class="file-item-details">
                    <p class="file-item-name">${file.name}</p>
                    <p class="file-item-size">${this.formatFileSize(file.size)}</p>
                </div>
            </div>
            <div class="file-item-actions">
                <button class="btn-remove" onclick="window.crm.removeFile(${file.id})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
};

CRMApp.prototype.formatFileSize = function(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

CRMApp.prototype.removeFile = function(fileId) {
    this.contractAttachments.files = this.contractAttachments.files.filter(f => f.id !== fileId);
    this.renderFileList();
    this.showNotification('Archivo eliminado', 'success');
};

CRMApp.prototype.loadClientAttachmentsData = function() {
    console.log('Cargando datos de adjuntos del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) return;
    
    try {
        const client = JSON.parse(clientData);
        
        // Load saved attachments data if available
        const savedAttachmentsData = localStorage.getItem('contractAttachmentsData');
        if (savedAttachmentsData) {
            const attachmentsData = JSON.parse(savedAttachmentsData);
            const clientId = client.id;
            
            if (attachmentsData[clientId]) {
                this.contractAttachments = attachmentsData[clientId];
                this.renderFileList();
                console.log('Datos de adjuntos del cliente cargados');
            }
        }
        
    } catch (error) {
        console.error('Error al cargar datos de adjuntos del cliente:', error);
    }
};

CRMApp.prototype.calculateEndDate = function(startDate, durationMonths) {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setMonth(end.getMonth() + durationMonths);
    return end.toISOString().split('T')[0];
};

CRMApp.prototype.previewContract = function(clientId) {
    const client = this.contractReadyClients.find(c => c.id == clientId);
    if (!client) return;

    const modal = document.getElementById('contractPreviewModal');
    const content = document.getElementById('contractPreviewContent');
    
    if (content) {
        content.innerHTML = `
            <div class="contract-preview">
                <h3>CONTRATO DE SERVICIOS DE INTERNET</h3>
                <div class="contract-section">
                    <h4>INFORMACIÓN DEL CLIENTE</h4>
                    <p><strong>Nombre:</strong> ${client.name}</p>
                    <p><strong>Empresa:</strong> ${client.company}</p>
                    <p><strong>Email:</strong> ${client.email}</p>
                    <p><strong>Teléfono:</strong> ${client.phone}</p>
                    <p><strong>Identificación:</strong> ${client.clientInfo.identification} - ${client.clientInfo.idNumber}</p>
                </div>
                
                <div class="contract-section">
                    <h4>DETALLES DEL SERVICIO</h4>
                    <p><strong>Plan:</strong> ${client.serviceDetails.plan}</p>
                    <p><strong>Velocidad:</strong> ${client.serviceDetails.speed}</p>
                    <p><strong>Precio Mensual:</strong> $${client.serviceDetails.price}</p>
                    <p><strong>Duración:</strong> ${client.serviceDetails.duration} meses</p>
                </div>
                
                <div class="contract-section">
                    <h4>CONDICIONES DEL CONTRATO</h4>
                    <p><strong>Fecha de Inicio:</strong> ${client.contractInfo.contractDate}</p>
                    <p><strong>Fecha de Finalización:</strong> ${this.calculateEndDate(client.contractInfo.contractDate, client.serviceDetails.duration)}</p>
                    <p><strong>Tipo de Cobro:</strong> ${client.contractInfo.collectionType}</p>
                    <p><strong>Día de Cobro:</strong> ${client.contractInfo.collectionDay}</p>
                </div>
                
                <div class="contract-section">
                    <h4>TERMINOS Y CONDICIONES</h4>
                    <p>1. El cliente se compromete a pagar el servicio mensualmente.</p>
                    <p>2. El contrato tiene una duración de ${client.serviceDetails.duration} meses.</p>
                    <p>3. El cliente puede cancelar el servicio con 30 días de anticipación.</p>
                    <p>4. La empresa se reserva el derecho de suspender el servicio por falta de pago.</p>
                </div>
            </div>
        `;
    }
    
    if (modal) {
        modal.style.display = 'block';
    }
};

CRMApp.prototype.saveContract = function(clientId) {
    console.log('Guardando contrato para cliente ID:', clientId);
    
    const client = this.contractReadyClients.find(c => c.id == clientId);
    if (!client) {
        console.error('Cliente no encontrado para guardar contrato');
        alert('Error: Cliente no encontrado');
        return;
    }

    try {
        const contractData = {
            id: Date.now(),
            clientId: clientId,
            clientName: client.name,
            contractNumber: document.getElementById('contractNumber').value,
            status: 'generado',
            contractType: document.getElementById('contractType').value,
            value: parseInt(document.getElementById('monthlyPrice').value),
            startDate: document.getElementById('contractStartDate').value,
            endDate: document.getElementById('contractEndDate').value,
            signatureDate: document.getElementById('signatureDate').value,
            generatedDate: new Date().toISOString().split('T')[0],
            advisor: client.advisor,
            notes: document.getElementById('contractNotes').value
        };

        console.log('Datos del contrato:', contractData);

        // Inicializar contractsData si no existe
        if (!this.contractsData) {
            this.contractsData = [];
        }

        this.contractsData.push(contractData);
        this.saveData();
        
        console.log('Contrato guardado exitosamente');
        
        // Cerrar modal
        const modal = document.getElementById('contractGenerationModal');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
        }
        
        // Mostrar notificación
        this.showNotification('Contrato generado exitosamente', 'success');
        
        // Actualizar la lista de clientes
        this.updateClientsListGrid();
        
        console.log('Proceso de guardado completado');
        
    } catch (error) {
        console.error('Error al guardar contrato:', error);
        alert('Error al guardar el contrato: ' + error.message);
    }
};

CRMApp.prototype.refreshClientsList = function() {
    this.updateClientsListGrid();
    this.showNotification('Lista de clientes actualizada', 'info');
};

CRMApp.prototype.exportClientsList = function() {
    // Simulate export functionality
    this.showNotification('Exportando lista de clientes...', 'info');
    setTimeout(() => {
        this.showNotification('Lista exportada exitosamente', 'success');
    }, 2000);
};

CRMApp.prototype.updateContractsGrid = function() {
    const contractsGrid = document.getElementById('contractsGrid');
    if (!contractsGrid) return;

    contractsGrid.innerHTML = this.contractsData.map(contract => `
        <div class="contract-card">
            <div class="contract-header">
                <h3>${contract.clientName}</h3>
                <span class="contract-status status-${contract.status}">${contract.status}</span>
            </div>
            <div class="contract-info">
                <p><strong>Número:</strong> ${contract.contractNumber}</p>
                <p><strong>Tipo:</strong> ${contract.contractType}</p>
                <p><strong>Valor:</strong> $${contract.value}/mes</p>
                <p><strong>Inicio:</strong> ${contract.startDate}</p>
                <p><strong>Fin:</strong> ${contract.endDate}</p>
                <p><strong>Asesor:</strong> ${contract.advisor}</p>
            </div>
            <div class="contract-actions">
                <button class="btn btn-primary" onclick="window.crm.viewContractDetail(${contract.id})">Ver Detalle</button>
                <button class="btn btn-success" onclick="window.crm.downloadContract(${contract.id})">Descargar</button>
            </div>
        </div>
    `).join('');
};

CRMApp.prototype.updateTemplatesGrid = function() {
    const templatesGrid = document.getElementById('templatesGrid');
    if (!templatesGrid) return;

    templatesGrid.innerHTML = this.contractTemplates.map(template => `
        <div class="template-card">
            <div class="template-header">
                <h3>${template.name}</h3>
                <span class="template-type">${template.type}</span>
            </div>
            <div class="template-info">
                <p>${template.description}</p>
                <p><strong>Creado:</strong> ${template.createdAt}</p>
            </div>
            <div class="template-actions">
                <button class="btn btn-primary" onclick="window.crm.editTemplate(${template.id})">Editar</button>
                <button class="btn btn-success" onclick="window.crm.useTemplate(${template.id})">Usar</button>
            </div>
        </div>
    `).join('');
};

CRMApp.prototype.updateReports = function() {
    const reportsContent = document.getElementById('reportsContent');
    if (!reportsContent) return;

    reportsContent.innerHTML = `
        <div class="reports-grid">
            <div class="report-card">
                <h3>Reporte de Contratos Generados</h3>
                <p>Total: ${this.contractsData.length} contratos</p>
                <button class="btn btn-primary">Generar PDF</button>
            </div>
            <div class="report-card">
                <h3>Reporte de Clientes Pendientes</h3>
                <p>Pendientes: ${this.contractReadyClients.filter(c => c.status === 'aceptado').length}</p>
                <button class="btn btn-primary">Generar PDF</button>
            </div>
            <div class="report-card">
                <h3>Reporte de Valor de Contratos</h3>
                <p>Valor total: $${this.contractsData.reduce((sum, c) => sum + c.value, 0).toLocaleString()}</p>
                <button class="btn btn-primary">Generar PDF</button>
            </div>
        </div>
    `;
};

CRMApp.prototype.redirectToRole = function() {
    if (!this.isAuthenticated) {
        window.location.href = 'index.html';
        return;
    }
    
    // Redirect based on role
    if (this.currentRole === 'admin') {
        window.location.href = 'admin.html';
    } else if (this.currentRole === 'manager') {
        window.location.href = 'manager.html';
    } else if (this.currentRole === 'advisor') {
        window.location.href = 'advisor.html';
    } else if (this.currentRole === 'client-success') {
        window.location.href = 'client-success.html';
    } else if (this.currentRole === 'contract-generator') {
        window.location.href = 'contract-generator.html';
    } else {
        window.location.href = 'index.html';
    }
};

CRMApp.prototype.initContractGenerationPage = function() {
    console.log('Inicializando página de generación de contratos...');
    this.loadClientData();
    this.setupWizardNavigation();
    this.setupContractFormFunctionality();
    this.setupContractGenerationPageEventListeners();
};

CRMApp.prototype.loadClientData = function() {
    console.log('Cargando datos del cliente...');
    
    const clientData = localStorage.getItem('currentContractClient');
    if (!clientData) {
        console.error('No se encontraron datos del cliente');
        this.showNotification('No se encontraron datos del cliente', 'error');
        return;
    }
    
    try {
        const client = JSON.parse(clientData);
        console.log('Cliente cargado:', client);
        
        // Llenar campos del formulario con datos del cliente
        this.populateFormWithClientData(client);
        
    } catch (error) {
        console.error('Error al parsear datos del cliente:', error);
        this.showNotification('Error al cargar datos del cliente', 'error');
    }
};

CRMApp.prototype.populateFormWithClientData = function(client) {
    console.log('Poblando formulario con datos del cliente...');
    
    // Información básica del cliente
    if (document.getElementById('firstName')) {
        document.getElementById('firstName').value = client.name.split(' ')[0] || '';
    }
    if (document.getElementById('lastName')) {
        document.getElementById('lastName').value = client.name.split(' ').slice(1).join(' ') || '';
    }
    if (document.getElementById('clientEmail')) {
        document.getElementById('clientEmail').value = client.email || '';
    }
    if (document.getElementById('clientPhone')) {
        document.getElementById('clientPhone').value = client.phone || '';
    }
    if (document.getElementById('fullName')) {
        document.getElementById('fullName').value = client.clientInfo.fullName || '';
    }
    
    // Identificación
    if (document.getElementById('identificationNumber')) {
        document.getElementById('identificationNumber').value = client.clientInfo.idNumber || '';
    }
    
    // Tipo de identificación
    const identificationType = client.clientInfo.identification;
    if (identificationType) {
        const radio = document.querySelector(`input[name="identificationType"][value="${identificationType}"]`);
        if (radio) {
            radio.checked = true;
        }
    }
    
    // Código de contrato
    if (document.getElementById('contractCode')) {
        document.getElementById('contractCode').value = `CTR-${String(client.id).padStart(3, '0')}-2024`;
    }
    
    // Tipo de contrato
    if (document.getElementById('contractType')) {
        document.getElementById('contractType').value = client.contractType || '';
    }
    
    // Fechas
    if (document.getElementById('contractDate')) {
        document.getElementById('contractDate').value = client.contractInfo.contractDate || '';
    }
    if (document.getElementById('signatureDate')) {
        document.getElementById('signatureDate').value = client.contractInfo.signatureDate || '';
    }
    if (document.getElementById('birthDate')) {
        document.getElementById('birthDate').value = client.clientInfo.birthDate || '';
    }
    if (document.getElementById('duration')) {
        document.getElementById('duration').value = client.serviceDetails.duration || '';
    }
    if (document.getElementById('expirationDate')) {
        document.getElementById('expirationDate').value = this.calculateEndDate(client.contractInfo.contractDate, client.serviceDetails.duration);
    }
    
    // Información de pago
    if (document.getElementById('collectionType')) {
        document.getElementById('collectionType').value = client.contractInfo.collectionType || '';
    }
    if (document.getElementById('collectionDay')) {
        document.getElementById('collectionDay').value = client.contractInfo.collectionDay || '';
    }
    
    // Estado del cliente
    if (document.getElementById('clientCondition')) {
        document.getElementById('clientCondition').value = client.contractInfo.clientCondition || '';
    }
    
    console.log('Formulario poblado exitosamente');
};

CRMApp.prototype.setupContractGenerationPageEventListeners = function() {
    console.log('Configurando event listeners de la página de generación...');
    
    // Cancel button
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (confirm('¿Está seguro de que desea cancelar la generación del contrato?')) {
                window.location.href = 'contract-generator.html';
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            this.logout();
        });
    }
    
    // Invoice data button
    const invoiceDataBtn = document.getElementById('invoiceDataBtn');
    if (invoiceDataBtn) {
        invoiceDataBtn.addEventListener('click', () => {
            this.showNotification('Funcionalidad de Datos Factura en desarrollo', 'info');
        });
    }
    
    console.log('Event listeners configurados');
};

CRMApp.prototype.showNotification = function(message, type = 'info') {
    console.log(`Notificación ${type}:`, message);
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Estilos según el tipo
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #dc3545, #c82333)';
    } else if (type === 'warning') {
        notification.style.background = 'linear-gradient(135deg, #ffc107, #e0a800)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #17a2b8, #138496)';
    }
    
    notification.textContent = message;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
    
    // Agregar estilos CSS para las animaciones si no existen
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
};

// Contract Filters Functions
CRMApp.prototype.applyContractFilters = function() {
    console.log('Aplicando filtros de contratos...');
    
    const serviceFilter = document.getElementById('contractServiceFilter').value;
    const dateFilter = document.getElementById('contractDateFilter').value;
    const searchFilter = document.getElementById('contractSearchFilter').value;
    
    let filteredContracts = [...this.contractsData];
    
    // Filter by service
    if (serviceFilter) {
        filteredContracts = filteredContracts.filter(contract => contract.service === serviceFilter);
    }
    
    // Filter by date
    if (dateFilter) {
        const now = new Date();
        filteredContracts = filteredContracts.filter(contract => {
            const contractDate = new Date(contract.startDate);
            switch (dateFilter) {
                case 'today':
                    return contractDate.toDateString() === now.toDateString();
                case 'week':
                    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    return contractDate >= weekAgo;
                case 'month':
                    return contractDate.getMonth() === now.getMonth() && contractDate.getFullYear() === now.getFullYear();
                case 'quarter':
                    const quarter = Math.floor(now.getMonth() / 3);
                    return Math.floor(contractDate.getMonth() / 3) === quarter && contractDate.getFullYear() === now.getFullYear();
                case 'year':
                    return contractDate.getFullYear() === now.getFullYear();
                default:
                    return true;
            }
        });
    }
    
    // Filter by search
    if (searchFilter) {
        const searchLower = searchFilter.toLowerCase();
        filteredContracts = filteredContracts.filter(contract => 
            contract.clientName.toLowerCase().includes(searchLower) ||
            contract.contractNumber.toLowerCase().includes(searchLower) ||
            contract.service.toLowerCase().includes(searchLower)
        );
    }
    
    this.renderContractsList(filteredContracts);
    this.updateContractsCount(filteredContracts.length);
    
    this.showNotification(`Filtros aplicados: ${filteredContracts.length} contratos encontrados`, 'info');
};

CRMApp.prototype.clearContractFilters = function() {
    console.log('Limpiando filtros de contratos...');
    
    // Reset all filter values
    document.getElementById('contractServiceFilter').value = '';
    document.getElementById('contractDateFilter').value = '';
    document.getElementById('contractSearchFilter').value = '';
    
    // Render all contracts
    this.renderContractsList();
    this.updateContractsCount(this.contractsData.length);
    
    this.showNotification('Filtros limpiados', 'info');
};

// Contract Generator Admin Functions
CRMApp.prototype.initContractGeneratorAdmin = function() {
    console.log('Inicializando Contract Generator Admin...');
    
    // Check if we're on the admin page with contract generator section
    const contractGeneratorSection = document.getElementById('contract-generator-section');
    if (!contractGeneratorSection) {
        console.log('No estamos en la sección de Contract Generator Admin');
        return;
    }
    
    // Load contract data
    this.loadContractDataForAdmin();
    
    // Initialize reports
    this.initContractReports();
    
    // Initialize analytics
    this.initContractAnalytics();
    
    console.log('Contract Generator Admin inicializado correctamente');
};

// Load Contract Data for Admin
CRMApp.prototype.loadContractDataForAdmin = function() {
    console.log('Cargando datos de contratos para admin...');
    
    try {
        const savedData = localStorage.getItem('crmData');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.contractsData = data.contractsData || [];
        }
        
        // If no data exists, initialize with mock data
        if (!this.contractsData || this.contractsData.length === 0) {
            this.initContractDataForAdmin();
        }
        
        console.log('Contratos cargados para admin:', this.contractsData.length);
        
    } catch (error) {
        console.error('Error cargando datos de contratos:', error);
        this.initContractDataForAdmin();
    }
};

// Initialize Contract Data for Admin
CRMApp.prototype.initContractDataForAdmin = function() {
    console.log('Inicializando datos de contratos para admin...');
    
    // Create mock contract data for admin
    this.contractsData = [
        {
            id: 'contract-001',
            contractNumber: 'CT-2024-001',
            clientName: 'Juan Pérez',
            clientCompany: 'Empresa ABC',
            status: 'activo',
            startDate: '2024-01-15',
            endDate: '2025-01-15',
            value: 15000,
            service: 'internet',
            advisor: 'Asesor 1'
        },
        {
            id: 'contract-002',
            contractNumber: 'CT-2024-002',
            clientName: 'María García',
            clientCompany: 'Corporación XYZ',
            status: 'pendiente',
            startDate: '2024-01-16',
            endDate: '2025-01-16',
            value: 25000,
            service: 'telefonia',
            advisor: 'Asesor 2'
        },
        {
            id: 'contract-003',
            contractNumber: 'CT-2024-003',
            clientName: 'Carlos López',
            clientCompany: 'Industrias DEF',
            status: 'activo',
            startDate: '2024-01-17',
            endDate: '2025-01-17',
            value: 30000,
            service: 'combo',
            advisor: 'Asesor 1'
        },
        {
            id: 'contract-004',
            contractNumber: 'CT-2024-004',
            clientName: 'Ana Rodríguez',
            clientCompany: 'Servicios GHI',
            status: 'vencido',
            startDate: '2023-12-01',
            endDate: '2024-01-01',
            value: 12000,
            service: 'cable',
            advisor: 'Asesor 3'
        },
        {
            id: 'contract-005',
            contractNumber: 'CT-2024-005',
            clientName: 'Luis Martínez',
            clientCompany: 'Tecnología JKL',
            status: 'activo',
            startDate: '2024-01-19',
            endDate: '2025-01-19',
            value: 18000,
            service: 'internet',
            advisor: 'Asesor 2'
        }
    ];
    
    console.log('Datos de contratos inicializados para admin:', this.contractsData.length);
    
    // Save to localStorage
    this.saveData();
};

// Initialize Contract Reports
CRMApp.prototype.initContractReports = function() {
    console.log('Inicializando reportes de contratos...');
    
    // Generate charts
    this.generateContractCharts();
    
    // Load contracts table
    this.loadContractsTable();
};

// Generate Contract Charts
CRMApp.prototype.generateContractCharts = function() {
    console.log('Generando gráficos de contratos...');
    
    // Contracts by Status Chart
    this.createContractsByStatusChart();
    
    // Contracts by Month Chart
    this.createContractsByMonthChart();
};

// Create Contracts by Status Chart
CRMApp.prototype.createContractsByStatusChart = function() {
    const ctx = document.getElementById('contractsByStatusChart');
    if (!ctx) return;
    
    const contracts = this.contractsData || [];
    const statusCounts = contracts.reduce((acc, contract) => {
        acc[contract.status] = (acc[contract.status] || 0) + 1;
        return acc;
    }, {});
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusCounts).map(status => this.getContractStatusText(status)),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: [
                    '#28a745', // Activo - Verde
                    '#ffc107', // Pendiente - Amarillo
                    '#dc3545'  // Vencido - Rojo
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

// Create Contracts by Month Chart
CRMApp.prototype.createContractsByMonthChart = function() {
    const ctx = document.getElementById('contractsByMonthChart');
    if (!ctx) return;
    
    const contracts = this.contractsData || [];
    const monthlyData = contracts.reduce((acc, contract) => {
        const month = new Date(contract.startDate).getMonth();
        acc[month] = (acc[month] || 0) + 1;
        return acc;
    }, {});
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const data = months.map((month, index) => monthlyData[index] || 0);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Contratos',
                data: data,
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Load Contracts Table
CRMApp.prototype.loadContractsTable = function() {
    console.log('Cargando tabla de contratos...');
    
    const tableBody = document.getElementById('contractsTableBody');
    if (!tableBody) return;
    
    const contracts = this.contractsData || [];
    
    if (contracts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">No hay contratos disponibles</td></tr>';
        return;
    }
    
    tableBody.innerHTML = contracts.map(contract => `
        <tr>
            <td>${contract.clientName}</td>
            <td>${contract.contractNumber}</td>
            <td><span class="status-badge ${contract.status}">${this.getContractStatusText(contract.status)}</span></td>
            <td>${this.formatDate(contract.startDate)}</td>
            <td>$${contract.value.toLocaleString()}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="window.crm.viewContractDetail('${contract.id}')">
                    <i class="fas fa-eye"></i> Ver
                </button>
            </td>
        </tr>
    `).join('');
};

// Initialize Contract Analytics
CRMApp.prototype.initContractAnalytics = function() {
    console.log('Inicializando analytics de contratos...');
    
    // Generate analytics charts
    this.generateAnalyticsCharts();
    
    // Load insights
    this.loadContractInsights();
};

// Generate Analytics Charts
CRMApp.prototype.generateAnalyticsCharts = function() {
    console.log('Generando gráficos de analytics...');
    
    // Performance Chart
    this.createPerformanceChart();
    
    // Trends Chart
    this.createTrendsChart();
};

// Create Performance Chart
CRMApp.prototype.createPerformanceChart = function() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    // Mock performance data
    const performanceData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Contratos Generados',
            data: [12, 19, 15, 25],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            fill: true
        }]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: performanceData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

// Create Trends Chart
CRMApp.prototype.createTrendsChart = function() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;
    
    // Mock trends data
    const trendsData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Valor Total',
            data: [45000, 52000, 48000, 61000, 55000, 67000],
            backgroundColor: '#2ecc71'
        }]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: trendsData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

// Load Contract Insights
CRMApp.prototype.loadContractInsights = function() {
    console.log('Cargando insights de contratos...');
    
    const insightsContent = document.getElementById('contractInsights');
    if (!insightsContent) return;
    
    // Mock insights data
    const insights = [
        {
            icon: '📈',
            title: 'Recomendación',
            text: 'Los contratos de servicios tienen un 15% más de probabilidad de renovación que los de productos.'
        },
        {
            icon: '⚠️',
            title: 'Alerta',
            text: '3 contratos están próximos a vencer en los próximos 30 días.'
        },
        {
            icon: '💡',
            title: 'Insight',
            text: 'El 80% de los contratos se generan en los primeros 15 días del mes.'
        }
    ];
    
    insightsContent.innerHTML = insights.map(insight => `
        <div class="insight-item">
            <div class="insight-icon">${insight.icon}</div>
            <div class="insight-text">
                <h5>${insight.title}</h5>
                <p>${insight.text}</p>
            </div>
        </div>
    `).join('');
};

// Generate Contract Report
CRMApp.prototype.generateContractReport = function() {
    console.log('Generando reporte de contratos...');
    
    const dateFrom = document.getElementById('reportDateFrom').value;
    const dateTo = document.getElementById('reportDateTo').value;
    const status = document.getElementById('reportStatus').value;
    
    let filteredContracts = [...this.contractsData];
    
    // Apply filters
    if (dateFrom && dateTo) {
        const fromDate = new Date(dateFrom);
        const toDate = new Date(dateTo);
        filteredContracts = filteredContracts.filter(contract => {
            const contractDate = new Date(contract.startDate);
            return contractDate >= fromDate && contractDate <= toDate;
        });
    }
    
    if (status) {
        filteredContracts = filteredContracts.filter(contract => contract.status === status);
    }
    
    console.log(`Reporte generado: ${filteredContracts.length} contratos encontrados`);
    
    // Update charts and table with filtered data
    this.updateContractCharts(filteredContracts);
    this.updateContractsTable(filteredContracts);
    
    this.showNotification(`Reporte generado: ${filteredContracts.length} contratos encontrados`, 'success');
};

// Update Contract Charts
CRMApp.prototype.updateContractCharts = function(contracts) {
    // Update charts with filtered data
    this.createContractsByStatusChart();
    this.createContractsByMonthChart();
};

// Update Contracts Table
CRMApp.prototype.updateContractsTable = function(contracts) {
    const tableBody = document.getElementById('contractsTableBody');
    if (!tableBody) return;
    
    if (contracts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">No se encontraron contratos con los filtros aplicados</td></tr>';
        return;
    }
    
    tableBody.innerHTML = contracts.map(contract => `
        <tr>
            <td>${contract.clientName}</td>
            <td>${contract.contractNumber}</td>
            <td><span class="status-badge ${contract.status}">${this.getContractStatusText(contract.status)}</span></td>
            <td>${this.formatDate(contract.startDate)}</td>
            <td>$${contract.value.toLocaleString()}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="window.crm.viewContractDetail('${contract.id}')">
                    <i class="fas fa-eye"></i> Ver
                </button>
            </td>
        </tr>
    `).join('');
};

// Get Contract Status Text
CRMApp.prototype.getContractStatusText = function(status) {
    const statusMap = {
        'activo': 'Activo',
        'pendiente': 'Pendiente',
        'vencido': 'Vencido'
    };
    return statusMap[status] || status;
};

// Contract Generator Admin Page Functions
CRMApp.prototype.initContractGeneratorAdminPage = function() {
    console.log('Inicializando Contract Generator Admin Page...');
    
    // Check if we're on the contract generator admin page
    const contractGeneratorAdmin = document.querySelector('.contract-generator-admin');
    if (!contractGeneratorAdmin) {
        console.log('No estamos en la página de Contract Generator Admin');
        return;
    }
    
    // Load contract data
    this.loadContractDataForAdmin();
    
    // Setup navigation
    this.setupContractGeneratorPageNavigation();
    
    // Initialize dashboard
    this.initContractGeneratorDashboard();
    
    console.log('Contract Generator Admin Page inicializado correctamente');
};

// Setup Contract Generator Page Navigation
CRMApp.prototype.setupContractGeneratorPageNavigation = function() {
    console.log('Configurando navegación de Contract Generator Page...');
    
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const targetSection = tab.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            // Load section content
            this.loadContractGeneratorPageSection(targetSection);
        });
    });
};

// Load Contract Generator Page Section
CRMApp.prototype.loadContractGeneratorPageSection = function(section) {
    console.log('Cargando sección de Contract Generator Page:', section);
    
    switch (section) {
        case 'dashboard':
            this.loadContractGeneratorDashboard();
            break;
        case 'reports':
            this.loadContractGeneratorReports();
            break;
        case 'analytics':
            this.loadContractGeneratorAnalytics();
            break;
        case 'contracts':
            this.loadContractGeneratorContracts();
            break;
    }
};

// Initialize Contract Generator Dashboard
CRMApp.prototype.initContractGeneratorDashboard = function() {
    console.log('Inicializando dashboard de Contract Generator...');
    
    // Load dashboard content
    this.loadContractGeneratorDashboard();
};

// Load Contract Generator Dashboard
CRMApp.prototype.loadContractGeneratorDashboard = function() {
    console.log('Cargando dashboard de Contract Generator...');
    
    // Update stats
    this.updateContractGeneratorStats();
    
    // Load recent contracts
    this.loadRecentContractsForDashboard();
    
    // Generate charts
    this.generateContractGeneratorCharts();
};

// Update Contract Generator Stats
CRMApp.prototype.updateContractGeneratorStats = function() {
    console.log('Actualizando estadísticas de Contract Generator...');
    
    const totalContracts = document.getElementById('totalContractsCount');
    const activeContracts = document.getElementById('activeContractsCount');
    const pendingContracts = document.getElementById('pendingContractsCount');
    const totalValue = document.getElementById('totalValueCount');
    
    const contracts = this.contractsData || [];
    
    if (totalContracts) totalContracts.textContent = contracts.length;
    if (activeContracts) activeContracts.textContent = contracts.filter(c => c.status === 'activo').length;
    if (pendingContracts) pendingContracts.textContent = contracts.filter(c => c.status === 'pendiente').length;
    
    const totalValueAmount = contracts.reduce((sum, contract) => sum + (contract.value || 0), 0);
    if (totalValue) totalValue.textContent = `$${totalValueAmount.toLocaleString()}`;
};

// Load Recent Contracts for Dashboard
CRMApp.prototype.loadRecentContractsForDashboard = function() {
    console.log('Cargando contratos recientes para dashboard...');
    
    const recentContractsList = document.getElementById('recentContractsList');
    if (!recentContractsList) return;
    
    const contracts = this.contractsData || [];
    const recentContracts = contracts.slice(0, 5); // Get first 5 contracts
    
    if (recentContracts.length === 0) {
        recentContractsList.innerHTML = '<p>No hay contratos recientes</p>';
        return;
    }
    
    recentContractsList.innerHTML = recentContracts.map(contract => `
        <div class="contract-item">
            <div class="contract-info">
                <h5>${contract.contractNumber}</h5>
                <p>${contract.clientName} - ${contract.clientCompany}</p>
            </div>
            <div class="contract-status">
                <span class="status-badge ${contract.status}">${this.getContractStatusText(contract.status)}</span>
                <span class="contract-value">$${contract.value.toLocaleString()}</span>
            </div>
        </div>
    `).join('');
};

// Generate Contract Generator Charts
CRMApp.prototype.generateContractGeneratorCharts = function() {
    console.log('Generando gráficos de Contract Generator...');
    
    // Contracts by Status Chart
    this.createContractGeneratorStatusChart();
    
    // Contracts by Month Chart
    this.createContractGeneratorMonthChart();
};

// Create Contract Generator Status Chart
CRMApp.prototype.createContractGeneratorStatusChart = function() {
    const ctx = document.getElementById('contractsByStatusChart');
    if (!ctx) return;
    
    const contracts = this.contractsData || [];
    const statusCounts = contracts.reduce((acc, contract) => {
        acc[contract.status] = (acc[contract.status] || 0) + 1;
        return acc;
    }, {});
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusCounts).map(status => this.getContractStatusText(status)),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: [
                    '#27ae60', // Activo - Verde
                    '#f39c12', // Pendiente - Naranja
                    '#e74c3c'  // Vencido - Rojo
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
};

// Create Contract Generator Month Chart
CRMApp.prototype.createContractGeneratorMonthChart = function() {
    const ctx = document.getElementById('contractsByMonthChart');
    if (!ctx) return;
    
    const contracts = this.contractsData || [];
    const monthlyData = contracts.reduce((acc, contract) => {
        const month = new Date(contract.startDate).getMonth();
        acc[month] = (acc[month] || 0) + 1;
        return acc;
    }, {});
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const data = months.map((month, index) => monthlyData[index] || 0);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Contratos',
                data: data,
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e9ecef'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
};

// Load Contract Generator Reports
CRMApp.prototype.loadContractGeneratorReports = function() {
    console.log('Cargando reportes de Contract Generator...');
    
    // Generate report charts
    this.generateContractGeneratorReportCharts();
    
    // Load contracts table
    this.loadContractGeneratorContractsTable();
};

// Generate Contract Generator Report Charts
CRMApp.prototype.generateContractGeneratorReportCharts = function() {
    console.log('Generando gráficos de reportes...');
    
    // Report Status Chart
    this.createContractGeneratorReportStatusChart();
    
    // Report Trend Chart
    this.createContractGeneratorReportTrendChart();
};

// Create Contract Generator Report Status Chart
CRMApp.prototype.createContractGeneratorReportStatusChart = function() {
    const ctx = document.getElementById('reportStatusChart');
    if (!ctx) return;
    
    const contracts = this.contractsData || [];
    const statusCounts = contracts.reduce((acc, contract) => {
        acc[contract.status] = (acc[contract.status] || 0) + 1;
        return acc;
    }, {});
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(statusCounts).map(status => this.getContractStatusText(status)),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: [
                    '#27ae60',
                    '#f39c12',
                    '#e74c3c'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

// Create Contract Generator Report Trend Chart
CRMApp.prototype.createContractGeneratorReportTrendChart = function() {
    const ctx = document.getElementById('reportTrendChart');
    if (!ctx) return;
    
    const contracts = this.contractsData || [];
    const monthlyData = contracts.reduce((acc, contract) => {
        const month = new Date(contract.startDate).getMonth();
        acc[month] = (acc[month] || 0) + 1;
        return acc;
    }, {});
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const data = months.map((month, index) => monthlyData[index] || 0);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Contratos',
                data: data,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Load Contract Generator Contracts Table
CRMApp.prototype.loadContractGeneratorContractsTable = function() {
    console.log('Cargando tabla de contratos para reportes...');
    
    const tableBody = document.getElementById('contractsTableBody');
    if (!tableBody) return;
    
    const contracts = this.contractsData || [];
    
    if (contracts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7">No hay contratos disponibles</td></tr>';
        return;
    }
    
    tableBody.innerHTML = contracts.map(contract => `
        <tr>
            <td>${contract.clientName}</td>
            <td>${contract.contractNumber}</td>
            <td><span class="status-badge ${contract.status}">${this.getContractStatusText(contract.status)}</span></td>
            <td>${contract.service}</td>
            <td>${this.formatDate(contract.startDate)}</td>
            <td>$${contract.value.toLocaleString()}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="window.crm.viewContractDetail('${contract.id}')">
                    <i class="fas fa-eye"></i> Ver
                </button>
            </td>
        </tr>
    `).join('');
    
    // Update table count
    const tableCount = document.getElementById('reportTableCount');
    if (tableCount) {
        tableCount.textContent = `${contracts.length} contratos`;
    }
};

// Load Contract Generator Analytics
CRMApp.prototype.loadContractGeneratorAnalytics = function() {
    console.log('Cargando analytics de Contract Generator...');
    
    // Generate analytics charts
    this.generateContractGeneratorAnalyticsCharts();
    
    // Load insights
    this.loadContractGeneratorInsights();
};

// Generate Contract Generator Analytics Charts
CRMApp.prototype.generateContractGeneratorAnalyticsCharts = function() {
    console.log('Generando gráficos de analytics...');
    
    // Performance Chart
    this.createContractGeneratorPerformanceChart();
    
    // Trends Chart
    this.createContractGeneratorTrendsChart();
};

// Create Contract Generator Performance Chart
CRMApp.prototype.createContractGeneratorPerformanceChart = function() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    // Mock performance data
    const performanceData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Contratos Generados',
            data: [12, 19, 15, 25],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: performanceData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Create Contract Generator Trends Chart
CRMApp.prototype.createContractGeneratorTrendsChart = function() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;
    
    // Mock trends data
    const trendsData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Valor Total',
            data: [45000, 52000, 48000, 61000, 55000, 67000],
            backgroundColor: '#2ecc71',
            borderColor: '#27ae60',
            borderWidth: 1,
            borderRadius: 4
        }]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: trendsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Load Contract Generator Insights
CRMApp.prototype.loadContractGeneratorInsights = function() {
    console.log('Cargando insights de Contract Generator...');
    
    const insightsContent = document.getElementById('contractInsights');
    if (!insightsContent) return;
    
    // Mock insights data
    const insights = [
        {
            icon: 'fas fa-chart-line',
            title: 'Recomendación',
            text: 'Los contratos de servicios tienen un 15% más de probabilidad de renovación que los de productos.'
        },
        {
            icon: 'fas fa-exclamation-triangle',
            title: 'Alerta',
            text: '3 contratos están próximos a vencer en los próximos 30 días.'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Insight',
            text: 'El 80% de los contratos se generan en los primeros 15 días del mes.'
        }
    ];
    
    insightsContent.innerHTML = insights.map(insight => `
        <div class="insight-item">
            <div class="insight-icon">
                <i class="${insight.icon}"></i>
            </div>
            <div class="insight-content">
                <h4>${insight.title}</h4>
                <p>${insight.text}</p>
            </div>
        </div>
    `).join('');
};

// Load Contract Generator Contracts
CRMApp.prototype.loadContractGeneratorContracts = function() {
    console.log('Cargando gestión de contratos...');
    
    // Load contracts management table
    this.loadContractGeneratorContractsManagementTable();
};

// Load Contract Generator Contracts Management Table
CRMApp.prototype.loadContractGeneratorContractsManagementTable = function() {
    console.log('Cargando tabla de gestión de contratos...');
    
    const tableBody = document.getElementById('contractsManagementTableBody');
    if (!tableBody) return;
    
    const contracts = this.contractsData || [];
    
    if (contracts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8">No hay contratos disponibles</td></tr>';
        return;
    }
    
    tableBody.innerHTML = contracts.map(contract => `
        <tr>
            <td>
                <input type="checkbox" class="form-checkbox">
            </td>
            <td>${contract.clientName}</td>
            <td>${contract.contractNumber}</td>
            <td><span class="status-badge ${contract.status}">${this.getContractStatusText(contract.status)}</span></td>
            <td>${contract.service}</td>
            <td>${this.formatDate(contract.startDate)}</td>
            <td>$${contract.value.toLocaleString()}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="window.crm.viewContractDetail('${contract.id}')">
                    <i class="fas fa-eye"></i> Ver
                </button>
            </td>
        </tr>
    `).join('');
};

// Clear Report Filters
CRMApp.prototype.clearReportFilters = function() {
    console.log('Limpiando filtros de reporte...');
    
    document.getElementById('reportDateFrom').value = '';
    document.getElementById('reportDateTo').value = '';
    document.getElementById('reportStatus').value = '';
    document.getElementById('reportService').value = '';
    
    this.showNotification('Filtros limpiados', 'info');
};

// Export Report
CRMApp.prototype.exportReport = function() {
    console.log('Exportando reporte...');
    
    this.showNotification('Funcionalidad de exportación en desarrollo', 'info');
};

// Print Report
CRMApp.prototype.printReport = function() {
    console.log('Imprimiendo reporte...');
    
    window.print();
};

// Generate AI Insights
CRMApp.prototype.generateAIInsights = function() {
    console.log('Generando insights de IA...');
    
    this.showNotification('Generando insights de IA...', 'info');
    
    // Simulate AI processing
    setTimeout(() => {
        this.loadContractGeneratorInsights();
        this.showNotification('Insights de IA generados exitosamente', 'success');
    }, 2000);
};
