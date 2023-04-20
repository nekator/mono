import { useState } from 'react';
import {
	DBButton,
	DBInput,
	DBRadio,
	DBCheckbox
} from '../../../../../output/react/src';

const FormComponent = () => {
	const [input, setInput] = useState('');
	const [radio, setRadio] = useState('');
	const [checkbox, setCheckbox] = useState('');

	return (
		<div className="form-container">
			<div>
				<form>
					<fieldset>
						<p>DbInput:</p>
						<DBInput
							label="Textinput"
							placeholder="Placeholder"
							description="Description"
							icon="edit"
							name="input-name"
							onChange={(event) => {
								setInput(event.target.value);
							}}
							className="fullWidth"
						/>
						<p>DbRadio:</p>
						<ul>
							{['X', 'Y', 'Z'].map((radioName) => (
								<li key={radioName}>
									<DBRadio
										name="radio-group"
										onChange={() => {
											setRadio(radioName);
										}}>
										Radio {radioName}
									</DBRadio>
								</li>
							))}
						</ul>
						<p>DBCheckbox:</p>
						<DBCheckbox
							name="checkbox"
							value="Checkbox checked"
							onChange={(event) => {
								setCheckbox(event.target.checked);
							}}>
							Checkbox
						</DBCheckbox>
						<p>DbButton:</p>
						<DBButton
							type="button"
							variant="primary"
							onClick={(_) => {
								// eslint-disable-next-line no-alert
								alert(
									JSON.stringify({
										input,
										radio,
										checkbox
									})
								);
							}}>
							Hi from Showcase!
						</DBButton>
					</fieldset>
				</form>
			</div>
			<div>
				<h2>Output</h2>
				<dl>
					<dt>inputs value</dt>
					<dd>{input || 'No Input set'}</dd>
					<dt>radio value</dt>
					<dd>{radio || 'No radio set'}</dd>
					<dt>checkboxes values</dt>
					<dd>{`Checkbox ${checkbox ? '' : 'un'}checked`}</dd>
				</dl>
			</div>
		</div>
	);
};

export default FormComponent;
