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
      description: 'Auto-preenchimento instantâneo de Nome Completo e Data de Nascimento para empresas, sistemas de cadastro, imobiliárias e e-commerce.'
    },
    studio: {
      inputLabel: 'Digite o CPF para Consultar (11 dígitos)',
      placeholder: '000.000.000-00',
      validateBtn: 'Consultar CPF na Receita Federal',
      validatingBtn: 'Consultando Receita Federal...',
      invalidMsg: 'CPF Inválido! Verifique a digitação ou o algoritmo do CPF.',
      validMsg: 'CPF Válido e Encontrado na Receita Federal!',
      resultTitle: 'Resultado da Consulta Cadastral',
      nameLabel: 'Nome Completo da Pessoa',
      birthLabel: 'Data de Nascimento',
      statusLabel: 'Situação Cadastral',
      sourceLabel: 'Fonte de Dados'
    },
    features: {
      fastTitle: 'Resposta Instantânea',
      fastDesc: 'Consulta cadastral executada em menos de 1 segundo.',
      receitaTitle: 'Base da Receita Federal',
      receitaDesc: 'Dados oficiais de Nome Completo e Data de Nascimento.',
      saasTitle: 'Privacidade & Segurança',
      saasDesc: 'Consultas seguras em conformidade com as diretrizes de dados do ecossistema HelpUS.'
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
      description: 'Instant auto-fill of Full Name and Date of Birth for businesses, registration systems, real estate, and e-commerce.'
    },
    studio: {
      inputLabel: 'Enter CPF to Lookup (11 digits)',
      placeholder: '000.000.000-00',
      validateBtn: 'Lookup CPF via Federal Revenue',
      validatingBtn: 'Querying Federal Database...',
      invalidMsg: 'Invalid CPF! Check the digits or mathematical checksum.',
      validMsg: 'Valid CPF Found in Federal Records!',
      resultTitle: 'Registration Query Results',
      nameLabel: 'Full Name of Person',
      birthLabel: 'Date of Birth',
      statusLabel: 'Registration Status',
      sourceLabel: 'Data Source'
    },
    features: {
      fastTitle: 'Instant Speed',
      fastDesc: 'Registration queries returned in under 1 second.',
      receitaTitle: 'Official Federal Base',
      receitaDesc: 'Verified Full Name and Date of Birth data.',
      saasTitle: 'Privacy & Security',
      saasDesc: 'Secure lookups compliant with HelpUS ecosystem data guidelines.'
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
      description: 'Auto-completado instantáneo de Nombre Completo y Fecha de Nacimiento para empresas, sistemas de registro, inmobiliarias y e-commerce.'
    },
    studio: {
      inputLabel: 'Ingresa el CPF para Consultar (11 dígitos)',
      placeholder: '000.000.000-00',
      validateBtn: 'Consultar CPF en la Renta Federal',
      validatingBtn: 'Consultando Renta Federal...',
      invalidMsg: '¡CPF Inválido! Verifica los dígitos o el algoritmo.',
      validMsg: '¡CPF Válido y Encontrado en los Registros!',
      resultTitle: 'Resultado de la Consulta',
      nameLabel: 'Nombre Completo de la Persona',
      birthLabel: 'Fecha de Nacimiento',
      statusLabel: 'Estado Cadastral',
      sourceLabel: 'Fuente de Datos'
    },
    features: {
      fastTitle: 'Velocidad Instantánea',
      fastDesc: 'Consultas procesadas en menos de 1 segundo.',
      receitaTitle: 'Base Oficial Federal',
      receitaDesc: 'Nombre Completo y Fecha de Nacimiento verificados.',
      saasTitle: 'Privacidad y Seguridad',
      saasDesc: 'Consultas seguras conforme a las directrices de datos del ecosistema HelpUS.'
    },
    footer: {
      rights: '© 2026 HelpUS CPF — Todos los derechos reservados. Ecosistema HelpUS BR.',
      configuredSubdomain: 'Subdominio configurado'
    }
  }
};
