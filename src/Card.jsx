function Card(props){
    let pContent = ["Single User", "50GB Storage", "Unlimited Public Projects", "Community Access",
"Unlimited Private Projects",  "Dedicated Phone Support", "Free Sub-domain"];
    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card">
                <div className="card-header text-center">
                    <span className="fw-bold opacity-25">{props.name.type}</span>
                    <h2>${props.name.rate}/month</h2>
                </div>
                <div className="card-body">
                {props.name.icon.map((iconClass, index) => (
                    <p key={index} className={`card-text ${iconClass.includes('fa-xmark') ? 'opacity-25' : ''}`}>
                    <i className={`${iconClass}`}></i> {index === 7 ? 'Monthly Status Reports' : pContent[index]}
                    </p>
                ))}
                    
                    <div className="d-flex justify-content-center">
                        <a href="#" className="w-100 btn btn-primary text-uppercase fw-bold py-3">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

{/* <p className="card-text"><i className={`${props.name.icon[0]}`}></i> Single User</p>
<p className="card-text"><i className={`${props.name.icon[1]}`}></i> 50GB Storage</p>
<p className="card-text"><i className={`${props.name.icon[2]}`}></i> Unlimited Public Projects</p>
<p className="card-text"><i className={`${props.name.icon[3]}`}></i> Community Access</p>
<p className="card-text"><i className={`${props.name.icon[4]}`}></i> Unlimited Private Projects</p>
<p className="card-text"><i className={`${props.name.icon[5]}`}></i> Dedicated Phone Support</p>
<p className="card-text"><i className={`${props.name.icon[6]}`}></i> Free Sub-domain</p>
<p className="card-text"><i className={`${props.name.icon[7]}`}></i> Monthly Status Reports</p> */}