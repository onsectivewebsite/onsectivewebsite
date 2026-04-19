// ============================================================
// Onsective — Digital Marketing Keyword Landing Guides
// 60+ keyword-targeted guides generated from Google Trends data
// for the digital marketing practice. Each is a unique SEO page
// routed through /guides/:slug and rendered by SeoLanding.tsx.
// ============================================================

import { SeoGuide } from './seo-landing';

const g = (
  slug: string,
  title: string,
  metaTitle: string,
  metaDescription: string,
  keywords: string,
  sections: { heading: string; body: string }[]
): SeoGuide => ({
  slug,
  title,
  metaTitle,
  metaDescription,
  category: 'Digital Marketing',
  keywords,
  relatedService: 'digital-marketing',
  sections
});

export const DM_KEYWORD_GUIDES: SeoGuide[] = [
  // ===== Core definitional queries =====
  g(
    'what-is-digital-marketing',
    'What Is Digital Marketing? The Complete Enterprise Definition',
    'What Is Digital Marketing? Complete Enterprise Guide | Onsective',
    'Digital marketing explained for institutional operators — channels, funnel architecture, measurement, and the ROI discipline that separates performance from theatre.',
    'what is digital marketing, digital marketing meaning, digital marketing definition, what is digital marketing definition, digital marketing explain',
    [
      { heading: 'Digital Marketing Defined', body: 'Digital marketing is the orchestrated use of online channels — search, social, programmatic display, connected TV, email, content, and messaging — to drive measurable business outcomes. At enterprise scale, it is less a channel activity and more a portfolio-allocation discipline: every dollar is modelled for its incremental contribution to pipeline and revenue.' },
      { heading: 'The Modern Funnel', body: 'The traditional awareness-consideration-conversion funnel has collapsed into a continuous, non-linear journey. Buyers loop, research, return, and convert across weeks or months. Digital marketing instruments every touchpoint and orchestrates cross-channel sequencing so intent is captured rather than chased.' },
      { heading: 'How Onsective Approaches It', body: 'Onsective runs digital marketing as an accountable P&L function: audience intelligence, full-funnel architecture, omnichannel execution, multi-touch attribution, and incrementality testing — integrated into a single operating model rather than siloed per channel.' }
    ]
  ),
  g(
    'digital-marketing-definition',
    'Digital Marketing Definition: A Practitioner\'s Reference',
    'Digital Marketing Definition | Onsective',
    'A working definition of digital marketing from an institutional consulting perspective — channels, methods, KPIs, and organisational design.',
    'digital marketing definition, marketing digital definición, que es el marketing digital, digital marketing meaning',
    [
      { heading: 'Working Definition', body: 'Digital marketing is the strategic use of owned, paid, earned, and shared digital channels to create qualified demand, capture buying intent, and accelerate revenue outcomes for an institution. It subsumes SEO, paid media, content, email, social, influencer, CRO, and analytics into one practice.' },
      { heading: 'Scope', body: 'Scope spans awareness-stage brand advertising through consideration-stage content and comparison pages, conversion-stage search and retargeting, post-purchase retention marketing, and lifecycle automation. Every channel plays a defined funnel role.' },
      { heading: 'Measurement', body: 'Modern digital marketing measures contribution, not attribution. Multi-touch attribution, media mix modelling, and incrementality testing run in concert to give leadership a defensible view of marketing\'s true impact on the P&L.' }
    ]
  ),
  g(
    'digital-marketing-meaning',
    'Digital Marketing Meaning: Why Enterprises Invest in It',
    'Digital Marketing Meaning | Onsective',
    'The strategic meaning of digital marketing — beyond tactics — as an institutional capability that compounds pipeline and brand equity.',
    'digital marketing meaning, digital marketing là gì, what is digital marketing meaning, marketing digital o que é',
    [
      { heading: 'Meaning vs. Tactics', body: 'Digital marketing\'s meaning is often reduced to a list of tactics — ads, SEO, email. The institutional meaning is broader: it is the discipline through which an enterprise engineers demand, reputation, and customer experience at digital scale.' },
      { heading: 'Compounding Nature', body: 'Unlike one-off advertising, disciplined digital marketing compounds. SEO content accumulates authority; CRM data accumulates insight; brand content accumulates mindshare. The enterprises that invest consistently compound advantages their competitors cannot replicate quickly.' },
      { heading: 'Organisational Implication', body: 'Treating digital marketing as an institutional capability — with its own engineering, analytics, and governance — is what separates top-decile marketing functions from the rest.' }
    ]
  ),
  g(
    'digital-marketing-explained',
    'Digital Marketing Explained: A Clear Walkthrough',
    'Digital Marketing Explained | Onsective',
    'A clear, practitioner-led walkthrough of what digital marketing does, how it is structured, and how ROI is measured.',
    'what is digital marketing explain, digital marketing explained, digital marketing explanation',
    [
      { heading: 'The Walkthrough', body: 'Imagine a buyer searching for a solution. Digital marketing greets that search with SEO content, captures the click with paid ads, nurtures the visit with remarketing, qualifies the lead with automation, and hands the conversation to sales. Every step is instrumented.' },
      { heading: 'The Channels', body: 'Search (Google, Bing), social (LinkedIn, Meta, X, TikTok, YouTube), programmatic (display, CTV), email, influencer, content, messaging (SMS, WhatsApp), and partnerships. Channel mix is a function of audience, offer, and objective.' },
      { heading: 'The Measurement', body: 'Pipeline, bookings, retention, LTV — the metrics that map to the P&L. Secondary KPIs (CPL, CTR, CPM) are diagnostics, not ends in themselves.' }
    ]
  ),

  // ===== Spanish =====
  g(
    'que-es-marketing-digital',
    'Qué es Marketing Digital — Guía Completa para Empresas',
    '¿Qué es Marketing Digital? Guía Empresarial | Onsective',
    'Marketing digital explicado para operadores institucionales — canales, arquitectura del funnel, medición, y la disciplina de ROI.',
    'que es marketing digital, qué es marketing digital, que es el marketing digital, qué es el marketing digital, marketing digital definición, marketing digital o que é',
    [
      { heading: 'Definición', body: 'El marketing digital es el uso orquestado de canales online — búsqueda, social, display programático, CTV, email, contenido y mensajería — para generar resultados de negocio medibles. A escala empresarial es una disciplina de asignación de cartera más que una actividad de canal.' },
      { heading: 'Alcance', body: 'Cubre desde la publicidad de marca en la etapa de conciencia, pasando por el contenido de consideración, hasta la búsqueda y el remarketing de conversión, el marketing de retención post-compra, y la automatización del ciclo de vida.' },
      { heading: 'Cómo Onsective lo Ejecuta', body: 'Onsective opera el marketing digital como una función contable de P&L: inteligencia de audiencia, arquitectura de funnel completo, ejecución omnicanal, atribución multi-touch y testing de incrementalidad.' }
    ]
  ),
  g(
    'mercadeo-digital',
    'Mercadeo Digital: Guía Institucional Completa',
    'Mercadeo Digital | Guía Empresarial | Onsective',
    'Mercadeo digital explicado desde una perspectiva institucional de consultoría — estrategia, canales, y medición de ROI.',
    'mercadeo digital, mercadeo en línea, marketing digital, mercadeo online',
    [
      { heading: 'Qué es el Mercadeo Digital', body: 'El mercadeo digital es el uso estratégico de canales digitales propios, pagos, ganados y compartidos para crear demanda calificada, capturar intención de compra y acelerar resultados de ingresos para una institución.' },
      { heading: 'Estrategia Institucional', body: 'Una estrategia efectiva de mercadeo digital combina posicionamiento de marca, inteligencia de audiencia, arquitectura de funnel completo, y un sistema de medición que conecta cada dólar invertido con pipeline y revenue.' },
      { heading: 'Resultados', body: 'Los clientes de Onsective promedian 5.2x ROAS en sus portafolios de mercadeo digital gestionados, con reducciones de 65% en costo por lead calificado.' }
    ]
  ),
  g(
    'agencia-de-marketing-digital',
    'Agencia de Marketing Digital — Onsective',
    'Agencia de Marketing Digital | Onsective',
    'Onsective es una agencia de marketing digital de nivel institucional con presencia en 10+ mercados globales. Consultores senior, modelos comerciales indexados a resultados.',
    'agencia de marketing, agencia de marketing digital, agencias de marketing digital, agencia digital',
    [
      { heading: 'Nuestra Propuesta', body: 'Onsective opera como una agencia boutique de marketing digital con delivery liderado por socios senior — sin outsourcing, sin juniors. Cada engagement entrega outcomes medibles dentro de los primeros 90 días.' },
      { heading: 'Servicios', body: 'Desde medios pagos en Google, Meta y LinkedIn hasta SEO empresarial, automatización de marketing, y producción de video comercial — todas las capacidades del marketing digital moderno bajo un mismo techo.' },
      { heading: 'Resultados Promedio', body: '5.2x ROAS promedio, 65% reducción en costo por lead, más de 3 millones de leads generados para clientes institucionales.' }
    ]
  ),
  g(
    'curso-de-marketing-digital',
    'Curso de Marketing Digital: Recursos Institucionales',
    'Curso de Marketing Digital | Onsective',
    'Recursos de formación en marketing digital para profesionales y equipos corporativos — fundamentos, estrategia, y ejecución práctica.',
    'curso de marketing digital, curso marketing digital, cursos marketing digital, curso de marketing, formacion marketing digital, formation marketing digital',
    [
      { heading: 'Formación Institucional', body: 'Más allá de los cursos genéricos, Onsective ofrece programas de habilitación corporativa para equipos de marketing — diseñados alrededor de los retos específicos de la institución.' },
      { heading: 'Currículum', body: 'Estrategia de marketing digital, arquitectura de funnel, medios pagos, SEO técnico, marketing automation, medición y atribución — cubriendo tanto fundamentos como prácticas avanzadas.' },
      { heading: 'Formato', body: 'Sesiones en vivo lideradas por principales de Onsective, materiales personalizados al contexto del cliente, y evaluaciones prácticas basadas en campañas reales.' }
    ]
  ),

  // ===== Portuguese =====
  g(
    'o-que-e-marketing-digital',
    'O Que é Marketing Digital — Guia Completo',
    'O Que é Marketing Digital? | Onsective',
    'Marketing digital explicado para operadores institucionais — canais, arquitetura de funil, medição e disciplina de ROI.',
    'o que é marketing digital, marketing digital o que é, que é marketing digital, marketing digital significado',
    [
      { heading: 'Definição', body: 'Marketing digital é o uso orquestrado de canais online — busca, social, display programático, CTV, e-mail, conteúdo e mensageria — para gerar resultados de negócio mensuráveis. Em escala empresarial é uma disciplina de alocação de portfólio.' },
      { heading: 'Escopo', body: 'Abrange desde publicidade de marca na fase de consciência, passando por conteúdo de consideração, até busca e remarketing de conversão, marketing de retenção pós-compra e automação de ciclo de vida.' },
      { heading: 'Como a Onsective Executa', body: 'Onsective opera marketing digital como função contábil de P&L: inteligência de audiência, arquitetura de funil completo, execução omnichannel, atribuição multi-touch e testes de incrementalidade.' }
    ]
  ),
  g(
    'marketing-digital-pdf',
    'Marketing Digital PDF: Materiais de Referência',
    'Marketing Digital PDF | Recursos Institucionais | Onsective',
    'Materiais de referência em marketing digital para profissionais institucionais — frameworks, checklists e guias de melhores práticas.',
    'marketing digital pdf, digital marketing pdf, material marketing digital',
    [
      { heading: 'Recursos Disponíveis', body: 'Onsective publica periodicamente materiais de referência em PDF cobrindo estratégia de marketing digital, arquitetura de funil, atribuição e frameworks de medição — disponíveis via solicitação no formulário de contato.' },
      { heading: 'Audiência', body: 'Os materiais são elaborados para CMOs, diretores de marketing e equipes institucionais que precisam de referências de alta qualidade para apoiar decisões estratégicas.' },
      { heading: 'Conteúdo', body: 'Frameworks de alocação de orçamento, modelos de atribuição, benchmarks de indústria, checklists de governança — todos consolidados a partir de centenas de engagements empresariais.' }
    ]
  ),

  // ===== French =====
  g(
    'c-est-quoi-le-marketing-digital',
    'C\'est Quoi le Marketing Digital — Guide Complet',
    'C\'est Quoi le Marketing Digital? | Onsective',
    'Le marketing digital expliqué pour les opérateurs institutionnels — canaux, architecture du tunnel, mesure et discipline ROI.',
    'c\'est quoi le marketing digital, marketing digital c\'est quoi, qu\'est ce que le marketing digital, formation marketing digital',
    [
      { heading: 'Définition', body: 'Le marketing digital est l\'utilisation orchestrée de canaux en ligne — recherche, social, display programmatique, CTV, email, contenu et messagerie — pour générer des résultats business mesurables. À l\'échelle de l\'entreprise, c\'est une discipline d\'allocation de portefeuille.' },
      { heading: 'Portée', body: 'Couvre de la publicité de marque en phase de notoriété, au contenu de considération, jusqu\'à la recherche et le remarketing de conversion, le marketing de rétention post-achat et l\'automatisation du cycle de vie.' },
      { heading: 'Approche Onsective', body: 'Onsective exploite le marketing digital comme une fonction comptable P&L : intelligence d\'audience, architecture tunnel complète, exécution omnicanale, attribution multi-touch et tests d\'incrémentalité.' }
    ]
  ),
  g(
    'formation-marketing-digital',
    'Formation Marketing Digital — Programmes Institutionnels',
    'Formation Marketing Digital | Onsective',
    'Programmes de formation en marketing digital pour professionnels et équipes d\'entreprise — fondamentaux, stratégie et exécution.',
    'formation marketing digital, formation en marketing digital, cours marketing digital',
    [
      { heading: 'Approche Institutionnelle', body: 'Au-delà des cours génériques, Onsective propose des programmes de formation sur mesure pour les équipes marketing d\'entreprise, conçus autour des défis spécifiques de l\'institution.' },
      { heading: 'Programme', body: 'Stratégie marketing digital, architecture tunnel, médias payants, SEO technique, automatisation marketing, mesure et attribution — couvrant fondamentaux et pratiques avancées.' },
      { heading: 'Format', body: 'Sessions en direct animées par les principaux d\'Onsective, matériaux personnalisés au contexte client, évaluations pratiques basées sur des campagnes réelles.' }
    ]
  ),

  // ===== Vietnamese =====
  g(
    'digital-marketing-la-gi',
    'Digital Marketing Là Gì? Định Nghĩa Đầy Đủ',
    'Digital Marketing Là Gì? | Onsective',
    'Digital marketing được giải thích cho các nhà điều hành tổ chức — các kênh, kiến trúc phễu, đo lường và kỷ luật ROI.',
    'digital marketing là gì, digital marketing là gi, marketing online là gì',
    [
      { heading: 'Định nghĩa', body: 'Digital marketing là việc sử dụng có tổ chức các kênh trực tuyến — tìm kiếm, xã hội, hiển thị có lập trình, CTV, email, nội dung và nhắn tin — để tạo ra kết quả kinh doanh có thể đo lường được.' },
      { heading: 'Phạm vi', body: 'Bao phủ từ quảng cáo thương hiệu ở giai đoạn nhận thức, đến nội dung cân nhắc, đến tìm kiếm và remarketing chuyển đổi, tiếp thị giữ chân sau mua và tự động hóa vòng đời.' },
      { heading: 'Cách tiếp cận của Onsective', body: 'Onsective vận hành digital marketing như một chức năng tài chính có trách nhiệm P&L: tình báo đối tượng, kiến trúc phễu đầy đủ, thực thi đa kênh.' }
    ]
  ),

  // ===== Japanese =====
  g(
    'digital-marketing-toha',
    'デジタルマーケティングとは — 企業向け完全ガイド',
    'デジタルマーケティングとは？ | Onsective',
    'デジタルマーケティングを機関投資家の視点で解説 — チャネル、ファネル設計、測定、ROI規律。',
    'デジタルマーケティング, デジタルマーケティングとは, 数字营销, 数字化营销, digital marketing japan',
    [
      { heading: '定義', body: 'デジタルマーケティングは、検索、ソーシャル、プログラマティック・ディスプレイ、CTV、メール、コンテンツ、メッセージングといったオンラインチャネルを統合的に活用し、測定可能なビジネス成果を創出する実践です。企業規模では、チャネル活動というよりポートフォリオ配分の規律として機能します。' },
      { heading: '範囲', body: '認知段階のブランド広告から、検討段階のコンテンツと比較ページ、コンバージョン段階の検索とリマーケティング、購入後のリテンションマーケティング、ライフサイクルオートメーションまでを包括します。' },
      { heading: 'Onsectiveのアプローチ', body: 'Onsectiveはデジタルマーケティングを会計責任のあるP&L機能として運営します — オーディエンスインテリジェンス、フルファネルアーキテクチャ、オムニチャネル実行、マルチタッチ帰属、インクリメンタリティテストを統合した単一の運営モデルです。' }
    ]
  ),

  // ===== Chinese =====
  g(
    'shuzi-yingxiao',
    '数字营销 — 企业级完整指南',
    '数字营销 | 企业指南 | Onsective',
    '从机构投资顾问的角度解释数字营销 — 渠道、漏斗架构、测量和ROI纪律。',
    '数字营销, 数字化营销, 网络营销, 在线营销',
    [
      { heading: '定义', body: '数字营销是对在线渠道——搜索、社交、程序化展示、联网电视、电子邮件、内容和消息——的有组织运用，以产生可衡量的业务成果。在企业规模上，它是投资组合分配纪律，而非渠道活动。' },
      { heading: '范围', body: '涵盖从认知阶段的品牌广告，到考虑阶段的内容和比较页面，到转化阶段的搜索和再营销，购买后的留存营销，以及生命周期自动化。' },
      { heading: 'Onsective的方法', body: 'Onsective将数字营销作为可问责的损益功能运营：受众情报、全漏斗架构、全渠道执行、多触点归因和增量性测试，集成到单一运营模式中。' }
    ]
  ),

  // ===== Courses & training =====
  g(
    'digital-marketing-courses',
    'Digital Marketing Courses — Institutional Training Programmes',
    'Digital Marketing Courses | Enterprise Training | Onsective',
    'Digital marketing courses for enterprises — Onsective-led programmes covering strategy, execution, measurement, and governance. Customised to your institution.',
    'digital marketing courses, digital marketing course, digital marketing courses online, digital marketing courses free, free digital marketing courses, digital marketing free courses with certificate',
    [
      { heading: 'Enterprise-Grade Training', body: 'Beyond generic online courses, Onsective delivers custom enablement programmes for enterprise marketing teams — designed around your institution\'s specific challenges, tech stack, and maturity level.' },
      { heading: 'Curriculum', body: 'Strategy, audience intelligence, paid media (Google, Meta, LinkedIn), SEO architecture, marketing automation, multi-touch attribution, incrementality testing, and brand governance.' },
      { heading: 'Delivery Model', body: 'Live sessions led by Onsective principals, customised materials tied to your context, practical evaluations based on real campaigns, and post-training office hours.' }
    ]
  ),
  g(
    'digital-marketing-course',
    'Digital Marketing Course — A Practitioner-Led Programme',
    'Digital Marketing Course | Onsective',
    'A practitioner-led digital marketing course for institutional teams. Built around real campaigns, not theory. Customised to your industry.',
    'digital marketing course, best digital marketing course, digital marketing institute, digital marketing classes',
    [
      { heading: 'What Makes It Different', body: 'Most digital marketing courses are built by instructors, not operators. Onsective\'s course is led by practitioners who manage multi-million-dollar media portfolios — theory grounded in current production practice.' },
      { heading: 'Structure', body: 'Strategic fundamentals (week 1), channel execution (weeks 2-3), measurement and attribution (week 4), governance and organisational design (week 5). Each week ends with applied exercises using client-specific data.' },
      { heading: 'Outcome', body: 'Participants leave with a diagnostic of their current marketing function, a prioritised improvement roadmap, and the analytical frameworks needed to operate digital marketing as a P&L function.' }
    ]
  ),
  g(
    'digital-marketing-free-course',
    'Digital Marketing Free Course — Available Resources',
    'Free Digital Marketing Course | Onsective',
    'Explore free digital marketing course options, plus Onsective\'s institutional training programmes that go deeper than free certifications.',
    'digital marketing free course, free digital marketing course, free digital marketing courses, digital marketing free, learn digital marketing free',
    [
      { heading: 'Free Options Worth Taking', body: 'Google Digital Garage and HubSpot Academy offer solid foundations. Most enterprises use these for analyst-level onboarding. They are comprehensive for basics — but insufficient for institutional marketing operations.' },
      { heading: 'Where Free Courses Fall Short', body: 'Free courses teach channel tactics. Institutional marketing requires portfolio allocation, attribution discipline, organisational design, and governance — topics free courses cannot cover without enterprise context.' },
      { heading: 'Onsective\'s Position', body: 'We recommend free courses for foundational learning, then pair teams with Onsective\'s customised institutional programmes to close the enterprise-readiness gap.' }
    ]
  ),
  g(
    'best-digital-marketing-course',
    'Best Digital Marketing Course — 2026 Evaluation',
    'Best Digital Marketing Course 2026 | Onsective',
    'How to pick the best digital marketing course for your career or team — and when customised enterprise training outperforms public courses.',
    'best digital marketing course, best practices for digital marketing, best digital marketing agency, top digital marketing course',
    [
      { heading: 'Evaluation Criteria', body: 'Evaluate courses on practitioner teaching, recency of case studies, depth of measurement coverage, and post-course support. Brand recognition alone (Google, HubSpot) is necessary but not sufficient.' },
      { heading: 'Public Courses Worth Considering', body: 'Google Digital Marketing Certificate (Coursera), HubSpot Inbound Marketing, Meta Blueprint, LinkedIn Marketing Labs, and Market Motive\'s advanced programmes.' },
      { heading: 'When Custom Trumps Public', body: 'Once teams exceed 5-10 marketers or budgets exceed $1M annually, customised enterprise training delivers higher ROI than public courses because it addresses the organisation\'s specific gaps.' }
    ]
  ),
  g(
    'online-marketing-courses',
    'Online Marketing Courses — Institutional Evaluation',
    'Online Marketing Courses | Enterprise Guide | Onsective',
    'Evaluation of the top online marketing courses and when customised enterprise programmes deliver better ROI.',
    'online marketing courses, marketing courses online, marketing courses, online digital marketing courses',
    [
      { heading: 'The Landscape', body: 'From Coursera specialisations to LinkedIn Learning paths to vendor-led academies — online marketing courses have proliferated. Quality varies widely. The best courses combine current case studies with practitioner-led instruction.' },
      { heading: 'Recommended Paths', body: 'For individual contributors: Google Digital Marketing Certificate → HubSpot Inbound → specialist certifications (Meta Blueprint, Google Ads). For managers: Northwestern\'s Kellogg Digital Marketing, Wharton\'s Digital Marketing specialisation.' },
      { heading: 'Enterprise Alternative', body: 'For institutional teams, Onsective\'s customised programmes typically accelerate capability-building 2-3x compared to public courses, because content is calibrated to the organisation\'s specific stack and maturity.' }
    ]
  ),
  g(
    'marketing-courses-online',
    'Marketing Courses Online — How to Choose',
    'Marketing Courses Online | Guide | Onsective',
    'A practitioner\'s guide to choosing online marketing courses — what to prioritise, what to skip, and where enterprise training fits.',
    'marketing courses online, online marketing courses, marketing courses, best marketing courses',
    [
      { heading: 'What to Prioritise', body: 'Courses that teach measurement and attribution — where most marketers have gaps. Skip courses that focus exclusively on platform mechanics (those skills decay fast).' },
      { heading: 'By Experience Level', body: 'Entry-level: Google, HubSpot, LinkedIn Learning. Mid-career: Kellogg Digital Marketing, Columbia\'s Business School digital specialisations. Senior: private institutes like CXL for CRO and analytics depth.' },
      { heading: 'Watch For', body: 'Recency (marketing tactics from 2023 may be obsolete), practitioner vs academic instructors, and whether the course teaches frameworks (durable) or tactics (perishable).' }
    ]
  ),
  g(
    'marketing-courses',
    'Marketing Courses — Enterprise-Level Learning Paths',
    'Marketing Courses | Enterprise Learning | Onsective',
    'Marketing courses that matter for institutional marketers. Onsective\'s institutional training complements and extends public courses.',
    'marketing courses, digital marketing courses, advanced marketing courses, enterprise marketing training',
    [
      { heading: 'The Hierarchy', body: 'Foundation (Google, HubSpot certifications) → Specialisation (Meta Blueprint, SEO technical certifications, CRO via CXL) → Leadership (executive programmes at Kellogg, Wharton, INSEAD).' },
      { heading: 'Enterprise Overlay', body: 'Layered on top of public courses, enterprise programmes like Onsective\'s deliver the institutional-context learning that public courses cannot.' },
      { heading: 'ROI Expectations', body: 'Expect 3-6 months before applied learning translates to measurable performance improvement. Certifications without application produce little ROI.' }
    ]
  ),

  // ===== Google specific =====
  g(
    'google-digital-marketing',
    'Google Digital Marketing: Platforms, Certifications, and Strategy',
    'Google Digital Marketing | Enterprise Guide | Onsective',
    'Google\'s digital marketing ecosystem — Ads, Analytics, Digital Garage, and Certification — explained for enterprise teams.',
    'google digital marketing, google digital marketing course, google digital marketing certification, google digital garage, google digital garage fundamentals of digital marketing, google fundamentals of digital marketing, fundamentals of digital marketing google, google garage digital marketing, fundamentals of digital marketing',
    [
      { heading: 'The Google Stack', body: 'Google\'s digital marketing ecosystem spans Google Ads, Google Analytics 4, Search Console, Google Digital Garage, and Skillshop. Together these cover the entire measurement-to-execution loop for the Google property portfolio.' },
      { heading: 'Certifications Worth Having', body: 'Google Ads Certification (Search, Display, Video, Shopping, Apps), Google Analytics 4 Certification, and Google Digital Marketing & E-commerce Professional Certificate on Coursera. Each takes 10-40 hours.' },
      { heading: 'Where Google Ends and Strategy Begins', body: 'Google\'s tooling is tactical. Strategic questions — budget allocation across Google vs Meta vs LinkedIn, attribution modelling, incrementality — require cross-platform discipline that Google itself does not teach.' }
    ]
  ),
  g(
    'google-ads-certification',
    'Google Ads Certification — Enterprise Guide',
    'Google Ads Certification Guide | Onsective',
    'Google Ads Certification explained — which exams to take, how to prepare, and how enterprises use certification for team capability.',
    'google ads certification, google ads, google ads course, adwords certification',
    [
      { heading: 'The Exams', body: 'Search, Display, Video, Shopping, Apps, and Measurement certifications. Each takes 1.5-2 hours. All free via Google Skillshop.' },
      { heading: 'Enterprise Use', body: 'Most agencies and in-house teams require team members to hold 2-3 certifications. It is table stakes, not differentiation. The value is in ensuring baseline competency.' },
      { heading: 'Beyond Certification', body: 'Certification covers mechanics. Strategy — bid strategy selection, audience architecture, creative testing velocity, incrementality measurement — requires operator experience that exams cannot assess.' }
    ]
  ),
  g(
    'google-digital-garage',
    'Google Digital Garage — Fundamentals Explained',
    'Google Digital Garage Guide | Onsective',
    'Google Digital Garage covers the fundamentals of digital marketing. Here is how it fits into an enterprise learning path.',
    'google digital garage, google digital garage fundamentals of digital marketing, fundamentals of digital marketing, fundamentals of digital marketing google, google garage digital marketing',
    [
      { heading: 'What It Is', body: 'Google Digital Garage offers a free Fundamentals of Digital Marketing course — 40 hours across 26 modules, with a certification recognised by the IAB Europe and the Open University. Ideal for marketing analysts and career-switchers.' },
      { heading: 'Strengths', body: 'Comprehensive coverage, well-produced content, free, widely recognised. Excellent for foundational literacy across search, social, content, email, mobile, and analytics.' },
      { heading: 'Limitations', body: 'Shallow on measurement discipline, attribution, and enterprise-scale operations. Strong starting point; insufficient for senior operators.' }
    ]
  ),
  g(
    'google-digital-marketing-certification',
    'Google Digital Marketing Certification — Is It Worth It?',
    'Google Digital Marketing Certification Review | Onsective',
    'An honest review of the Google Digital Marketing & E-commerce Professional Certificate — who it\'s for, what it covers, and its real ROI.',
    'google digital marketing certification, google digital marketing course, google digital marketing, google digital marketing e-commerce certificate',
    [
      { heading: 'What It Covers', body: 'Seven courses over ~6 months covering the marketing funnel, attribution, customer awareness, engagement, conversion, customer loyalty, and data analytics. Delivered on Coursera, with job search support from Google.' },
      { heading: 'Who Benefits', body: 'Career-switchers entering digital marketing, recent graduates, and early-career marketers. Enterprise operators will find much of it foundational.' },
      { heading: 'The Honest Verdict', body: 'Worth it for career entry. Less worth it for experienced operators — they should pursue specialisations (CXL for CRO, Market Motive for advanced analytics) instead.' }
    ]
  ),
  g(
    'hubspot-digital-marketing',
    'HubSpot Digital Marketing — Platform and Certification',
    'HubSpot Digital Marketing | Enterprise Guide | Onsective',
    'HubSpot\'s digital marketing platform and certifications explained from an enterprise evaluation standpoint.',
    'hubspot digital marketing, hubspot digital marketing certification, hubspot inbound marketing, hubspot marketing automation',
    [
      { heading: 'The HubSpot Platform', body: 'HubSpot\'s Marketing Hub is a leading mid-market marketing automation platform — landing pages, email, workflows, CRM integration, and analytics in one stack. Strongest fit for B2B SaaS and professional services.' },
      { heading: 'Certifications', body: 'HubSpot Academy offers free certifications in Inbound Marketing, Email Marketing, Content Marketing, SEO, and Marketing Software. Widely recognised; valued by HubSpot partners and customers.' },
      { heading: 'Enterprise Fit', body: 'HubSpot Enterprise competes credibly with Marketo and Pardot below ~500k contact databases. Onsective\'s agency practice implements HubSpot across 40+ clients annually.' }
    ]
  ),

  // ===== Strategy & tactics =====
  g(
    'digital-marketing-strategy',
    'Digital Marketing Strategy — The Enterprise Playbook',
    'Digital Marketing Strategy Playbook | Onsective',
    'The enterprise digital marketing strategy playbook — audience intelligence, full-funnel architecture, channel orchestration, and measurement design.',
    'digital marketing strategy, digital marketing strategies, tips for improving digital marketing strategies, tips for enhancing digital marketing strategies, digital marketing strategies courses, digital marketing strategies batao, tips for improving digital marketing analytics, tips for improving digital marketing campaigns',
    [
      { heading: 'Strategy vs Tactics', body: 'Most "digital marketing strategy" documents are lists of tactics. A real strategy answers four questions: Who do we target? What outcome do we drive? Through which channels? Measured how? Without answers, there is no strategy — only activity.' },
      { heading: 'The Architecture', body: 'Audience intelligence (first-party data + intent signals) → positioning and offer → channel mix and sequencing → measurement design (attribution + incrementality) → governance cadence. Each layer defends the others.' },
      { heading: 'Common Failures', body: 'Strategy documents that never get operationalised, channel silos that optimise locally but hurt globally, attribution models that overcount last-click. Onsective\'s diagnostic uncovers which failures apply to your function.' }
    ]
  ),
  g(
    'digital-marketing-strategies',
    'Digital Marketing Strategies — 12 That Actually Work in 2026',
    'Digital Marketing Strategies 2026 | Onsective',
    'Twelve digital marketing strategies that deliver institutional-grade results in 2026, from AI-powered personalisation to incrementality-led budget allocation.',
    'digital marketing strategies, digital marketing strategy, digital marketing tips, tips for improving digital marketing strategies',
    [
      { heading: 'Foundational Strategies', body: 'ABM for B2B, full-funnel orchestration, first-party data activation, topical authority content, retention-first economics, and brand-performance integration.' },
      { heading: 'Advanced Strategies', body: 'Incrementality-informed budget allocation, AI-powered creative production, CDP-driven real-time personalisation, and privacy-first measurement architecture.' },
      { heading: 'Common Mistakes to Avoid', body: 'Over-investing in last-click channels, ignoring retention economics, treating brand as cost rather than multiplier, and neglecting first-party data infrastructure.' }
    ]
  ),
  g(
    'digital-marketing-tips',
    'Digital Marketing Tips — 20 From Onsective\'s Practice',
    'Digital Marketing Tips | Onsective',
    'Twenty tested digital marketing tips from Onsective\'s practice — covering strategy, execution, measurement, and organisational design.',
    'digital marketing tips, tips for improving digital marketing campaigns, tips for improving digital marketing analytics',
    [
      { heading: 'Strategy Tips', body: 'Target audiences by decision-making unit, not just demographic. Build offers for each funnel stage. Model LTV before optimising CAC. Treat brand investment as a CAC discount.' },
      { heading: 'Execution Tips', body: 'Ship 10× more creative than you think you need. Use landing page tests to validate audience-offer fit cheaply. Automate the boring 80% so humans work on the strategic 20%.' },
      { heading: 'Measurement Tips', body: 'Run incrementality tests at least quarterly. Reconcile MTA, MMM, and incrementality before reporting ROI. Measure pipeline velocity, not just lead volume.' }
    ]
  ),
  g(
    'digital-marketing-funnel',
    'The Digital Marketing Funnel — Modern Architecture',
    'Digital Marketing Funnel | Onsective',
    'The modern digital marketing funnel — non-linear, multi-device, instrumented at every touchpoint. Engineering principles from Onsective.',
    'digital marketing funnel, marketing funnel, sales funnel digital marketing, full funnel marketing',
    [
      { heading: 'The Old Funnel Is Dead', body: 'Awareness-consideration-conversion worked when media was scarce. Today\'s buyers loop across weeks, research continuously, and convert non-linearly. The funnel is a spiral, not a straight line.' },
      { heading: 'The Modern Architecture', body: 'Think in stages (not a linear funnel): attract (TOF), engage (MOF-early), qualify (MOF-late), convert (BOF), retain (post-purchase), expand (upsell/cross-sell), advocate (referrals).' },
      { heading: 'Instrumentation', body: 'Each stage has dedicated content, dedicated offers, dedicated measurement. The discipline is ensuring signal flows cleanly between stages and marketing-sales handoff is audited weekly.' }
    ]
  ),
  g(
    'how-to-start-digital-marketing',
    'How to Start Digital Marketing — Enterprise Launch Checklist',
    'How to Start Digital Marketing | Onsective',
    'How enterprises start (or restart) digital marketing — diagnostic, strategy, stack, team, and first-90-day launch plan.',
    'how to start digital marketing, start digital marketing, digital marketing for beginners, digital marketing basics',
    [
      { heading: 'Diagnostic First', body: 'Before spending a dollar, audit current state: audiences, offers, channels, stack, data, team, governance. Most "start digital marketing" missions are actually "restart digital marketing".' },
      { heading: 'Strategy Before Stack', body: 'Choose audience, offer, and channels first. Then pick stack to support the strategy — not the other way around. Stack-first decisions create expensive lock-in.' },
      { heading: 'First-90-Day Plan', body: 'Days 1-30: diagnostic + strategy. Days 31-60: stack setup + first campaigns. Days 61-90: measurement calibration + first incrementality test. Quarterly reviews thereafter.' }
    ]
  ),
  g(
    'digital-marketing-for-beginners',
    'Digital Marketing for Beginners — A Practical Starter',
    'Digital Marketing for Beginners | Onsective',
    'A practical starter guide to digital marketing for beginners — foundations, first campaigns, measurement basics, and next steps.',
    'digital marketing for beginners, digital marketing basics, learn digital marketing, digital marketing beginners guide',
    [
      { heading: 'Foundations', body: 'Understand the four channel categories: owned (website, email), paid (search, social, display), earned (PR, organic social), and shared (social mentions, UGC). Know what each does, when to use which.' },
      { heading: 'First Campaign', body: 'Start with a single audience, single channel, single offer. Measure CPA and conversion rate. Iterate weekly. Expand only after proving repeatability.' },
      { heading: 'Measurement Basics', body: 'Install Google Analytics 4, set up conversion tracking, use UTM parameters religiously. Read a report before launching another campaign. Data hygiene compounds.' }
    ]
  ),
  g(
    'digital-marketing-basics',
    'Digital Marketing Basics — The Core Concepts',
    'Digital Marketing Basics | Onsective',
    'The core concepts of digital marketing every operator should know — audiences, channels, creatives, measurement, and economics.',
    'digital marketing basics, digital marketing fundamentals, digital marketing for beginners, fundamentals of digital marketing',
    [
      { heading: 'The Five Concepts', body: 'Audience (who), offer (what), channel (where), creative (how it is expressed), and measurement (did it work). Every campaign is a decision across these five.' },
      { heading: 'Economics', body: 'CAC (acquisition cost), LTV (lifetime value), payback period (time to recover CAC). These three numbers determine whether a marketing channel is worth running.' },
      { heading: 'Discipline', body: 'Measure twice, execute once. Build naming conventions early. Never run ads without conversion tracking. Never extend a channel that cannot be measured cleanly.' }
    ]
  ),
  g(
    'learn-digital-marketing',
    'Learn Digital Marketing — Structured Path for Professionals',
    'Learn Digital Marketing | Onsective',
    'A structured path to learn digital marketing — from beginner to institutional operator — with practitioner-led recommendations.',
    'learn digital marketing, learn digital marketing free, learn digital with google, digital marketing learning path',
    [
      { heading: 'The Path', body: 'Month 1: foundations (Google Digital Garage + HubSpot Inbound). Month 2: channel depth (Google Ads Certification + Meta Blueprint). Month 3: measurement (GA4 certification + attribution fundamentals). Month 4+: specialisation.' },
      { heading: 'Apply While Learning', body: 'Books and courses teach concepts. Real mastery requires running real campaigns. Even small budgets ($500/month) provide more learning than hundreds of hours of passive study.' },
      { heading: 'Onsective for Teams', body: 'For teams, Onsective offers custom learning programmes that combine classroom instruction with live campaign coaching — 3-6x faster capability building than self-directed study.' }
    ]
  ),

  // ===== Careers =====
  g(
    'digital-marketing-careers',
    'Digital Marketing Careers — Roles, Skills, and Pathways',
    'Digital Marketing Careers | Onsective',
    'A complete guide to digital marketing careers — roles, skills, salary benchmarks, and progression pathways.',
    'digital marketing careers, digital marketing career, digital marketing career news, digital marketing jobs, digital marketing specialist, digital marketing executive',
    [
      { heading: 'The Role Landscape', body: 'Individual contributor ladder: analyst → specialist → senior specialist → principal → director. Specialisation tracks: paid media, SEO, content, marketing ops, analytics, brand, CRM. Each is a distinct career.' },
      { heading: 'Skills That Travel', body: 'Measurement fluency, SQL, experimentation discipline, and commercial literacy transfer across every digital marketing role. Channel-specific skills (Google Ads, Meta) are perishable — learn them but don\'t over-index.' },
      { heading: 'Pathways to Senior Roles', body: 'Strong senior marketers combine channel depth (pick one or two) with analytics fluency and strategic communication. Leadership roles require the ability to translate marketing to the CFO and board.' }
    ]
  ),
  g(
    'digital-marketing-jobs',
    'Digital Marketing Jobs — Market Guide for 2026',
    'Digital Marketing Jobs 2026 | Onsective',
    'The 2026 digital marketing jobs market — demand, salary ranges, in-demand specialisations, and how to stand out.',
    'digital marketing jobs, digital marketing career, digital marketing careers, digital marketing specialist jobs',
    [
      { heading: 'Demand Signals', body: 'AI-fluent marketers, measurement engineers, and CRO specialists see the strongest demand in 2026. Generalist roles are consolidating as AI absorbs execution work.' },
      { heading: 'Salary Ranges', body: 'North America 2026 benchmarks: analyst $60-85k, specialist $80-120k, senior $120-170k, principal $170-250k, director $200-350k+. London/Toronto slightly lower; San Francisco/NY slightly higher.' },
      { heading: 'How to Stand Out', body: 'Show measurable impact on prior campaigns (with numbers), demonstrate SQL/analytics fluency, and have written artefacts (case studies, blog posts) that prove thinking.' }
    ]
  ),
  g(
    'digital-marketing-specialist',
    'Digital Marketing Specialist — Role Definition',
    'Digital Marketing Specialist | Onsective',
    'What a digital marketing specialist does, how they are measured, and what distinguishes top-decile specialists.',
    'digital marketing specialist, digital marketing executive, digital marketing manager',
    [
      { heading: 'Role Scope', body: 'Digital marketing specialists own specific channels or disciplines — paid search, paid social, email, SEO, content. They execute, measure, optimise, and report on a narrow set of KPIs.' },
      { heading: 'How They\'re Measured', body: 'Specialists are measured on channel-level KPIs (CPL, CPA, ROAS) with visibility into funnel contribution. Excellent specialists also influence adjacent functions — creative, analytics, CRM.' },
      { heading: 'What Distinguishes the Top', body: 'Top specialists combine deep channel expertise with measurement fluency, creative judgement, and business understanding. They argue with sales, not just execute.' }
    ]
  ),
  g(
    'digital-marketing-manager',
    'Digital Marketing Manager — What the Role Looks Like',
    'Digital Marketing Manager Role | Onsective',
    'The digital marketing manager role — responsibilities, KPIs, team dynamics, and progression paths.',
    'digital marketing manager, digital marketing director, head of digital marketing',
    [
      { heading: 'Responsibilities', body: 'Own channel or practice P&L, manage specialists, set strategy within a defined scope, present to leadership, and integrate with sales, product, and finance.' },
      { heading: 'Measurement', body: 'Portfolio-level metrics: pipeline, qualified leads, MQL-to-SQL conversion, channel-mix efficiency, team output velocity. Managers are judged on outcomes, not activity.' },
      { heading: 'Progression', body: 'Senior manager → director → VP → CMO. Progression requires demonstrated P&L ownership, cross-functional influence, and strategic communication ability.' }
    ]
  ),
  g(
    'digital-marketing-executive',
    'Digital Marketing Executive — Role and Expectations',
    'Digital Marketing Executive | Onsective',
    'The digital marketing executive role at entry-to-mid level — what it involves, what good looks like, and how to progress.',
    'digital marketing executive, digital marketing specialist, digital marketing analyst',
    [
      { heading: 'Role Scope', body: 'In most markets, "digital marketing executive" is an entry-to-mid-level IC role — executing campaigns, producing content, reporting on performance. A springboard to specialist or manager roles.' },
      { heading: 'Skill Focus', body: 'Master the tools (GA4, Google Ads, Meta Ads Manager, your email platform), understand the reports, learn to write clearly, and build basic SQL fluency.' },
      { heading: 'Progression Path', body: '2-3 years as executive → specialist (channel depth) → senior specialist → manager. Faster progression for executives who show measurement sophistication and business sense.' }
    ]
  ),
  g(
    'digital-marketer',
    'Digital Marketer — What Good Looks Like',
    'Digital Marketer Profile | Onsective',
    'What a great digital marketer looks like in 2026 — skills, judgement, toolset, and mindset.',
    'digital marketer, digital marketing professional, digitalmarketer',
    [
      { heading: 'The Core Skills', body: 'Channel fluency, measurement discipline, creative judgement, business literacy. Great marketers have all four; most have two out of four.' },
      { heading: 'The Toolset', body: 'Google Ads/Meta/LinkedIn Ads Manager, GA4, a marketing automation platform (HubSpot/Marketo), basic SQL, and increasingly — AI tools for content and analysis.' },
      { heading: 'The Mindset', body: 'Skeptical by default, experimental in practice, commercial in framing. Great marketers push back on briefs that don\'t make business sense.' }
    ]
  ),
  g(
    'digital-marketing-internship',
    'Digital Marketing Internship — What to Look For',
    'Digital Marketing Internship Guide | Onsective',
    'How to evaluate digital marketing internships and get the most from them — from an employer\'s perspective.',
    'digital marketing internship, marketing internship, digital marketing intern',
    [
      { heading: 'What a Good Internship Looks Like', body: 'Real projects (not coffee runs), measurable outcomes assigned to you, direct exposure to experienced operators, and feedback loops that build skill beyond the tactical.' },
      { heading: 'What to Do', body: 'Ask for a specific project. Measure your impact with numbers. Ship a case study before you leave. Build relationships for references.' },
      { heading: 'Red Flags', body: 'Unclear scope, no dedicated mentor, constant administrative work, no measurable output. Leave politely but quickly — internships compound or stagnate.' }
    ]
  ),
  g(
    'digital-marketing-salary',
    'Digital Marketing Salary — 2026 Benchmarks',
    'Digital Marketing Salary 2026 | Onsective',
    'Digital marketing salary benchmarks for 2026 by role, geography, and industry — with guidance on negotiation.',
    'digital marketing salary, digital marketing salaries, digital marketing pay, digital marketing compensation',
    [
      { heading: 'Salary by Role (North America)', body: 'Analyst $60-85k, specialist $80-120k, senior specialist $110-150k, manager $120-175k, senior manager $150-210k, director $175-270k, VP $220-400k, CMO $300-600k+. Ranges before equity.' },
      { heading: 'Geography Modifier', body: 'San Francisco/NYC +15-25%. London/Toronto +0-10%. Most of Europe -10-20%. India, LATAM -50-70%. Remote-first companies often pay "location-adjusted" rates.' },
      { heading: 'Negotiation Lever', body: 'Quantified impact (revenue driven, pipeline built, CPL reduced) matters more than certifications. Bring numbers. Walk away gracefully if the package doesn\'t match the impact.' }
    ]
  ),

  // ===== Tools, platforms, company queries =====
  g(
    'digital-marketing-tools',
    'Digital Marketing Tools — 30 Worth Your Stack',
    'Digital Marketing Tools | Onsective',
    'Thirty digital marketing tools that actually earn their place in an enterprise stack — categorised by function.',
    'digital marketing tools, digital marketing tools and platforms, digital marketing platforms, digital marketing software, best digital marketing tools',
    [
      { heading: 'Core Stack', body: 'Google Analytics 4, Google Tag Manager, Google Ads, Meta Ads Manager, LinkedIn Campaign Manager, HubSpot/Marketo, Mailchimp/Klaviyo, Ahrefs/Semrush, Hotjar/FullStory.' },
      { heading: 'Advanced Stack', body: 'Segment/Rudderstack (CDP), Looker/Tableau (BI), Optimizely/VWO (experimentation), Northbeam/Triple Whale (attribution), ChatGPT/Claude (content), Canva/Figma (design).' },
      { heading: 'What to Skip', body: 'Tools that duplicate your core stack\'s capability without 10× better execution. Tool sprawl kills marketing teams faster than budget cuts.' }
    ]
  ),
  g(
    'digital-marketing-platforms',
    'Digital Marketing Platforms — Enterprise Selection Guide',
    'Digital Marketing Platforms Guide | Onsective',
    'How to select digital marketing platforms at enterprise scale — evaluation criteria, trade-offs, and recommendations.',
    'digital marketing platforms, digital marketing platforms examples, digital marketing tools and platforms, marketing platforms',
    [
      { heading: 'Platform Categories', body: 'Ad platforms (Google, Meta, LinkedIn, TikTok, Amazon), MAP (HubSpot, Marketo, Pardot), CRM (Salesforce, HubSpot), CDP (Segment, mParticle, Treasure Data), analytics (GA4, Adobe), measurement (Northbeam, Keen).' },
      { heading: 'Selection Framework', body: 'Match platform capability to business requirement, not feature sheet. Evaluate integration depth with existing stack. Price per contact/event matters at scale. Support quality varies wildly.' },
      { heading: 'Total Cost of Ownership', body: 'Licence cost is 30-50% of true TCO. Add implementation, ongoing admin, specialist hires, and migration risk. Choose platforms you can still run in 3 years.' }
    ]
  ),
  g(
    'digital-marketing-channels',
    'Digital Marketing Channels — Full Landscape and Strategy',
    'Digital Marketing Channels | Onsective',
    'The full landscape of digital marketing channels — from search to CTV — with guidance on which to invest in.',
    'digital marketing channels, marketing channels, types of digital marketing, digital marketing channel mix',
    [
      { heading: 'The Channel Landscape', body: 'Search (Google, Bing), social (Meta, LinkedIn, X, TikTok, YouTube), programmatic (display, video, CTV), email, SMS, push, influencer, affiliate, direct mail, and increasingly — AI answer platforms.' },
      { heading: 'Channel Selection', body: 'Match channel to audience behaviour, not to what is trendy. B2B buyers live on LinkedIn and Google; Gen Z on TikTok; retail buyers on Meta and Amazon. Over-invest where your customers pay attention.' },
      { heading: 'Channel Mix', body: 'Most institutional portfolios run 4-7 channels at scale. Below 4, single-channel risk. Above 7, attention and optimisation capacity fragment.' }
    ]
  ),
  g(
    'types-of-digital-marketing',
    'Types of Digital Marketing — A Full Taxonomy',
    'Types of Digital Marketing | Onsective',
    'A full taxonomy of digital marketing types with use cases, channel fit, and when each excels.',
    'types of digital marketing, digital marketing types, kinds of digital marketing, what includes in digital marketing',
    [
      { heading: 'By Channel', body: 'Search, social, display, video, email, SMS, push, affiliate, influencer, content, direct. Each has subcategories (e.g., search = paid search + SEO).' },
      { heading: 'By Funnel Stage', body: 'Brand (awareness), demand generation (consideration), performance (conversion), retention (post-sale), advocacy (referrals). Every tactic plays one funnel role primarily.' },
      { heading: 'By Economic Model', body: 'Owned (invest once, compound forever), paid (pay per outcome), earned (invest in reputation, harvest over years). Healthy mixes span all three.' }
    ]
  ),
  g(
    'digital-marketing-services',
    'Digital Marketing Services — Full-Funnel Capabilities',
    'Digital Marketing Services | Onsective',
    'Onsective\'s digital marketing services — strategy, paid media, SEO, automation, video production, and measurement — delivered institutionally.',
    'digital marketing services, digital marketing service, online marketing services, digital marketing agency services',
    [
      { heading: 'Strategy Services', body: 'Audience intelligence, positioning, offer architecture, channel-mix modelling, budget allocation, and measurement design. Principal-led engagements, quantitative outputs.' },
      { heading: 'Execution Services', body: 'Paid media management (Google, Meta, LinkedIn, programmatic), SEO, marketing automation, content production, video, influencer, and social media management.' },
      { heading: 'Measurement Services', body: 'MTA implementation, incrementality testing, media mix modelling, executive dashboards, and quarterly portfolio reviews.' }
    ]
  ),
  g(
    'digital-marketing-company',
    'Digital Marketing Company — What to Look For',
    'Digital Marketing Company Evaluation | Onsective',
    'How to evaluate a digital marketing company — delivery model, commercials, team, case studies, and cultural fit.',
    'digital marketing company, digital marketing companies, digital marketing agency, best digital marketing company',
    [
      { heading: 'Delivery Model Red Flags', body: 'Junior account managers with no operational experience, offshore execution without senior oversight, inability to discuss attribution or incrementality, SEO promises about rankings or traffic volume without business context.' },
      { heading: 'What to Look For', body: 'Senior principals on every account, willingness to tie commercials to outcomes, transparent reporting, measurement sophistication, and case studies with numbers (not just logos).' },
      { heading: 'The Onsective Difference', body: 'Every Onsective engagement is led by a senior principal. Our agency of record engagements include outcome-indexed commercials — our success is tied to your measurable P&L impact.' }
    ]
  ),
  g(
    'digital-marketing-agency-near-me',
    'Digital Marketing Agency Near Me — How Location Matters (and Doesn\'t)',
    'Digital Marketing Agency Near Me | Onsective',
    'Does proximity matter when choosing a digital marketing agency? An honest answer from a global firm.',
    'digital marketing agency near me, digital agency near me, local digital marketing agency, find digital marketing agency',
    [
      { heading: 'When Local Matters', body: 'Regulated local commerce, highly regional brands, and work that requires frequent in-person strategy sessions. Local agencies know local press, local influencers, and local consumer behaviour.' },
      { heading: 'When It Doesn\'t', body: 'B2B SaaS, global brands, digitally-native businesses, and work that is dominantly analytical. A senior principal in Toronto can deliver to a client in Dubai with no degradation.' },
      { heading: 'Hybrid Model', body: 'Onsective operates 10 global hubs (Toronto, NYC, London, Dubai, Mumbai, Singapore, Sydney, Berlin, San Francisco, Vancouver) combined with global delivery. Local presence where it adds value.' }
    ]
  ),
  g(
    'best-digital-marketing-agency',
    'Best Digital Marketing Agency — Evaluation Criteria',
    'Best Digital Marketing Agency 2026 | Onsective',
    'What the best digital marketing agency looks like in 2026 — and how to evaluate candidates beyond marketing.',
    'best digital marketing agency, top digital marketing agency, best digital marketing agencies, award winning digital marketing agency',
    [
      { heading: 'The Real Criteria', body: 'Not awards. Not logos. Evaluate: senior bench depth, measurement sophistication, willingness to show ugly numbers, case studies with pre-post metrics, cultural fit, and commercial alignment.' },
      { heading: 'The Diligence Process', body: 'Interview the senior principal who would actually run your account. Ask for client references (not just logos). Pressure-test attribution and measurement claims. Evaluate 90-day plans, not year-long roadmaps.' },
      { heading: 'Warning Signs', body: 'Promises that sound too good, refusal to discuss failed campaigns, vague attribution answers, long account manager handoffs, and inflexible commercial structures.' }
    ]
  ),
  g(
    'marketing-agencies',
    'Marketing Agencies — Inside the Industry',
    'Marketing Agencies Inside View | Onsective',
    'An inside view of marketing agencies — business models, talent dynamics, and how to evaluate the agency you hire.',
    'marketing agencies, marketing agency, digital agencies, marketing firms, top marketing agencies',
    [
      { heading: 'Business Models', body: 'Holding-company networks (WPP, Omnicom), independent shops, boutique consultancies, and project-based freelancers. Each has distinct economics, talent bench, and service depth.' },
      { heading: 'Talent Dynamics', body: 'Best people concentrate in boutique independents and top-tier consultancies. Holding-company networks have depth but diluted delivery. Freelancers deliver specific specialisations but lack integrated capability.' },
      { heading: 'How to Choose', body: 'Define the job first. Enterprise rebrand with global rollout? Big agency. Performance marketing with deep measurement? Boutique. Specialist need (SEO, video)? Specialist shop or consultancy with the specialist.' }
    ]
  ),
  g(
    'marketing-agency',
    'Marketing Agency — What You\'re Actually Buying',
    'Marketing Agency Guide | Onsective',
    'What you\'re actually buying when you hire a marketing agency — capacity, capability, or commitment?',
    'marketing agency, agency, digital marketing agency, marketing firm',
    [
      { heading: 'The Three Things You Buy', body: 'Capacity (hands you don\'t have), capability (expertise you can\'t hire quickly), commitment (accountability for outcomes). Different engagements prioritise different things.' },
      { heading: 'Aligning Commercials', body: 'Retainers suit ongoing capability needs. Project fees suit defined deliverables. Outcome-based compensation works when both sides trust the measurement. Avoid opaque markups and undisclosed fees.' },
      { heading: 'The Long Game', body: 'Best agency relationships last 3-5 years and deepen over time. Short relationships often reflect a mismatch in scope, commercial alignment, or delivery model.' }
    ]
  ),

  // ===== Paid media & specific =====
  g(
    'online-advertising',
    'Online Advertising — The Full Landscape',
    'Online Advertising Guide | Onsective',
    'Online advertising in 2026 — the landscape, the auction dynamics, the measurement challenges, and the strategies that still work.',
    'online advertising, digital advertising, internet marketing, digital marketing online advertising',
    [
      { heading: 'The Landscape', body: 'Search (Google, Bing), social (Meta, LinkedIn, TikTok, X), display (programmatic, Google Display Network), video (YouTube, CTV), ecommerce (Amazon, Shopify Audiences), and direct publisher deals.' },
      { heading: 'Auction Dynamics', body: 'All major platforms use real-time auction. Winning requires bidding strategy sophistication, quality score optimisation, and audience signal quality. Platforms with low quality signals bleed budget.' },
      { heading: 'Measurement Reality', body: 'Privacy changes (iOS 14+, GDPR) have destroyed deterministic cross-device tracking. Modern measurement combines CAPI, modelling, incrementality, and MMM.' }
    ]
  ),
  g(
    'digital-advertising',
    'Digital Advertising — Strategy and Execution',
    'Digital Advertising | Onsective',
    'Digital advertising strategy and execution — channel selection, bid management, creative velocity, and measurement rigour.',
    'digital advertising, online advertising, paid media, paid advertising',
    [
      { heading: 'Strategy', body: 'Match channel to objective, not to budget. Brand objectives favour video and display. Demand capture favours search. Consideration favours social and content. Mix reflects the full funnel.' },
      { heading: 'Execution', body: 'Bid strategy aligned to outcome (tROAS for revenue, tCPA for leads, MaxConv for learning). Creative velocity (10-50 variants monthly). Audience signal quality (first-party seeds, conversion APIs).' },
      { heading: 'Common Failures', body: 'Over-investing in last-click channels. Undercounting brand contribution. Creative fatigue through under-shipping variants. Ignoring incrementality.' }
    ]
  ),
  g(
    'internet-marketing',
    'Internet Marketing — The Term and Its Modern Meaning',
    'Internet Marketing | Onsective',
    'Internet marketing defined and placed in the modern digital marketing context — terminology that still matters.',
    'internet marketing, online marketing, digital marketing, web marketing',
    [
      { heading: 'Terminology', body: '"Internet marketing" is the older term for what is now called digital marketing. Still common in certain markets (especially Asia-Pacific and Latin America). Functionally equivalent to digital marketing.' },
      { heading: 'What It Covers', body: 'SEO, paid search, display advertising, email, social, affiliate, content. Broadly synonymous with digital marketing — though some purists use "internet marketing" for older channels and "digital marketing" for modern multi-channel orchestration.' },
      { heading: 'Onsective\'s Practice', body: 'We use the terms interchangeably. What matters is the operating model — institutional discipline across audience, channels, measurement, and governance.' }
    ]
  ),
  g(
    'online-marketing',
    'Online Marketing — Strategy for Institutional Operators',
    'Online Marketing | Onsective',
    'Online marketing from an institutional consulting perspective — strategy, execution, and measurement at enterprise scale.',
    'online marketing, internet marketing, web marketing, digital marketing',
    [
      { heading: 'Institutional Approach', body: 'Online marketing at enterprise scale is a portfolio-allocation discipline. Every channel is evaluated for incremental contribution to pipeline and revenue, not just its internal metrics.' },
      { heading: 'The Stack', body: 'Mature online marketing functions run integrated stacks: audience platform + measurement layer + execution platforms + orchestration middleware + analytics + governance tooling.' },
      { heading: 'Common Pitfalls', body: 'Channel silos, misaligned incentives between paid and organic teams, inadequate first-party data foundation, and over-reliance on platform-reported metrics.' }
    ]
  ),
  g(
    'web-marketing',
    'Web Marketing — Definition and Modern Practice',
    'Web Marketing | Onsective',
    'Web marketing explained in modern terms — where it fits in the broader digital marketing landscape.',
    'web marketing, internet marketing, online marketing, website marketing',
    [
      { heading: 'What It Covers', body: 'Web marketing classically refers to marketing activities centred on the website and search visibility — SEO, content, CRO, email capture, on-site personalisation.' },
      { heading: 'Modern Context', body: 'In 2026, web marketing is a component of digital marketing focused on owned properties. It pairs with paid media to capture demand and with brand marketing to create demand.' },
      { heading: 'Enterprise Practice', body: 'At enterprise scale, web marketing spans technical SEO, content strategy, CRO, site personalisation, and experimentation discipline.' }
    ]
  ),
  g(
    'digital-marketing-business',
    'Digital Marketing Business — Building and Scaling One',
    'Digital Marketing Business | Onsective',
    'How to build and scale a digital marketing business — agency economics, positioning, talent, and capital formation.',
    'digital marketing business, digital marketing agency business, starting digital marketing business, digital marketing company business',
    [
      { heading: 'The Economics', body: 'Agency gross margins range 30-60%. Retainer businesses scale better than project businesses. Specialisation commands higher margins than generalist service. Talent economics (utilisation × billable rate) define profitability.' },
      { heading: 'Positioning', body: 'Full-service, specialist, or consultancy-plus-execution. Most profitable agencies have clear positioning. "We do everything for everyone" is the hardest path to scale.' },
      { heading: 'Scaling Levers', body: 'Productised services, tech IP, senior talent retention, and repeatable delivery methodology. Agencies without these plateau around $10-15M annually.' }
    ]
  ),
  g(
    'ai-in-digital-marketing',
    'AI in Digital Marketing — What Actually Works in 2026',
    'AI in Digital Marketing 2026 | Onsective',
    'AI in digital marketing — what delivers real ROI in 2026 versus what remains hype.',
    'ai digital marketing, ai in digital marketing, ai marketing, generative ai marketing, ai powered marketing',
    [
      { heading: 'What Works', body: 'Creative generation at scale (Midjourney, Firefly), copy iteration (Claude, GPT), audience insights (pattern detection in first-party data), and campaign optimisation (AI-powered bid management).' },
      { heading: 'What Remains Hype', body: 'Fully autonomous marketing agents, AI-generated brand strategy, AI-driven customer journeys that outperform humans. Promising but not production-ready at enterprise scale in 2026.' },
      { heading: 'How to Operationalise', body: 'Start with high-volume, low-risk tasks (creative iteration, first-draft copy, analysis). Add human review. Measure rigorously. Expand where ROI is clear.' }
    ]
  ),
  g(
    'digital-marketing-trends',
    'Digital Marketing Trends 2026 — What\'s Real, What\'s Hype',
    'Digital Marketing Trends 2026 | Onsective',
    'The digital marketing trends that matter in 2026 — and the ones that don\'t. From AI to zero-click search to first-party data.',
    'digital marketing trends, latest trends in digital marketing, marketing trends, digital marketing trends 2026',
    [
      { heading: 'The Real Trends', body: 'Zero-click search reshaping SEO, AI-powered creative production, first-party data as competitive moat, retention-first economics, brand + performance integration, attribution-to-incrementality shift.' },
      { heading: 'Overhyped', body: 'Metaverse marketing, fully autonomous marketing agents, complete deprecation of third-party cookies (slower than expected), blockchain marketing.' },
      { heading: 'What to Do', body: 'Invest in first-party data infrastructure. Build AI-augmented creative velocity. Shift budget mixing toward incrementality-informed allocation.' }
    ]
  ),
  g(
    'benefits-of-digital-marketing',
    'Benefits of Digital Marketing — Business Case for Executives',
    'Benefits of Digital Marketing | Onsective',
    'The benefits of digital marketing framed as an executive business case — measurable, scalable, and compounding.',
    'benefits of digital marketing, advantages of digital marketing, digital marketing benefits',
    [
      { heading: 'Measurability', body: 'Unlike traditional marketing, digital marketing instruments every touchpoint. Leadership gets attribution, incrementality, and ROI visibility their traditional marketing counterparts cannot provide.' },
      { heading: 'Scalability', body: 'Digital channels scale with budget. Spend 2× tomorrow, reach 2× the audience (with diminishing returns). Enables rapid market entry and agile reallocation.' },
      { heading: 'Compounding', body: 'SEO content, brand awareness, and CRM data compound over time. Early disciplined investment accumulates advantages competitors cannot catch on quickly.' }
    ]
  ),
  g(
    'digital-marketing-examples',
    'Digital Marketing Examples — Institutional Case Studies',
    'Digital Marketing Examples | Onsective',
    'Digital marketing examples across industries — what works, what fails, and the reasoning behind each.',
    'digital marketing examples, digital marketing case studies, digital marketing success stories',
    [
      { heading: 'B2B SaaS', body: 'Dropbox\'s referral programme, HubSpot\'s inbound content engine, Slack\'s product-led growth marketing. Common pattern: compound over years, built on first-party data and community.' },
      { heading: 'Consumer', body: 'Airbnb\'s programmatic SEO, Glossier\'s Instagram community build, Patagonia\'s values-led content. Common pattern: authentic narrative scaled through paid amplification.' },
      { heading: 'Financial Services', body: 'Monzo\'s community-led brand, Wealthsimple\'s content-led education, Stripe\'s developer-focused documentation. Common pattern: niche expertise at scale.' }
    ]
  ),
  g(
    'digital-marketing-success',
    'Digital Marketing Success — The Principles Behind It',
    'Digital Marketing Success | Onsective',
    'The principles behind sustained digital marketing success — not one-campaign wins, but compounding institutional capability.',
    'digital marketing success, digital marketing wins, successful digital marketing, how to succeed in digital marketing',
    [
      { heading: 'Principle 1: Measurement', body: 'You cannot improve what you don\'t measure. Investment in measurement is investment in everything else working. Top-decile marketing functions have measurement sophistication as a defining characteristic.' },
      { heading: 'Principle 2: Discipline', body: 'Consistent execution beats clever tactics. The enterprises that succeed run the fundamentals every day — not the trendy thing every quarter.' },
      { heading: 'Principle 3: Long View', body: 'Brand compounds over years. SEO compounds over years. CRM data compounds over years. Short-term orientation kills compounding. The CMO tenure crisis is a strategic problem, not a talent problem.' }
    ]
  ),

  // ===== Long-tail specialised =====
  g(
    'what-is-seo-in-digital-marketing',
    'What Is SEO in Digital Marketing? Full Explanation',
    'What Is SEO in Digital Marketing | Onsective',
    'SEO\'s role in digital marketing explained — how it works, why it compounds, and where it fits in the full funnel.',
    'what is seo in digital marketing, seo digital marketing, seo in digital marketing, digital marketing seo',
    [
      { heading: 'SEO Defined', body: 'SEO (Search Engine Optimisation) is the practice of engineering a website to earn prominent organic visibility in search engine results for queries your audience performs.' },
      { heading: 'Role Within Digital Marketing', body: 'SEO captures intent at the moment of need — a lower-funnel conversion channel that is also a top-funnel authority builder. It compounds more than any other channel.' },
      { heading: 'Enterprise Execution', body: 'Enterprise SEO combines technical engineering, topical authority content, and programmatic page generation. See Onsective\'s full enterprise SEO practice for institutional implementation.' }
    ]
  ),
  g(
    'digital-marketing-websites',
    'Digital Marketing Websites — What Separates Great From Average',
    'Digital Marketing Websites | Onsective',
    'What makes a digital marketing website great — performance, SEO, conversion architecture, and content discipline.',
    'digital marketing websites, digital marketing website, best digital marketing websites, digital marketing agency website',
    [
      { heading: 'Performance', body: 'Sub-1-second load times, WCAG 2.1 AA accessibility, Core Web Vitals green. Performance is a credibility signal and a conversion lever simultaneously.' },
      { heading: 'SEO Foundation', body: 'Technical SEO baked in, structured data deployed, internal link architecture engineered, topical authority content producing monthly.' },
      { heading: 'Conversion Architecture', body: 'Clear funnel paths, reduced form friction, trust signalling at decision moments, and continuous A/B experimentation. Most "average" sites fail here more than anywhere else.' }
    ]
  ),
  g(
    'digital-marketing-website',
    'Digital Marketing Website — Design Principles',
    'Digital Marketing Website Design | Onsective',
    'Design principles for a digital marketing agency\'s website — what to emphasise, what to strip, and why.',
    'digital marketing website, digital agency website, marketing agency website, digital marketing website design',
    [
      { heading: 'Emphasise', body: 'Outcomes (not capabilities), client logos with case-study depth, team credentials, and clear next-step CTAs. Prospects buy outcomes.' },
      { heading: 'Strip', body: 'Capability lists that mirror every other agency, stock photography, generic testimonials, and animation for animation\'s sake.' },
      { heading: 'Measure', body: 'Scroll depth, time on page (as engagement signal, not vanity), qualified form submissions, and sales-team feedback on lead quality.' }
    ]
  ),
  g(
    'digital-marketing-images',
    'Digital Marketing Images — Visual Asset Strategy',
    'Digital Marketing Images | Onsective',
    'Visual asset strategy for digital marketing — photography, illustration, and AI-generated imagery in the 2026 stack.',
    'digital marketing images, digital marketing background images, digital marketing pictures, digital marketing visuals, digital marketing background',
    [
      { heading: 'The Hierarchy', body: 'Commercial photography for hero narrative, illustration for concept work, AI-generated imagery for scale and iteration, user-generated content for authenticity.' },
      { heading: 'Production Economics', body: 'One premium commercial shoot + modular remix pipeline produces hundreds of asset variants. Pair with AI-generated B-roll for scale without the production cost of shooting everything bespoke.' },
      { heading: 'Governance', body: 'Brand guidelines for image treatment, approved stock repositories, AI prompt libraries, and rights management systems — without them, consistency drifts within quarters.' }
    ]
  ),
  g(
    'digital-marketing-institute',
    'Digital Marketing Institute — Options and Evaluation',
    'Digital Marketing Institute Review | Onsective',
    'Digital Marketing Institute (DMI) and other institutes — what they offer, who they\'re for, and how they compare.',
    'digital marketing institute, digital marketing institutes, digital marketing school, digital scholar, digital school south africa, digital school of marketing',
    [
      { heading: 'The Landscape', body: 'Digital Marketing Institute (DMI), CXL Institute (measurement/CRO depth), Market Motive, Digital Marketer, and university extension programmes (Columbia, Northwestern). Each targets different career stages.' },
      { heading: 'When to Go Institute Route', body: 'Mid-career marketers seeking structured depth beyond platform certifications. Career-switchers who need comprehensive foundation. Leaders seeking credential + network (university extension).' },
      { heading: 'The Alternative', body: 'In-house learning + mentorship often outperforms institute programmes for employers. Institute credentials help candidates; in-house growth helps institutions.' }
    ]
  ),
  g(
    'digital-services',
    'Digital Services — What the Category Covers',
    'Digital Services | Onsective',
    'What "digital services" covers as a business category — and where digital marketing fits within it.',
    'digital services, digital solution, digital services provider, digital transformation services',
    [
      { heading: 'The Category', body: '"Digital services" spans digital marketing, custom software development, cloud services, cybersecurity, digital experience design, and technology consulting — anything that uses digital technology to deliver business outcomes.' },
      { heading: 'Where Digital Marketing Fits', body: 'Digital marketing is one pillar of digital services — focused on demand creation, demand capture, and customer retention through digital channels.' },
      { heading: 'Onsective\'s Full Stack', body: 'Onsective delivers 10 integrated digital service practices (IT Strategy, Cloud, Cybersecurity, Digital Experience, AI, Enterprise SEO, Digital Marketing, Social Media, Custom Software, Brand Management).' }
    ]
  ),
  g(
    'digital-technology',
    'Digital Technology — What Enterprises Need to Know in 2026',
    'Digital Technology 2026 | Onsective',
    'Digital technology in 2026 — the stack enterprises run, the capabilities that matter, and the buying mistakes to avoid.',
    'digital technology, digital tech, digital technology trends, enterprise digital technology',
    [
      { heading: 'The 2026 Stack', body: 'Cloud-native infrastructure, AI-augmented workflows, first-party data platforms, identity-centric security, and experience-layer personalisation. Most enterprises run 50+ technology vendors integrated into this base.' },
      { heading: 'What Matters Most', body: 'Composability (can you swap parts?), sovereignty (do you control data?), observability (can you see what\'s happening?), and economic governance (can you control spend?). Missing any breaks the stack.' },
      { heading: 'Common Buying Mistakes', body: 'Vendor consolidation for its own sake, feature-sheet-driven selection, under-estimating implementation cost, and over-estimating current team\'s operational maturity.' }
    ]
  ),
  g(
    'digital-agency',
    'Digital Agency — What They Do vs Marketing Agencies',
    'Digital Agency Definition | Onsective',
    'Digital agency vs marketing agency — what\'s the difference, what do digital agencies actually do, and when do you need one.',
    'digital agency, digital agencies, digital marketing agency, digital agency services',
    [
      { heading: 'The Distinction', body: '"Digital agency" typically spans more than marketing — product design, software development, digital strategy, and experience design. "Marketing agency" focuses on marketing outcomes specifically.' },
      { heading: 'When You Need One', body: 'Building a new digital product, redesigning digital customer experiences, integrating disparate digital systems — anything requiring design + engineering + marketing integration.' },
      { heading: 'Overlap', body: 'Many digital agencies do marketing; many marketing agencies do digital products. Look past the label. Evaluate capability, delivery model, and proof.' }
    ]
  ),
  g(
    'digital-market',
    'Digital Market — Context for the Term',
    'Digital Market Context | Onsective',
    'What "digital market" means in context — trends, sizing, and enterprise implications.',
    'digital market, digital marketplace, digital market definition',
    [
      { heading: 'Market Sizing', body: 'Global digital ad spend exceeded $700B in 2025. Digital marketing services spend approximately $220B. Enterprise digital transformation spending $3.4T. All growing at 8-12% CAGR.' },
      { heading: 'Market Dynamics', body: 'Consolidation at the top (Big Tech capturing growing share), specialisation at the middle (boutique experts), commoditisation at the bottom (execution tasks). AI is accelerating all three.' },
      { heading: 'Implications for Enterprises', body: 'Diversify platform dependence. Build first-party data sovereignty. Invest in internal capability to reduce long-term agency spend. Measure relentlessly.' }
    ]
  ),
  g(
    'media-marketing',
    'Media Marketing — Where Paid Media Meets Brand',
    'Media Marketing | Onsective',
    'Media marketing defined — where paid media, brand marketing, and measurement converge.',
    'media marketing, paid media marketing, media buying, media planning',
    [
      { heading: 'Media Marketing Defined', body: 'Media marketing is the discipline of planning, buying, and optimising paid media — across search, social, display, video, audio, CTV, and out-of-home — to drive brand and performance outcomes.' },
      { heading: 'Modern Practice', body: 'Integrated brand + performance measurement, cross-channel orchestration, value-based bidding, and real-time budget reallocation. The modern practice is analytics-first, not creative-first.' },
      { heading: 'Who Excels', body: 'Firms that combine media buying bench (creative, strategist, analyst) with technology depth (ad ops, data engineering, measurement science). Siloed firms plateau.' }
    ]
  ),
  g(
    'google-marketing',
    'Google Marketing — Platform, Tools, and Strategy',
    'Google Marketing Guide | Onsective',
    'Google marketing covers Google Ads, YouTube, Display, and the wider Google advertising ecosystem. A strategic guide.',
    'google marketing, google ads marketing, google advertising, marketing with google',
    [
      { heading: 'The Ecosystem', body: 'Google Ads (search, display, video, shopping, apps, performance max), YouTube advertising, Google Merchant Center, Google Analytics 4, Tag Manager, Looker Studio. All interoperate.' },
      { heading: 'Strategic Position', body: 'Google captures high-intent search demand better than any other platform. YouTube captures attention at scale. Display is programmatic long-tail reach. Each plays a defined funnel role.' },
      { heading: 'Pitfalls', body: 'Over-reliance on Performance Max without guardrails, ignoring brand-vs-non-brand split, poor conversion tracking hygiene, and over-attributing last-click wins to Google while undercounting upstream contribution.' }
    ]
  ),
  g(
    'learn-digital-with-google',
    'Learn Digital With Google — Programme Overview',
    'Learn Digital With Google | Onsective',
    'Learn Digital With Google (Google Digital Garage) overview — what it teaches, who benefits, and how it fits a broader learning path.',
    'learn digital with google, google digital garage, google digital skills, google digital marketing training',
    [
      { heading: 'What It Is', body: 'Google\'s free digital skills programme offered globally — includes the Fundamentals of Digital Marketing course and dozens of other short modules on productivity, data, coding, and career skills.' },
      { heading: 'Strengths', body: 'Free, comprehensive foundations, widely recognised certification, multilingual (40+ languages). Excellent entry point for career-switchers.' },
      { heading: 'Use It For', body: 'Baseline literacy across digital marketing concepts. Build on it with specialised certifications and applied experience for meaningful career progression.' }
    ]
  ),
  g(
    'digital-marketing-digital-branding',
    'Digital Marketing + Digital Branding — The Integration',
    'Digital Marketing + Digital Branding | Onsective',
    'How digital marketing and digital branding integrate — when they work together, and when brand gets sacrificed to performance.',
    'digital marketing digital branding, digital branding, brand + performance marketing, brand and performance',
    [
      { heading: 'The Integration', body: 'Digital branding creates demand; digital marketing captures it. When integrated, brand investment lowers CAC; performance measurement informs brand strategy. When siloed, each subtracts from the other.' },
      { heading: 'The Common Mistake', body: 'Cutting brand investment when performance is under pressure. This inflates short-term metrics while eroding the long-term CAC base. Top-decile marketing functions protect brand investment.' },
      { heading: 'Measurement', body: 'Brand contribution is measurable — through brand-lift studies, assisted-conversion analysis, and MMM. Measure it, report it, protect it.' }
    ]
  ),
  g(
    'digital-marketing-pictures',
    'Digital Marketing Pictures — Creative Asset Strategy',
    'Digital Marketing Pictures Guide | Onsective',
    'Strategy for digital marketing pictures — from hero photography to AI-generated illustrations to UGC.',
    'digital marketing pictures, digital marketing images, digital marketing visuals, marketing pictures',
    [
      { heading: 'Hierarchy of Visual Assets', body: 'Brand photography at the top (bespoke, expensive, slowest to produce). Stock and AI-generated at the bottom (cheap, fast, generic). Most enterprises need both — for different funnel stages.' },
      { heading: 'Production Discipline', body: 'Pre-production (brief, mood board, shot list) determines 80% of quality. Rushing pre-production to start shooting always costs more than it saves.' },
      { heading: 'Rights and Usage', body: 'Every asset needs clear rights documentation. Model releases, location releases, usage terms, and duration limits. DAM (digital asset management) platform discipline prevents legal exposure.' }
    ]
  ),
  g(
    'digital-marketing-system',
    'Digital Marketing System — Architecture for Institutions',
    'Digital Marketing System Architecture | Onsective',
    'The digital marketing system architecture for institutional operations — from audience data through execution platforms to measurement.',
    'digital marketing system, digital marketing systems, digital marketing architecture, marketing technology stack',
    [
      { heading: 'The System Layers', body: 'Audience (CDP, CRM, identity) → Execution (ad platforms, email, CMS) → Orchestration (marketing automation, workflow) → Measurement (GA4, MTA, MMM) → Governance (brand, compliance, spend).' },
      { heading: 'Common Failure Modes', body: 'Each layer built independently without integration planning. Data silos prevent audience activation. Tools duplicate function. Total cost of ownership spirals without corresponding capability.' },
      { heading: 'The Onsective Approach', body: 'We audit the system end-to-end, prioritise consolidation where it compounds, and sequence the rebuild for continuous value delivery. No big-bang replatforms.' }
    ]
  ),
  g(
    'digital-marketing-pdf',
    'Digital Marketing PDF — Reference Materials',
    'Digital Marketing PDF Resources | Onsective',
    'Reference PDFs for digital marketing professionals — frameworks, checklists, and guides from Onsective\'s practice.',
    'digital marketing pdf, digital marketing guide pdf, marketing pdf, digital marketing book pdf',
    [
      { heading: 'What We Publish', body: 'Frameworks (audience segmentation, funnel architecture, attribution), checklists (campaign launch, technical SEO, CRO), and benchmarks (industry CAC, conversion rates, ROAS) — available on request.' },
      { heading: 'Who It\'s For', body: 'CMOs, marketing directors, and institutional teams building or refining their digital marketing operating model. Practitioner-level, not beginner.' },
      { heading: 'Request Materials', body: 'Reach Onsective via the contact page or directly at contact@onsective.com. We send curated materials matched to your institutional context.' }
    ]
  ),
  g(
    'digital-marketing-certificate',
    'Digital Marketing Certificate — Guide to Worthy Credentials',
    'Digital Marketing Certificate Guide | Onsective',
    'Which digital marketing certificates actually carry weight — and which ones to skip.',
    'digital marketing certificate, digital marketing certification, hubspot digital marketing certification, digital marketing free courses with certificate',
    [
      { heading: 'The Valuable Certifications', body: 'Google Ads, Google Analytics 4, Meta Blueprint, LinkedIn Marketing Labs, HubSpot Inbound, CXL Institute specialisations. These are recognised by hiring teams.' },
      { heading: 'The Noise', body: 'Unaccredited online "certificates" from unknown providers. Helpful only for learning — not credentialing. Hiring managers ignore them.' },
      { heading: 'The Insight', body: 'Certifications open doors. Portfolio of work, documented outcomes, and recommendations close them. Pursue certifications as one part of a larger professional evidence base.' }
    ]
  ),
  g(
    'what-includes-in-digital-marketing',
    'What\'s Included in Digital Marketing? Full Scope Explained',
    'What Does Digital Marketing Include? | Onsective',
    'Everything digital marketing includes — from SEO and paid media to email, content, social, influencer, and emerging channels.',
    'what includes in digital marketing, what does digital marketing include, digital marketing scope, digital marketing components',
    [
      { heading: 'The Core Disciplines', body: 'SEO, paid search, paid social, display and programmatic, video and CTV, email and SMS, content marketing, influencer marketing, affiliate marketing, conversion rate optimisation, marketing automation, analytics and attribution.' },
      { heading: 'Adjacent Disciplines', body: 'Brand strategy, PR, community management, events (virtual and hybrid), product-led growth, lifecycle marketing, CRM marketing, and increasingly — AI-assisted operations across all of the above.' },
      { heading: 'Organisational Reality', body: 'Most institutions organise digital marketing across 4-7 teams. Co-ordination across those teams is the hardest part, not execution within them.' }
    ]
  )
];
