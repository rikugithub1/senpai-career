import { T } from "../providers/LanguageProvider";
import Icon from "../shared/Icon";

interface AuthSidePanelProps {
  type: "community" | "business" | "obog";
}

const contentMap = {
  community: {
    icon: "graduation-cap",
    title: { ja: "先輩があなたを待っています", en: "Your senpai are waiting for you" },
    subtitle: { ja: "先輩とつながり、キャリアの扉を開こう", en: "Connect with senpai and unlock your career" },
    points: [
      { ja: "OB/OG訪問を簡単に予約", en: "Book OB visits easily" },
      { ja: "業界のリアルを知る", en: "Learn industry insights" },
      { ja: "完全無料で利用可能", en: "100% free to use" },
    ],
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
  },
  business: {
    icon: "building-2",
    title: { ja: "優秀な人材を、ここから", en: "Find top talent, right here" },
    subtitle: { ja: "留学生との自然な接点を創出", en: "Create natural connections with international students" },
    points: [
      { ja: "採用パイプラインを構築", en: "Build recruitment pipeline" },
      { ja: "東大・慶應・早稲田の学生", en: "Students from top universities" },
      { ja: "効率的な候補者管理", en: "Efficient candidate management" },
    ],
    gradient: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
  },
  obog: {
    icon: "book-open",
    title: { ja: "後輩のキャリアを応援しよう", en: "Support the next generation's careers" },
    subtitle: { ja: "あなたの経験が、後輩の未来を照らす", en: "Your experience lights the path for juniors" },
    points: [
      { ja: "訪問リクエストを簡単管理", en: "Manage visit requests easily" },
      { ja: "スケジュールを柔軟に設定", en: "Set your schedule flexibly" },
      { ja: "完全無料で利用可能", en: "100% free to use" },
    ],
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
  },
};

/**
 * Auth Side Panel Component
 *
 * Split-screen brand panel for login/signup pages
 * - Community: Warm teal gradient with student-friendly messaging
 * - Business: Deep navy gradient with professional messaging
 * - OB/OG: Amber/gold gradient with alumni messaging
 */
export default function AuthSidePanel({ type }: AuthSidePanelProps) {
  const content = contentMap[type];
  const gradientColor = content.gradient;

  return (
    <div
      className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 text-white"
      style={{ background: gradientColor }}
    >
      {/* Icon */}
      <div className="mb-6">
        <Icon name={content.icon} size={48} />
      </div>

      {/* Title */}
      <h2 className="mb-3 text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
        <T ja={content.title.ja} en={content.title.en} />
      </h2>

      {/* Subtitle */}
      <p className="mb-8 text-lg opacity-90">
        <T ja={content.subtitle.ja} en={content.subtitle.en} />
      </p>

      {/* Feature Points */}
      <div className="flex flex-col gap-4">
        {content.points.map((point, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white bg-opacity-20">
              <Icon name="check" size={16} />
            </div>
            <span className="text-base">
              <T ja={point.ja} en={point.en} />
            </span>
          </div>
        ))}
      </div>

      {/* Decorative Element */}
      <div className="mt-12 flex gap-2 opacity-50">
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white opacity-60"></div>
        <div className="h-2 w-2 rounded-full bg-white opacity-30"></div>
      </div>
    </div>
  );
}
