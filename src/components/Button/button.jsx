const Button2 = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-3 
          rounded-full border ${variant} ${full && "w-full"}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={18} height={18} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button2;
