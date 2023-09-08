const MenuItem = ({ item }) => {
    return (
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={item.image} alt="" style={{ width: 80 + 'px' }} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{item.name}</span>
                        <span className={((item.veg) ? "text-success" : "text-danger") + " fst-italic"}>
                            {(item.veg) ? (<i className="fas fa-leaf"></i>) : (<i className="fas fa-drumstick-bite"></i>)}
                        </span>
                        <span className="text-primary">{item.price}</span>
                    </h5>
                    <small className="fst-italic">{item.description}</small>
                </div>
            </div>
        </div>
    )
}
export default MenuItem;