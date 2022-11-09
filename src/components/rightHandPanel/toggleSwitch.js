import "./toggleSwitch.css";

const ToggleSwitch = ({ label, boolVal, register4NewEntry }) => {
return (
	<div className="container">
        {/* {label}{" "} */}
        <div className="toggle-switch">
            <input type="checkbox" className="checkbox"
                name={label} id={label} defaultChecked={boolVal}
                {...register4NewEntry(label, { required: false })}/>
            <label className="label" htmlFor={label}>
                <span className="inner" />
                <span className="switch" />
            </label>
        </div>
	</div>
);
};

export default ToggleSwitch;
