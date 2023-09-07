const Service = ({ data }) => {
    return (
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                    <i className={"fa fa-3x text-primary mb-4 " + data.icon}></i>
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Service;