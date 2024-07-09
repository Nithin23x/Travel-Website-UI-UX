
const Button = ({type,title,icon,variant}) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full ${variant}`} >
        {icon && <img src={icon} alt="title" height={25} width={25} />}
        <label className="bold-16 whitespace-nowrap" > {title} </label>
    </button>
  )
}

export default Button