export type Language = 'pt' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    title: string;
    subtitle: string;
    subdomain: string;
    createAccount: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleGradient: string;
    description: string;
  };
  studio: {
    inputLabel: string;
    placeholder: string;
    validateBtn: string;
    validatingBtn: string;
    invalidMsg: string;
    validMsg: string;
    resultTitle: string;
    nameLabel: string;
    birthLabel: string;
    statusLabel: string;
    sourceLabel: string;
    apiDemoTitle: string;
    apiSnippetLabel: string;
    copySnippet: string;
    copied: string;
  };
  pricing: {
    title: string;
    freeTitle: string;
    freePrice: string;
    freeDesc: string;
    proTitle: string;
    proPrice: string;
    proDesc: string;
    enterpriseTitle: string;
    enterprisePrice: string;
    enterpriseDesc: string;
  };
  features: {
    fastTitle: string;
    fastDesc: string;
    receitaTitle: string;
    receitaDesc: string;
    saasTitle: string;
    saasDesc: string;
  };
  footer: {
    rights: string;
    configuredSubdomain: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      title: 'HelpUS',
      subtitle: 'Validação e Consulta de CPF em Tempo Real',
      subdomain: 'cpf.helpusbr.com',
      createAccount: 'Criar Conta SaaS'
    },
    hero: {
      badge: 'Solução B2B de Validação e Consulta de CPF',
      titleStart: 'Consulte e Valide CPFs com ',
      titleGradient: 'Dados da Receita Federal',
      description: 'Auto-preenchimento instantâneo de Nome Completo e Data de Nascimento para clínicas, sistemas de laudo, imobiliárias e e-commerce.'
    },
    studio: {
      inputLabel: 'Digite o CPF para Consultar (11 dígitos)',
      placeholder: '000.000.000-00',
      validateBtn: 'Consultar CPF na Receita Federal',
      validatingBtn: 'Consultando Receita Federal...',
      invalidMsg: 'CPF Inválido! Verifique a digitação ou o algoritmo do CPF.',
      validMsg: 'CPF Válido e Encontrado na Receita Federal!',
      resultTitle: 'Resultado da Consulta Cadastral',
      nameLabel: 'Nome Completo do Paciente / Cliente',
      birthLabel: 'Data de Nascimento',
      statusLabel: 'Situação Cadastral',
      sourceLabel: 'Fonte de Dados',
      apiDemoTitle: 'Exemplo de Integração via API REST / Widget',
      apiSnippetLabel: 'Copie a URL da API para conectar ao seu sistema:',
      copySnippet: 'Copiar Endpoint API',
      copied: 'Copiado!'
    },
    pricing: {
      title: 'Planos de Acesso e Assinatura',
      freeTitle: 'Degustação Free',
      freePrice: 'R$ 0,00',
      freeDesc: 'Até 50 consultas/mês para testes e desenvolvimento.',
      proTitle: 'Plano Clínicas / B2B',
      proPrice: 'R$ 49,00/mês',
      proDesc: 'Até 2.000 consultas/mês + Integração API Key dedicada.',
      enterpriseTitle: 'Plano Enterprise',
      enterprisePrice: 'R$ 149,00/mês',
      enterpriseDesc: 'Consultas ilimitadas, suporte 24/7 e SLA garantido.'
    },
    features: {
      fastTitle: 'Resposta Instantânea',
      fastDesc: 'Consulta cadastral executada em menos de 1 segundo.',
      receitaTitle: 'Base da Receita Federal',
      receitaDesc: 'Dados oficiais de Nome Completo e Data de Nascimento.',
      saasTitle: 'Pronto para Vercel Cloud',
      saasDesc: 'Configurado para o subdomínio cpf.helpusbr.com no ecossistema HelpUS.'
    },
    footer: {
      rights: '© 2026 HelpUS CPF — Todos os direitos reservados. Ecossistema HelpUS BR.',
      configuredSubdomain: 'Subdomínio configurado'
    }
  },
  en: {
    nav: {
      title: 'HelpUS',
      subtitle: 'Real-Time CPF Lookup & Verification API',
      subdomain: 'cpf.helpusbr.com',
      createAccount: 'Create SaaS Account'
    },
    hero: {
      badge: 'B2B CPF Verification & Lookup Solution',
      titleStart: 'Lookup & Validate CPFs with ',
      titleGradient: 'Official Federal Data',
      description: 'Instant auto-fill of Full Name and Date of Birth for medical clinics, prescription systems, real estate, and e-commerce.'
    },
    studio: {
      inputLabel: 'Enter CPF to Lookup (11 digits)',
      placeholder: '000.000.000-00',
      validateBtn: 'Lookup CPF via Federal Revenue',
      validatingBtn: 'Querying Federal Database...',
      invalidMsg: 'Invalid CPF! Check the digits or mathematical checksum.',
      validMsg: 'Valid CPF Found in Federal Records!',
      resultTitle: 'Registration Query Results',
      nameLabel: 'Full Patient / Customer Name',
      birthLabel: 'Date of Birth',
      statusLabel: 'Registration Status',
      sourceLabel: 'Data Source',
      apiDemoTitle: 'REST API & Widget Integration Sample',
      apiSnippetLabel: 'Copy API URL to connect to your software:',
      copySnippet: 'Copy API Endpoint',
      copied: 'Copied!'
    },
    pricing: {
      title: 'Subscription & Access Plans',
      freeTitle: 'Free Trial',
      freePrice: '$0.00',
      freeDesc: 'Up to 50 lookups/month for testing and development.',
      proTitle: 'Clinics / B2B Pro',
      proPrice: '$9.90/mo',
      proDesc: 'Up to 2,000 lookups/month + Dedicated API Key Integration.',
      enterpriseTitle: 'Enterprise Plan',
      enterprisePrice: '$29.90/mo',
      enterpriseDesc: 'Unlimited queries, 24/7 priority support and SLA.'
    },
    features: {
      fastTitle: 'Instant Speed',
      fastDesc: 'Registration queries returned in under 1 second.',
      receitaTitle: 'Official Federal Base',
      receitaDesc: 'Verified Full Name and Date of Birth data.',
      saasTitle: 'Vercel Cloud Ready',
      saasDesc: 'Configured for the cpf.helpusbr.com subdomain in the HelpUS ecosystem.'
    },
    footer: {
      rights: '© 2026 HelpUS CPF — All rights reserved. HelpUS BR Ecosystem.',
      configuredSubdomain: 'Configured subdomain'
    }
  },
  es: {
    nav: {
      title: 'HelpUS',
      subtitle: 'Validación y Consulta de CPF en Tiempo Real',
      subdomain: 'cpf.helpusbr.com',
      createAccount: 'Crear Cuenta SaaS'
    },
    hero: {
      badge: 'Solución B2B de Validación y Consulta de CPF',
      titleStart: 'Consulta y Valida CPFs con ',
      titleGradient: 'Datos de la Renta Federal',
      description: 'Auto-completado instantáneo de Nombre Completo y Fecha de Nacimiento para clínicas, sistemas médicos, inmobiliarias y e-commerce.'
    },
    studio: {
      inputLabel: 'Ingresa el CPF para Consultar (11 dígitos)',
      placeholder: '000.000.000-00',
      validateBtn: 'Consultar CPF en la Renta Federal',
      validatingBtn: 'Consultando Renta Federal...',
      invalidMsg: '¡CPF Inválido! Verifica los dígitos o el algoritmo.',
      validMsg: '¡CPF Válido y Encontrado en los Registros!',
      resultTitle: 'Resultado de la Consulta',
      nameLabel: 'Nombre Completo del Paciente / Cliente',
      birthLabel: 'Fecha de Nacimiento',
      statusLabel: 'Estado Cadastral',
      sourceLabel: 'Fuente de Datos',
      apiDemoTitle: 'Ejemplo de Integración por API REST / Widget',
      apiSnippetLabel: 'Copia la URL de la API para conectar a tu software:',
      copySnippet: 'Copiar Endpoint API',
      copied: '¡Copiado!'
    },
    pricing: {
      title: 'Planes de Acceso y Suscripción',
      freeTitle: 'Prueba Gratuita',
      freePrice: '$0.00',
      freeDesc: 'Hasta 50 consultas/mes para pruebas y desarrollo.',
      proTitle: 'Plan Clínicas / B2B',
      proPrice: '$9.90/mes',
      proDesc: 'Hasta 2.000 consultas/mes + API Key dedicada.',
      enterpriseTitle: 'Plan Enterprise',
      enterprisePrice: '$29.90/mes',
      enterpriseDesc: 'Consultas ilimitadas, soporte 24/7 y SLA garantizado.'
    },
    features: {
      fastTitle: 'Velocidad Instantánea',
      fastDesc: 'Consultas procesadas en menos de 1 segundo.',
      receitaTitle: 'Base Oficial Federal',
      receitaDesc: 'Nombre Completo y Fecha de Nacimiento verificados.',
      saasTitle: 'Listo para Vercel Cloud',
      saasDesc: 'Configurado para el subdominio cpf.helpusbr.com en el ecosistema HelpUS.'
    },
    footer: {
      rights: '© 2026 HelpUS CPF — Todos los derechos reservados. Ecosistema HelpUS BR.',
      configuredSubdomain: 'Subdominio configurado'
    }
  }
};
