import { useTranslation } from "react-i18next";

type UsernameSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function UsernameSearch({
  value,
  onChange,
  onSubmit,
}: UsernameSearchProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center px-4">
      <div className="relative w-full max-w-2xl group">
        <input
          type="text"
          placeholder={t("username.placeholder.enterUsername", {
            defaultValue: "Enter username...",
          })}
          value={value}
          onChange={(e) => {
            console.log(t("log.typing"), e.target.value);
            onChange(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && onSubmit()}
          className="
            w-full
            rounded-2xl
            border-2 border-orange-200
            bg-white
            px-8 py-6
            text-2xl font-medium     /* Très lisible */
            text-center
            placeholder:text-gray-300
            outline-none
            transition-all duration-300
            focus:border-orange-500
            focus:ring-8 focus:ring-orange-500/10
            shadow-xl shadow-orange-900/5
          "
        />
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs text-gray-400 uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">
          Press Enter to search
        </div>
      </div>
    </div>
  );
}
