export const Logo = ({
  imgClassName = "h-8 w-8 rounded-md object-cover",
  containerClass = "flex items-center gap-2",
  text = "IIICRowd",
  textClassName = "text-lg font-semibold text-current",
}: {
  imgClassName?: string;
  containerClass?: string;
  text?: string;
  textClassName?: string;
}) => (
  <div className={containerClass}>
    <img src="/logo.svg" alt="iCrowd logo" className={imgClassName} />
    <span className={textClassName}>{text}</span>
  </div>
);
