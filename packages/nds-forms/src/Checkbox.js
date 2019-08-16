import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../scss/checkbox.scss";

export const Checkbox = props => {
	const { error, inline, name, label, value, ...rest } = props;
	const unique = name + "_" + value;
	const classNames = classnames({
		checkbox: true,
		"checkbox--inline": inline,
		"checkbox--error": error
	});
	return (
		<div className={classNames}>
			<input
				type="checkbox"
				className="checkbox__input"
				id={unique}
				name={name}
				value={value}
				{...rest}
			/>
			<label className="checkbox__label" htmlFor={unique}>
				{label}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	name: PropTypes.string,
	label: PropTypes.node.isRequired,
	value: PropTypes.string.isRequired,
	unique: PropTypes.string.isRequired,
	inline: PropTypes.bool,
	error: PropTypes.bool
};

export default Checkbox;