import "./cardProjects.scss"
export const CardProjects = ({img , title, description}) => {
    return (
        <div>
            <div className="cardProjects">
                <img src={img} alt="" />
                <h4>{title}</h4>
                <p>{description}</p>

            </div>
        </div>
    )
}
