import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "mk";
export type Theme = "dark" | "light";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (k: TKey) => string;
};

const AppCtx = createContext<Ctx | null>(null);

export const dict = {
  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.available": "Available",

    "hero.badge": "Software Engineering Student · FINKI · Year 3",
    "hero.lead":
      "I build modern web products and real-world applications — from collaborative engineering systems to polished business sites that ship and perform.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact me",
    "hero.scroll": "Scroll",

    "marquee.gap": "·",

    "work.eyebrow": "Selected work",
    "work.title.a": "Projects that ",
    "work.title.b": "ship & perform.",
    "work.desc":
      "A small set of work I'm proud of — collaborative engineering, real client deliveries, and frontend craft.",
    "work.role": "Role",
    "work.stack": "Stack",
    "work.live": "Live demo",
    "work.code": "Code",

    "about.eyebrow": "About",
    "about.title.a": "A young engineer building ",
    "about.title.b": "real things.",
    "about.p1":
      "I'm Leo — a 21-year-old software engineering student at FINKI, currently in my 3rd year. I care about clean execution, real products, and the small details that separate a finished site from a great one.",
    "about.p2":
      "My work spans both ends: collaborative technical projects with microservices and data pipelines, and polished business-facing sites delivered for real clients. I like working close to the user — but I'm just as happy reasoning about systems behind the scenes.",
    "about.p3":
      "I'm an AI enthusiast — exploring how modern AI tools and models fit into real products — and focused on growing into a strong full-stack engineer, shipping more production work, and learning fast from the people I build with.",
    "about.f.age": "Age",
    "about.f.age.v": "21",
    "about.f.based": "Based in",
    "about.f.based.v": "North Macedonia",
    "about.f.studying": "Studying",
    "about.f.studying.v": "Software Engineering · FINKI",
    "about.f.year": "Year",
    "about.f.year.v": "3rd",
    "about.f.focus": "Focus",
    "about.f.focus.v": "Full-stack web · modern frontend · AI",
    "about.f.open": "Open to",
    "about.f.open.v": "Internships · freelance · roles",

    "stack.eyebrow": "Stack",
    "stack.title.a": "Tools I reach for.",
    "stack.title.b": "",
    "stack.desc":
      "A working stack I use across studies, side projects, and client work.",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.databases": "Databases",
    "stack.tools": "Tools / DevOps",
    "stack.languages": "Languages",

    "proof.eyebrow": "What I bring",
    "proof.title.a": "Proof over ",
    "proof.title.b": "promises.",
    "proof.1.t": "Real, shipped work",
    "proof.1.b":
      "Live business sites in production, not tutorial clones. Every project here is something you can open in a tab right now.",
    "proof.2.t": "Team-built systems",
    "proof.2.b":
      "I've worked inside collaborative codebases — microservices, branches, code review, deployment — not just solo experiments.",
    "proof.3.t": "Both ends of the stack",
    "proof.3.b":
      "Comfortable from frontend craft and UI polish to backend services, data, and Docker-based deployment.",
    "proof.4.t": "I learn fast & ship",
    "proof.4.b":
      "I move quickly, take feedback seriously, and put the work in to raise the bar on every next project.",

    "contact.badge": "Open to opportunities",
    "contact.title.a": "Let's build ",
    "contact.title.b": "something",
    "contact.title.c": "worth shipping.",
    "contact.desc":
      "Hiring, freelance projects, or just a good idea — I'd love to hear about it. The fastest way to reach me is email.",
    "contact.copy": "Copy",
    "contact.copied": "Copied",

    "footer.role": "Software Engineering Student · FINKI",
    "footer.rights": "Designed & built with care.",

    "p.crypto.cat": "Engineering · Microservices",
    "p.crypto.sum":
      "A collaborative analytics platform that ingests historical cryptocurrency data, visualizes market trends, and surfaces statistical insights through a modular microservice architecture.",
    "p.crypto.role":
      "Full-stack engineer — services, data pipeline, charts, deployment",

    "p.bakery.cat": "Client Work · Local Brand",
    "p.bakery.sum":
      "A polished website for a local bakery brand. Clean frontend execution, refined typography, and a warm visual identity that feels considered end-to-end.",
    "p.bakery.role":
      "Designer & frontend developer — shipped & live",

    "p.fitness.cat": "Client Work · Fitness Brand",
    "p.fitness.sum":
      "A modern, production-ready website for a fitness business. Bold visual presentation, strong brand voice, and frontend craft tuned for performance.",
    "p.fitness.role":
      "Designer & frontend developer — shipped & live",
  },
  mk: {
    "nav.work": "Проекти",
    "nav.about": "За мене",
    "nav.stack": "Технологии",
    "nav.contact": "Контакт",
    "nav.available": "Достапен",

    "hero.badge": "Студент по Софтверско Инженерство · ФИНКИ · 3та година",
    "hero.lead":
      "Градам модерни веб продукти и реални апликации — од колаборативни инженерски системи до полирани бизнис сајтови што се пуштаат и перформираат.",
    "hero.cta.projects": "Види проекти",
    "hero.cta.contact": "Контактирај ме",
    "hero.scroll": "Скролај",

    "marquee.gap": "·",

    "work.eyebrow": "Избрани проекти",
    "work.title.a": "Проекти што ",
    "work.title.b": "се пуштаат и работат.",
    "work.desc":
      "Мала колекција работи на кои сум горд — тимска инженерија, реални клиентски проекти и frontend занает.",
    "work.role": "Улога",
    "work.stack": "Технологии",
    "work.live": "Жив демо",
    "work.code": "Код",

    "about.eyebrow": "За мене",
    "about.title.a": "Млад инженер кој гради ",
    "about.title.b": "реални работи.",
    "about.p1":
      "Јас сум Лео — 21-годишен студент по софтверско инженерство на ФИНКИ, моментално во 3та година. Ми е важна чистата изведба, реалните продукти и малите детали што разликуваат завршен сајт од одличен.",
    "about.p2":
      "Работата ми покрива двете страни: колаборативни технички проекти со микросервиси и податочни пајплајни, и полирани бизнис сајтови испорачани на реални клиенти. Сакам да работам блиску до корисникот — но исто толку уживам и во резонирање за системите зад сцената.",
    "about.p3":
      "Ентузијаст сум за AI — истражувам како модерните AI алатки и модели се вклопуваат во реални продукти — и фокусиран сум да израснам во силен full-stack инженер, да пуштам повеќе продукциска работа и да учам брзо од луѓето со кои градам.",
    "about.f.age": "Возраст",
    "about.f.age.v": "21",
    "about.f.based": "Базиран во",
    "about.f.based.v": "Северна Македонија",
    "about.f.studying": "Студира",
    "about.f.studying.v": "Софтверско Инженерство · ФИНКИ",
    "about.f.year": "Година",
    "about.f.year.v": "3та",
    "about.f.focus": "Фокус",
    "about.f.focus.v": "Full-stack веб · модерен frontend · AI",
    "about.f.open": "Отворен за",
    "about.f.open.v": "Пракса · freelance · работни позиции",

    "stack.eyebrow": "Технологии",
    "stack.title.a": "Алатки што ги користам.",
    "stack.title.b": "",
    "stack.desc":
      "Стек што го користам низ студиите, личните проекти и клиентската работа.",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.databases": "Бази на податоци",
    "stack.tools": "Алатки / DevOps",
    "stack.languages": "Програмски јазици",

    "proof.eyebrow": "Што носам",
    "proof.title.a": "Доказ наместо ",
    "proof.title.b": "ветувања.",
    "proof.1.t": "Реални, пуштени проекти",
    "proof.1.b":
      "Живи бизнис сајтови во продукција, не туторијал клонови. Секој проект овде можеш да го отвориш токму сега.",
    "proof.2.t": "Тимски градени системи",
    "proof.2.b":
      "Имам работено во колаборативни кодбази — микросервиси, гранки, код-ревју, деплојмент — не само соло експерименти.",
    "proof.3.t": "Двете страни на стекот",
    "proof.3.b":
      "Комотен сум од frontend занает и UI полирање до backend сервиси, податоци и Docker деплојмент.",
    "proof.4.t": "Учам брзо и пуштам",
    "proof.4.b":
      "Се движам брзо, ги земам критиките сериозно и ја кревам летвата на секој нареден проект.",

    "contact.badge": "Отворен за можности",
    "contact.title.a": "Ајде да изградиме ",
    "contact.title.b": "нешто",
    "contact.title.c": "вредно за пуштање.",
    "contact.desc":
      "Вработување, freelance проекти или само добра идеја — би сакал да чујам. Најбрзиот начин да ме контактираш е преку email.",
    "contact.copy": "Копирај",
    "contact.copied": "Копирано",

    "footer.role": "Студент по Софтверско Инженерство · ФИНКИ",
    "footer.rights": "Дизајнирано и изградено со грижа.",

    "p.crypto.cat": "Инженерство · Микросервиси",
    "p.crypto.sum":
      "Колаборативна аналитичка платформа што собира историски крипто податоци, визуелизира пазарни трендови и извлекува статистички увиди преку модуларна микросервис архитектура.",
    "p.crypto.role":
      "Full-stack инженер — сервиси, податочен пајплајн, графикони, деплојмент",

    "p.bakery.cat": "Клиентска работа · Локален бренд",
    "p.bakery.sum":
      "Полиран сајт за локална пекара. Чиста frontend изведба, рафинирана типографија и топол визуелен идентитет што се чувствува осмислен од почеток до крај.",
    "p.bakery.role":
      "Дизајнер и frontend девелопер — пуштен и жив",

    "p.fitness.cat": "Клиентска работа · Фитнес бренд",
    "p.fitness.sum":
      "Модерен, продукциски подготвен сајт за фитнес бизнис. Силна визуелна презентација, јасен бренд глас и frontend занает наштиман за перформанси.",
    "p.fitness.role":
      "Дизајнер и frontend девелопер — пуштен и жив",
  },
} as const;

export type TKey = keyof typeof dict.en;

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const l = (localStorage.getItem("lt-lang") as Lang) || "en";
      const t = (localStorage.getItem("lt-theme") as Theme) || "dark";
      setLangState(l);
      setThemeState(t);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("lt-theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lt-lang", lang);
    } catch {}
  }, [lang]);

  const t = (k: TKey) => dict[lang][k] ?? dict.en[k] ?? k;

  return (
    <AppCtx.Provider
      value={{ lang, setLang: setLangState, theme, setTheme: setThemeState, t }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
